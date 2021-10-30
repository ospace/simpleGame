(function umd(root, factory) {
    root.GameUtils = factory(window, document);
}(this, function(w, d) {
    const ctxAttrs = ['strokeStyle', 'fillStyle', 'lineWidth', 'lineCap', 'font', 'textAlign', 'textBaseline'];
    function applyDefaultStyle(ctx, opt) {
        ctxAttrs.forEach(function(attr) { ctx[attr] = opt[attr] });
        opt.lineDash && ctx.setLineDash(opt.lineDash);
    }

    function Heap(compare) {
        this.data = [];
        this.compare =
          compare ||
          function (p, c) {
            return p < c;
          };
    }
    Object.assign(Heap.prototype, {
        push: function (val) {
            let c = this.data.length + 1;
            this.data.push(val);
            while (1 < c) {
            let p = c >> 1;
            if (this.compare(this.at(p), this.at(c))) break;
            this.swap(p, c);
            c = p;
            }
        },
        pop: function () {
            if (0 === this.data.length) return undefined;
            let ret = this.data[0];
            let lastValue = this.data.pop();
            let lastIdx = this.data.length;
            if (0 < lastIdx) {
            this.data[0] = lastValue;
            let p = 1,
                c = 0;
            while (p < lastIdx) {
                c = p << 1;
                if (c > lastIdx) break;
                if (c < lastIdx) {
                c = this.compare(this.at(c), this.at(c + 1)) ? c : c + 1;
                }
                if (this.compare(this.at(p), this.at(c))) break;
                this.swap(p, c);
                p = c;
            }
            }
            return ret;
        },
        clear: function () {
            this.data = [];
        },
        swap: function (l, r) {
            let tmp = this.data[l - 1];
            this.data[l - 1] = this.data[r - 1];
            this.data[r - 1] = tmp;
        },
        at: function (idx) {
            return this.data[idx - 1];
        },
    });

    function rollback(ctx, action) {
        ctx.save();
        action();
        ctx.restore();
    }

    function indexOf(pt, width) {
        return pt.y * width + pt.x;
    }

    function searchAStar(entry, exits, width, height, isPassable) {
        var working = new Heap(function (l, r) {
          return l.f < r.f;
        });
        var visitedIdx = [];
        var indes = [];
        var done;
        
        function h(pt) {
          var ret = exits.map(function (it) {
            return Math.abs(it.x - pt.x) + Math.abs(it.y - pt.y);
          });
          return Math.min.apply(null, ret);
        }
        var existIdxs = exits.map(function (it) {
          return indexOf(it, width);
        });
        var start = Object.assign({}, entry, {
          index: indexOf(entry, width),
          g: 0,
          order: 0,
          h: h(entry),
        });
        working.push(start);
        var n;
        while ((n = working.pop())) {
          if (visitedIdx[n.index]) continue;
          visitedIdx[n.index] = true;
          if (~existIdxs.indexOf(n.index)) {
            working.clear();
            done = n;
            break;
          }
          var list = [
            { x: n.x - 1, y: n.y },
            { x: n.x, y: n.y + 1 },
            { x: n.x, y: n.y - 1 },
            { x: n.x + 1, y: n.y },
          ];
          list.forEach(function (it) {
            it.index = indexOf(it, width);
          });
          list = list
            .filter(function (it) {
              return 0 <= it.x && 0 <= it.y && it.x < width && it.y < height;
            })
            .filter(function (it) {
              return !(
                isPassable(it.x, it.y) ||
                visitedIdx[it.index]
              );
            });
          list.forEach(function (it) {
            it.h = h(it);
            it.g = n.g + 1;
            it.f = it.h + it.g;
            it.parent = n;
            it.order = n.order + 1;
          });
          list.forEach(function (it) {
            var item = indes[it.index];
            if (!item || item.f > it.f) {
              indes[it.index] = it;
            }
            working.push(it);
          });
        }
        var ret = [];
        var next = done;
        while (next) {
          ret.unshift({ x: next.x, y: next.y, index: next.index });
          next = next.parent;
        }
        return ret;
    }

    function searchSimple(entry, exits, width, height, isPassable) {
      var working = [];
      var visitedIdx = [];

      var existIdxs = exits.map(function (it) {
        return indexOf(it, width);
      });

      var done;
      var n = {x:entry.x, y:entry.y, index: indexOf(entry, width), toString};
      function toString() { return `${this.index}(${this.x}, ${this.y})` }
      visitedIdx[n.index] = true;
      working.push(n);
      while(n = working.shift()) {
        if (~existIdxs.indexOf(n.index)) {
          done = n;
          break;
        }

        var list = [
          { x: n.x + 1, y: n.y, toString },
          { x: n.x - 1, y: n.y, toString },
          { x: n.x, y: n.y + 1, toString },
          { x: n.x, y: n.y - 1, toString },
        ];

        list.forEach(function (each) {
          each.index = indexOf(each, width);
        });

        list = list.filter(function (it) {
          return !(
            0 > it.x ||
            0 > it.y ||
            it.x > width ||
            it.y > height
          );
        }).filter(function (it) {
          return !visitedIdx[it.index] && isPassable(it.x, it.y);
        });

        list.forEach(function (it) {
          it.parent = n;
          working.push(it);
          visitedIdx[it.index] = true;
        });
      }

      var ret = [];
      var next = done;
      while (next) {
        ret.unshift({ x: next.x, y: next.y, index: next.index });
        next = next.parent;
      }
      return ret;
    }

    return {
        Heap: Heap,
        circle: function(ctx, pt, radius, opt) {
            opt = Object.assign({ begin: 0, end: 2, radius: radius || 20, width: 1, lineDash: [], strokeStyle: "#999"}, opt);
            rollback(ctx, function() {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, opt.radius, Math.PI * opt.begin, Math.PI * opt.end)
                applyDefaultStyle(ctx, opt);
                opt.fillStyle ? ctx.fill() : ctx.stroke();
            });
        },
        line: function(ctx, p0, p1, opt) {
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            rollback(ctx, function() {
                ctx.beginPath();
                ctx.moveTo(p0.x, p0.y);
                ctx.lineTo(p1.x, p1.y);
                applyDefaultStyle(ctx, opt);
                ctx.stroke();
            });
        },
        rect: function(ctx, pt, w, h, opt) {
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            rollback(ctx, function() {
                ctx.beginPath();
                applyDefaultStyle(ctx, opt);
                ctx.rect(pt.x, pt.y, w, h);
                opt.fillStyle ? ctx.fill() : ctx.stroke();
            });
        },
        fillRect: function(ctx, pt, w, h, opt) {
            opt = Object.assign({ width: 1, lineDash: [], fillStyle: "#999" }, opt);
            rollback(ctx, function() {
                ctx.beginPath();
                applyDefaultStyle(ctx, opt);
                ctx.fillRect(pt.x, pt.y, w, h);
            });
        },
        diamond: function(ctx, pt, w, h,opt) {
            rollback(ctx, function() {
                ctx.beginPath();
                applyDefaultStyle(ctx, opt);
                ctx.moveTo(pt.x, pt.y - h/2);
                ctx.lineTo(pt.x - w/2, pt.y);
                ctx.lineTo(pt.x, pt.y + h/2);
                ctx.lineTo(pt.x + w/2, pt.y);
                ctx.closePath();
                opt.fillStyle && ctx.fill();
            });
        },
        text: function(ctx, pt, str, opt) {
            // font: 12px serif, 10px sans-serif
            // textBaseline: top, hanging, middle, alphabetic(default), ideographic, bottom
            opt = Object.assign({ font: '11px sans-serif', textAlign: 'left', fillStyle: "#ccc" }, opt);
            rollback(ctx, function() {
                applyDefaultStyle(ctx, opt);
                ctx.fillText(str, pt.x, pt.y);
            });
        },
        measureText(str) {
            return ctx.measureText(str);
        },
        clearRect: function(ctx, pt, w, h) {
            ctx.clearRect(pt.x-1, pt.y-1, w+2, h+2);
        },
        rotate: function(ctx, center, radian) {
            ctx.translate(center.x, center.y);
            ctx.rotate(radian);
            ctx.translate(-center.x, -center.y);
        },
        angle: function(pt0, pt1) {
            return Math.atan2(pt1.y - pt0.y, pt1.x - pt0.x);
        },
        fract: function(val) {
            // var ret = val - Math.floor(val);
            var ret = val % 1; // 조금 더 빠름
            return 0 > ret ? 1 + ret : ret;
        },
        dot: function(x0, y0, x1, y1) {
            return x0 * x1 + y0 * y1;
        },
        mix: function(l, r, f) {
            return l * (1 - f) + r * f;
        },
        clamp: function(val, minVal, maxVal) {
            if (val > maxVal) return maxVal;
            if (val < minVal) return minVal;
            return val;
            //return Math.min(Math.max(val, minVal), maxVal);
        },
        smoothstep: function(l, r, f) {
            var t = this.clamp((f-l)/(r-l), 0.0, 1.0);
            return t * t * (3.0 - 2.0 * t);
        },
        searchAStar: searchAStar,
        searchSimple: searchSimple,
    };
}));
