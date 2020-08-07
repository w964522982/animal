function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./EventTarget.js")), u = function(n) {
    function u() {
        e(this, u);
        var o = t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return o.childNodes = [], o;
    }
    return o(u, i.default), r(u, [ {
        key: "appendChild",
        value: function(e) {
            this.childNodes.push(e);
        }
    }, {
        key: "cloneNode",
        value: function() {
            var e = Object.create(this);
            return Object.assign(e, this), e;
        }
    }, {
        key: "removeChild",
        value: function(e) {
            var t = this.childNodes.findIndex(function(t) {
                return t === e;
            });
            return t > -1 ? this.childNodes.splice(t, 1) : null;
        }
    } ]), u;
}();

exports.default = u, module.exports = exports.default;