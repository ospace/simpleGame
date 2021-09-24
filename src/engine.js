const GameWorld = (function(w, d) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
        w.requestAnimationFrame = w[vendors[x]+'RequestAnimationFrame'];
        w.cancelAnimationFrame = 
          w[vendors[x]+'CancelAnimationFrame'] || w[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    w.requestAnimationFrame = w.requestAnimationFrame || function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = w.setTimeout(function() { callback(currTime + timeToCall); }, 
            timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    }
 
    w.cancelAnimationFrame = w.cancelAnimationFrame || function(id) {
        clearTimeout(id);
    };

    var canvas = null;
    var ctx = null;
    var layers = [];
    var lastTime = new Date().getTime();
    var maxTime = 1/30;
  
    function render() { 
        var curTime = new Date().getTime();
        requestAnimationFrame(render);
        var dt = (curTime - lastTime)/1000;
        if(dt > maxTime) { dt = maxTime; }

        GameWorld.clean();
        layers.forEach(each=>each.step(dt));
        GameWorld.finally();
        layers.forEach(each=>each.draw(ctx));
        lastTime = curTime;
    }

    const drawFn = {
        circle:  function(pt, radius, opt) {
            if (!ctx) return;
            opt = Object.assign({ begin: 0, end: 2, radius: radius || 20, width: 1, lineDash: [], strokeStyle: "#999"}, opt);
            ctx.save();
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, opt.radius, Math.PI * opt.begin, Math.PI * opt.end)
            applyDefaultStyle(opt);
            opt.fillStyle ? ctx.fill() : ctx.stroke();
            ctx.restore();
        },
        line: function(p0, p1, opt) {
            if (!ctx) return;
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            applyDefaultStyle(opt);
            ctx.stroke();
            ctx.restore();
        },
        rect: function(pt, w, h, opt) {
            if (!ctx) return;
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            ctx.save();
            ctx.beginPath();
            ctx.rect(pt.x, pt.y, w, h);
            applyDefaultStyle(opt);
            opt.fillStyle ? ctx.fill() : ctx.stroke();
            ctx.restore();
        },
        text: function(pt, str, opt) {
            if (!ctx) return;
            // font: 12px serif, 10px sans-serif
            // textBaseline: top, hanging, middle, alphabetic(default), ideographic, bottom
            opt = Object.assign({ font: '10px sans-serif', textAlign: 'left', fillStyle: "#999" }, opt);
            applyDefaultStyle(opt);
            ctx.fillText(str, pt.x, pt.y);
        },
        measureText(str) {
            if (!ctx) return;
            return ctx.measureText(str);
        },
        clearRect: function(pt, w, h) {
            if (!ctx) return;
            ctx.clearRect(pt.x-1, pt.y-1, w+2, h+2);
        },
    };

    function GameObject(pt, w, h, opts) { 
        this.point = pt || {x: GameWorld.width >> 1, y: GameWorld.height >> 1};
        this.point.x += 0.5;
        this.point.y += 0.5;
        this.width = w || 10;
        this.height = h || 10;
        this.options = opts;
    }

    Object.assign(GameObject.prototype, drawFn, {
        draw: function(ctx) {
            this.rect(this.point, this.width, this.height);
        },
        step: function(dt) {
        },
        delete: function() {
            GameWorld.delete(this);
        }
    });

    function dist(p0, p1, p2) {
        var a = p2.y - p1.y;
        var b = p1.x - p2.x;
        return (
            Math.abs(a * p0.x + b * p0.y + p2.x * p1.y - p1.x * p2.y) /
            Math.sqrt(a * a + b * b)
        );
    }

    // # http://cykod.github.com/AlienInvasion/
    function overlap(o1,o2) {
        return !((o1.y+o1.h-1<o2.y) || (o1.y>o2.y+o2.h-1) ||
                 (o1.x+o1.w-1<o2.x) || (o1.x>o2.x+o2.w-1));
    };

    const ctxAttrs = ['strokeStyle', 'fillStyle', 'lineWidth', 'font', 'textAlign', 'textBaseline'];
    function applyDefaultStyle(opt) {
        ctxAttrs.forEach(function(attr) { ctx[attr] = opt[attr] });
        opt.lineDash && ctx.setLineDash(opt.lineDash);
    }

    let removed = [];
    return {
        initialize: function(canvasId) {
            if (canvas) return;
            canvas = d.getElementById(canvasId);
            if (!canvas) return alert('Cannot found canvas');
            this.width = canvas.width;
            this.height= canvas.height;
            ctx = canvas.getContext && canvas.getContext('2d');
            render();
        },
        newObject(pt, w, h, opt) {
            if (!ctx) return null;
            var ret = new GameObject(pt, w, h, opt);
            ret.idx = layers.length;
            layers.push(ret);

            return ret;
        },
        clean: function() {
            if (!ctx) return;
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.clearRect(0, 0, GameWorld.width, GameWorld.height);
            ctx.restore();
        },
        delete: function(obj) {
            if (~removed.indexOf(obj)) return false;
            removed.push(obj);
            return true;
        },
        finally: function() {
            removed.forEach(each=>{
                var idx = layers.indexOf(each);
                ~idx && layers.splice(idx, 1);
            });
            removed = [];
        },
    }
 }(window, document));