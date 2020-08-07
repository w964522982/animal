function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), n = require("common/time.js"), r = e(require("common/config.js")), a = e(require("render/style.js")), s = e(require("render/tplfn.js")), u = e(require("render/tplfnGroup.js")), o = e(require("open-data-context-engine/index.js")), l = wx.getSystemInfoSync(), f = function() {
    function e() {
        t(this, e), this.title = r.default.title, this.unit = r.default.unit, this.sort = r.default.sort, 
        this.period = r.default.period, this.selfTitle = r.default.selfTitle, this.currScore = 0, 
        this.startTime = (0, n.getSomeDaysBefore)(999).s, this.sharedCanvas = wx.getSharedCanvas(), 
        this.sharedContext = this.sharedCanvas.getContext("2d");
    }
    return i(e, [ {
        key: "dataFilter",
        value: function(e) {
            var t = this;
            "history" !== this.period && (e = e.filter(function(e) {
                return e.update_time >= t.startTime;
            })), "up" == this.sort ? e.sort(function(e, t) {
                return e.starSum - t.starSum;
            }) : e.sort(function(e, t) {
                return t.starSum - e.starSum;
            }), e.forEach(function(e, t) {
                return e.rank = t + 1;
            });
        }
    }, {
        key: "draw",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            this.dataFilter(e), e.length > 25 && e.splice(25, e.length - 1), this.selfData = t;
            for (var n = null, r = 0; r < e.length; r++) e[r].nickname = e[r].nickname.replace(/"/g, "###doublequote###").replace(/'/g, "###singlequote###");
            (n = "group" === i ? (0, u.default)({
                data: e,
                self: t || {},
                starUrl: "sub/UI_Icon_Rating.png",
                selfIndex: this.selfData.rank || "25+"
            }) : (0, s.default)({
                data: e,
                self: t || {},
                kingUrl: "sub/UI_icon_King.png",
                selfIndex: this.selfData.rank || "25+"
            })) && (o.default.init(n, a.default, function(e) {
                return e.replace(/###singlequote###/g, "'").replace(/###doublequote###/g, '"');
            }), o.default.layout(this.sharedContext));
        }
    }, {
        key: "setTitle",
        value: function(e) {
            this.title = String(e);
        }
    }, {
        key: "setUnit",
        value: function(e) {
            this.unit = String(e);
        }
    }, {
        key: "setSelfTitle",
        value: function(e) {
            this.selfTitle = String(e);
        }
    }, {
        key: "setSort",
        value: function(e) {
            this.sort = e;
        }
    }, {
        key: "setPeriod",
        value: function(e) {
            this.period = e;
            var t = void 0;
            switch (this.period) {
              case "week":
                t = (0, n.getMonday)().s;
                break;

              case "month":
                t = (0, n.getFirstDayOfSomeMonthsBefore)(0).s;
                break;

              case "day":
                t = (0, n.getSomeDaysBefore)(0).s;
                break;

              default:
                t = (0, n.getSomeDaysBefore)(9999).s;
            }
            this.startTime = t;
        }
    }, {
        key: "disable",
        value: function() {}
    }, {
        key: "updateViewPort",
        value: function(e) {
            var t = e.box, i = e.winSize, n = l.screenWidth * (t.x / i.width), r = l.screenHeight * (t.y / i.height), a = l.screenWidth * (t.width / i.width), s = l.screenHeight * (t.height / i.height);
            o.default.updateViewPort({
                width: a,
                height: s,
                x: n,
                y: r
            });
        }
    } ]), e;
}();

exports.default = new f();