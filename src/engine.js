const Game = (function(w, d) {
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
    var width = null;
    var height = null;
    var ctx = null;
    var planes = [];
    var lastTime = new Date().getTime();
    var maxTime = 1/30;
  
    function render() { 
        var curTime = new Date().getTime();
        requestAnimationFrame(render);
        var dt = (curTime - lastTime)/1000;
        if(dt > maxTime) { dt = maxTime; }

        for(var i=0, n=planes.length; i<n; i++) {
            if(!planes[i]) continue;
            planes[i].step && planes[i].step(dt);
            planes[i].draw && planes[i].draw(ctx);
        }
        lastTime = curTime;
    }

    function GameObject(pt, w, h, opts) { 
        this.point = pt || {x: width >> 1, y: height >> 1};
        this.point.x += 0.5;
        this.point.y += 0.5;
        this.width = w || 10;
        this.height = h || 10;
        this.options = opts;
    }

    Object.assign(GameObject.prototype, {
        draw: function(ctx) {
            this.rect(this.point, this.width, this.height);
        },
        clean: function() {
            this.clearRect(this.point, this.width, this.height);
        },
        step: function(dt) {
        },
        circle: function(pt, radius, opt) {
            if (!ctx) return;
            opt = Object.assign({ begin: 0, end: 2, radius: radius || 20, width: 1, lineDash: [], strokeStyle: "#999"}, opt);
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, opt.radius, Math.PI * opt.begin, Math.PI * opt.end)
            applyDefaultStyle(opt);
            ctx.stroke();
        },
        line: function(p0, p1, opt) {
            if (!ctx) return;
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            applyDefaultStyle(opt);
            ctx.stroke();
        },
        rect: function(pt, w, h, opt) {
            if (!ctx) return;
            opt = Object.assign({ width: 1, lineDash: [], strokeStyle: "#999" }, opt);
            ctx.beginPath();
            ctx.rect(pt.x, pt.y, w, h);
            applyDefaultStyle(opt);
            ctx.stroke();
        },
        clearRect: function(pt, w, h) {
            if (!ctx) return;
            ctx.clearRect(pt.x-1, pt.y-1, w+2, h+2);
        },
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

    function applyDefaultStyle(opt) {
        ctx.strokeStyle = opt.strokeStyle;
        ctx.setLineDash(opt.lineDash);
        ctx.lineWidth = opt.width;
    }

    return {
        initialize: function(canvasId) {
            if (canvas) return;
            canvas = d.getElementById(canvasId);
            if (!canvas) return alert('Cannot found canvas');
            width = canvas.width;
            height= canvas.height;
            ctx = canvas.getContext && canvas.getContext('2d');
            render();
        },
        newObject(pt, w, h, opt) {
            if (!ctx) return null;
            var ret = new GameObject(pt, w, h, opt);
            ret.idx = planes.length;
            planes.push(ret);

            return ret;
        },
        
    }
 }(window, document));