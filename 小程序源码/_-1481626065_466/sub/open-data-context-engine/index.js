var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function r(t) {
        if (n[t]) return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }
    var n = {};
    return r.m = e, r.c = n, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, r.t = function(e, n) {
        if (1 & n && (e = r(e)), 8 & n) return e;
        if (4 & n && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) r.d(i, o, function(t) {
            return e[t];
        }.bind(null, o));
        return i;
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return r.d(e, "a", e), e;
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 0);
}([ function(e, r, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        })(e);
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function l(t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t;
    }
    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e;
    }
    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && f(t, e);
    }
    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function d(t, e) {
        var r = this;
        t.forEach(function(t) {
            var n = e[t.id];
            n.layoutBox = n.layoutBox || {}, [ "left", "top", "width", "height" ].forEach(function(e) {
                n.layoutBox[e] = t.layout[e];
            }), n.parent ? (n.layoutBox.absoluteX = (n.parent.layoutBox.absoluteX || 0) + n.layoutBox.left, 
            n.layoutBox.absoluteY = (n.parent.layoutBox.absoluteY || 0) + n.layoutBox.top) : (n.layoutBox.absoluteX = n.layoutBox.left, 
            n.layoutBox.absoluteY = n.layoutBox.top), n.layoutBox.originalAbsoluteY = n.layoutBox.absoluteY, 
            "ScrollView" === n.type && n.updateRenderPort(r.renderport), d.call(r, t.children, n.children);
        });
    }
    function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
        return Object.keys(t.children).forEach(function(n) {
            var i = t.children[n];
            i.idName === r && e.push(i), Object.keys(i.children).length && y(i, e, r);
        }), e;
    }
    function v(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
        return Object.keys(t.children).forEach(function(n) {
            var i = t.children[n];
            i.className.split(/\s+/).indexOf(r) > -1 && e.push(i), Object.keys(i.children).length && v(i, e, r);
        }), e;
    }
    n.r(r), n.d(r, "EE", function() {
        return E;
    });
    var p = n(1), g = n(4), m = n(3), b = n.n(m), w = n(5), x = n.n(w), k = n(6), S = n(7), T = n.n(S), O = n(13), E = new b.a(), C = new g.default("imgPool"), N = new g.default("canvasPool"), B = {
        view: O.View,
        text: O.Text,
        image: O.Image,
        scrollview: O.ScrollView
    }, P = function t(e, r) {
        var n = this, i = B[e.name], o = e.children || [], a = e.attr || {}, l = a.id || "", u = Object.keys(a).reduce(function(t, e) {
            var n = a[e], i = e;
            return "id" === e ? (t.style = Object.assign(t.style || {}, r[l] || {}), t) : "class" === e ? (t.style = n.split(/\s+/).reduce(function(t, e) {
                return Object.assign(t, r[e]);
            }, t.style || {}), t) : (t[i] = "true" === n || "false" !== n && n, t);
        }, {});
        u.idName = l, u.className = a.class || "";
        var s = new i(u);
        return s.root = this, o.forEach(function(e) {
            var i = t.call(n, e, r);
            s.add(i);
        }), s;
    }, _ = function t(e) {
        return Object.keys(e.children).map(function(t) {
            return e.children[t];
        }).map(function(e) {
            return {
                id: e.id,
                name: e.name,
                style: e.style,
                children: t(e)
            };
        });
    }, j = function t(e, r, n) {
        e.map(function(e) {
            var i = r[e.id];
            if ("ScrollView" !== i.type) return i.insert(n), t(e.children, i.children, n);
            i.insertScrollView(n);
        });
    }, R = function t(e, r, n) {
        e.forEach(function(e) {
            var i = r[e.id];
            i.realLayoutBox = i.realLayoutBox || {}, [ "left", "top", "width", "height" ].forEach(function(t) {
                i.realLayoutBox[t] = e.layout[t] * n;
            }), i.parent ? (i.realLayoutBox.realX = (i.parent.realLayoutBox.realX || 0) + i.realLayoutBox.left, 
            Object.defineProperty(i.realLayoutBox, "realY", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var t = (i.parent.realLayoutBox.realY || 0) + i.realLayoutBox.top;
                    return i.parent && "ScrollView" === i.parent.type && (t -= i.parent.top * n), t;
                }
            })) : (i.realLayoutBox.realX = i.realLayoutBox.left, i.realLayoutBox.realY = i.realLayoutBox.top), 
            t(e.children, i.children, n);
        });
    }, A = new (function(t) {
        function e() {
            var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = r.style, i = r.name;
            return o(this, e), t = u(this, s(e).call(this, {
                style: n,
                id: 0,
                name: i
            })), t.hasEventHandler = !1, t.elementTree = null, t.renderContext = null, t.debugInfo = {}, 
            t.renderport = {}, t.viewport = {}, t.touchStart = t.eventHandler("touchstart").bind(c(t)), 
            t.touchMove = t.eventHandler("touchmove").bind(c(t)), t.touchEnd = t.eventHandler("touchend").bind(c(t)), 
            t.touchCancel = t.eventHandler("touchcancel").bind(c(t)), t.version = "0.0.1", t.touchMsg = {}, 
            t.hasViewPortSet = !1, t.realLayoutBox = {
                realX: 0,
                realY: 0
            }, t.state = k.STATE.UNINIT, t;
        }
        return h(e, p["default"]), l(e, [ {
            key: "updateViewPort",
            value: function(t) {
                this.viewport.width = t.width || 0, this.viewport.height = t.height || 0, this.viewport.x = t.x || 0, 
                this.viewport.y = t.y || 0, this.realLayoutBox = {
                    realX: this.viewport.x,
                    realY: this.viewport.y
                }, this.hasViewPortSet = !0;
            }
        }, {
            key: "init",
            value: function(t, e, r) {
                var n = new Date(), i = {
                    attributeNamePrefix: "",
                    attrNodeName: "attr",
                    textNodeName: "#text",
                    ignoreAttributes: !1,
                    ignoreNameSpace: !0,
                    allowBooleanAttributes: !0,
                    parseNodeValue: !1,
                    parseAttributeValue: !1,
                    trimValues: !0,
                    parseTrueNumberOnly: !1
                };
                r && "function" == typeof r && (i.attrValueProcessor = r);
                var o = T.a.parse(t, i, !0).children[0];
                this.debugInfo.xmlTree = new Date() - n, this.layoutTree = P.call(this, o, e), this.debugInfo.layoutTree = new Date() - n, 
                this.add(this.layoutTree);
                var a = {
                    id: this.id,
                    style: {
                        width: this.style.width,
                        height: this.style.height,
                        flexDirection: "row"
                    },
                    children: _(this)
                };
                x()(a), this.elementTree = a, this.debugInfo.renderTree = new Date() - n;
                var l = this.children[Object.keys(this.children)[0]];
                void 0 === l.style.width || void 0 === l.style.height ? console.error("Please set width and height property for root element") : (this.renderport.width = l.style.width, 
                this.renderport.height = l.style.height), this.state = k.STATE.INITED;
            }
        }, {
            key: "layout",
            value: function(t) {
                var e = new Date();
                this.renderContext = t, this.renderContext && this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height), 
                this.hasViewPortSet || console.error("Please invoke method `updateViewPort` before method `layout`"), 
                d.call(this, this.elementTree.children, this.children), this.debugInfo.layoutChildren = new Date() - e, 
                R(this.elementTree.children, this.children, this.viewport.width / this.renderport.width), 
                this.debugInfo.updateRealLayout = new Date() - e, j(this.elementTree.children, this.children, t), 
                this.debugInfo.renderChildren = new Date() - e, this.bindEvents(), this.state = k.STATE.RENDERED;
            }
        }, {
            key: "getChildByPos",
            value: function(t, e, r) {
                for (var n = Object.keys(t.children), i = 0; i < n.length; i++) {
                    var o = t.children[n[i]], a = o.realLayoutBox;
                    if (a.realX <= e && e <= a.realX + a.width && a.realY <= r && r <= a.realY + a.height) return Object.keys(o.children).length ? this.getChildByPos(o, e, r) : o;
                }
                return t;
            }
        }, {
            key: "eventHandler",
            value: function(t) {
                return function(e) {
                    if (this.elementTree) {
                        var r = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
                        if (r && r.pageX && r.pageY) {
                            r.timeStamp || (r.timeStamp = e.timeStamp);
                            var n = r && this.getChildByPos(this, r.pageX, r.pageY);
                            n && n.emit(t, e), "touchstart" !== t && "touchend" !== t || (this.touchMsg[t] = r), 
                            "touchend" === t && Object(k.isClick)(this.touchMsg) && n && n.emit("click", e);
                        }
                    }
                };
            }
        }, {
            key: "bindEvents",
            value: function() {
                this.hasEventHandler || (this.hasEventHandler = !0, "undefined" != typeof wx ? (wx.onTouchStart(this.touchStart), 
                wx.onTouchMove(this.touchMove), wx.onTouchEnd(this.touchEnd), wx.onTouchCancel(this.touchCancel)) : (document.onmousedown = this.touchStart, 
                document.onmousemove = this.touchMove, document.onmouseup = this.touchEnd, document.onmouseleave = this.touchEnd));
            }
        }, {
            key: "emit",
            value: function(t, e) {
                E.emit(t, e);
            }
        }, {
            key: "on",
            value: function(t, e) {
                E.on(t, e);
            }
        }, {
            key: "once",
            value: function(t, e) {
                E.once(t, e);
            }
        }, {
            key: "off",
            value: function(t, e) {
                E.off(t, e);
            }
        }, {
            key: "getElementsById",
            value: function(t) {
                return y(this, [], t);
            }
        }, {
            key: "getElementsByClassName",
            value: function(t) {
                return v(this, [], t);
            }
        }, {
            key: "destroyAll",
            value: function(t) {
                var e = this;
                t || (t = this);
                var r = t.children;
                Object.keys(r).forEach(function(t) {
                    var n = r[t];
                    n.destroy(), e.destroyAll(n), n.destroySelf && n.destroySelf();
                });
            }
        }, {
            key: "clear",
            value: function() {
                var t = this;
                this.destroyAll(), this.elementTree = null, this.children = {}, this.layoutTree = {}, 
                this.state = k.STATE.CLEAR, Object.keys(N.pool).forEach(function(t) {
                    var e = N.get(t);
                    e.context && e.context.clearRect(0, 0, e.canvas.width, e.canvas.height), e.elements = [], 
                    e.canvas = null, e.context = null;
                }), this.renderContext && this.renderContext.clearRect(0, 0, this.renderContext.canvas.width, this.renderContext.canvas.height), 
                [ "touchstart", "touchmove", "touchcancel", "touchend", "click", "repaint" ].forEach(function(e) {
                    t.off(e);
                }), this.EE.off("image__render__done");
            }
        }, {
            key: "clearPool",
            value: function() {
                C.clear(), N.clear();
            }
        }, {
            key: "clearAll",
            value: function() {
                this.clear(), this.clearPool();
            }
        }, {
            key: "loadImgs",
            value: function(t) {
                t.forEach(function(t) {
                    var e = Object(k.createImage)();
                    C.set(t, e), e.onload = function() {
                        e.loadDone = !0;
                    }, e.onloadcbks = [], e.src = t;
                });
            }
        } ]), e;
    }())({
        style: {
            width: 0,
            height: 0
        },
        name: "layout"
    });
    r.default = A;
}, function(t, e, r) {
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function o(t, e, r) {
        return e && i(t.prototype, e), r && i(t, r), t;
    }
    function a(t) {
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null;
    }
    function l(t, e) {
        var r = a(t);
        return void 0 == e && (e = 1), "rgba(".concat(r.r, ", ").concat(r.g, ", ").concat(r.b, ", ").concat(e, ")");
    }
    r.r(e), r.d(e, "default", function() {
        return d;
    });
    var u = r(2), s = new (r(3))(), c = 0, h = 1, f = function(t, e) {
        return [ "click", "touchstart", "touchmove", "touchend", "touchcancel" ].indexOf(t), 
        "element-".concat(e, "-").concat(t);
    }, d = function() {
        function t(e) {
            var r = this, i = e.style, o = void 0 === i ? {} : i, a = e.props, f = void 0 === a ? {} : a, d = e.idName, y = void 0 === d ? "" : d, v = e.className, p = void 0 === v ? "" : v, g = e.id, m = void 0 === g ? ++c : g;
            n(this, t), this.children = {}, this.parent = null, this.parentId = 0, this.id = m, 
            this.props = f, this.idName = y, this.className = p, this.style = o, this.EE = s, 
            this.root = null, this.isDestroyed = !1, this.layoutBox = {}, void 0 !== o.opacity && o.color && o.color.indexOf("#") > -1 && (o.color = l(o.color, o.opacity)), 
            void 0 !== o.opacity && o.backgroundColor && o.backgroundColor.indexOf("#") > -1 && (o.backgroundColor = l(o.backgroundColor, o.opacity));
            for (var b in this.style) u.scalableStyles.indexOf(b) > -1 && (this.style[b] *= h);
            [ "touchstart", "touchmove", "touchcancel", "touchend", "click" ].forEach(function(t) {
                r.on(t, function(e, n) {
                    r.parent && r.parent.emit(t, e, n);
                });
            }), this.initRepaint();
        }
        return o(t, [ {
            key: "initRepaint",
            value: function() {
                var t = this;
                this.on("repaint", function(e) {
                    t.parent && t.parent.emit("repaint", e);
                });
            }
        }, {
            key: "repaint",
            value: function() {}
        }, {
            key: "insert",
            value: function() {}
        }, {
            key: "checkNeedRender",
            value: function() {
                return !0;
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                [ "touchstart", "touchmove", "touchcancel", "touchend", "click", "repaint" ].forEach(function(e) {
                    t.off(e);
                }), this.EE.off("image__render__done"), this.isDestroyed = !0, this.EE = null, this.root = null, 
                this.parent = null, this.ctx = null, this.realLayoutBox = null, this.layoutBox = null, 
                this.props = null, this.style = null, this.renderBoxes && (this.renderBoxes = null);
            }
        }, {
            key: "add",
            value: function(t) {
                t.parent = this, t.parentId = this.id, this.children[t.id] = t;
            }
        }, {
            key: "emit",
            value: function(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                s.emit.apply(s, [ f(t, this.id) ].concat(r));
            }
        }, {
            key: "on",
            value: function(t, e) {
                s.on(f(t, this.id), e);
            }
        }, {
            key: "once",
            value: function(t, e) {
                s.once(f(t, this.id), e);
            }
        }, {
            key: "off",
            value: function(t, e) {
                s.off(f(t, this.id), e);
            }
        }, {
            key: "roundRect",
            value: function(t, e) {
                var r = this.style || {}, n = e || this.layoutBox, i = n.width, o = n.height, a = r.borderRadius, l = n.absoluteX, u = n.absoluteY;
                t.moveTo(l + a, u), t.arcTo(l + i, u, l + i, u + o, a), t.arcTo(l + i, u + o, l, u + o, a), 
                t.arcTo(l, u + o, l, u, a), t.arcTo(l, u, l + i, u, a), t.clip();
            }
        }, {
            key: "renderBorder",
            value: function(t, e) {
                var r = this.style || {};
                r.borderRadius && this.roundRect(t, e), t.save();
                var n = e || this.layoutBox, i = r.borderWidth || 0, o = r.borderLeftWidth || 0, a = r.borderRightWidth || 0, l = r.borderTopWidth || 0, u = r.borderBottomWidth || 0, s = r.borderRadius || 0, c = r.borderColor, h = n.absoluteX, f = n.absoluteY;
                t.beginPath(), i && c && (t.lineWidth = i, t.strokeStyle = c, t.strokeRect(h, f, n.width, n.height)), 
                l && (c || r.borderTopColor) && (t.lineWidth = l, t.strokeStyle = r.borderTopColor || c, 
                t.moveTo(s ? h + s : h, f + l / 2), t.lineTo(s ? h + n.width - s : h + n.width, f + l / 2)), 
                u && (c || r.borderBottomColor) && (t.lineWidth = u, t.strokeStyle = r.borderBottomColor || c, 
                t.moveTo(s ? h + s : h, f + n.height - u / 2), t.lineTo(s ? h + n.width - s : h + n.width, f + n.height - u / 2)), 
                o && (c || r.borderLeftColor) && (t.lineWidth = o, t.strokeStyle = r.borderLeftColor || c, 
                t.moveTo(h + o / 2, s ? f + s : f), t.lineTo(h + o / 2, s ? f + n.height - s : f + n.height)), 
                a && (c || r.borderRightColor) && (t.lineWidth = a, t.strokeStyle = r.borderRightColor || c, 
                t.moveTo(h + n.width - a / 2, s ? f + s : f), t.lineTo(h + n.width - a / 2, s ? f + n.height - s : f + n.height)), 
                t.closePath(), t.stroke(), t.restore();
            }
        } ]), t;
    }();
}, function(t, e, r) {
    r.r(e), r.d(e, "scalableStyles", function() {
        return i;
    }), r.d(e, "textStyles", function() {
        return n;
    }), r.d(e, "layoutAffectedStyles", function() {
        return o;
    });
    var n = [ "color", "fontSize", "textAlign", "fontWeight", "lineHeight", "lineBreak" ], i = [ "left", "top", "right", "bottom", "width", "height", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "fontSize", "lineHeight", "borderRadius", "minWidth", "maxWidth", "minHeight", "maxHeight" ], o = [ "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "width", "height" ];
}, function(t, e) {
    function r() {}
    r.prototype = {
        on: function(t, e, r) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: r
            }), this;
        },
        once: function(t, e, r) {
            function n() {
                i.off(t, n), e.apply(r, arguments);
            }
            var i = this;
            return n._ = e, this.on(t, n, r);
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length;
            for (n; n < i; n++) r[n].fn.apply(r[n].ctx, e);
            return this;
        },
        off: function(t, e) {
            var r = this.e || (this.e = {}), n = r[t], i = [];
            if (n && e) for (var o = 0, a = n.length; o < a; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
            return i.length ? r[t] = i : delete r[t], this;
        }
    }, t.exports = r, t.exports.TinyEmitter = r;
}, function(t, e, r) {
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function o(t, e, r) {
        return e && i(t.prototype, e), r && i(t, r), t;
    }
    r.r(e), r.d(e, "default", function() {
        return l;
    });
    var a = [], l = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pool";
            n(this, t);
            var r = a.find(function(t) {
                return t.name === e;
            });
            if (r) return r;
            this.name = e, this.pool = {}, a.push(this);
        }
        return o(t, [ {
            key: "get",
            value: function(t) {
                return this.pool[t];
            }
        }, {
            key: "set",
            value: function(t, e) {
                this.pool[t] = e;
            }
        }, {
            key: "clear",
            value: function() {
                this.pool = {};
            }
        } ]), t;
    }();
}, function(t, e, r) {
    var n, i, o;
    !function(r, a) {
        i = [], void 0 !== (o = "function" == typeof (n = function() {
            var e = function() {
                var t;
                var e = "inherit";
                var r = "ltr";
                var n = "rtl";
                var i = "row";
                var o = "row-reverse";
                var a = "column";
                var l = "column-reverse";
                var u = "flex-start";
                var s = "center";
                var c = "flex-end";
                var h = "space-between";
                var f = "space-around";
                var d = "flex-start";
                var y = "center";
                var v = "flex-end";
                var p = "stretch";
                var g = "relative";
                var m = "absolute";
                var b = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom"
                };
                var w = {
                    row: "right",
                    "row-reverse": "left",
                    column: "bottom",
                    "column-reverse": "top"
                };
                var x = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom"
                };
                var k = {
                    row: "width",
                    "row-reverse": "width",
                    column: "height",
                    "column-reverse": "height"
                };
                function S(t) {
                    if (!t.layout || t.isDirty) {
                        t.layout = {
                            width: undefined,
                            height: undefined,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        };
                    }
                    if (!t.style) {
                        t.style = {};
                    }
                    if (!t.children) {
                        t.children = [];
                    }
                    t.children.forEach(S);
                    return t;
                }
                function T(t) {
                    return t === undefined;
                }
                function O(t) {
                    return t === i || t === o;
                }
                function E(t) {
                    return t === a || t === l;
                }
                function C(t, e) {
                    if (t.style.marginStart !== undefined && O(e)) {
                        return t.style.marginStart;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.marginLeft;
                        break;

                      case "row-reverse":
                        r = t.style.marginRight;
                        break;

                      case "column":
                        r = t.style.marginTop;
                        break;

                      case "column-reverse":
                        r = t.style.marginBottom;
                        break;
                    }
                    if (r !== undefined) {
                        return r;
                    }
                    if (t.style.margin !== undefined) {
                        return t.style.margin;
                    }
                    return 0;
                }
                function N(t, e) {
                    if (t.style.marginEnd !== undefined && O(e)) {
                        return t.style.marginEnd;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.marginRight;
                        break;

                      case "row-reverse":
                        r = t.style.marginLeft;
                        break;

                      case "column":
                        r = t.style.marginBottom;
                        break;

                      case "column-reverse":
                        r = t.style.marginTop;
                        break;
                    }
                    if (r != null) {
                        return r;
                    }
                    if (t.style.margin !== undefined) {
                        return t.style.margin;
                    }
                    return 0;
                }
                function B(t, e) {
                    if (t.style.paddingStart !== undefined && t.style.paddingStart >= 0 && O(e)) {
                        return t.style.paddingStart;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.paddingLeft;
                        break;

                      case "row-reverse":
                        r = t.style.paddingRight;
                        break;

                      case "column":
                        r = t.style.paddingTop;
                        break;

                      case "column-reverse":
                        r = t.style.paddingBottom;
                        break;
                    }
                    if (r != null && r >= 0) {
                        return r;
                    }
                    if (t.style.padding !== undefined && t.style.padding >= 0) {
                        return t.style.padding;
                    }
                    return 0;
                }
                function P(t, e) {
                    if (t.style.paddingEnd !== undefined && t.style.paddingEnd >= 0 && O(e)) {
                        return t.style.paddingEnd;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.paddingRight;
                        break;

                      case "row-reverse":
                        r = t.style.paddingLeft;
                        break;

                      case "column":
                        r = t.style.paddingBottom;
                        break;

                      case "column-reverse":
                        r = t.style.paddingTop;
                        break;
                    }
                    if (r != null && r >= 0) {
                        return r;
                    }
                    if (t.style.padding !== undefined && t.style.padding >= 0) {
                        return t.style.padding;
                    }
                    return 0;
                }
                function _(t, e) {
                    if (t.style.borderStartWidth !== undefined && t.style.borderStartWidth >= 0 && O(e)) {
                        return t.style.borderStartWidth;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.borderLeftWidth;
                        break;

                      case "row-reverse":
                        r = t.style.borderRightWidth;
                        break;

                      case "column":
                        r = t.style.borderTopWidth;
                        break;

                      case "column-reverse":
                        r = t.style.borderBottomWidth;
                        break;
                    }
                    if (r != null && r >= 0) {
                        return r;
                    }
                    if (t.style.borderWidth !== undefined && t.style.borderWidth >= 0) {
                        return t.style.borderWidth;
                    }
                    return 0;
                }
                function j(t, e) {
                    if (t.style.borderEndWidth !== undefined && t.style.borderEndWidth >= 0 && O(e)) {
                        return t.style.borderEndWidth;
                    }
                    var r = null;
                    switch (e) {
                      case "row":
                        r = t.style.borderRightWidth;
                        break;

                      case "row-reverse":
                        r = t.style.borderLeftWidth;
                        break;

                      case "column":
                        r = t.style.borderBottomWidth;
                        break;

                      case "column-reverse":
                        r = t.style.borderTopWidth;
                        break;
                    }
                    if (r != null && r >= 0) {
                        return r;
                    }
                    if (t.style.borderWidth !== undefined && t.style.borderWidth >= 0) {
                        return t.style.borderWidth;
                    }
                    return 0;
                }
                function R(t, e) {
                    return B(t, e) + _(t, e);
                }
                function A(t, e) {
                    return P(t, e) + j(t, e);
                }
                function I(t, e) {
                    return _(t, e) + j(t, e);
                }
                function L(t, e) {
                    return C(t, e) + N(t, e);
                }
                function M(t, e) {
                    return R(t, e) + A(t, e);
                }
                function W(t) {
                    if (t.style.justifyContent) {
                        return t.style.justifyContent;
                    }
                    return "flex-start";
                }
                function D(t) {
                    if (t.style.alignContent) {
                        return t.style.alignContent;
                    }
                    return "flex-start";
                }
                function H(t, e) {
                    if (e.style.alignSelf) {
                        return e.style.alignSelf;
                    }
                    if (t.style.alignItems) {
                        return t.style.alignItems;
                    }
                    return "stretch";
                }
                function V(t, e) {
                    if (e === n) {
                        if (t === i) {
                            return o;
                        } else if (t === o) {
                            return i;
                        }
                    }
                    return t;
                }
                function Y(t, n) {
                    var i;
                    if (t.style.direction) {
                        i = t.style.direction;
                    } else {
                        i = e;
                    }
                    if (i === e) {
                        i = n === undefined ? r : n;
                    }
                    return i;
                }
                function X(t) {
                    if (t.style.flexDirection) {
                        return t.style.flexDirection;
                    }
                    return a;
                }
                function F(t, e) {
                    if (E(t)) {
                        return V(i, e);
                    } else {
                        return a;
                    }
                }
                function q(t) {
                    if (t.style.position) {
                        return t.style.position;
                    }
                    return "relative";
                }
                function z(t) {
                    return q(t) === g && t.style.flex > 0;
                }
                function G(t) {
                    return t.style.flexWrap === "wrap";
                }
                function J(t, e) {
                    return t.layout[k[e]] + L(t, e);
                }
                function U(t, e) {
                    return t.style[k[e]] !== undefined && t.style[k[e]] >= 0;
                }
                function $(t, e) {
                    return t.style[e] !== undefined;
                }
                function Z(t) {
                    return t.style.measure !== undefined;
                }
                function K(t, e) {
                    if (t.style[e] !== undefined) {
                        return t.style[e];
                    }
                    return 0;
                }
                function Q(t, e, r) {
                    var n = {
                        row: t.style.minWidth,
                        "row-reverse": t.style.minWidth,
                        column: t.style.minHeight,
                        "column-reverse": t.style.minHeight
                    }[e];
                    var i = {
                        row: t.style.maxWidth,
                        "row-reverse": t.style.maxWidth,
                        column: t.style.maxHeight,
                        "column-reverse": t.style.maxHeight
                    }[e];
                    var o = r;
                    if (i !== undefined && i >= 0 && o > i) {
                        o = i;
                    }
                    if (n !== undefined && n >= 0 && o < n) {
                        o = n;
                    }
                    return o;
                }
                function tt(t, e) {
                    if (t > e) {
                        return t;
                    }
                    return e;
                }
                function et(t, e) {
                    if (t.layout[k[e]] !== undefined) {
                        return;
                    }
                    if (!U(t, e)) {
                        return;
                    }
                    t.layout[k[e]] = tt(Q(t, e, t.style[k[e]]), M(t, e));
                }
                function rt(t, e, r) {
                    e.layout[w[r]] = t.layout[k[r]] - e.layout[k[r]] - e.layout[x[r]];
                }
                function nt(t, e) {
                    if (t.style[b[e]] !== undefined) {
                        return K(t, b[e]);
                    }
                    return -K(t, w[e]);
                }
                function it(e, r, n) {
                    var S = Y(e, n);
                    var E = V(X(e), S);
                    var B = F(E, S);
                    var P = V(i, S);
                    et(e, E);
                    et(e, B);
                    e.layout.direction = S;
                    e.layout[b[E]] += C(e, E) + nt(e, E);
                    e.layout[w[E]] += N(e, E) + nt(e, E);
                    e.layout[b[B]] += C(e, B) + nt(e, B);
                    e.layout[w[B]] += N(e, B) + nt(e, B);
                    var j = e.children.length;
                    var it = M(e, P);
                    if (Z(e)) {
                        var at = !T(e.layout[k[P]]);
                        var lt = t;
                        if (U(e, P)) {
                            lt = e.style.width;
                        } else if (at) {
                            lt = e.layout[k[P]];
                        } else {
                            lt = r - L(e, P);
                        }
                        lt -= it;
                        var ut = !U(e, P) && !at;
                        var st = !U(e, a) && T(e.layout[k[a]]);
                        if (ut || st) {
                            var ct = e.style.measure(lt);
                            if (ut) {
                                e.layout.width = ct.width + it;
                            }
                            if (st) {
                                e.layout.height = ct.height + M(e, a);
                            }
                        }
                        if (j === 0) {
                            return;
                        }
                    }
                    var ht = G(e);
                    var ft = W(e);
                    var dt = R(e, E);
                    var yt = R(e, B);
                    var vt = M(e, E);
                    var pt = M(e, B);
                    var gt = !T(e.layout[k[E]]);
                    var mt = !T(e.layout[k[B]]);
                    var bt = O(E);
                    var wt;
                    var xt;
                    var kt;
                    var St;
                    var Tt = null;
                    var Ot = null;
                    var Et = t;
                    if (gt) {
                        Et = e.layout[k[E]] - vt;
                    }
                    var Ct = 0;
                    var Nt = 0;
                    var Bt = 0;
                    var Pt = 0;
                    var _t = 0;
                    var jt = 0;
                    while (Nt < j) {
                        var Rt = 0;
                        var At = 0;
                        var It = 0;
                        var Lt = 0;
                        var Mt = gt && ft === u || !gt && ft !== s;
                        var Wt = Mt ? j : Ct;
                        var Dt = true;
                        var Ht = j;
                        var Vt = null;
                        var Yt = null;
                        var Xt = dt;
                        var Ft = 0;
                        var qt;
                        for (wt = Ct; wt < j; ++wt) {
                            kt = e.children[wt];
                            kt.lineIndex = jt;
                            kt.nextAbsoluteChild = null;
                            kt.nextFlexChild = null;
                            var zt = H(e, kt);
                            if (zt === p && q(kt) === g && mt && !U(kt, B)) {
                                kt.layout[k[B]] = tt(Q(kt, B, e.layout[k[B]] - pt - L(kt, B)), M(kt, B));
                            } else if (q(kt) === m) {
                                if (Tt === null) {
                                    Tt = kt;
                                }
                                if (Ot !== null) {
                                    Ot.nextAbsoluteChild = kt;
                                }
                                Ot = kt;
                                for (xt = 0; xt < 2; xt++) {
                                    St = xt !== 0 ? i : a;
                                    if (!T(e.layout[k[St]]) && !U(kt, St) && $(kt, b[St]) && $(kt, w[St])) {
                                        kt.layout[k[St]] = tt(Q(kt, St, e.layout[k[St]] - M(e, St) - L(kt, St) - K(kt, b[St]) - K(kt, w[St])), M(kt, St));
                                    }
                                }
                            }
                            var Gt = 0;
                            if (gt && z(kt)) {
                                At++;
                                It += kt.style.flex;
                                if (Vt === null) {
                                    Vt = kt;
                                }
                                if (Yt !== null) {
                                    Yt.nextFlexChild = kt;
                                }
                                Yt = kt;
                                Gt = M(kt, E) + L(kt, E);
                            } else {
                                qt = t;
                                if (!bt) {
                                    if (U(e, P)) {
                                        qt = e.layout[k[P]] - it;
                                    } else {
                                        qt = r - L(e, P) - it;
                                    }
                                }
                                if (Bt === 0) {
                                    ot(kt, qt, S);
                                }
                                if (q(kt) === g) {
                                    Lt++;
                                    Gt = J(kt, E);
                                }
                            }
                            if (ht && gt && Rt + Gt > Et && wt !== Ct) {
                                Lt--;
                                Bt = 1;
                                break;
                            }
                            if (Mt && (q(kt) !== g || z(kt))) {
                                Mt = false;
                                Wt = wt;
                            }
                            if (Dt && (q(kt) !== g || zt !== p && zt !== d || T(kt.layout[k[B]]))) {
                                Dt = false;
                                Ht = wt;
                            }
                            if (Mt) {
                                kt.layout[x[E]] += Xt;
                                if (gt) {
                                    rt(e, kt, E);
                                }
                                Xt += J(kt, E);
                                Ft = tt(Ft, Q(kt, B, J(kt, B)));
                            }
                            if (Dt) {
                                kt.layout[x[B]] += Pt + yt;
                                if (mt) {
                                    rt(e, kt, B);
                                }
                            }
                            Bt = 0;
                            Rt += Gt;
                            Nt = wt + 1;
                        }
                        var Jt = 0;
                        var Ut = 0;
                        var $t = 0;
                        if (gt) {
                            $t = Et - Rt;
                        } else {
                            $t = tt(Rt, 0) - Rt;
                        }
                        if (At !== 0) {
                            var Zt = $t / It;
                            var Kt;
                            var Qt;
                            Yt = Vt;
                            while (Yt !== null) {
                                Kt = Zt * Yt.style.flex + M(Yt, E);
                                Qt = Q(Yt, E, Kt);
                                if (Kt !== Qt) {
                                    $t -= Qt;
                                    It -= Yt.style.flex;
                                }
                                Yt = Yt.nextFlexChild;
                            }
                            Zt = $t / It;
                            if (Zt < 0) {
                                Zt = 0;
                            }
                            Yt = Vt;
                            while (Yt !== null) {
                                Yt.layout[k[E]] = Q(Yt, E, Zt * Yt.style.flex + M(Yt, E));
                                qt = t;
                                if (U(e, P)) {
                                    qt = e.layout[k[P]] - it;
                                } else if (!bt) {
                                    qt = r - L(e, P) - it;
                                }
                                ot(Yt, qt, S);
                                kt = Yt;
                                Yt = Yt.nextFlexChild;
                                kt.nextFlexChild = null;
                            }
                        } else if (ft !== u) {
                            if (ft === s) {
                                Jt = $t / 2;
                            } else if (ft === c) {
                                Jt = $t;
                            } else if (ft === h) {
                                $t = tt($t, 0);
                                if (At + Lt - 1 !== 0) {
                                    Ut = $t / (At + Lt - 1);
                                } else {
                                    Ut = 0;
                                }
                            } else if (ft === f) {
                                Ut = $t / (At + Lt);
                                Jt = Ut / 2;
                            }
                        }
                        Xt += Jt;
                        for (wt = Wt; wt < Nt; ++wt) {
                            kt = e.children[wt];
                            if (q(kt) === m && $(kt, b[E])) {
                                kt.layout[x[E]] = K(kt, b[E]) + _(e, E) + C(kt, E);
                            } else {
                                kt.layout[x[E]] += Xt;
                                if (gt) {
                                    rt(e, kt, E);
                                }
                                if (q(kt) === g) {
                                    Xt += Ut + J(kt, E);
                                    Ft = tt(Ft, Q(kt, B, J(kt, B)));
                                }
                            }
                        }
                        var te = e.layout[k[B]];
                        if (!mt) {
                            te = tt(Q(e, B, Ft + pt), pt);
                        }
                        for (wt = Ht; wt < Nt; ++wt) {
                            kt = e.children[wt];
                            if (q(kt) === m && $(kt, b[B])) {
                                kt.layout[x[B]] = K(kt, b[B]) + _(e, B) + C(kt, B);
                            } else {
                                var ee = yt;
                                if (q(kt) === g) {
                                    var zt = H(e, kt);
                                    if (zt === p) {
                                        if (T(kt.layout[k[B]])) {
                                            kt.layout[k[B]] = tt(Q(kt, B, te - pt - L(kt, B)), M(kt, B));
                                        }
                                    } else if (zt !== d) {
                                        var re = te - pt - J(kt, B);
                                        if (zt === y) {
                                            ee += re / 2;
                                        } else {
                                            ee += re;
                                        }
                                    }
                                }
                                kt.layout[x[B]] += Pt + ee;
                                if (mt) {
                                    rt(e, kt, B);
                                }
                            }
                        }
                        Pt += Ft;
                        _t = tt(_t, Xt);
                        jt += 1;
                        Ct = Nt;
                    }
                    if (jt > 1 && mt) {
                        var ne = e.layout[k[B]] - pt;
                        var ie = ne - Pt;
                        var oe = 0;
                        var ae = yt;
                        var le = D(e);
                        if (le === v) {
                            ae += ie;
                        } else if (le === y) {
                            ae += ie / 2;
                        } else if (le === p) {
                            if (ne > Pt) {
                                oe = ie / jt;
                            }
                        }
                        var ue = 0;
                        for (wt = 0; wt < jt; ++wt) {
                            var se = ue;
                            var ce = 0;
                            for (xt = se; xt < j; ++xt) {
                                kt = e.children[xt];
                                if (q(kt) !== g) {
                                    continue;
                                }
                                if (kt.lineIndex !== wt) {
                                    break;
                                }
                                if (!T(kt.layout[k[B]])) {
                                    ce = tt(ce, kt.layout[k[B]] + L(kt, B));
                                }
                            }
                            ue = xt;
                            ce += oe;
                            for (xt = se; xt < ue; ++xt) {
                                kt = e.children[xt];
                                if (q(kt) !== g) {
                                    continue;
                                }
                                var he = H(e, kt);
                                if (he === d) {
                                    kt.layout[x[B]] = ae + C(kt, B);
                                } else if (he === v) {
                                    kt.layout[x[B]] = ae + ce - N(kt, B) - kt.layout[k[B]];
                                } else if (he === y) {
                                    var fe = kt.layout[k[B]];
                                    kt.layout[x[B]] = ae + (ce - fe) / 2;
                                } else if (he === p) {
                                    kt.layout[x[B]] = ae + C(kt, B);
                                }
                            }
                            ae += ce;
                        }
                    }
                    var de = false;
                    var ye = false;
                    if (!gt) {
                        e.layout[k[E]] = tt(Q(e, E, _t + A(e, E)), vt);
                        if (E === o || E === l) {
                            de = true;
                        }
                    }
                    if (!mt) {
                        e.layout[k[B]] = tt(Q(e, B, Pt + pt), pt);
                        if (B === o || B === l) {
                            ye = true;
                        }
                    }
                    if (de || ye) {
                        for (wt = 0; wt < j; ++wt) {
                            kt = e.children[wt];
                            if (de) {
                                rt(e, kt, E);
                            }
                            if (ye) {
                                rt(e, kt, B);
                            }
                        }
                    }
                    Ot = Tt;
                    while (Ot !== null) {
                        for (xt = 0; xt < 2; xt++) {
                            St = xt !== 0 ? i : a;
                            if (!T(e.layout[k[St]]) && !U(Ot, St) && $(Ot, b[St]) && $(Ot, w[St])) {
                                Ot.layout[k[St]] = tt(Q(Ot, St, e.layout[k[St]] - I(e, St) - L(Ot, St) - K(Ot, b[St]) - K(Ot, w[St])), M(Ot, St));
                            }
                            if ($(Ot, w[St]) && !$(Ot, b[St])) {
                                Ot.layout[b[St]] = e.layout[k[St]] - Ot.layout[k[St]] - K(Ot, w[St]);
                            }
                        }
                        kt = Ot;
                        Ot = Ot.nextAbsoluteChild;
                        kt.nextAbsoluteChild = null;
                    }
                }
                function ot(t, e, n) {
                    t.shouldUpdate = true;
                    var i = t.style.direction || r;
                    var o = !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.direction === i;
                    if (o) {
                        t.layout.width = t.lastLayout.width;
                        t.layout.height = t.lastLayout.height;
                        t.layout.top = t.lastLayout.top;
                        t.layout.left = t.lastLayout.left;
                    } else {
                        if (!t.lastLayout) {
                            t.lastLayout = {};
                        }
                        t.lastLayout.requestedWidth = t.layout.width;
                        t.lastLayout.requestedHeight = t.layout.height;
                        t.lastLayout.parentMaxWidth = e;
                        t.lastLayout.direction = i;
                        t.children.forEach(function(t) {
                            t.layout.width = undefined;
                            t.layout.height = undefined;
                            t.layout.top = 0;
                            t.layout.left = 0;
                        });
                        it(t, e, n);
                        t.lastLayout.width = t.layout.width;
                        t.lastLayout.height = t.layout.height;
                        t.lastLayout.top = t.layout.top;
                        t.lastLayout.left = t.layout.left;
                    }
                }
                return {
                    layoutNodeImpl: it,
                    computeLayout: ot,
                    fillNodes: S
                };
            }();
            if (true) {
                t.exports = e;
            }
            return function(t) {
                e.fillNodes(t);
                e.computeLayout(t);
            };
        }) ? n.apply(e, i) : n) && (t.exports = o);
    }();
}, function(t, e, r) {
    function n(t, e, r) {
        e || (e = 250);
        var n, i;
        return function() {
            var o = r || this, a = +new Date(), l = arguments;
            n && a < n + e ? (clearTimeout(i), i = setTimeout(function() {
                n = a, t.apply(o, l);
            }, e)) : (n = a, t.apply(o, l));
        };
    }
    function i() {}
    function o(t) {
        var e = t.touchstart, r = t.touchend;
        if (!(e && r && e.timeStamp && r.timeStamp && void 0 !== e.pageX && void 0 !== e.pageY && void 0 !== r.pageX && void 0 !== r.pageY)) return !1;
        var n = e.pageX, i = e.pageY, o = r.pageX, a = r.pageY, l = r.timeStamp - e.timeStamp;
        return !!(Math.abs(a - i) < 30 && Math.abs(o - n) < 30 && l < 300);
    }
    function a() {
        return "undefined" != typeof wx ? wx.createCanvas() : document.createElement("canvas");
    }
    function l() {
        return "undefined" != typeof wx ? wx.createImage() : document.createElement("img");
    }
    function u() {
        return "undefined" != typeof wx ? wx.getSystemInfoSync().devicePixelRatio : window.devicePixelRatio;
    }
    r.r(e), r.d(e, "throttle", function() {
        return n;
    }), r.d(e, "none", function() {
        return i;
    }), r.d(e, "isClick", function() {
        return o;
    }), r.d(e, "createCanvas", function() {
        return a;
    }), r.d(e, "createImage", function() {
        return l;
    }), r.d(e, "getDpr", function() {
        return u;
    }), r.d(e, "STATE", function() {
        return s;
    });
    var s = {
        UNINIT: 0,
        INITED: 1,
        RENDERED: 2,
        CLEAR: 3
    };
}, function(t, e, r) {
    var n = r(8), i = r(10), o = r(10), a = r(9).buildOptions, l = r(12);
    e.parse = function(t, e, r) {
        if (r) {
            !0 === r && (r = {});
            var u = l.validate(t, r);
            if (!0 !== u) throw Error(u.err.msg);
        }
        return e = a(e, o.defaultOptions, o.props), n.convertToJson(i.getTraversalObj(t, e), e);
    };
}, function(t, e, r) {
    var n = r(9);
    e.convertToJson = function t(e, r) {
        var i = {
            name: e.tagname
        };
        return e.child && !n.isEmptyObject(e.child) || e.attrsMap && !n.isEmptyObject(e.attrsMap) ? (n.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== r.cdataPositionChar) && ("strict" === r.arrayMode ? i[r.textNodeName] = [ e.val ] : i[r.textNodeName] = e.val), 
        n.merge(i, e.attrsMap, r.arrayMode), i.children = [], e.children.forEach(function(e) {
            i.children.push(t(e, r));
        }), i) : n.isExist(e.val) && e.val ? e.val : i;
    };
}, function(t, e, r) {
    var n = function(t, e) {
        var r = e.exec(t);
        return !(null === r || void 0 === r);
    };
    e.isExist = function(t) {
        return void 0 !== t;
    }, e.isEmptyObject = function(t) {
        return 0 === Object.keys(t).length;
    }, e.merge = function(t, e, r) {
        if (e) for (var n = Object.keys(e), i = n.length, o = 0; o < i; o++) t[n[o]] = "strict" === r ? [ e[n[o]] ] : e[n[o]];
    }, e.getValue = function(t) {
        return e.isExist(t) ? t : "";
    }, e.buildOptions = function(t, e, r) {
        var n = {};
        if (!t) return e;
        for (var i = 0; i < r.length; i++) void 0 !== t[r[i]] ? n[r[i]] = t[r[i]] : n[r[i]] = e[r[i]];
        return n;
    }, e.doesMatch = n, e.doesNotMatch = function(t, e) {
        return !n(t, e);
    }, e.getAllMatches = function(t, e) {
        for (var r = [], n = e.exec(t); n; ) {
            for (var i = [], o = n.length, a = 0; a < o; a++) i.push(n[a]);
            r.push(i), n = e.exec(t);
        }
        return r;
    };
}, function(t, e, r) {
    function n(t, e, r) {
        var n = t[7] || r, i = t[14];
        return i && (e.trimValues && (i = i.trim()), i = a(i = e.tagValueProcessor(i, n), e.parseNodeValue, e.parseTrueNumberOnly)), 
        i;
    }
    function i(t) {
        return "]]>" === t[4] ? h.CDATA : "/" === t[10] ? h.CLOSING : void 0 !== t[8] && "/" === t[8].substr(t[8].length - 1) ? h.SELF : h.OPENING;
    }
    function o(t, e) {
        if (e.ignoreNameSpace) {
            var r = t.split(":"), n = "/" === t.charAt(0) ? "/" : "";
            if ("xmlns" === r[0]) return "";
            2 === r.length && (t = n + r[1]);
        }
        return t;
    }
    function a(t, e, r) {
        if (e && "string" == typeof t) {
            var n;
            return "" === t.trim() || isNaN(t) ? n = "true" === t || "false" !== t && t : (n = -1 !== t.indexOf("0x") ? Number.parseInt(t, 16) : -1 !== t.indexOf(".") ? Number.parseFloat(t) : Number.parseInt(t, 10), 
            r && (n = String(n) === t ? n : t)), n;
        }
        return u.isExist(t) ? t : "";
    }
    function l(t, e) {
        if (!e.ignoreAttributes && "string" == typeof t) {
            t = t.replace(/\r?\n/g, " ");
            for (var r = u.getAllMatches(t, v), n = r.length, i = {}, l = 0; l < n; l++) {
                var s = o(r[l][1], e);
                s.length && (void 0 !== r[l][4] ? (e.trimValues && (r[l][4] = r[l][4].trim()), r[l][4] = e.attrValueProcessor(r[l][4], s), 
                i[e.attributeNamePrefix + s] = a(r[l][4], e.parseAttributeValue, e.parseTrueNumberOnly)) : e.allowBooleanAttributes && (i[e.attributeNamePrefix + s] = !0));
            }
            if (!Object.keys(i).length) return;
            if (e.attrNodeName) {
                var c = {};
                return c[e.attrNodeName] = i, c;
            }
            return i;
        }
    }
    var u = r(9), s = r(9).buildOptions, c = r(11), h = {
        OPENING: 1,
        CLOSING: 2,
        SELF: 3,
        CDATA: 4
    }, f = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
    var d = {
        attributeNamePrefix: "@_",
        attrNodeName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        ignoreNameSpace: !1,
        allowBooleanAttributes: !1,
        parseNodeValue: !0,
        parseAttributeValue: !1,
        arrayMode: !1,
        trimValues: !0,
        cdataTagName: !1,
        cdataPositionChar: "\\c",
        localeRange: "",
        tagValueProcessor: function(t) {
            return t;
        },
        attrValueProcessor: function(t) {
            return t;
        },
        stopNodes: []
    };
    e.defaultOptions = d;
    var y = [ "attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "localeRange", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "stopNodes" ];
    e.props = y;
    var v = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");
    e.getTraversalObj = function(t, e) {
        e = s(e, d, y), t = t.replace(/<!--[\s\S]*?-->/g, "");
        var r = new c("!xml"), o = r;
        f = f.replace(/\[\\w/g, "[" + e.localeRange + "\\w");
        for (var a = new RegExp(f, "g"), v = a.exec(t), p = a.exec(t); v; ) {
            var g = i(v);
            if (g === h.CLOSING) o.parent && v[14] && (o.parent.val = u.getValue(o.parent.val) + "" + n(v, e, o.parent.tagname)), 
            e.stopNodes.length && e.stopNodes.includes(o.tagname) && (o.child = [], void 0 == o.attrsMap && (o.attrsMap = {}), 
            o.val = t.substr(o.startIndex + 1, v.index - o.startIndex - 1)), o = o.parent; else if (g === h.CDATA) if (e.cdataTagName) {
                var m = new c(e.cdataTagName, o, v[3]);
                m.attrsMap = l(v[8], e), o.addChild(m), o.val = u.getValue(o.val) + e.cdataPositionChar, 
                v[14] && (o.val += n(v, e));
            } else o.val = (o.val || "") + (v[3] || "") + n(v, e); else if (g === h.SELF) {
                o && v[14] && (o.val = u.getValue(o.val) + "" + n(v, e));
                var b = new c(e.ignoreNameSpace ? v[7] : v[5], o, "");
                v[8] && v[8].length > 0 && (v[8] = v[8].substr(0, v[8].length - 1)), b.attrsMap = l(v[8], e), 
                o.addChild(b);
            } else {
                var w = new c(e.ignoreNameSpace ? v[7] : v[5], o, n(v, e));
                e.stopNodes.length && e.stopNodes.includes(w.tagname) && (w.startIndex = v.index + v[1].length), 
                w.attrsMap = l(v[8], e), o.addChild(w), o = w;
            }
            v = p, p = a.exec(t);
        }
        return r;
    };
}, function(t, e, r) {
    t.exports = function(t, e, r) {
        this.tagname = t, this.parent = e, this.child = {}, this.attrsMap = {}, this.children = [], 
        this.val = r, this.addChild = function(t) {
            this.children.push(t), Array.isArray(this.child[t.tagname]) ? this.child[t.tagname].push(t) : this.child[t.tagname] = [ t ];
        };
    };
}, function(t, e, r) {
    function n(t, e) {
        for (var r = e; e < t.length; e++) if ("?" != t[e] && " " != t[e]) ; else {
            var n = t.substr(r, e - r);
            if (e > 5 && "xml" === n) return {
                err: {
                    code: "InvalidXml",
                    msg: "XML declaration allowed only at the start of the document."
                }
            };
            if ("?" == t[e] && ">" == t[e + 1]) {
                e++;
                break;
            }
        }
        return e;
    }
    function i(t, e) {
        if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
            for (e += 3; e < t.length; e++) if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                e += 2;
                break;
            }
        } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
            var r = 1;
            for (e += 8; e < t.length; e++) if ("<" === t[e]) r++; else if (">" === t[e] && 0 == --r) break;
        } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) for (e += 8; e < t.length; e++) if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
        }
        return e;
    }
    function o(t, e) {
        for (var r = "", n = "", i = !1; e < t.length; e++) {
            if (t[e] === f || t[e] === d) if ("" === n) n = t[e]; else {
                if (n !== t[e]) continue;
                n = "";
            } else if (">" === t[e] && "" === n) {
                i = !0;
                break;
            }
            r += t[e];
        }
        return "" === n && {
            value: r,
            index: e,
            tagClosed: i
        };
    }
    function a(t, e, r) {
        for (var n = s.getAllMatches(t, y), i = {}, o = 0; o < n.length; o++) {
            if (0 === n[o][1].length) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + n[o][2] + " has no space in starting."
                }
            };
            if (void 0 === n[o][3] && !e.allowBooleanAttributes) return {
                err: {
                    code: "InvalidAttr",
                    msg: "boolean attribute " + n[o][2] + " is not allowed."
                }
            };
            var a = n[o][2];
            if (!l(a, r)) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + a + " is an invalid name."
                }
            };
            if (Object.prototype.hasOwnProperty.call(i, a)) return {
                err: {
                    code: "InvalidAttr",
                    msg: "attribute " + a + " is repeated."
                }
            };
            i[a] = 1;
        }
        return !0;
    }
    function l(t, e) {
        return s.doesMatch(t, e);
    }
    function u(t, e) {
        return !s.doesNotMatch(t, e);
    }
    var s = r(9), c = {
        allowBooleanAttributes: !1,
        localeRange: "a-zA-Z"
    }, h = [ "allowBooleanAttributes", "localeRange" ];
    e.validate = function(t, e) {
        e = s.buildOptions(e, c, h);
        var r = [], l = !1;
        "\ufeff" === t[0] && (t = t.substr(1));
        for (var f = new RegExp("^[_w][\\w\\-.:]*$".replace("_w", "_" + e.localeRange)), d = new RegExp("^([w]|_)[\\w.\\-_:]*".replace("([w", "([" + e.localeRange)), y = 0; y < t.length; y++) {
            if ("<" !== t[y]) {
                if (" " === t[y] || "\t" === t[y] || "\n" === t[y] || "\r" === t[y]) continue;
                return {
                    err: {
                        code: "InvalidChar",
                        msg: "char " + t[y] + " is not expected ."
                    }
                };
            }
            if (y++, "?" === t[y]) {
                if ((y = n(t, ++y)).err) return y;
            } else {
                if ("!" === t[y]) {
                    y = i(t, y);
                    continue;
                }
                var v = !1;
                "/" === t[y] && (v = !0, y++);
                for (var p = ""; y < t.length && ">" !== t[y] && " " !== t[y] && "\t" !== t[y] && "\n" !== t[y] && "\r" !== t[y]; y++) p += t[y];
                if ("/" === (p = p.trim())[p.length - 1]) {
                    p = p.substring(0, p.length - 1);
                    continue;
                }
                if (!u(p, d)) return {
                    err: {
                        code: "InvalidTag",
                        msg: "Tag " + p + " is an invalid name."
                    }
                };
                var g = o(t, y);
                if (!1 === g) return {
                    err: {
                        code: "InvalidAttr",
                        msg: 'Attributes for "' + p + '" have open quote.'
                    }
                };
                var m = g.value;
                if (y = g.index, "/" === m[m.length - 1]) {
                    var b = a(m = m.substring(0, m.length - 1), e, f);
                    if (!0 !== b) return b;
                    l = !0;
                } else if (v) {
                    if (!g.tagClosed) return {
                        err: {
                            code: "InvalidTag",
                            msg: 'closing tag "' + p + "\" don't have proper closing."
                        }
                    };
                    if (m.trim().length > 0) return {
                        err: {
                            code: "InvalidTag",
                            msg: 'closing tag "' + p + "\" can't have attributes or invalid starting."
                        }
                    };
                    var w = r.pop();
                    if (p !== w) return {
                        err: {
                            code: "InvalidTag",
                            msg: "closing tag " + w + " is expected inplace of " + p + "."
                        }
                    };
                } else {
                    var x = a(m, e, f);
                    if (!0 !== x) return x;
                    r.push(p), l = !0;
                }
                for (y++; y < t.length; y++) if ("<" === t[y]) {
                    if ("!" === t[y + 1]) {
                        y = i(t, ++y);
                        continue;
                    }
                    break;
                }
                "<" === t[y] && y--;
            }
        }
        return l ? !(r.length > 0) || {
            err: {
                code: "InvalidXml",
                msg: "Invalid " + JSON.stringify(r, null, 4).replace(/\r?\n/g, "") + " found."
            }
        } : {
            err: {
                code: "InvalidXml",
                msg: "Start tag expected."
            }
        };
    };
    var f = '"', d = "'", y = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
}, function(t, e, r) {
    r.r(e);
    var n = r(14);
    r.d(e, "View", function() {
        return n.default;
    });
    var i = r(15);
    r.d(e, "Image", function() {
        return i.default;
    });
    var o = r(16);
    r.d(e, "Text", function() {
        return o.default;
    });
    var a = r(17);
    r.d(e, "ScrollView", function() {
        return a.default;
    });
}, function(e, r, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        })(e);
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function l(t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t;
    }
    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? s(t) : e;
    }
    function s(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && f(t, e);
    }
    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    n.r(r), n.d(r, "default", function() {
        return y;
    });
    var d = n(1), y = function(t) {
        function e(t) {
            var r, n = t.style, i = void 0 === n ? {} : n, a = t.props, l = void 0 === a ? {} : a, s = t.idName, h = void 0 === s ? "" : s, f = t.className, d = void 0 === f ? "" : f;
            return o(this, e), r = u(this, c(e).call(this, {
                props: l,
                idName: h,
                className: d,
                style: i
            })), r.type = "View", r.ctx = null, r.renderBoxes = [], r;
        }
        return h(e, d["default"]), l(e, [ {
            key: "destroySelf",
            value: function() {
                this.isDestroyed = !0, this.children = null;
            }
        }, {
            key: "checkNeedRender",
            value: function() {
                var t = this.style || {}, e = t.borderColor;
                return !!(t.backgroundColor || t.borderWidth && e || t.borderTopWidth && (e || t.borderTopColor) || t.borderBottomWidth && (e || t.borderBottomColor) || t.borderLeftWidth && (e || t.borderLeftColor) || t.borderRightWidth && (e || t.borderRightColor));
            }
        }, {
            key: "render",
            value: function(t, e) {
                var r = this.style || {}, n = e || this.layoutBox;
                t.save();
                var i = r.borderWidth || 0, o = n.absoluteX, a = n.absoluteY, l = r.borderLeftWidth || i, u = r.borderRightWidth || i, s = r.borderTopWidth || i, c = r.borderBottomWidth || i;
                this.renderBorder(t, e), r.backgroundColor && (t.fillStyle = r.backgroundColor, 
                t.fillRect(o + l, a + u, n.width - (l + u), n.height - (s + c))), t.restore();
            }
        }, {
            key: "insert",
            value: function(t, e) {
                this.ctx = t, e || (e = this.layoutBox), this.renderBoxes.push({
                    ctx: t,
                    box: e
                }), this.render(t, e);
            }
        }, {
            key: "repaint",
            value: function() {
                var t = this;
                this.renderBoxes.forEach(function(e) {
                    t.render(e.ctx, e.box);
                });
            }
        } ]), e;
    }();
}, function(e, r, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        })(e);
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function l(t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t;
    }
    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e;
    }
    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && f(t, e);
    }
    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    n.r(r), n.d(r, "default", function() {
        return p;
    });
    var d = n(1), y = n(6), v = new (n(4).default)("imgPool"), p = function(t) {
        function e(t) {
            var r;
            o(this, e);
            var n = t.style, i = void 0 === n ? {} : n, a = t.props, l = void 0 === a ? {} : a, h = t.idName, f = void 0 === h ? "" : h, d = t.className, y = void 0 === d ? "" : d, v = t.src, p = void 0 === v ? "" : v;
            return r = u(this, s(e).call(this, {
                props: l,
                idName: f,
                className: y,
                style: i
            })), r.imgsrc = p, Object.defineProperty(c(r), "src", {
                get: function() {
                    return this.imgsrc;
                },
                set: function(t) {
                    var e = this;
                    t !== this.imgsrc && (this.imgsrc = t, this.initImg(function() {
                        e.emit("repaint");
                    }));
                },
                enumerable: !0,
                configurable: !0
            }), r.type = "Image", r.renderBoxes = [], r;
        }
        return h(e, d["default"]), l(e, [ {
            key: "repaint",
            value: function() {
                var t = this;
                this.renderBoxes.forEach(function(e) {
                    t.renderImg(e.ctx, e.box, !1);
                });
            }
        }, {
            key: "destroySelf",
            value: function() {
                this.isDestroyed = !0, this.img && (this.img.onloadcbks = [], this.img.onload = null, 
                this.img.onerror = null), this.img = null, delete this.src, this.off("img__load__done");
            }
        }, {
            key: "initImg",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.none;
                this.img = null, this.imgLoadDone = !1;
                var r = v.get(this.src);
                if (!this.src) return this.imgLoadDone = !0, void e();
                r && r.loadDone ? (this.img = r, this.imgLoadDone = !0, e()) : r && !r.loadDone ? (this.img = r, 
                r.onloadcbks.push(function() {
                    t.img && (t.imgLoadDone = !0, t.emit("img__load__done"), e());
                })) : (this.img = Object(y.createImage)(), this.img.onloadcbks = [], v.set(this.src, this.img), 
                this.img.onload = function() {
                    t.img && (t.img && (t.img.onloadcbks.forEach(function(t) {
                        return t();
                    }), t.img.onloadcbks = [], t.img.loadDone = !0, t.imgLoadDone = !0), t.emit("img__load__done"), 
                    e());
                }, this.img.onerror = function(t) {
                    console.log("img load error", t);
                }, this.img.src = this.src);
            }
        }, {
            key: "renderImg",
            value: function(t, e) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (this.img) {
                    var n = this.style || {}, i = e || this.layoutBox;
                    t.save(), n.borderColor && (t.strokeStyle = n.borderColor), t.lineWidth = n.borderWidth || 0;
                    var o = i.absoluteX, a = i.absoluteY;
                    this.renderBorder(t, e), t.drawImage(this.img, o, a, i.width, i.height), t.restore(), 
                    r && this.EE.emit("image__render__done");
                }
            }
        }, {
            key: "insert",
            value: function(t, e) {
                var r = this;
                this.renderBoxes.push({
                    ctx: t,
                    box: e
                }), this.initImg(function() {
                    r.renderImg(t, e);
                });
            }
        } ]), e;
    }();
}, function(e, r, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        })(e);
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function l(t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t;
    }
    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e;
    }
    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && f(t, e);
    }
    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function d(t, e) {
        var r = w();
        return r.font = "".concat(t.fontWeight || "normal", " ").concat(t.fontSize || 12, "px ").concat(t.fontFamily || m), 
        r.measureText(e).width || 0;
    }
    function y(t) {
        return w().measureText(t).width || 0;
    }
    function v(t, e) {
        e = String(e);
        var r = t.width, n = d(t, e), i = t.textOverflow || "ellipsis";
        if (n <= r) return e;
        "ellipsis" === i && (r -= y("..."));
        for (var o = e.length - 1, a = e.substring(0, o); y(a) > r && o > 0; ) o--, a = e.substring(0, o);
        return o && "ellipsis" === i ? a + "..." : a;
    }
    n.r(r), n.d(r, "default", function() {
        return x;
    });
    var p = n(1), g = n(6), m = "PingFangSC-Regular, sans-serif", b = null, w = function() {
        if (b) return b;
        var t = Object(g.createCanvas)();
        return t.width = 1, t.height = 1, b = t.getContext("2d");
    }, x = function(t) {
        function e(t) {
            var r, n = t.style, i = void 0 === n ? {} : n, a = t.props, l = void 0 === a ? {} : a, h = t.idName, f = void 0 === h ? "" : h, y = t.className, p = void 0 === y ? "" : y, g = t.value, m = void 0 === g ? "" : g;
            return o(this, e), void 0 === i.width ? i.width = d(i, m) : "ellipsis" === i.textOverflow && (m = v(i, m)), 
            r = u(this, s(e).call(this, {
                props: l,
                idName: f,
                className: p,
                style: i
            })), r.type = "Text", r.ctx = null, r.valuesrc = m, r.renderBoxes = [], Object.defineProperty(c(r), "value", {
                get: function() {
                    return this.valuesrc;
                },
                set: function(t) {
                    t !== this.valuesrc && (this.valuesrc = t, this.emit("repaint"));
                },
                enumerable: !0,
                configurable: !0
            }), r;
        }
        return h(e, p["default"]), l(e, [ {
            key: "toCanvasData",
            value: function() {
                var t = this.style || {};
                this.fontSize = t.fontSize || 12, this.textBaseline = "top", this.font = "".concat(t.fontWeight || "", " ").concat(t.fontSize || 12, "px ").concat(m), 
                this.textAlign = t.textAlign || "left", this.fillStyle = t.color || "#000";
            }
        }, {
            key: "insert",
            value: function(t, e) {
                this.renderBoxes.push({
                    ctx: t,
                    box: e
                }), this.render(t, e);
            }
        }, {
            key: "repaint",
            value: function() {
                var t = this;
                this.renderBoxes.forEach(function(e) {
                    t.render(e.ctx, e.box);
                });
            }
        }, {
            key: "render",
            value: function(t, e) {
                this.toCanvasData(), t.save();
                var r = e || this.layoutBox, n = this.style;
                t.textBaseline = this.textBaseline, t.font = this.font, t.textAlign = this.textAlign;
                var i = r.absoluteX, o = r.absoluteY;
                this.renderBorder(t, e), n.backgroundColor && (t.fillStyle = n.backgroundColor, 
                t.fillRect(i, o, r.width, r.height)), t.fillStyle = this.fillStyle, "center" === this.textAlign ? i += r.width / 2 : "right" === this.textAlign && (i += r.width), 
                n.lineHeight && (t.textBaseline = "middle", o += n.lineHeight / 2), t.fillText(this.value, i, o), 
                t.restore();
            }
        } ]), e;
    }();
}, function(e, r, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        })(e);
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function l(t, e, r) {
        return e && a(t.prototype, e), r && a(t, r), t;
    }
    function u(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e;
    }
    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && f(t, e);
    }
    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    n.r(r), n.d(r, "default", function() {
        return b;
    });
    var d = n(14), y = n(4), v = n(18), p = n(6), g = 0, m = new y.default("canvasPool"), b = function(t) {
        function e(t) {
            var r, n = t.style, i = void 0 === n ? {} : n, a = t.props, l = void 0 === a ? {} : a, h = t.name, f = void 0 === h ? "" : h;
            return o(this, e), r = u(this, s(e).call(this, {
                props: l,
                name: f,
                style: i
            })), r.type = "ScrollView", r.top = 0, r.touch = new v.default(), r.pageHeight = 2e3, 
            r.pageCount = 1, r.canvasMap = {}, r.throttleRepaint = Object(p.throttle)(r.clipRepaint, 16, c(r)), 
            r.renderTimers = [], r;
        }
        return h(e, d["default"]), l(e, [ {
            key: "initRepaint",
            value: function() {
                var t = this;
                this.on("repaint", function() {
                    t.clear(), t.repaint(), t.clipRepaint(-t.top);
                });
            }
        }, {
            key: "clear",
            value: function() {
                var t = this;
                Object.keys(this.canvasMap).forEach(function(e) {
                    var r = t.canvasMap[e];
                    r.context && r.context.clearRect(0, 0, r.canvas.width, r.canvas.height);
                });
            }
        }, {
            key: "repaint",
            value: function(t) {
                var e = this;
                t || (t = this);
                var r = t.children;
                Object.keys(r).forEach(function(t) {
                    var n = r[t];
                    n.repaint(), e.repaint(n);
                });
            }
        }, {
            key: "updateRenderPort",
            value: function(t) {
                this.renderport = t;
            }
        }, {
            key: "calPageData",
            value: function() {
                this.pageCount = Math.ceil((this.scrollHeight + this.layoutBox.absoluteY) / this.pageHeight);
                for (var t = 0; t < this.pageCount; t++) {
                    var e = m.get(t);
                    e ? (e.context && e.context.clearRect(0, 0, e.canvas.width, e.canvas.height), e.elements = [], 
                    this.canvasMap[t] = e) : (this.canvasMap[t] = {
                        elements: []
                    }, m.set(t, this.canvasMap[t]));
                }
            }
        }, {
            key: "destroySelf",
            value: function() {
                this.touch = null, this.isDestroyed = !0, this.throttleRepaint = null, this.renderTimers.forEach(function(t) {
                    clearTimeout(t);
                }), this.renderTimers = [], this.canvasMap = {}, this.ctx = null, this.children = null;
            }
        }, {
            key: "clipRepaint",
            value: function(t) {
                if (!this.isDestroyed) {
                    t = -t, this.top = t;
                    var e = this.layoutBox, r = e.absoluteY;
                    if (!this.isDestroyed && this.root.state !== p.STATE.CLEAR) {
                        this.ctx.clearRect(e.absoluteX, r, e.width, e.height), this.ctx.fillStyle = this.parent.style.backgroundColor || "#ffffff", 
                        this.ctx.fillRect(e.absoluteX, r, e.width, e.height);
                        for (var n = 0; n < this.pageCount; n++) {
                            var i = this.canvasMap[n].canvas, o = r + t, a = r + t + e.height;
                            if (o < this.pageHeight * (n + 1) && a > this.pageHeight * n) {
                                var l = r + t - this.pageHeight * n, u = e.height, s = r;
                                l > 0 && this.pageHeight - l < e.height ? u = this.pageHeight - l : l < 0 && (u = l + e.height, 
                                s -= l, l = 0), this.ctx.drawImage(i, e.absoluteX, l, e.width, u, e.absoluteX, s, e.width, u);
                            }
                        }
                    }
                }
            }
        }, {
            key: "renderChildren",
            value: function(t) {
                var e = this, r = t.children, n = this.pageHeight;
                Object.keys(r).forEach(function(t) {
                    var i = r[t], o = i.layoutBox.originalAbsoluteY, a = Math.floor(o / n), l = a + 1;
                    if (i.layoutBox.absoluteY -= e.pageHeight * a, i.checkNeedRender() && e.canvasMap[a].elements.push({
                        element: i,
                        box: i.layoutBox
                    }), o + i.layoutBox.height > n * l) {
                        var u = Object.assign({}, i.layoutBox);
                        u.absoluteY = o - e.pageHeight * l, i.checkNeedRender() && e.canvasMap[l].elements.push({
                            element: i,
                            box: u
                        });
                    }
                    e.renderChildren(i);
                });
            }
        }, {
            key: "insertElements",
            value: function(t) {
                var e = this, r = Object(p.createCanvas)(), n = r.getContext("2d");
                if (r.width = this.renderport.width, r.height = this.pageHeight, n.id = ++g, this.canvasMap[t].canvas = r, 
                this.canvasMap[t].context = n, this.canvasMap[t].elements.forEach(function(t) {
                    t.element.insert(n, t.box);
                }), t < this.pageCount - 1) {
                    var i = setTimeout(function() {
                        e.insertElements(++t);
                    }, 250);
                    this.renderTimers.push(i);
                }
            }
        }, {
            key: "insertScrollView",
            value: function(t) {
                var e = this;
                this.insert(t), this.calPageData(), this.renderChildren(this), this.insertElements(0), 
                this.clipRepaint(-this.top), this.EE.on("image__render__done", function() {
                    e.throttleRepaint(-e.top || 0);
                }), this.scrollHeight > this.layoutBox.height && (this.touch.setTouchRange(-(this.scrollHeight - this.layoutBox.height), 0, this.clipRepaint.bind(this)), 
                this.on("touchstart", this.touch.startFunc), this.on("touchmove", this.touch.moveFunc), 
                this.on("touchend", this.touch.endFunc));
            }
        }, {
            key: "scrollHeight",
            get: function() {
                var t = Object.keys(this.children), e = this.children[t[t.length - 1]];
                return e.layoutBox.top + e.layoutBox.height;
            }
        } ]), e;
    }();
}, function(t, e, r) {
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    function o(t, e, r) {
        return e && i(t.prototype, e), r && i(t, r), t;
    }
    r.r(e), r.d(e, "default", function() {
        return u;
    });
    var a = r(6), l = Object(a.getDpr)(), u = function() {
        function t() {
            n(this, t), this.needProcess = !1, this.startFunc = this.touchStartHandler.bind(this), 
            this.endFunc = this.touchEndHandler.bind(this), this.moveFunc = this.touchMoveHandler.bind(this);
        }
        return o(t, [ {
            key: "reset",
            value: function() {
                this.touchTime = new Date(), this.touchStartX = 0, this.touchStartY = 0, this.start = 0, 
                this.end = 0, this.move = 0, this.target = 0, this.scroll = null, "undefined" != typeof cancelAnimationFrame && cancelAnimationFrame(this.animate);
            }
        }, {
            key: "enable",
            value: function() {
                this.reset(), this.needProcess = !0;
            }
        }, {
            key: "disable",
            value: function() {
                this.needProcess = !1;
            }
        }, {
            key: "setTouchRange",
            value: function(t, e, r) {
                this.enable(), this.start = t, this.end = e, 0 === t && 0 === e || (this.scroll = r);
            }
        }, {
            key: "limitTarget",
            value: function(t) {
                var e = t;
                return t > this.end ? e = this.end : t < this.start && (e = this.start), e;
            }
        }, {
            key: "touchStartHandler",
            value: function(t) {
                var e = t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || t;
                e && e.pageX && e.pageY && (this.touchStartX = e.clientX * l, this.touchStartY = e.clientY * l, 
                this.touchTime = new Date(), this.isMoving = !0, this.needProcess = !0, this.animate = requestAnimationFrame(this.loop.bind(this)));
            }
        }, {
            key: "touchMoveHandler",
            value: function(t) {
                if (this.isMoving) {
                    var e = t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || t;
                    if (e && e.pageX && e.pageY) {
                        var r = e.clientY * l;
                        (this.touchStartY - r > 2 || this.touchStartY - r < -2) && (this.target -= this.touchStartY - r), 
                        this.target = this.limitTarget(this.target), this.touchStartY = r;
                    }
                }
            }
        }, {
            key: "touchEndHandler",
            value: function() {
                this.isMoving = !1;
                var t = (Date.now() - this.touchTime) / 1e3;
                t < .9 && (this.target += .6 * (this.target - this.move) / (5 * t), this.target = this.limitTarget(this.target));
            }
        }, {
            key: "loop",
            value: function() {
                this.needProcess ? (this.isMoving ? this.move !== this.target && (Math.abs(this.target - this.move) > 1 ? this.move += .4 * (this.target - this.move) : this.move = this.target, 
                this.scroll && this.scroll(this.move)) : this.move !== this.target ? (Math.abs(this.target - this.move) > 1 ? this.move += .3 * (this.target - this.move) : this.move = this.target, 
                this.scroll && this.scroll(this.move)) : this.needProcess = !1, this.animate = requestAnimationFrame(this.loop.bind(this))) : "undefined" != typeof cancelAnimationFrame && cancelAnimationFrame(this.animate);
            }
        } ]), t;
    }();
} ]);