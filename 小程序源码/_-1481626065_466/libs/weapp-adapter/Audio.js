function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : o(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var u = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), r = function t(e, n, o) {
    null === e && (e = Function.prototype);
    var u = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === u) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, o);
    }
    if ("value" in u) return u.value;
    var i = u.get;
    if (void 0 !== i) return i.call(o);
}, i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./HTMLAudioElement")), a = 0, s = 1, l = 2, p = 3, c = 4, d = 1, f = {}, y = function(o) {
    function y(n) {
        t(this, y);
        var o = e(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this));
        o._$sn = d++, o.HAVE_NOTHING = a, o.HAVE_METADATA = s, o.HAVE_CURRENT_DATA = l, 
        o.HAVE_FUTURE_DATA = p, o.HAVE_ENOUGH_DATA = c, o.readyState = a;
        var u = wx.createInnerAudioContext();
        return f[o._$sn] = u, o._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
        u.onCanplay(function() {
            o._loaded = !0, o.readyState = o.HAVE_CURRENT_DATA, o._canplayEvents.forEach(function(t) {
                o.dispatchEvent({
                    type: t
                });
            });
        }), u.onPlay(function() {
            o._paused = f[o._$sn].paused, o.dispatchEvent({
                type: "play"
            });
        }), u.onPause(function() {
            o._paused = f[o._$sn].paused, o.dispatchEvent({
                type: "pause"
            });
        }), u.onEnded(function() {
            o._paused = f[o._$sn].paused, !1 === f[o._$sn].loop && o.dispatchEvent({
                type: "ended"
            }), o.readyState = c;
        }), u.onError(function() {
            o._paused = f[o._$sn].paused, o.dispatchEvent({
                type: "error"
            });
        }), n ? o.src = n : o._src = "", o._loop = u.loop, o._autoplay = u.autoplay, o._paused = u.paused, 
        o._volume = u.volume, o._muted = !1, o;
    }
    return n(y, i.default), u(y, [ {
        key: "addEventListener",
        value: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            r(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "addEventListener", this).call(this, t, e, n), 
            t = String(t).toLowerCase(), this._loaded && -1 !== this._canplayEvents.indexOf(t) && this.dispatchEvent({
                type: t
            });
        }
    }, {
        key: "load",
        value: function() {}
    }, {
        key: "play",
        value: function() {
            f[this._$sn].play();
        }
    }, {
        key: "resume",
        value: function() {
            f[this._$sn].resume();
        }
    }, {
        key: "pause",
        value: function() {
            f[this._$sn].pause();
        }
    }, {
        key: "stop",
        value: function() {
            f[this._$sn].stop();
        }
    }, {
        key: "destroy",
        value: function() {
            f[this._$sn].destroy();
        }
    }, {
        key: "canPlayType",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "string" != typeof t ? "" : t.indexOf("audio/mpeg") > -1 || t.indexOf("audio/mp4") ? "probably" : "";
        }
    }, {
        key: "cloneNode",
        value: function() {
            var t = new y();
            return t.loop = this.loop, t.autoplay = this.autoplay, t.src = this.src, t;
        }
    }, {
        key: "currentTime",
        get: function() {
            return f[this._$sn].currentTime;
        },
        set: function(t) {
            f[this._$sn].seek(t);
        }
    }, {
        key: "duration",
        get: function() {
            return f[this._$sn].duration;
        }
    }, {
        key: "src",
        get: function() {
            return this._src;
        },
        set: function(t) {
            this._src = t, this._loaded = !1, this.readyState = this.HAVE_NOTHING, f[this._$sn].src = t;
        }
    }, {
        key: "loop",
        get: function() {
            return this._loop;
        },
        set: function(t) {
            this._loop = t, f[this._$sn].loop = t;
        }
    }, {
        key: "autoplay",
        get: function() {
            return this.autoplay;
        },
        set: function(t) {
            this._autoplay = t, f[this._$sn].autoplay = t;
        }
    }, {
        key: "paused",
        get: function() {
            return this._paused;
        }
    }, {
        key: "volume",
        get: function() {
            return this._volume;
        },
        set: function(t) {
            this._volume = t, this._muted || (f[this._$sn].volume = t);
        }
    }, {
        key: "muted",
        get: function() {
            return this._muted;
        },
        set: function(t) {
            this._muted = t, f[this._$sn].volume = t ? 0 : this._volume;
        }
    } ]), y;
}();

exports.default = y, module.exports = exports.default;