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
          function (l, r) {
            return l - r;
          };
    }

    Object.assign(Heap.prototype, {
    push: function (val) {
        let idx = this.data.length + 1;
        this.data.push(val);
        while (1 < idx) {
        let p = idx >> 1;
        if (0 >= this.compare(this.data[p - 1], this.data[idx - 1])) break;
        this.swap(p - 1, idx - 1);
        idx = p;
        }
    },
    pop: function () {
        if (this.empty()) return undefined;
        let ret = this.data[0];
        let lastIdx = this.data.length - 1;
        let lastValue = this.data.pop();
        if (0 < lastIdx) {
        this.data[0] = lastValue;
        let id = 1,
            c = 0;
        while (id < lastIdx) {
            c = id << 1;
            if (c > lastIdx) break;
            if (c < lastIdx) {
            c =
                0 > this.compare(this.data[c - 1], this.data[c]) ? c : c + 1;
            }
            if (0 >= this.compare(this.data[id - 1], this.data[c - 1])) break;
            this.swap(id - 1, c - 1);
            id = c;
        }
        }
        return ret;
    },
    clear: function () {
        this.data = [];
    },
    swap: function (idx0, idx1) {
        let tmp = this.data[idx0];
        this.data[idx0] = this.data[idx1];
        this.data[idx1] = tmp;
    },
    empty: function () {
        return 0 === this.data.length;
    },
    });

    function rollback(ctx, action) {
        ctx.save();
        action();
        ctx.restore();
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
    };
}));
