function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t() {
    (0, u.getUserInfo)(function(e) {
        c = e, v = [], (0, u.getGiftData)("friendGift_1", function(e) {
            l(v = e);
        });
    });
}

function n() {
    (0, u.getUserInfo)(function(e) {
        c = e, (0, u.getFriendData)(s, function(e) {
            for (var t = 0; t < e.length; t++) if (e[t].openid == m || "qqPlay_" + e[t].openid == m) {
                d = e[t];
                break;
            }
            h = !1, _ || r.default.draw(e, d, "group");
        });
    });
}

function i(e, t, n) {
    if (!g) {
        g = !0;
        for (var i = e.openid, l = !1, a = 0; a < v.length; a++) {
            var r = v[a].value.receiveRecords;
            if (v[a].openid == i) for (var o = 0; o < r.length; o++) if (r[o] == t.openid) {
                l = !0;
                break;
            }
        }
        i === t.openid || l ? g = !1 : wx.modifyFriendInteractiveStorage({
            key: "1",
            opNum: 1,
            operation: "add",
            toUser: i,
            title: "送你5个盘子哟，快打开看看",
            imageUrlId: "HfIZAKauSo2sWouwG9lQOA",
            imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmBDj51M8jQxOeia0T8OKcicZ6jNzPEM2A9eakZvYbrufts9OogseIwGq5/0",
            success: function() {
                n[0].src = "sub/Buffet_icon_GiftPlate_0.png", g = !1, v.push({
                    openid: i,
                    value: {
                        receiveRecords: [ t.openid ]
                    }
                });
            },
            fail: function(e) {
                console.log("err", e), "modifyFriendInteractiveStorage:fail cancel" != e.errMsg && f("网络错误，请稍后再试"), 
                g = !1;
            }
        });
    }
}

function f(e) {
    if (!y) {
        y = !0, b = wx.getSharedCanvas(), w = b.getContext("2d");
        var t = wx.createCanvas(), n = b.width, i = b.height;
        t.width = n, t.height = i;
        var f = t.getContext("2d");
        f.fillStyle = "#FBF3E5", f.fillRect(n / 2 - 400, i / 2 - 85, 800, 120), f.fillStyle = "#452E27", 
        f.fillRect(n / 2 - 400, i / 2 - 90, 800, 10), f.fillStyle = "#452E27", f.fillRect(n / 2 - 400, i / 2 + 20, 800, 10), 
        f.fillStyle = "#452E27", f.fillRect(n / 2 - 400, i / 2 - 90, 10, 120), f.fillStyle = "#452E27", 
        f.fillRect(n / 2 + 400, i / 2 - 90, 10, 120), f.fillStyle = "#452E27", f.textAlign = "center", 
        f.font = "50px Helvetica", f.fillText(e, n / 2, i / 2 - 10), w.drawImage(t, 0, 0, n, i, 0, 0, n, i), 
        y = !1;
    }
}

function l(e) {
    (0, u.getFriendData)(s, function(t) {
        for (var n = 0; n < t.length; n++) if (t[n].openid == m) {
            d = t[n];
            break;
        }
        for (var f = 0; f < t.length; f++) {
            t[f].openid == d.openid ? t[f].btnUrl = "sub/Buffet_icon_GiftPlate_0.png" : t[f].btnUrl = "sub/Buffet_icon_GiftPlate.png";
            for (var l = 0; l < e.length; l++) {
                var a = e[l].value.receiveRecords;
                if (e[l].openid == t[f].openid) for (var u = 0; u < a.length; u++) if (a[u] == d.openid) {
                    t[f].btnUrl = "sub/Buffet_icon_GiftPlate_0.png";
                    break;
                }
            }
        }
        if (h = !1, !_) {
            r.default.draw(t, d);
            for (var c = o.default.getElementsByClassName("giftBtn"), s = 0; s < c.length; s++) c[s].off("click", function(e) {});
            for (var g = 0; g < c.length; g++) !function(e) {
                c[e].on("click", function(n) {
                    var f = o.default.getElementsById("img" + e);
                    i(t[e], d, f);
                });
            }(g);
        }
    });
}

function a(e) {
    (0, u.getUserInfo)(function(t) {
        c = t, (0, u.getGroupData)(s, e, function(e) {
            for (var t = 0; t < e.length; t++) if (e[t].openid == m || "qqPlay_" + e[t].openid == m) {
                d = e[t];
                break;
            }
            h = !1, !_ && d && r.default.draw(e, d, "group");
        });
    });
}

var r = e(require("./render.js")), o = e(require("open-data-context-engine/index.js")), u = require("common/data.js"), c = void 0, d = void 0, s = "starSum", g = !1, p = !1, v = [], _ = null, h = null, m = null, b = null, w = null, y = !1;

v = [], o.default.loadImgs([ "sub/Buffet_icon_GiftPlate_0.png", "sub/Buffet_icon_GiftPlate.png", "sub/UI_Icon_Rating.png" ]), 
wx.onMessage(function(e) {
    if ("updateViewPort" === e.event) r.default.updateViewPort(e); else if ("selfOpenid" == e.action) m = e.data; else if ("initOldVersion" === e.event) {
        if (_ = !1, h) return;
        h = !0, p = !0, o.default.clear(), n();
    } else if ("init" === e.event) {
        if (_ = !1, h) return;
        h = !0, o.default.clear(), p ? n() : t();
    } else if ("initGroup" === e.event) {
        if (_ = !1, h) return;
        e.shareTicket && (h = !0, o.default.clear(), a(e.shareTicket));
    } else "close" === e.event && (_ = !0, o.default.clear());
});