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

    function SpriteMixin() {
      this.draw = function(ctx, id, x, y) {
        if (!this.image) return;
        let map = this.map[id];
        if (!map) return;
        frame = frame || 0;
        ctx.drawImage(this.image, map.x + frame * map.width, map.y, map.width, map.height, Math.floor(x), Math.floor(y), map.width, map.height);
      }
    }

    class Atlas {
      constructor(atlas, image) {
        this.atlas = atlas;
        this.image = image; 
      }

      draw (ctx, id, x, y, frame) {
        let map = this.atlas.region[id][0];
        if (!map || !this.image) return;

        let size = map.size;
        let angle = 0;
        if (map.rotate) {
          size = [map.size[1], map.size[0]];
          angle = 90;
          let diff = (size[0] - size[1]) >> 1;
          x -= diff;
          y -= diff;
        }

        ctx.save();
        
        ctx.setTransform(1, 0, 0, 1, map.offset[0], map.offset[1]);
        angle && rotate(ctx, { x: x + (map.size[0] >> 1), y: y + (map.size[1] >> 1) }, GameUtils.degree2radian(angle));
        ctx.drawImage(
          this.image,
          map.xy[0],
          map.xy[1],
          size[0],
          size[1],
          Math.floor(x),
          Math.floor(y),
          size[0],
          size[1]);
        //rect(ctx, {x:x, y:y}, size[0], size[1]);
        
        ctx.restore();
      }

      regionOf(id) {
        let ret = this.atlas.region[id];
        return 1 === ret.length ? ret[0] : ret;
      }
    }

    function cirlce(ctx, pt, radius, opt) {
      opt = Object.assign({ begin: 0, end: 2, radius: radius || 20, width: 1, lineDash: [], strokeStyle: "#999"}, opt);
      rollback(ctx, function() {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, opt.radius, Math.PI * opt.begin, Math.PI * opt.end)
          applyDefaultStyle(ctx, opt);
          opt.fillStyle ? ctx.fill() : ctx.stroke();
      });
    }

    function line (ctx, p0, p1, opt) {
      opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
      rollback(ctx, function() {
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          applyDefaultStyle(ctx, opt);
          ctx.stroke();
      });
    }

    function rect (ctx, pt, w, h, opt) {
      opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
      rollback(ctx, function() {
          ctx.beginPath();
          applyDefaultStyle(ctx, opt);
          ctx.rect(pt.x, pt.y, w, h);
          opt.fillStyle ? ctx.fill() : ctx.stroke();
      });
    }

    function fillRect(ctx, pt, w, h, opt) {
      opt = Object.assign({ width: 1, lineDash: [], fillStyle: "#999" }, opt);
      rollback(ctx, function() {
          ctx.beginPath();
          applyDefaultStyle(ctx, opt);
          ctx.fillRect(pt.x, pt.y, w, h);
      });
    }

    function diamond(ctx, pt, w, h,opt) {
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
    }

    function text(ctx, pt, str, opt) {
      // font: 12px serif, 10px sans-serif
      // textBaseline: top, hanging, middle, alphabetic(default), ideographic, bottom
      opt = Object.assign({ font: '11px sans-serif', textAlign: 'left', fillStyle: "#ccc" }, opt);
      rollback(ctx, function() {
          applyDefaultStyle(ctx, opt);
          ctx.fillText(str, pt.x, pt.y);
      });
    }

    function rotate(ctx, center, radian) {
      ctx.translate(center.x, center.y);
      ctx.rotate(radian);
      ctx.translate(-center.x, -center.y);
    }

    function angle(pt0, pt1) {
      return Math.atan2(pt1.y - pt0.y, pt1.x - pt0.x);
    }

    function fract(val) {
      // var ret = val - Math.floor(val);
      var ret = val % 1; // 조금 더 빠름
      return 0 > ret ? 1 + ret : ret;
    }

    function dot(x0, y0, x1, y1) {
      return x0 * x1 + y0 * y1;
    }

    function mix(l, r, f) {
      return l * (1 - f) + r * f;
    }

    function clamp(val, minVal, maxVal) {
      if (val > maxVal) return maxVal;
      if (val < minVal) return minVal;
      return val;
      //return Math.min(Math.max(val, minVal), maxVal);
    }

    function smoothstep(l, r, f) {
      var t = this.clamp((f-l)/(r-l), 0.0, 1.0);
      return t * t * (3.0 - 2.0 * t);
    }

    function loadImage(src, next) {
      var image = new Image();
      image.onload = function() {
        next && next(image);
      };
      image.src = src;

      return image;
    }

    function loadSprite(src, mapData, next) {
      var ret = { map: mapData || {} };
      loadImage(src, function(img) {
        ret.image = img;
        next && next(ret);
      });
      SpriteMixin.call(ret);

      return ret;
    }

    function loadAtlas(atlasData) {
      return new Promise((resolve) => {
        loadImage(atlasData.name, function(img) {
          resolve(new Atlas(atlasData, img));
        });
      });
    }

    function loadAtlasByUrl(strUrl, next) {
      return readTextByUrl(strUrl)
      .then((res) => {
        let rawAtlas = parseAtlas(res);
        console.log('> rawAtlas:', rawAtlas);
        return loadAtlas(rawAtlas);
      });
    }

    function parseAtlas(str) {
      let ret = {region: {}};
        
      let lines = str.split('\n');
      let i = 0;
      let n = lines.length;
      if (!lines[i].trim()) ++i;

      ret.name = lines[i++].trim();
      for (;i<n; ++i) {
        if (!parseAtlasKeyValue(ret, lines[i])) break;
      }

      let region = null;
      for(;i<n; ++i) {
        let line = lines[i];
        if (' ' === line.charAt(0)) {
          parseAtlasKeyValue(region, line);
        } else {
          var name = line.trim();
          if (name) {
            if (!ret.region[name]) {
              ret.region[name] = [];
            }
            ret.region[name].push(region = {});
          }
        }
      }
      Object.values(ret.region).forEach((it)=>{
        it.sort((l,r)=>(l.index - r.index))
      });

      return ret;
    }

    function parseAtlasKeyValue(obj, line) {
      let ret = line.split(':');
      if (!ret || 2 > ret.length) return false;
      let key = ret[0].trim();
      let value;
      if ('index' === key) {
        value = Number(ret[1]);
      } else {
        let values = ret[1].split(',');
        for (let i=0; i< values.length; ++i) {
          let val = Number(values[i]);
          if (isNaN(val)) {
            val = values[i].trim();
            switch(val) {
              case 'true': val = true; break;
              case 'none':
              case 'false': val = false; break;
              default: break;
            }
          }
          values[i] = val;
        }
        value = 1 === values.length ? values[0] : values;
      }
      obj[key] = value;
      return true;
    }

    function forEach(array, iterate) {
      if (!array) return;
      if (Array.isArray(array)) {
        return array.forEach(iterate);
      }
      if (array.hasOwnProperty(Symbol.iterator)) {
        let it = array[Symbol.iterator];
        for (let val; val; val = it.next()) {
          iterator(val);
        }
      }

      for (let k in array) {
        iterator(k);
      }
    }

    function readTextByUrl(src) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', src);
        xhr.onreadystatechange = function() {
          if ( 4 !== xhr.readyState ) return;
          if ( 200 <= xhr.status && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error({ status:xhr.status, message: xhr.message }));
          }
        };
        xhr.send(null);
      });
    }

    function degree2radian(degree) {
      return degree * Math.PI / 180;
    }

    function clearRect(ctx, pt, w, h) {
      ctx.clearRect(pt.x-1, pt.y-1, w+2, h+2);
    }

    return {
        Heap,
        line,
        rect,
        fillRect,
        diamond,
        text,
        clearRect,
        rotate,
        angle,
        fract,
        dot,
        mix,
        clamp,
        smoothstep,
        searchAStar,
        searchSimple,
        loadImage,
        loadSprite,
        loadAtlas,
        loadAtlasByUrl,
        readTextByUrl,
        degree2radian,
        forEach,
    };
}));
