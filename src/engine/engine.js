(function umd(root, factory) {
    root.GameWorld = factory(window, document);
}(this, function(w, d) {

    function RenderManager() {
        var lastTime_ = new Date().getTime();
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
            w.requestAnimationFrame = w[vendors[x]+'RequestAnimationFrame'];
            w.cancelAnimationFrame = 
            w[vendors[x]+'CancelAnimationFrame'] || w[vendors[x]+'CancelRequestAnimationFrame'];
        }
    
        w.requestAnimationFrame = w.requestAnimationFrame || function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime_));
            var id = w.setTimeout(function() { callback(currTime + timeToCall); }, 
                timeToCall);
                lastTime_ = currTime + timeToCall;
            return id;
        }
    
        w.cancelAnimationFrame = w.cancelAnimationFrame || function(id) {
            clearTimeout(id);
        };

        var self = this;
        var renderObj_;
        var maxTime_ = 1/30;
        var lastRenderTime_ = new Date().getTime();
        function start() { 
            var curTime = new Date().getTime();
            renderObj_ = requestAnimationFrame(start);
            var dt = (curTime - lastRenderTime_)/1000;
            if(dt > maxTime_) { dt = maxTime_; }
            GameWorld.clean();
            self.action('update', dt);
            GameWorld.finally();
            self.action('paint', ctx_);
            lastRenderTime_ = curTime;
        };
        this.start = start;
        this.stop = function() {
            if (!renderObj_) return;
            cancelAnimationFrame(renderObj_);
            renderObj_ = undefined;
        }

        var layers_ = [];
        var lastLayer = 0;
        this.push = function(idx, obj) {
            if ('number' !== typeof idx) {
                obj = idx;
                idx = lastLayer;
            }
            var layer = layers_[idx];
            if (!layer) {
                layers_[idx] = layer = [];
            }
            layer.push(obj);
            return idx;
        },
        this.action = function(funcName, param) {
            for(var i = 0, n = layers_.length; i < n; ++i) {
                var each = layers_[i];
                if (!each) continue;
                for(var j = 0, m = each.length; j < m; ++j) {
                    each[j][funcName](param);
                }
            }
        },
        this.remove = function(obj) {
            for(var i=0, n=layers_.length; i < n; ++i) {
                var layer = layers_[i];
                if (!layer || 0 === layer.length) continue;
                var idx = layer.indexOf(obj);
                if (~idx) {
                    layer.splice(idx, 1);
                    break;
                }
            }
        }
    } 

    function InputManager() {
        var self = this;
        this.pointer  = {  pos:null, click: false, leftButton: false, rightButton: false, middleButton: false };
        this.elem  = null;

        var buttons = ['leftButton', 'middleButton', 'rightButton'];

        function onClickMouse(val, ev) {
            var button = buttons[ev.button]
            button && (self.pointer[button] = val);
            self.pointer.click = val;
        }

        this.bind = function(elem) {
            if (this.elem) throw new Error('InputManager already binded');

            this.elem = elem;

            elem.addEventListener("mousemove", function(ev) {
                self.pointer.pos = { x: ev.offsetX, y: ev.offsetY };
            });
            elem.addEventListener("mousedown", onClickMouse.bind(this, true));
            elem.addEventListener("mouseup", onClickMouse.bind(this, false));
        }
        
    }

    function EventManager() {
        if  ( 'function' !== typeof window.CustomEvent) {
            window.CustomEvent = function(event, params) {
                params = Object.assign({ bubbles:false, cancelable: false, detail:null }, params || {});
                var  ret = document.createEvent('CustomEvent');
                ret.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return ret;
            }
        }

        var self = this;

        function detailHandler(ev, next) {
            return next(ev.detail);
        }

        this.bind = function(elem)  {
            if (this.elem) throw new Error('EventManager already binded.');
            this.elem = elem;
        }
        this.on = function(event, handler) {
            self.elem && self.elem.addEventListener(event, handler);
        }
        this.off = function(event, handler) {
            self.elem && self.elem.removeEventListener(event, handler);
        }
        this.emit = function(event, detail) {
            self.elem && self.elem.dispatchEvent(new CustomEvent(event, { detail: detail }));
        }
    }

    function readonly(value) {
        return {
            enumerable: false,
            configurable: false,
            writable: false,
            value: value,
        }
    }

    var render_ = new RenderManager;
    var input_ = new InputManager;
    var event_ = new EventManager;

    var canvas_ = null;
    var ctx_ = null;
    let removed_ = [];
    var lastId_ = 0;
    
    var entityProto = {
        created(ctx) {
        },
        destoryed() {
        },
        update(dt) {
        },
        paint(ctx) {
        },
        collide() {
            return false;
        },
        delete: function() {
            GameWorld.delete(this);
        },
    };

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

    function isUndef(obj) { return undefined === obj || null == obj; }


    return {
        initialize: function(canvasId, startup) {
            if (canvas_) return;
            canvas_ = d.getElementById(canvasId);
            if (!canvas_) return alert('Cannot found canvas');

            input_.bind(canvas_);
            event_.bind(canvas_);
            this.width = canvas_.width;
            this.height= canvas_.height;
            ctx_ = canvas_.getContext && canvas_.getContext('2d');
            render_.action('setup');
            render_.start();
            'function' === typeof startup && startup();
        },
        Entity: function(type, proto, opts) {
            if (!type) return;
            opts = opts || {};
            Object.setPrototypeOf(proto, entityProto);
            var layer = opts.layer;
            this.Entity[type] = function(props) {
                Object.setPrototypeOf(this, proto);
                Object.defineProperty(this, 'type', readonly(type.toLocaleLowerCase()));
                Object.defineProperty(this, 'super', readonly(entityProto));
                Object.defineProperty(this, 'id', readonly(++lastId_));
                Object.assign(this, props);
                this.layer_ = isUndef(layer) ? render_.push(this) : render_.push(layer, this);
                this.created(props);
            }
        },
        Pointer: input_.pointer,
        clean: function() {
            if (!ctx_) return;
            ctx_.save();
            ctx_.setTransform(1, 0, 0, 1, 0, 0)
            ctx_.clearRect(0, 0, GameWorld.width, GameWorld.height);
            ctx_.restore();
        },
        delete: function(obj) {
            if (~removed_.indexOf(obj)) return false;
            removed_.push(obj);
            return true;
        },
        finally: function() {
            removed_.forEach(each=>render_.remove(each));
            removed_ = [];
        },
        createPattern: function (size, lines, type, lineColor1, lineColor2) {
            if (!ctx_) return null;
            size = size || 50;
            lines = lines || 10;
            type = type || 1;
            lineColor1 = lineColor1 || "red";
            lineColor2 = lineColor2 || "yellow";
            const patternCanvas = document.createElement("canvas");
            const patternContext = patternCanvas.getContext("2d");
            patternCanvas.width = patternCanvas.height = size;
            patternContext.lineCap = "square";
            patternContext.lineWidth = size / lines;
    
            var drawLine;
            if (1 === type) {
                drawLine = function (to) {
                patternContext.moveTo(0, to);
                patternContext.lineTo(size, to);
                };
            } else if (2 === type) {
                drawLine = function (to) {
                patternContext.moveTo(to, 0);
                patternContext.lineTo(to, size);
                };
            } else if (3 === type) {
                lines = (lines << 1) + 1;
                drawLine = function (to) {
                patternContext.moveTo(to - size, 0);
                patternContext.lineTo(to, size);
                };
            } else if (4 === type) {
                lines = (lines << 1) + 1;
                drawLine = function (to) {
                patternContext.moveTo(to, 0);
                patternContext.lineTo(0, to);
                };
            } else {
                return;
            }
    
            const width = patternContext.lineWidth / 2;
            for (var i = 0; i < lines; ++i) {
                patternContext.beginPath();
                patternContext.strokeStyle = i % 2 ? lineColor1 : lineColor2;
                drawLine(i * patternContext.lineWidth + width);
                patternContext.stroke();
            }
    
            return ctx_.createPattern(patternCanvas, "repeat");
        },
        on: event_.on,
        off: event_.off,
        emit: event_.emit,
        // on: function(eventId, handler) {
        //     canvas_.addEventListener(eventId, handler);
        // },
        // off: function(eventId, handler) {
        //     canvas_.removeEventListener(eventId, handler);
        // },
        // emit: function(eventId, detail) {
        //     canvas_.eventDispatch(new CustomEvent(eventId, { detail: detail }));
        // }
    }
}));
