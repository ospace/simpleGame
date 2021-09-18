/*! For license information please see bundle.0c7a79.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {
        d: (n, e) => {
            for (var r in e) t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, {
                enumerable: !0,
                get: e[r]
            })
        }
    };
    t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n), t.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var n = {};
    t.r(n), t.d(n, {
        color: () => Jr,
        dispatch: () => nr,
        drag: () => Ho,
        geoConicEquidistant: () => la,
        geoEquirectangular: () => ua,
        geoGraticule: () => da,
        geoMollweide: () => Lu,
        geoOrthographic: () => ma,
        geoPath: () => hu,
        geoPatterson: () => nc,
        geoPolyhedralWaterman: () => il,
        geoStereographic: () => pu,
        geoWinkel3: () => fl,
        hsl: () => lo,
        interpolateBasis: () => dl,
        interpolateCubehelixDefault: () => Jl,
        interpolateHcl: () => _l,
        interpolateHsl: () => bl,
        interpolateLab: () => xl,
        interpolateRdGy: () => ns,
        interpolateRgb: () => Ml,
        interpolateYlOrRd: () => es,
        json: () => Il,
        lab: () => bo,
        pointer: () => Lo,
        pointers: () => rs,
        request: () => $l,
        rgb: () => eo,
        select: () => jt,
        selectAll: () => Lt,
        selectorAll: () => _,
        zoom: () => jf,
        zoomIdentity: () => Tf
    });
    var e = {};
    t.r(e), t.d(e, {
        VERSION: () => qt,
        after: () => kh,
        all: () => Ch,
        allKeys: () => Kf,
        any: () => Uh,
        assign: () => Tn,
        before: () => Dh,
        bind: () => Mh,
        bindAll: () => Th,
        chain: () => _h,
        chunk: () => pd,
        clone: () => oh,
        collect: () => ve,
        compact: () => ad,
        compose: () => Nh,
        constant: () => ae,
        contains: () => ee,
        countBy: () => Jh,
        create: () => rh,
        debounce: () => Ut,
        default: () => gd,
        defaults: () => nh,
        defer: () => Ah,
        delay: () => Ct,
        detect: () => Oh,
        difference: () => ud,
        drop: () => de,
        each: () => Bn,
        escape: () => _n,
        every: () => Ch,
        extend: () => th,
        extendOwn: () => Tn,
        filter: () => Fh,
        find: () => Oh,
        findIndex: () => zn,
        findKey: () => Lh,
        findLastIndex: () => $n,
        findWhere: () => Rh,
        first: () => Fn,
        flatten: () => Xn,
        foldl: () => $h,
        foldr: () => Ih,
        forEach: () => Bn,
        functions: () => Qf,
        groupBy: () => Wn,
        has: () => Gn,
        head: () => Fn,
        identity: () => bn,
        include: () => ee,
        includes: () => ee,
        indexBy: () => Zh,
        indexOf: () => ne,
        initial: () => In,
        inject: () => $h,
        intersection: () => re,
        invert: () => Jf,
        invoke: () => Hh,
        isArguments: () => Hn,
        isArray: () => xn,
        isArrayBuffer: () => Vf,
        isBoolean: () => zf,
        isDataView: () => ie,
        isDate: () => Ff,
        isElement: () => $f,
        isEmpty: () => Gf,
        isEqual: () => he,
        isError: () => Cf,
        isFinite: () => Wf,
        isFunction: () => pn,
        isMap: () => Hf,
        isMatch: () => An,
        isNaN: () => Qn,
        isNull: () => Of,
        isNumber: () => Jn,
        isObject: () => Ht,
        isRegExp: () => Yf,
        isSet: () => Xf,
        isString: () => If,
        isSymbol: () => Uf,
        isTypedArray: () => le,
        isUndefined: () => Rf,
        isWeakMap: () => qf,
        isWeakSet: () => Bf,
        iteratee: () => Ln,
        keys: () => mn,
        last: () => pe,
        lastIndexOf: () => jh,
        map: () => ve,
        mapObject: () => me,
        matcher: () => En,
        matches: () => En,
        max: () => Bh,
        memoize: () => ge,
        methods: () => Qf,
        min: () => Vh,
        mixin: () => md,
        negate: () => Sh,
        noop: () => ah,
        now: () => we,
        object: () => dd,
        omit: () => id,
        once: () => Ph,
        pairs: () => Zf,
        partial: () => xh,
        partition: () => Qh,
        pick: () => od,
        pluck: () => qh,
        property: () => kn,
        propertyOf: () => uh,
        random: () => ye,
        range: () => _e,
        reduce: () => $h,
        reduceRight: () => Ih,
        reject: () => Yh,
        rest: () => de,
        restArguments: () => Yt,
        result: () => mh,
        sample: () => Wh,
        select: () => Fh,
        shuffle: () => Gh,
        size: () => ed,
        some: () => Uh,
        sortBy: () => Kh,
        sortedIndex: () => Zn,
        tail: () => de,
        take: () => Fn,
        tap: () => ih,
        template: () => vh,
        templateSettings: () => sh,
        throttle: () => be,
        times: () => ch,
        toArray: () => nd,
        transpose: () => fd,
        unescape: () => lh,
        union: () => sd,
        uniq: () => ld,
        unique: () => ld,
        uniqueId: () => yh,
        unzip: () => fd,
        values: () => Kn,
        where: () => Xh,
        without: () => cd,
        wrap: () => Eh,
        zip: () => hd
    });
    var r = {};
    t.r(r), t.d(r, {
        atlantis: () => ap,
        conic_equidistant: () => up,
        equirectangular: () => cp,
        orthographic: () => lp,
        patterson: () => sp,
        stereographic: () => fp,
        waterman: () => hp,
        winkel3: () => dp
    });
    const o = function(t) {
            var n = this.constructor;
            return this.then((function(e) {
                return n.resolve(t()).then((function() {
                    return e
                }))
            }), (function(e) {
                return n.resolve(t()).then((function() {
                    return n.reject(e)
                }))
            }))
        },
        i = function(t) {
            return new this((function(n, e) {
                if (!t || void 0 === t.length) return e(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var r = Array.prototype.slice.call(t);
                if (0 === r.length) return n([]);
                var o = r.length;

                function i(t, e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var a = e.then;
                        if ("function" == typeof a) return void a.call(e, (function(n) {
                            i(t, n)
                        }), (function(e) {
                            r[t] = {
                                status: "rejected",
                                reason: e
                            }, 0 == --o && n(r)
                        }))
                    }
                    r[t] = {
                        status: "fulfilled",
                        value: e
                    }, 0 == --o && n(r)
                }
                for (var a = 0; a < r.length; a++) i(a, r[a])
            }))
        };
    var a = setTimeout;

    function u(t) {
        return Boolean(t && void 0 !== t.length)
    }

    function c() {}

    function l(t) {
        if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], v(t, this)
    }

    function s(t, n) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, l._immediateFn((function() {
            var e = 1 === t._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var r;
                try {
                    r = e(t._value)
                } catch (t) {
                    return void h(n.promise, t)
                }
                f(n.promise, r)
            } else(1 === t._state ? f : h)(n.promise, t._value)
        }))) : t._deferreds.push(n)
    }

    function f(t, n) {
        try {
            if (n === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var e = n.then;
                if (n instanceof l) return t._state = 3, t._value = n, void d(t);
                if ("function" == typeof e) return void v((r = e, o = n, function() {
                    r.apply(o, arguments)
                }), t)
            }
            t._state = 1, t._value = n, d(t)
        } catch (n) {
            h(t, n)
        }
        var r, o
    }

    function h(t, n) {
        t._state = 2, t._value = n, d(t)
    }

    function d(t) {
        2 === t._state && 0 === t._deferreds.length && l._immediateFn((function() {
            t._handled || l._unhandledRejectionFn(t._value)
        }));
        for (var n = 0, e = t._deferreds.length; n < e; n++) s(t, t._deferreds[n]);
        t._deferreds = null
    }

    function p(t, n, e) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof n ? n : null, this.promise = e
    }

    function v(t, n) {
        var e = !1;
        try {
            t((function(t) {
                e || (e = !0, f(n, t))
            }), (function(t) {
                e || (e = !0, h(n, t))
            }))
        } catch (t) {
            if (e) return;
            e = !0, h(n, t)
        }
    }
    l.prototype.catch = function(t) {
        return this.then(null, t)
    }, l.prototype.then = function(t, n) {
        var e = new this.constructor(c);
        return s(this, new p(t, n, e)), e
    }, l.prototype.finally = o, l.all = function(t) {
        return new l((function(n, e) {
            if (!u(t)) return e(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return n([]);
            var o = r.length;

            function i(t, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var u = a.then;
                        if ("function" == typeof u) return void u.call(a, (function(n) {
                            i(t, n)
                        }), e)
                    }
                    r[t] = a, 0 == --o && n(r)
                } catch (t) {
                    e(t)
                }
            }
            for (var a = 0; a < r.length; a++) i(a, r[a])
        }))
    }, l.allSettled = i, l.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === l ? t : new l((function(n) {
            n(t)
        }))
    }, l.reject = function(t) {
        return new l((function(n, e) {
            e(t)
        }))
    }, l.race = function(t) {
        return new l((function(n, e) {
            if (!u(t)) return e(new TypeError("Promise.race accepts an array"));
            for (var r = 0, o = t.length; r < o; r++) l.resolve(t[r]).then(n, e)
        }))
    }, l._immediateFn = "function" == typeof setImmediate && function(t) {
        setImmediate(t)
    } || function(t) {
        a(t, 0)
    }, l._unhandledRejectionFn = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    const m = l;
    var g = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== t.g) return t.g;
        throw new Error("unable to locate global object")
    }();

    function y() {
        return []
    }

    function _(t) {
        return null == t ? y : function() {
            return this.querySelectorAll(t)
        }
    }

    function w(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t)
    }

    function b() {}

    function x(t) {
        return null == t ? b : function() {
            return this.querySelector(t)
        }
    }

    function M(t) {
        return function() {
            return this.matches(t)
        }
    }

    function T(t) {
        return function(n) {
            return n.matches(t)
        }
    }
    "function" != typeof g.Promise ? g.Promise = m : g.Promise.prototype.finally ? g.Promise.allSettled || (g.Promise.allSettled = i) : g.Promise.prototype.finally = o;
    var A = Array.prototype.find;

    function E() {
        return this.firstElementChild
    }
    var S = Array.prototype.filter;

    function N() {
        return this.children
    }

    function k(t) {
        return new Array(t.length)
    }

    function D(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function P(t) {
        return function() {
            return t
        }
    }

    function L(t, n, e, r, o, i) {
        for (var a, u = 0, c = n.length, l = i.length; u < l; ++u)(a = n[u]) ? (a.__data__ = i[u], r[u] = a) : e[u] = new D(t, i[u]);
        for (; u < c; ++u)(a = n[u]) && (o[u] = a)
    }

    function j(t, n, e, r, o, i, a) {
        var u, c, l, s = new Map,
            f = n.length,
            h = i.length,
            d = new Array(f);
        for (u = 0; u < f; ++u)(c = n[u]) && (d[u] = l = a.call(c, c.__data__, u, n) + "", s.has(l) ? o[u] = c : s.set(l, c));
        for (u = 0; u < h; ++u) l = a.call(t, i[u], u, i) + "", (c = s.get(l)) ? (r[u] = c, c.__data__ = i[u], s.delete(l)) : e[u] = new D(t, i[u]);
        for (u = 0; u < f; ++u)(c = n[u]) && s.get(d[u]) === c && (o[u] = c)
    }

    function O(t) {
        return t.__data__
    }

    function R(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    D.prototype = {
        constructor: D,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var z = "http://www.w3.org/1999/xhtml";
    const $ = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: z,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };

    function I(t) {
        var n = t += "",
            e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), $.hasOwnProperty(n) ? {
            space: $[n],
            local: t
        } : t
    }

    function F(t) {
        return function() {
            this.removeAttribute(t)
        }
    }

    function Y(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function C(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }

    function U(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }

    function H(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }

    function q(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }

    function X(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }

    function B(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }

    function V(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }

    function W(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }

    function G(t, n) {
        return t.style.getPropertyValue(n) || X(t).getComputedStyle(t, null).getPropertyValue(n)
    }

    function K(t) {
        return function() {
            delete this[t]
        }
    }

    function Z(t, n) {
        return function() {
            this[t] = n
        }
    }

    function J(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }

    function Q(t) {
        return t.trim().split(/^|\s+/)
    }

    function tt(t) {
        return t.classList || new nt(t)
    }

    function nt(t) {
        this._node = t, this._names = Q(t.getAttribute("class") || "")
    }

    function et(t, n) {
        for (var e = tt(t), r = -1, o = n.length; ++r < o;) e.add(n[r])
    }

    function rt(t, n) {
        for (var e = tt(t), r = -1, o = n.length; ++r < o;) e.remove(n[r])
    }

    function ot(t) {
        return function() {
            et(this, t)
        }
    }

    function it(t) {
        return function() {
            rt(this, t)
        }
    }

    function at(t, n) {
        return function() {
            (n.apply(this, arguments) ? et : rt)(this, t)
        }
    }

    function ut() {
        this.textContent = ""
    }

    function ct(t) {
        return function() {
            this.textContent = t
        }
    }

    function lt(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }

    function st() {
        this.innerHTML = ""
    }

    function ft(t) {
        return function() {
            this.innerHTML = t
        }
    }

    function ht(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }

    function dt() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function pt() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function vt(t) {
        return function() {
            var n = this.ownerDocument,
                e = this.namespaceURI;
            return e === z && n.documentElement.namespaceURI === z ? n.createElement(t) : n.createElementNS(e, t)
        }
    }

    function mt(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }

    function gt(t) {
        var n = I(t);
        return (n.local ? mt : vt)(n)
    }

    function yt() {
        return null
    }

    function _t() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function wt() {
        var t = this.cloneNode(!1),
            n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t
    }

    function bt() {
        var t = this.cloneNode(!0),
            n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t
    }

    function xt(t) {
        return t.trim().split(/^|\s+/).map((function(t) {
            var n = "",
                e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                type: t,
                name: n
            }
        }))
    }

    function Mt(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, o = -1, i = n.length; r < i; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++o] = e : this.removeEventListener(e.type, e.listener, e.options);
                ++o ? n.length = o : delete this.__on
            }
        }
    }

    function Tt(t, n, e) {
        return function() {
            var r, o = this.__on,
                i = function(t) {
                    return function(n) {
                        t.call(this, n, this.__data__)
                    }
                }(n);
            if (o)
                for (var a = 0, u = o.length; a < u; ++a)
                    if ((r = o[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = e), void(r.value = n);
            this.addEventListener(t.type, i, e), r = {
                type: t.type,
                name: t.name,
                value: n,
                listener: i,
                options: e
            }, o ? o.push(r) : this.__on = [r]
        }
    }

    function At(t, n, e) {
        var r = X(t),
            o = r.CustomEvent;
        "function" == typeof o ? o = new o(n, e) : (o = r.document.createEvent("Event"), e ? (o.initEvent(n, e.bubbles, e.cancelable), o.detail = e.detail) : o.initEvent(n, !1, !1)), t.dispatchEvent(o)
    }

    function Et(t, n) {
        return function() {
            return At(this, t, n)
        }
    }

    function St(t, n) {
        return function() {
            return At(this, t, n.apply(this, arguments))
        }
    }
    nt.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var Nt = [null];

    function kt(t, n) {
        this._groups = t, this._parents = n
    }

    function Dt() {
        return new kt([
            [document.documentElement]
        ], Nt)
    }
    kt.prototype = Dt.prototype = {
        constructor: kt,
        select: function(t) {
            "function" != typeof t && (t = x(t));
            for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o)
                for (var i, a, u = n[o], c = u.length, l = r[o] = new Array(c), s = 0; s < c; ++s)(i = u[s]) && (a = t.call(i, i.__data__, s, u)) && ("__data__" in i && (a.__data__ = i.__data__), l[s] = a);
            return new kt(r, this._parents)
        },
        selectAll: function(t) {
            t = "function" == typeof t ? function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    return null == n ? [] : w(n)
                }
            }(t) : _(t);
            for (var n = this._groups, e = n.length, r = [], o = [], i = 0; i < e; ++i)
                for (var a, u = n[i], c = u.length, l = 0; l < c; ++l)(a = u[l]) && (r.push(t.call(a, a.__data__, l, u)), o.push(a));
            return new kt(r, o)
        },
        selectChild: function(t) {
            return this.select(null == t ? E : function(t) {
                return function() {
                    return A.call(this.children, t)
                }
            }("function" == typeof t ? t : T(t)))
        },
        selectChildren: function(t) {
            return this.selectAll(null == t ? N : function(t) {
                return function() {
                    return S.call(this.children, t)
                }
            }("function" == typeof t ? t : T(t)))
        },
        filter: function(t) {
            "function" != typeof t && (t = M(t));
            for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o)
                for (var i, a = n[o], u = a.length, c = r[o] = [], l = 0; l < u; ++l)(i = a[l]) && t.call(i, i.__data__, l, a) && c.push(i);
            return new kt(r, this._parents)
        },
        data: function(t, n) {
            if (!arguments.length) return Array.from(this, O);
            var e = n ? j : L,
                r = this._parents,
                o = this._groups;
            "function" != typeof t && (t = P(t));
            for (var i = o.length, a = new Array(i), u = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
                var s = r[l],
                    f = o[l],
                    h = f.length,
                    d = w(t.call(s, s && s.__data__, l, r)),
                    p = d.length,
                    v = u[l] = new Array(p),
                    m = a[l] = new Array(p),
                    g = c[l] = new Array(h);
                e(s, f, v, m, g, d, n);
                for (var y, _, b = 0, x = 0; b < p; ++b)
                    if (y = v[b]) {
                        for (b >= x && (x = b + 1); !(_ = m[x]) && ++x < p;);
                        y._next = _ || null
                    }
            }
            return (a = new kt(a, r))._enter = u, a._exit = c, a
        },
        enter: function() {
            return new kt(this._enter || this._groups.map(k), this._parents)
        },
        exit: function() {
            return new kt(this._exit || this._groups.map(k), this._parents)
        },
        join: function(t, n, e) {
            var r = this.enter(),
                o = this,
                i = this.exit();
            return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (o = n(o)), null == e ? i.remove() : e(i), r && o ? r.merge(o).order() : o
        },
        merge: function(t) {
            if (!(t instanceof kt)) throw new Error("invalid merge");
            for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), a = new Array(r), u = 0; u < i; ++u)
                for (var c, l = n[u], s = e[u], f = l.length, h = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new kt(a, this._parents)
        },
        selection: function() {
            return this
        },
        order: function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, o = t[n], i = o.length - 1, a = o[i]; --i >= 0;)(r = o[i]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
            return this
        },
        sort: function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = R);
            for (var e = this._groups, r = e.length, o = new Array(r), i = 0; i < r; ++i) {
                for (var a, u = e[i], c = u.length, l = o[i] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (l[s] = a);
                l.sort(n)
            }
            return new kt(o, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        },
        nodes: function() {
            return Array.from(this)
        },
        node: function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
                    var a = r[o];
                    if (a) return a
                }
            return null
        },
        size: function() {
            let t = 0;
            for (const n of this) ++t;
            return t
        },
        empty: function() {
            return !this.node()
        },
        each: function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var o, i = n[e], a = 0, u = i.length; a < u; ++a)(o = i[a]) && t.call(o, o.__data__, a, i);
            return this
        },
        attr: function(t, n) {
            var e = I(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? Y : F : "function" == typeof n ? e.local ? q : H : e.local ? U : C)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? B : "function" == typeof n ? W : V)(t, n, null == e ? "" : e)) : G(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? K : "function" == typeof n ? J : Z)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = Q(t + "");
            if (arguments.length < 2) {
                for (var r = tt(this.node()), o = -1, i = e.length; ++o < i;)
                    if (!r.contains(e[o])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? at : n ? ot : it)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? ut : ("function" == typeof t ? lt : ct)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? ht : ft)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(dt)
        },
        lower: function() {
            return this.each(pt)
        },
        append: function(t) {
            var n = "function" == typeof t ? t : gt(t);
            return this.select((function() {
                return this.appendChild(n.apply(this, arguments))
            }))
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t : gt(t),
                r = null == n ? yt : "function" == typeof n ? n : x(n);
            return this.select((function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            }))
        },
        remove: function() {
            return this.each(_t)
        },
        clone: function(t) {
            return this.select(t ? bt : wt)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, o, i = xt(t + ""),
                a = i.length;
            if (!(arguments.length < 2)) {
                for (u = n ? Tt : Mt, r = 0; r < a; ++r) this.each(u(i[r], n, e));
                return this
            }
            var u = this.node().__on;
            if (u)
                for (var c, l = 0, s = u.length; l < s; ++l)
                    for (r = 0, c = u[l]; r < a; ++r)
                        if ((o = i[r]).type === c.type && o.name === c.name) return c.value
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? St : Et)(t, n))
        },
        [Symbol.iterator]: function*() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r, o = t[n], i = 0, a = o.length; i < a; ++i)(r = o[i]) && (yield r)
        }
    };
    const Pt = Dt;

    function Lt(t) {
        return "string" == typeof t ? new kt([document.querySelectorAll(t)], [document.documentElement]) : new kt([null == t ? [] : w(t)], Nt)
    }

    function jt(t) {
        return "string" == typeof t ? new kt([
            [document.querySelector(t)]
        ], [document.documentElement]) : new kt([
            [t]
        ], Nt)
    }

    function Ot(t) {
        return !!t && "true" !== t.getAttribute("aria-disabled")
    }

    function Rt(t) {
        for (let e = null != t ? t : null; null !== e; e = null !== (n = e.parentElement) && void 0 !== n ? n : null) {
            var n;
            if (e.hasAttribute("inert")) return !0
        }
        return !1
    }

    function zt(t) {
        return function() {
            return t(jt(this), ...arguments)
        }
    }

    function $t(t) {
        return function() {
            if (Ot(this)) return t.apply(this, arguments)
        }
    }

    function It(t) {
        var n;
        return (null !== (n = t.getAttribute("aria-controls")) && void 0 !== n ? n : "").split(/\s+/).filter((t => "" !== t)).map((t => "#" + t)).sort().join(",")
    }

    function Ft(t) {
        t.stopPropagation(), t.preventDefault()
    }

    function Yt(t, n) {
        return n = null == n ? t.length - 1 : +n,
            function() {
                for (var e = Math.max(arguments.length - n, 0), r = Array(e), o = 0; o < e; o++) r[o] = arguments[o + n];
                switch (n) {
                    case 0:
                        return t.call(this, r);
                    case 1:
                        return t.call(this, arguments[0], r);
                    case 2:
                        return t.call(this, arguments[0], arguments[1], r)
                }
                var i = Array(n + 1);
                for (o = 0; o < n; o++) i[o] = arguments[o];
                return i[n] = r, t.apply(this, i)
            }
    }
    const Ct = Yt((function(t, n, e) {
        return setTimeout((function() {
            return t.apply(null, e)
        }), n)
    }));

    function Ut(t, n, e) {
        var r, o, i = function(n, e) {
                r = null, e && (o = t.apply(n, e))
            },
            a = Yt((function(a) {
                if (r && clearTimeout(r), e) {
                    var u = !r;
                    r = setTimeout(i, n), u && (o = t.apply(this, a))
                } else r = Ct(i, n, this, a);
                return o
            }));
        return a.cancel = function() {
            clearTimeout(r), r = null
        }, a
    }

    function Ht(t) {
        var n = typeof t;
        return "function" === n || "object" === n && !!t
    }
    var qt = "1.11.0",
        Xt = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {},
        Bt = Array.prototype,
        Vt = Object.prototype,
        Wt = "undefined" != typeof Symbol ? Symbol.prototype : null,
        Gt = Bt.push,
        Kt = Bt.slice,
        Zt = Vt.toString,
        Jt = Vt.hasOwnProperty,
        Qt = "undefined" != typeof ArrayBuffer,
        tn = Array.isArray,
        nn = Object.keys,
        en = Object.create,
        rn = Qt && ArrayBuffer.isView,
        on = isNaN,
        an = isFinite,
        un = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        cn = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        ln = Math.pow(2, 53) - 1;

    function sn(t, n) {
        return null != t && Jt.call(t, n)
    }

    function fn(t) {
        return function(n) {
            return Zt.call(n) === "[object " + t + "]"
        }
    }
    var hn = fn("Function"),
        dn = Xt.document && Xt.document.childNodes;
    "object" != typeof Int8Array && "function" != typeof dn && (hn = function(t) {
        return "function" == typeof t || !1
    });
    const pn = hn;

    function vn(t, n) {
        n = function(t) {
            for (var n = {}, e = t.length, r = 0; r < e; ++r) n[t[r]] = !0;
            return {
                contains: function(t) {
                    return n[t]
                },
                push: function(e) {
                    return n[e] = !0, t.push(e)
                }
            }
        }(n);
        var e = cn.length,
            r = t.constructor,
            o = pn(r) && r.prototype || Vt,
            i = "constructor";
        for (sn(t, i) && !n.contains(i) && n.push(i); e--;)(i = cn[e]) in t && t[i] !== o[i] && !n.contains(i) && n.push(i)
    }

    function mn(t) {
        if (!Ht(t)) return [];
        if (nn) return nn(t);
        var n = [];
        for (var e in t) sn(t, e) && n.push(e);
        return un && vn(t, n), n
    }

    function gn(t) {
        var n = function(n) {
                return t[n]
            },
            e = "(?:" + mn(t).join("|") + ")",
            r = RegExp(e),
            o = RegExp(e, "g");
        return function(t) {
            return t = null == t ? "" : "" + t, r.test(t) ? t.replace(o, n) : t
        }
    }
    const yn = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        _n = gn(yn);

    function wn(t) {
        return t instanceof wn ? t : this instanceof wn ? void(this._wrapped = t) : new wn(t)
    }

    function bn(t) {
        return t
    }
    wn.VERSION = qt, wn.prototype.value = function() {
        return this._wrapped
    }, wn.prototype.valueOf = wn.prototype.toJSON = wn.prototype.value, wn.prototype.toString = function() {
        return String(this._wrapped)
    };
    const xn = tn || fn("Array");

    function Mn(t, n) {
        return function(e) {
            var r = arguments.length;
            if (n && (e = Object(e)), r < 2 || null == e) return e;
            for (var o = 1; o < r; o++)
                for (var i = arguments[o], a = t(i), u = a.length, c = 0; c < u; c++) {
                    var l = a[c];
                    n && void 0 !== e[l] || (e[l] = i[l])
                }
            return e
        }
    }
    const Tn = Mn(mn);

    function An(t, n) {
        var e = mn(n),
            r = e.length;
        if (null == t) return !r;
        for (var o = Object(t), i = 0; i < r; i++) {
            var a = e[i];
            if (n[a] !== o[a] || !(a in o)) return !1
        }
        return !0
    }

    function En(t) {
        return t = Tn({}, t),
            function(n) {
                return An(n, t)
            }
    }

    function Sn(t) {
        return function(n) {
            return null == n ? void 0 : n[t]
        }
    }

    function Nn(t, n) {
        for (var e = n.length, r = 0; r < e; r++) {
            if (null == t) return;
            t = t[n[r]]
        }
        return e ? t : void 0
    }

    function kn(t) {
        return xn(t) ? function(n) {
            return Nn(n, t)
        } : Sn(t)
    }

    function Dn(t, n, e) {
        if (void 0 === n) return t;
        switch (null == e ? 3 : e) {
            case 1:
                return function(e) {
                    return t.call(n, e)
                };
            case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o)
                };
            case 4:
                return function(e, r, o, i) {
                    return t.call(n, e, r, o, i)
                }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }

    function Pn(t, n, e) {
        return null == t ? bn : pn(t) ? Dn(t, n, e) : Ht(t) && !xn(t) ? En(t) : kn(t)
    }

    function Ln(t, n) {
        return Pn(t, n, 1 / 0)
    }

    function jn(t, n, e) {
        return wn.iteratee !== Ln ? wn.iteratee(t, n) : Pn(t, n, e)
    }
    wn.iteratee = Ln;
    const On = Sn("length");

    function Rn(t) {
        return function(n, e, r) {
            e = jn(e, r);
            for (var o = On(n), i = t > 0 ? 0 : o - 1; i >= 0 && i < o; i += t)
                if (e(n[i], i, n)) return i;
            return -1
        }
    }
    const zn = Rn(1),
        $n = Rn(-1);

    function In(t, n, e) {
        return Kt.call(t, 0, Math.max(0, t.length - (null == n || e ? 1 : n)))
    }

    function Fn(t, n, e) {
        return null == t || t.length < 1 ? null == n || e ? void 0 : [] : null == n || e ? t[0] : In(t, t.length - n)
    }

    function Yn(t) {
        return function(n) {
            var e = t(n);
            return "number" == typeof e && e >= 0 && e <= ln
        }
    }
    const Cn = Yn(On);
    var Un = fn("Arguments");
    ! function() {
        Un(arguments) || (Un = function(t) {
            return sn(t, "callee")
        })
    }();
    const Hn = Un;

    function qn(t, n, e, r) {
        if (r = r || [], n || 0 === n) {
            if (n <= 0) return r.concat(t)
        } else n = 1 / 0;
        for (var o = r.length, i = 0, a = On(t); i < a; i++) {
            var u = t[i];
            if (Cn(u) && (xn(u) || Hn(u)))
                if (n > 1) qn(u, n - 1, e, r), o = r.length;
                else
                    for (var c = 0, l = u.length; c < l;) r[o++] = u[c++];
            else e || (r[o++] = u)
        }
        return r
    }

    function Xn(t, n) {
        return qn(t, n, !1)
    }

    function Bn(t, n, e) {
        var r, o;
        if (n = Dn(n, e), Cn(t))
            for (r = 0, o = t.length; r < o; r++) n(t[r], r, t);
        else {
            var i = mn(t);
            for (r = 0, o = i.length; r < o; r++) n(t[i[r]], i[r], t)
        }
        return t
    }

    function Vn(t, n) {
        return function(e, r, o) {
            var i = n ? [
                [],
                []
            ] : {};
            return r = jn(r, o), Bn(e, (function(n, o) {
                var a = r(n, o, e);
                t(i, n, a)
            })), i
        }
    }
    const Wn = Vn((function(t, n, e) {
        sn(t, e) ? t[e].push(n) : t[e] = [n]
    }));

    function Gn(t, n) {
        if (!xn(n)) return sn(t, n);
        for (var e = n.length, r = 0; r < e; r++) {
            var o = n[r];
            if (null == t || !Jt.call(t, o)) return !1;
            t = t[o]
        }
        return !!e
    }

    function Kn(t) {
        for (var n = mn(t), e = n.length, r = Array(e), o = 0; o < e; o++) r[o] = t[n[o]];
        return r
    }

    function Zn(t, n, e, r) {
        for (var o = (e = jn(e, r, 1))(n), i = 0, a = On(t); i < a;) {
            var u = Math.floor((i + a) / 2);
            e(t[u]) < o ? i = u + 1 : a = u
        }
        return i
    }
    const Jn = fn("Number");

    function Qn(t) {
        return Jn(t) && on(t)
    }

    function te(t, n, e) {
        return function(r, o, i) {
            var a = 0,
                u = On(r);
            if ("number" == typeof i) t > 0 ? a = i >= 0 ? i : Math.max(i + u, a) : u = i >= 0 ? Math.min(i + 1, u) : i + u + 1;
            else if (e && i && u) return r[i = e(r, o)] === o ? i : -1;
            if (o != o) return (i = n(Kt.call(r, a, u), Qn)) >= 0 ? i + a : -1;
            for (i = t > 0 ? a : u - 1; i >= 0 && i < u; i += t)
                if (r[i] === o) return i;
            return -1
        }
    }
    const ne = te(1, zn, Zn);

    function ee(t, n, e, r) {
        return Cn(t) || (t = Kn(t)), ("number" != typeof e || r) && (e = 0), ne(t, n, e) >= 0
    }

    function re(t) {
        for (var n = [], e = arguments.length, r = 0, o = On(t); r < o; r++) {
            var i = t[r];
            if (!ee(n, i)) {
                var a;
                for (a = 1; a < e && ee(arguments[a], i); a++);
                a === e && n.push(i)
            }
        }
        return n
    }
    const oe = Sn("byteLength"),
        ie = fn("DataView");

    function ae(t) {
        return function() {
            return t
        }
    }
    const ue = Yn(oe);
    var ce = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    const le = Qt ? function(t) {
        return rn ? rn(t) && !ie(t) : ue(t) && ce.test(Zt.call(t))
    } : ae(!1);

    function se(t, n, e, r) {
        if (t === n) return 0 !== t || 1 / t == 1 / n;
        if (null == t || null == n) return !1;
        if (t != t) return n != n;
        var o = typeof t;
        return ("function" === o || "object" === o || "object" == typeof n) && fe(t, n, e, r)
    }

    function fe(t, n, e, r) {
        t instanceof wn && (t = t._wrapped), n instanceof wn && (n = n._wrapped);
        var o = Zt.call(t);
        if (o !== Zt.call(n)) return !1;
        switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + n;
            case "[object Number]":
                return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +n;
            case "[object Symbol]":
                return Wt.valueOf.call(t) === Wt.valueOf.call(n);
            case "[object ArrayBuffer]":
                return fe(new DataView(t), new DataView(n), e, r);
            case "[object DataView]":
                var i = oe(t);
                if (i !== oe(n)) return !1;
                for (; i--;)
                    if (t.getUint8(i) !== n.getUint8(i)) return !1;
                return !0
        }
        if (le(t)) return fe(new DataView(t.buffer), new DataView(n.buffer), e, r);
        var a = "[object Array]" === o;
        if (!a) {
            if ("object" != typeof t || "object" != typeof n) return !1;
            var u = t.constructor,
                c = n.constructor;
            if (u !== c && !(pn(u) && u instanceof u && pn(c) && c instanceof c) && "constructor" in t && "constructor" in n) return !1
        }
        r = r || [];
        for (var l = (e = e || []).length; l--;)
            if (e[l] === t) return r[l] === n;
        if (e.push(t), r.push(n), a) {
            if ((l = t.length) !== n.length) return !1;
            for (; l--;)
                if (!se(t[l], n[l], e, r)) return !1
        } else {
            var s, f = mn(t);
            if (l = f.length, mn(n).length !== l) return !1;
            for (; l--;)
                if (!sn(n, s = f[l]) || !se(t[s], n[s], e, r)) return !1
        }
        return e.pop(), r.pop(), !0
    }

    function he(t, n) {
        return se(t, n)
    }

    function de(t, n, e) {
        return Kt.call(t, null == n || e ? 1 : n)
    }

    function pe(t, n, e) {
        return null == t || t.length < 1 ? null == n || e ? void 0 : [] : null == n || e ? t[t.length - 1] : de(t, Math.max(0, t.length - n))
    }

    function ve(t, n, e) {
        n = jn(n, e);
        for (var r = !Cn(t) && mn(t), o = (r || t).length, i = Array(o), a = 0; a < o; a++) {
            var u = r ? r[a] : a;
            i[a] = n(t[u], u, t)
        }
        return i
    }

    function me(t, n, e) {
        n = jn(n, e);
        for (var r = mn(t), o = r.length, i = {}, a = 0; a < o; a++) {
            var u = r[a];
            i[u] = n(t[u], u, t)
        }
        return i
    }

    function ge(t, n) {
        var e = function(r) {
            var o = e.cache,
                i = "" + (n ? n.apply(this, arguments) : r);
            return sn(o, i) || (o[i] = t.apply(this, arguments)), o[i]
        };
        return e.cache = {}, e
    }

    function ye(t, n) {
        return null == n && (n = t, t = 0), t + Math.floor(Math.random() * (n - t + 1))
    }

    function _e(t, n, e) {
        null == n && (n = t || 0, t = 0), e || (e = n < t ? -1 : 1);
        for (var r = Math.max(Math.ceil((n - t) / e), 0), o = Array(r), i = 0; i < r; i++, t += e) o[i] = t;
        return o
    }
    const we = Date.now || function() {
        return (new Date).getTime()
    };

    function be(t, n, e) {
        var r, o, i, a, u = 0;
        e || (e = {});
        var c = function() {
                u = !1 === e.leading ? 0 : we(), r = null, a = t.apply(o, i), r || (o = i = null)
            },
            l = function() {
                var l = we();
                u || !1 !== e.leading || (u = l);
                var s = n - (l - u);
                return o = this, i = arguments, s <= 0 || s > n ? (r && (clearTimeout(r), r = null), u = l, a = t.apply(o, i), r || (o = i = null)) : r || !1 === e.trailing || (r = setTimeout(c, s)), a
            };
        return l.cancel = function() {
            clearTimeout(r), u = 0, r = o = i = null
        }, l
    }
    const xe = Math.PI,
        Me = 2 * xe,
        Te = 360 / Me,
        Ae = Me / 360;

    function Ee(t) {
        if (Array.isArray(t)) return !0;
        if ("object" != typeof t || !t) return !1;
        const n = t.length;
        return "number" == typeof n && n >= 0
    }

    function Se(t, n) {
        for (let e = 0; e < t.length; e++) {
            const r = t[e],
                o = n[e];
            if (r !== o && !(r != r && o != o || Ee(r) && Se(r, o))) return !1
        }
        return t.length === n.length
    }

    function Ne(t, n) {
        const e = new Float32Array(2 * t.length);
        for (let r = 0; r < t.length; r++) {
            const o = 2 * r;
            e[o] = t[r], e[o + 1] = n[r]
        }
        return e
    }

    function ke(t) {
        return [...new Set(t)]
    }

    function De(t, n) {
        const e = t - n * Math.floor(t / n);
        return e === n ? 0 : e
    }

    function Pe(t) {
        const n = 4503599627370496;
        let e = Math.abs(t);
        return e < n && (e += n, e -= n), Math.sign(t) * e
    }

    function Le(t, n, e) {
        return Math.max(n, Math.min(t, e))
    }

    function je(t, n, e, r, o) {
        return (t - n) / (e - n) * (o - r) + r
    }

    function Oe(t) {
        const [n, e] = t;
        return Math.sqrt(n * n + e * e)
    }

    function Re(t, n) {
        return Oe([n[0] - t[0], n[1] - t[1]])
    }

    function ze(t) {
        return "string" == typeof t && t.indexOf("/") >= 0 && (t = t.split("/")), Ee(t) && 2 === t.length ? t[0] / t[1] : +t
    }

    function $e(t, n) {
        return [t[0] * n, t[1] * n]
    }
    const Ie = _("a[href], button, [tabindex]");

    function Fe(t) {
        if (null === (null != t ? t : null)) return !1;
        for (let e = t; null !== e; e = null !== (n = e.parentElement) && void 0 !== n ? n : null) {
            var n;
            if (e.hidden || e.hasAttribute("inert") || e.classList.contains("cloaked")) return !1
        }
        return !0
    }

    function Ye(t) {
        return t[zn(t, Fe)]
    }

    function Ce(t, n, e) {
        const r = t.length;
        n = De(n, r);
        for (let o = De(n + e, r); o !== n; o = De(o + e, r))
            if (Fe(t[o])) return t[o]
    }

    function Ue(t) {
        return t[$n(t, Fe)]
    }
    const He = _("[data-inert-tabindex]");

    function qe(t) {
        t.each((function() {
            this.hasAttribute("data-inert-tabindex") || (this.setAttribute("data-inert-tabindex", this.hasAttribute("tabindex") ? this.getAttribute("tabindex") : ""), this.removeAttribute("tabindex"), this.tabIndex >= 0 && (this.tabIndex = -1, this.focus = () => {}))
        }))
    }

    function Xe(t) {
        t.each((function() {
            if (!Rt(this) && this.hasAttribute("data-inert-tabindex")) {
                var t;
                const n = null !== (t = this.getAttribute("data-inert-tabindex")) && void 0 !== t ? t : "";
                this.removeAttribute("data-inert-tabindex"), "" === n ? this.removeAttribute("tabindex") : this.tabIndex = n, delete this.focus
            }
        }))
    }

    function Be(t, n) {
        t.each((function() {
            const t = n.apply(this, arguments);
            this.setAttribute(Rt(this) ? "data-inert-tabindex" : "tabindex", t)
        }))
    }

    function Ve(t) {
        t.attr("aria-hidden", !0).call(qe).selectAll(Ie).call(qe)
    }

    function We(t) {
        t.attr("aria-hidden", null).call(Xe).selectAll(He).call(Xe)
    }! function() {
        const t = new MutationObserver((t => {
                const n = t.map((t => t.target));
                Lt(n.filter((t => t.hasAttribute("inert")))).call(Ve), Lt(n.filter((t => !t.hasAttribute("inert")))).call(We)
            })),
            n = jt(":root");
        t.observe(n.node(), {
            attributes: !0,
            attributeFilter: ["inert"],
            subtree: !0
        }), n.selectAll("[inert]").call(Ve)
    }();
    var Ge = {
        value: () => {}
    };

    function Ke() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Ze(r)
    }

    function Ze(t) {
        this._ = t
    }

    function Je(t, n) {
        return t.trim().split(/^|\s+/).map((function(t) {
            var e = "",
                r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        }))
    }

    function Qe(t, n) {
        for (var e, r = 0, o = t.length; r < o; ++r)
            if ((e = t[r]).name === n) return e.value
    }

    function tr(t, n, e) {
        for (var r = 0, o = t.length; r < o; ++r)
            if (t[r].name === n) {
                t[r] = Ge, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            } return null != e && t.push({
            name: n,
            value: e
        }), t
    }
    Ze.prototype = Ke.prototype = {
        constructor: Ze,
        on: function(t, n) {
            var e, r = this._,
                o = Je(t + "", r),
                i = -1,
                a = o.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++i < a;)
                    if (e = (t = o[i]).type) r[e] = tr(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = tr(r[e], t.name, null);
                return this
            }
            for (; ++i < a;)
                if ((e = (t = o[i]).type) && (e = Qe(r[e], t.name))) return e
        },
        copy: function() {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new Ze(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, o = new Array(e), i = 0; i < e; ++i) o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (i = 0, e = (r = this._[t]).length; i < e; ++i) r[i].value.apply(n, o)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(n, e)
        }
    };
    const nr = Ke;

    function er(t) {
        return Object.assign(Object.create(null), ...arguments)
    }

    function rr(t, ...n) {
        const e = er();
        return Object.keys(t).forEach((r => {
            n.indexOf(r) >= 0 && (e[r] = t[r])
        })), e
    }

    function or(t) {
        const n = Object.keys(t),
            e = nr.apply(void 0, ["change"].concat(n.map((t => `change:${t}`)))),
            r = er(t);

        function o(t) {
            return t.trim().split(/^|\s+/)
        }
        return new class {
            on(t, n) {
                const r = o(t).join(" ");
                return arguments.length < 2 ? e.on(r) : (e.on(r, n), this)
            }
            get(t) {
                return r[t]
            }
            getAll() {
                return er(r)
            }
            save(t, n) {
                const o = er(),
                    i = er();
                Object.keys(t).forEach((n => {
                    if (!(n in r)) throw new Error(`unknown key: ${n}`);
                    const e = t[n],
                        a = r[n];
                    he(e, a) || (o[n] = e, i[n] = a)
                }));
                const a = Object.keys(o);
                return a.length > 0 && (a.forEach((t => r[t] = o[t])), a.forEach((t => e.call(`change:${t}`, null, o[t], i[t], n))), e.call("change", null, o, i, n), !0)
            }
            set(t, n, e) {
                return this.save({
                    [t]: n
                }, e)
            }
            getAndSet(t, n, e) {
                return this.set(t, n(this.get(t)), e)
            }
            toggle(t, n) {
                this.getAndSet(t, (t => !0 !== t), n)
            }
            handle(t) {
                const n = this;
                return new class {
                    on(n, r) {
                        const i = `${(n=o(n)[0]).substr(0,6)}:${t}${n.substr(6)}`;
                        return arguments.length < 2 ? e.on(i) : (e.on(i, r), this)
                    }
                    get() {
                        return n.get(t)
                    }
                    set(e, r) {
                        return n.set(t, e, r)
                    }
                    getAndSet(e, r) {
                        return n.getAndSet(t, e, r)
                    }
                    toggle(e) {
                        n.toggle(t, e)
                    }
                }
            }
        }
    }
    var ir;
    const ar = null !== (ir = navigator.userAgent) && void 0 !== ir ? ir : "",
        ur = new URLSearchParams(window.location.search);

    function cr() {
        return 8081 == +window.location.port
    }

    function lr() {
        return self !== top
    }

    function sr(t) {
        return ur.has(t)
    }

    function fr() {
        var t;
        const n = null !== (t = document.referrer.split("/")[2]) && void 0 !== t ? t : "",
            e = /dailymail/i.test(n);
        return sr("kiosk") && !e
    }

    function hr() {
        return lr() && !fr()
    }

    function dr() {
        var t, n;
        return null !== (t = null === (n = window.location.hostname.match(/(.*)\.nullschool\.net$/)) || void 0 === n ? void 0 : n[1]) && void 0 !== t ? t : "unknown"
    }

    function pr() {
        return /android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i.test(ar)
    }
    const vr = function() {
            const t = "F5v6#VQR5%";
            try {
                return localStorage.setItem(t, t), localStorage.removeItem(t), !0
            } catch (t) {
                return !1
            }
        }(),
        mr = (gr = vr ? localStorage : {
            getItem: () => null,
            setItem: () => !1,
            removeItem: () => !1
        }, new class {
            get(t) {
                return gr.getItem(t)
            }
            put(t, n) {
                try {
                    return void 0 === (null === n ? gr.removeItem(t) : gr.setItem(t, n))
                } catch (t) {
                    return !1
                }
            }
        });
    var gr;
    let yr = 0;

    function _r(t, ...n) {
        let e = t[0];
        for (let r = 0; r < n.length; r++) e += n[r] + t[r + 1];
        return e.replace(/(\S+)/g, ((t, n) => `${n}.$${yr++}`))
    }
    const wr = JSON.parse(jt("#urls").text()),
        br = pr() ? wr["earth-topo-mobile.json"] : wr["earth-topo.json"],
        xr = !0 !== jt(".cta-bar").property("hidden");

    function Mr() {
        var t;
        return er({
            display_timezone: "device",
            topology_url: br,
            interpolation_type: "bilinear",
            hd_enabled: !1,
            show_menu: !1,
            status: void 0,
            error: void 0,
            progress: void 0,
            notice: void 0,
            show_cta: xr,
            colorbar_cursor: void 0,
            selected_units: void 0,
            font_size: null !== (t = mr.get("settings.font_size")) && void 0 !== t ? t : "medium"
        })
    }
    const Tr = or(me(Mr(), (() => {})));

    function Ar(t) {
        const n = ke(t.map(It));
        if (n.length > 1) throw new Error;
        return Lt(n[0])
    }

    function Er(t) {
        const n = new Set(t.nodes());
        return function(t) {
            return t.selectAll((function() {
                return this.children
            }))
        }(function(t) {
            return Lt(ke(t.select((function() {
                return this.parentElement
            })).nodes()))
        }(t)).filter((function() {
            return !n.has(this)
        }))
    }

    function Sr(t, n) {
        t.on(_r`click`, $t(n))
    }

    function Nr(t, n, e) {
        const r = pn(e) ? e : () => e;
        t.on(_r`click`, $t((function() {
            n.save(r(), {
                actor: this
            })
        })))
    }

    function kr(t, n, e) {
        const r = pn(e) ? e : () => e;
        t.on(_r`click`, $t((function() {
            n.getAndSet(r, {
                actor: this
            })
        })))
    }

    function Dr(t, n) {
        function e(n) {
            t.attr("aria-pressed", !0 === n)
        }
        e(n.get()), n.on(_r`change`, e), t.on(_r`click`, $t((function() {
            n.toggle({
                actor: this
            })
        })))
    }
    Tr.reset = function() {
            this.save(Mr())
        }, Tr.on(_r`change:font_size`, (t => mr.put("settings.font_size", null != t ? t : null))),
        function(t, n) {
            const e = t.select(".field"),
                r = t.select("button");
            n.on(_r`change:status change:error`, (function() {
                var r;
                const o = null !== (r = n.get("error")) && void 0 !== r ? r : n.get("status");
                t.property("hidden", "" === (null != o ? o : "")), e.text(o)
            })), Sr(r, (() => n.save({
                status: void 0,
                error: void 0
            })))
        }(Lt("[data-name=status-card]"), Tr);
    const Pr = {
        status(t) {
            console.log(`[status] ${t}`), Tr.set("status", t)
        },
        error(t, n) {
            var e, r, o;
            const i = null !== (e = null !== (r = null == t ? void 0 : t.error) && void 0 !== r ? r : t) && void 0 !== e ? e : "unexpected error",
                a = String(null !== (o = i.message) && void 0 !== o ? o : i),
                u = [n ? `[${n}]` : null, null == t ? void 0 : t.resource, i].filter((t => !!t));
            console.error(...u), Tr.set("error", a)
        },
        reset() {
            Tr.save({
                status: void 0,
                error: void 0
            })
        }
    };

    function Lr(t, n, e, r) {
        pn(window.ga) && !cr() && window.ga("send", "event", ...arguments)
    }
    const jr = [/dailymail/i, /tamilinstanews/i, /xtremeweatherforecast/i, /oracle77.asuscomm/i];

    function Or(t, n, e) {
        t.prototype = n.prototype = e, e.constructor = t
    }

    function Rr(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }

    function zr() {}
    var $r = .7,
        Ir = 1 / $r,
        Fr = "\\s*([+-]?\\d+)\\s*",
        Yr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Cr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Ur = /^#([0-9a-f]{3,8})$/,
        Hr = new RegExp("^rgb\\(" + [Fr, Fr, Fr] + "\\)$"),
        qr = new RegExp("^rgb\\(" + [Cr, Cr, Cr] + "\\)$"),
        Xr = new RegExp("^rgba\\(" + [Fr, Fr, Fr, Yr] + "\\)$"),
        Br = new RegExp("^rgba\\(" + [Cr, Cr, Cr, Yr] + "\\)$"),
        Vr = new RegExp("^hsl\\(" + [Yr, Cr, Cr] + "\\)$"),
        Wr = new RegExp("^hsla\\(" + [Yr, Cr, Cr, Yr] + "\\)$"),
        Gr = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function Kr() {
        return this.rgb().formatHex()
    }

    function Zr() {
        return this.rgb().formatRgb()
    }

    function Jr(t) {
        var n, e;
        return t = (t + "").trim().toLowerCase(), (n = Ur.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? Qr(n) : 3 === e ? new ro(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? to(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? to(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = Hr.exec(t)) ? new ro(n[1], n[2], n[3], 1) : (n = qr.exec(t)) ? new ro(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Xr.exec(t)) ? to(n[1], n[2], n[3], n[4]) : (n = Br.exec(t)) ? to(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Vr.exec(t)) ? uo(n[1], n[2] / 100, n[3] / 100, 1) : (n = Wr.exec(t)) ? uo(n[1], n[2] / 100, n[3] / 100, n[4]) : Gr.hasOwnProperty(t) ? Qr(Gr[t]) : "transparent" === t ? new ro(NaN, NaN, NaN, 0) : null
    }

    function Qr(t) {
        return new ro(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function to(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new ro(t, n, e, r)
    }

    function no(t) {
        return t instanceof zr || (t = Jr(t)), t ? new ro((t = t.rgb()).r, t.g, t.b, t.opacity) : new ro
    }

    function eo(t, n, e, r) {
        return 1 === arguments.length ? no(t) : new ro(t, n, e, null == r ? 1 : r)
    }

    function ro(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function oo() {
        return "#" + ao(this.r) + ao(this.g) + ao(this.b)
    }

    function io() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }

    function ao(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function uo(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new so(t, n, e, r)
    }

    function co(t) {
        if (t instanceof so) return new so(t.h, t.s, t.l, t.opacity);
        if (t instanceof zr || (t = Jr(t)), !t) return new so;
        if (t instanceof so) return t;
        var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            o = Math.min(n, e, r),
            i = Math.max(n, e, r),
            a = NaN,
            u = i - o,
            c = (i + o) / 2;
        return u ? (a = n === i ? (e - r) / u + 6 * (e < r) : e === i ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? i + o : 2 - i - o, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new so(a, u, c, t.opacity)
    }

    function lo(t, n, e, r) {
        return 1 === arguments.length ? co(t) : new so(t, n, e, null == r ? 1 : r)
    }

    function so(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function fo(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    Or(zr, Jr, {
        copy: function(t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: Kr,
        formatHex: Kr,
        formatHsl: function() {
            return co(this).formatHsl()
        },
        formatRgb: Zr,
        toString: Zr
    }), Or(ro, eo, Rr(zr, {
        brighter: function(t) {
            return t = null == t ? Ir : Math.pow(Ir, t), new ro(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? $r : Math.pow($r, t), new ro(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: oo,
        formatHex: oo,
        formatRgb: io,
        toString: io
    })), Or(so, lo, Rr(zr, {
        brighter: function(t) {
            return t = null == t ? Ir : Math.pow(Ir, t), new so(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? $r : Math.pow($r, t), new so(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                o = 2 * e - r;
            return new ro(fo(t >= 240 ? t - 240 : t + 120, o, r), fo(t, o, r), fo(t < 120 ? t + 240 : t - 120, o, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
        }
    }));
    const ho = Math.PI / 180,
        po = 180 / Math.PI,
        vo = .96422,
        mo = .82521,
        go = 4 / 29,
        yo = 6 / 29,
        _o = 3 * yo * yo;

    function wo(t) {
        if (t instanceof xo) return new xo(t.l, t.a, t.b, t.opacity);
        if (t instanceof ko) return Do(t);
        t instanceof ro || (t = no(t));
        var n, e, r = Eo(t.r),
            o = Eo(t.g),
            i = Eo(t.b),
            a = Mo((.2225045 * r + .7168786 * o + .0606169 * i) / 1);
        return r === o && o === i ? n = e = a : (n = Mo((.4360747 * r + .3850649 * o + .1430804 * i) / vo), e = Mo((.0139322 * r + .0971045 * o + .7141733 * i) / mo)), new xo(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
    }

    function bo(t, n, e, r) {
        return 1 === arguments.length ? wo(t) : new xo(t, n, e, null == r ? 1 : r)
    }

    function xo(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function Mo(t) {
        return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / _o + go
    }

    function To(t) {
        return t > yo ? t * t * t : _o * (t - go)
    }

    function Ao(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Eo(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function So(t) {
        if (t instanceof ko) return new ko(t.h, t.c, t.l, t.opacity);
        if (t instanceof xo || (t = wo(t)), 0 === t.a && 0 === t.b) return new ko(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * po;
        return new ko(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function No(t, n, e, r) {
        return 1 === arguments.length ? So(t) : new ko(t, n, e, null == r ? 1 : r)
    }

    function ko(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function Do(t) {
        if (isNaN(t.h)) return new xo(t.l, 0, 0, t.opacity);
        var n = t.h * ho;
        return new xo(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
    }

    function Po(t) {
        let n;
        for (; n = t.sourceEvent;) t = n;
        return t
    }

    function Lo(t, n) {
        if (t = Po(t), void 0 === n && (n = t.currentTarget), n) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
            }
            if (n.getBoundingClientRect) {
                var o = n.getBoundingClientRect();
                return [t.clientX - o.left - n.clientLeft, t.clientY - o.top - n.clientTop]
            }
        }
        return [t.pageX, t.pageY]
    }

    function jo(t) {
        t.stopImmediatePropagation()
    }

    function Oo(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }

    function Ro(t) {
        var n = t.document.documentElement,
            e = jt(t).on("dragstart.drag", Oo, !0);
        "onselectstart" in n ? e.on("selectstart.drag", Oo, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    }

    function zo(t, n) {
        var e = t.document.documentElement,
            r = jt(t).on("dragstart.drag", null);
        n && (r.on("click.drag", Oo, !0), setTimeout((function() {
            r.on("click.drag", null)
        }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }
    Or(xo, bo, Rr(zr, {
        brighter: function(t) {
            return new xo(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new xo(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return new ro(Ao(3.1338561 * (n = vo * To(n)) - 1.6168667 * (t = 1 * To(t)) - .4906146 * (e = mo * To(e))), Ao(-.9787684 * n + 1.9161415 * t + .033454 * e), Ao(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
        }
    })), Or(ko, No, Rr(zr, {
        brighter: function(t) {
            return new ko(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new ko(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return Do(this).rgb()
        }
    }));
    const $o = t => () => t;

    function Io(t, {
        sourceEvent: n,
        subject: e,
        target: r,
        identifier: o,
        active: i,
        x: a,
        y: u,
        dx: c,
        dy: l,
        dispatch: s
    }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            subject: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            identifier: {
                value: o,
                enumerable: !0,
                configurable: !0
            },
            active: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            x: {
                value: a,
                enumerable: !0,
                configurable: !0
            },
            y: {
                value: u,
                enumerable: !0,
                configurable: !0
            },
            dx: {
                value: c,
                enumerable: !0,
                configurable: !0
            },
            dy: {
                value: l,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: s
            }
        })
    }

    function Fo(t) {
        return !t.ctrlKey && !t.button
    }

    function Yo() {
        return this.parentNode
    }

    function Co(t, n) {
        return null == n ? {
            x: t.x,
            y: t.y
        } : n
    }

    function Uo() {
        return navigator.maxTouchPoints || "ontouchstart" in this
    }

    function Ho() {
        var t, n, e, r, o = Fo,
            i = Yo,
            a = Co,
            u = Uo,
            c = {},
            l = nr("start", "drag", "end"),
            s = 0,
            f = 0;

        function h(t) {
            t.on("mousedown.drag", d).filter(u).on("touchstart.drag", m).on("touchmove.drag", g).on("touchend.drag touchcancel.drag", y).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function d(a, u) {
            if (!r && o.call(this, a, u)) {
                var c = _(this, i.call(this, a, u), a, u, "mouse");
                c && (jt(a.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), Ro(a.view), jo(a), e = !1, t = a.clientX, n = a.clientY, c("start", a))
            }
        }

        function p(r) {
            if (Oo(r), !e) {
                var o = r.clientX - t,
                    i = r.clientY - n;
                e = o * o + i * i > f
            }
            c.mouse("drag", r)
        }

        function v(t) {
            jt(t.view).on("mousemove.drag mouseup.drag", null), zo(t.view, e), Oo(t), c.mouse("end", t)
        }

        function m(t, n) {
            if (o.call(this, t, n)) {
                var e, r, a = t.changedTouches,
                    u = i.call(this, t, n),
                    c = a.length;
                for (e = 0; e < c; ++e)(r = _(this, u, t, n, a[e].identifier, a[e])) && (jo(t), r("start", t, a[e]))
            }
        }

        function g(t) {
            var n, e, r = t.changedTouches,
                o = r.length;
            for (n = 0; n < o; ++n)(e = c[r[n].identifier]) && (Oo(t), e("drag", t, r[n]))
        }

        function y(t) {
            var n, e, o = t.changedTouches,
                i = o.length;
            for (r && clearTimeout(r), r = setTimeout((function() {
                    r = null
                }), 500), n = 0; n < i; ++n)(e = c[o[n].identifier]) && (jo(t), e("end", t, o[n]))
        }

        function _(t, n, e, r, o, i) {
            var u, f, d, p = l.copy(),
                v = Lo(i || e, n);
            if (null != (d = a.call(t, new Io("beforestart", {
                    sourceEvent: e,
                    target: h,
                    identifier: o,
                    active: s,
                    x: v[0],
                    y: v[1],
                    dx: 0,
                    dy: 0,
                    dispatch: p
                }), r))) return u = d.x - v[0] || 0, f = d.y - v[1] || 0,
                function e(i, a, l) {
                    var m, g = v;
                    switch (i) {
                        case "start":
                            c[o] = e, m = s++;
                            break;
                        case "end":
                            delete c[o], --s;
                        case "drag":
                            v = Lo(l || a, n), m = s
                    }
                    p.call(i, t, new Io(i, {
                        sourceEvent: a,
                        subject: d,
                        target: h,
                        identifier: o,
                        active: m,
                        x: v[0] + u,
                        y: v[1] + f,
                        dx: v[0] - g[0],
                        dy: v[1] - g[1],
                        dispatch: p
                    }), r)
                }
        }
        return h.filter = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : $o(!!t), h) : o
        }, h.container = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : $o(t), h) : i
        }, h.subject = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : $o(t), h) : a
        }, h.touchable = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : $o(!!t), h) : u
        }, h.on = function() {
            var t = l.on.apply(l, arguments);
            return t === l ? h : t
        }, h.clickDistance = function(t) {
            return arguments.length ? (f = (t = +t) * t, h) : Math.sqrt(f)
        }, h
    }
    Io.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var qo = 1e-6,
        Xo = Math.PI,
        Bo = Xo / 2,
        Vo = Xo / 4,
        Wo = 2 * Xo,
        Go = 180 / Xo,
        Ko = Xo / 180,
        Zo = Math.abs,
        Jo = Math.atan,
        Qo = Math.atan2,
        ti = Math.cos,
        ni = Math.ceil,
        ei = (Math.exp, Math.floor, Math.hypot),
        ri = (Math.log, Math.pow, Math.sin),
        oi = Math.sign || function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        },
        ii = Math.sqrt;

    function ai(t) {
        return t > 1 ? Bo : t < -1 ? -Bo : Math.asin(t)
    }

    function ui(t) {
        return (t = ri(t / 2)) * t
    }

    function ci() {}

    function li() {
        var t, n = [];
        return {
            point: function(n, e, r) {
                t.push([n, e, r])
            },
            lineStart: function() {
                n.push(t = [])
            },
            lineEnd: ci,
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function() {
                var e = n;
                return n = [], t = null, e
            }
        }
    }

    function si(t, n) {
        return Zo(t[0] - n[0]) < qo && Zo(t[1] - n[1]) < qo
    }

    function fi(t, n, e, r) {
        this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function hi(t, n, e, r, o) {
        var i, a, u = [],
            c = [];
        if (t.forEach((function(t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e, r = t[0],
                        a = t[n];
                    if (si(r, a)) {
                        if (!r[2] && !a[2]) {
                            for (o.lineStart(), i = 0; i < n; ++i) o.point((r = t[i])[0], r[1]);
                            return void o.lineEnd()
                        }
                        a[0] += 2e-6
                    }
                    u.push(e = new fi(r, t, null, !0)), c.push(e.o = new fi(r, null, e, !1)), u.push(e = new fi(a, t, null, !1)), c.push(e.o = new fi(a, null, e, !0))
                }
            })), u.length) {
            for (c.sort(n), di(u), di(c), i = 0, a = c.length; i < a; ++i) c[i].e = e = !e;
            for (var l, s, f = u[0];;) {
                for (var h = f, d = !0; h.v;)
                    if ((h = h.n) === f) return;
                l = h.z, o.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d)
                            for (i = 0, a = l.length; i < a; ++i) o.point((s = l[i])[0], s[1]);
                        else r(h.x, h.n.x, 1, o);
                        h = h.n
                    } else {
                        if (d)
                            for (l = h.p.z, i = l.length - 1; i >= 0; --i) o.point((s = l[i])[0], s[1]);
                        else r(h.x, h.p.x, -1, o);
                        h = h.p
                    }
                    l = (h = h.o).z, d = !d
                } while (!h.v);
                o.lineEnd()
            }
        }
    }

    function di(t) {
        if (n = t.length) {
            for (var n, e, r = 0, o = t[0]; ++r < n;) o.n = e = t[r], e.p = o, o = e;
            o.n = e = t[0], e.p = o
        }
    }
    Math.tan;
    class pi {
        constructor() {
            this._partials = new Float64Array(32), this._n = 0
        }
        add(t) {
            const n = this._partials;
            let e = 0;
            for (let r = 0; r < this._n && r < 32; r++) {
                const o = n[r],
                    i = t + o,
                    a = Math.abs(t) < Math.abs(o) ? t - (i - o) : o - (i - t);
                a && (n[e++] = a), t = i
            }
            return n[e] = t, this._n = e + 1, this
        }
        valueOf() {
            const t = this._partials;
            let n, e, r, o = this._n,
                i = 0;
            if (o > 0) {
                for (i = t[--o]; o > 0 && (n = i, e = t[--o], i = n + e, r = e - (i - n), !r););
                o > 0 && (r < 0 && t[o - 1] < 0 || r > 0 && t[o - 1] > 0) && (e = 2 * r, n = i + e, e == n - i && (i = n))
            }
            return i
        }
    }

    function vi(t) {
        return [Qo(t[1], t[0]), ai(t[2])]
    }

    function mi(t) {
        var n = t[0],
            e = t[1],
            r = ti(e);
        return [r * ti(n), r * ri(n), ri(e)]
    }

    function gi(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function yi(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function _i(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function wi(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function bi(t) {
        var n = ii(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function xi(t) {
        return Zo(t[0]) <= Xo ? t[0] : oi(t[0]) * ((Zo(t[0]) + Xo) % Wo - Xo)
    }

    function Mi(t) {
        return Array.from(function*(t) {
            for (const n of t) yield* n
        }(t))
    }

    function Ti(t, n, e, r) {
        return function(o) {
            var i, a, u, c = n(o),
                l = li(),
                s = n(l),
                f = !1,
                h = {
                    point: d,
                    lineStart: v,
                    lineEnd: m,
                    polygonStart: function() {
                        h.point = g, h.lineStart = y, h.lineEnd = _, a = [], i = []
                    },
                    polygonEnd: function() {
                        h.point = d, h.lineStart = v, h.lineEnd = m, a = Mi(a);
                        var t = function(t, n) {
                            var e = xi(n),
                                r = n[1],
                                o = ri(r),
                                i = [ri(e), -ti(e), 0],
                                a = 0,
                                u = 0,
                                c = new pi;
                            1 === o ? r = Bo + qo : -1 === o && (r = -Bo - qo);
                            for (var l = 0, s = t.length; l < s; ++l)
                                if (h = (f = t[l]).length)
                                    for (var f, h, d = f[h - 1], p = xi(d), v = d[1] / 2 + Vo, m = ri(v), g = ti(v), y = 0; y < h; ++y, p = w, m = x, g = M, d = _) {
                                        var _ = f[y],
                                            w = xi(_),
                                            b = _[1] / 2 + Vo,
                                            x = ri(b),
                                            M = ti(b),
                                            T = w - p,
                                            A = T >= 0 ? 1 : -1,
                                            E = A * T,
                                            S = E > Xo,
                                            N = m * x;
                                        if (c.add(Qo(N * A * ri(E), g * M + N * ti(E))), a += S ? T + A * Wo : T, S ^ p >= e ^ w >= e) {
                                            var k = yi(mi(d), mi(_));
                                            bi(k);
                                            var D = yi(i, k);
                                            bi(D);
                                            var P = (S ^ T >= 0 ? -1 : 1) * ai(D[2]);
                                            (r > P || r === P && (k[0] || k[1])) && (u += S ^ T >= 0 ? 1 : -1)
                                        }
                                    }
                            return (a < -qo || a < qo && c < -1e-12) ^ 1 & u
                        }(i, r);
                        a.length ? (f || (o.polygonStart(), f = !0), hi(a, Ei, t, e, o)) : t && (f || (o.polygonStart(), f = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), f && (o.polygonEnd(), f = !1), a = i = null
                    },
                    sphere: function() {
                        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                    }
                };

            function d(n, e) {
                t(n, e) && o.point(n, e)
            }

            function p(t, n) {
                c.point(t, n)
            }

            function v() {
                h.point = p, c.lineStart()
            }

            function m() {
                h.point = d, c.lineEnd()
            }

            function g(t, n) {
                u.push([t, n]), s.point(t, n)
            }

            function y() {
                s.lineStart(), u = []
            }

            function _() {
                g(u[0][0], u[0][1]), s.lineEnd();
                var t, n, e, r, c = s.clean(),
                    h = l.result(),
                    d = h.length;
                if (u.pop(), i.push(u), u = null, d)
                    if (1 & c) {
                        if ((n = (e = h[0]).length - 1) > 0) {
                            for (f || (o.polygonStart(), f = !0), o.lineStart(), t = 0; t < n; ++t) o.point((r = e[t])[0], r[1]);
                            o.lineEnd()
                        }
                    } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(Ai))
            }
            return h
        }
    }

    function Ai(t) {
        return t.length > 1
    }

    function Ei(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - Bo - qo : Bo - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Bo - qo : Bo - n[1])
    }
    const Si = Ti((function() {
        return !0
    }), (function(t) {
        var n, e = NaN,
            r = NaN,
            o = NaN;
        return {
            lineStart: function() {
                t.lineStart(), n = 1
            },
            point: function(i, a) {
                var u = i > 0 ? Xo : -Xo,
                    c = Zo(i - e);
                Zo(c - Xo) < qo ? (t.point(e, r = (r + a) / 2 > 0 ? Bo : -Bo), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(i, r), n = 0) : o !== u && c >= Xo && (Zo(e - o) < qo && (e -= o * qo), Zo(i - u) < qo && (i -= u * qo), r = function(t, n, e, r) {
                    var o, i, a = ri(t - e);
                    return Zo(a) > qo ? Jo((ri(n) * (i = ti(r)) * ri(e) - ri(r) * (o = ti(n)) * ri(t)) / (o * i * a)) : (n + r) / 2
                }(e, r, i, a), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = i, r = a), o = u
            },
            lineEnd: function() {
                t.lineEnd(), e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    }), (function(t, n, e, r) {
        var o;
        if (null == t) o = e * Bo, r.point(-Xo, o), r.point(0, o), r.point(Xo, o), r.point(Xo, 0), r.point(Xo, -o), r.point(0, -o), r.point(-Xo, -o), r.point(-Xo, 0), r.point(-Xo, o);
        else if (Zo(t[0] - n[0]) > qo) {
            var i = t[0] < n[0] ? Xo : -Xo;
            o = e * i / 2, r.point(-i, o), r.point(0, o), r.point(i, o)
        } else r.point(n[0], n[1])
    }), [-Xo, -Bo]);

    function Ni(t, n) {
        (n = mi(n))[0] -= t, bi(n);
        var e, r = (e = -n[1]) > 1 ? 0 : e < -1 ? Xo : Math.acos(e);
        return ((-n[2] < 0 ? -r : r) + Wo - qo) % Wo
    }

    function ki(t) {
        var n = ti(t),
            e = 6 * Ko,
            r = n > 0,
            o = Zo(n) > qo;

        function i(t, e) {
            return ti(t) * ti(e) > n
        }

        function a(t, e, r) {
            var o = [1, 0, 0],
                i = yi(mi(t), mi(e)),
                a = gi(i, i),
                u = i[0],
                c = a - u * u;
            if (!c) return !r && t;
            var l = n * a / c,
                s = -n * u / c,
                f = yi(o, i),
                h = wi(o, l);
            _i(h, wi(i, s));
            var d = f,
                p = gi(h, d),
                v = gi(d, d),
                m = p * p - v * (gi(h, h) - 1);
            if (!(m < 0)) {
                var g = ii(m),
                    y = wi(d, (-p - g) / v);
                if (_i(y, h), y = vi(y), !r) return y;
                var _, w = t[0],
                    b = e[0],
                    x = t[1],
                    M = e[1];
                b < w && (_ = w, w = b, b = _);
                var T = b - w,
                    A = Zo(T - Xo) < qo;
                if (!A && M < x && (_ = x, x = M, M = _), A || T < qo ? A ? x + M > 0 ^ y[1] < (Zo(y[0] - w) < qo ? x : M) : x <= y[1] && y[1] <= M : T > Xo ^ (w <= y[0] && y[0] <= b)) {
                    var E = wi(d, (-p + g) / v);
                    return _i(E, h), [y, vi(E)]
                }
            }
        }

        function u(n, e) {
            var o = r ? t : Xo - t,
                i = 0;
            return n < -o ? i |= 1 : n > o && (i |= 2), e < -o ? i |= 4 : e > o && (i |= 8), i
        }
        return Ti(i, (function(t) {
            var n, e, c, l, s;
            return {
                lineStart: function() {
                    l = c = !1, s = 1
                },
                point: function(f, h) {
                    var d, p = [f, h],
                        v = i(f, h),
                        m = r ? v ? 0 : u(f, h) : v ? u(f + (f < 0 ? Xo : -Xo), h) : 0;
                    if (!n && (l = c = v) && t.lineStart(), v !== c && (!(d = a(n, p)) || si(n, d) || si(p, d)) && (p[2] = 1), v !== c) s = 0, v ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1], 2), t.lineEnd()), n = d;
                    else if (o && n && r ^ v) {
                        var g;
                        m & e || !(g = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(g[0][0], g[0][1]), t.point(g[1][0], g[1][1]), t.lineEnd()) : (t.point(g[1][0], g[1][1]), t.lineEnd(), t.lineStart(), t.point(g[0][0], g[0][1], 3)))
                    }!v || n && si(n, p) || t.point(p[0], p[1]), n = p, c = v, e = m
                },
                lineEnd: function() {
                    c && t.lineEnd(), n = null
                },
                clean: function() {
                    return s | (l && c) << 1
                }
            }
        }), (function(n, r, o, i) {
            ! function(t, n, e, r, o, i) {
                if (e) {
                    var a = ti(n),
                        u = ri(n),
                        c = r * e;
                    null == o ? (o = n + r * Wo, i = n - c / 2) : (o = Ni(a, o), i = Ni(a, i), (r > 0 ? o < i : o > i) && (o += r * Wo));
                    for (var l, s = o; r > 0 ? s > i : s < i; s -= c) l = vi([a, -u * ti(s), -u * ri(s)]), t.point(l[0], l[1])
                }
            }(i, t, e, o, n, r)
        }), r ? [0, -t] : [-Xo, t - Xo])
    }
    var Di = 1e9,
        Pi = -Di;

    function Li(t, n, e, r) {
        function o(o, i) {
            return t <= o && o <= e && n <= i && i <= r
        }

        function i(o, i, u, l) {
            var s = 0,
                f = 0;
            if (null == o || (s = a(o, u)) !== (f = a(i, u)) || c(o, i) < 0 ^ u > 0)
                do {
                    l.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
                } while ((s = (s + u + 4) % 4) !== f);
            else l.point(i[0], i[1])
        }

        function a(r, o) {
            return Zo(r[0] - t) < qo ? o > 0 ? 0 : 3 : Zo(r[0] - e) < qo ? o > 0 ? 2 : 1 : Zo(r[1] - n) < qo ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
        }

        function u(t, n) {
            return c(t.x, n.x)
        }

        function c(t, n) {
            var e = a(t, 1),
                r = a(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(a) {
            var c, l, s, f, h, d, p, v, m, g, y, _ = a,
                w = li(),
                b = {
                    point: x,
                    lineStart: function() {
                        b.point = M, l && l.push(s = []), g = !0, m = !1, p = v = NaN
                    },
                    lineEnd: function() {
                        c && (M(f, h), d && m && w.rejoin(), c.push(w.result())), b.point = x, m && _.lineEnd()
                    },
                    polygonStart: function() {
                        _ = w, c = [], l = [], y = !0
                    },
                    polygonEnd: function() {
                        var n = function() {
                                for (var n = 0, e = 0, o = l.length; e < o; ++e)
                                    for (var i, a, u = l[e], c = 1, s = u.length, f = u[0], h = f[0], d = f[1]; c < s; ++c) i = h, a = d, h = (f = u[c])[0], d = f[1], a <= r ? d > r && (h - i) * (r - a) > (d - a) * (t - i) && ++n : d <= r && (h - i) * (r - a) < (d - a) * (t - i) && --n;
                                return n
                            }(),
                            e = y && n,
                            o = (c = Mi(c)).length;
                        (e || o) && (a.polygonStart(), e && (a.lineStart(), i(null, null, 1, a), a.lineEnd()), o && hi(c, u, n, i, a), a.polygonEnd()), _ = a, c = l = s = null
                    }
                };

            function x(t, n) {
                o(t, n) && _.point(t, n)
            }

            function M(i, a) {
                var u = o(i, a);
                if (l && s.push([i, a]), g) f = i, h = a, d = u, g = !1, u && (_.lineStart(), _.point(i, a));
                else if (u && m) _.point(i, a);
                else {
                    var c = [p = Math.max(Pi, Math.min(Di, p)), v = Math.max(Pi, Math.min(Di, v))],
                        w = [i = Math.max(Pi, Math.min(Di, i)), a = Math.max(Pi, Math.min(Di, a))];
                    ! function(t, n, e, r, o, i) {
                        var a, u = t[0],
                            c = t[1],
                            l = 0,
                            s = 1,
                            f = n[0] - u,
                            h = n[1] - c;
                        if (a = e - u, f || !(a > 0)) {
                            if (a /= f, f < 0) {
                                if (a < l) return;
                                a < s && (s = a)
                            } else if (f > 0) {
                                if (a > s) return;
                                a > l && (l = a)
                            }
                            if (a = o - u, f || !(a < 0)) {
                                if (a /= f, f < 0) {
                                    if (a > s) return;
                                    a > l && (l = a)
                                } else if (f > 0) {
                                    if (a < l) return;
                                    a < s && (s = a)
                                }
                                if (a = r - c, h || !(a > 0)) {
                                    if (a /= h, h < 0) {
                                        if (a < l) return;
                                        a < s && (s = a)
                                    } else if (h > 0) {
                                        if (a > s) return;
                                        a > l && (l = a)
                                    }
                                    if (a = i - c, h || !(a < 0)) {
                                        if (a /= h, h < 0) {
                                            if (a > s) return;
                                            a > l && (l = a)
                                        } else if (h > 0) {
                                            if (a < l) return;
                                            a < s && (s = a)
                                        }
                                        return l > 0 && (t[0] = u + l * f, t[1] = c + l * h), s < 1 && (n[0] = u + s * f, n[1] = c + s * h), !0
                                    }
                                }
                            }
                        }
                    }(c, w, t, n, e, r) ? u && (_.lineStart(), _.point(i, a), y = !1): (m || (_.lineStart(), _.point(c[0], c[1])), _.point(w[0], w[1]), u || _.lineEnd(), y = !1)
                }
                p = i, v = a, m = u
            }
            return b
        }
    }

    function ji(t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function(e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }), e
    }
    const Oi = t => t;

    function Ri(t, n) {
        return [Zo(t) > Xo ? t + Math.round(-t / Wo) * Wo : t, n]
    }

    function zi(t) {
        return function(n, e) {
            return [(n += t) > Xo ? n - Wo : n < -Xo ? n + Wo : n, e]
        }
    }

    function $i(t) {
        var n = zi(t);
        return n.invert = zi(-t), n
    }

    function Ii(t, n) {
        var e = ti(t),
            r = ri(t),
            o = ti(n),
            i = ri(n);

        function a(t, n) {
            var a = ti(n),
                u = ti(t) * a,
                c = ri(t) * a,
                l = ri(n),
                s = l * e + u * r;
            return [Qo(c * o - s * i, u * e - l * r), ai(s * o + c * i)]
        }
        return a.invert = function(t, n) {
            var a = ti(n),
                u = ti(t) * a,
                c = ri(t) * a,
                l = ri(n),
                s = l * o - c * i;
            return [Qo(c * o + l * i, u * e + s * r), ai(s * e - u * r)]
        }, a
    }

    function Fi(t) {
        return function(n) {
            var e = new Yi;
            for (var r in t) e[r] = t[r];
            return e.stream = n, e
        }
    }

    function Yi() {}

    function Ci(t, n) {
        t && Hi.hasOwnProperty(t.type) && Hi[t.type](t, n)
    }
    Ri.invert = Ri, Yi.prototype = {
        constructor: Yi,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var Ui = {
            Feature: function(t, n) {
                Ci(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, o = e.length; ++r < o;) Ci(e[r].geometry, n)
            }
        },
        Hi = {
            Sphere: function(t, n) {
                n.sphere()
            },
            Point: function(t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) t = e[r], n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
                qi(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) qi(e[r], n, 0)
            },
            Polygon: function(t, n) {
                Xi(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) Xi(e[r], n)
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, o = e.length; ++r < o;) Ci(e[r], n)
            }
        };

    function qi(t, n, e) {
        var r, o = -1,
            i = t.length - e;
        for (n.lineStart(); ++o < i;) r = t[o], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function Xi(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r;) qi(t[e], n, 1);
        n.polygonEnd()
    }

    function Bi(t, n) {
        t && Ui.hasOwnProperty(t.type) ? Ui[t.type](t, n) : Ci(t, n)
    }
    var Vi = 1 / 0,
        Wi = Vi,
        Gi = -Vi,
        Ki = Gi;
    const Zi = {
        point: function(t, n) {
            t < Vi && (Vi = t), t > Gi && (Gi = t), n < Wi && (Wi = n), n > Ki && (Ki = n)
        },
        lineStart: ci,
        lineEnd: ci,
        polygonStart: ci,
        polygonEnd: ci,
        result: function() {
            var t = [
                [Vi, Wi],
                [Gi, Ki]
            ];
            return Gi = Ki = -(Wi = Vi = 1 / 0), t
        }
    };

    function Ji(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Bi(e, t.stream(Zi)), n(Zi.result()), null != r && t.clipExtent(r), t
    }

    function Qi(t, n, e) {
        return Ji(t, (function(e) {
            var r = n[1][0] - n[0][0],
                o = n[1][1] - n[0][1],
                i = Math.min(r / (e[1][0] - e[0][0]), o / (e[1][1] - e[0][1])),
                a = +n[0][0] + (r - i * (e[1][0] + e[0][0])) / 2,
                u = +n[0][1] + (o - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([a, u])
        }), e)
    }
    var ta = ti(30 * Ko);

    function na(t, n) {
        return +n ? function(t, n) {
            function e(r, o, i, a, u, c, l, s, f, h, d, p, v, m) {
                var g = l - r,
                    y = s - o,
                    _ = g * g + y * y;
                if (_ > 4 * n && v--) {
                    var w = a + h,
                        b = u + d,
                        x = c + p,
                        M = ii(w * w + b * b + x * x),
                        T = ai(x /= M),
                        A = Zo(Zo(x) - 1) < qo || Zo(i - f) < qo ? (i + f) / 2 : Qo(b, w),
                        E = t(A, T),
                        S = E[0],
                        N = E[1],
                        k = S - r,
                        D = N - o,
                        P = y * k - g * D;
                    (P * P / _ > n || Zo((g * k + y * D) / _ - .5) > .3 || a * h + u * d + c * p < ta) && (e(r, o, i, a, u, c, S, N, A, w /= M, b /= M, x, v, m), m.point(S, N), e(S, N, A, w, b, x, l, s, f, h, d, p, v, m))
                }
            }
            return function(n) {
                var r, o, i, a, u, c, l, s, f, h, d, p, v = {
                    point: m,
                    lineStart: g,
                    lineEnd: _,
                    polygonStart: function() {
                        n.polygonStart(), v.lineStart = w
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), v.lineStart = g
                    }
                };

                function m(e, r) {
                    e = t(e, r), n.point(e[0], e[1])
                }

                function g() {
                    s = NaN, v.point = y, n.lineStart()
                }

                function y(r, o) {
                    var i = mi([r, o]),
                        a = t(r, o);
                    e(s, f, l, h, d, p, s = a[0], f = a[1], l = r, h = i[0], d = i[1], p = i[2], 16, n), n.point(s, f)
                }

                function _() {
                    v.point = m, n.lineEnd()
                }

                function w() {
                    g(), v.point = b, v.lineEnd = x
                }

                function b(t, n) {
                    y(r = t, n), o = s, i = f, a = h, u = d, c = p, v.point = y
                }

                function x() {
                    e(s, f, l, h, d, p, o, i, r, a, u, c, 16, n), v.lineEnd = _, _()
                }
                return v
            }
        }(t, n) : function(t) {
            return Fi({
                point: function(n, e) {
                    n = t(n, e), this.stream.point(n[0], n[1])
                }
            })
        }(t)
    }
    var ea = Fi({
        point: function(t, n) {
            this.stream.point(t * Ko, n * Ko)
        }
    });

    function ra(t, n, e, r, o, i) {
        if (!i) return function(t, n, e, r, o) {
            function i(i, a) {
                return [n + t * (i *= r), e - t * (a *= o)]
            }
            return i.invert = function(i, a) {
                return [(i - n) / t * r, (e - a) / t * o]
            }, i
        }(t, n, e, r, o);
        var a = ti(i),
            u = ri(i),
            c = a * t,
            l = u * t,
            s = a / t,
            f = u / t,
            h = (u * e - a * n) / t,
            d = (u * n + a * e) / t;

        function p(t, i) {
            return [c * (t *= r) - l * (i *= o) + n, e - l * t - c * i]
        }
        return p.invert = function(t, n) {
            return [r * (s * t - f * n + h), o * (d - f * t - s * n)]
        }, p
    }

    function oa(t) {
        return ia((function() {
            return t
        }))()
    }

    function ia(t) {
        var n, e, r, o, i, a, u, c, l, s, f = 150,
            h = 480,
            d = 250,
            p = 0,
            v = 0,
            m = 0,
            g = 0,
            y = 0,
            _ = 0,
            w = 1,
            b = 1,
            x = null,
            M = Si,
            T = null,
            A = Oi,
            E = .5;

        function S(t) {
            return c(t[0] * Ko, t[1] * Ko)
        }

        function N(t) {
            return (t = c.invert(t[0], t[1])) && [t[0] * Go, t[1] * Go]
        }

        function k() {
            var t = ra(f, 0, 0, w, b, _).apply(null, n(p, v)),
                r = ra(f, h - t[0], d - t[1], w, b, _);
            return e = function(t, n, e) {
                return (t %= Wo) ? n || e ? ji($i(t), Ii(n, e)) : $i(t) : n || e ? Ii(n, e) : Ri
            }(m, g, y), u = ji(n, r), c = ji(e, u), a = na(u, E), D()
        }

        function D() {
            return l = s = null, S
        }
        return S.stream = function(t) {
                return l && s === t ? l : l = ea(function(t) {
                    return Fi({
                        point: function(n, e) {
                            var r = t(n, e);
                            return this.stream.point(r[0], r[1])
                        }
                    })
                }(e)(M(a(A(s = t)))))
            }, S.preclip = function(t) {
                return arguments.length ? (M = t, x = void 0, D()) : M
            }, S.postclip = function(t) {
                return arguments.length ? (A = t, T = r = o = i = null, D()) : A
            }, S.clipAngle = function(t) {
                return arguments.length ? (M = +t ? ki(x = t * Ko) : (x = null, Si), D()) : x * Go
            }, S.clipExtent = function(t) {
                return arguments.length ? (A = null == t ? (T = r = o = i = null, Oi) : Li(T = +t[0][0], r = +t[0][1], o = +t[1][0], i = +t[1][1]), D()) : null == T ? null : [
                    [T, r],
                    [o, i]
                ]
            }, S.scale = function(t) {
                return arguments.length ? (f = +t, k()) : f
            }, S.translate = function(t) {
                return arguments.length ? (h = +t[0], d = +t[1], k()) : [h, d]
            }, S.center = function(t) {
                return arguments.length ? (p = t[0] % 360 * Ko, v = t[1] % 360 * Ko, k()) : [p * Go, v * Go]
            }, S.rotate = function(t) {
                return arguments.length ? (m = t[0] % 360 * Ko, g = t[1] % 360 * Ko, y = t.length > 2 ? t[2] % 360 * Ko : 0, k()) : [m * Go, g * Go, y * Go]
            }, S.angle = function(t) {
                return arguments.length ? (_ = t % 360 * Ko, k()) : _ * Go
            }, S.reflectX = function(t) {
                return arguments.length ? (w = t ? -1 : 1, k()) : w < 0
            }, S.reflectY = function(t) {
                return arguments.length ? (b = t ? -1 : 1, k()) : b < 0
            }, S.precision = function(t) {
                return arguments.length ? (a = na(u, E = t * t), D()) : ii(E)
            }, S.fitExtent = function(t, n) {
                return Qi(S, t, n)
            }, S.fitSize = function(t, n) {
                return function(t, n, e) {
                    return Qi(t, [
                        [0, 0], n
                    ], e)
                }(S, t, n)
            }, S.fitWidth = function(t, n) {
                return function(t, n, e) {
                    return Ji(t, (function(e) {
                        var r = +n,
                            o = r / (e[1][0] - e[0][0]),
                            i = (r - o * (e[1][0] + e[0][0])) / 2,
                            a = -o * e[0][1];
                        t.scale(150 * o).translate([i, a])
                    }), e)
                }(S, t, n)
            }, S.fitHeight = function(t, n) {
                return function(t, n, e) {
                    return Ji(t, (function(e) {
                        var r = +n,
                            o = r / (e[1][1] - e[0][1]),
                            i = -o * e[0][0],
                            a = (r - o * (e[1][1] + e[0][1])) / 2;
                        t.scale(150 * o).translate([i, a])
                    }), e)
                }(S, t, n)
            },
            function() {
                return n = t.apply(this, arguments), S.invert = n.invert && N, k()
            }
    }

    function aa(t, n) {
        return [t, n]
    }

    function ua() {
        return oa(aa).scale(152.63)
    }

    function ca(t, n) {
        var e = ti(t),
            r = t === n ? ri(t) : (e - ti(n)) / (n - t),
            o = e / r + t;
        if (Zo(r) < qo) return aa;

        function i(t, n) {
            var e = o - n,
                i = r * t;
            return [e * ri(i), o - e * ti(i)]
        }
        return i.invert = function(t, n) {
            var e = o - n,
                i = Qo(t, Zo(e)) * oi(e);
            return e * r < 0 && (i -= Xo * oi(t) * oi(e)), [i / r, o - oi(r) * ii(t * t + e * e)]
        }, i
    }

    function la() {
        return function(t) {
            var n = 0,
                e = Xo / 3,
                r = ia(t),
                o = r(n, e);
            return o.parallels = function(t) {
                return arguments.length ? r(n = t[0] * Ko, e = t[1] * Ko) : [n * Go, e * Go]
            }, o
        }(ca).scale(131.154).center([0, 13.9389])
    }

    function sa(t, n, e) {
        t = +t, n = +n, e = (o = arguments.length) < 2 ? (n = t, t = 0, 1) : o < 3 ? 1 : +e;
        for (var r = -1, o = 0 | Math.max(0, Math.ceil((n - t) / e)), i = new Array(o); ++r < o;) i[r] = t + r * e;
        return i
    }

    function fa(t, n, e) {
        var r = sa(t, n - qo, e).concat(n);
        return function(t) {
            return r.map((function(n) {
                return [t, n]
            }))
        }
    }

    function ha(t, n, e) {
        var r = sa(t, n - qo, e).concat(n);
        return function(t) {
            return r.map((function(n) {
                return [n, t]
            }))
        }
    }

    function da() {
        var t, n, e, r, o, i, a, u, c, l, s, f, h = 10,
            d = h,
            p = 90,
            v = 360,
            m = 2.5;

        function g() {
            return {
                type: "MultiLineString",
                coordinates: y()
            }
        }

        function y() {
            return sa(ni(r / p) * p, e, p).map(s).concat(sa(ni(u / v) * v, a, v).map(f)).concat(sa(ni(n / h) * h, t, h).filter((function(t) {
                return Zo(t % p) > qo
            })).map(c)).concat(sa(ni(i / d) * d, o, d).filter((function(t) {
                return Zo(t % v) > qo
            })).map(l))
        }
        return g.lines = function() {
            return y().map((function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            }))
        }, g.outline = function() {
            return {
                type: "Polygon",
                coordinates: [s(r).concat(f(a).slice(1), s(e).reverse().slice(1), f(u).reverse().slice(1))]
            }
        }, g.extent = function(t) {
            return arguments.length ? g.extentMajor(t).extentMinor(t) : g.extentMinor()
        }, g.extentMajor = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), g.precision(m)) : [
                [r, u],
                [e, a]
            ]
        }, g.extentMinor = function(e) {
            return arguments.length ? (n = +e[0][0], t = +e[1][0], i = +e[0][1], o = +e[1][1], n > t && (e = n, n = t, t = e), i > o && (e = i, i = o, o = e), g.precision(m)) : [
                [n, i],
                [t, o]
            ]
        }, g.step = function(t) {
            return arguments.length ? g.stepMajor(t).stepMinor(t) : g.stepMinor()
        }, g.stepMajor = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], g) : [p, v]
        }, g.stepMinor = function(t) {
            return arguments.length ? (h = +t[0], d = +t[1], g) : [h, d]
        }, g.precision = function(h) {
            return arguments.length ? (m = +h, c = fa(i, o, 90), l = ha(n, t, m), s = fa(u, a, 90), f = ha(r, e, m), g) : m
        }, g.extentMajor([
            [-180, -89.999999],
            [180, 89.999999]
        ]).extentMinor([
            [-180, -80.000001],
            [180, 80.000001]
        ])
    }

    function pa(t) {
        return function(n, e) {
            var r = ii(n * n + e * e),
                o = t(r),
                i = ri(o),
                a = ti(o);
            return [Qo(n * i, r * a), ai(r && e * i / r)]
        }
    }

    function va(t, n) {
        return [ti(n) * ri(t), ri(n)]
    }

    function ma() {
        return oa(va).scale(249.5).clipAngle(90.000001)
    }
    aa.invert = aa, va.invert = pa(ai);
    var ga, ya, _a, wa, ba = new pi,
        xa = new pi,
        Ma = {
            point: ci,
            lineStart: ci,
            lineEnd: ci,
            polygonStart: function() {
                Ma.lineStart = Ta, Ma.lineEnd = Sa
            },
            polygonEnd: function() {
                Ma.lineStart = Ma.lineEnd = Ma.point = ci, ba.add(Zo(xa)), xa = new pi
            },
            result: function() {
                var t = ba / 2;
                return ba = new pi, t
            }
        };

    function Ta() {
        Ma.point = Aa
    }

    function Aa(t, n) {
        Ma.point = Ea, ga = _a = t, ya = wa = n
    }

    function Ea(t, n) {
        xa.add(wa * t - _a * n), _a = t, wa = n
    }

    function Sa() {
        Ea(ga, ya)
    }
    const Na = Ma;
    var ka, Da, Pa, La, ja = 0,
        Oa = 0,
        Ra = 0,
        za = 0,
        $a = 0,
        Ia = 0,
        Fa = 0,
        Ya = 0,
        Ca = 0,
        Ua = {
            point: Ha,
            lineStart: qa,
            lineEnd: Va,
            polygonStart: function() {
                Ua.lineStart = Wa, Ua.lineEnd = Ga
            },
            polygonEnd: function() {
                Ua.point = Ha, Ua.lineStart = qa, Ua.lineEnd = Va
            },
            result: function() {
                var t = Ca ? [Fa / Ca, Ya / Ca] : Ia ? [za / Ia, $a / Ia] : Ra ? [ja / Ra, Oa / Ra] : [NaN, NaN];
                return ja = Oa = Ra = za = $a = Ia = Fa = Ya = Ca = 0, t
            }
        };

    function Ha(t, n) {
        ja += t, Oa += n, ++Ra
    }

    function qa() {
        Ua.point = Xa
    }

    function Xa(t, n) {
        Ua.point = Ba, Ha(Pa = t, La = n)
    }

    function Ba(t, n) {
        var e = t - Pa,
            r = n - La,
            o = ii(e * e + r * r);
        za += o * (Pa + t) / 2, $a += o * (La + n) / 2, Ia += o, Ha(Pa = t, La = n)
    }

    function Va() {
        Ua.point = Ha
    }

    function Wa() {
        Ua.point = Ka
    }

    function Ga() {
        Za(ka, Da)
    }

    function Ka(t, n) {
        Ua.point = Za, Ha(ka = Pa = t, Da = La = n)
    }

    function Za(t, n) {
        var e = t - Pa,
            r = n - La,
            o = ii(e * e + r * r);
        za += o * (Pa + t) / 2, $a += o * (La + n) / 2, Ia += o, Fa += (o = La * t - Pa * n) * (Pa + t), Ya += o * (La + n), Ca += 3 * o, Ha(Pa = t, La = n)
    }
    const Ja = Ua;

    function Qa(t) {
        this._context = t
    }
    Qa.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t, this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(), this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Wo)
            }
        },
        result: ci
    };
    var tu, nu, eu, ru, ou, iu = new pi,
        au = {
            point: ci,
            lineStart: function() {
                au.point = uu
            },
            lineEnd: function() {
                tu && cu(nu, eu), au.point = ci
            },
            polygonStart: function() {
                tu = !0
            },
            polygonEnd: function() {
                tu = null
            },
            result: function() {
                var t = +iu;
                return iu = new pi, t
            }
        };

    function uu(t, n) {
        au.point = cu, nu = ru = t, eu = ou = n
    }

    function cu(t, n) {
        ru -= t, ou -= n, iu.add(ii(ru * ru + ou * ou)), ru = t, ou = n
    }
    const lu = au;

    function su() {
        this._string = []
    }

    function fu(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function hu(t, n) {
        var e, r, o = 4.5;

        function i(t) {
            return t && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)), Bi(t, e(r))), r.result()
        }
        return i.area = function(t) {
            return Bi(t, e(Na)), Na.result()
        }, i.measure = function(t) {
            return Bi(t, e(lu)), lu.result()
        }, i.bounds = function(t) {
            return Bi(t, e(Zi)), Zi.result()
        }, i.centroid = function(t) {
            return Bi(t, e(Ja)), Ja.result()
        }, i.projection = function(n) {
            return arguments.length ? (e = null == n ? (t = null, Oi) : (t = n).stream, i) : t
        }, i.context = function(t) {
            return arguments.length ? (r = null == t ? (n = null, new su) : new Qa(n = t), "function" != typeof o && r.pointRadius(o), i) : n
        }, i.pointRadius = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : (r.pointRadius(+t), +t), i) : o
        }, i.projection(t).context(n)
    }

    function du(t, n) {
        var e = ti(n),
            r = 1 + ti(t) * e;
        return [e * ri(t) / r, ri(n) / r]
    }

    function pu() {
        return oa(du).scale(250).clipAngle(142)
    }
    su.prototype = {
        _radius: 4.5,
        _circle: fu(4.5),
        pointRadius: function(t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"), this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = fu(this._radius)), this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
            return null
        }
    }, du.invert = pa((function(t) {
        return 2 * Jo(t)
    }));
    var vu = Math.abs,
        mu = (Math.atan, Math.atan2),
        gu = (Math.ceil, Math.cos),
        yu = (Math.exp, Math.floor, Math.log, Math.max),
        _u = Math.min,
        wu = (Math.pow, Math.round, Math.sign, Math.sin),
        bu = (Math.tan, 1e-6),
        xu = Math.PI,
        Mu = xu / 2,
        Tu = (Math.SQRT1_2, ku(2)),
        Au = (ku(xu), 180 / xu),
        Eu = xu / 180;

    function Su(t) {
        return t > 1 ? Mu : t < -1 ? -Mu : Math.asin(t)
    }

    function Nu(t) {
        return t > 1 ? 0 : t < -1 ? xu : Math.acos(t)
    }

    function ku(t) {
        return t > 0 ? Math.sqrt(t) : 0
    }

    function Du(t, n) {
        var e, r = t * wu(n),
            o = 30;
        do {
            n -= e = (n + wu(n) - r) / (1 + gu(n))
        } while (vu(e) > bu && --o > 0);
        return n / 2
    }
    var Pu = function(t, n, e) {
        function r(r, o) {
            return [t * r * gu(o = Du(e, o)), n * wu(o)]
        }
        return r.invert = function(r, o) {
            return o = Su(o / n), [r / (t * gu(o)), Su((2 * o + wu(2 * o)) / e)]
        }, r
    }(Tu / Mu, Tu, xu);

    function Lu() {
        return oa(Pu).scale(169.529)
    }
    var ju, Ou, Ru, zu, $u, Iu, Fu, Yu, Cu, Uu, Hu, qu, Xu, Bu, Vu, Wu, Gu = 1.0148,
        Ku = .23185,
        Zu = -.14499,
        Ju = .02406,
        Qu = 1.790857183;

    function tc(t, n) {
        var e = n * n;
        return [t, n * (Gu + e * e * (Ku + e * (Zu + Ju * e)))]
    }

    function nc() {
        return oa(tc).scale(139.319)
    }
    tc.invert = function(t, n) {
        n > Qu ? n = Qu : n < -1.790857183 && (n = -1.790857183);
        var e, r = n;
        do {
            var o = r * r;
            r -= e = (r * (Gu + o * o * (Ku + o * (Zu + Ju * o))) - n) / (1.0148 + o * o * (1.1592500000000001 + o * (.21654 * o - 1.01493)))
        } while (vu(e) > bu);
        return [t, r]
    };
    var ec = {
        sphere: ci,
        point: rc,
        lineStart: ic,
        lineEnd: cc,
        polygonStart: function() {
            ec.lineStart = lc, ec.lineEnd = sc
        },
        polygonEnd: function() {
            ec.lineStart = ic, ec.lineEnd = cc
        }
    };

    function rc(t, n) {
        t *= Ko;
        var e = ti(n *= Ko);
        oc(e * ti(t), e * ri(t), ri(n))
    }

    function oc(t, n, e) {
        ++ju, Ru += (t - Ru) / ju, zu += (n - zu) / ju, $u += (e - $u) / ju
    }

    function ic() {
        ec.point = ac
    }

    function ac(t, n) {
        t *= Ko;
        var e = ti(n *= Ko);
        Bu = e * ti(t), Vu = e * ri(t), Wu = ri(n), ec.point = uc, oc(Bu, Vu, Wu)
    }

    function uc(t, n) {
        t *= Ko;
        var e = ti(n *= Ko),
            r = e * ti(t),
            o = e * ri(t),
            i = ri(n),
            a = Qo(ii((a = Vu * i - Wu * o) * a + (a = Wu * r - Bu * i) * a + (a = Bu * o - Vu * r) * a), Bu * r + Vu * o + Wu * i);
        Ou += a, Iu += a * (Bu + (Bu = r)), Fu += a * (Vu + (Vu = o)), Yu += a * (Wu + (Wu = i)), oc(Bu, Vu, Wu)
    }

    function cc() {
        ec.point = rc
    }

    function lc() {
        ec.point = fc
    }

    function sc() {
        hc(qu, Xu), ec.point = rc
    }

    function fc(t, n) {
        qu = t, Xu = n, t *= Ko, n *= Ko, ec.point = hc;
        var e = ti(n);
        Bu = e * ti(t), Vu = e * ri(t), Wu = ri(n), oc(Bu, Vu, Wu)
    }

    function hc(t, n) {
        t *= Ko;
        var e = ti(n *= Ko),
            r = e * ti(t),
            o = e * ri(t),
            i = ri(n),
            a = Vu * i - Wu * o,
            u = Wu * r - Bu * i,
            c = Bu * o - Vu * r,
            l = ei(a, u, c),
            s = ai(l),
            f = l && -s / l;
        Cu.add(f * a), Uu.add(f * u), Hu.add(f * c), Ou += s, Iu += s * (Bu + (Bu = r)), Fu += s * (Vu + (Vu = o)), Yu += s * (Wu + (Wu = i)), oc(Bu, Vu, Wu)
    }

    function dc(t) {
        ju = Ou = Ru = zu = $u = Iu = Fu = Yu = 0, Cu = new pi, Uu = new pi, Hu = new pi, Bi(t, ec);
        var n = +Cu,
            e = +Uu,
            r = +Hu,
            o = ei(n, e, r);
        return o < 1e-12 && (n = Iu, e = Fu, r = Yu, Ou < qo && (n = Ru, e = zu, r = $u), (o = ei(n, e, r)) < 1e-12) ? [NaN, NaN] : [Qo(e, n) * Go, ai(r / o) * Go]
    }

    function pc(t, n) {
        var e = ti(n),
            r = ti(t) * e;
        return [e * ri(t) / r, ri(n) / r]
    }
    pc.invert = pa(Jo);
    var vc, mc, gc, yc, _c, wc, bc, xc, Mc, Tc, Ac, Ec, Sc, Nc, kc, Dc, Pc = new pi,
        Lc = new pi,
        jc = {
            point: ci,
            lineStart: ci,
            lineEnd: ci,
            polygonStart: function() {
                Pc = new pi, jc.lineStart = Oc, jc.lineEnd = Rc
            },
            polygonEnd: function() {
                var t = +Pc;
                Lc.add(t < 0 ? Wo + t : t), this.lineStart = this.lineEnd = this.point = ci
            },
            sphere: function() {
                Lc.add(Wo)
            }
        };

    function Oc() {
        jc.point = zc
    }

    function Rc() {
        $c(vc, mc)
    }

    function zc(t, n) {
        jc.point = $c, vc = t, mc = n, gc = t *= Ko, yc = ti(n = (n *= Ko) / 2 + Vo), _c = ri(n)
    }

    function $c(t, n) {
        var e = (t *= Ko) - gc,
            r = e >= 0 ? 1 : -1,
            o = r * e,
            i = ti(n = (n *= Ko) / 2 + Vo),
            a = ri(n),
            u = _c * a,
            c = yc * i + u * ti(o),
            l = u * r * ri(o);
        Pc.add(Qo(l, c)), gc = t, yc = i, _c = a
    }
    var Ic = {
        point: Fc,
        lineStart: Cc,
        lineEnd: Uc,
        polygonStart: function() {
            Ic.point = Hc, Ic.lineStart = qc, Ic.lineEnd = Xc, Nc = new pi, jc.polygonStart()
        },
        polygonEnd: function() {
            jc.polygonEnd(), Ic.point = Fc, Ic.lineStart = Cc, Ic.lineEnd = Uc, Pc < 0 ? (wc = -(xc = 180), bc = -(Mc = 90)) : Nc > qo ? Mc = 90 : Nc < -qo && (bc = -90), Dc[0] = wc, Dc[1] = xc
        },
        sphere: function() {
            wc = -(xc = 180), bc = -(Mc = 90)
        }
    };

    function Fc(t, n) {
        kc.push(Dc = [wc = t, xc = t]), n < bc && (bc = n), n > Mc && (Mc = n)
    }

    function Yc(t, n) {
        var e = mi([t * Ko, n * Ko]);
        if (Sc) {
            var r = yi(Sc, e),
                o = yi([r[1], -r[0], 0], r);
            bi(o), o = vi(o);
            var i, a = t - Tc,
                u = a > 0 ? 1 : -1,
                c = o[0] * Go * u,
                l = Zo(a) > 180;
            l ^ (u * Tc < c && c < u * t) ? (i = o[1] * Go) > Mc && (Mc = i) : l ^ (u * Tc < (c = (c + 360) % 360 - 180) && c < u * t) ? (i = -o[1] * Go) < bc && (bc = i) : (n < bc && (bc = n), n > Mc && (Mc = n)), l ? t < Tc ? Bc(wc, t) > Bc(wc, xc) && (xc = t) : Bc(t, xc) > Bc(wc, xc) && (wc = t) : xc >= wc ? (t < wc && (wc = t), t > xc && (xc = t)) : t > Tc ? Bc(wc, t) > Bc(wc, xc) && (xc = t) : Bc(t, xc) > Bc(wc, xc) && (wc = t)
        } else kc.push(Dc = [wc = t, xc = t]);
        n < bc && (bc = n), n > Mc && (Mc = n), Sc = e, Tc = t
    }

    function Cc() {
        Ic.point = Yc
    }

    function Uc() {
        Dc[0] = wc, Dc[1] = xc, Ic.point = Fc, Sc = null
    }

    function Hc(t, n) {
        if (Sc) {
            var e = t - Tc;
            Nc.add(Zo(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else Ac = t, Ec = n;
        jc.point(t, n), Yc(t, n)
    }

    function qc() {
        jc.lineStart()
    }

    function Xc() {
        Hc(Ac, Ec), jc.lineEnd(), Zo(Nc) > qo && (wc = -(xc = 180)), Dc[0] = wc, Dc[1] = xc, Sc = null
    }

    function Bc(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }

    function Vc(t, n) {
        return t[0] - n[0]
    }

    function Wc(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }

    function Gc(t, n) {
        var e = t[0] * Ko,
            r = t[1] * Ko,
            o = n[0] * Ko,
            i = n[1] * Ko,
            a = ti(r),
            u = ri(r),
            c = ti(i),
            l = ri(i),
            s = a * ti(e),
            f = a * ri(e),
            h = c * ti(o),
            d = c * ri(o),
            p = 2 * ai(ii(ui(i - r) + a * c * ui(o - e))),
            v = ri(p),
            m = p ? function(t) {
                var n = ri(t *= p) / v,
                    e = ri(p - t) / v,
                    r = e * s + n * h,
                    o = e * f + n * d,
                    i = e * u + n * l;
                return [Qo(o, r) * Go, Qo(i, ii(r * r + o * o)) * Go]
            } : function() {
                return [e * Go, r * Go]
            };
        return m.distance = p, m
    }

    function Kc(t, n) {
        return [t[0] * n[0] + t[1] * n[3], t[0] * n[1] + t[1] * n[4], t[0] * n[2] + t[1] * n[5] + t[2], t[3] * n[0] + t[4] * n[3], t[3] * n[1] + t[4] * n[4], t[3] * n[2] + t[4] * n[5] + t[5]]
    }

    function Zc(t, n) {
        return [t[0] - n[0], t[1] - n[1]]
    }

    function Jc(t) {
        return ku(t[0] * t[0] + t[1] * t[1])
    }

    function Qc(t, n) {
        function e(t, e) {
            var r, o = n(t, e),
                i = o.project([t * Au, e * Au]);
            return (r = o.transform) ? [r[0] * i[0] + r[1] * i[1] + r[2], -(r[3] * i[0] + r[4] * i[1] + r[5])] : (i[1] = -i[1], i)
        }

        function r(t, e) {
            var o, i, a = t.project.invert,
                u = t.transform,
                c = e;
            if (u && (c = [(u = [(i = 1 / ((o = u)[0] * o[4] - o[1] * o[3])) * o[4], -i * o[1], i * (o[1] * o[5] - o[2] * o[4]), -i * o[3], i * o[0], i * (o[2] * o[3] - o[0] * o[5])])[0] * c[0] + u[1] * c[1] + u[2], u[3] * c[0] + u[4] * c[1] + u[5]]), a && t === function(t) {
                    return n(t[0] * Eu, t[1] * Eu)
                }(l = a(c))) return l;
            for (var l, s = t.children, f = 0, h = s && s.length; f < h; ++f)
                if (l = r(s[f], e)) return l
        }! function t(n, e) {
            if (n.edges = function(t) {
                    for (var n = t.length, e = [], r = t[n - 1], o = 0; o < n; ++o) e.push([r, r = t[o]]);
                    return e
                }(n.face), e.face) {
                var r = n.shared = function(t, n) {
                        for (var e, r, o = t.length, i = null, a = 0; a < o; ++a) {
                            e = t[a];
                            for (var u = n.length; --u >= 0;)
                                if (r = n[u], e[0] === r[0] && e[1] === r[1]) {
                                    if (i) return [i, e];
                                    i = e
                                }
                        }
                    }(n.face, e.face),
                    o = (c = r.map(e.project), l = r.map(n.project), s = Zc(c[1], c[0]), f = Zc(l[1], l[0]), h = function(t, n) {
                        return mu(t[0] * n[1] - t[1] * n[0], t[0] * n[0] + t[1] * n[1])
                    }(s, f), d = Jc(s) / Jc(f), Kc([1, 0, c[0][0], 0, 1, c[0][1]], Kc([d, 0, 0, 0, d, 0], Kc([gu(h), wu(h), 0, -wu(h), gu(h), 0], [1, 0, -l[0][0], 0, 1, -l[0][1]]))));
                n.transform = e.transform ? Kc(e.transform, o) : o;
                for (var i = e.edges, a = 0, u = i.length; a < u; ++a) nl(r[0], i[a][1]) && nl(r[1], i[a][0]) && (i[a] = n), nl(r[0], i[a][0]) && nl(r[1], i[a][1]) && (i[a] = n);
                for (a = 0, u = (i = n.edges).length; a < u; ++a) nl(r[0], i[a][0]) && nl(r[1], i[a][1]) && (i[a] = e), nl(r[0], i[a][1]) && nl(r[1], i[a][0]) && (i[a] = e)
            } else n.transform = e.transform;
            var c, l, s, f, h, d;
            return n.children && n.children.forEach((function(e) {
                t(e, n)
            })), n
        }(t, {
            transform: null
        }), el(t) && (e.invert = function(n, e) {
            var o = r(t, [n, -e]);
            return o && (o[0] *= Eu, o[1] *= Eu, o)
        });
        var o = oa(e),
            i = o.stream;
        return o.stream = function(n) {
            var e = o.rotate(),
                r = i(n),
                a = (o.rotate([0, 0]), i(n));
            return o.rotate(e), r.sphere = function() {
                a.polygonStart(), a.lineStart(), tl(a, t), a.lineEnd(), a.polygonEnd()
            }, r
        }, o.angle(-30)
    }

    function tl(t, n, e) {
        var r, o, i = n.edges,
            a = i.length,
            u = {
                type: "MultiPoint",
                coordinates: n.face
            },
            c = function(t) {
                var n, e, r, o, i, a, u;
                if (Mc = xc = -(wc = bc = 1 / 0), kc = [], Bi(t, Ic), e = kc.length) {
                    for (kc.sort(Vc), n = 1, i = [r = kc[0]]; n < e; ++n) Wc(r, (o = kc[n])[0]) || Wc(r, o[1]) ? (Bc(r[0], o[1]) > Bc(r[0], r[1]) && (r[1] = o[1]), Bc(o[0], r[1]) > Bc(r[0], r[1]) && (r[0] = o[0])) : i.push(r = o);
                    for (a = -1 / 0, n = 0, r = i[e = i.length - 1]; n <= e; r = o, ++n) o = i[n], (u = Bc(r[1], o[0])) > a && (a = u, wc = o[0], xc = r[1])
                }
                return kc = Dc = null, wc === 1 / 0 || bc === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [wc, bc],
                    [xc, Mc]
                ]
            }({
                type: "MultiPoint",
                coordinates: n.face.filter((function(t) {
                    return 90 !== vu(t[1])
                }))
            }),
            l = !1,
            s = -1,
            f = c[1][0] - c[0][0],
            h = 180 === f || 360 === f ? [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2] : dc(u);
        if (e)
            for (; ++s < a && i[s] !== e;);
        ++s;
        for (var d = 0; d < a; ++d) o = i[(d + s) % a], Array.isArray(o) ? (l || (t.point((r = Gc(o[0], h)(bu))[0], r[1]), l = !0), t.point((r = Gc(o[1], h)(bu))[0], r[1])) : (l = !1, o !== e && tl(t, o, n))
    }

    function nl(t, n) {
        return t && n && t[0] === n[0] && t[1] === n[1]
    }

    function el(t) {
        return t.project.invert || t.children && t.children.some(el)
    }
    var rl = [
        [0, 90],
        [-90, 0],
        [0, 0],
        [90, 0],
        [180, 0],
        [0, -90]
    ];
    const ol = [
        [0, 2, 1],
        [0, 3, 2],
        [5, 1, 2],
        [5, 2, 3],
        [0, 1, 4],
        [0, 4, 3],
        [5, 4, 1],
        [5, 3, 4]
    ].map((function(t) {
        return t.map((function(t) {
            return rl[t]
        }))
    }));

    function il(t) {
        t = t || function(t) {
            var n = 6 === t.length ? dc({
                type: "MultiPoint",
                coordinates: t
            }) : t[0];
            return oa(pc).scale(144.049).clipAngle(60).scale(1).translate([0, 0]).rotate([-n[0], -n[1]])
        };
        var n = ol.map((function(t) {
                for (var n, e = t.map(cl), r = e.length, o = e[r - 1], i = [], a = 0; a < r; ++a) n = e[a], i.push(ul([.9486832980505138 * o[0] + .31622776601683794 * n[0], .9486832980505138 * o[1] + .31622776601683794 * n[1], .9486832980505138 * o[2] + .31622776601683794 * n[2]]), ul([.9486832980505138 * n[0] + .31622776601683794 * o[0], .9486832980505138 * n[1] + .31622776601683794 * o[1], .9486832980505138 * n[2] + .31622776601683794 * o[2]])), o = n;
                return i
            })),
            e = [],
            r = [-1, 0, 0, 1, 0, 1, 4, 5];
        n.forEach((function(t, o) {
            for (var i, a, u = ol[o], c = u.length, l = e[o] = [], s = 0; s < c; ++s) n.push([u[s], t[(2 * s + 2) % (2 * c)], t[(2 * s + 1) % (2 * c)]]), r.push(o), l.push((i = cl(t[(2 * s + 2) % (2 * c)]), a = cl(t[(2 * s + 1) % (2 * c)]), [i[1] * a[2] - i[2] * a[1], i[2] * a[0] - i[0] * a[2], i[0] * a[1] - i[1] * a[0]]))
        }));
        var o = n.map((function(n) {
            return {
                project: t(n),
                face: n
            }
        }));
        return r.forEach((function(t, n) {
            var e = o[t];
            e && (e.children || (e.children = [])).push(o[n])
        })), Qc(o[0], (function(t, n) {
            var r = gu(n),
                i = [r * gu(t), r * wu(t), wu(n)],
                a = t < -xu / 2 ? n < 0 ? 6 : 4 : t < 0 ? n < 0 ? 2 : 0 : t < xu / 2 ? n < 0 ? 3 : 1 : n < 0 ? 7 : 5,
                u = e[a];
            return o[al(u[0], i) < 0 ? 8 + 3 * a : al(u[1], i) < 0 ? 8 + 3 * a + 1 : al(u[2], i) < 0 ? 8 + 3 * a + 2 : a]
        })).angle(-30).scale(110.625).center([0, 45])
    }

    function al(t, n) {
        for (var e = 0, r = t.length, o = 0; e < r; ++e) o += t[e] * n[e];
        return o
    }

    function ul(t) {
        return [mu(t[1], t[0]) * Au, Su(yu(-1, _u(1, t[2]))) * Au]
    }

    function cl(t) {
        var n = t[0] * Eu,
            e = t[1] * Eu,
            r = gu(e);
        return [r * gu(n), r * wu(n), wu(e)]
    }

    function ll(t, n) {
        var e = gu(n),
            r = function(t) {
                return t ? t / Math.sin(t) : 1
            }(Nu(e * gu(t /= 2)));
        return [2 * e * wu(t) * r, wu(n) * r]
    }

    function sl(t, n) {
        var e = ll(t, n);
        return [(e[0] + t / Mu) / 2, (e[1] + n) / 2]
    }

    function fl() {
        return oa(sl).scale(158.837)
    }

    function hl(t, n, e, r, o) {
        var i = t * t,
            a = i * t;
        return ((1 - 3 * t + 3 * i - a) * n + (4 - 6 * i + 3 * a) * e + (1 + 3 * t + 3 * i - 3 * a) * r + a * o) / 6
    }

    function dl(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                o = t[r],
                i = t[r + 1],
                a = r > 0 ? t[r - 1] : 2 * o - i,
                u = r < n - 1 ? t[r + 2] : 2 * i - o;
            return hl((e - r / n) * n, a, o, i, u)
        }
    }
    ll.invert = function(t, n) {
        if (!(t * t + 4 * n * n > xu * xu + bu)) {
            var e = t,
                r = n,
                o = 25;
            do {
                var i, a = wu(e),
                    u = wu(e / 2),
                    c = gu(e / 2),
                    l = wu(r),
                    s = gu(r),
                    f = wu(2 * r),
                    h = l * l,
                    d = s * s,
                    p = u * u,
                    v = 1 - d * c * c,
                    m = v ? Nu(s * c) * ku(i = 1 / v) : i = 0,
                    g = 2 * m * s * u - t,
                    y = m * l - n,
                    _ = i * (d * p + m * s * c * h),
                    w = i * (.5 * a * f - 2 * m * l * u),
                    b = .25 * i * (f * u - m * l * d * a),
                    x = i * (h * c + m * p * s),
                    M = w * b - x * _;
                if (!M) break;
                var T = (y * w - g * x) / M,
                    A = (g * b - y * _) / M;
                e -= T, r -= A
            } while ((vu(T) > bu || vu(A) > bu) && --o > 0);
            return [e, r]
        }
    }, sl.invert = function(t, n) {
        var e = t,
            r = n,
            o = 25;
        do {
            var i, a = gu(r),
                u = wu(r),
                c = wu(2 * r),
                l = u * u,
                s = a * a,
                f = wu(e),
                h = gu(e / 2),
                d = wu(e / 2),
                p = d * d,
                v = 1 - s * h * h,
                m = v ? Nu(a * h) * ku(i = 1 / v) : i = 0,
                g = .5 * (2 * m * a * d + e / Mu) - t,
                y = .5 * (m * u + r) - n,
                _ = .5 * i * (s * p + m * a * h * l) + .5 / Mu,
                w = i * (f * c / 4 - m * u * d),
                b = .125 * i * (c * d - m * u * s * f),
                x = .5 * i * (l * h + m * p * a) + .5,
                M = w * b - x * _,
                T = (y * w - g * x) / M,
                A = (g * b - y * _) / M;
            e -= T, r -= A
        } while ((vu(T) > bu || vu(A) > bu) && --o > 0);
        return [e, r]
    };
    const pl = t => () => t;

    function vl(t, n) {
        return function(e) {
            return t + e * n
        }
    }

    function ml(t, n) {
        var e = n - t;
        return e ? vl(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : pl(isNaN(t) ? n : t)
    }

    function gl(t, n) {
        var e = n - t;
        return e ? vl(t, e) : pl(isNaN(t) ? n : t)
    }

    function yl(t) {
        return function(n, e) {
            var r = t((n = No(n)).h, (e = No(e)).h),
                o = gl(n.c, e.c),
                i = gl(n.l, e.l),
                a = gl(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t), n.c = o(t), n.l = i(t), n.opacity = a(t), n + ""
            }
        }
    }
    const _l = yl(ml);

    function wl(t) {
        return function(n, e) {
            var r = t((n = lo(n)).h, (e = lo(e)).h),
                o = gl(n.s, e.s),
                i = gl(n.l, e.l),
                a = gl(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t), n.s = o(t), n.l = i(t), n.opacity = a(t), n + ""
            }
        }
    }
    yl(gl);
    const bl = wl(ml);

    function xl(t, n) {
        var e = gl((t = bo(t)).l, (n = bo(n)).l),
            r = gl(t.a, n.a),
            o = gl(t.b, n.b),
            i = gl(t.opacity, n.opacity);
        return function(n) {
            return t.l = e(n), t.a = r(n), t.b = o(n), t.opacity = i(n), t + ""
        }
    }
    wl(gl);
    const Ml = function t(n) {
        var e = function(t) {
            return 1 == (t = +t) ? gl : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(r) {
                            return Math.pow(t + r * n, e)
                        }
                }(n, e, t) : pl(isNaN(n) ? e : n)
            }
        }(n);

        function r(t, n) {
            var r = e((t = eo(t)).r, (n = eo(n)).r),
                o = e(t.g, n.g),
                i = e(t.b, n.b),
                a = gl(t.opacity, n.opacity);
            return function(n) {
                return t.r = r(n), t.g = o(n), t.b = i(n), t.opacity = a(n), t + ""
            }
        }
        return r.gamma = t, r
    }(1);

    function Tl(t) {
        return function(n) {
            var e, r, o = n.length,
                i = new Array(o),
                a = new Array(o),
                u = new Array(o);
            for (e = 0; e < o; ++e) r = eo(n[e]), i[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
            return i = t(i), a = t(a), u = t(u), r.opacity = 1,
                function(t) {
                    return r.r = i(t), r.g = a(t), r.b = u(t), r + ""
                }
        }
    }
    var Al = Tl(dl),
        El = (Tl((function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    o = t[(r + n - 1) % n],
                    i = t[r % n],
                    a = t[(r + 1) % n],
                    u = t[(r + 2) % n];
                return hl((e - r / n) * n, o, i, a, u)
            }
        })), "$");

    function Sl() {}

    function Nl(t, n) {
        var e = new Sl;
        if (t instanceof Sl) t.each((function(t, n) {
            e.set(n, t)
        }));
        else if (Array.isArray(t)) {
            var r, o = -1,
                i = t.length;
            if (null == n)
                for (; ++o < i;) e.set(o, t[o]);
            else
                for (; ++o < i;) e.set(n(r = t[o], o, t), r)
        } else if (t)
            for (var a in t) e.set(a, t[a]);
        return e
    }
    Sl.prototype = Nl.prototype = {
        constructor: Sl,
        has: function(t) {
            return El + t in this
        },
        get: function(t) {
            return this[El + t]
        },
        set: function(t, n) {
            return this[El + t] = n, this
        },
        remove: function(t) {
            var n = El + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this) t[0] === El && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this) n[0] === El && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this) n[0] === El && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this) n[0] === El && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this) n[0] === El && ++t;
            return t
        },
        empty: function() {
            for (var t in this)
                if (t[0] === El) return !1;
            return !0
        },
        each: function(t) {
            for (var n in this) n[0] === El && t(this[n], n.slice(1), this)
        }
    };
    const kl = Nl;
    var Dl = {
        value: function() {}
    };

    function Pl() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Ll(r)
    }

    function Ll(t) {
        this._ = t
    }

    function jl(t, n) {
        return t.trim().split(/^|\s+/).map((function(t) {
            var e = "",
                r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
                type: t,
                name: e
            }
        }))
    }

    function Ol(t, n) {
        for (var e, r = 0, o = t.length; r < o; ++r)
            if ((e = t[r]).name === n) return e.value
    }

    function Rl(t, n, e) {
        for (var r = 0, o = t.length; r < o; ++r)
            if (t[r].name === n) {
                t[r] = Dl, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            } return null != e && t.push({
            name: n,
            value: e
        }), t
    }
    Ll.prototype = Pl.prototype = {
        constructor: Ll,
        on: function(t, n) {
            var e, r = this._,
                o = jl(t + "", r),
                i = -1,
                a = o.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++i < a;)
                    if (e = (t = o[i]).type) r[e] = Rl(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = Rl(r[e], t.name, null);
                return this
            }
            for (; ++i < a;)
                if ((e = (t = o[i]).type) && (e = Ol(r[e], t.name))) return e
        },
        copy: function() {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new Ll(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, o = new Array(e), i = 0; i < e; ++i) o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (i = 0, e = (r = this._[t]).length; i < e; ++i) r[i].value.apply(n, o)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(n, e)
        }
    };
    const zl = Pl;

    function $l(t, n) {
        var e, r, o, i, a = zl("beforesend", "progress", "load", "error"),
            u = kl(),
            c = new XMLHttpRequest,
            l = null,
            s = null,
            f = 0;

        function h(t) {
            var n, r = c.status;
            if (!r && function(t) {
                    var n = t.responseType;
                    return n && "text" !== n ? t.response : t.responseText
                }(c) || r >= 200 && r < 300 || 304 === r) {
                if (o) try {
                    n = o.call(e, c)
                } catch (t) {
                    return void a.call("error", e, t)
                } else n = c;
                a.call("load", e, n)
            } else a.call("error", e, t)
        }
        if ("undefined" != typeof XDomainRequest && !("withCredentials" in c) && /^(http(s)?:)?\/\//.test(t) && (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = h : c.onreadystatechange = function(t) {
                c.readyState > 3 && h(t)
            }, c.onprogress = function(t) {
                a.call("progress", e, t)
            }, e = {
                header: function(t, n) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? u.get(t) : (null == n ? u.remove(t) : u.set(t, n + ""), e)
                },
                mimeType: function(t) {
                    return arguments.length ? (r = null == t ? null : t + "", e) : r
                },
                responseType: function(t) {
                    return arguments.length ? (i = t, e) : i
                },
                timeout: function(t) {
                    return arguments.length ? (f = +t, e) : f
                },
                user: function(t) {
                    return arguments.length < 1 ? l : (l = null == t ? null : t + "", e)
                },
                password: function(t) {
                    return arguments.length < 1 ? s : (s = null == t ? null : t + "", e)
                },
                response: function(t) {
                    return o = t, e
                },
                get: function(t, n) {
                    return e.send("GET", t, n)
                },
                post: function(t, n) {
                    return e.send("POST", t, n)
                },
                send: function(n, o, h) {
                    return c.open(n, t, !0, l, s), null == r || u.has("accept") || u.set("accept", r + ",*/*"), c.setRequestHeader && u.each((function(t, n) {
                        c.setRequestHeader(n, t)
                    })), null != r && c.overrideMimeType && c.overrideMimeType(r), null != i && (c.responseType = i), f > 0 && (c.timeout = f), null == h && "function" == typeof o && (h = o, o = null), null != h && 1 === h.length && (h = function(t) {
                        return function(n, e) {
                            t(null == n ? e : null)
                        }
                    }(h)), null != h && e.on("error", h).on("load", (function(t) {
                        h(null, t)
                    })), a.call("beforesend", e, c), c.send(null == o ? null : o), e
                },
                abort: function() {
                    return c.abort(), e
                },
                on: function() {
                    var t = a.on.apply(a, arguments);
                    return t === a ? e : t
                }
            }, null != n) {
            if ("function" != typeof n) throw new Error("invalid callback: " + n);
            return e.get(n)
        }
        return e
    }
    const Il = ("application/json", Fl = function(t) {
        return JSON.parse(t.responseText)
    }, function(t, n) {
        var e = $l(t).mimeType("application/json").response(Fl);
        if (null != n) {
            if ("function" != typeof n) throw new Error("invalid callback: " + n);
            return e.get(n)
        }
        return e
    });
    var Fl, Yl = -.14861,
        Cl = 1.78277,
        Ul = -.29227,
        Hl = -.90649,
        ql = 1.97294,
        Xl = ql * Hl,
        Bl = ql * Cl,
        Vl = Cl * Ul - Hl * Yl;

    function Wl(t) {
        if (t instanceof Kl) return new Kl(t.h, t.s, t.l, t.opacity);
        t instanceof ro || (t = no(t));
        var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            o = (Vl * r + Xl * n - Bl * e) / (Vl + Xl - Bl),
            i = r - o,
            a = (ql * (e - o) - Ul * i) / Hl,
            u = Math.sqrt(a * a + i * i) / (ql * o * (1 - o)),
            c = u ? Math.atan2(a, i) * po - 120 : NaN;
        return new Kl(c < 0 ? c + 360 : c, u, o, t.opacity)
    }

    function Gl(t, n, e, r) {
        return 1 === arguments.length ? Wl(t) : new Kl(t, n, e, null == r ? 1 : r)
    }

    function Kl(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Zl(t) {
        return function n(e) {
            function r(n, r) {
                var o = t((n = Gl(n)).h, (r = Gl(r)).h),
                    i = gl(n.s, r.s),
                    a = gl(n.l, r.l),
                    u = gl(n.opacity, r.opacity);
                return function(t) {
                    return n.h = o(t), n.s = i(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + ""
                }
            }
            return e = +e, r.gamma = n, r
        }(1)
    }
    Or(Kl, Gl, Rr(zr, {
        brighter: function(t) {
            return t = null == t ? Ir : Math.pow(Ir, t), new Kl(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? $r : Math.pow($r, t), new Kl(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * ho,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                o = Math.sin(t);
            return new ro(255 * (n + e * (Yl * r + Cl * o)), 255 * (n + e * (Ul * r + Hl * o)), 255 * (n + e * (ql * r)), this.opacity)
        }
    })), Zl(ml);
    const Jl = Zl(gl)(Gl(300, .5, 0), Gl(-240, .5, 1));

    function Ql(t) {
        for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    }
    const ts = t => Al(t[t.length - 1]),
        ns = ts(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Ql)),
        es = ts(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Ql));

    function rs(t, n) {
        return t.target && (t = Po(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, (t => Lo(t, n)))
    }

    function os(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    const is = function t(n, e, r) {
        function o(t, o) {
            var i, a, u = t[0],
                c = t[1],
                l = t[2],
                s = o[0],
                f = o[1],
                h = o[2],
                d = s - u,
                p = f - c,
                v = d * d + p * p;
            if (v < 1e-12) a = Math.log(h / l) / n, i = function(t) {
                return [u + t * d, c + t * p, l * Math.exp(n * t * a)]
            };
            else {
                var m = Math.sqrt(v),
                    g = (h * h - l * l + r * v) / (2 * l * e * m),
                    y = (h * h - l * l - r * v) / (2 * h * e * m),
                    _ = Math.log(Math.sqrt(g * g + 1) - g),
                    w = Math.log(Math.sqrt(y * y + 1) - y);
                a = (w - _) / n, i = function(t) {
                    var r, o = t * a,
                        i = os(_),
                        s = l / (e * m) * (i * (r = n * o + _, ((r = Math.exp(2 * r)) - 1) / (r + 1)) - function(t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2
                        }(_));
                    return [u + s * d, c + s * p, l * i / os(n * o + _)]
                }
            }
            return i.duration = 1e3 * a * n / Math.SQRT2, i
        }
        return o.rho = function(n) {
            var e = Math.max(.001, +n),
                r = e * e;
            return t(e, r, r * r)
        }, o
    }(Math.SQRT2, 2, 4);
    var as, us, cs = 0,
        ls = 0,
        ss = 0,
        fs = 0,
        hs = 0,
        ds = 0,
        ps = "object" == typeof performance && performance.now ? performance : Date,
        vs = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        };

    function ms() {
        return hs || (vs(gs), hs = ps.now() + ds)
    }

    function gs() {
        hs = 0
    }

    function ys() {
        this._call = this._time = this._next = null
    }

    function _s(t, n, e) {
        var r = new ys;
        return r.restart(t, n, e), r
    }

    function ws() {
        hs = (fs = ps.now()) + ds, cs = ls = 0;
        try {
            ! function() {
                ms(), ++cs;
                for (var t, n = as; n;)(t = hs - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --cs
            }()
        } finally {
            cs = 0,
                function() {
                    for (var t, n, e = as, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : as = n);
                    us = t, xs(r)
                }(), hs = 0
        }
    }

    function bs() {
        var t = ps.now(),
            n = t - fs;
        n > 1e3 && (ds -= n, fs = t)
    }

    function xs(t) {
        cs || (ls && (ls = clearTimeout(ls)), t - hs > 24 ? (t < 1 / 0 && (ls = setTimeout(ws, t - ps.now() - ds)), ss && (ss = clearInterval(ss))) : (ss || (fs = ps.now(), ss = setInterval(bs, 1e3)), cs = 1, vs(ws)))
    }

    function Ms(t, n, e) {
        var r = new ys;
        return n = null == n ? 0 : +n, r.restart((e => {
            r.stop(), t(e + n)
        }), n, e), r
    }
    ys.prototype = _s.prototype = {
        constructor: ys,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? ms() : +e) + (null == n ? 0 : +n), this._next || us === this || (us ? us._next = this : as = this, us = this), this._call = t, this._time = e, xs()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, xs())
        }
    };
    var Ts = nr("start", "end", "cancel", "interrupt"),
        As = [];

    function Es(t, n, e, r, o, i) {
        var a = t.__transition;
        if (a) {
            if (e in a) return
        } else t.__transition = {};
        ! function(t, n, e) {
            var r, o = t.__transition;

            function i(c) {
                var l, s, f, h;
                if (1 !== e.state) return u();
                for (l in o)
                    if ((h = o[l]).name === e.name) {
                        if (3 === h.state) return Ms(i);
                        4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete o[l]) : +l < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete o[l])
                    } if (Ms((function() {
                        3 === e.state && (e.state = 4, e.timer.restart(a, e.delay, e.time), a(c))
                    })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                    for (e.state = 3, r = new Array(f = e.tween.length), l = 0, s = -1; l < f; ++l)(h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1
                }
            }

            function a(n) {
                for (var o = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = 5, 1), i = -1, a = r.length; ++i < a;) r[i].call(t, o);
                5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), u())
            }

            function u() {
                for (var r in e.state = 6, e.timer.stop(), delete o[n], o) return;
                delete t.__transition
            }
            o[n] = e, e.timer = _s((function(t) {
                e.state = 1, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay)
            }), 0, e.time)
        }(t, e, {
            name: n,
            index: r,
            group: o,
            on: Ts,
            tween: As,
            time: i.time,
            delay: i.delay,
            duration: i.duration,
            ease: i.ease,
            timer: null,
            state: 0
        })
    }

    function Ss(t, n) {
        var e = ks(t, n);
        if (e.state > 0) throw new Error("too late; already scheduled");
        return e
    }

    function Ns(t, n) {
        var e = ks(t, n);
        if (e.state > 3) throw new Error("too late; already running");
        return e
    }

    function ks(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }

    function Ds(t, n) {
        var e, r, o, i = t.__transition,
            a = !0;
        if (i) {
            for (o in n = null == n ? null : n + "", i)(e = i[o]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete i[o]) : a = !1;
            a && delete t.__transition
        }
    }

    function Ps(t, n) {
        return t = +t, n = +n,
            function(e) {
                return t * (1 - e) + n * e
            }
    }
    var Ls, js = 180 / Math.PI,
        Os = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        };

    function Rs(t, n, e, r, o, i) {
        var a, u, c;
        return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(n, t) * js,
            skewX: Math.atan(c) * js,
            scaleX: a,
            scaleY: u
        }
    }

    function zs(t, n, e, r) {
        function o(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function(i, a) {
            var u = [],
                c = [];
            return i = t(i), a = t(a),
                function(t, r, o, i, a, u) {
                    if (t !== o || r !== i) {
                        var c = a.push("translate(", null, n, null, e);
                        u.push({
                            i: c - 4,
                            x: Ps(t, o)
                        }, {
                            i: c - 2,
                            x: Ps(r, i)
                        })
                    } else(o || i) && a.push("translate(" + o + n + i + e)
                }(i.translateX, i.translateY, a.translateX, a.translateY, u, c),
                function(t, n, e, i) {
                    t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), i.push({
                        i: e.push(o(e) + "rotate(", null, r) - 2,
                        x: Ps(t, n)
                    })) : n && e.push(o(e) + "rotate(" + n + r)
                }(i.rotate, a.rotate, u, c),
                function(t, n, e, i) {
                    t !== n ? i.push({
                        i: e.push(o(e) + "skewX(", null, r) - 2,
                        x: Ps(t, n)
                    }) : n && e.push(o(e) + "skewX(" + n + r)
                }(i.skewX, a.skewX, u, c),
                function(t, n, e, r, i, a) {
                    if (t !== e || n !== r) {
                        var u = i.push(o(i) + "scale(", null, ",", null, ")");
                        a.push({
                            i: u - 4,
                            x: Ps(t, e)
                        }, {
                            i: u - 2,
                            x: Ps(n, r)
                        })
                    } else 1 === e && 1 === r || i.push(o(i) + "scale(" + e + "," + r + ")")
                }(i.scaleX, i.scaleY, a.scaleX, a.scaleY, u, c), i = a = null,
                function(t) {
                    for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);
                    return u.join("")
                }
        }
    }
    var $s = zs((function(t) {
            const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
            return n.isIdentity ? Os : Rs(n.a, n.b, n.c, n.d, n.e, n.f)
        }), "px, ", "px)", "deg)"),
        Is = zs((function(t) {
            return null == t ? Os : (Ls || (Ls = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ls.setAttribute("transform", t), (t = Ls.transform.baseVal.consolidate()) ? Rs((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Os)
        }), ", ", ")", ")");

    function Fs(t, n) {
        var e, r;
        return function() {
            var o = Ns(this, t),
                i = o.tween;
            if (i !== e)
                for (var a = 0, u = (r = e = i).length; a < u; ++a)
                    if (r[a].name === n) {
                        (r = r.slice()).splice(a, 1);
                        break
                    } o.tween = r
        }
    }

    function Ys(t, n, e) {
        var r, o;
        if ("function" != typeof e) throw new Error;
        return function() {
            var i = Ns(this, t),
                a = i.tween;
            if (a !== r) {
                o = (r = a).slice();
                for (var u = {
                        name: n,
                        value: e
                    }, c = 0, l = o.length; c < l; ++c)
                    if (o[c].name === n) {
                        o[c] = u;
                        break
                    } c === l && o.push(u)
            }
            i.tween = o
        }
    }

    function Cs(t, n, e) {
        var r = t._id;
        return t.each((function() {
                var t = Ns(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            })),
            function(t) {
                return ks(t, r).value[n]
            }
    }
    var Us = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Hs = new RegExp(Us.source, "g");

    function qs(t, n) {
        var e, r, o, i = Us.lastIndex = Hs.lastIndex = 0,
            a = -1,
            u = [],
            c = [];
        for (t += "", n += "";
            (e = Us.exec(t)) && (r = Hs.exec(n));)(o = r.index) > i && (o = n.slice(i, o), u[a] ? u[a] += o : u[++a] = o), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
            i: a,
            x: Ps(e, r)
        })), i = Hs.lastIndex;
        return i < n.length && (o = n.slice(i), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? c[0] ? function(t) {
            return function(n) {
                return t(n) + ""
            }
        }(c[0].x) : function(t) {
            return function() {
                return t
            }
        }(n) : (n = c.length, function(t) {
            for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
            return u.join("")
        })
    }

    function Xs(t, n) {
        var e;
        return ("number" == typeof n ? Ps : n instanceof Jr ? Ml : (e = Jr(n)) ? (n = e, Ml) : qs)(t, n)
    }

    function Bs(t) {
        return function() {
            this.removeAttribute(t)
        }
    }

    function Vs(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function Ws(t, n, e) {
        var r, o, i = e + "";
        return function() {
            var a = this.getAttribute(t);
            return a === i ? null : a === r ? o : o = n(r = a, e)
        }
    }

    function Gs(t, n, e) {
        var r, o, i = e + "";
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === i ? null : a === r ? o : o = n(r = a, e)
        }
    }

    function Ks(t, n, e) {
        var r, o, i;
        return function() {
            var a, u, c = e(this);
            if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === o ? i : (o = u, i = n(r = a, c));
            this.removeAttribute(t)
        }
    }

    function Zs(t, n, e) {
        var r, o, i;
        return function() {
            var a, u, c = e(this);
            if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === o ? i : (o = u, i = n(r = a, c));
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function Js(t, n) {
        return function(e) {
            this.setAttribute(t, n.call(this, e))
        }
    }

    function Qs(t, n) {
        return function(e) {
            this.setAttributeNS(t.space, t.local, n.call(this, e))
        }
    }

    function tf(t, n) {
        var e, r;

        function o() {
            var o = n.apply(this, arguments);
            return o !== r && (e = (r = o) && Qs(t, o)), e
        }
        return o._value = n, o
    }

    function nf(t, n) {
        var e, r;

        function o() {
            var o = n.apply(this, arguments);
            return o !== r && (e = (r = o) && Js(t, o)), e
        }
        return o._value = n, o
    }

    function ef(t, n) {
        return function() {
            Ss(this, t).delay = +n.apply(this, arguments)
        }
    }

    function rf(t, n) {
        return n = +n,
            function() {
                Ss(this, t).delay = n
            }
    }

    function of (t, n) {
        return function() {
            Ns(this, t).duration = +n.apply(this, arguments)
        }
    }

    function af(t, n) {
        return n = +n,
            function() {
                Ns(this, t).duration = n
            }
    }

    function uf(t, n) {
        if ("function" != typeof n) throw new Error;
        return function() {
            Ns(this, t).ease = n
        }
    }

    function cf(t, n, e) {
        var r, o, i = function(t) {
            return (t + "").trim().split(/^|\s+/).every((function(t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
            }))
        }(n) ? Ss : Ns;
        return function() {
            var a = i(this, t),
                u = a.on;
            u !== r && (o = (r = u).copy()).on(n, e), a.on = o
        }
    }
    var lf = Pt.prototype.constructor;

    function sf(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }

    function ff(t, n, e) {
        return function(r) {
            this.style.setProperty(t, n.call(this, r), e)
        }
    }

    function hf(t, n, e) {
        var r, o;

        function i() {
            var i = n.apply(this, arguments);
            return i !== o && (r = (o = i) && ff(t, i, e)), r
        }
        return i._value = n, i
    }

    function df(t) {
        return function(n) {
            this.textContent = t.call(this, n)
        }
    }

    function pf(t) {
        var n, e;

        function r() {
            var r = t.apply(this, arguments);
            return r !== e && (n = (e = r) && df(r)), n
        }
        return r._value = t, r
    }
    var vf = 0;

    function mf(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function gf() {
        return ++vf
    }
    var yf = Pt.prototype;
    mf.prototype = function(t) {
        return Pt().transition(t)
    }.prototype = {
        constructor: mf,
        select: function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = x(t));
            for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
                for (var u, c, l = r[a], s = l.length, f = i[a] = new Array(s), h = 0; h < s; ++h)(u = l[h]) && (c = t.call(u, u.__data__, h, l)) && ("__data__" in u && (c.__data__ = u.__data__), f[h] = c, Es(f[h], n, e, h, f, ks(u, e)));
            return new mf(i, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = _(t));
            for (var r = this._groups, o = r.length, i = [], a = [], u = 0; u < o; ++u)
                for (var c, l = r[u], s = l.length, f = 0; f < s; ++f)
                    if (c = l[f]) {
                        for (var h, d = t.call(c, c.__data__, f, l), p = ks(c, e), v = 0, m = d.length; v < m; ++v)(h = d[v]) && Es(h, n, e, v, d, p);
                        i.push(d), a.push(c)
                    } return new mf(i, a, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = M(t));
            for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o)
                for (var i, a = n[o], u = a.length, c = r[o] = [], l = 0; l < u; ++l)(i = a[l]) && t.call(i, i.__data__, l, a) && c.push(i);
            return new mf(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), a = new Array(r), u = 0; u < i; ++u)
                for (var c, l = n[u], s = e[u], f = l.length, h = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = n[u];
            return new mf(a, this._parents, this._name, this._id)
        },
        selection: function() {
            return new lf(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name, n = this._id, e = gf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
                for (var a, u = r[i], c = u.length, l = 0; l < c; ++l)
                    if (a = u[l]) {
                        var s = ks(a, n);
                        Es(a, t, e, l, u, {
                            time: s.time + s.delay + s.duration,
                            delay: 0,
                            duration: s.duration,
                            ease: s.ease
                        })
                    } return new mf(r, this._parents, t, e)
        },
        call: yf.call,
        nodes: yf.nodes,
        node: yf.node,
        size: yf.size,
        empty: yf.empty,
        each: yf.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? ks(this.node(), e).on.on(t) : this.each(cf(e, t, n))
        },
        attr: function(t, n) {
            var e = I(t),
                r = "transform" === e ? Is : Xs;
            return this.attrTween(t, "function" == typeof n ? (e.local ? Zs : Ks)(e, r, Cs(this, "attr." + t, n)) : null == n ? (e.local ? Vs : Bs)(e) : (e.local ? Gs : Ws)(e, r, n))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = I(t);
            return this.tween(e, (r.local ? tf : nf)(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? $s : Xs;
            return null == n ? this.styleTween(t, function(t, n) {
                var e, r, o;
                return function() {
                    var i = G(this, t),
                        a = (this.style.removeProperty(t), G(this, t));
                    return i === a ? null : i === e && a === r ? o : o = n(e = i, r = a)
                }
            }(t, r)).on("end.style." + t, sf(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                var r, o, i;
                return function() {
                    var a = G(this, t),
                        u = e(this),
                        c = u + "";
                    return null == u && (this.style.removeProperty(t), c = u = G(this, t)), a === c ? null : a === r && c === o ? i : (o = c, i = n(r = a, u))
                }
            }(t, r, Cs(this, "style." + t, n))).each(function(t, n) {
                var e, r, o, i, a = "style." + n,
                    u = "end." + a;
                return function() {
                    var c = Ns(this, t),
                        l = c.on,
                        s = null == c.value[a] ? i || (i = sf(n)) : void 0;
                    l === e && o === s || (r = (e = l).copy()).on(u, o = s), c.on = r
                }
            }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                var r, o, i = e + "";
                return function() {
                    var a = G(this, t);
                    return a === i ? null : a === r ? o : o = n(r = a, e)
                }
            }(t, r, n), e).on("end.style." + t, null)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, hf(t, n, null == e ? "" : e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(Cs(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        textTween: function(t) {
            var n = "text";
            if (arguments.length < 1) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ("function" != typeof t) throw new Error;
            return this.tween(n, pf(t))
        },
        remove: function() {
            return this.on("end.remove", function(t) {
                return function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }
            }(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, o = ks(this.node(), e).tween, i = 0, a = o.length; i < a; ++i)
                    if ((r = o[i]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? Fs : Ys)(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? ef : rf)(n, t)) : ks(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? of : af)(n, t)) : ks(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(uf(n, t)) : ks(this.node(), n).ease
        },
        easeVarying: function(t) {
            if ("function" != typeof t) throw new Error;
            return this.each(function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    if ("function" != typeof e) throw new Error;
                    Ns(this, t).ease = e
                }
            }(this._id, t))
        },
        end: function() {
            var t, n, e = this,
                r = e._id,
                o = e.size();
            return new Promise((function(i, a) {
                var u = {
                        value: a
                    },
                    c = {
                        value: function() {
                            0 == --o && i()
                        }
                    };
                e.each((function() {
                    var e = Ns(this, r),
                        o = e.on;
                    o !== t && ((n = (t = o).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n
                })), 0 === o && i()
            }))
        },
        [Symbol.iterator]: yf[Symbol.iterator]
    };
    var _f = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    };

    function wf(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
        return e
    }
    Pt.prototype.interrupt = function(t) {
        return this.each((function() {
            Ds(this, t)
        }))
    }, Pt.prototype.transition = function(t) {
        var n, e;
        t instanceof mf ? (n = t._id, t = t._name) : (n = gf(), (e = _f).time = ms(), t = null == t ? null : t + "");
        for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, u = r[i], c = u.length, l = 0; l < c; ++l)(a = u[l]) && Es(a, t, n, l, u, e || wf(a, n));
        return new mf(r, this._parents, t, n)
    };
    const bf = t => () => t;

    function xf(t, {
        sourceEvent: n,
        target: e,
        transform: r,
        dispatch: o
    }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            transform: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: o
            }
        })
    }

    function Mf(t, n, e) {
        this.k = t, this.x = n, this.y = e
    }
    Mf.prototype = {
        constructor: Mf,
        scale: function(t) {
            return 1 === t ? this : new Mf(this.k * t, this.x, this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this : new Mf(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var Tf = new Mf(1, 0, 0);

    function Af(t) {
        t.stopImmediatePropagation()
    }

    function Ef(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }

    function Sf(t) {
        return !(t.ctrlKey && "wheel" !== t.type || t.button)
    }

    function Nf() {
        var t = this;
        return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] : [
            [0, 0],
            [t.clientWidth, t.clientHeight]
        ]
    }

    function kf() {
        return this.__zoom || Tf
    }

    function Df(t) {
        return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
    }

    function Pf() {
        return navigator.maxTouchPoints || "ontouchstart" in this
    }

    function Lf(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
            o = t.invertX(n[1][0]) - e[1][0],
            i = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a))
    }

    function jf() {
        var t, n, e, r = Sf,
            o = Nf,
            i = Lf,
            a = Df,
            u = Pf,
            c = [0, 1 / 0],
            l = [
                [-1 / 0, -1 / 0],
                [1 / 0, 1 / 0]
            ],
            s = 250,
            f = is,
            h = nr("start", "zoom", "end"),
            d = 500,
            p = 0,
            v = 10;

        function m(t) {
            t.property("__zoom", kf).on("wheel.zoom", M).on("mousedown.zoom", T).on("dblclick.zoom", A).filter(u).on("touchstart.zoom", E).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function g(t, n) {
            return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new Mf(n, t.x, t.y)
        }

        function y(t, n, e) {
            var r = n[0] - e[0] * t.k,
                o = n[1] - e[1] * t.k;
            return r === t.x && o === t.y ? t : new Mf(t.k, r, o)
        }

        function _(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        }

        function w(t, n, e, r) {
            t.on("start.zoom", (function() {
                b(this, arguments).event(r).start()
            })).on("interrupt.zoom end.zoom", (function() {
                b(this, arguments).event(r).end()
            })).tween("zoom", (function() {
                var t = this,
                    i = arguments,
                    a = b(t, i).event(r),
                    u = o.apply(t, i),
                    c = null == e ? _(u) : "function" == typeof e ? e.apply(t, i) : e,
                    l = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                    s = t.__zoom,
                    h = "function" == typeof n ? n.apply(t, i) : n,
                    d = f(s.invert(c).concat(l / s.k), h.invert(c).concat(l / h.k));
                return function(t) {
                    if (1 === t) t = h;
                    else {
                        var n = d(t),
                            e = l / n[2];
                        t = new Mf(e, c[0] - n[0] * e, c[1] - n[1] * e)
                    }
                    a.zoom(null, t)
                }
            }))
        }

        function b(t, n, e) {
            return !e && t.__zooming || new x(t, n)
        }

        function x(t, n) {
            this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = o.apply(t, n), this.taps = 0
        }

        function M(t, ...n) {
            if (r.apply(this, arguments)) {
                var e = b(this, n).event(t),
                    o = this.__zoom,
                    u = Math.max(c[0], Math.min(c[1], o.k * Math.pow(2, a.apply(this, arguments)))),
                    s = Lo(t);
                if (e.wheel) e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = o.invert(e.mouse[0] = s)), clearTimeout(e.wheel);
                else {
                    if (o.k === u) return;
                    e.mouse = [s, o.invert(s)], Ds(this), e.start()
                }
                Ef(t), e.wheel = setTimeout(f, 150), e.zoom("mouse", i(y(g(o, u), e.mouse[0], e.mouse[1]), e.extent, l))
            }

            function f() {
                e.wheel = null, e.end()
            }
        }

        function T(t, ...n) {
            if (!e && r.apply(this, arguments)) {
                var o = b(this, n, !0).event(t),
                    a = jt(t.view).on("mousemove.zoom", h, !0).on("mouseup.zoom", d, !0),
                    u = Lo(t, c),
                    c = t.currentTarget,
                    s = t.clientX,
                    f = t.clientY;
                Ro(t.view), Af(t), o.mouse = [u, this.__zoom.invert(u)], Ds(this), o.start()
            }

            function h(t) {
                if (Ef(t), !o.moved) {
                    var n = t.clientX - s,
                        e = t.clientY - f;
                    o.moved = n * n + e * e > p
                }
                o.event(t).zoom("mouse", i(y(o.that.__zoom, o.mouse[0] = Lo(t, c), o.mouse[1]), o.extent, l))
            }

            function d(t) {
                a.on("mousemove.zoom mouseup.zoom", null), zo(t.view, o.moved), Ef(t), o.event(t).end()
            }
        }

        function A(t, ...n) {
            if (r.apply(this, arguments)) {
                var e = this.__zoom,
                    a = Lo(t.changedTouches ? t.changedTouches[0] : t, this),
                    u = e.invert(a),
                    c = e.k * (t.shiftKey ? .5 : 2),
                    f = i(y(g(e, c), a, u), o.apply(this, n), l);
                Ef(t), s > 0 ? jt(this).transition().duration(s).call(w, f, a, t) : jt(this).call(m.transform, f, a, t)
            }
        }

        function E(e, ...o) {
            if (r.apply(this, arguments)) {
                var i, a, u, c, l = e.touches,
                    s = l.length,
                    f = b(this, o, e.changedTouches.length === s).event(e);
                for (Af(e), a = 0; a < s; ++a) c = [c = Lo(u = l[a], this), this.__zoom.invert(c), u.identifier], f.touch0 ? f.touch1 || f.touch0[2] === c[2] || (f.touch1 = c, f.taps = 0) : (f.touch0 = c, i = !0, f.taps = 1 + !!t);
                t && (t = clearTimeout(t)), i && (f.taps < 2 && (n = c[0], t = setTimeout((function() {
                    t = null
                }), d)), Ds(this), f.start())
            }
        }

        function S(t, ...n) {
            if (this.__zooming) {
                var e, r, o, a, u = b(this, n).event(t),
                    c = t.changedTouches,
                    s = c.length;
                for (Ef(t), e = 0; e < s; ++e) o = Lo(r = c[e], this), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = o : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = o);
                if (r = u.that.__zoom, u.touch1) {
                    var f = u.touch0[0],
                        h = u.touch0[1],
                        d = u.touch1[0],
                        p = u.touch1[1],
                        v = (v = d[0] - f[0]) * v + (v = d[1] - f[1]) * v,
                        m = (m = p[0] - h[0]) * m + (m = p[1] - h[1]) * m;
                    r = g(r, Math.sqrt(v / m)), o = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]
                } else {
                    if (!u.touch0) return;
                    o = u.touch0[0], a = u.touch0[1]
                }
                u.zoom("touch", i(y(r, o, a), u.extent, l))
            }
        }

        function N(t, ...r) {
            if (this.__zooming) {
                var o, i, a = b(this, r).event(t),
                    u = t.changedTouches,
                    c = u.length;
                for (Af(t), e && clearTimeout(e), e = setTimeout((function() {
                        e = null
                    }), d), o = 0; o < c; ++o) i = u[o], a.touch0 && a.touch0[2] === i.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
                if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                else if (a.end(), 2 === a.taps && (i = Lo(i, this), Math.hypot(n[0] - i[0], n[1] - i[1]) < v)) {
                    var l = jt(this).on("dblclick.zoom");
                    l && l.apply(this, arguments)
                }
            }
        }
        return m.transform = function(t, n, e, r) {
            var o = t.selection ? t.selection() : t;
            o.property("__zoom", kf), t !== o ? w(t, n, e, r) : o.interrupt().each((function() {
                b(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
            }))
        }, m.scaleBy = function(t, n, e, r) {
            m.scaleTo(t, (function() {
                var t = this.__zoom.k,
                    e = "function" == typeof n ? n.apply(this, arguments) : n;
                return t * e
            }), e, r)
        }, m.scaleTo = function(t, n, e, r) {
            m.transform(t, (function() {
                var t = o.apply(this, arguments),
                    r = this.__zoom,
                    a = null == e ? _(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                    u = r.invert(a),
                    c = "function" == typeof n ? n.apply(this, arguments) : n;
                return i(y(g(r, c), a, u), t, l)
            }), e, r)
        }, m.translateBy = function(t, n, e, r) {
            m.transform(t, (function() {
                return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), o.apply(this, arguments), l)
            }), null, r)
        }, m.translateTo = function(t, n, e, r, a) {
            m.transform(t, (function() {
                var t = o.apply(this, arguments),
                    a = this.__zoom,
                    u = null == r ? _(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                return i(Tf.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, l)
            }), r, a)
        }, x.prototype = {
            event: function(t) {
                return t && (this.sourceEvent = t), this
            },
            start: function() {
                return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
            },
            zoom: function(t, n) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
            },
            end: function() {
                return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
            },
            emit: function(t) {
                var n = jt(this.that).datum();
                h.call(t, this.that, new xf(t, {
                    sourceEvent: this.sourceEvent,
                    target: m,
                    type: t,
                    transform: this.that.__zoom,
                    dispatch: h
                }), n)
            }
        }, m.wheelDelta = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : bf(+t), m) : a
        }, m.filter = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : bf(!!t), m) : r
        }, m.touchable = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : bf(!!t), m) : u
        }, m.extent = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : bf([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), m) : o
        }, m.scaleExtent = function(t) {
            return arguments.length ? (c[0] = +t[0], c[1] = +t[1], m) : [c[0], c[1]]
        }, m.translateExtent = function(t) {
            return arguments.length ? (l[0][0] = +t[0][0], l[1][0] = +t[1][0], l[0][1] = +t[0][1], l[1][1] = +t[1][1], m) : [
                [l[0][0], l[0][1]],
                [l[1][0], l[1][1]]
            ]
        }, m.constrain = function(t) {
            return arguments.length ? (i = t, m) : i
        }, m.duration = function(t) {
            return arguments.length ? (s = +t, m) : s
        }, m.interpolate = function(t) {
            return arguments.length ? (f = t, m) : f
        }, m.on = function() {
            var t = h.on.apply(h, arguments);
            return t === h ? m : t
        }, m.clickDistance = function(t) {
            return arguments.length ? (p = (t = +t) * t, m) : Math.sqrt(p)
        }, m.tapDistance = function(t) {
            return arguments.length ? (v = +t, m) : v
        }, m
    }

    function Of(t) {
        return null === t
    }

    function Rf(t) {
        return void 0 === t
    }

    function zf(t) {
        return !0 === t || !1 === t || "[object Boolean]" === Zt.call(t)
    }

    function $f(t) {
        return !(!t || 1 !== t.nodeType)
    }
    Mf.prototype;
    const If = fn("String"),
        Ff = fn("Date"),
        Yf = fn("RegExp"),
        Cf = fn("Error"),
        Uf = fn("Symbol"),
        Hf = fn("Map"),
        qf = fn("WeakMap"),
        Xf = fn("Set"),
        Bf = fn("WeakSet"),
        Vf = fn("ArrayBuffer");

    function Wf(t) {
        return !Uf(t) && an(t) && !isNaN(parseFloat(t))
    }

    function Gf(t) {
        return null == t || (Cn(t) && (xn(t) || If(t) || Hn(t)) ? 0 === t.length : 0 === mn(t).length)
    }

    function Kf(t) {
        if (!Ht(t)) return [];
        var n = [];
        for (var e in t) n.push(e);
        return un && vn(t, n), n
    }

    function Zf(t) {
        for (var n = mn(t), e = n.length, r = Array(e), o = 0; o < e; o++) r[o] = [n[o], t[n[o]]];
        return r
    }

    function Jf(t) {
        for (var n = {}, e = mn(t), r = 0, o = e.length; r < o; r++) n[t[e[r]]] = e[r];
        return n
    }

    function Qf(t) {
        var n = [];
        for (var e in t) pn(t[e]) && n.push(e);
        return n.sort()
    }
    const th = Mn(Kf),
        nh = Mn(Kf, !0);

    function eh(t) {
        if (!Ht(t)) return {};
        if (en) return en(t);
        var n = function() {};
        n.prototype = t;
        var e = new n;
        return n.prototype = null, e
    }

    function rh(t, n) {
        var e = eh(t);
        return n && Tn(e, n), e
    }

    function oh(t) {
        return Ht(t) ? xn(t) ? t.slice() : th({}, t) : t
    }

    function ih(t, n) {
        return n(t), t
    }

    function ah() {}

    function uh(t) {
        return null == t ? function() {} : function(n) {
            return xn(n) ? Nn(t, n) : t[n]
        }
    }

    function ch(t, n, e) {
        var r = Array(Math.max(0, t));
        n = Dn(n, e, 1);
        for (var o = 0; o < t; o++) r[o] = n(o);
        return r
    }
    const lh = gn(Jf(yn)),
        sh = wn.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
    var fh = /(.)^/,
        hh = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        dh = /\\|'|\r|\n|\u2028|\u2029/g;

    function ph(t) {
        return "\\" + hh[t]
    }

    function vh(t, n, e) {
        !n && e && (n = e), n = nh({}, n, wn.templateSettings);
        var r, o = RegExp([(n.escape || fh).source, (n.interpolate || fh).source, (n.evaluate || fh).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        t.replace(o, (function(n, e, r, o, u) {
            return a += t.slice(i, u).replace(dh, ph), i = u + n.length, e ? a += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (a += "';\n" + o + "\n__p+='"), n
        })), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (t) {
            throw t.source = a, t
        }
        var u = function(t) {
                return r.call(this, t, wn)
            },
            c = n.variable || "obj";
        return u.source = "function(" + c + "){\n" + a + "}", u
    }

    function mh(t, n, e) {
        xn(n) || (n = [n]);
        var r = n.length;
        if (!r) return pn(e) ? e.call(t) : e;
        for (var o = 0; o < r; o++) {
            var i = null == t ? void 0 : t[n[o]];
            void 0 === i && (i = e, o = r), t = pn(i) ? i.call(t) : i
        }
        return t
    }
    var gh = 0;

    function yh(t) {
        var n = ++gh + "";
        return t ? t + n : n
    }

    function _h(t) {
        var n = wn(t);
        return n._chain = !0, n
    }

    function wh(t, n, e, r, o) {
        if (!(r instanceof n)) return t.apply(e, o);
        var i = eh(t.prototype),
            a = t.apply(i, o);
        return Ht(a) ? a : i
    }
    var bh = Yt((function(t, n) {
        var e = bh.placeholder,
            r = function() {
                for (var o = 0, i = n.length, a = Array(i), u = 0; u < i; u++) a[u] = n[u] === e ? arguments[o++] : n[u];
                for (; o < arguments.length;) a.push(arguments[o++]);
                return wh(t, r, this, this, a)
            };
        return r
    }));
    bh.placeholder = wn;
    const xh = bh,
        Mh = Yt((function(t, n, e) {
            if (!pn(t)) throw new TypeError("Bind must be called on a function");
            var r = Yt((function(o) {
                return wh(t, r, n, this, e.concat(o))
            }));
            return r
        })),
        Th = Yt((function(t, n) {
            var e = (n = qn(n, !1, !1)).length;
            if (e < 1) throw new Error("bindAll must be passed function names");
            for (; e--;) {
                var r = n[e];
                t[r] = Mh(t[r], t)
            }
            return t
        })),
        Ah = xh(Ct, wn, 1);

    function Eh(t, n) {
        return xh(n, t)
    }

    function Sh(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }

    function Nh() {
        var t = arguments,
            n = t.length - 1;
        return function() {
            for (var e = n, r = t[n].apply(this, arguments); e--;) r = t[e].call(this, r);
            return r
        }
    }

    function kh(t, n) {
        return function() {
            if (--t < 1) return n.apply(this, arguments)
        }
    }

    function Dh(t, n) {
        var e;
        return function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = null), e
        }
    }
    const Ph = xh(Dh, 2);

    function Lh(t, n, e) {
        n = jn(n, e);
        for (var r, o = mn(t), i = 0, a = o.length; i < a; i++)
            if (n(t[r = o[i]], r, t)) return r
    }
    const jh = te(-1, $n);

    function Oh(t, n, e) {
        var r = (Cn(t) ? zn : Lh)(t, n, e);
        if (void 0 !== r && -1 !== r) return t[r]
    }

    function Rh(t, n) {
        return Oh(t, En(n))
    }

    function zh(t) {
        var n = function(n, e, r, o) {
            var i = !Cn(n) && mn(n),
                a = (i || n).length,
                u = t > 0 ? 0 : a - 1;
            for (o || (r = n[i ? i[u] : u], u += t); u >= 0 && u < a; u += t) {
                var c = i ? i[u] : u;
                r = e(r, n[c], c, n)
            }
            return r
        };
        return function(t, e, r, o) {
            var i = arguments.length >= 3;
            return n(t, Dn(e, o, 4), r, i)
        }
    }
    const $h = zh(1),
        Ih = zh(-1);

    function Fh(t, n, e) {
        var r = [];
        return n = jn(n, e), Bn(t, (function(t, e, o) {
            n(t, e, o) && r.push(t)
        })), r
    }

    function Yh(t, n, e) {
        return Fh(t, Sh(jn(n)), e)
    }

    function Ch(t, n, e) {
        n = jn(n, e);
        for (var r = !Cn(t) && mn(t), o = (r || t).length, i = 0; i < o; i++) {
            var a = r ? r[i] : i;
            if (!n(t[a], a, t)) return !1
        }
        return !0
    }

    function Uh(t, n, e) {
        n = jn(n, e);
        for (var r = !Cn(t) && mn(t), o = (r || t).length, i = 0; i < o; i++) {
            var a = r ? r[i] : i;
            if (n(t[a], a, t)) return !0
        }
        return !1
    }
    const Hh = Yt((function(t, n, e) {
        var r, o;
        return pn(n) ? o = n : xn(n) && (r = n.slice(0, -1), n = n[n.length - 1]), ve(t, (function(t) {
            var i = o;
            if (!i) {
                if (r && r.length && (t = Nn(t, r)), null == t) return;
                i = t[n]
            }
            return null == i ? i : i.apply(t, e)
        }))
    }));

    function qh(t, n) {
        return ve(t, kn(n))
    }

    function Xh(t, n) {
        return Fh(t, En(n))
    }

    function Bh(t, n, e) {
        var r, o, i = -1 / 0,
            a = -1 / 0;
        if (null == n || "number" == typeof n && "object" != typeof t[0] && null != t)
            for (var u = 0, c = (t = Cn(t) ? t : Kn(t)).length; u < c; u++) null != (r = t[u]) && r > i && (i = r);
        else n = jn(n, e), Bn(t, (function(t, e, r) {
            ((o = n(t, e, r)) > a || o === -1 / 0 && i === -1 / 0) && (i = t, a = o)
        }));
        return i
    }

    function Vh(t, n, e) {
        var r, o, i = 1 / 0,
            a = 1 / 0;
        if (null == n || "number" == typeof n && "object" != typeof t[0] && null != t)
            for (var u = 0, c = (t = Cn(t) ? t : Kn(t)).length; u < c; u++) null != (r = t[u]) && r < i && (i = r);
        else n = jn(n, e), Bn(t, (function(t, e, r) {
            ((o = n(t, e, r)) < a || o === 1 / 0 && i === 1 / 0) && (i = t, a = o)
        }));
        return i
    }

    function Wh(t, n, e) {
        if (null == n || e) return Cn(t) || (t = Kn(t)), t[ye(t.length - 1)];
        var r = Cn(t) ? oh(t) : Kn(t),
            o = On(r);
        n = Math.max(Math.min(n, o), 0);
        for (var i = o - 1, a = 0; a < n; a++) {
            var u = ye(a, i),
                c = r[a];
            r[a] = r[u], r[u] = c
        }
        return r.slice(0, n)
    }

    function Gh(t) {
        return Wh(t, 1 / 0)
    }

    function Kh(t, n, e) {
        var r = 0;
        return n = jn(n, e), qh(ve(t, (function(t, e, o) {
            return {
                value: t,
                index: r++,
                criteria: n(t, e, o)
            }
        })).sort((function(t, n) {
            var e = t.criteria,
                r = n.criteria;
            if (e !== r) {
                if (e > r || void 0 === e) return 1;
                if (e < r || void 0 === r) return -1
            }
            return t.index - n.index
        })), "value")
    }
    const Zh = Vn((function(t, n, e) {
            t[e] = n
        })),
        Jh = Vn((function(t, n, e) {
            sn(t, e) ? t[e]++ : t[e] = 1
        })),
        Qh = Vn((function(t, n, e) {
            t[e ? 0 : 1].push(n)
        }), !0);
    var td = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;

    function nd(t) {
        return t ? xn(t) ? Kt.call(t) : If(t) ? t.match(td) : Cn(t) ? ve(t, bn) : Kn(t) : []
    }

    function ed(t) {
        return null == t ? 0 : Cn(t) ? t.length : mn(t).length
    }

    function rd(t, n, e) {
        return n in e
    }
    const od = Yt((function(t, n) {
            var e = {},
                r = n[0];
            if (null == t) return e;
            pn(r) ? (n.length > 1 && (r = Dn(r, n[1])), n = Kf(t)) : (r = rd, n = qn(n, !1, !1), t = Object(t));
            for (var o = 0, i = n.length; o < i; o++) {
                var a = n[o],
                    u = t[a];
                r(u, a, t) && (e[a] = u)
            }
            return e
        })),
        id = Yt((function(t, n) {
            var e, r = n[0];
            return pn(r) ? (r = Sh(r), n.length > 1 && (e = n[1])) : (n = ve(qn(n, !1, !1), String), r = function(t, e) {
                return !ee(n, e)
            }), od(t, r, e)
        }));

    function ad(t) {
        return Fh(t, Boolean)
    }
    const ud = Yt((function(t, n) {
            return n = qn(n, !0, !0), Fh(t, (function(t) {
                return !ee(n, t)
            }))
        })),
        cd = Yt((function(t, n) {
            return ud(t, n)
        }));

    function ld(t, n, e, r) {
        zf(n) || (r = e, e = n, n = !1), null != e && (e = jn(e, r));
        for (var o = [], i = [], a = 0, u = On(t); a < u; a++) {
            var c = t[a],
                l = e ? e(c, a, t) : c;
            n && !e ? (a && i === l || o.push(c), i = l) : e ? ee(i, l) || (i.push(l), o.push(c)) : ee(o, c) || o.push(c)
        }
        return o
    }
    const sd = Yt((function(t) {
        return ld(qn(t, !0, !0))
    }));

    function fd(t) {
        for (var n = t && Bh(t, On).length || 0, e = Array(n), r = 0; r < n; r++) e[r] = qh(t, r);
        return e
    }
    const hd = Yt(fd);

    function dd(t, n) {
        for (var e = {}, r = 0, o = On(t); r < o; r++) n ? e[t[r]] = n[r] : e[t[r][0]] = t[r][1];
        return e
    }

    function pd(t, n) {
        if (null == n || n < 1) return [];
        for (var e = [], r = 0, o = t.length; r < o;) e.push(Kt.call(t, r, r += n));
        return e
    }

    function vd(t, n) {
        return t._chain ? wn(n).chain() : n
    }

    function md(t) {
        return Bn(Qf(t), (function(n) {
            var e = wn[n] = t[n];
            wn.prototype[n] = function() {
                var t = [this._wrapped];
                return Gt.apply(t, arguments), vd(this, e.apply(wn, t))
            }
        })), wn
    }
    Bn(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(t) {
        var n = Bt[t];
        wn.prototype[t] = function() {
            var e = this._wrapped;
            return null != e && (n.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0]), vd(this, e)
        }
    })), Bn(["concat", "join", "slice"], (function(t) {
        var n = Bt[t];
        wn.prototype[t] = function() {
            var t = this._wrapped;
            return null != t && (t = n.apply(t, arguments)), vd(this, t)
        }
    }));
    const gd = wn;
    var yd = md(e);

    function _d() {
        const {
            innerWidth: t,
            innerHeight: n
        } = window;
        return {
            xMin: 0,
            yMin: 0,
            xMax: t - 1,
            yMax: n - 1,
            width: t,
            height: n
        }
    }

    function wd(t, n) {
        return function(t = {}) {
            const {
                name: n,
                initial: e,
                events: r = []
            } = t, o = r.concat(["submit", "update", "reject", "fail"]), i = nr.apply(void 0, o);

            function a() {
                return function t() {
                    return t.requested = !0, l
                }
            }
            let u = e;
            const c = Ut((function(t, n) {
                    function e(t) {
                        i.call("fail", null, t, l)
                    }
                    try {
                        const [r, ...o] = n;
                        Promise.all(o).then((n => function(n, e) {
                            return t.requested ? null : pn(n) ? n.apply(l, e) : n
                        }(r, n))).then((function(n) {
                            t.requested || (u = n, i.call("update", null, n, l))
                        }), (function(n) {
                            t.requested || i.call("reject", null, n, l)
                        })).catch(e), i.call("submit", null, l)
                    } catch (t) {
                        e(t)
                    }
                }), 0),
                l = Object.assign(i, {
                    value: function() {
                        return u
                    },
                    cancel: a(),
                    submit: function(t, n, e, r) {
                        return this.cancel(), c(this.cancel = a(), arguments), this
                    },
                    toString: function() {
                        return n
                    }
                });
            return l
        }(er(n, {
            name: t
        })).on(_r`reject fail`, Pr.error)
    }

    function bd(t) {
        const n = [];
        for (let e = 0; e < t.length;) {
            let r = t[e++];
            switch (r >> 4) {
                case 12:
                case 13:
                    r = (31 & r) << 6 | 63 & t[e++];
                    break;
                case 14:
                    r = (15 & r) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]
            }
            n.push(r)
        }
        return String.fromCharCode.apply(null, n)
    }

    function xd(t, n) {
        let e = 0,
            r = 0;
        for (; e < n.length;) {
            let o = n[e++];
            if (o < 128) o = o << 25 >> 25;
            else switch (o >> 4) {
                case 8:
                case 9:
                case 10:
                case 11:
                    o = o << 26 >> 18 | n[e++];
                    break;
                case 12:
                case 13:
                    o = o << 27 >> 11 | n[e++] << 8 | n[e++];
                    break;
                case 14:
                    o = o << 28 >> 4 | n[e++] << 16 | n[e++] << 8 | n[e++];
                    break;
                case 15:
                    if (255 === o) {
                        for (let o = 1 + n[e++]; o > 0; o--) t[r++] = NaN;
                        continue
                    }
                    switch (7 & o) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            o = n[e++] << 24 | n[e++] << 16 | n[e++] << 8 | n[e++];
                            break;
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        default:
                            throw new Error("NYI")
                    }
            }
            t[r++] = o
        }
        return t
    }

    function Md(t, n) {
        for (let e = 0; e < t.length; e++) t[e] /= n;
        return t
    }

    function Td(t, n, e, r, o) {
        const i = new Float32Array(n * e * r);
        return xd(i, t),
            function(t, n, e, r) {
                let o, i, a, u, c, l, s;
                for (a = 0; a < r; a++) {
                    for (l = a * n * e, o = 1; o < n; o++) u = l + o, s = t[u - 1], t[u] += s == s ? s : 0;
                    for (i = 1; i < e; i++)
                        for (c = l + i * n, s = t[c - n], t[c] += s == s ? s : 0, o = 1; o < n; o++) {
                            u = c + o;
                            const e = t[u - 1],
                                r = t[u - n],
                                i = t[u - n - 1];
                            s = e + r - i, t[u] += s == s ? s : e == e ? e : r == r ? r : i == i ? i : 0
                        }
                }
            }(i, n, e, r), Md(i, o), i
    }

    function Ad(t, n, e, r) {
        const o = new DataView(n, e, r),
            i = new Uint8Array(n, e + 16, r - 16),
            a = o.getInt32(0),
            u = o.getInt32(4),
            c = o.getInt32(8),
            l = Math.pow(10, o.getFloat32(12));
        return {
            metadata: {
                type: t,
                cols: a,
                rows: u,
                grids: c,
                scaleFactor: l
            },
            values: Td(i, a, u, c, l)
        }
    }

    function Ed(t, n, e, r) {
        const o = function(t, n) {
            switch (t) {
                case 8:
                    return new Float32Array(n);
                case 9:
                    return new Float64Array(n);
                default:
                    throw new Error(`unknown array type: ${t}`)
            }
        }(n, e);
        return xd(o, t),
            function(t, n) {
                for (let e = 0, r = 0; r < t.length; r++) n[r] = e += t[r]
            }(o, o), Md(o, r), o
    }

    function Sd(t, n, e) {
        const r = new DataView(t, n, e),
            o = new Uint8Array(t, n + 13, e - 13),
            i = r.getUint8(0),
            a = r.getInt32(1),
            u = r.getFloat64(5);
        return {
            metadata: {
                type: "qpak",
                scaleFactor: u
            },
            values: Ed(o, i, a, u)
        }
    }
    yd._ = yd;
    const Nd = JSON.parse(jt("#translations").text());

    function kd(t) {
        var n;
        if (t.length > 1) throw new Error("NYI");
        const e = t[0];
        return null !== (n = Nd[e]) && void 0 !== n ? n : e
    }

    function Dd(t, n, e, r, o) {
        if (null === (null != r ? r : null)) return n(o);
        let i = r;
        if (r instanceof ProgressEvent) {
            const t = r.target,
                {
                    status: n
                } = t;
            i = kd`Data download failed`, navigator.onLine ? 404 === n ? i = kd`Data not available for this date` : n > 0 && (i = `Error: HTTP ${n}: ${t.statusText}`) : i = kd`Network not available`
        }
        return e({
            resource: t,
            error: i
        })
    }

    function Pd(t) {
        return new Promise(((n, e) => {
            Il(t, ((r, o) => Dd(t, n, e, r, o)))
        }))
    }
    const Ld = ge(Pd);

    function jd(t) {
        return new Promise(((n, e) => {
            $l(t).responseType("arraybuffer").response((t => {
                var n;
                if ((null === (n = t.response) || void 0 === n ? void 0 : n.byteLength) > 0) return function(t, n) {
                    let e = 0;
                    const r = new DataView(t),
                        o = bd(new Uint8Array(t, e, 4));
                    if (e += 4, "head" !== o) throw new Error("expected 'head' but found '" + o + "'");
                    let i = r.getInt32(e);
                    e += 4;
                    const a = JSON.parse(bd(new Uint8Array(t, e, i)));
                    let u;
                    e += i;
                    const c = [],
                        l = [];
                    let s;
                    for (;
                        "tail" !== (s = bd(new Uint8Array(t, e, 4)));) {
                        switch (e += 4, i = r.getInt32(e), e += 4, s) {
                            case "ppak":
                                u = Ad(s, t, e, i);
                                break;
                            case "qpak":
                                u = Sd(t, e, i);
                                break;
                            default:
                                throw new Error("unknown block type: " + s)
                        }
                        c.push(u.values), l.push(u.metadata), e += i
                    }
                    return {
                        header: a,
                        blocks: c,
                        metadata: l
                    }
                }(t.response);
                throw new Error(kd`Data is empty`)
            })).get(((r, o) => Dd(t, n, e, r, o)))
        }))
    }

    function Od(t) {
        return /\.epak([/?#]|$)/.test(t) ? jd(t) : Pd(t)
    }

    function Rd(t) {
        return t
    }

    function zd(t, n) {
        return "string" == typeof n && (n = t.objects[n]), "GeometryCollection" === n.type ? {
            type: "FeatureCollection",
            features: n.geometries.map((function(n) {
                return $d(t, n)
            }))
        } : $d(t, n)
    }

    function $d(t, n) {
        var e = n.id,
            r = n.bbox,
            o = null == n.properties ? {} : n.properties,
            i = function(t, n) {
                var e = function(t) {
                        if (null == t) return Rd;
                        var n, e, r = t.scale[0],
                            o = t.scale[1],
                            i = t.translate[0],
                            a = t.translate[1];
                        return function(t, u) {
                            u || (n = e = 0);
                            var c = 2,
                                l = t.length,
                                s = new Array(l);
                            for (s[0] = (n += t[0]) * r + i, s[1] = (e += t[1]) * o + a; c < l;) s[c] = t[c], ++c;
                            return s
                        }
                    }(t.transform),
                    r = t.arcs;

                function o(t, n) {
                    n.length && n.pop();
                    for (var o = r[t < 0 ? ~t : t], i = 0, a = o.length; i < a; ++i) n.push(e(o[i], i));
                    t < 0 && function(t, n) {
                        for (var e, r = t.length, o = r - n; o < --r;) e = t[o], t[o++] = t[r], t[r] = e
                    }(n, a)
                }

                function i(t) {
                    return e(t)
                }

                function a(t) {
                    for (var n = [], e = 0, r = t.length; e < r; ++e) o(t[e], n);
                    return n.length < 2 && n.push(n[0]), n
                }

                function u(t) {
                    for (var n = a(t); n.length < 4;) n.push(n[0]);
                    return n
                }

                function c(t) {
                    return t.map(u)
                }
                return function t(n) {
                    var e, r = n.type;
                    switch (r) {
                        case "GeometryCollection":
                            return {
                                type: r, geometries: n.geometries.map(t)
                            };
                        case "Point":
                            e = i(n.coordinates);
                            break;
                        case "MultiPoint":
                            e = n.coordinates.map(i);
                            break;
                        case "LineString":
                            e = a(n.arcs);
                            break;
                        case "MultiLineString":
                            e = n.arcs.map(a);
                            break;
                        case "Polygon":
                            e = c(n.arcs);
                            break;
                        case "MultiPolygon":
                            e = n.arcs.map(c);
                            break;
                        default:
                            return null
                    }
                    return {
                        type: r,
                        coordinates: e
                    }
                }(n)
            }(t, n);
        return null == e && null == r ? {
            type: "Feature",
            properties: o,
            geometry: i
        } : null == r ? {
            type: "Feature",
            id: e,
            properties: o,
            geometry: i
        } : {
            type: "Feature",
            id: e,
            bbox: r,
            properties: o,
            geometry: i
        }
    }
    const Id = pr();

    function Fd(t = 1, n = 1) {
        const e = document.createElement("canvas");
        return e.width = t, e.height = n, e
    }

    function Yd(t) {
        const {
            width: n,
            height: e
        } = t.canvas;
        t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, e), t.restore()
    }

    function Cd(t) {
        Yd(t.getContext("2d"))
    }

    function Ud(t, n) {
        const e = pn(t) ? t : () => t;
        return {
            renderTo(t, r) {
                Object.assign(t, n), t.beginPath(), r(e()), t.stroke()
            }
        }
    }

    function Hd() {
        const t = [];
        return {
            add(n) {
                t.push(n)
            },
            renderTo(n, e) {
                t.forEach((t => t.renderTo(n, e)))
            }
        }
    }

    function qd(t) {
        return {
            renderTo(n, e) {
                Yd(n), e.context(n), n.lineJoin = "bevel", t.forEach((t => t.renderTo(n, e)))
            }
        }
    }

    function Xd(t, n, e, r, o) {
        const i = De(e + 90, 360),
            a = 180 < i ? -1 : 1;
        a < 0 ? (e = 270 - i, n += 180) : e = i - 90, e *= Ae, n = (De(n + 180, 360) - 180) * Ae;
        const u = t * t,
            c = Math.sin(e),
            l = Math.cos(e),
            s = t * l,
            f = l / t,
            h = [r, o];
        return {
            project: function(e, i) {
                const u = i * Ae,
                    f = e * Ae - n,
                    h = Math.sin(f),
                    d = Math.cos(f),
                    p = Math.sin(u),
                    v = Math.cos(u),
                    m = t * v;
                return c * p + l * v * d < 0 ? [NaN, NaN] : [m * h * a + r, (m * d * c - s * p) * a + o]
            },
            invert: function(t, e) {
                const i = (t - r) * a,
                    l = (o - e) * a,
                    h = 1 - (i * i + l * l) / u;
                if (h >= 0) {
                    const t = Math.sqrt(h),
                        e = n + Math.atan2(i, t * s - l * c),
                        r = Math.asin(t * c + l * f);
                    return [e * Te, r * Te]
                }
                return [NaN, NaN]
            },
            webgl: function() {
                return {
                    shaderSource: "\nuniform vec2 u_translate;   // screen coords translation (x0, y0)\nuniform float u_R2;         // scale R, squared\nuniform float u_lon0;       // origin longitude\nuniform float u_sinlat0;    // sin(lat0)\nuniform float u_Rcoslat0;   // R * cos(lat0)\nuniform float u_coslat0dR;  // cos(lat0) / R\nuniform float u_flip;       // 1.0 if lat0 in range [-90deg, +90deg], otherwise -1.0\n\n// Handbook of Mathematical Functions, M. Abramowitz and I.A. Stegun, Ed. For input on range [-1, +1]\n// Cg 3.1 Toolkit Documentation https://developer.download.nvidia.com/cg/index_stdlib.html\nfloat arcsin(in float v) {\n    float x = abs(v);\n    float ret = -0.0187293;\n    ret *= x;\n    ret += 0.0742610;\n    ret *= x;\n    ret -= 0.2121144;\n    ret *= x;\n    ret += 1.5707288;\n    ret = PI / 2.0 - sqrt(1.0 - x) * ret;\n    return sign(v) * ret;\n}\n\n/** @returns [lon, lat] in radians for the specified point [x, y], or [NIL, NIL] if the point is unprojectable. */\nvec2 invert(in vec2 point) {\n    vec2 p = (point - u_translate) * u_flip;\n    float d = 1.0 - dot(p, p) / u_R2;\n    if (d >= 0.0) {\n        float cosc = sqrt(d);\n        float lon = u_lon0 + atan(p.x, cosc * u_Rcoslat0 - p.y * u_sinlat0);  // u_lon0 + [-pi/2, pi/2]\n        float lat = arcsin(cosc * u_sinlat0 + p.y * u_coslat0dR);             // [-pi/2, pi/2] [-90deg, +90deg]\n        return vec2(lon, lat);\n    }\n    return vec2(NIL);  // outside of projection\n}\n",
                    uniforms: {
                        u_translate: h,
                        u_R2: u,
                        u_lon0: n,
                        u_sinlat0: c,
                        u_Rcoslat0: s,
                        u_coslat0dR: f,
                        u_flip: a
                    }
                }
            }
        }
    }
    const Bd = {
        conicEquidistant: Wd,
        equirectangular: Gd,
        mollweide: Kd,
        orthographic: Zd,
        patterson: Jd,
        polyhedralWaterman: Qd,
        stereographic: tp,
        winkel3: np
    };

    function Vd() {
        const t = function(t) {
                return function(t) {
                    const n = JSON.parse(t),
                        e = n[0],
                        r = Bd[e];
                    if (void 0 === r) throw new Error("Unknown projection: " + e);
                    return r().clipAngle(n[1]).clipExtent(n[2]).scale(n[3]).translate(n[4]).center(n[5]).angle(n[6]).rotate(n[7]).precision(n[8])
                }(function(t) {
                    if (void 0 === Bd[t.key]) throw new Error("Unsupported projection: " + t);
                    return JSON.stringify([t.key, t.clipAngle(), t.clipExtent(), t.scale(), t.translate(), t.center(), t.angle(), t.rotate(), t.precision()])
                }(t))
            }(this),
            n = t.invert.bind(t),
            e = [NaN, NaN];
        return {
            project(n, r) {
                var o;
                return e[0] = n, e[1] = r, null !== (o = t(e)) && void 0 !== o ? o : [NaN, NaN]
            },
            invert(t, r) {
                var o;
                return e[0] = t, e[1] = r, null !== (o = n(e)) && void 0 !== o ? o : [NaN, NaN]
            }
        }
    }

    function Wd() {
        return Object.assign(la(), {
            key: "conicEquidistant",
            optimize: Vd
        })
    }

    function Gd() {
        return Object.assign(ua(), {
            key: "equirectangular",
            optimize() {
                return function(t, n, e, r, o, i) {
                    return 0 === e && 0 === r ? function(t, n, e, r) {
                        n *= Ae;
                        const o = [e, r];
                        return {
                            project: function(o, i) {
                                let a = o * Ae,
                                    u = i * Ae;
                                a += n;
                                const c = De(xe + a, Me) - xe;
                                return [t * c + e, r - t * u]
                            },
                            invert: function(o, i) {
                                const a = (o - e) / t,
                                    u = (r - i) / t;
                                if (Math.abs(a) <= xe && Math.abs(u) <= xe / 2) {
                                    let t = a;
                                    return t -= n, [t * Te, u * Te]
                                }
                                return [NaN, NaN]
                            },
                            webgl: function() {
                                return {
                                    shaderSource: "\nuniform vec2 u_translate;\nuniform float u_R;\nuniform float u_lon0;\n\nconst vec2 BOUNDS = vec2(PI, PI / 2.0);\n\n/** @returns (lon, lat) in radians for the specified point (x, y), or (NIL, NIL) if the point is unprojectable. */\nvec2 invert(in vec2 point) {\n    // translate and scale\n    vec2 p = (point - u_translate) / u_R;\n    if (all(lessThanEqual(abs(p), BOUNDS))) {\n        // project\n        float lambda = p.x;\n        float phi = p.y;\n        // rotate\n        float lon = lambda - u_lon0;\n        float lat = phi;\n        return vec2(lon, lat);\n    }\n    return vec2(NIL);  // outside of projection\n}\n",
                                    uniforms: {
                                        u_translate: o,
                                        u_R: t,
                                        u_lon0: n
                                    }
                                }
                            }
                        }
                    }(t, n, o, i) : function(t, n, e, r, o, i) {
                        n *= Ae, e *= Ae, r *= Ae;
                        const a = Math.cos(e),
                            u = Math.sin(e),
                            c = Math.cos(r),
                            l = Math.sin(r),
                            s = [o, i];
                        return {
                            project: function(e, r) {
                                let s = e * Ae,
                                    f = r * Ae;
                                s += n;
                                const h = Math.cos(f),
                                    d = Math.cos(s) * h,
                                    p = Math.sin(s) * h,
                                    v = Math.sin(f),
                                    m = v * a + d * u;
                                return s = Math.atan2(p * c - m * l, d * a - v * u), f = Math.asin(m * c + p * l), [t * s + o, i - t * f]
                            },
                            invert: function(e, r) {
                                const s = (e - o) / t,
                                    f = (i - r) / t;
                                if (Math.abs(s) <= xe && Math.abs(f) <= xe / 2) {
                                    let t = s,
                                        e = f;
                                    const r = Math.cos(e),
                                        o = Math.cos(t) * r,
                                        i = Math.sin(t) * r,
                                        h = Math.sin(e),
                                        d = h * c - i * l;
                                    return t = Math.atan2(i * c + h * l, o * a + d * u), e = Math.asin(d * a - o * u), t -= n, [t * Te, e * Te]
                                }
                                return [NaN, NaN]
                            },
                            webgl: function() {
                                return {
                                    shaderSource: "\nuniform vec2 u_translate;\nuniform float u_R;\nuniform float u_lon0;\nuniform float u_sinlat0;\nuniform float u_coslat0;\nuniform float u_singam0;\nuniform float u_cosgam0;\n\nconst vec2 BOUNDS = vec2(PI, PI / 2.0);\n\n/** @returns (lon, lat) in radians for the specified point (x, y), or (NIL, NIL) if the point is unprojectable. */\nvec2 invert(in vec2 point) {\n    // translate and scale\n    vec2 p = (point - u_translate) / u_R;\n    if (all(lessThanEqual(abs(p), BOUNDS))) {\n        // project\n        float lambda = p.x;\n        float phi = p.y;\n        // rotate (formulas pulled from d3-geo)\n        float cosphi = cos(phi);\n        float q = cos(lambda) * cosphi;\n        float r = sin(lambda) * cosphi;\n        float s = sin(phi);\n        float t = s * u_cosgam0 - r * u_singam0;\n        float u = r * u_cosgam0 + s * u_singam0;\n        float v = q * u_coslat0 + t * u_sinlat0;\n        float w = t * u_coslat0 - q * u_sinlat0;\n        float lon = atan(u, v) - u_lon0;\n        float lat = asin(clamp(w, -1.0, 1.0));  // keep holes from forming at poles\n        return vec2(lon, lat);\n    }\n    return vec2(NIL);  // outside of projection\n}\n",
                                    uniforms: {
                                        u_translate: s,
                                        u_R: t,
                                        u_lon0: n,
                                        u_sinlat0: u,
                                        u_coslat0: a,
                                        u_singam0: l,
                                        u_cosgam0: c
                                    }
                                }
                            }
                        }
                    }(t, n, e, r, o, i)
                }(... function(t) {
                    const [n, e, r] = t.rotate(), [o, i] = t.translate();
                    return [t.scale(), n, e, r, o, i]
                }(this))
            }
        })
    }

    function Kd() {
        return Object.assign(Lu(), {
            key: "mollweide",
            optimize: Vd
        })
    }

    function Zd() {
        return Object.assign(ma(), {
            key: "orthographic",
            optimize() {
                return Xd(... function(t) {
                    const [n, e] = t.rotate(), [r, o] = t.translate();
                    return [t.scale(), -n, -e, r, o]
                }(this))
            }
        })
    }

    function Jd() {
        return Object.assign(nc(), {
            key: "patterson",
            optimize: Vd
        })
    }

    function Qd() {
        return Object.assign(il(), {
            key: "polyhedralWaterman",
            optimize: Vd
        })
    }

    function tp() {
        return Object.assign(pu(), {
            key: "stereographic",
            optimize: Vd
        })
    }

    function np() {
        return Object.assign(fl(), {
            key: "winkel3",
            optimize: Vd
        })
    }

    function ep() {
        return [De((new Date).getTimezoneOffset() / 4, 360), 0]
    }

    function rp(t, n) {
        return isFinite(t) || t === 1 / 0 || t === -1 / 0 ? t : n
    }

    function op(t, n) {
        const [
            [e, r],
            [o, i]
        ] = hu().projection(t).bounds({
            type: "Sphere"
        }), a = (o - e) / t.scale(), u = (i - r) / t.scale(), c = .9 * Math.min(n.width / a, n.height / u), l = [n.width / 2, n.height / 2];
        return t.scale(c).translate(l)
    }

    function ip(t, n) {
        const e = Object.assign({
            projection: null,
            newProjection(t) {
                throw new Error("method must be overridden")
            },
            bounds(t) {
                const [
                    [n, e],
                    [r, o]
                ] = hu().projection(this.projection).bounds({
                    type: "Sphere"
                }), i = Math.max(Math.floor(rp(n, 0)), 0), a = Math.max(Math.floor(rp(e, 0)), 0), u = Math.min(Math.ceil(rp(r, t.width)), t.width - 1), c = Math.min(Math.ceil(rp(o, t.height)), t.height - 1);
                return {
                    xMin: i,
                    yMin: a,
                    xMax: u,
                    yMax: c,
                    width: u - i + 1,
                    height: c - a + 1
                }
            },
            fit(t) {
                return this.newProjection(t).scale()
            },
            center: t => [t.width / 2, t.height / 2],
            scaleExtent: () => [25, 25e4],
            getOrientation() {
                const t = this.projection;
                return er({
                    rotate: Fn(t.rotate(), 2),
                    scale: t.scale()
                })
            },
            setOrientation(t, n) {
                var e, r;
                const o = this.projection,
                    i = +(null == t || null === (e = t.rotate) || void 0 === e ? void 0 : e[0]),
                    a = +(null == t || null === (r = t.rotate) || void 0 === r ? void 0 : r[1]),
                    u = o.rotate()[2],
                    c = i == i && a == a ? [i, a, u] : this.newProjection(n).rotate(),
                    l = +(null == t ? void 0 : t.scale),
                    s = l == l ? Le(l, ...this.scaleExtent()) : this.fit(n);
                o.rotate(c).scale(s).translate(this.center(n))
            },
            manipulator(t, n) {
                const e = this.projection,
                    r = 60 / n,
                    o = [e.rotate()[0] / r, -e.rotate()[1] / r],
                    i = e.precision();
                return e.precision(10 * i), {
                    move: function(n, i) {
                        if (n) {
                            const i = n[0] - t[0] + o[0],
                                a = n[1] - t[1] + o[1];
                            e.rotate([i * r, -a * r, e.rotate()[2]])
                        }
                        e.scale(i)
                    },
                    end: function() {
                        e.precision(i)
                    }
                }
            },
            locate: t => null,
            defineMask(t) {
                return hu().projection(this.projection).context(t)({
                    type: "Sphere"
                }), t
            },
            backgroundRenderer: () => ({
                renderTo(t, n) {
                    t.fillStyle = "#303030", t.beginPath(), n({
                        type: "Sphere"
                    }), t.fill()
                }
            }),
            graticuleRenderer() {
                const t = da()(),
                    n = da().extentMinor([
                        [0, 0],
                        [0, 0]
                    ]).stepMajor([0, 90])(),
                    e = Ud(t, {
                        strokeStyle: "rgba(180,180,180,0.20)",
                        lineWidth: 1
                    }),
                    r = Ud(n, {
                        strokeStyle: "rgba(250,250,250,0.20)",
                        lineWidth: 1
                    });
                return {
                    renderTo(t, n) {
                        e.renderTo(t, n), r.renderTo(t, n)
                    }
                }
            },
            preForegroundRenderer: () => ({
                renderTo(t, n) {}
            }),
            postForegroundRenderer: () => ({
                renderTo(t, n) {
                    t.strokeStyle = "#000005", t.lineWidth = 3, t.beginPath(), n({
                        type: "Sphere"
                    }), t.stroke()
                }
            })
        }, t);
        return e.projection = e.newProjection(n), e
    }

    function ap(t) {
        return ip({
            newProjection: t => op(Kd().rotate([30, -45, 90]).precision(.1), t)
        }, t)
    }

    function up(t) {
        return ip({
            newProjection: t => op(Wd().rotate(ep()).precision(.1), t)
        }, t)
    }

    function cp(t) {
        return ip({
            newProjection: t => op(Gd().rotate(ep()).precision(.1), t)
        }, t)
    }

    function lp(t) {
        return ip({
            newProjection: t => op(Zd().rotate(ep()).precision(.1).clipAngle(90), t),
            backgroundRenderer: () => ({
                renderTo(t, n) {
                    const e = n.projection(),
                        [r, o] = e.translate(),
                        i = e.scale(),
                        a = t.createRadialGradient(r, o, 0, r, o, i);
                    a.addColorStop(.69, "#303030"), a.addColorStop(.91, "#202020"), a.addColorStop(.999, "#000005"), a.addColorStop(1, "rgba(0,0,0,0)"), t.fillStyle = a, t.fillRect(r - i, o - i, 2 * i, 2 * i)
                }
            }),
            postForegroundRenderer: () => ({
                renderTo(t, n) {
                    const e = n.projection(),
                        [r, o] = e.translate(),
                        i = e.scale();
                    t.fillStyle = "#000005", t.beginPath(), t.arc(r, o, i - 2, 0, Me, !0), t.arc(r, o, i + 4, 0, Me, !0), t.fill("evenodd")
                }
            }),
            locate(t) {
                return [-t[0], -t[1], this.projection.rotate()[2]]
            }
        }, t)
    }

    function sp(t) {
        return ip({
            newProjection: t => op(Jd().precision(.1), t)
        }, t)
    }

    function fp(t) {
        return ip({
            newProjection: t => op(tp().rotate([-43, -20]).precision(1).clipAngle(179.9999).clipExtent([
                [0, 0],
                [t.width, t.height]
            ]), t),
            postForegroundRenderer: () => ({
                renderTo(t, n) {}
            })
        }, t)
    }

    function hp(t) {
        return ip({
            newProjection: t => op(Qd().rotate([20, 0]).precision(.1), t),
            preForegroundRenderer: () => ({
                renderTo(t, n) {
                    t.save(), t.beginPath(), n({
                        type: "Sphere"
                    }), t.clip()
                }
            }),
            postForegroundRenderer: () => ({
                renderTo(t, n) {
                    t.restore(), t.strokeStyle = "#000005", t.lineWidth = 3, t.beginPath(), n({
                        type: "Sphere"
                    }), t.stroke()
                }
            })
        }, t)
    }

    function dp(t) {
        return ip({
            newProjection: t => op(np().precision(.1), t)
        }, t)
    }
    const pp = er(r),
        vp = new Set(Object.keys(pp));

    function mp(t, n, e = "0") {
        const r = String(t),
            o = Math.max(n - r.length, 0);
        return new Array(o + 1).join(e) + r
    }
    const gp = ["year", "month", "day", "hour", "minute", "second", "milli"];

    function yp(t) {
        var n;
        return "string" != typeof(t = null !== (n = t) && void 0 !== n ? n : "") && +t !== t || (t = new Date(t)), t
    }

    function _p(t) {
        return {
            year: (t = yp(t)).getUTCFullYear(),
            month: t.getUTCMonth() + 1,
            day: t.getUTCDate(),
            hour: t.getUTCHours(),
            minute: t.getUTCMinutes(),
            second: t.getUTCSeconds(),
            milli: t.getUTCMilliseconds()
        }
    }

    function wp(t) {
        return {
            year: (t = yp(t)).getFullYear(),
            month: t.getMonth() + 1,
            day: t.getDate(),
            hour: t.getHours(),
            minute: t.getMinutes(),
            second: t.getSeconds(),
            milli: t.getMilliseconds()
        }
    }

    function bp(t) {
        var n, e, r, o, i, a, u;
        const c = +(null !== (n = t.year) && void 0 !== n ? n : 0),
            l = new Date(Date.UTC(c, (null !== (e = t.month) && void 0 !== e ? e : 1) - 1, null !== (r = t.day) && void 0 !== r ? r : 1, null !== (o = t.hour) && void 0 !== o ? o : 0, null !== (i = t.minute) && void 0 !== i ? i : 0, null !== (a = t.second) && void 0 !== a ? a : 0, null !== (u = t.milli) && void 0 !== u ? u : 0));
        return +l == +l && 0 <= c && c <= 99 && l.setUTCFullYear(c), l
    }

    function xp(t) {
        return wp(bp(t))
    }

    function Mp(t) {
        return Tp(bp(t))
    }
    const Tp = _p;

    function Ap(t, n) {
        const e = Object.assign({}, t);
        return gp.filter((t => t in n)).forEach((t => {
            var r;
            e[t] = +(null !== (r = e[t]) && void 0 !== r ? r : 0) + +n[t]
        })), e
    }

    function Ep(t, n) {
        const e = [];
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if ("{" !== o) {
                e.push(o);
                continue
            }
            let i = "";
            for (r++; r < n.length; r++) {
                if (o = n[r], "}" !== o) {
                    i += o;
                    continue
                }
                let a = NaN;
                switch (i[0]) {
                    case "Y":
                        a = +t.year;
                        break;
                    case "M":
                        a = +t.month;
                        break;
                    case "D":
                        a = +t.day;
                        break;
                    case "h":
                        a = +t.hour;
                        break;
                    case "m":
                        a = +t.minute;
                        break;
                    case "s":
                        a = +t.second;
                        break;
                    case "S":
                        a = +t.milli
                }
                a == a ? e.push(mp(a, i.length)) : e.push("{", i, "}");
                break
            }
        }
        return e.join("")
    }

    function Sp(t, n, e) {
        var r;
        const o = {};

        function i(t, n) {
            n == n && (o[t] = n)
        }
        e = null !== (r = e) && void 0 !== r ? r : {
            year: 1,
            month: 2,
            day: 3,
            hour: 4,
            minute: 5,
            second: 6,
            milli: 7
        };
        const a = n.exec(t);
        return a && (i("year", +a[e.year]), i("month", +a[e.month]), i("day", +a[e.day]), i("hour", +a[e.hour]), i("minute", +a[e.minute]), i("second", +a[e.second]), i("milli", +a[e.milli])), o
    }
    let Np = function() {
            return Date.now() + kp.skew
        },
        kp = {
            skew: 0
        };

    function Dp() {
        return Np()
    }

    function Pp(t) {
        return "surface" === t.z_level ? kd`Surface` : 0 === (n = t.z_level).length ? n : n.charAt(0).toUpperCase() + n.substr(1);
        var n
    }

    function Lp(t, n, e) {
        return Mp(Ap(function(t, n) {
            const {
                day: e = 0,
                hour: r = 0,
                minute: o = 0,
                second: i = 0,
                milli: a = 0
            } = n, u = 864e5 * e + 36e5 * r + 6e4 * o + 1e3 * i + a, c = +bp(t), l = Math.floor(c / u) * u;
            return Tp(l)
        }("current" === (null != t ? t : "current") ? _p(Dp()) : t, n), null != e ? e : {}))
    }

    function jp(t) {
        const n = {
                hour: 1
            },
            e = Lp(t, n),
            r = t => function() {
                return Lp(Ap(this.validTime(), t), n)
            };
        return {
            alignment: () => er(n),
            validTime: () => er(e),
            prev2: r({
                hour: -8
            }),
            prev1: r({
                hour: -1
            }),
            next1: r({
                hour: 1
            }),
            next2: r({
                hour: 8
            }),
            navLabels: {
                prev2: `-8 ${kd`hours`}`,
                prev1: `-1 ${kd`hour`}`,
                next1: `+1 ${kd`hour`}`,
                next2: `+8 ${kd`hours`}`
            }
        }
    }

    function Op(t) {
        const n = {
                hour: 3
            },
            e = Lp(t, n),
            r = t => function() {
                return Lp(Ap(this.validTime(), t), n)
            };
        return {
            alignment: () => er(n),
            validTime: () => er(e),
            prev2: r({
                day: -1
            }),
            prev1: r({
                hour: -3
            }),
            next1: r({
                hour: 3
            }),
            next2: r({
                day: 1
            }),
            navLabels: {
                prev2: `-1 ${kd`day`}`,
                prev1: `-3 ${kd`hours`}`,
                next1: `+3 ${kd`hours`}`,
                next2: `+1 ${kd`day`}`
            }
        }
    }
    Promise.resolve(kp);
    const Rp = fr() ? "" : " [<a href='about.html#co2' class='internal-link'>important note</a>]",
        zp = "GEOS-5 / GMAO / NASA",
        $p = "GEOS-5 / GMAO / NASA" + Rp;

    function Ip(t, n) {
        const e = Math.floor(t.size),
            r = Math.floor(n.size),
            o = e * r,
            i = ze(t.delta),
            a = ze(n.delta),
            u = ze(t.start),
            c = ze(n.start),
            l = (u - i / 2) * Ae,
            s = (c - a / 2) * Ae,
            f = [l, s],
            h = [(u + i * (e - 1) + i / 2) * Ae - l, (c + a * (r - 1) + a / 2) * Ae - s],
            d = Math.floor(e * i) >= 360;
        return {
            dimensions: function() {
                return {
                    width: e,
                    height: r
                }
            },
            isCylindrical: function() {
                return d
            },
            forEach: function(t, n) {
                for (let r = n || 0; r < o; r++) {
                    const n = r % e,
                        o = Math.floor(r / e);
                    if (t(u + n * i, c + o * a, r)) return r + 1
                }
                return NaN
            },
            closest: function(t, n) {
                if (t == t && n == n) {
                    const o = De(t - u, 360) / i,
                        l = (n - c) / a,
                        s = Math.round(o),
                        f = Math.round(l);
                    if (0 <= f && f < r && 0 <= s && (s < e || s === e && d)) {
                        const t = f * e + s;
                        return s === e ? t - e : t
                    }
                }
                return NaN
            },
            closest4: function(t, n) {
                if (t == t && n == n) {
                    const o = De(t - u, 360) / i,
                        l = (n - c) / a,
                        s = Math.floor(o),
                        f = Math.floor(l),
                        h = s + 1,
                        p = f + 1,
                        v = o - s,
                        m = l - f;
                    if (0 <= f && p < r && 0 <= s && (h < e || h === e && d)) {
                        const t = f * e + s;
                        let n = t + 1;
                        const r = t + e;
                        let o = r + 1;
                        return h === e && (n -= e, o -= e), [t, n, r, o, v, m]
                    }
                }
                return [NaN, NaN, NaN, NaN, NaN, NaN]
            },
            webgl: function() {
                return {
                    shaderSource: "\nuniform vec2 u_Low;\nuniform vec2 u_Size;\n\nvec2 grid(in vec2 coord) {\n    vec2 tex = (coord - u_Low) / u_Size;\n    float s = tex.s;\n    float t = tex.t;\n\n    if (t < 0.0 || 1.0 < t) discard;  // lat out of bounds, so nothing to draw\n\n    return vec2(fract(s), t);  // UNDONE: fract used here only because lon is circular.\n}\n",
                    uniforms: {
                        u_Low: f,
                        u_Size: h
                    }
                }
            }
        }
    }

    function Fp(t, n) {
        function e(e, r) {
            return +n[t.closest(e, r)]
        }
        const r = {},
            {
                width: o,
                height: i
            } = t.dimensions();
        return e.webgl = function(t) {
            const e = t.context;
            return {
                shaderSource: ["\nfloat scalarize(in vec4 h) {\n    return h.x;\n}\n", "\nuniform sampler2D u_Data;\n\nfloat lookup(in vec2 st) {\n    vec4 h = texture2D(u_Data, st);\n    return scalarize(h);\n}\n"],
                textures: {
                    weather_data: {
                        type: e.FLOAT,
                        format: e.LUMINANCE,
                        width: o,
                        height: i,
                        pixels: n,
                        hash: r,
                        TEXTURE_MIN_FILTER: e.NEAREST,
                        TEXTURE_MAG_FILTER: e.NEAREST
                    }
                },
                uniforms: {
                    u_Data: "weather_data"
                }
            }
        }, e
    }

    function Yp(t, n) {
        function e(e, r) {
            const o = 2 * t.closest(e, r);
            if (o == o) {
                const t = n[o],
                    e = n[o + 1];
                if (t == t && e == e) return [t, e]
            }
            return [NaN, NaN]
        }
        const r = {},
            {
                width: o,
                height: i
            } = t.dimensions();
        return e.webgl = function(t) {
            const e = t.context;
            return {
                shaderSource: ["\nfloat scalarize(in vec4 h) {\n    float isMissing = step(NIL, h.x);\n    return length((1.0 - isMissing) * h.xw) + isMissing * NIL;\n}\n", "\nuniform sampler2D u_Data;\n\nfloat lookup(in vec2 st) {\n    vec4 h = texture2D(u_Data, st);\n    return scalarize(h);\n}\n"],
                textures: {
                    weather_data: {
                        type: e.FLOAT,
                        format: e.LUMINANCE_ALPHA,
                        width: o,
                        height: i,
                        pixels: n,
                        hash: r,
                        TEXTURE_MIN_FILTER: e.NEAREST,
                        TEXTURE_MAG_FILTER: e.NEAREST
                    }
                },
                uniforms: {
                    u_Data: "weather_data"
                }
            }
        }, e
    }

    function Cp(t, n) {
        function e(e, r) {
            const o = t.closest4(e, r),
                i = o[0];
            if (i == i) {
                const t = o[1],
                    e = o[2],
                    r = o[3],
                    a = o[4],
                    u = o[5],
                    c = 1 - a,
                    l = 1 - u,
                    s = n[i],
                    f = n[t],
                    h = n[e],
                    d = n[r];
                if (s == s) {
                    if (f == f && h == h && d == d) return s * (c * l) + f * (a * l) + h * (c * u) + d * (a * u);
                    if (d == d && f == f && a >= u) return f + c * (s - f) + u * (d - f);
                    if (h == h && d == d && a < u) return h + a * (d - h) + l * (s - h);
                    if (h == h && f == f && a <= l) return s + a * (f - s) + u * (h - s)
                } else if (d == d && h == h && f == f && a > l) return d + c * (h - d) + l * (f - d)
            }
            return NaN
        }
        const r = {},
            {
                width: o,
                height: i
            } = t.dimensions();
        return e.webgl = function(t) {
            const e = t.context;
            return {
                shaderSource: ["\nfloat scalarize(in vec4 h) {\n    return h.x;\n}\n", "\nuniform sampler2D u_Data;\nuniform vec2 u_TextureSize;\n\nvec4 getSample(in vec2 st) {\n    // Use of fract below assumes cylindrical x axis (usually lon) and non-cylindrical y axis (usually lat).\n    return texture2D(u_Data, vec2(fract(st.s), st.t));\n}\n\nfloat lookup(in vec2 st) {\n    // adapted from http://www.iquilezles.org/www/articles/hwinterpolation/hwinterpolation.htm\n    vec2 uv = st * u_TextureSize - 0.5;\n    vec2 iuv = floor(uv);\n    vec2 fuv = fract(uv);\n    vec2 ruv = 1.0 - fuv;\n\n    vec4 a = getSample((iuv + vec2(0.5, 0.5)) / u_TextureSize);  // LL\n    vec4 b = getSample((iuv + vec2(1.5, 0.5)) / u_TextureSize);  // LR\n    vec4 c = getSample((iuv + vec2(0.5, 1.5)) / u_TextureSize);  // UL\n    vec4 d = getSample((iuv + vec2(1.5, 1.5)) / u_TextureSize);  // UR\n    vec4 h;\n\n    int tag = int(dot(step(NIL, vec4(a.x, b.x, c.x, d.x)), vec4(1.0, 2.0, 4.0, 8.0)));\n    if (tag == 0) {\n        // a b c d\n        h = mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    } else if (tag == 1 && ruv.y < fuv.x) {\n        // d b c\n        h = d + ruv.x * (c - d) + ruv.y * (b - d);\n    } else if (tag == 2 && fuv.x < fuv.y) {\n        // c a d\n        h = c + fuv.x * (d - c) + ruv.y * (a - c);\n    } else if (tag == 4 && fuv.x >= fuv.y) {\n        // b a d\n        h = b + ruv.x * (a - b) + fuv.y * (d - b);\n    } else if (tag == 8 && fuv.x <= ruv.y) {\n        // a b c\n        h = a + fuv.x * (b - a) + fuv.y * (c - a);\n    } else {\n        // not enough points to interpolate\n        h = vec4(NIL);\n    }\n\n    return scalarize(h);\n}\n"],
                textures: {
                    weather_data: {
                        type: e.FLOAT,
                        format: e.LUMINANCE,
                        width: o,
                        height: i,
                        pixels: n,
                        hash: r,
                        TEXTURE_MIN_FILTER: e.NEAREST,
                        TEXTURE_MAG_FILTER: e.NEAREST
                    }
                },
                uniforms: {
                    u_Data: "weather_data",
                    u_TextureSize: [o, i]
                }
            }
        }, e
    }

    function Up(t, n) {
        function e(t, n, e, r, o, i, a, u) {
            return [e + t * (a - e) + n * (o - e), r + t * (u - r) + n * (i - r)]
        }

        function r(r, o) {
            const i = t.closest4(r, o),
                a = 2 * i[0];
            if (a == a) {
                const t = 2 * i[1],
                    r = 2 * i[2],
                    o = 2 * i[3],
                    u = i[4],
                    c = i[5],
                    l = 1 - u,
                    s = 1 - c,
                    f = n[a],
                    h = n[a + 1],
                    d = n[t],
                    p = n[t + 1],
                    v = n[r],
                    m = n[r + 1],
                    g = n[o],
                    y = n[o + 1];
                if (h == h) {
                    if (p == p && m == m && y == y) {
                        const t = l * s,
                            n = u * s,
                            e = l * c,
                            r = u * c;
                        return [f * t + d * n + v * e + g * r, h * t + p * n + m * e + y * r]
                    }
                    if (y == y && p == p && u >= c) return e(l, c, d, p, g, y, f, h);
                    if (m == m && y == y && u < c) return e(u, s, v, m, f, h, g, y);
                    if (m == m && p == p && u <= s) return e(u, c, f, h, v, m, d, p)
                } else if (y == y && m == m && p == p && u > s) return e(l, s, g, y, d, p, v, m)
            }
            return [NaN, NaN]
        }
        const o = {},
            {
                width: i,
                height: a
            } = t.dimensions();
        return r.webgl = function(t) {
            const e = t.context;
            return {
                shaderSource: ["\nfloat scalarize(in vec4 h) {\n    float isMissing = step(NIL, h.x);\n    return length((1.0 - isMissing) * h.xw) + isMissing * NIL;\n}\n", "\nuniform sampler2D u_Data;\nuniform vec2 u_TextureSize;\n\nvec4 getSample(in vec2 st) {\n    // Use of fract below assumes cylindrical x axis (usually lon) and non-cylindrical y axis (usually lat).\n    return texture2D(u_Data, vec2(fract(st.s), st.t));\n}\n\nfloat lookup(in vec2 st) {\n    // adapted from http://www.iquilezles.org/www/articles/hwinterpolation/hwinterpolation.htm\n    vec2 uv = st * u_TextureSize - 0.5;\n    vec2 iuv = floor(uv);\n    vec2 fuv = fract(uv);\n    vec2 ruv = 1.0 - fuv;\n\n    vec4 a = getSample((iuv + vec2(0.5, 0.5)) / u_TextureSize);  // LL\n    vec4 b = getSample((iuv + vec2(1.5, 0.5)) / u_TextureSize);  // LR\n    vec4 c = getSample((iuv + vec2(0.5, 1.5)) / u_TextureSize);  // UL\n    vec4 d = getSample((iuv + vec2(1.5, 1.5)) / u_TextureSize);  // UR\n    vec4 h;\n\n    int tag = int(dot(step(NIL, vec4(a.x, b.x, c.x, d.x)), vec4(1.0, 2.0, 4.0, 8.0)));\n    if (tag == 0) {\n        // a b c d\n        h = mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    } else if (tag == 1 && ruv.y < fuv.x) {\n        // d b c\n        h = d + ruv.x * (c - d) + ruv.y * (b - d);\n    } else if (tag == 2 && fuv.x < fuv.y) {\n        // c a d\n        h = c + fuv.x * (d - c) + ruv.y * (a - c);\n    } else if (tag == 4 && fuv.x >= fuv.y) {\n        // b a d\n        h = b + ruv.x * (a - b) + fuv.y * (d - b);\n    } else if (tag == 8 && fuv.x <= ruv.y) {\n        // a b c\n        h = a + fuv.x * (b - a) + fuv.y * (c - a);\n    } else {\n        // not enough points to interpolate\n        h = vec4(NIL);\n    }\n\n    return scalarize(h);\n}\n"],
                textures: {
                    weather_data: {
                        type: e.FLOAT,
                        format: e.LUMINANCE_ALPHA,
                        width: i,
                        height: a,
                        pixels: n,
                        hash: o,
                        TEXTURE_MIN_FILTER: e.NEAREST,
                        TEXTURE_MAG_FILTER: e.NEAREST
                    }
                },
                uniforms: {
                    u_Data: "weather_data",
                    u_TextureSize: [i, a]
                }
            }
        }, r
    }

    function Hp(t) {
        const n = t,
            e = n.header.variables,
            r = e.Primary_wave_direction_surface,
            o = e.Primary_wave_mean_period_surface,
            i = e[r.dimensions[0]],
            a = e[r.dimensions[1]],
            u = e[r.dimensions[2]],
            c = n.blocks[r.data.block],
            l = n.blocks[o.data.block],
            s = new Float32Array(2 * c.length);
        for (let t = 0; t < c.length; t++) {
            const n = 2 * t,
                e = c[t] * Ae,
                r = l[t];
            e == e && r == r ? (s[n] = -r * Math.sin(e), s[n + 1] = -r * Math.cos(e)) : s[n] = s[n + 1] = NaN
        }
        s.containsNaN = !0;
        const f = Ip(u.sequence, a.sequence),
            h = {
                valueAt: t => {
                    const n = 2 * t;
                    return [s[n], s[n + 1]]
                },
                scalarize: Oe,
                isDefined: t => !isNaN(s[2 * t]),
                nearest: Yp(f, s),
                bilinear: Up(f, s)
            };
        return {
            validTime: () => _p(i.data[0]),
            grid: () => f,
            field: () => h,
            valueInRange(t) {
                return [this.scale.valueInRange(t), 0]
            }
        }
    }

    function qp(t, n, e) {
        const r = t[0].header,
            o = {
                time: {
                    data: [(i = Ap(_p(r.refTime), {
                        hour: r.forecastTime
                    }), bp(i).toISOString())]
                },
                lat: {
                    sequence: {
                        start: r.la1,
                        delta: -r.dy,
                        size: r.ny
                    }
                },
                lon: {
                    sequence: {
                        start: r.lo1,
                        delta: r.dx,
                        size: r.nx
                    }
                }
            };
        var i;
        const a = [];
        return n.forEach(((n, r) => {
            o[n] = {
                dimensions: e || ["time", "lat", "lon"],
                data: {
                    block: r
                }
            }, a[r] = new Float32Array(t[r].data)
        })), {
            header: {
                variables: o
            },
            blocks: a
        }
    }

    function Xp(t, n, e = {}) {
        Array.isArray(t) && (t = qp(t, [e.legacyName])), t.blocks || (t = function(t, n) {
            const e = t.variables,
                r = [];
            return Object.keys(e).forEach((t => {
                if (n.test(t)) {
                    const n = e[t];
                    r.push(new Float32Array(n.data)), n.data = {
                        block: r.length - 1
                    }
                }
            })), {
                header: t,
                blocks: r
            }
        }(t, n));
        const r = t,
            {
                variables: o
            } = r.header,
            i = o[Object.keys(o).find((t => n.test(t)))],
            a = i.dimensions,
            u = o[a[0]],
            c = o[pe(a, 2)[0]],
            l = o[pe(a, 2)[1]],
            s = r.blocks[i.data.block];
        s.containsNaN = e.hasMissing, pn(e.transform) && e.transform(s);
        const f = Ip(l.sequence, c.sequence),
            h = {
                valueAt: t => s[t],
                scalarize: t => t,
                isDefined: t => !isNaN(s[t]),
                nearest: Fp(f, s),
                bilinear: Cp(f, s)
            };
        return {
            validTime: () => _p(u.data[0]),
            grid: () => f,
            field: () => h,
            valueInRange(t) {
                return this.scale.valueInRange(t)
            }
        }
    }

    function Bp(t, n) {
        return t === +t ? t.toFixed(n.precision) : void 0
    }

    function Vp(t, n) {
        var e;
        const r = t => void 0 !== t ? n.convert(t) : void 0,
            o = t => void 0 !== t ? function(t, n) {
                return Array.isArray(t) ? function(t, n) {
                    const [e, r] = t;
                    if (e === +e && r === +r) return `${function(t,n){return 5*Pe(t/5)}(function(t){return(Math.atan2(t[0],t[1])*Te+360)%360}(t="into"===n.convention?[-e,-r]:[e,r])).toFixed(0)}° @ ${Bp(Oe(t),n)}`
                }(t, n) : Bp(t, n)
            }(t, n) : void 0,
            i = o(r(t));
        return {
            formattedVal: i,
            fullText: `${null!=i?i:""} ${n.symbol}`,
            scalarHTML: `${null!==(e=o((a=r(t),void 0!==a?n.scalarize(a):void 0)))&&void 0!==e?e:""} ${n.html}`
        };
        var a
    }

    function Wp(t) {
        return me(t, ((t, n) => {
            return r = t, er({
                symbol: e = n,
                html: (o = e, o.replace(/\^([^\s./$)]*)/g, "<sup>$1</sup>")),
                convert: t => t,
                scalarize: t => t,
                precision: 0,
                convention: void 0,
                format(t) {
                    return Vp(t, this)
                }
            }, r);
            var e, r, o
        }))
    }
    const Gp = cr() ? "" : "https://gaia.nullschool.net";

    function Kp(...t) {
        return [Gp, ...t].join("/")
    }

    function Zp(t) {
        if (Array.isArray(t)) {
            const [n, e, r, o] = t;
            return eo(n, e, r, o)
        }
        return Jr(t)
    }

    function Jp(t, n) {
        const [e, r, o] = t, i = n[0] - e, a = n[1] - r, u = n[2] - o;
        return t => [Math.floor(e + t * i), Math.floor(r + t * a), Math.floor(o + t * u)].map((t => Le(t, 0, 255)))
    }

    function Qp(t, n) {
        const e = function(t, n, e) {
            switch (t) {
                case "rgb":
                    return Ml(n, e);
                case "lab":
                    return xl(n, e);
                case "hcl":
                    return _l(n, e);
                case "hsl":
                    return bl(n, e);
                default:
                    throw new Error(`unsupported color space: ${t}`)
            }
        }(t.mode, Zp(t.color), Zp(n.color));
        return e.mode = () => t.mode, e.domain = () => [t.p, n.p], e
    }

    function tv(t, n, e) {
        const r = n => t(n);
        return r.mode = () => n, r.domain = () => e, r
    }

    function nv(t) {
        let n = t * Me * 5 / 6;
        n *= .75;
        const e = Math.sin(n),
            r = Math.cos(n);
        return [Math.floor(255 * Math.max(0, -r)), Math.floor(255 * Math.max(e, 0)), Math.floor(255 * Math.max(r, 0, -e))]
    }
    const ev = .45,
        rv = Jp(nv(1), [255, 255, 255]);

    function ov(t) {
        return t <= ev ? nv(t / ev) : rv((t - ev) / .55)
    }

    function iv(t) {
        const n = [];
        for (let e = 0; e < t.length - 1; e++) n.push(Qp(t[e], t[e + 1]));
        return n
    }

    function av(t, n, e) {
        const r = t[n],
            o = t[n + 1],
            i = je(e[0], ...r.domain(), 0, 1),
            a = je(e[1], ...o.domain(), 0, 1),
            u = Qp({
                color: Jr(r(0)),
                mode: r.mode(),
                p: r.domain()[0]
            }, {
                color: Jr(r(i)),
                mode: r.mode(),
                p: e[0]
            }),
            c = function(t, n) {
                const e = [],
                    r = [],
                    o = [];
                for (let n = 0; n < t.length; n++) {
                    const i = bo(t[n]);
                    e[n] = i.l, r[n] = i.a, o[n] = i.b
                }
                const i = dl(e),
                    a = dl(r),
                    u = dl(o),
                    c = t => bo(i(t), a(t), u(t)) + "";
                return c.domain = () => n, c.mode = () => "lab", c
            }([r(i), r(1), o(a)], e),
            l = Qp({
                color: Jr(o(a)),
                mode: o.mode(),
                p: e[1]
            }, {
                color: Jr(o(1)),
                mode: o.mode(),
                p: o.domain()[1]
            });
        return [].concat(t.slice(0, n), [u, c, l], t.slice(n + 2))
    }

    function uv(t, n, e, r) {
        const [o, i] = n, [a, u] = e, c = Math.floor(t.length / 4), l = (i - o) / (c - 1), s = Pe((a - o) / l);
        for (let n = Math.max(s, 0); n < c; n++) {
            const e = a + (n - s) * l;
            if (e > u) break;
            const o = r(e),
                i = 4 * n;
            t[i] = o[0], t[i + 1] = o[1], t[i + 2] = o[2], t[i + 3] = o.length > 3 ? Le(je(o[3], 0, 1, 0, 255), 0, 255) : 255
        }
    }

    function cv(t, n, e) {
        const r = new Uint8Array(4 * e);
        return n.forEach((n => {
            const e = n.domain();
            uv(r, t, e, (t => {
                const r = Jr(n(je(t, e[0], e[1], 0, 1)));
                return [r.r, r.g, r.b, r.opacity]
            }))
        })), r
    }

    function lv(t, n, e) {
        return fv(t, cv(t, n, e))
    }

    function sv(t, n, e) {
        const r = function(t) {
                const n = [],
                    e = [],
                    r = [];
                for (let o = 0; o < t.length - 1; o++) n.push(t[o + 1][0]), e.push(Jp(t[o][1], t[o + 1][1])), r.push([t[o][0], t[o + 1][0]]);
                return t => {
                    let o;
                    for (o = 0; o < n.length - 1 && !(t <= n[o]); o++);
                    const i = je(t, ...r[o], 0, 1);
                    return e[o](i)
                }
            }(n),
            o = new Uint8Array(4 * e);
        return uv(o, t, t, r), fv(t, o)
    }

    function fv(t, n, e = (t => t), r = (t => t)) {
        const o = e(t[0]),
            i = e(t[1]),
            a = n.length / 4 - 1,
            u = a / (i - o),
            c = {},
            l = (i - o) / (2 * a),
            s = o - l,
            f = [s, i + l - s];
        return new class {
            get colors() {
                return n
            }
            get bounds() {
                return t
            }
            indexOf(t) {
                return Le(Math.round((e(t) - o) * u), 0, a)
            }
            valueFor(t) {
                return r(t / u + o)
            }
            valueInRange(t) {
                const n = Math.round(je(t, 0, 1, 0, a));
                return this.valueFor(Le(n, 0, a))
            }
            rgba(t) {
                const e = 4 * this.indexOf(t);
                return [n[e], n[e + 1], n[e + 2], n[e + 3]]
            }
            webgl(t) {
                const r = t.context;
                return {
                    shaderSource: [e === Math.log ? "\nfloat fmap(in float v) {\n    return log(v);\n}\n" : "\nfloat fmap(in float v) {\n    return v;\n}\n", "\nuniform vec2 u_Range;  // [min, size]\nuniform lowp sampler2D u_Palette;\nuniform lowp float u_Alpha;\n\nlowp vec4 colorize(in float v) {\n    vec2 st = vec2((fmap(v) - u_Range.x) / u_Range.y, 0.5);\n    lowp vec4 color = texture2D(u_Palette, st);\n    lowp float alpha = (1.0 - step(NIL, v)) * u_Alpha;\n    return vec4(color.rgb * alpha, alpha);  // premultiply alpha\n}\n"],
                    textures: {
                        color_scale: {
                            format: r.RGBA,
                            type: r.UNSIGNED_BYTE,
                            width: n.length / 4,
                            height: 1,
                            pixels: n,
                            hash: c
                        }
                    },
                    uniforms: {
                        u_Range: f,
                        u_Palette: "color_scale",
                        u_Alpha: 1
                    }
                }
            }
        }
    }

    function hv(t = 1e3) {
        return sv([0, 15], [
            [0, [8, 29, 88]],
            [1, [37, 52, 148]],
            [2, [34, 94, 168]],
            [3, [29, 145, 192]],
            [4, [65, 182, 196]],
            [5, [127, 205, 187]],
            [6, [199, 233, 180]],
            [7, [237, 248, 177]],
            [8, [254, 204, 92]],
            [10, [253, 141, 60]],
            [12, [240, 59, 32]],
            [14, [189, 0, 38]]
        ], t)
    }

    function dv(t = 1e3) {
        return sv([0, 25], [
            [0, [0, 0, 0]],
            [25, [21, 255, 255]]
        ], t)
    }
    let pv = {};

    function vv(t, n) {
        const {
            time_cursor: e
        } = t, r = Lp(e, {
            hour: 3
        });
        return Kp("data/ww3", "current" === e ? "current" : Ep(r, "{YYYY}/{MM}/{DD}"), `${"current"===e?"current":Ep(r,"{hh}{mm}")}-${n}-wave-30m.epak`)
    }

    function mv(t) {
        const n = Lp(t.time_cursor, {
                hour: 3
            }),
            e = t => function() {
                return Lp(Ap(this.validTime(), t), {
                    hour: 3
                })
            };
        return {
            sourceHTML: "WAVEWATCH III / NCEP / NWS",
            validTime: () => er(n),
            prev2: e({
                day: -1
            }),
            prev1: e({
                hour: -3
            }),
            next1: e({
                hour: 3
            }),
            next2: e({
                day: 1
            }),
            navLabels: {
                prev2: `-1 ${kd`day`}`,
                prev1: `-3 ${kd`hours`}`,
                next1: `+3 ${kd`hours`}`,
                next2: `+1 ${kd`day`}`
            }
        }
    }

    function gv(t = 1e3) {
        return sv([-11, 11], [
            [-11, [255, 255, 255]],
            [-3, [7, 252, 254]],
            [-1.5, [66, 42, 253]],
            [-.75, [34, 55, 134]],
            [0, [0, 0, 6]],
            [.75, [134, 55, 34]],
            [1.5, [253, 14, 16]],
            [3, [254, 252, 0]],
            [11, [255, 255, 255]]
        ], t)
    }

    function yv(t = 1e3) {
        return sv([270, 304.65], [
            [270, [255, 255, 255]],
            [271.4, [255, 255, 255]],
            [271.5, [15, 4, 168]],
            [273.15, [15, 54, 208]],
            [273.25, [15, 54, 188]],
            [275.65, [15, 4, 168]],
            [281.65, [24, 132, 14]],
            [291.15, [247, 251, 59]],
            [295, [235, 167, 0]],
            [299.65, [245, 0, 39]],
            [303, [87, 17, 0]],
            [304.65, [238, 0, 242]]
        ], t)
    }
    const _v = "sea_surface_temp",
        wv = "sea_surface_temp_anomaly";
    let bv = {};

    function xv(t) {
        let n;
        return n = "current" === t ? Ap(rr(_p(Dp()), "year", "month", "day"), {
            day: -1
        }) : er(t), n
    }

    function Mv(t, n) {
        const e = function(t, n) {
                return n === _v ? t.hd_enabled ? {
                    tag: _v,
                    res: "0.1",
                    selector: /analysed_sst/
                } : {
                    tag: _v,
                    res: "0.5",
                    selector: /analysed_sst/
                } : n === wv ? t.hd_enabled ? {
                    tag: wv,
                    res: "0.25",
                    selector: /sst_anomaly/
                } : {
                    tag: wv,
                    res: "0.5",
                    selector: /sst_anomaly/
                } : void 0
            }(t, n),
            r = "current" === t.time_cursor;
        return Kp("data/ostia", r ? "current" : Ep(t.time_cursor, "{YYYY}/{MM}"), `${r?"current":Ep(t.time_cursor,"{YYYY}{MM}{DD}")}-${e.tag}-ostia-${e.res}.epak`)
    }

    function Tv(t) {
        const n = xv(t.time_cursor),
            e = t => function() {
                return xv(Ap(this.validTime(), t))
            };
        return {
            sourceHTML: "OSTIA / UK Met Office + GHRSST + CMEMS",
            validTime: () => er(n),
            prev2: e({
                day: -5
            }),
            prev1: e({
                day: -1
            }),
            next1: e({
                day: 1
            }),
            next2: e({
                day: 5
            }),
            navLabels: {
                prev2: `-5 ${kd`days`}`,
                prev1: `-1 ${kd`day`}`,
                next1: `+1 ${kd`day`}`,
                next2: `+5 ${kd`days`}`
            }
        }
    }

    function Av(t = 1e3) {
        return sv([270, 304.65], [
            [270, [255, 255, 255]],
            [271.25, [255, 255, 255]],
            [271.3, [15, 4, 168]],
            [273.15, [15, 54, 208]],
            [273.25, [15, 54, 188]],
            [275.65, [15, 4, 168]],
            [281.65, [24, 132, 14]],
            [291.15, [247, 251, 59]],
            [295, [235, 167, 0]],
            [299.65, [245, 0, 39]],
            [303, [87, 17, 0]],
            [304.65, [238, 0, 242]]
        ], t)
    }
    let Ev = {};

    function Sv(t) {
        let n;
        return n = "current" === t ? Ap(rr(_p(Dp()), "year", "month", "day"), {
            day: -1
        }) : er(t), n
    }

    function Nv(t, n) {
        const e = "current" === t.time_cursor;
        return Kp("data/rtgsst", e ? "current" : Ep(t.time_cursor, "{YYYY}/{MM}"), `${e?"current":Ep(t.time_cursor,"{YYYY}{MM}{DD}")}-${n}-rtg-0.5.epak`)
    }

    function kv(t) {
        const n = Sv(t.time_cursor),
            e = t => function() {
                return Sv(Ap(this.validTime(), t))
            };
        return {
            sourceHTML: "RTG-SST / NCEP / US National Weather Service",
            validTime: () => er(n),
            prev2: e({
                day: -5
            }),
            prev1: e({
                day: -1
            }),
            next1: e({
                day: 1
            }),
            next2: e({
                day: 5
            }),
            navLabels: {
                prev2: `-5 ${kd`days`}`,
                prev1: `-1 ${kd`day`}`,
                next1: `+1 ${kd`day`}`,
                next2: `+5 ${kd`days`}`
            }
        }
    }
    const Dv = bp({
        year: 2019,
        month: 12,
        day: 15
    });

    function Pv(t) {
        return "current" === t || bp(t) >= Dv
    }

    function Lv(t, n) {
        return isNaN(null != t ? t : void 0) ? n : +t
    }

    function jv(t) {
        return null === t || "string" == typeof t && "" === t.trim() ? NaN : +t
    }

    function Ov(t = 1001) {
        const n = [0, 100];
        let e = iv([{
            color: [0, 0, 0],
            mode: "lab",
            p: n[0]
        }, {
            color: [4, 8, 34],
            mode: "lab",
            p: 5
        }, {
            color: [78, 255, 103],
            mode: "lab",
            p: 40
        }, {
            color: [252, 255, 57],
            mode: "lab",
            p: 60
        }, {
            color: [219, 75, 255],
            mode: "lab",
            p: n[1]
        }]);
        return e = av(e, 1, [35, 45]), e = av(e, 3, [55, 65]), lv(n, e, t)
    }
    let Rv, zv;

    function $v(t) {
        const {
            time_cursor: n
        } = t, e = Lp(n, {
            minute: 5
        });
        return Kp("data/ovation", "current" === n ? "current" : Ep(e, "{YYYY}/{MM}/{DD}"), `${"current"===n?"current":Ep(e,"{YYYY}{MM}{DD}{hh}{mm}")}-ovation.json`)
    }

    function Iv(t = 1e3) {
        return sv([0, 1.5], [
            [0, [10, 25, 68]],
            [.15, [10, 25, 250]],
            [.4, [24, 255, 93]],
            [.65, [255, 233, 102]],
            [1, [255, 233, 15]],
            [1.5, [255, 15, 15]]
        ], t)
    }

    function Fv(t, n, e) {
        if (e = +e || 0, "current" === n) return t[t.length - 1 + e];
        const r = Ep(n, "{YYYY}{MM}{DD}");
        let o = Zn(t, r);
        return o = 0 === (t[o] || "").indexOf(r) ? o : o - 1, t[o + e]
    }

    function Yv(t, n) {
        const e = Fv(t, n.time_cursor);
        return e ? Kp("data/oscar", e) : null
    }

    function Cv(t) {
        const n = t,
            e = n.header.variables,
            r = e.u,
            o = e.v,
            i = e[r.dimensions[0]],
            a = e[r.dimensions[2]],
            u = e[r.dimensions[3]],
            c = Ne(n.blocks[r.data.block], n.blocks[o.data.block]);
        c.containsNaN = !0;
        const l = Ip(u.sequence, a.sequence),
            s = {
                valueAt: t => {
                    const n = 2 * t;
                    return [c[n], c[n + 1]]
                },
                scalarize: Oe,
                isDefined: t => !isNaN(c[2 * t]),
                nearest: Yp(l, c),
                bilinear: Up(l, c)
            };
        return {
            validTime: () => _p(i.data[0]),
            grid: () => l,
            field: () => s,
            valueInRange(t) {
                return [this.scale.valueInRange(t), 0]
            }
        }
    }

    function Uv(t = 1e4) {
        const n = [0, .45];
        let e = iv([{
            color: [0, 0, 15],
            mode: "hsl",
            p: n[0]
        }, {
            color: [32, 32, 32],
            mode: "hsl",
            p: .005
        }, {
            color: [62, 167, 45],
            mode: "hsl",
            p: .0125
        }, {
            color: [255, 238, 0],
            mode: "hsl",
            p: .0875
        }, {
            color: [241, 139, 0],
            mode: "hsl",
            p: .15625
        }, {
            color: [229, 50, 16],
            mode: "hsl",
            p: .2125
        }, {
            color: [181, 103, 164],
            mode: "hsl",
            p: .275
        }, {
            color: [231, 225, 255],
            mode: "hsl",
            p: n[1]
        }]);
        return e = av(e, 1, [.00625, 1 / 40]), e = av(e, 3, [.0625, .1125]), lv(n, e, t)
    }
    let Hv = {};

    function qv(t, n) {
        const e = Lp(t.time_cursor, n),
            r = "current" === t.time_cursor;
        return Kp("data/cpcuvi", r ? "current" : Ep(e, "{YYYY}/{MM}/{DD}"), `${r?"current":Ep(e,"{hh}{mm}")}-cpcuvi.epak`)
    }
    const Xv = kd`UV Index`,
        Bv = [kd`low`, kd`low`, kd`low`, kd`moderate`, kd`moderate`, kd`moderate`, kd`high`, kd`high`, kd`very high`, kd`very high`, kd`very high`, kd`extreme`];

    function Vv(t) {
        const n = Math.round(40 * t),
            e = `${n} (${Bv[Le(n,0,11)]})`;
        return {
            formattedVal: e,
            fullText: `${e} ${Xv}`,
            scalarHTML: e
        }
    }

    function Wv(t = 1e3) {
        const n = [1e-11, 2e-7],
            e = n.map(Math.log);
        return fv(n, cv(e, [tv((t => ns(1 - t)), "GyRd", e)], t), Math.log, Math.exp)
    }

    function Gv(t = 1e3) {
        const n = [1e-9, 1e-6],
            e = n.map(Math.log);
        let r = iv([{
            color: [8, 29, 88],
            mode: "hcl",
            p: e[0]
        }, {
            color: [37, 52, 148],
            mode: "hcl",
            p: Math.log(4e-9)
        }, {
            color: [34, 94, 168],
            mode: "hcl",
            p: Math.log(6e-9)
        }, {
            color: [29, 145, 192],
            mode: "hcl",
            p: Math.log(8e-9)
        }, {
            color: [65, 182, 196],
            mode: "hcl",
            p: Math.log(1e-8)
        }, {
            color: [127, 205, 187],
            mode: "hcl",
            p: Math.log(16e-9)
        }, {
            color: [199, 233, 180],
            mode: "hcl",
            p: Math.log(24e-9)
        }, {
            color: [237, 248, 177],
            mode: "hcl",
            p: Math.log(28e-9)
        }, {
            color: [255, 255, 210],
            mode: "hcl",
            p: Math.log(32e-9)
        }, {
            color: [255, 237, 160],
            mode: "hcl",
            p: Math.log(42e-9)
        }, {
            color: [254, 217, 118],
            mode: "hcl",
            p: Math.log(47e-9)
        }, {
            color: [254, 178, 76],
            mode: "hcl",
            p: Math.log(57e-9)
        }, {
            color: [253, 141, 60],
            mode: "hcl",
            p: Math.log(67e-9)
        }, {
            color: [252, 78, 42],
            mode: "hcl",
            p: Math.log(11e-8)
        }, {
            color: [227, 26, 28],
            mode: "hcl",
            p: Math.log(25e-8)
        }, {
            color: [189, 0, 38],
            mode: "hcl",
            p: Math.log(5e-7)
        }, {
            color: [128, 0, 38],
            mode: "hcl",
            p: e[1]
        }]);
        return r = av(r, 7, [Math.log(3e-8), Math.log(35e-9)]), fv(n, cv(e, r, t), Math.log, Math.exp)
    }
    let Kv = {};

    function Zv(t, n, e) {
        const r = Lp(t.time_cursor, e),
            o = "current" === t.time_cursor;
        return Kp("data/cams", o ? "current" : Ep(r, "{YYYY}/{MM}/{DD}"), `${o?"current":Ep(r,"{hh}{mm}")}-${n}-cams.epak`)
    }

    function Jv() {
        return er({
            descriptionHTML: void 0,
            paths: [],
            validTime: function() {
                return null
            },
            dateFormat: function() {
                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
            },
            alpha: {
                single: 160,
                animated: 112
            }
        }, {
            sourceHTML: "CAMS / Copernicus / European Commission + ECMWF"
        })
    }

    function Qv(t, n = 1e3) {
        const e = [360 + t, 470 + t],
            r = [{
                color: [0, 0, 0],
                mode: "hcl",
                p: e[0]
            }, {
                color: [100, 0, 0],
                mode: "hcl",
                p: 400 + t
            }, {
                color: [164, 36, 0],
                mode: "hcl",
                p: 405 + t
            }, {
                color: [255, 220, 140],
                mode: "hcl",
                p: 420 + t
            }, {
                color: [255, 255, 255],
                mode: "hcl",
                p: 450 + t
            }, {
                color: [0, 210, 255],
                mode: "hcl",
                p: e[1]
            }],
            o = r[3].p,
            i = r[4].p,
            a = r[1].p;
        let u = iv(r);
        return u = av(u, 0, [a - 2, a + 2]), u = av(u, 3, [o - 2, o + 2]), u = av(u, 5, [i - 2, i + 2]), lv(e, u, n)
    }

    function tm(t = 2e3) {
        const n = [40, 2500];
        let e = iv([{
            color: [0, 38, 40],
            mode: "lab",
            p: n[0]
        }, {
            color: [255, 255, 224],
            mode: "hcl",
            p: 400
        }, {
            color: [0, 0, 154],
            mode: "lab",
            p: 1800
        }, {
            color: [0, 0, 0],
            mode: "lab",
            p: n[1]
        }]);
        return e = av(e, 0, [340, 460]), e = av(e, 2, [1500, 2100]), lv(n, e, t)
    }

    function nm(t = 400) {
        const n = [1e-13, 888e-9],
            e = n.map(Math.log);
        let r = iv([{
            color: [134, 134, 107],
            mode: "hcl",
            p: e[0]
        }, {
            color: [144, 144, 117],
            mode: "hcl",
            p: Math.log(1e-12)
        }, {
            color: [255, 255, 224],
            mode: "hcl",
            p: Math.log(7e-11)
        }, {
            color: [0, 0, 128],
            mode: "lab",
            p: Math.log(19e-8)
        }, {
            color: [23, 20, 18],
            mode: "lab",
            p: e[1]
        }]);
        return r = av(r, 1, [Math.log(5e-11), Math.log(9e-11)]), r = av(r, 3, [Math.log(8e-8), Math.log(4e-7)]), fv(n, cv(e, r, t), Math.log, Math.exp)
    }
    const em = function(t) {
        const n = new Uint8Array(t.length / 3 * 4);
        for (let e = 0, r = 0; e < t.length; e += 3, r += 4) n[r] = t[e], n[r + 1] = t[e + 1], n[r + 2] = t[e + 2], n[r + 3] = 255;
        return n
    }([4, 4, 4, 10, 3, 8, 13, 4, 11, 16, 5, 14, 18, 5, 16, 21, 6, 18, 22, 7, 19, 24, 8, 21, 26, 8, 22, 27, 9, 24, 28, 10, 25, 30, 11, 26, 31, 12, 27, 32, 12, 28, 33, 13, 29, 35, 14, 31, 36, 14, 32, 37, 15, 32, 38, 15, 33, 39, 16, 34, 40, 17, 35, 41, 17, 36, 42, 18, 38, 43, 19, 38, 44, 19, 39, 46, 20, 41, 46, 20, 45, 46, 21, 50, 45, 21, 55, 45, 21, 60, 45, 22, 64, 45, 23, 67, 45, 23, 71, 45, 24, 75, 45, 24, 77, 45, 25, 81, 45, 25, 84, 44, 26, 87, 44, 27, 90, 45, 27, 92, 45, 28, 95, 44, 29, 98, 44, 29, 100, 44, 30, 103, 44, 31, 106, 44, 31, 109, 44, 32, 110, 44, 33, 113, 44, 34, 116, 43, 34, 118, 42, 35, 121, 40, 38, 120, 38, 40, 119, 36, 42, 120, 34, 44, 120, 33, 46, 120, 32, 47, 120, 31, 49, 121, 30, 50, 122, 30, 51, 123, 29, 52, 123, 29, 53, 125, 28, 55, 125, 28, 56, 126, 27, 57, 127, 28, 58, 128, 28, 59, 129, 27, 60, 129, 27, 61, 131, 27, 62, 132, 27, 63, 133, 28, 64, 134, 27, 65, 135, 27, 66, 136, 27, 68, 137, 27, 69, 138, 25, 71, 136, 22, 73, 134, 21, 74, 133, 20, 76, 131, 17, 78, 129, 16, 79, 128, 15, 81, 126, 14, 82, 125, 10, 84, 123, 10, 85, 122, 9, 87, 120, 8, 88, 119, 7, 89, 118, 6, 91, 117, 4, 92, 115, 4, 94, 114, 4, 95, 114, 3, 96, 112, 1, 98, 111, 1, 99, 110, 0, 100, 109, 0, 101, 108, 0, 103, 107, 0, 104, 106, 0, 105, 105, 0, 107, 104, 0, 108, 101, 0, 110, 100, 0, 111, 99, 0, 112, 98, 0, 114, 96, 0, 115, 95, 0, 116, 93, 0, 118, 92, 0, 119, 90, 0, 120, 89, 0, 121, 88, 0, 123, 86, 0, 124, 85, 0, 125, 83, 0, 127, 82, 0, 128, 80, 0, 129, 79, 0, 131, 77, 0, 132, 75, 0, 133, 73, 0, 134, 72, 0, 136, 70, 0, 137, 68, 0, 138, 66, 0, 139, 65, 0, 141, 64, 0, 142, 63, 0, 143, 61, 0, 145, 60, 0, 146, 60, 0, 147, 58, 0, 149, 57, 0, 150, 56, 0, 151, 55, 0, 153, 53, 0, 154, 52, 0, 155, 51, 0, 157, 50, 0, 158, 48, 0, 159, 47, 0, 160, 45, 0, 162, 44, 0, 163, 42, 0, 164, 41, 0, 165, 39, 0, 167, 36, 0, 168, 34, 0, 169, 31, 0, 170, 23, 0, 169, 8, 9, 170, 0, 20, 171, 0, 29, 172, 0, 35, 173, 0, 40, 174, 0, 45, 175, 0, 48, 176, 0, 52, 177, 0, 55, 178, 0, 59, 179, 0, 61, 180, 0, 64, 181, 0, 66, 182, 0, 68, 183, 0, 71, 184, 0, 73, 185, 0, 76, 186, 0, 78, 187, 0, 79, 188, 0, 81, 189, 0, 83, 190, 0, 85, 191, 0, 87, 192, 0, 92, 193, 0, 99, 193, 0, 106, 193, 0, 114, 193, 0, 119, 194, 0, 125, 194, 0, 130, 194, 0, 135, 195, 0, 140, 195, 0, 145, 195, 0, 149, 196, 0, 153, 196, 0, 157, 197, 0, 161, 197, 0, 165, 197, 0, 169, 198, 0, 172, 198, 0, 176, 199, 0, 180, 199, 0, 184, 199, 0, 186, 200, 0, 190, 201, 0, 193, 201, 0, 197, 201, 0, 200, 202, 0, 201, 201, 24, 203, 202, 51, 206, 202, 65, 207, 203, 77, 209, 203, 87, 212, 203, 95, 213, 204, 103, 215, 205, 109, 218, 205, 116, 219, 206, 121, 221, 207, 127, 223, 207, 132, 226, 207, 138, 227, 208, 143, 229, 209, 147, 231, 209, 151, 232, 210, 155, 235, 211, 159, 237, 211, 164, 238, 212, 168, 240, 212, 172, 243, 213, 175, 243, 214, 179, 245, 214, 183, 248, 215, 186, 248, 216, 189, 248, 218, 193, 247, 219, 195, 247, 220, 198, 247, 222, 201, 248, 223, 204, 247, 224, 206, 247, 226, 209, 247, 227, 211, 247, 229, 214, 247, 230, 216, 247, 231, 218, 247, 232, 220, 248, 234, 224, 247, 235, 225, 247, 236, 229, 247, 238, 231, 247, 239, 232, 248, 240, 235, 248, 242, 237, 247, 243, 239, 248, 244, 241, 248, 246, 244, 248, 247, 246, 248, 248, 248, 249, 249, 249, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255, 255, 255]);

    function rm(t = 500) {
        const n = [.002, 2.5],
            e = n.map(Math.log);
        return fv(n, cv(e, [tv(Jl, "cubehelix", e)], t), Math.log, Math.exp)
    }

    function om(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n && (r = r.filter((function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable
            }))), e.push.apply(e, r)
        }
        return e
    }

    function im(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {};
            n % 2 ? om(Object(e), !0).forEach((function(n) {
                am(t, n, e[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : om(Object(e)).forEach((function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            }))
        }
        return t
    }

    function am(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }
    const um = fr() ? "" : "(<a href='about.html#aot' class='internal-link'>AOT</a>)",
        cm = bp({
            year: 2019,
            month: 9,
            day: 1
        });
    let lm = {};

    function sm(t, n, e, r) {
        const {
            time_cursor: o
        } = t;
        void 0 === e && (e = "current" === o || bp(o) > cm ? {
            hour: 1
        } : {
            hour: 3
        });
        const i = Lp(o, e, r);
        return Kp("data/geos", "current" === o ? "current" : Ep(i, "{YYYY}/{MM}/{DD}"), ["current" === o ? "current" : Ep(i, "{hh}{mm}"), n, "geos.epak"].join("-"))
    }

    function fm(t, n) {
        const e = Lp(t.time_cursor, {
                hour: 1
            }, n),
            r = t => function() {
                return Lp(Ap(this.validTime(), t), {
                    hour: 1
                })
            };
        return {
            validTime: () => er(e),
            prev2: r({
                hour: -8
            }),
            prev1: r({
                hour: -1
            }),
            next1: r({
                hour: 1
            }),
            next2: r({
                hour: 8
            }),
            navLabels: {
                prev2: `-8 ${kd`hours`}`,
                prev1: `-1 ${kd`hour`}`,
                next1: `+1 ${kd`hour`}`,
                next2: `+8 ${kd`hours`}`
            }
        }
    }

    function hm(t, n) {
        const e = Lp(t.time_cursor, {
                hour: 3
            }, n),
            r = t => function() {
                return Lp(Ap(this.validTime(), t), {
                    hour: 3
                })
            };
        return {
            validTime: () => er(e),
            prev2: r({
                day: -1
            }),
            prev1: r({
                hour: -3
            }),
            next1: r({
                hour: 3
            }),
            next2: r({
                day: 1
            }),
            navLabels: {
                prev2: `-1 ${kd`day`}`,
                prev1: `-3 ${kd`hours`}`,
                next1: `+3 ${kd`hours`}`,
                next2: `+1 ${kd`day`}`
            }
        }
    }

    function dm(t, n) {
        const {
            time_cursor: e = "current"
        } = t, r = "current" === e || bp(e) > cm ? fm : hm;
        return im({
            sourceHTML: zp
        }, r(t, n))
    }

    function pm(t) {
        Array.isArray(t) && (t = qp(t, ["u", "v"], ["time", "level", "lat", "lon"]));
        const n = t,
            {
                variables: e
            } = n.header,
            r = e.U || e.u || e["u-component_of_wind_isobaric"] || e["u-component_of_wind_height_above_ground"],
            o = e.V || e.v || e["v-component_of_wind_isobaric"] || e["v-component_of_wind_height_above_ground"],
            i = e[r.dimensions[0]],
            a = e[r.dimensions[2]],
            u = e[r.dimensions[3]],
            c = Ne(n.blocks[r.data.block], n.blocks[o.data.block]);
        c.containsNaN = !1;
        const l = Ip(u.sequence, a.sequence),
            s = {
                valueAt: t => {
                    const n = 2 * t;
                    return [c[n], c[n + 1]]
                },
                scalarize: Oe,
                isDefined: t => !isNaN(c[2 * t]),
                nearest: Yp(l, c),
                bilinear: Up(l, c)
            };
        return {
            validTime: () => _p(i.data[0]),
            grid: () => l,
            field: () => s,
            valueInRange(t) {
                return [this.scale.valueInRange(t), 0]
            }
        }
    }

    function vm(t, n) {
        const e = pm(t).field(),
            r = e.valueAt,
            o = e.nearest,
            i = e.bilinear,
            a = Xp(n, /air_density/, {
                hasMissing: !1,
                legacyName: "air_density"
            }),
            u = a.field(),
            c = u.valueAt,
            l = u.isDefined,
            s = u.nearest,
            f = u.bilinear;

        function h(t, n) {
            return .5 * n * Oe(t) ** 3
        }
        const d = {
            valueAt: t => h(r(t), c(t)),
            scalarize: t => t,
            isDefined: l,
            nearest: (t, n) => h(o(t, n), s(t, n)),
            bilinear: (t, n) => h(i(t, n), f(t, n))
        };
        return {
            validTime: a.validTime,
            grid: a.grid,
            field: () => d,
            valueInRange(t) {
                return this.scale.valueInRange(t)
            }
        }
    }

    function mm(t = 10) {
        return sv([0, 1.5], [
            [0, [0, 0, 0]],
            [1.5, [255, 255, 255]]
        ], t)
    }

    function gm(t = 1e3) {
        return sv([0, 5e3], [
            [0, [5, 48, 97]],
            [500, [33, 102, 172]],
            [1e3, [67, 147, 195]],
            [1500, [146, 197, 222]],
            [2e3, [209, 229, 240]],
            [2500, [247, 247, 247]],
            [3e3, [253, 219, 199]],
            [3500, [244, 165, 130]],
            [4e3, [214, 96, 77]],
            [4500, [178, 24, 43]],
            [5e3, [103, 0, 31]]
        ], t)
    }

    function ym(t = 1e3) {
        return sv([236, 332], [
            [241, [255, 255, 255]],
            [245.5, [6, 82, 255]],
            [250, [6, 82, 255]],
            [258, [46, 131, 255]],
            [266, [46, 131, 255]],
            [280, [0, 0, 0]],
            [300, [0, 0, 0]],
            [305, [247, 20, 35]],
            [309.5, [247, 20, 35]],
            [314, [245, 210, 5]],
            [320.5, [245, 210, 5]],
            [327, [255, 255, 255]]
        ], t)
    }

    function _m(t = 1e3) {
        return sv([92e3, 105e3], [
            [92e3, [40, 0, 0]],
            [95e3, [187, 60, 31]],
            [96500, [137, 32, 30]],
            [98e3, [16, 1, 43]],
            [100500, [36, 1, 93]],
            [101300, [241, 254, 18]],
            [103e3, [228, 246, 223]],
            [105e3, [255, 255, 255]]
        ], t)
    }

    function wm(t = 2e3) {
        const n = [0, 150];
        let e = iv([{
            color: [37, 79, 92],
            mode: "hcl",
            p: n[0]
        }, {
            color: "aliceblue",
            mode: "hcl",
            p: 2
        }, {
            color: [51, 26, 155],
            mode: "hcl",
            p: 15
        }, {
            color: "gold",
            mode: "hcl",
            p: 100
        }, {
            color: "white",
            mode: "hcl",
            p: n[1]
        }]);
        return e = av(e, 0, [.6, 3.4]), e = av(e, 2, [12, 18]), lv(n, e, t)
    }

    function bm(t = 1e3) {
        return sv([0, 100], [
            [0, [230, 165, 30]],
            [25, [120, 100, 95]],
            [60, [40, 44, 92]],
            [75, [21, 13, 193]],
            [90, [75, 63, 235]],
            [100, [25, 255, 255]]
        ], t)
    }

    function xm(t = 1e3) {
        return sv([0, 1], [
            [0, [5, 5, 89]],
            [.2, [170, 170, 230]],
            [1, [255, 255, 255]]
        ], t)
    }

    function Mm(t = 1e3) {
        return sv([0, 70], [
            [0, [230, 165, 30]],
            [10, [120, 100, 95]],
            [20, [40, 44, 92]],
            [30, [21, 13, 193]],
            [40, [75, 63, 235]],
            [60, [25, 255, 255]],
            [70, [150, 255, 255]]
        ], t)
    }

    function Tm(t = 2e3) {
        return sv([193.15, 328.15], [
            [193.15, [37, 4, 42]],
            [206, [41, 10, 130]],
            [219, [81, 40, 40]],
            [233.15, [192, 37, 149]],
            [255.372, [70, 215, 215]],
            [273.15, [21, 84, 187]],
            [275.15, [24, 132, 14]],
            [291, [247, 251, 59]],
            [298, [235, 167, 21]],
            [311, [230, 71, 39]],
            [328.15, [88, 27, 67]]
        ], t)
    }

    function Am(t = 1e3) {
        const n = new Uint8Array(4 * t);
        return uv(n, [0, 1], [0, 1], ov), fv([0, 100], n)
    }

    function Em(t = 1e4) {
        return sv([0, 8e4], [
            [0, [15, 4, 96]],
            [250, [30, 8, 180]],
            [1e3, [121, 102, 2]],
            [2e3, [118, 161, 66]],
            [4e3, [50, 102, 219]],
            [8e3, [19, 131, 193]],
            [16e3, [59, 204, 227]],
            [64e3, [241, 1, 45]],
            [8e4, [243, 0, 241]]
        ], t)
    }
    const Sm = +Date.UTC(2014, 10, 24),
        Nm = +Date.UTC(2015, 2, 11),
        km = +Date.UTC(2016, 5, 22),
        Dm = +Date.UTC(2021, 0, 1);
    let Pm = {};

    function Lm(t, n, e, r) {
        const {
            time_cursor: o,
            hd_enabled: i
        } = t, a = Lp(o, e), u = "current" === o ? "current" : Ep(a, "{YYYY}/{MM}/{DD}"), c = "current" === o ? "current" : Ep(a, "{hh}{mm}"), l = bp(a), s = l >= Sm ? ".epak" : ".json";
        let f = "0.5";
        return l < Nm || hr() ? f = "1.0" : l >= km && i && (f = "0.25"), Kp("data/gfs", u, [c, n, "surface" === r ? "surface" : void 0 !== r ? "isobaric" : void 0, "surface" === r ? "level" : void 0 !== r ? r : void 0, "gfs", f].filter((t => void 0 !== t)).join("-") + s)
    }

    function jm(t) {
        const {
            time_cursor: n
        } = t;
        return er({
            descriptionHTML: void 0,
            paths: [],
            validTime: function() {
                return null
            },
            dateFormat: function() {
                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
            },
            alpha: {
                single: 160,
                animated: 112
            }
        }, {
            sourceHTML: "GFS / NCEP / US National Weather Service"
        }, "current" === n || bp(n) >= Dm ? jp(n) : Op(n))
    }

    function Om(t) {
        var n;
        const e = jm(t);
        return er(e, {
            type: "wind",
            descriptionHTML: {
                name: kd`Wind`,
                qualifier: ` @ ${Pp(t)}`
            },
            paths: [Lm(t, "wind", e.alignment(), t.z_level)],
            builder: pm,
            unitDescriptors: Wp({
                "km/h": {
                    convert: t => $e(t, 3.6),
                    scalarize: Oe,
                    precision: 0,
                    convention: "into"
                },
                "m/s": {
                    scalarize: Oe,
                    precision: 1,
                    convention: "into"
                },
                kn: {
                    convert: t => $e(t, 1.943844),
                    scalarize: Oe,
                    precision: 0,
                    convention: "into"
                },
                mph: {
                    convert: t => $e(t, 2.236936),
                    scalarize: Oe,
                    precision: 0,
                    convention: "into"
                }
            }),
            supported_z_levels: ["surface", "1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "70hPa", "10hPa"],
            scale: null !== (n = Pm.wind) && void 0 !== n ? n : Pm.wind = Am(),
            particles: {
                velocityScale: .01,
                maxIntensity: 15
            }
        })
    }

    function Rm(t) {
        var n;
        const e = jm(t);
        return er(e, {
            type: "air_density",
            descriptionHTML: {
                name: kd`Air Density`,
                qualifier: ` @ ${Pp(t)}`
            },
            paths: [Lm(t, "air_density", e.alignment(), t.z_level)],
            builder: t => Xp(t, /air_density/, {
                hasMissing: !1
            }),
            unitDescriptors: Wp({
                "kg/m^3": {
                    convert: t => t,
                    precision: 2
                }
            }),
            supported_z_levels: ["1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "70hPa", "10hPa"],
            scale: null !== (n = Pm.airdens) && void 0 !== n ? n : Pm.airdens = mm()
        })
    }

    function zm(...t) {
        const n = t.map((t => En(t)));
        return t => n.some((n => n(t)))
    }
    const $m = {
            wind: {
                matchesPrimary: zm({
                    animation_type: "wind"
                }),
                matchesOverlay: zm({
                    overlay_type: "wind"
                }),
                create: Om
            },
            temp: {
                matchesOverlay: zm({
                    overlay_type: "temp"
                }),
                create: function(t) {
                    var n;
                    const e = /Temperature/,
                        r = jm(t);
                    return er(r, {
                        type: "temp",
                        descriptionHTML: {
                            name: kd`Temperature`,
                            qualifier: ` @ ${Pp(t)}`
                        },
                        paths: [Lm(t, "temp", r.alignment(), t.z_level)],
                        builder: t => Xp(t, e, {
                            hasMissing: !1,
                            legacyName: "Temperature"
                        }),
                        unitDescriptors: Wp({
                            "°C": {
                                convert: t => t - 273.15,
                                precision: 1
                            },
                            "°F": {
                                convert: t => 9 * t / 5 - 459.67,
                                precision: 1
                            },
                            K: {
                                convert: t => t,
                                precision: 1
                            }
                        }),
                        supported_z_levels: ["surface", "1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "70hPa", "10hPa"],
                        scale: null !== (n = Pm.temp) && void 0 !== n ? n : Pm.temp = Tm()
                    })
                }
            },
            relative_humidity: {
                matchesOverlay: zm({
                    overlay_type: "relative_humidity"
                }),
                create: function(t) {
                    var n;
                    const e = /Relative_humidity/,
                        r = jm(t);
                    return er(r, {
                        type: "relative_humidity",
                        descriptionHTML: {
                            name: kd`Relative Humidity`,
                            qualifier: ` @ ${Pp(t)}`
                        },
                        paths: [Lm(t, "relative_humidity", r.alignment(), t.z_level)],
                        builder: t => Xp(t, e, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "%": {
                                convert: t => t,
                                precision: 0
                            }
                        }),
                        supported_z_levels: ["surface", "1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "70hPa", "10hPa"],
                        scale: null !== (n = Pm.rh) && void 0 !== n ? n : Pm.rh = bm()
                    })
                }
            },
            air_density: {
                matchesOverlay: zm({
                    overlay_type: "air_density"
                }),
                create: Rm
            },
            wind_power_density: {
                matchesOverlay: zm({
                    overlay_type: "wind_power_density"
                }),
                create: function(t) {
                    var n;
                    const e = Om(t),
                        r = Rm(t);
                    return er(jm(t), {
                        type: "wind_power_density",
                        descriptionHTML: {
                            name: kd`Instantaneous Wind Power Density`,
                            qualifier: ` @ ${Pp(t)}`
                        },
                        paths: [e.paths[0], r.paths[0]],
                        builder: vm,
                        unitDescriptors: Wp({
                            "kW/m^2": {
                                convert: t => t / 1e3,
                                precision: 1
                            },
                            "W/m^2": {
                                convert: t => t,
                                precision: 0
                            }
                        }),
                        supported_z_levels: ["1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "70hPa", "10hPa"],
                        scale: null !== (n = Pm.wpd) && void 0 !== n ? n : Pm.wpd = Em()
                    })
                }
            },
            misery_index: {
                matchesOverlay: zm({
                    overlay_type: "misery_index"
                }),
                create: function(t) {
                    var n;
                    const e = ` ${kd`(feels like)`}`,
                        r = jm(t);
                    return er(r, {
                        type: "misery_index",
                        descriptionHTML: {
                            name: kd`Misery Index`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "misery_index", r.alignment())],
                        builder: t => Xp(t, /misery_index/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "°C": {
                                html: "°C" + e,
                                convert: t => t - 273.15,
                                precision: 1
                            },
                            "°F": {
                                html: "°F" + e,
                                convert: t => 9 * t / 5 - 459.67,
                                precision: 1
                            },
                            K: {
                                html: "K" + e,
                                convert: t => t,
                                precision: 1
                            }
                        }),
                        scale: null !== (n = Pm.misery) && void 0 !== n ? n : Pm.misery = ym()
                    })
                }
            },
            total_cloud_water: {
                matchesOverlay: zm({
                    overlay_type: "total_cloud_water"
                }),
                create: function(t) {
                    var n;
                    const e = /Cloud_water/,
                        r = jm(t);
                    return er(r, {
                        type: "total_cloud_water",
                        descriptionHTML: {
                            name: kd`Total Cloud Water`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "total_cloud_water", r.alignment())],
                        builder: t => Xp(t, e, {
                            hasMissing: !1,
                            legacyName: "Cloud_water"
                        }),
                        unitDescriptors: Wp({
                            "kg/m^2": {
                                convert: t => t,
                                precision: 3
                            }
                        }),
                        scale: null !== (n = Pm.tcw) && void 0 !== n ? n : Pm.tcw = xm()
                    })
                }
            },
            total_precipitable_water: {
                matchesOverlay: zm({
                    overlay_type: "total_precipitable_water"
                }),
                create: function(t) {
                    var n;
                    const e = /Precipitable_water/,
                        r = jm(t);
                    return er(r, {
                        type: "total_precipitable_water",
                        descriptionHTML: {
                            name: kd`Total Precipitable Water`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "total_precipitable_water", r.alignment())],
                        builder: t => Xp(t, e, {
                            hasMissing: !1,
                            legacyName: "Precipitable_water"
                        }),
                        unitDescriptors: Wp({
                            "kg/m^2": {
                                convert: t => t,
                                precision: 3
                            }
                        }),
                        scale: null !== (n = Pm.tpw) && void 0 !== n ? n : Pm.tpw = Mm()
                    })
                }
            },
            mean_sea_level_pressure: {
                matchesOverlay: zm({
                    overlay_type: "mean_sea_level_pressure"
                }),
                create: function(t) {
                    var n;
                    const e = /Pressure_reduced_to_MSL/,
                        r = jm(t);
                    return er(r, {
                        type: "mean_sea_level_pressure",
                        descriptionHTML: {
                            name: kd`Mean Sea Level Pressure`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "mean_sea_level_pressure", r.alignment())],
                        builder: t => Xp(t, e, {
                            hasMissing: !1,
                            legacyName: "Pressure_reduced_to_MSL"
                        }),
                        unitDescriptors: Wp({
                            hPa: {
                                convert: t => t / 100,
                                precision: 0
                            },
                            mmHg: {
                                convert: t => t / 133.322387415,
                                precision: 0
                            },
                            inHg: {
                                convert: t => t / 3386.389,
                                precision: 1
                            }
                        }),
                        scale: null !== (n = Pm.mslp) && void 0 !== n ? n : Pm.mslp = _m()
                    })
                }
            },
            precip_3hr: {
                matchesOverlay: zm({
                    overlay_type: "precip_3hr"
                }),
                create: function(t) {
                    var n;
                    const e = jm(t);
                    return er(e, {
                        type: "precip_3hr",
                        descriptionHTML: {
                            name: kd`3-hour Precipitation Accumulation`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "precip_3hr", e.alignment())],
                        builder: t => Xp(t, /precip_accumulation_3hr/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            mm: {
                                convert: t => t,
                                precision: 1
                            },
                            in: {
                                convert: t => t / 25.4,
                                precision: 2
                            },
                            "kg/m^2": {
                                convert: t => t,
                                precision: 1
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 160
                        },
                        scale: null !== (n = Pm.precip) && void 0 !== n ? n : Pm.precip = wm()
                    })
                }
            },
            cape: {
                matchesOverlay: zm({
                    overlay_type: "cape"
                }),
                create: function(t) {
                    var n;
                    const e = jm(t);
                    return er(e, {
                        type: "cape",
                        descriptionHTML: {
                            name: kd`Convective Available Potential Energy from Surface`,
                            qualifier: ""
                        },
                        paths: [Lm(t, "cape", e.alignment())],
                        builder: t => Xp(t, /Convective_available_potential_energy_surface/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "J/kg": {
                                convert: t => t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = Pm.cape) && void 0 !== n ? n : Pm.cape = gm()
                    })
                }
            },
            uv_index: {
                matchesOverlay: zm({
                    overlay_type: "uv_index"
                }),
                create: function(t) {
                    var n;
                    const e = er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, jp(t.time_cursor));
                    return er(e, {
                        sourceHTML: "CPC / NCEP / US National Weather Service",
                        type: "uv_index",
                        descriptionHTML: {
                            name: kd`Ultraviolet Index and Erythemal Dose Rate`,
                            qualifier: ` @ ${kd`Surface`}`
                        },
                        paths: [qv(t, e.alignment())],
                        builder: t => Xp(t, /Ultra_Violet_Index_surface/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "UV Index": {
                                html: Xv,
                                format: Vv
                            },
                            "mW/m^2": {
                                convert: t => 1e3 * t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 210,
                            animated: 160
                        },
                        scale: null !== (n = Hv.uv) && void 0 !== n ? n : Hv.uv = Uv()
                    })
                }
            },
            cosc: {
                matchesOverlay: zm({
                    overlay_type: "cosc"
                }),
                create: function(t) {
                    var n;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, dm(t), {
                        type: "cosc",
                        descriptionHTML: {
                            name: kd`Carbon Monoxide Surface Concentration`,
                            qualifier: ""
                        },
                        paths: [sm(t, "cosc")],
                        builder: t => Xp(t, /COSC/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            ppbv: {
                                convert: t => t,
                                precision: 0
                            },
                            ppmv: {
                                convert: t => t / 1e3,
                                precision: 2
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = lm.cosc) && void 0 !== n ? n : lm.cosc = tm()
                    })
                }
            },
            so2smass: {
                matchesOverlay: zm({
                    overlay_type: "so2smass"
                }),
                create: function(t) {
                    var n;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, dm(t), {
                        type: "so2smass",
                        descriptionHTML: {
                            name: kd`Sulfur Dioxide Surface Mass`,
                            qualifier: ""
                        },
                        paths: [sm(t, "so2smass")],
                        builder: t => Xp(t, /SO2SMASS/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "µg/m^3": {
                                convert: t => 1e9 * t,
                                precision: 2
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = lm.so2smass) && void 0 !== n ? n : lm.so2smass = nm()
                    })
                }
            },
            duexttau: {
                matchesOverlay: zm({
                    overlay_type: "duexttau"
                }),
                create: function(t) {
                    var n;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, dm(t), {
                        type: "duexttau",
                        descriptionHTML: {
                            name: `${kd`Dust Extinction (Aerosol Optical Thickness, 550 nm)`} ${um}`,
                            qualifier: ""
                        },
                        paths: [sm(t, "duexttau")],
                        builder: t => Xp(t, /DUEXTTAU/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            τ: {
                                convert: t => t,
                                precision: 4
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = lm.duexttau) && void 0 !== n ? n : lm.duexttau = fv([1e-4, 3], em, Math.log, Math.exp)
                    })
                }
            },
            suexttau: {
                matchesOverlay: zm({
                    overlay_type: "suexttau"
                }),
                create: function(t) {
                    var n;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, dm(t), {
                        type: "suexttau",
                        descriptionHTML: {
                            name: `${kd`Sulfate Extinction (Aerosol Optical Thickness, 550 nm)`} ${um}`,
                            qualifier: ""
                        },
                        paths: [sm(t, "suexttau")],
                        builder: t => Xp(t, /SUEXTTAU/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            τ: {
                                convert: t => t,
                                precision: 3
                            }
                        }),
                        alpha: {
                            single: 240,
                            animated: 140
                        },
                        scale: null !== (n = lm.suexttau) && void 0 !== n ? n : lm.suexttau = rm()
                    })
                }
            },
            co2sc: {
                matchesOverlay: zm({
                    overlay_type: "co2sc"
                }),
                create: function(t) {
                    var n, e, r;
                    const o = {
                            hour: 3
                        },
                        i = {
                            minute: 90
                        },
                        a = Lp(t.time_cursor, o, i),
                        u = bp({
                            year: 2017,
                            month: 1,
                            day: 24,
                            hour: 4,
                            minute: 30
                        }),
                        c = bp(a) < u,
                        l = c ? 32 : 0,
                        s = bp({
                            year: 2018,
                            month: 7,
                            day: 11,
                            hour: 4,
                            minute: 30
                        });

                    function f(t) {
                        for (let n = 0; n < t.length; n++) t[n] += l
                    }
                    const h = "A" == (bp(a) < s ? "A" : "B") ? c ? null !== (n = lm.co2scAX) && void 0 !== n ? n : lm.co2scAX = Qv(-8) : null !== (e = lm.co2scAY) && void 0 !== e ? e : lm.co2scAY = Qv(0) : null !== (r = lm.co2scB) && void 0 !== r ? r : lm.co2scB = function(t = 1e3) {
                        const n = [380, 510],
                            e = [{
                                color: [0, 0, 0],
                                mode: "hcl",
                                p: n[0]
                            }, {
                                color: [100, 0, 0],
                                mode: "hcl",
                                p: 412
                            }, {
                                color: [164, 36, 0],
                                mode: "hcl",
                                p: 418
                            }, {
                                color: [255, 220, 140],
                                mode: "hcl",
                                p: 438
                            }, {
                                color: [0, 220, 180],
                                mode: "hcl",
                                p: 485
                            }, {
                                color: [0, 255, 255],
                                mode: "hcl",
                                p: n[1]
                            }],
                            r = e[3].p,
                            o = e[4].p,
                            i = e[1].p;
                        let a = iv(e);
                        return a = av(a, 0, [i - 3, i + 2]), a = av(a, 3, [r - 3, r + 3]), a = av(a, 5, [o - 3, o + 3]), lv(n, a, t)
                    }();
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, dm(t), im(im({
                        type: "co2sc",
                        descriptionHTML: {
                            name: kd`Carbon Dioxide Surface Concentration`,
                            qualifier: ""
                        },
                        sourceHTML: c ? $p : zp,
                        paths: [sm(t, "co2sc", o, i)]
                    }, hm(t, i)), {}, {
                        builder: t => Xp(t, /CO2SC/, {
                            hasMissing: !1,
                            transform: 0 !== l ? f : t => t
                        }),
                        unitDescriptors: Wp({
                            ppmv: {
                                convert: t => t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 200,
                            animated: 150
                        },
                        scale: h
                    }))
                }
            },
            currents: {
                matchesPrimary: zm({
                    animation_type: "currents"
                }),
                matchesOverlay: zm({
                    overlay_type: "currents"
                }),
                create: function(t) {
                    return Ld(Kp("data/oscar", "oscar-catalog.json")).then((n => function(t, n) {
                        var e;
                        const r = function(t, n) {
                                const e = Fv(t, n);
                                return e ? Sp(e, /(\d{4})(\d\d)(\d\d)/) : null
                            }(t, n.time_cursor),
                            o = n => function() {
                                return function(t, n, e) {
                                    const r = Fv(t, n, e);
                                    return r ? Sp(r, /(\d{4})(\d\d)(\d\d)/) : void 0
                                }(t, this.validTime(), n)
                            };
                        return er({
                            descriptionHTML: void 0,
                            paths: [],
                            validTime: function() {
                                return null
                            },
                            dateFormat: function() {
                                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                            },
                            alpha: {
                                single: 160,
                                animated: 112
                            }
                        }, {
                            type: "currents",
                            descriptionHTML: {
                                name: kd`Ocean Currents`,
                                qualifier: ` @ ${kd`Surface`}`
                            },
                            sourceHTML: "OSCAR / Earth & Space Research",
                            paths: [Yv(t, n)],
                            validTime: () => er(r),
                            prev2: o(-6),
                            prev1: o(-1),
                            next1: o(1),
                            next2: o(6),
                            navLabels: {
                                prev2: `-1 ${kd`month`}`,
                                prev1: `-5 ${kd`days`}`,
                                next1: `+5 ${kd`days`}`,
                                next2: `+1 ${kd`month`}`
                            },
                            builder: Cv,
                            unitDescriptors: Wp({
                                "m/s": {
                                    scalarize: Oe,
                                    precision: 2,
                                    convention: "with"
                                },
                                "km/h": {
                                    convert: t => $e(t, 3.6),
                                    scalarize: Oe,
                                    precision: 1,
                                    convention: "with"
                                },
                                kn: {
                                    convert: t => $e(t, 1.943844),
                                    scalarize: Oe,
                                    precision: 1,
                                    convention: "with"
                                },
                                mph: {
                                    convert: t => $e(t, 2.236936),
                                    scalarize: Oe,
                                    precision: 1,
                                    convention: "with"
                                }
                            }),
                            scale: null !== (e = zv) && void 0 !== e ? e : zv = Iv(),
                            particles: {
                                velocityScale: 1 / 7,
                                maxIntensity: .7
                            }
                        })
                    }(n, t)))
                }
            },
            primary_waves: {
                matchesPrimary: zm({
                    animation_type: "primary_waves"
                }),
                matchesOverlay: zm({
                    overlay_type: "primary_waves"
                }),
                create: function(t) {
                    var n;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, mv(t), {
                        type: "primary_waves",
                        descriptionHTML: {
                            name: kd`Peak Wave Period`,
                            qualifier: ""
                        },
                        paths: [vv(t, "primary")],
                        builder: Hp,
                        unitDescriptors: Wp({
                            s: {
                                scalarize: Oe,
                                precision: 1,
                                convention: "into"
                            }
                        }),
                        scale: null !== (n = pv.primaryWaves) && void 0 !== n ? n : pv.primaryWaves = dv(),
                        particles: {
                            velocityScale: 1 / 612,
                            maxIntensity: 12,
                            waves: !0
                        }
                    })
                }
            },
            significant_wave_height: {
                matchesOverlay: zm({
                    overlay_type: "significant_wave_height"
                }),
                create: function(t) {
                    var n;
                    const e = /Significant_height/;
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, mv(t), {
                        type: "significant_wave_height",
                        descriptionHTML: {
                            name: kd`Significant Wave Height`,
                            qualifier: ""
                        },
                        paths: [vv(t, "sig_height")],
                        builder: t => Xp(t, e, {
                            hasMissing: !0
                        }),
                        unitDescriptors: Wp({
                            m: {
                                convert: t => t,
                                precision: 2
                            },
                            ft: {
                                convert: t => 100 * t / 2.54 / 12,
                                precision: 1
                            }
                        }),
                        scale: null !== (n = pv.htsgw) && void 0 !== n ? n : pv.htsgw = hv()
                    })
                }
            },
            sea_surface_temp: {
                matchesOverlay: zm({
                    overlay_type: "sea_surface_temp"
                }),
                create: function(t) {
                    return Pv(t.time_cursor) ? function(t) {
                        var n;
                        return er({
                            descriptionHTML: void 0,
                            paths: [],
                            validTime: function() {
                                return null
                            },
                            dateFormat: function() {
                                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                            },
                            alpha: {
                                single: 160,
                                animated: 112
                            }
                        }, Tv(t), {
                            type: _v,
                            descriptionHTML: {
                                name: kd`Sea Surface Temperature`,
                                qualifier: ""
                            },
                            paths: [Mv(t, _v)],
                            builder: t => Xp(t, /analysed_sst/, {
                                hasMissing: !0
                            }),
                            unitDescriptors: Wp({
                                "°C": {
                                    convert: t => t - 273.15,
                                    precision: 1
                                },
                                "°F": {
                                    convert: t => 9 * t / 5 - 459.67,
                                    precision: 1
                                },
                                K: {
                                    convert: t => t,
                                    precision: 1
                                }
                            }),
                            scale: null !== (n = bv.sst) && void 0 !== n ? n : bv.sst = yv(),
                            alpha: {
                                single: 200,
                                animated: 132
                            }
                        })
                    }(t) : function(t) {
                        var n;
                        return er({
                            descriptionHTML: void 0,
                            paths: [],
                            validTime: function() {
                                return null
                            },
                            dateFormat: function() {
                                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                            },
                            alpha: {
                                single: 160,
                                animated: 112
                            }
                        }, kv(t), {
                            type: "sea_surface_temp",
                            descriptionHTML: {
                                name: kd`Sea Surface Temperature`,
                                qualifier: ""
                            },
                            paths: [Nv(t, "sea_surface_temp")],
                            builder: t => Xp(t, /Temperature_surface_sparse/, {
                                hasMissing: !0
                            }),
                            unitDescriptors: Wp({
                                "°C": {
                                    convert: t => t - 273.15,
                                    precision: 1
                                },
                                "°F": {
                                    convert: t => 9 * t / 5 - 459.67,
                                    precision: 1
                                },
                                K: {
                                    convert: t => t,
                                    precision: 1
                                }
                            }),
                            scale: null !== (n = Ev.sst) && void 0 !== n ? n : Ev.sst = Av(),
                            alpha: {
                                single: 200,
                                animated: 132
                            }
                        })
                    }(t)
                }
            },
            sea_surface_temp_anomaly: {
                matchesOverlay: zm({
                    overlay_type: "sea_surface_temp_anomaly"
                }),
                create: function(t) {
                    return Pv(t.time_cursor) ? function(t) {
                        var n;
                        return er({
                            descriptionHTML: void 0,
                            paths: [],
                            validTime: function() {
                                return null
                            },
                            dateFormat: function() {
                                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                            },
                            alpha: {
                                single: 160,
                                animated: 112
                            }
                        }, Tv(t), {
                            type: wv,
                            descriptionHTML: {
                                name: kd`Sea Surface Temperature Anomaly`,
                                qualifier: ""
                            },
                            paths: [Mv(t, wv)],
                            builder: t => Xp(t, /sst_anomaly/, {
                                hasMissing: !0
                            }),
                            unitDescriptors: Wp({
                                "°C": {
                                    convert: t => t,
                                    precision: 1
                                },
                                "°F": {
                                    convert: t => 9 * t / 5,
                                    precision: 1
                                },
                                K: {
                                    convert: t => t,
                                    precision: 1
                                }
                            }),
                            scale: null !== (n = bv.ssta) && void 0 !== n ? n : bv.ssta = gv()
                        })
                    }(t) : function(t) {
                        var n;
                        return er({
                            descriptionHTML: void 0,
                            paths: [],
                            validTime: function() {
                                return null
                            },
                            dateFormat: function() {
                                return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                            },
                            alpha: {
                                single: 160,
                                animated: 112
                            }
                        }, kv(t), {
                            type: "sea_surface_temp_anomaly",
                            descriptionHTML: {
                                name: kd`Sea Surface Temperature Anomaly`,
                                qualifier: ""
                            },
                            paths: [Nv(t, "sea_surface_temp_anomaly")],
                            builder: t => Xp(t, /Temperature_surface_anomaly_sparse/, {
                                hasMissing: !0
                            }),
                            unitDescriptors: Wp({
                                "°C": {
                                    convert: t => t,
                                    precision: 1
                                },
                                "°F": {
                                    convert: t => 9 * t / 5,
                                    precision: 1
                                },
                                K: {
                                    convert: t => t,
                                    precision: 1
                                }
                            }),
                            scale: null !== (n = Ev.ssta) && void 0 !== n ? n : Ev.ssta = gv()
                        })
                    }(t)
                }
            },
            aurora: {
                matchesOverlay: zm({
                    overlay_type: "aurora"
                }),
                create: function(t) {
                    var n;
                    const e = Lp(t.time_cursor, {
                            minute: 5
                        }),
                        r = t => function() {
                            return Lp(Ap(e, t), {
                                minute: 5
                            })
                        };
                    return er({
                        descriptionHTML: void 0,
                        paths: [],
                        validTime: function() {
                            return null
                        },
                        dateFormat: function() {
                            return "{YYYY}-{MM}-{DD} {hh}:{mm} {TZ}"
                        },
                        alpha: {
                            single: 160,
                            animated: 112
                        }
                    }, {
                        type: "aurora",
                        descriptionHTML: {
                            name: kd`Probability of Visible Aurora`,
                            qualifier: ""
                        },
                        sourceHTML: "OVATION / SWPC / NCEP / NWS / NOAA",
                        paths: [$v(t)],
                        validTime: () => er(e),
                        prev2: r({
                            hour: -1
                        }),
                        prev1: r({
                            minute: -5
                        }),
                        next1: r({
                            minute: 5
                        }),
                        next2: r({
                            hour: 1
                        }),
                        navLabels: {
                            prev2: `-1 ${kd`hour`}`,
                            prev1: `-5 ${kd`minutes`}`,
                            next1: `+5 ${kd`minutes`}`,
                            next2: `+1 ${kd`hour`}`
                        },
                        builder: t => {
                            var n;
                            return null !== (n = t.has_missing) && void 0 !== n || (t.has_missing = !1),
                                function(t) {
                                    const {
                                        Conventions: n,
                                        source: e,
                                        has_missing: r,
                                        date: o,
                                        encoding: i
                                    } = t;
                                    if ("earth.nullschool.net/flat-1.0" !== n) throw new Error(`Unsupported data conventions: ${_n(n)}`);
                                    const a = {
                                            start: +t.lon.start,
                                            delta: +t.lon.delta,
                                            size: Le(+t.lon.size, 0, 8192)
                                        },
                                        u = {
                                            start: +t.lat.start,
                                            delta: +t.lat.delta,
                                            size: Le(+t.lat.size, 0, 8192)
                                        },
                                        c = Array.isArray(t.data) ? t.data : [];
                                    let l = t => t;
                                    if (i) switch (i.type) {
                                        case "packed_delta_rle":
                                            const {
                                                scale_factor: t = 1, add_offset: n = 0
                                            } = i;
                                            l = e => function(t, n, e, r) {
                                                const o = new Float32Array(r);
                                                let i = 0;
                                                for (let a = 0, u = 0; a < t.length && i < r; a++) {
                                                    const c = t[a],
                                                        l = Array.isArray(c),
                                                        s = l ? c[0] : c,
                                                        f = l ? Le(+c[1] + i, i, r) : i + 1,
                                                        h = +s;
                                                    if (null === s || h != h) {
                                                        if (!(i < f)) continue;
                                                        for (; i < f;) o[i++] = NaN;
                                                        u = 0
                                                    } else
                                                        for (; i < f;) o[i++] = (u += h) * n + e
                                                }
                                                for (; i < r;) o[i++] = NaN;
                                                return o
                                            }(e, +t, +n, a.size);
                                            break;
                                        default:
                                            throw new Error(`Unsupported encoding: ${_n(i.type)}`)
                                    }
                                    const s = new Float32Array(a.size * u.size);
                                    let f = 0;
                                    var h;
                                    c.filter(Array.isArray).forEach((t => {
                                        const n = l(t);
                                        s.set(n, f), f += n.length
                                    })), s.containsNaN = !0 === (h = r) || !1 === h ? !!h : void 0;
                                    const d = Ip(a, u),
                                        p = {
                                            valueAt: t => s[t],
                                            scalarize: t => t,
                                            isDefined: t => !isNaN(s[t]),
                                            nearest: Fp(d, s),
                                            bilinear: Cp(d, s)
                                        };
                                    return {
                                        source: _n(e),
                                        validTime: () => _p(o),
                                        grid: () => d,
                                        field: () => p,
                                        valueInRange(t) {
                                            return this.scale.valueInRange(t)
                                        }
                                    }
                                }(t)
                        },
                        unitDescriptors: Wp({
                            "%": {
                                html: kd`% Visibility Chance`,
                                convert: t => t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = Rv) && void 0 !== n ? n : Rv = Ov()
                    })
                }
            },
            pm1: {
                matchesOverlay: zm({
                    overlay_type: "pm1"
                }),
                create: function(t) {
                    var n;
                    const e = er(Jv(), jp(t.time_cursor));
                    return er(e, {
                        type: "pm1",
                        descriptionHTML: {
                            name: kd`Particulate Matter < 1 µm`,
                            qualifier: ` @ ${kd`Surface`}`
                        },
                        paths: [Zv(t, "pm1", e.alignment())],
                        builder: t => Xp(t, /pm1/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "µg/m^3": {
                                convert: t => 1e9 * t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = Kv.pmx) && void 0 !== n ? n : Kv.pmx = Gv()
                    })
                }
            },
            "pm2.5": {
                matchesOverlay: zm({
                    overlay_type: "pm2.5"
                }),
                create: function(t) {
                    var n;
                    const e = er(Jv(), jp(t.time_cursor));
                    return er(e, {
                        type: "pm2.5",
                        descriptionHTML: {
                            name: kd`Particulate Matter < 2.5 µm`,
                            qualifier: ` @ ${kd`Surface`}`
                        },
                        paths: [Zv(t, "pm2p5", e.alignment())],
                        builder: t => Xp(t, /pm2p5/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "µg/m^3": {
                                convert: t => 1e9 * t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = Kv.pmx) && void 0 !== n ? n : Kv.pmx = Gv()
                    })
                }
            },
            pm10: {
                matchesOverlay: zm({
                    overlay_type: "pm10"
                }),
                create: function(t) {
                    var n;
                    const e = er(Jv(), jp(t.time_cursor));
                    return er(e, {
                        type: "pm10",
                        descriptionHTML: {
                            name: kd`Particulate Matter < 10 µm`,
                            qualifier: ` @ ${kd`Surface`}`
                        },
                        paths: [Zv(t, "pm10", e.alignment())],
                        builder: t => Xp(t, /pm10/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            "µg/m^3": {
                                convert: t => 1e9 * t,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 140
                        },
                        scale: null !== (n = Kv.pmx) && void 0 !== n ? n : Kv.pmx = Gv()
                    })
                }
            },
            no2: {
                matchesOverlay: zm({
                    overlay_type: "no2"
                }),
                create: function(t) {
                    var n;
                    const e = er(Jv(), Op(t.time_cursor));
                    return er(e, {
                        type: "no2",
                        descriptionHTML: {
                            name: kd`Nitrogen Dioxide`,
                            qualifier: ` @ ${kd`Surface`}`
                        },
                        paths: [Zv(t, "no2", e.alignment())],
                        builder: t => Xp(t, /no2/, {
                            hasMissing: !1
                        }),
                        unitDescriptors: Wp({
                            ppbw: {
                                convert: t => 1e9 * t,
                                precision: 2
                            },
                            ppmw: {
                                convert: t => 1e6 * t,
                                precision: 2
                            },
                            "µg/m^3": {
                                convert: t => 1.225 * t * 1e9,
                                precision: 0
                            }
                        }),
                        alpha: {
                            single: 160,
                            animated: 120
                        },
                        scale: null !== (n = Kv.no2) && void 0 !== n ? n : Kv.no2 = Wv()
                    })
                }
            },
            none: {
                matchesOverlay: zm({
                    overlay_type: "none"
                }),
                create: () => {}
            }
        },
        Im = new Set(Object.keys($m));
    let Fm = 0,
        Ym = 0,
        Cm = NaN;

    function Um(t, n, e, r) {
        Pr.status("Downloading...");
        const {
            layerManagerAgent: o,
            primaryLayerAgent: i,
            overlayLayerAgent: a,
            activeLayerAgent: u
        } = t, c = "build layers #" + Fm++, l = er(n.getAll(), e.getAll());
        return Promise.all(function(t) {
            const n = Object.values($m),
                e = n.find((n => {
                    var e;
                    return null === (e = n.matchesPrimary) || void 0 === e ? void 0 : e.call(n, t)
                })),
                r = n.find((n => {
                    var r;
                    return (null === (r = n.matchesOverlay) || void 0 === r ? void 0 : r.call(n, t)) && n !== e
                }));
            return [null == e ? void 0 : e.create(t), null == r ? void 0 : r.create(t)]
        }(l)).then((t => (Ym++, console.time(c), function(t, n) {
            return Promise.all(t.map((t => function(t, n) {
                return !t || n.requested ? Promise.resolve(t) : Promise.all(t.paths.map(Od)).then((e => n.requested ? t : Object.assign(t, t.builder.apply(t, e))))
            }(t, n))))
        }(t, r).then((t => {
            var n;
            r.requested || (i.submit(t[0]), a.submit(t[1]), u.submit(null !== (n = t[1]) && void 0 !== n ? n : t[0]))
        })).catch((n => {
            var e;
            Pr.error(n), r.requested || (i.submit(t[0]), a.submit(t[1]), u.submit(null !== (e = t[1]) && void 0 !== e ? e : t[0]))
        })).finally((() => {
            Ym--, console.timeEnd(c)
        }))))).finally((() => {
            clearInterval(Cm), Cm = "current" === n.get("time_cursor") ? setInterval((() => o.submit((function() {
                return Um(t, n, e, this.cancel)
            }))), 18e5) : NaN
        }))
    }
    const Hm = [NaN, NaN],
        qm = [NaN, 0],
        Xm = [0, 0, 0, 0];

    function Bm(t, n, e, r, o, i, a) {
        const u = function(t, n, e, r, o) {
                const i = 1e-7,
                    a = e < 0 ? i : -i,
                    u = t(n + i, e),
                    c = t(n, e + a),
                    l = i * Math.cos(e * Ae);
                return [(u[0] - r) / l, (u[1] - o) / l, (c[0] - r) / a, (c[1] - o) / a]
            }(t, n, e, r, o),
            [c, l] = a;
        return a[0] = (u[0] * c + u[2] * l) * i, a[1] = (u[1] * c + u[3] * l) * i, a
    }
    let Vm = !1;

    function Wm(t, n, e, r, o) {
        var i, a;
        const {
            viewboxAgent: u,
            globeAgent: c,
            rendererAgent: l,
            primaryLayerAgent: s,
            activeLayerAgent: f,
            fastoverlayAgent: h
        } = t, d = c.value();
        if (!d || !l.value()) return null;
        const p = null !== (i = null === (a = h.value()) || void 0 === a ? void 0 : a.draw()) && void 0 !== i ? i : {
                pass: !1
            },
            v = p.pass;
        if (p.err && !Vm) {
            Vm = !0;
            const t = JSON.stringify(p);
            console.log(`fastoverlay failure: ${t}`), Lr("gl", t)
        }
        const m = s.value(),
            g = f.value(),
            y = m !== g;
        if (null == m || !m.field || null == g || !g.field) return null;
        const _ = e ? 1 : 2,
            w = m.field(),
            b = g.field(),
            x = w[r],
            M = b[r],
            T = w.scalarize,
            A = b.scalarize,
            E = function(t, n) {
                if (!t) return null;
                console.time("render mask");
                const {
                    width: e,
                    height: r
                } = n.value(), o = jt(document.createElement("canvas")).attr("width", e).attr("height", r).node(), i = t.defineMask(o.getContext("2d"));
                i.fillStyle = "rgba(255, 0, 0, 1)", i.fill();
                const a = i.createImageData(e, r),
                    u = a.data;
                return function(t, n) {
                    if (pn(t.set)) t.set(n);
                    else
                        for (let e = 0; e < n.length; e++) t[e] = n[e]
                }(u, i.getImageData(0, 0, e, r).data), console.timeEnd("render mask"), {
                    imageData: a,
                    isVisible: function(t, n) {
                        return u[4 * (n * e + t) + 3] > 0
                    },
                    set: function(t, n, r) {
                        const o = 4 * (n * e + t);
                        return u[o] = r[0], u[o + 1] = r[1], u[o + 2] = r[2], u[o + 3] = r[3], this
                    }
                }
            }(d, u);
        console.time("interpolating field");
        const {
            project: S,
            invert: N
        } = d.projection.optimize(), k = d.bounds(u.value()), {
            xMin: D,
            yMin: P,
            xMax: L,
            yMax: j,
            width: O,
            height: R
        } = k, z = m.particles.velocityScale, $ = [];
        let I = P;
        const F = g.scale,
            Y = g.alpha.animated;

        function C(t) {
            const n = t === j,
                r = new Float32Array(3 * O);
            for (let o = D, i = 0; o <= L; o += _, i += 3 * _) {
                const a = o === L;
                let u = Hm,
                    c = NaN;
                if (E.isVisible(o, t)) {
                    const [r, i] = N(o, t);
                    let l = Xm;
                    if (r == r) {
                        u = x(r, i);
                        let n = c = T(u);
                        u = n == n ? Bm(S, r, i, o, t, z, u) : qm, v || (y && (n = A(M(r, i))), n == n && (l = F.rgba(n), l[3] = Y))
                    }
                    v || (E.set(o, t, l), e || (a || (E.set(o + 1, t, l), n || E.set(o + 1, t + 1, l)), n || E.set(o, t + 1, l)))
                }
                r[i] = u[0], r[i + 1] = u[1], r[i + 2] = c, e || a || (r[i + 3] = u[0], r[i + 4] = u[1], r[i + 5] = c)
            }
            $[t] = r, e || ($[t + 1] = r)
        }
        return Pr.reset(), n.set(0), new Promise(((t, e) => {
            ! function r() {
                try {
                    if (!o.requested) {
                        const t = Date.now();
                        for (; I <= j;)
                            if (C(I), I += _, Date.now() - t > 150) return n.set((I - P + 1) / R), void setTimeout(r, 10)
                    }
                    t(function(t, n, e) {
                        const {
                            xMin: r
                        } = e, o = {
                            move: function(n, e, o, i) {
                                const a = Math.round(e);
                                if (0 <= a && a < t.length) {
                                    const u = t[a],
                                        c = 3 * (Math.round(n) - r);
                                    if (u && 0 <= c && c < u.length) return o[i] = n, o[i + 1] = e, o[i + 2] = u[c], o[i + 3] = u[c + 1], void(o[i + 4] = u[c + 2])
                                }
                                o[i] = n, o[i + 1] = e, o[i + 2] = NaN, o[i + 3] = NaN, o[i + 4] = NaN
                            },
                            isDefined: function(n, e) {
                                const o = Math.round(e);
                                if (0 <= o && o < t.length) {
                                    const e = t[o],
                                        i = 3 * (Math.round(n) - r);
                                    if (e && 0 <= i && i < e.length) return !isNaN(e[i])
                                }
                                return !1
                            },
                            isInsideBoundary: function(t, n) {
                                const e = new Float32Array(5);
                                return o.move(t, n, e, 0), !isNaN(e[3])
                            }
                        };
                        return o.overlay = null == n ? void 0 : n.imageData, o
                    }($, v ? void 0 : E, k))
                } catch (t) {
                    e(t)
                }
                n.set(1), console.timeEnd("interpolating field"), n.set(void 0)
            }()
        }))
    }

    function Gm() {
        return er({
            mode: "air",
            projection_type: "orthographic",
            orientation: void 0,
            time_cursor: "current",
            z_level: "surface",
            animation_type: "wind",
            overlay_type: "wind",
            annotation: "none",
            spotlight_coords: void 0,
            show_grid_points: !1,
            animation_enabled: !0
        })
    }
    const Km = or(me(Gm(), (() => {})));

    function Zm() {
        return er({
            show_settings: !1,
            show_date_chooser: !1
        })
    }
    Km.reset = function() {
        this.save(Gm())
    };
    const Jm = or(me(Zm(), (() => {})));
    Jm.reset = function() {
        this.save(Zm())
    };
    const Qm = "▫▫▫▫▫▫▫▫▫▫",
        tg = Qm.length;

    function ng(t) {
        const {
            type: n,
            key: e,
            ctrlKey: r,
            altKey: o,
            shiftKey: i,
            metaKey: a
        } = t, u = +t.which;
        return function(t, n, e, r, o) {
            const i = [];
            var a;
            return n && (i[0] = "Control"), e && (i[1] = "Alt"), r && (1 !== (a = t).length || a !== a.toUpperCase() || a === a.toLowerCase()) && (i[2] = "Shift"), o && (i[3] = "Meta"), "Control" !== t && "Alt" !== t && "Shift" !== t && "Meta" !== t && (i[4] = t), i.filter((t => void 0 !== t)).join("-")
        }(function(t, n, e, r) {
            if (n) {
                switch (n) {
                    case "Down":
                        return "ArrowDown";
                    case "Esc":
                        return "Escape";
                    case "Left":
                        return "ArrowLeft";
                    case "Right":
                        return "ArrowRight";
                    case "Up":
                        return "ArrowUp"
                }
                return n
            }
            switch (e) {
                case 27:
                    return "Escape";
                case 37:
                    return "ArrowLeft";
                case 38:
                    return "ArrowUp";
                case 39:
                    return "ArrowRight";
                case 40:
                    return "ArrowDown"
            }
            return "keypress" === t && r ? r : "NYI"
        }(n, e, u, String.fromCharCode(u)), r, o, i, a)
    }

    function eg(t) {
        return function(n) {
            n.defaultPrevented || n.isComposing || 229 === n.keyCode || t.call(this, ng(n), ...arguments) && Ft(n)
        }
    }

    function rg(t) {
        return null == t || t.focus(), !0
    }

    function og(t, n = {}) {
        const {
            enableUpDown: e = !1
        } = n, r = t.nodes();
        t.on(_r`keydown`, eg((function(t) {
            const n = r.indexOf(this),
                o = "rtl" === jt(this).style("direction") ? -1 : 1;
            switch (t) {
                case "Home":
                    return rg(Ye(r));
                case "ArrowLeft":
                    return rg(Ce(r, n, -o));
                case "ArrowRight":
                    return rg(Ce(r, n, o));
                case "ArrowUp":
                    return e && rg(Ce(r, n, -1));
                case "ArrowDown":
                    return e && rg(Ce(r, n, 1));
                case "End":
                    return rg(Ue(r))
            }
        })))
    }

    function ig(t) {
        var n;
        const e = t.nodes();

        function r(n) {
            Be(t, (function() {
                return n === this ? 0 : -1
            }))
        }
        r(null !== (n = Ye(e)) && void 0 !== n ? n : e[0]), t.on(_r`focus`, function(t) {
            return function() {
                return t(this, ...arguments)
            }
        }(r))
    }

    function ag(t, n) {
        const e = t.nodes();

        function r(n) {
            var r;
            let o = null !== (r = Ye(e)) && void 0 !== r ? r : e[0];
            t.each((function() {
                o = n === this.dataset.name ? this : o
            })), Be(t, (function() {
                return o === this ? 0 : -1
            }))
        }
        r(n.get()), n.on(_r`change`, r)
    }

    function ug(t, n, e) {
        t.each(zt((t => {
            const r = t.selectAll("[role=radio]");
            ! function(t, n, e) {
                function r(n) {
                    t.attr("aria-checked", (function() {
                        return n === this.dataset.name
                    }))
                }
                const o = null != e ? e : (t, e) => n.set(t, e);
                r(n.get()), n.on(_r`change`, r), t.on(_r`click`, $t((function() {
                    o(this.dataset.name, {
                        actor: this
                    })
                })))
            }(r, n, e), og(r, {
                enableUpDown: !0
            }), ag(r, n)
        })))
    }

    function cg(t, n, e) {
        ["prev2", "prev1", "next1", "next2"].forEach((r => {
            const o = t.selectAll(`[data-name=nav-${r}]`),
                i = o.selectAll("[role=tooltip]");
            o.on(_r`click`, $t((() => function(t) {
                ! function(t, n, e) {
                    var r;
                    if (Ym > 0) return void console.log("Download in progress--ignoring nav request.");
                    const o = null == n || null === (r = n[e]) || void 0 === r ? void 0 : r.call(n);
                    void 0 !== o && t.set(Mp(o))
                }(n, e.value(), t)
            }(r)))), e.on(_r`update`, (t => {
                var n, e;
                return i.text(null !== (n = null == t || null === (e = t.navLabels) || void 0 === e ? void 0 : e[r]) && void 0 !== n ? n : "")
            }))
        }))
    }

    function lg(t) {
        return setTimeout(t, 1)
    }
    const sg = function(t, n = 1) {
        let e = 0;
        return function() {
            if (0 === e) {
                const r = [...arguments];
                e = setTimeout((() => {
                    e = 0, t.apply(this, r)
                }), n)
            }
        }
    }((function(t) {
        const n = function(t) {
            return [t.scrollTop > 5 ? "up" : null, t.scrollHeight - t.clientHeight - t.scrollTop > 5 ? "down" : null].filter((t => null !== t))
        }(t);
        n.length > 0 ? t.dataset.scrollable = n.join(" ") : delete t.dataset.scrollable
    }), 100);

    function fg(t) {
        function n(t) {
            return (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        return .2126 * n(t.r) + .7152 * n(t.g) + .0722 * n(t.b)
    }

    function hg(t, n) {
        const e = fg(t) + .05,
            r = fg(n) + .05;
        return Math.max(e, r) / Math.min(e, r)
    }

    function dg(t, n) {
        var e;
        const {
            unitDescriptors: r = {}
        } = null != t ? t : {};
        return r[null !== (e = null == n ? void 0 : n[null == t ? void 0 : t.type]) && void 0 !== e ? e : Fn(Object.keys(r))]
    }

    function pg(t, n, e, r, o) {
        const i = t.select("[aria-label]"),
            a = t.select("button"),
            u = a.select("span");

        function c() {
            var a, c, l, s;
            const f = o.value(),
                h = dg(f, e.get()),
                [d = NaN, p = NaN] = null !== (a = n.get()) && void 0 !== a ? a : [],
                v = null == f || null === (c = f.field) || void 0 === c ? void 0 : c.call(f)[r.get()],
                m = null == v ? void 0 : v(d, p),
                {
                    formattedVal: g = "",
                    fullText: y = ""
                } = null !== (l = null == h ? void 0 : h.format(m)) && void 0 !== l ? l : {};
            t.property("hidden", "" === g || !h), i.attr("aria-label", y).text(g), u.html(null !== (s = null == h ? void 0 : h.html) && void 0 !== s ? s : "")
        }
        c(), e.on(_r`change`, c), n.on(_r`change`, c), o.on(_r`update`, c), a.on(_r`click`, $t((function() {
            var t;
            const n = null !== (t = o.value()) && void 0 !== t ? t : {},
                {
                    unitDescriptors: r = {}
                } = n,
                i = Object.keys(r);
            i.length > 0 && e.getAndSet(((t = {}) => {
                var e;
                const r = null !== (e = t[n.type]) && void 0 !== e ? e : Fn(i),
                    o = (i.indexOf(r) + 1) % i.length,
                    a = i[o];
                return er(t, {
                    [n.type]: a
                })
            }))
        })))
    }
    const vg = eo("#444444"),
        mg = eo("#eeeeee");

    function gg(t, n) {
        const e = t.length / 4,
            r = 4 * Le(Math.round(je(n, 0, 100, 0, e - 1)), 0, e - 1);
        return eo(t[r], t[r + 1], t[r + 2], t[r + 3] / 255)
    }

    function yg(t, n) {
        const e = Lv(null == n ? void 0 : n[0], 0),
            [r, o] = "rtl" === t.style("direction") ? [100, 0] : [0, 100];
        return Le(je(e, 0, t.node().clientWidth - 1, r, o), 0, 100)
    }

    function _g(t, n, e, r, o) {
        const i = t.select("canvas").attr("width", 500).attr("height", 1),
            a = t.select("#colorbar-cursor"),
            u = t.select("#colorbar-tt"),
            c = () => o.showTooltip(u);

        function l(t) {
            const o = Le(Lv(null != t ? t : n.get(), 0), 0, 100);
            (function(t) {
                var n, e;
                const o = null !== (n = null === (e = r.value()) || void 0 === e ? void 0 : e.scale.colors) && void 0 !== n ? n : [],
                    i = o.length > 0 ? gg(o, t) : null;
                var a;
                u.style("background", i).classed("dark-text", null !== i && hg(a = i, vg) > hg(a, mg))
            })(o),
            function(t) {
                var n, o;
                const i = r.value(),
                    a = dg(i, e.get()),
                    c = null == i || null === (n = i.valueInRange) || void 0 === n ? void 0 : n.call(i, t / 100),
                    {
                        scalarHTML: l = ""
                    } = null !== (o = null == a ? void 0 : a.format(c)) && void 0 !== o ? o : {};
                u.html(l)
            }(o)
        }! function(t, n) {
            const {
                width: e,
                height: r
            } = t, o = t.getContext("2d");

            function i(t) {
                var n;
                const i = null !== (n = null == t ? void 0 : t.scale.colors) && void 0 !== n ? n : [];
                if (Yd(o), 0 !== i.length)
                    for (let t = 0; t < e; t++) o.fillStyle = String(gg(i, je(t, 0, e - 1, 0, 100))), o.fillRect(t, 0, 1, r)
            }
            i(n.value()), n.on(_r`update`, i)
        }(i.node(), r),
        function(t, n, e, r) {
            function o(e) {
                const r = `calc(${Le(Lv(e,0),0,100).toFixed(2)}% - 2px)`,
                    [o, i] = "rtl" === t.style("direction") ? [null, r] : [r, null];
                n.style("left", o).style("right", i)
            }
            o(e.get()), e.on(_r`change`, o), t.on(_r`click`, $t((function(r) {
                const o = yg(t, Lo(r));
                e.set(o, {
                    actor: this
                }), n.node().focus()
            }))), n.on(_r`keydown`, eg((n => {
                const o = {
                    actor: this
                };

                function i(t) {
                    const n = Le(Lv(e.get(), 0) + t, 0, 100);
                    return e.set(n, o), r(), !0
                }
                const a = "rtl" === t.style("direction") ? -1 : 1;
                switch (n) {
                    case "Home":
                        return e.set(0, o), !0;
                    case "Shift-ArrowLeft":
                        return i(-.1 * a);
                    case "Shift-ArrowRight":
                        return i(.1 * a);
                    case "Shift-ArrowUp":
                        return i(.1);
                    case "Shift-ArrowDown":
                        return i(-.1);
                    case "ArrowLeft":
                        return i(-a);
                    case "ArrowRight":
                        return i(a);
                    case "ArrowUp":
                        return i(1);
                    case "ArrowDown":
                        return i(-1);
                    case "PageUp":
                        return i(10);
                    case "PageDown":
                        return i(-10);
                    case "End":
                        return e.set(100, o), !0
                }
            })))
        }(i, a, n, c), i.on(_r`mousemove`, (t => {
            l(yg(i, Lo(t))), c()
        }));
        const s = () => l();
        a.on(_r`focus`, s), n.on(_r`change`, s), e.on(_r`change`, s), r.on(_r`update`, s)
    }

    function wg() {
        return this.tabIndex >= 0
    }

    function bg(t, n, e) {
        const r = t.select(".panel"),
            o = n.handle(e);
        let i;
        t.on(_r`click`, (t => {
                "" === window.getSelection().toString() ? o.set(!1) : t.stopPropagation()
            })), r.on(_r`click`, (t => t.stopPropagation())), o.on(_r`change`, ((r, o, a) => !0 === r ? function(r = {}) {
                Object.keys(n.getAll()).forEach((t => t !== e && n.set(t, !1, {
                    modalOpening: !0
                }))), t.property("hidden", !1), Er(t).attr("inert", ""), lg((() => t.select(".modal-focus").node().focus())), i = r.actor
            }(a) : function(n = {}) {
                if (t.property("hidden", !0), Er(t).attr("inert", null), void 0 !== i && !n.modalOpening) {
                    const t = i;
                    lg((() => t.focus()))
                }
                i = void 0
            }(a))), kr(t.selectAll(".dialog-closer"), o, !1),
            function(t) {
                const n = function(t) {
                    const n = function(t) {
                        return t.selectAll(Ie).filter(wg)
                    }(t).nodes();
                    return [Fn(n), pe(n)]
                }(t);
                t.on(_r`keydown`, eg(((t, {
                    target: e
                }) => {
                    switch (t) {
                        case "Tab":
                            return e === n[1] && (n[0].focus(), !0);
                        case "Shift-Tab":
                            return e === n[0] && (n[1].focus(), !0)
                    }
                })))
            }(r)
    }

    function xg(t, n, e, r, o, i) {
        const a = {
                year: NaN,
                month: NaN,
                day: NaN,
                hour: NaN,
                minute: NaN,
                selectedDay: NaN
            },
            u = t.select("[data-name=year]").selectAll("button"),
            c = t.select("[data-name=month]").selectAll("button"),
            l = t.select("[data-name=day]").selectAll("button"),
            s = t.select("[data-name=apply]");

        function f() {
            const {
                year: t,
                month: n
            } = a, e = new Date(t, n - 1, 1).getDay(), r = new Date(t, n, 0).getDate();
            isNaN(e) || isNaN(r) || (a.day = Le(a.selectedDay, 1, r), l.each(zt(((t, n, o) => {
                const i = o - e + 1,
                    a = i < 1 || r < i ? 0 : i;
                t.text(mp(a, 2)).attr("data-name", a).attr("aria-hidden", 0 === a || null).classed("cloaked", 0 === a)
            }))), u.attr("aria-selected", (function() {
                return +this.dataset.name === a.year
            })), c.attr("aria-selected", (function() {
                return +this.dataset.name === a.month
            })), l.attr("aria-selected", (function() {
                return +this.dataset.name === a.day
            })), Be(u, (function() {
                return +this.dataset.name === a.year ? 0 : -1
            })), Be(c, (function() {
                return +this.dataset.name === a.month ? 0 : -1
            })), Be(l, (function() {
                return +this.dataset.name === a.day ? 0 : -1
            })), u.classed("modal-focus", (function() {
                return +this.dataset.name === a.year
            })))
        }
        og(u), og(c),
            function(t, n) {
                const e = t.nodes();

                function r(t) {
                    return Math.floor(t / 7)
                }
                t.on(_r`keydown`, eg((function(t) {
                    const n = e.indexOf(this),
                        o = "rtl" === jt(this).style("direction") ? -1 : 1;
                    switch (t) {
                        case "Control-Home":
                            return rg(Ye(e));
                        case "ArrowLeft":
                            return rg(Ce(e, n, -o));
                        case "ArrowRight":
                            return rg(Ce(e, n, o));
                        case "ArrowUp":
                            return rg(Ce(e, n, -7));
                        case "ArrowDown":
                            return rg(Ce(e, n, 7));
                        case "Home":
                            return rg(Ce(e, 7 * r(n) - 1, 1));
                        case "End":
                            return rg(Ce(e, 7 * (r(n) + 1), -1));
                        case "Control-End":
                            return rg(Ue(e))
                    }
                })))
            }(l), ig(u), ig(c), ig(l), u.on(_r`click`, (function() {
                a.year = +this.dataset.name, f()
            })), c.on(_r`click`, (function() {
                a.month = +this.dataset.name, f()
            })), l.on(_r`click`, (function() {
                a.day = a.selectedDay = +this.dataset.name, f()
            })), kr(s, r, (() => {
                const t = "device" === i.get(),
                    {
                        year: n,
                        month: e,
                        day: r,
                        hour: o,
                        minute: u
                    } = t ? function(t) {
                        return _p(function(t) {
                            var n, e, r, o, i, a, u;
                            const c = +(null !== (n = t.year) && void 0 !== n ? n : 0),
                                l = new Date(c, (null !== (e = t.month) && void 0 !== e ? e : 1) - 1, null !== (r = t.day) && void 0 !== r ? r : 1, null !== (o = t.hour) && void 0 !== o ? o : 0, null !== (i = t.minute) && void 0 !== i ? i : 0, null !== (a = t.second) && void 0 !== a ? a : 0, null !== (u = t.milli) && void 0 !== u ? u : 0);
                            return +l == +l && 0 <= c && c <= 99 && l.setFullYear(c), l
                        }(t))
                    }(a) : a;
                return er({
                    year: n,
                    month: e,
                    day: r,
                    hour: o,
                    minute: u
                })
            })), n.handle(e).on(_r`change`, (t => t && function() {
                var t, n, e;
                const u = null !== (t = r.get()) && void 0 !== t ? t : "current",
                    c = "current" === u ? null !== (n = null === (e = o.value()) || void 0 === e ? void 0 : e.validTime()) && void 0 !== n ? n : _p(Dp()) : u,
                    l = "device" === i.get(),
                    {
                        year: s,
                        month: h,
                        day: d,
                        hour: p,
                        minute: v
                    } = l ? xp(c) : Mp(c);
                Object.assign(a, {
                    year: s,
                    month: h,
                    day: d,
                    hour: p,
                    minute: v,
                    selectedDay: d
                }), f()
            }())), bg(t, n, e)
    }

    function Mg(t) {
        const n = {
                language: "",
                script: "",
                region: ""
            },
            e = (t || "").toLowerCase().split("-");
        for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (1 === r.length) break;
            0 === t ? n.language = r : /^[a-z]{4}$/.test(r) ? n.script = r.substring(0, 1).toUpperCase() + r.substring(1) : /^([a-z]{2}|\d{3})$/.test(r) && (n.region = r.toUpperCase())
        }
        return n
    }

    function Tg(t) {
        switch (t.language) {
            case "en":
                return "en";
            case "cs":
                return "cs";
            case "fr":
                return "fr";
            case "ja":
                return "ja";
            case "ko":
                return "ko";
            case "pt":
                return "pt";
            case "ru":
                return "ru";
            case "zh":
                switch (t.script) {
                    case "Hant":
                        return "zh-TW";
                    case "Hans":
                        return "zh-CN"
                }
                switch (t.region) {
                    case "HK":
                    case "MO":
                    case "TW":
                        return "zh-TW";
                    case "SG":
                    case "CN":
                        return "zh-CN"
                }
        }
        return ""
    }
    const Ag = "precision highp float;\n\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\n\nvarying vec2 v_TexCoord;\n\nvoid main() {\n    gl_Position = vec4(a_Position, 0.0, 1.0);\n    v_TexCoord = a_TexCoord;\n}\n";

    function Eg(t) {
        throw new Error(t)
    }

    function Sg(t) {
        var n;
        return null === (n = t.containsNaN) || void 0 === n || n ? function(t) {
            const n = new Float32Array(t.length);
            for (let e = 0; e < t.length; e++) {
                const r = t[e];
                n[e] = isNaN(r) ? 7e37 : r
            }
            return n
        }(t) : t
    }
    class Ng {
        static getWebGL(t, n) {
            let e;
            try {
                e = t.getContext("webgl", n)
            } catch (t) {}
            if (!e) try {
                e = t.getContext("experimental-webgl", n)
            } catch (t) {}
            return e || void 0
        }
        static planeVertexShader() {
            return Ag
        }
        static unitPlaneAttributes() {
            return {
                a_Position: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                a_TexCoord: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
            }
        }
        static attach(t, n = Eg) {
            const e = {
                    PACK_ALIGNMENT: 1,
                    UNPACK_ALIGNMENT: 1,
                    UNPACK_FLIP_Y_WEBGL: !1,
                    UNPACK_PREMULTIPLY_ALPHA_WEBGL: !1,
                    UNPACK_COLORSPACE_CONVERSION_WEBGL: t.BROWSER_DEFAULT_WEBGL
                },
                r = Object.keys(e),
                o = {
                    TEXTURE_MIN_FILTER: t.NEAREST,
                    TEXTURE_MAG_FILTER: t.NEAREST,
                    TEXTURE_WRAP_S: t.CLAMP_TO_EDGE,
                    TEXTURE_WRAP_T: t.CLAMP_TO_EDGE
                },
                i = Object.keys(o);

            function a(e) {
                const r = t.getError();
                r && n(`${r}:${e}`)
            }
            return new class {
                get context() {
                    return t
                }
                makePlaneVertexShader() {
                    return this.makeShader(t.VERTEX_SHADER, Ag)
                }
                unitPlaneAttributes() {
                    return {
                        a_Position: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                        a_TexCoord: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
                    }
                }
                makeShader(e, r) {
                    const o = t.createShader(e);
                    a(`createShader:${e}`), t.shaderSource(o, r), a(`shaderSource:${e}`), t.compileShader(o), a(`compileShader:${e}`);
                    const i = t.getShaderParameter(o, t.COMPILE_STATUS);
                    if (a(`getShaderParameter:${e}`), !i) {
                        const r = t.getShaderInfoLog(o);
                        return a(`getShaderInfoLog:${e}`), t.deleteShader(o), a(`deleteShader:${e}`), n(r), null
                    }
                    return o
                }
                makeProgram(e) {
                    const r = t.createProgram();
                    a("createProgram"), e.forEach((n => {
                        t.attachShader(r, n), a("attachShader")
                    })), t.linkProgram(r), a("linkProgram");
                    const o = t.getProgramParameter(r, t.LINK_STATUS);
                    if (a("getProgramParameter"), !o) {
                        const e = t.getProgramInfoLog(r);
                        return a("getProgramInfoLog"), t.deleteProgram(r), a("deleteProgram"), n(e), null
                    }
                    return r
                }
                makeFramebufferTexture2D(n) {
                    const e = t.createFramebuffer();
                    a("createFramebuffer"), t.bindFramebuffer(t.FRAMEBUFFER, e), a("bindFramebuffer"), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0), a("framebufferTexture2D");
                    const r = t.checkFramebufferStatus(t.FRAMEBUFFER);
                    return a("checkFramebufferStatus"), r !== t.FRAMEBUFFER_COMPLETE ? (t.deleteFramebuffer(e), a("deleteFramebuffer"), callback("framebuffer: " + r), null) : e
                }
                uniforms(n, e) {
                    const r = {},
                        o = t.getProgramParameter(n, t.ACTIVE_UNIFORMS);
                    return a("getProgramParameter"), _e(o).map((e => {
                        const r = t.getActiveUniform(n, e);
                        return a(`getActiveUniform:${e}`), r
                    })).filter((t => !!t)).forEach((e => {
                        const o = t.getUniformLocation(n, e.name);
                        a(`getUniformLocation:${e.name}`), r[e.name] = {
                            name: e.name,
                            type: e.type,
                            size: e.size,
                            location: o
                        }
                    })), new class {
                        decls() {
                            return r
                        }
                        set(n) {
                            return Object.keys(n).forEach((o => {
                                ! function(n, o) {
                                    const i = r[n] || {},
                                        a = i.location;
                                    switch (i.type) {
                                        case t.FLOAT:
                                            return Ee(o) ? t.uniform1fv(a, o) : t.uniform1f(a, o);
                                        case t.FLOAT_VEC2:
                                            return t.uniform2fv(a, o);
                                        case t.FLOAT_VEC3:
                                            return t.uniform3fv(a, o);
                                        case t.FLOAT_VEC4:
                                            return t.uniform4fv(a, o);
                                        case t.INT:
                                            return Ee(o) ? t.uniform1iv(a, o) : t.uniform1i(a, o);
                                        case t.INT_VEC2:
                                            return t.uniform2iv(a, o);
                                        case t.INT_VEC3:
                                            return t.uniform3iv(a, o);
                                        case t.INT_VEC4:
                                            return t.uniform4iv(a, o);
                                        case t.SAMPLER_2D: {
                                            const r = e[o];
                                            return r ? void t.uniform1i(a, r.unit) : void console.warn(`uniform '${n}' refers to unknown texture '${o}'`)
                                        }
                                        default:
                                            console.warn(`uniform '${n}' has unsupported type: ${JSON.stringify(i)}`)
                                    }
                                }(o, n[o]), a(`assign-uniform:${o}`)
                            })), this
                        }
                    }
                }
                attribs(n) {
                    const e = {},
                        r = t.getProgramParameter(n, t.ACTIVE_ATTRIBUTES);
                    return a("getProgramParameter"), _e(r).map((e => {
                        const r = t.getActiveAttrib(n, e);
                        return a(`getActiveAttrib:${e}`), r
                    })).filter((t => !!t)).forEach((r => {
                        const o = t.getAttribLocation(n, r.name);
                        a(`getAttribLocation:${r.name}`), e[r.name] = {
                            name: r.name,
                            type: r.type,
                            size: r.size,
                            location: o
                        }
                    })), new class {
                        decls() {
                            return e
                        }
                        set(n) {
                            return Object.keys(n).forEach((r => {
                                ! function(n, r) {
                                    const o = e[n] || {},
                                        i = o.location;
                                    switch (o.type) {
                                        case t.FLOAT_VEC2:
                                            const e = t.createBuffer();
                                            return a(`createBuffer:${n}`), t.bindBuffer(t.ARRAY_BUFFER, e), a(`bindBuffer:${n}`), t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), a(`bufferData:${n}`), t.enableVertexAttribArray(i), a(`enableVertexAttribArray:${n}`), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0);
                                        default:
                                            console.warn(`attribute '${n}' has unsupported type: ${JSON.stringify(o)}`)
                                    }
                                }(r, n[r]), a(`assign-attrib:${r}`)
                            })), this
                        }
                    }
                }
                makeTexture2D(n, u) {
                    const c = t.createTexture();
                    a("createTexture"), t.activeTexture(t.TEXTURE0), a("activeTexture"), t.bindTexture(t.TEXTURE_2D, c), a("bindTexture");
                    const l = Object.assign({}, e, o, n),
                        {
                            format: s,
                            type: f,
                            width: h,
                            height: d
                        } = l;
                    return r.forEach((n => {
                        t.pixelStorei(t[n], l[n]), a(`pixelStorei:${n}`)
                    })), u = f === t.FLOAT ? Sg(u) : u, t.texImage2D(t.TEXTURE_2D, 0, s, h, d, 0, s, f, u), a("texImage2D"), i.forEach((n => {
                        t.texParameteri(t.TEXTURE_2D, t[n], l[n]), a(`texParameteri:${n}`)
                    })), t.bindTexture(t.TEXTURE_2D, null), a("bindTexture"), c
                }
                updateTexture2D(n, u, c) {
                    t.activeTexture(t.TEXTURE0), a("activeTexture"), t.bindTexture(t.TEXTURE_2D, n), a("bindTexture");
                    const l = Object.assign({}, e, o, u),
                        {
                            format: s,
                            type: f,
                            width: h,
                            height: d
                        } = l;
                    return r.forEach((n => {
                        t.pixelStorei(t[n], l[n]), a(`pixelStorei:${n}`)
                    })), c = f === t.FLOAT ? Sg(c) : c, t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, h, d, s, f, c), a("texSubImage2D"), i.forEach((n => {
                        t.texParameteri(t.TEXTURE_2D, t[n], l[n]), a(`texParameteri:${n}`)
                    })), t.bindTexture(t.TEXTURE_2D, null), a("bindTexture"), n
                }
                updateTexture2DParams(n, e, r) {
                    let u = !1;
                    for (let c = 0; c < i.length; c++) {
                        const l = i[c],
                            s = o[l],
                            f = e[l] || s;
                        f !== (r[l] || s) && (u || (u = !0, t.activeTexture(t.TEXTURE0), a("activeTexture"), t.bindTexture(t.TEXTURE_2D, n), a("bindTexture")), t.texParameteri(t.TEXTURE_2D, t[l], f), a(`texParameteri:${l}`))
                    }
                    return u && (t.bindTexture(t.TEXTURE_2D, null), a("bindTexture")), u
                }
            }
        }
    }

    function kg(t, n, e, r, o) {
        const i = void 0 !== n,
            a = i ? n : t,
            u = i ? t.getContext("2d") : void 0,
            c = Ng.getWebGL(a),
            l = Ng.attach(c);
        c.getExtension("OES_texture_float"), c.getExtension("OES_texture_float_linear"), c.disable(c.DEPTH_TEST), c.clearColor(0, 0, 0, 0);
        const s = l.makeShader(c.VERTEX_SHADER, Ng.planeVertexShader()),
            f = {},
            h = _e(8).map((() => null));
        let d = 1,
            p = [],
            v = null,
            m = null,
            g = -1,
            y = -1;

        function _(t) {
            const n = c.getError();
            if (0 !== n) throw new Error(`${n}:${t}`)
        }

        function w() {
            const n = r();
            ! function(n) {
                const e = Math.round(n.width * n.pixelRatio),
                    r = Math.round(n.height * n.pixelRatio);
                e === g && r === y || (t.width = a.width = e, t.height = a.height = r, c.viewport(0, 0, e, r), g = e, y = r)
            }(n), _("fast_resize"), c.clear(c.COLOR_BUFFER_BIT), u && Yd(u), _("fast_clear");
            const w = o(l);
            if (0 === w.length) return !1;
            const b = Xn(w.map((t => t.shaderSource)));
            for (Se(p, b) || function(t) {
                    const n = "precision highp float;\nprecision highp sampler2D;\n\nconst float TAU = 6.283185307179586;\nconst float PI = 3.141592653589793;\nconst float NIL = 7e37;\n" + t.join("") + "\nuniform float u_Detail;\n\nvoid main() {\n    vec2 coord = invert(gl_FragCoord.xy / u_Detail);\n    vec2 st = grid(coord);\n    float v = lookup(st);\n    lowp vec4 color = colorize(v);\n    gl_FragColor = color;\n}\n",
                        e = l.makeShader(c.FRAGMENT_SHADER, n),
                        r = l.makeProgram([s, e]);
                    l.attribs(r).set(Ng.unitPlaneAttributes()), p = t, v = r, m = l.uniforms(r, f), c.useProgram(r)
                }(b), _("fast_program"), d = 1, w.forEach((t => {
                    (function(t = {}) {
                        return Object.keys(t).map((n => f[n] = function(t, n) {
                            const {
                                pixels: e
                            } = t = er(t);
                            if (delete t.pixels, n) {
                                const {
                                    def: r,
                                    texture: o
                                } = n;
                                if (t.hash === r.hash) return l.updateTexture2DParams(o, t, r) ? {
                                    def: t,
                                    texture: o
                                } : n;
                                if (t.width === r.width && t.height === r.height && t.format === r.format && t.type === r.type) return l.updateTexture2D(o, t, e), {
                                    def: t,
                                    texture: o
                                };
                                c.deleteTexture(o)
                            }
                            return {
                                def: t,
                                texture: l.makeTexture2D(t, e)
                            }
                        }(t[n], f[n])))
                    })(t.textures).forEach((t => {
                        const n = t.texture;
                        h[d] !== n && (h[d] = n, c.activeTexture(c.TEXTURE0 + d), c.bindTexture(c.TEXTURE_2D, n)), t.unit = d++
                    }))
                })); d < h.length;) h[d++] = null;
            return _("fast_textures"), w.forEach((t => m.set(t.uniforms))), m.set({
                u_Detail: n.pixelRatio,
                u_Alpha: e()
            }), _("fast_uniforms"), c.drawArrays(c.TRIANGLES, 0, 6), _("fast_draw"), i && u.drawImage(a, 0, 0), !0
        }
        return {
            draw() {
                try {
                    const t = w();
                    return _("fast_done"), {
                        pass: t
                    }
                } catch (t) {
                    return console.error(t), {
                        pass: !1,
                        err: t.toString()
                    }
                }
            }
        }
    }
    const Dg = Xd(150, 0, 0, 150, 150),
        Pg = Ip({
            start: 0,
            delta: 120,
            size: 3
        }, {
            start: 60,
            delta: -60,
            size: 3
        }),
        Lg = new Float32Array([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 8, 0, 6, 0, 8, 0, NaN, NaN]),
        jg = Up(Pg, Lg),
        Og = sv([0, 7], [
            [0, [255, 255, 255]],
            [1, [0, 0, 255]],
            [2, [0, 255, 0]],
            [3, [0, 255, 255]],
            [4, [255, 0, 0]],
            [5, [255, 0, 255]],
            [6, [255, 255, 0]],
            [7, [255, 255, 255]]
        ], 8);

    function Rg(t, n, e) {
        const r = new Uint8Array(4);
        return t.readPixels(n, e, 1, 1, t.RGBA, t.UNSIGNED_BYTE, r), r
    }

    function zg(t) {
        console.time("glTest");
        const n = {
            pass: !1
        };
        try {
            const e = Fd(300, 300);
            t && (jt(e).style("width", "300px").style("height", "300px").style("position", "absolute").style("top", "0").style("left", "0"), jt("#display").node().appendChild(e));
            const r = Ng.getWebGL(e);
            if (!r) return n.hasContext = !1, n;
            const o = +r.getParameter(r.MAX_TEXTURE_SIZE) || -1;
            if (o < 4096) return n.maxTexSize = o, n;
            const i = +r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision || -1;
            if (i < 23) return n.precision = i, n;
            n.scenario = 1;
            const a = kg(e, void 0, (() => 1), (() => ({
                width: 300,
                height: 300,
                pixelRatio: 1
            })), (t => [Dg.webgl(t), Pg.webgl(t), jg.webgl(t), Og.webgl(t)])).draw();
            if (a.err) return n.err = a.err, n;
            const u = [Se(Rg(r, 195, 280), [0, 0, 255, 255]), Se(Rg(r, 195, 252), [0, 255, 0, 255]), Se(Rg(r, 195, 210), [0, 255, 255, 255]), Se(Rg(r, 195, 150), [255, 0, 0, 255]), Se(Rg(r, 195, 100), [255, 0, 255, 255]), Se(Rg(r, 195, 40), [255, 255, 0, 255]), Se(Rg(r, 195, 15), [255, 255, 255, 255]), Se(Rg(r, 145, 15), [0, 0, 0, 0])];
            if (u.some((t => !1 === t))) return n.colorMatch = u, n;
            const c = r.getError();
            0 !== c ? n.err = c : n.pass = !0
        } catch (t) {
            console.error(t), n.err = t.toString()
        } finally {
            console.timeEnd("glTest")
        }
        return n
    }

    function $g(t, n, e, r, o) {
        const {
            fastoverlayAgent: i,
            globeAgent: a,
            activeLayerAgent: u,
            rendererAgent: c,
            viewboxAgent: l
        } = t, s = zg(sr("debug")), f = s.pass ? "ok" : JSON.stringify(s);
        if (console.log(`test gl: ${f}`), Lr("gl", f), !s.pass) return;

        function h() {
            return u.value()
        }

        function d(t) {
            var n, e, r;
            return null === (n = a.value()) || void 0 === n || null === (e = (r = n.projection.optimize()).webgl) || void 0 === e ? void 0 : e.call(r, t)
        }

        function p(t) {
            var n, e, r, o;
            return null === (n = h()) || void 0 === n || null === (e = n.grid) || void 0 === e || null === (r = (o = e.call(n)).webgl) || void 0 === r ? void 0 : r.call(o, t)
        }

        function v(t) {
            var n, e, r, i;
            return null === (n = h()) || void 0 === n || null === (e = n.field) || void 0 === e || null === (r = e.call(n)[o.get()]) || void 0 === r || null === (i = r.webgl) || void 0 === i ? void 0 : i.call(r, t)
        }

        function m(t) {
            var n, e, r;
            return null === (n = h()) || void 0 === n || null === (e = (r = n.scale).webgl) || void 0 === e ? void 0 : e.call(r, t)
        }
        const {
            width: g,
            height: y
        } = l.value(), _ = kg(jt("#fastoverlay").style("width", `${g}px`).style("height", `${y}px`).node(), /ipad|iphone|ipod/i.test(ar) || /macintosh/i.test(ar) && navigator.maxTouchPoints > 2 ? Fd() : void 0, (function() {
            const t = h(),
                n = r.get() ? null == t ? void 0 : t.alpha.animated : null == t ? void 0 : t.alpha.single;
            return (null != n ? n : 0) / 255
        }), (function() {
            const {
                width: t,
                height: n
            } = l.value();
            return {
                width: t,
                height: n,
                pixelRatio: e.get() ? 1 : .5
            }
        }), (function(t) {
            if ("none" === n.get() || !c.value()) return [];
            const e = [d(t), p(t), v(t), m(t)].filter((t => !!t));
            return 4 === e.length ? e : []
        }));
        n.on(_r`change`, _.draw), e.on(_r`change`, _.draw), r.on(_r`change`, _.draw), o.on(_r`change`, _.draw), a.on(_r`update`, _.draw), u.on(_r`update`, _.draw), c.on(_r`redraw render update`, _.draw), l.on(_r`update`, (t => {
            jt("#fastoverlay").style("width", `${t.width}px`).style("height", `${t.height}px`)
        })), i.submit(_)
    }

    function Ig(t) {
        return Ot(t) && !Rt(t)
    }

    function Fg(t, n, e) {
        const r = t.length;
        for (let o = n + e; 0 <= o && o < r; o += e)
            if (Ig(t[o])) return t[o]
    }

    function Yg(t) {
        return "string" == typeof t && (t = jt(t).node()), !!Ig(t) && (t.dispatchEvent(function() {
            try {
                return new MouseEvent("click", {
                    view: window,
                    bubbles: !0,
                    cancelable: !0
                })
            } catch (t) {
                const n = document.createEvent("MouseEvents");
                return n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n
            }
        }()), !0)
    }

    function Cg(t) {
        var n, e;
        const r = -(null == t || null === (n = t.rotate) || void 0 === n ? void 0 : n[0]),
            o = -(null == t || null === (e = t.rotate) || void 0 === e ? void 0 : e[1]),
            i = +(null == t ? void 0 : t.scale),
            a = `${r.toFixed(2)},${o.toFixed(2)}`,
            u = `${Math.round(i)}`;
        if (r != r || o != o) {
            if (i != i) return;
            return `,,${u}`
        }
        return i != i ? a : `${a},${u}`
    }
    const Ug = {
        air: () => ({
            overlay_type: "wind",
            animation_type: "wind"
        }),
        ocean: () => ({
            overlay_type: "significant_wave_height",
            animation_type: "primary_waves"
        }),
        chem: () => ({
            overlay_type: "co2sc",
            animation_type: "wind"
        }),
        particulates: () => ({
            overlay_type: "pm2.5",
            animation_type: "wind"
        }),
        space: () => ({
            overlay_type: "aurora",
            animation_enabled: !1
        })
    };

    function Hg(t, n, e) {
        var r, o;
        const i = t.get("mode");
        if (n === i) return;
        const a = er({
            mode: n
        }, null !== (r = null === (o = Ug[n]) || void 0 === o ? void 0 : o.call(Ug)) && void 0 !== r ? r : {});
        "space" === i && (a.animation_enabled = !0), t.save(a, e)
    }
    let qg, Xg;

    function Bg(t) {
        const [n, e, r, o] = t.blocks, i = new Array(n.length);
        for (let t = 0; t < n.length; t++) i[t] = {
            timestamp: n[t],
            coords: [e[t], r[t]],
            frp: o[t]
        };
        return i
    }

    function Vg(t) {
        const n = (t, n) => n.frp - t.frp,
            e = (t, n) => t.timestamp - n.timestamp || t.frp - n.frp,
            r = t.map(Bg).flat().sort(e),
            o = r.map((t => t.timestamp));
        return t => {
            const i = "current" === t ? Dp() : +bp(t),
                a = Zn(o, i - 576e5),
                u = Zn(o, i + 1),
                c = r.slice(a, u).map((t => {
                    const n = i - t.timestamp,
                        e = Le(je(n, 144e5, 396e5, 1, .5), .5, 1),
                        r = Le(je(n, 288e5, 576e5, 1, 0), 0, 1),
                        o = lo(es(Le(je(t.frp, 0, 50, 1, .4), .4, 1)));
                    return o.s *= e, o.opacity = r, {
                        timestamp: t.timestamp,
                        coords: t.coords,
                        frp: t.frp,
                        radius: Le(je(t.frp, 0, 50, .75, 1), .75, 1),
                        color: o.formatRgb()
                    }
                })),
                l = Array.from(c).sort(n).slice(0, 2e3).sort(e);
            return {
                timestamp: i,
                topFires: l,
                allFires: c
            }
        }
    }

    function Wg(t, n) {
        return {
            renderTo(e, r) {
                const o = t();
                if (void 0 === o || 0 === o.length) return;
                const i = n(r.projection(), o),
                    a = i.circles;
                Xg = i.closest;
                for (let t = a.length - 1; t >= 0; t--) {
                    const [n, r, o, i] = a[t];
                    e.beginPath(), e.fillStyle = i.color, e.arc(n, r, o, 0, Me), e.fill()
                }
                if (void 0 !== Xg) {
                    const [t, n, r] = Xg;
                    e.beginPath(), e.fillStyle = "white", e.arc(t, n, r, 0, Me), e.fill()
                }
            }
        }
    }

    function Gg(t, n, e) {
        const {
            rendererAgent: r,
            viewboxAgent: o,
            annotationLayerAgent: i
        } = t;
        let a;
        r.on(_r`update`, (function({
            dynamicItemsLo: t,
            dynamicItemsHi: e
        } = {}) {
            var i;
            if (!t || !e) return;
            const u = function(t, n) {
                return function(e, r) {
                    var o;
                    const {
                        width: i,
                        height: a
                    } = t.value(), u = Le(e.scale() / 1e3, 2, 5), c = e.optimize().project, l = null !== (o = n.get("spotlight_coords")) && void 0 !== o ? o : [NaN, NaN], [s, f] = c(l[0], l[1]), h = 0 <= s && s < i && 0 <= f && f < a ? [s, f] : void 0, d = [], p = new Set;
                    for (let t = r.length - 1; t >= 0; t--) {
                        const n = r[t],
                            {
                                radius: e,
                                coords: [o, l]
                            } = n,
                            [s, f] = c(o, l);
                        if (0 <= s && s < i && 0 <= f && f < a) {
                            const t = 1e7 * Math.round(2 * f) + Math.round(2 * s);
                            if (!p.has(t)) {
                                p.add(t);
                                const r = [s, f, e * u, n];
                                d.push(r)
                            }
                        }
                    }
                    return {
                        circles: d,
                        closest: function(t, n) {
                            if (void 0 !== n)
                                for (let e = t.length - 1; e >= 0; e--) {
                                    const r = t[e],
                                        [, , o] = r;
                                    if (Re(r, n) <= o) return r
                                }
                        }(d, h)
                    }
                }
            }(o, n);
            t.add(Wg((() => {
                var t;
                return null === (t = a) || void 0 === t ? void 0 : t.topFires
            }), u)), e.add(Wg((() => {
                var t;
                return null === (t = a) || void 0 === t ? void 0 : t.allFires
            }), u)), null === (i = r.value()) || void 0 === i || i.draw()
        }));
        const u = Ut((function() {
            const {
                time_cursor: t,
                annotation: o
            } = n.getAll();
            var u;
            if ("fires" !== o) return a = void 0, null === (u = r.value()) || void 0 === u || u.draw(), void i.submit(void 0);
            (function(t) {
                var n;
                const e = [`${"current"===t?"current":Ep(t,"{YYYY}")}/${"current"===t?"current":Ep(t,"{YYYY}{MM}{DD}")}-firms.epak`];
                if ("current" !== t) {
                    const n = Mp(Ap(t, {
                            day: -1
                        })),
                        r = `${Ep(n,"{YYYY}")}/${Ep(n,"{YYYY}{MM}{DD}")}-firms.epak`;
                    e.push(r)
                }
                return he(e, null === (n = qg) || void 0 === n ? void 0 : n.files) ? Promise.resolve(qg) : function(...t) {
                    return Promise.allSettled(t.map((t => Kp("data/firms", t))).map(jd)).then((t => t.filter((t => "fulfilled" === t.status)).map((t => t.value))))
                }(...e).then(Vg).then((t => qg = {
                    files: e,
                    payload: t
                }))
            })(t).then((n => {
                var o;
                a = n.payload(t), null === (o = r.value()) || void 0 === o || o.draw(), i.submit(function() {
                    function t() {
                        var t;
                        return null === (t = r.value()) || void 0 === t || t.draw(), Xg
                    }
                    return {
                        type: "fires",
                        sourceHTML: "VIIRS NRT / FIRMS / EOSDIS / NASA",
                        descriptionHTML: {
                            name: kd`Fire Detections`,
                            qualifier: ""
                        },
                        field: () => ({
                            bilinear: t,
                            nearest: t
                        }),
                        unitDescriptors: Wp({
                            MW: {
                                convert: t => t,
                                format: function(t) {
                                    const n = null == t ? void 0 : t[3];
                                    if (void 0 !== n) return {
                                        formattedVal: `${Ep("device"===e.get("display_timezone")?wp(n.timestamp):_p(n.timestamp),"{MM}-{DD} {hh}:{mm}")},   ${n.frp.toFixed(2)}`,
                                        fullText: "UNDONE"
                                    }
                                }
                            }
                        })
                    }
                }())
            })).catch(Pr.error)
        }));
        n.on(_r`change:time_cursor`, u), n.on(_r`change:annotation`, u), u()
    }
    const Kg = {
        animation_enabled: Km.handle("animation_enabled"),
        projection_type: Km.handle("projection_type"),
        orientation: Km.handle("orientation"),
        overlay_type: Km.handle("overlay_type"),
        annotation: Km.handle("annotation"),
        spotlight_coords: Km.handle("spotlight_coords"),
        z_level: Km.handle("z_level"),
        animation_type: Km.handle("animation_type"),
        mode: Km.handle("mode"),
        time_cursor: Km.handle("time_cursor"),
        display_timezone: Tr.handle("display_timezone"),
        progress: Tr.handle("progress"),
        notice: Tr.handle("notice"),
        hd_enabled: Tr.handle("hd_enabled"),
        interpolation_type: Tr.handle("interpolation_type"),
        selected_units: Tr.handle("selected_units"),
        colorbar_cursor: Tr.handle("colorbar_cursor"),
        show_menu: Tr.handle("show_menu"),
        font_size: Tr.handle("font_size")
    };

    function Zg() {
        const t = jt("html").attr("lang");
        jt("#lang-menu-modal").select(`a[lang='${t}']`).classed("selected modal-focus", !0).select((function() {
            return this.parentElement
        })).lower();
        const n = function(t) {
            const n = function(t) {
                return t.languages || [t.language || t.userLanguage || "en"]
            }(t);
            for (let t = 0; t < n.length; t++) {
                const e = Tg(Mg(n[t]));
                if (e) return e
            }
            return ""
        }(window.navigator);
        n !== t && jt(".lang-shortcuts").select(`a[lang='${n}']`).property("hidden", !1)
    }

    function Jg() {
        function t() {
            const t = jt(this),
                n = t.attr("data-link");
            return n ? `${n}${fr()?"?kiosk":""}${window.location.hash}` : t.attr("href")
        }
        Lt("a[lang]").attr("href", t), Lt("a.dyna-link").attr("href", t)
    }

    function Qg() {
        function t() {
            const t = function(t, n, e, r) {
                var o;
                const i = r(),
                    a = /^#(current|(\d{4})\/(\d{1,2})\/(\d{1,2})\/(\d{3,4})Z)\/(\w+)\/(\w+)\/(\w+)([\/].+)?/.exec(t);
                if (!a) return i;
                let u;
                return i.time_cursor = function(t) {
                    if ("current" === t[1]) return "current";
                    const n = jv(t[2]),
                        e = jv(t[3]),
                        r = jv(t[4]),
                        o = mp(t[5], 4);
                    return Mp({
                        year: n,
                        month: e,
                        day: r,
                        hour: jv(o.substr(0, 2)),
                        minute: jv(o.substr(2))
                    })
                }(a), Object.assign(i, function(t, n) {
                    const e = "wind" === t ? "air" : t;
                    switch (n) {
                        case "currents":
                            return {
                                mode: e, animation_type: "currents", z_level: "surface"
                            };
                        case "level":
                            return {
                                mode: e, animation_type: "wind", z_level: "surface"
                            };
                        case "waves":
                            return {
                                mode: e, animation_type: "primary_waves", z_level: "surface"
                            }
                    }
                    return {
                        mode: e,
                        animation_type: "wind",
                        z_level: n
                    }
                }(a[6], a[8])), i.overlay_type = i.animation_type, (null !== (o = a[9]) && void 0 !== o ? o : "").split("/").forEach((t => {
                    if (u = /^(\w+)(=([\d\-.,]*))?$/.exec(t)) {
                        if (n.has(u[1])) i.projection_type = u[1], i.orientation = function(t) {
                            var n;
                            const e = null !== (n = null == t ? void 0 : t.split(",")) && void 0 !== n ? n : [],
                                r = -jv(e[0]),
                                o = -jv(e[1]),
                                i = r == r && o == o ? [r, o] : void 0,
                                a = jv(e[2]);
                            return er({
                                rotate: i,
                                scale: a == a ? a : void 0
                            })
                        }(u[3]);
                        else if ("loc" === u[1]) {
                            const t = "string" == typeof u[3] ? u[3].split(",") : [],
                                n = jv(t[0]),
                                e = jv(t[1]);
                            n == n && e == e && (i.spotlight_coords = [n, e])
                        }
                    } else if (u = /^overlay=([\w.]+)$/.exec(t)) {
                        const t = "off" === u[1] ? "none" : u[1];
                        e.has(t) && (i.overlay_type = t)
                    } else if (u = /^annot=(\w+)$/.exec(t)) switch (u[1]) {
                        case "fires":
                            i.annotation = "fires"
                    } else(u = /^grid=(\w+)$/.exec(t)) ? "on" === u[1] && (i.show_grid_points = !0) : (u = /^anim=(\w+)$/.exec(t)) && "off" === u[1] && (i.animation_enabled = !1)
                })), i
            }(window.location.hash, vp, Im, Gm);
            Km.save(t, {
                source: "hash_read"
            }), Jg()
        }
        const n = Ut((function(t, n, e) {
            const r = function(t) {
                const {
                    mode: n,
                    projection_type: e,
                    orientation: r,
                    time_cursor: o,
                    z_level: i,
                    animation_type: a,
                    overlay_type: u,
                    annotation: c,
                    spotlight_coords: l,
                    show_grid_points: s,
                    animation_enabled: f
                } = t, h = "current" === o ? "current" : Ep(o, "{YYYY}/{MM}/{DD}/{hh}{mm}Z"), [d, p, v] = function(t, n, e) {
                    const r = "air" === t ? "wind" : t;
                    switch (n) {
                        case "currents":
                            return [r, "surface", "currents"];
                        case "primary_waves":
                            return [r, "primary", "waves"]
                    }
                    switch (e) {
                        case "surface":
                            return [r, "surface", "level"]
                    }
                    return [r, "isobaric", e]
                }(n, a, i);
                return "#" + [h, d, p, v, "none" !== (null != c ? c : "none") ? `annot=${c}` : "", f ? "" : "anim=off", u && u !== a ? `overlay=${u}` : "", s ? "grid=on" : "", [e, Cg(r)].filter((t => t)).join("="), l ? "loc=" + l.map((t => t.toFixed(3))).join(",") : ""].filter((t => t)).join("/")
            }(Km.getAll());
            window.location.hash !== r && "hash_read" !== (null == e ? void 0 : e.source) && (window.history.pushState(null, null, r), Jg())
        }));
        Km.on(_r`change`, n), jt(window).on(_r`hashchange`, t), t()
    }

    function ty() {
        const t = {
                viewboxAgent: wd("viewbox", {
                    initial: _d()
                }),
                meshAgent: wd("mesh"),
                globeAgent: wd("globe"),
                layerManagerAgent: wd("layer"),
                primaryLayerAgent: wd("primaryLayer"),
                overlayLayerAgent: wd("overlayLayer"),
                activeLayerAgent: wd("activeLayer"),
                annotationLayerAgent: wd("annotLayer"),
                rendererAgent: wd("renderer", {
                    events: ["start", "render", "redraw"]
                }),
                fieldAgent: wd("field"),
                fastoverlayAgent: wd("fastoverlay"),
                animatorAgent: wd("animator"),
                overlayAgent: wd("overlay"),
                overlayGridAgent: wd("overlayGrid")
            },
            {
                viewboxAgent: e,
                primaryLayerAgent: r,
                overlayLayerAgent: o,
                activeLayerAgent: i,
                annotationLayerAgent: a
            } = t,
            u = function(t, n) {
                const e = nr("moveStart", "move", "moveEnd", "click");
                let r, o = null,
                    i = {
                        time: 0,
                        mouse: [0, 0]
                    },
                    a = !1;

                function u(t, n) {
                    return {
                        type: "click",
                        startMouse: t,
                        startScale: n,
                        manipulator: r.manipulator(t, n)
                    }
                }

                function c(t) {
                    var n, e;
                    o = null !== (n = o) && void 0 !== n ? n : u(null !== (e = rs(t)[0]) && void 0 !== e ? e : [NaN, NaN], r.projection.scale())
                }

                function l(t) {
                    var n, i, a, c;
                    const l = null !== (n = t.transform) && void 0 !== n ? n : {},
                        s = null !== (i = rs(t)[0]) && void 0 !== i ? i : [NaN, NaN],
                        f = null !== (a = l.k) && void 0 !== a ? a : r.projection.scale();
                    if (o = null !== (c = o) && void 0 !== c ? c : u(s, 1), "click" === o.type) {
                        const t = Re(s, o.startMouse);
                        if (f === o.startScale && (t < 6 || isNaN(t))) return;
                        e.call("moveStart"), o.type = "drag"
                    }(f !== o.startScale || isNaN(s[0])) && (o.type = "zoom"), o.manipulator.move("zoom" === o.type ? null : s, f), e.call("move")
                }

                function s() {
                    null !== o && (o.manipulator.end(), "click" === o.type ? Date.now() - i.time < 500 && Re(i.mouse, o.startMouse) < 6 || a || (e.call("click", null, o.startMouse, r.projection.invert(o.startMouse) || []), i = {
                        time: Date.now(),
                        mouse: o.startMouse
                    }) : h(), o = null)
                }
                let f = null;

                function h() {
                    f && clearTimeout(f), f = setTimeout((() => {
                        f = null, (!o || "drag" !== o.type && "zoom" !== o.type) && (t.set(r.getOrientation(), {
                            source: "moveEnd"
                        }), e.call("moveEnd"))
                    }), 750)
                }
                const d = jf().on("start", c).on("zoom", l).on("end", s),
                    p = Ho().on("start", c).on("drag", l).on("end", s),
                    v = jt("#display");

                function m(o) {
                    if (!r || "moveEnd" === (null == o ? void 0 : o.source)) return;
                    const i = a;
                    a = !0;
                    try {
                        e.call("moveStart"), r.setOrientation(t.get(), n.value()), d.transform(v, Tf.scale(r.projection.scale())), e.call("moveEnd")
                    } finally {
                        a = i
                    }
                }
                return hr() ? v.call(p) : v.call(d).on(_r`wheel`, (t => t.preventDefault())), t.on(_r`change`, ((t, n, e) => m(e))), Object.assign(e, {
                    globe(t) {
                        return t && (r = t, d.scaleExtent(r.scaleExtent()), m()), t ? this : r
                    },
                    cancelMove() {
                        s()
                    },
                    hotkey: function(t, n) {
                        if ("zoom" === t) return d.scaleBy(v, n), !0;
                        f || e.call("moveStart");
                        const o = r.projection,
                            i = o.rotate(),
                            a = n / 8;
                        switch (t) {
                            case "left":
                                o.rotate([i[0] + a, i[1]]);
                                break;
                            case "right":
                                o.rotate([i[0] - a, i[1]]);
                                break;
                            case "up":
                                o.rotate([i[0], i[1] - a]);
                                break;
                            case "down":
                                o.rotate([i[0], i[1] + a])
                        }
                        return e.call("move"), h(), !0
                    }
                })
            }(Kg.orientation, e);
        return function() {
            console.time("init"), Pr.status("Initializing..."), Zg(), fr() && Lt(".kiosk").property("hidden", !0),
                function(t) {
                    jt(window).on(_r`resize`, Ut((function() {
                        const n = _d();
                        he(n, t.value()) || t.submit(n)
                    }), 2e3))
                }(e),
                function(t) {
                    function n() {
                        var n;
                        const {
                            width: e,
                            height: r
                        } = t.value(), o = null !== (n = window.devicePixelRatio) && void 0 !== n ? n : 1;
                        Lt(".fill-screen").attr("width", e).attr("height", r), Lt(".max-screen").style("width", `${e}px`).style("height", `${r}px`).attr("width", e * o).attr("height", r * o).nodes().forEach((t => t.getContext("2d").scale(o, o)))
                    }
                    n(), t.on(_r`update`, n)
                }(e),
                function(t) {
                    const n = t.node(),
                        e = () => sg(n);
                    t.on(_r`scroll`, e), window.ResizeObserver ? new ResizeObserver(e).observe(n) : (new MutationObserver(e).observe(n, {
                        attributes: !0,
                        attributeFilter: ["hidden"],
                        childList: !0,
                        subtree: !0
                    }), jt(window).on(_r`resize`, e))
                }(jt("#menu"));
            const n = function(t) {
                const n = function(t) {
                    const n = new Set(t.nodes().map((t => t.id)));
                    return Lt("[aria-labelledby]").filter((function() {
                        const t = jt(this),
                            e = t.attr("aria-labelledby").split(/\s+/);
                        for (let r = 0; r < e.length; r++) {
                            const o = e[r];
                            if (n.has(o)) return this.dataset.tooltip = o, t.attr("title", jt(`#${o}`).text().trim()), !0
                        }
                    }))
                }(t);
                let e;

                function r(n) {
                    clearTimeout(e), e = function(t, n) {
                        return void 0 !== n ? setTimeout(t, n) : void t()
                    }((() => t.classed("show", !1)), n)
                }

                function o(n) {
                    clearTimeout(e), t.classed("show", !1), n.classed("show", !!n.text())
                }

                function i() {
                    o(jt(`#${this.dataset.tooltip}`))
                }
                return t.on(_r`click`, (t => {
                    r(), Ft(t)
                })), n.on(_r`focus`, i).on(_r`blur`, (() => r(1))), window.matchMedia("(hover: hover)").matches ? n.on(_r`mouseenter`, i).on(_r`mouseleave`, (() => r(250))) : n.filter(zt((t => !t.classed("no-touch-tt")))).on(_r`click`, i).on(_r`mouseleave`, (() => r(1))), {
                    hideTooltip: () => t.filter(zt((t => t.classed("show")))).classed("show", !1).nodes().length > 0,
                    showTooltip: o
                }
            }(Lt("[role=tooltip]"));
            (function() {
                const t = Lt("[data-name=earth]");
                hr() ? t.on(_r`click`, (function() {
                    window.open(window.location, "_blank")
                })) : function(t, n) {
                    const e = Ar(t.nodes());

                    function r(n) {
                        t.attr("aria-expanded", !0 === n), e.property("hidden", !0 !== n)
                    }
                    r(n.get()), n.on(_r`change`, r), t.on(_r`click`, $t((function() {
                        n.toggle({
                            actor: this
                        })
                    })))
                }(t, Kg.show_menu), fr() || Lt("[data-name=earth]").on(_r`click`, (() => Lt(".ham").property("hidden", !0)))
            })(),
            function(t, n) {
                const e = t.select("button");
                Lt(".cta-content").select("a").attr("target", lr() ? "_new" : null).on(_r`click`, (() => Lr("cta", "click"))).on(_r`contextmenu`, (() => Lr("cta", "right-click"))), n.on(_r`change`, (function() {
                    t.property("hidden", !n.get() || fr())
                })), kr(e, n, !1)
            }(Lt(".cta-bar"), Tr.handle("show_cta")),
            function(t, n) {
                n.on(_r`change`, (n => {
                    n = Le(+n, 0, 1), t.property("hidden", n != n), t.attr("aria-valuenow", n == n ? n : null);
                    const e = Math.floor(n * tg);
                    t.text("▪▪▪▪▪▪▪▪▪▪".substr(0, e) + Qm.substr(0, tg - e))
                }))
            }(Lt("[role=progressbar]"), Kg.progress),
            function(t, n, e) {
                const {
                    primaryLayerAgent: r,
                    activeLayerAgent: o,
                    annotationLayerAgent: i
                } = e;
                ! function(t, n, e) {
                    const r = t.select("[data-name=date-field]"),
                        o = t.select("#change-tz"),
                        i = o.selectAll("[data-tz]").nodes();

                    function a() {
                        var t;
                        const o = e.value(),
                            a = null == o ? void 0 : o.validTime(),
                            u = null == o ? void 0 : o.dateFormat(),
                            c = null !== (t = n.get("display_timezone")) && void 0 !== t ? t : "device",
                            l = i.filter((t => t.dataset.tz === c))[0],
                            s = l ? jt(l).text() : "";
                        r.text(function(t, n, e, r) {
                            return t && n && r ? Ep("device" === e ? xp(t) : t, n).replace("{TZ}", r) : kd`N/A`
                        }(a, u, c, s))
                    }
                    o.on(_r`click`, $t((() => {
                        const t = i.map((t => t.hidden)).indexOf(!1);
                        n.set("display_timezone", i[t].dataset.tz)
                    }))), n.on(_r`change:display_timezone`, (t => {
                        const n = (i.map((t => t.dataset.tz)).indexOf(t) + 1) % i.length;
                        i.forEach(((t, e) => t.hidden = e !== n)), a()
                    })), e.on(_r`update`, a)
                }(t.selectAll("[data-name=date]"), n, o);
                const a = t.selectAll("[data-name=description]"),
                    u = t.selectAll("[data-name=source]"),
                    c = Ut((function() {
                        var t, n, e, c, l, s, f;
                        const h = r.value(),
                            d = o.value(),
                            p = null !== (t = null == h ? void 0 : h.descriptionHTML.name) && void 0 !== t ? t : "",
                            v = null !== (n = null == h ? void 0 : h.descriptionHTML.qualifier) && void 0 !== n ? n : "",
                            m = null !== (e = null == d ? void 0 : d.descriptionHTML.name) && void 0 !== e ? e : "",
                            g = null !== (c = null == d ? void 0 : d.descriptionHTML.qualifier) && void 0 !== c ? c : "",
                            y = i.value(),
                            _ = null !== (l = null == y ? void 0 : y.descriptionHTML.name) && void 0 !== l ? l : "";
                        let w = m + g;
                        w && h !== d && (w = v === g ? `${p} + ${w}` : `${p+v} + ${w}`), _ && (w += ` + ${_}`), a.html(w);
                        const b = [null !== (s = null == d ? void 0 : d.sourceHTML) && void 0 !== s ? s : "", null !== (f = null == y ? void 0 : y.sourceHTML) && void 0 !== f ? f : ""];
                        u.html(b.filter((t => t)).join(" + "))
                    }));
                r.on(_r`update`, c), o.on(_r`update`, c), i.on(_r`update`, c)
            }(jt("#menu"), Tr, t), _g(jt(".colorbar"), Kg.colorbar_cursor, Kg.selected_units, i, n), ug(Lt("[role=radiogroup][data-name=projection_type]"), Kg.projection_type), ug(Lt("[role=radiogroup][data-name=overlay_type]"), Kg.overlay_type, ((t, n) => {
                    const e = {
                        overlay_type: t
                    };
                    "wind_power_density" === t && "surface" === Kg.z_level.get() && (e.z_level = "1000hPa"), Km.save(e, n)
                })), ug(Lt("[role=radiogroup][data-name=annotation]"), Kg.annotation), ug(Lt("[role=radiogroup][data-name=z_level]"), Kg.z_level),
                function(t) {
                    const {
                        primaryLayerAgent: n,
                        overlayLayerAgent: e
                    } = t, r = jt("[data-name=z_level]").selectAll("button"), o = Ut((function() {
                        var t, o, i;
                        const a = null === (t = n.value()) || void 0 === t ? void 0 : t.supported_z_levels,
                            u = null === (o = e.value()) || void 0 === o ? void 0 : o.supported_z_levels,
                            c = new Set(a && u ? re(a, u) : null !== (i = null != a ? a : u) && void 0 !== i ? i : []);
                        r.attr("aria-disabled", (function() {
                            return !c.has(this.dataset.name)
                        }))
                    }));
                    n.on(_r`update`, o), e.on(_r`update`, o)
                }(t), ug(Lt("[role=radiogroup][data-name=animation_type]"), Kg.animation_type),
                function(t, n, e) {
                    t.each(zt((t => {
                        const r = t.selectAll("[role=tab]");
                        ! function(t, n, e) {
                            const r = me(Wn(t.nodes(), (t => t.dataset.name)), Ar);

                            function o(n) {
                                t.attr("aria-selected", (function() {
                                    return n === this.dataset.name
                                })), Object.entries(r).forEach((([t, e]) => e.property("hidden", n !== t)))
                            }
                            const i = null != e ? e : (t, e) => n.set(t, e);
                            o(n.get()), n.on(_r`change`, o), t.on(_r`click`, $t((function() {
                                i(this.dataset.name, {
                                    actor: this
                                })
                            })))
                        }(r, n, e), og(r, {
                            enableUpDown: !1
                        }), ag(r, n)
                    })))
                }(Lt("[role=tablist][data-name=mode]"), Kg.mode, Hg.bind(null, Km)), ug(Lt("[role=radiogroup][data-name=projection_type]"), Kg.projection_type, ((t, n) => Km.save({
                    projection_type: t,
                    orientation: void 0
                }, n))), Lt("[role=toolbar]").each(zt((t => {
                    const n = t.selectAll("button, a");
                    og(n, {
                        enableUpDown: !0
                    }), ig(n)
                }))), Nr(Lt("[data-name=nav-now]"), Km, {
                    time_cursor: "current"
                }), Nr(Lt("[data-name=show-date-chooser]"), Jm, {
                    show_date_chooser: !0
                }), cg(Lt("#nav-arrows"), Kg.time_cursor, i), Dr(Lt("[data-name=toggle-grid]"), Km.handle("show_grid_points")), Dr(Lt("[data-name=toggle-animation]"), Km.handle("animation_enabled")), Dr(Lt("[data-name=toggle-hd]"), Tr.handle("hd_enabled")),
                function(t, n) {
                    Sr(t, (function() {
                        if (!navigator.geolocation) return void Pr.status(kd`Finding current position is not supported`);
                        Pr.status(kd`Finding current position...`);
                        const t = this;
                        new Promise(((t, n) => navigator.geolocation.getCurrentPosition(t, n))).then((function({
                            coords: e
                        }) {
                            const r = +e.longitude,
                                o = +e.latitude;
                            if (r == r && o == o) {
                                var i;
                                const e = er(null !== (i = n.get("orientation")) && void 0 !== i ? i : {}, {
                                    rotate: [-r, -o]
                                });
                                n.save({
                                    spotlight_coords: [r, o],
                                    orientation: e
                                }, {
                                    actor: t
                                })
                            }
                            Pr.reset()
                        })).catch(Pr.error)
                    }))
                }(Lt("[data-name=show-current-position]"), Km), Nr(Lt("[data-name=show-settings]"), Jm, {
                    show_settings: !fr()
                }),
                function(t, n) {
                    const e = t.select(".field"),
                        r = t.select("button");
                    n.on(_r`change`, (function() {
                        const r = n.get();
                        t.property("hidden", "" === (null != r ? r : "")), e.text(r)
                    })), r.on(_r`click`, (() => n.set(void 0)))
                }(Lt("[data-name=notice-card]"), Kg.notice),
                function(t, n) {
                    const e = t.select("[data-name=spotlight-coords]");

                    function r(n) {
                        t.property("hidden", void 0 === n), e.text(function(t, n = 2) {
                            const e = De(+(null == t ? void 0 : t[0]) + 180, 360) - 180,
                                r = +(null == t ? void 0 : t[1]);
                            return e == e && r == r ? `${Math.abs(r).toFixed(n)}° ${r>=0?"N":"S"}, ${Math.abs(e).toFixed(n)}° ${e>=0?"E":"W"}` : void 0
                        }(n))
                    }
                    r(n.get()), n.on(_r`change`, r), kr(t.selectAll("[data-name=hide-spotlight]"), n, (() => {}))
                }(jt("#spotlight-panel"), Kg.spotlight_coords), pg(jt("[data-name=spotlight-a]"), Kg.spotlight_coords, Kg.selected_units, Kg.interpolation_type, r), pg(jt("[data-name=spotlight-b]"), Kg.spotlight_coords, Kg.selected_units, Kg.interpolation_type, o), pg(jt("[data-name=spotlight-c]"), Kg.spotlight_coords, Kg.selected_units, Kg.interpolation_type, a),
                function(t, n, e, r) {
                    const {
                        globeAgent: o,
                        fieldAgent: i
                    } = n;

                    function a() {
                        var n;
                        const r = o.value(),
                            [i, a] = null !== (n = e.get()) && void 0 !== n ? n : [NaN, NaN];
                        if (!r || i != i || a != a) return void t.select(".location-mark").remove();
                        const u = hu().projection(r.projection).pointRadius(7);
                        let c = t.select(".location-mark");
                        c.node() || (c = t.append("path").classed("location-mark", !0)), c.datum({
                            type: "Point",
                            coordinates: [i, a]
                        }).attr("d", u)
                    }
                    e.on(_r`change`, a), o.on(_r`update`, a), r.on(_r`click`, (function(t) {
                        var n;
                        const r = o.value(),
                            a = i.value(),
                            u = +(null == t ? void 0 : t[0]),
                            c = +(null == t ? void 0 : t[1]);
                        if (!r || !a || u != u || c != c || !a.isInsideBoundary(u, c)) return;
                        const l = null !== (n = r.projection.invert([u, c])) && void 0 !== n ? n : [],
                            s = +l[0],
                            f = +l[1];
                        s == s && f == f && e.set([s, f])
                    }))
                }(jt("#annotation"), t, Kg.spotlight_coords, u), bg(jt("#lang-menu-modal"), Jm, "show_settings"), xg(jt("#choose-date-modal"), Jm, "show_date_chooser", Kg.time_cursor, i, Kg.display_timezone), ug(jt("[data-name=interpolation-type]"), Kg.interpolation_type), ug(jt("[data-name=font-size]"), Kg.font_size), Kg.font_size.on(_r`change`, (t => jt("html").attr("data-font-size", null != t ? t : null))),
                function(t, n, e, r, o) {
                    const i = jt("[data-name=z_level]").selectAll("button").nodes();

                    function a() {
                        const {
                            mode: n,
                            z_level: e
                        } = t.getAll(), r = "air" === n ? zn(i, (t => t.dataset.name === e)) : NaN;
                        return r < 0 ? NaN : r
                    }
                    jt("body").on(_r`keydown`, eg((function(o) {
                        switch (o) {
                            case "Escape":
                                return e.save({
                                    show_date_chooser: !1,
                                    show_settings: !1
                                }) || r.hideTooltip() || n.save({
                                    notice: void 0
                                }) || n.save({
                                    status: void 0,
                                    error: void 0
                                }) || t.save({
                                    spotlight_coords: void 0
                                }) || n.save({
                                    show_menu: !1
                                }) || n.save({
                                    show_cta: !1
                                });
                            case "Alt-Ø":
                            case "Alt-O":
                                return function() {
                                    const t = jt("html"),
                                        n = t.property("dir");
                                    return t.property("dir", "ltr" === n ? "rtl" : "ltr"), !0
                                }();
                            case "Alt-Shift-˝":
                            case "Alt-G":
                                return function() {
                                    const t = jt("html"),
                                        n = t.classed("a11y-tests-grayscale");
                                    return t.classed("a11y-tests-grayscale", !n), !0
                                }();
                            case "Alt-Shift-˛":
                            case "Alt-X":
                                return localStorage.clear(), t.reset(), n.reset(), e.reset(), !0
                        }
                    }))).on(_r`keypress`, eg((function(t) {
                        switch (t) {
                            case "e":
                                return Yg("[data-name=earth]");
                            case "I":
                                return Yg((n = i)[$n(n, Ig)]);
                            case "i":
                                return Yg(Fg(i, a(), 1));
                            case "m":
                                return Yg(Fg(i, a(), -1));
                            case "M":
                                return Yg(function(t) {
                                    return t[zn(t, Ig)]
                                }(i));
                            case "n":
                                return Yg("[data-name=nav-now]");
                            case "C":
                                return Yg("[data-name=show-date-chooser]");
                            case "J":
                                return Yg("[data-name=nav-prev2]");
                            case "j":
                                return Yg("[data-name=nav-prev1]");
                            case "k":
                                return Yg("[data-name=nav-next1]");
                            case "K":
                                return Yg("[data-name=nav-next2]");
                            case "g":
                                return Yg("[data-name=toggle-grid]");
                            case "p":
                                return Yg("[data-name=toggle-animation]");
                            case "H":
                                return Yg("[data-name=toggle-hd]");
                            case "d":
                                return o.hotkey("zoom", 1.003);
                            case "D":
                                return o.hotkey("zoom", 1.05);
                            case "x":
                                return o.hotkey("zoom", .997);
                            case "X":
                                return o.hotkey("zoom", .95);
                            case "z":
                                return o.hotkey("up", 1);
                            case "Z":
                                return o.hotkey("up", 8);
                            case "w":
                                return o.hotkey("down", 1);
                            case "W":
                                return o.hotkey("down", 8);
                            case "s":
                                return o.hotkey("left", 1);
                            case "S":
                                return o.hotkey("left", 8);
                            case "a":
                                return o.hotkey("right", 1);
                            case "A":
                                return o.hotkey("right", 8);
                            case "T":
                                return Yg("[data-name=show-settings]")
                        }
                        var n
                    })))
                }(Km, Tr, Jm, n, u),
                function(t, n, e) {
                    const {
                        globeAgent: r,
                        viewboxAgent: o
                    } = t;

                    function i(t, n) {
                        null == t || t.setOrientation(n, o.value())
                    }

                    function a(t) {
                        var n;
                        const a = null === (n = pp[t]) || void 0 === n ? void 0 : n.call(pp, o.value());
                        i(a, e.get()), r.submit(null != a ? a : Promise.reject(`Unknown projection: ${t}`))
                    }
                    n.on(_r`change`, a), e.on(_r`change`, (t => i(r.value(), t))), o.on(_r`update`, (() => a(n.get())))
                }(t, Kg.projection_type, Kg.orientation),
                function(t, n) {
                    const {
                        meshAgent: e
                    } = t;
                    n.on(_r`change`, (function(t) {
                        e.submit((function() {
                            return function(t, n) {
                                Pr.status("Downloading...");
                                const e = [];
                                return e.push(Pd(t)), Promise.all(e).then((([t]) => {
                                    if (n.requested) return null;
                                    console.time("building meshes");
                                    const e = t.objects,
                                        r = zd(t, Id ? e.coastline_tiny : e.coastline_110m),
                                        o = zd(t, Id ? e.coastline_110m : e.coastline_50m),
                                        i = zd(t, Id ? e.lakes_tiny : e.lakes_110m),
                                        a = zd(t, Id ? e.lakes_110m : e.lakes_50m),
                                        u = zd(t, Id ? e.rivers_tiny : e.rivers_110m),
                                        c = zd(t, Id ? e.rivers_110m : e.rivers_50m);
                                    return console.timeEnd("building meshes"), {
                                        coastLo: r,
                                        coastHi: o,
                                        lakesLo: i,
                                        lakesHi: a,
                                        riversLo: u,
                                        riversHi: c
                                    }
                                }))
                            }(t, this.cancel)
                        }))
                    }))
                }(t, Tr.handle("topology_url")),
                function(t, n, e) {
                    const {
                        rendererAgent: r,
                        globeAgent: o,
                        meshAgent: i
                    } = t;

                    function a() {
                        r.submit((() => function(t, n, e) {
                            const {
                                rendererAgent: r,
                                viewboxAgent: o,
                                globeAgent: i,
                                meshAgent: a
                            } = t, u = i.value(), c = a.value();
                            if (!u || !c) return;
                            Pr.status("Rendering Globe..."), console.time("rendering map");
                            const l = jt("#map").node().getContext("2d"),
                                s = jt("#foreground").node().getContext("2d"),
                                f = jt("#annotation");
                            u.setOrientation(e.get(), o.value());
                            const h = hu().projection(u.projection).pointRadius((t => {
                                var n;
                                return null !== (n = t.size) && void 0 !== n ? n : 7
                            }));
                            let d = be((function t() {
                                f.selectAll("path").attr("d", h), D(!1), r.call("redraw"), d = be(t, 5, {
                                    leading: !1
                                })
                            }), 5, {
                                leading: !1
                            });
                            const p = 1.25,
                                v = {
                                    strokeStyle: "rgba(250,250,250,0.65)",
                                    lineWidth: p
                                },
                                m = {
                                    strokeStyle: "rgba(250,250,250,0.65)",
                                    lineWidth: p
                                },
                                g = {
                                    strokeStyle: "rgba(220,220,220,0.3)",
                                    lineWidth: p
                                },
                                y = u.backgroundRenderer(),
                                _ = u.graticuleRenderer(),
                                w = u.preForegroundRenderer(),
                                b = u.postForegroundRenderer(),
                                x = [Ud(c.riversLo, g), Ud(c.lakesLo, m), Ud(c.coastLo, v)],
                                M = [Ud(c.riversHi, g), Ud(c.lakesHi, m), Ud(c.coastHi, v)],
                                T = Hd(),
                                A = Hd(),
                                E = qd([y]),
                                S = qd([y]),
                                N = qd([w, _, ...x, T, b]),
                                k = qd([w, _, ...M, A, b]);

                            function D(t) {
                                const n = t ? k : N;
                                (t ? S : E).renderTo(l, h), n.renderTo(s, h), h.context(null)
                            }
                            return n.on("moveStart.renderer", (() => {
                                r.call("start")
                            })), n.on("move.renderer", (() => {
                                d()
                            })), n.on("moveEnd.renderer", (() => {
                                f.selectAll("path").attr("d", h), D(!0), r.call("render")
                            })), Promise.resolve().then((() => {
                                n.globe(u)
                            })).catch(Pr.error), console.timeEnd("rendering map"), {
                                dynamicItemsLo: T,
                                dynamicItemsHi: A,
                                draw() {
                                    f.selectAll("path").attr("d", h), D(!0)
                                }
                            }
                        }(t, n, e)))
                    }
                    o.on(_r`update`, a), i.on(_r`update`, a)
                }(t, u, Kg.orientation),
                function(t, n, e) {
                    const {
                        layerManagerAgent: r
                    } = t;

                    function o() {
                        r.submit((function() {
                            return Um(t, n, e, this.cancel)
                        }))
                    }
                    n.on(_r`change:time_cursor change:z_level change:animation_type change:overlay_type`, o), e.on(_r`change:hd_enabled`, o)
                }(t, Km, Tr), $g(t, Kg.overlay_type, Kg.hd_enabled, Kg.animation_enabled, Kg.interpolation_type),
                function(t, n, e, r) {
                    const {
                        fieldAgent: o,
                        rendererAgent: i,
                        primaryLayerAgent: a,
                        activeLayerAgent: u
                    } = t;

                    function c() {
                        o.submit((function() {
                            return Wm(t, n, e.get(), r.get(), this.cancel)
                        }))
                    }
                    i.on(_r`render`, c), a.on(_r`update`, c), u.on(_r`update`, c), r.on(_r`change`, c), i.on(_r`start redraw`, (() => o.cancel()))
                }(t, Kg.progress, Kg.hd_enabled, Kg.interpolation_type),
                function(t, n) {
                    const {
                        overlayAgent: e,
                        overlayGridAgent: r,
                        rendererAgent: o,
                        fieldAgent: i
                    } = t;

                    function a(r, o) {
                        e.submit((() => function(t, n, e, r) {
                            const {
                                overlayGridAgent: o,
                                rendererAgent: i,
                                activeLayerAgent: a,
                                fieldAgent: u
                            } = t, c = u.value();
                            if (!c || !i.value()) return;
                            const l = jt("#overlay").node().getContext("2d"),
                                s = a.value(),
                                {
                                    overlay: f
                                } = c;
                            if (Yd(l), "none" !== (null != n ? n : "none")) {
                                if (void 0 !== f) {
                                    const t = e ? s.alpha.animated : s.alpha.single;
                                    ! function(t, n) {
                                        for (let e = 3; e < t.length; e += 4) 0 !== t[e] && (t[e] = n)
                                    }(f.data, t), l.putImageData(f, 0, 0)
                                }
                                r ? o.submit((function() {
                                    return function(t, n, e) {
                                        const {
                                            viewboxAgent: r,
                                            globeAgent: o,
                                            activeLayerAgent: i
                                        } = t, a = o.value(), u = i.value();
                                        if (!a || !u) return;
                                        n.fillStyle = "rgba(255, 255, 255, 0.75)";
                                        const {
                                            width: c,
                                            height: l
                                        } = r.value(), s = a.projection.stream({
                                            point(t, e) {
                                                0 <= t && t < c && 0 <= e && e < l && n.fillRect(Math.round(t), Math.round(e), 1, 1)
                                            }
                                        }), f = u.grid(), {
                                            isDefined: h
                                        } = u.field();
                                        let d = 0;
                                        ! function t() {
                                            if (!e.requested) {
                                                const n = Date.now() + 40;
                                                d = f.forEach(((t, e, r) => (h(r) && (t = De(180 + t, 360) - 180, s.point(t, e)), Date.now() > n)), d), d == d && setTimeout(t, 10)
                                            }
                                        }()
                                    }(t, l, this.cancel)
                                })) : o.cancel()
                            }
                        }(t, r, o, n.get("show_grid_points"))))
                    }
                    i.on(_r`update`, (() => {
                        a(n.get("overlay_type"), n.get("animation_enabled"))
                    })), n.on(_r`change:overlay_type change:animation_enabled change:show_grid_points`, (() => {
                        a(n.get("overlay_type"), n.get("animation_enabled"))
                    })), o.on(_r`start`, (() => {
                        Cd(jt("#overlay").node()), a(null, null)
                    })), o.on(_r`start redraw`, (() => r.cancel()))
                }(t, Km),
                function(t, n) {
                    const {
                        animatorAgent: e,
                        rendererAgent: r,
                        fieldAgent: o
                    } = t;

                    function i() {
                        e.submit((function() {
                            return function(t, n, e) {
                                const {
                                    viewboxAgent: r,
                                    globeAgent: o,
                                    primaryLayerAgent: i,
                                    fieldAgent: a
                                } = t, u = o.value(), c = i.value(), l = a.value();
                                if (!(u && c && l && n.get())) return !1;
                                Cd(jt("#animation").node());
                                const s = u.bounds(r.value()),
                                    {
                                        xMin: f,
                                        yMin: h,
                                        width: d,
                                        height: p
                                    } = s,
                                    v = function(t, n) {
                                        const e = [];
                                        for (let t = 85; t <= 255; t += 10) e.push(`rgb(${t},${t},${t})`);
                                        return e.indexFor = function(t) {
                                            return Math.floor(Math.min(t, n) / n * (e.length - 1))
                                        }, e
                                    }(0, c.particles.maxIntensity);
                                let m = Math.round(7 * d);
                                pr() && (m = Math.floor(.75 * m)), console.log(`particle count: ${m}`);
                                const g = new Float32Array(5 * m),
                                    y = new Int32Array(m),
                                    _ = v.map((() => new Float32Array(4 * m))),
                                    w = new Int32Array(_.length),
                                    b = u.projection.scale();

                                function x(t, n) {
                                    const e = f + Math.random() * d,
                                        r = h + Math.random() * p;
                                    n.move(e, r, g, t)
                                }

                                function M(t, n) {
                                    for (let e = 0; e < 10; e++)
                                        if (x(t, n), !isNaN(g[t + 2])) return
                                }
                                let T, A;
                                const E = jt("#animation").node().getContext("2d");
                                c.particles.waves ? (T = 40, A = function() {
                                    const t = 600 / b * Math.pow(Math.log(b) / Math.log(600), 2.5);
                                    for (let t = 0; t < w.length; t++) w[t] = 0;
                                    for (let n = 0, e = 0; n < m; n += 1, e += 5) {
                                        ++y[n] >= T && (y[n] = 0, x(e, l));
                                        const r = g[e],
                                            o = g[e + 1];
                                        let i = g[e + 2],
                                            a = g[e + 3];
                                        const u = r + i * t,
                                            c = o + a * t,
                                            s = g[e + 4];
                                        if (s == s && l.isDefined(u, c)) {
                                            g[e] = u, g[e + 1] = c;
                                            const t = Math.sqrt(i * i + a * a) / 2.5;
                                            i /= t, a /= t;
                                            const l = v.indexFor(s * S[y[n]]),
                                                f = 4 * w[l]++,
                                                h = _[l];
                                            h[f] = r - a, h[f + 1] = o + i, h[f + 2] = r + a, h[f + 3] = o - i
                                        } else y[n] = T
                                    }
                                }, E.fillStyle = "rgba(0, 0, 0, 0.90)") : (T = 100, A = function() {
                                    for (let t = 0; t < w.length; t++) w[t] = 0;
                                    for (let t = 0, n = 0; t < m; t += 1, n += 5) {
                                        ++y[t] >= T && (y[t] = 0, x(n, l));
                                        const e = g[n],
                                            r = g[n + 1],
                                            o = e + g[n + 2],
                                            i = r + g[n + 3],
                                            a = g[n + 4];
                                        if (o == o) {
                                            l.move(o, i, g, n);
                                            const u = g[n + 2];
                                            if (u == u) {
                                                const t = v.indexFor(a),
                                                    n = 4 * w[t]++,
                                                    u = _[t];
                                                u[n] = e, u[n + 1] = r, u[n + 2] = o, u[n + 3] = i
                                            } else y[t] = T
                                        } else y[t] = T
                                    }
                                }, E.fillStyle = /firefox/i.test(ar) ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.97)"), E.lineWidth = 1;
                                for (let t = 0, n = 0; t < m; t += 1, n += 5) y[t] = ye(0, T), M(n, l);
                                const S = new Float32Array(T);
                                for (let t = 0; t < S.length; t++) S[t] = Math.sin(-xe / 2 + t / 7) / 2 + .5;

                                function N() {
                                    return !e.requested && (A(), function() {
                                        E.globalCompositeOperation = "destination-in", E.fillRect(f, h, d, p), E.globalCompositeOperation = "source-over";
                                        for (let t = 0; t < _.length; t++) {
                                            const n = _[t],
                                                e = 4 * w[t];
                                            if (e > 0) {
                                                E.beginPath(), E.strokeStyle = v[t];
                                                for (let t = 0; t < e; t += 4) E.moveTo(n[t], n[t + 1]), E.lineTo(n[t + 2], n[t + 3]);
                                                E.stroke()
                                            }
                                        }
                                    }(), setTimeout(N, 40), !0)
                                }
                                return N(), {
                                    frame: N
                                }
                            }(t, n, this.cancel)
                        }))
                    }

                    function a(t) {
                        e.value() && e.submit(!1), t && Cd(jt("#animation").node())
                    }
                    n.on(_r`change`, (t => {
                        t ? i() : a(!0)
                    })), o.on(_r`submit`, (() => a(!1))), o.on(_r`update`, i), r.on(_r`start`, (() => a(!0)))
                }(t, Kg.animation_enabled), Jm.reset(), Tr.reset(), Qg(), "test" === dr() && Kg.notice.set("temporary beta preview"),
                function() {
                    var t, n;
                    const [e = NaN, r = NaN] = null !== (t = null === (n = Km.get("orientation")) || void 0 === n ? void 0 : n.rotate) && void 0 !== t ? t : [], o = Km.get("overlay_type");
                    "232.72" !== e.toFixed(2) || "-37.64" !== r.toFixed(2) || "pm2.5" !== o && "pm10" !== o || Lr("app", "mise")
                }(), Gg(t, Km, Tr), console.timeEnd("init")
        }(), {
            d3: n,
            sharedStore: Km,
            sessionStore: Tr
        }
    }

    function ny(t = {}) {
        try {
            var n;
            window.earth = ty(), null === (n = t.ready) || void 0 === n || n.call(t)
        } catch (t) {
            Pr.error(t)
        }
    }
    var ey;
    console.log("starting..."), cr() && console.log("dev mode enabled"), Lr("site_instance", dr(), null !== (ey = document.querySelector("html").dataset.version) && void 0 !== ey ? ey : "unknown"), window.addEventListener("touchmove", (() => {})), lr() && (Lr("iframe", document.referrer.split("/")[2] || document.referrer), function(t) {
        var n;
        const e = null !== (n = document.referrer.split("/")[2]) && void 0 !== n ? n : "";
        return jr.some((t => t.test(e)))
    }()) ? jt("body").attr("style", "font-size: 12em; color: red;").text("XX - contact @cambecc").selectAll("*").remove() : (document.getElementById("failure_note").remove(), sr("app") ? window.launch = ny : ny())
})();
//# sourceMappingURL=bundle.0c7a79.js.map