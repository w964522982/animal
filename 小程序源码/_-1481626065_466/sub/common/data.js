function e() {}

function t() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
    wx.getUserInfo({
        openIdList: [ "selfOpenId" ],
        success: function(e) {
            n(e.data[0] || {});
        },
        fail: function(e) {
            console.log("getUserInfo fail", e), setTimeout(function() {
                t(n);
            }, 2e3);
        }
    });
}

function n(e) {
    var t = void 0;
    try {
        t = JSON.parse(e.KVDataList[0].value);
    } catch (e) {
        t = 0;
    }
    return t;
}

function a(t) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
    wx.getFriendCloudStorage({
        keyList: [ t ],
        success: function(e) {
            if (e) {
                e.data = e.data.filter(function(e) {
                    return e.KVDataList.length;
                });
                for (var t = e.data.map(function(e) {
                    var t = n(e);
                    return e.starSum = t, e.nickname && (e.nickname = e.nickname.replace(/"/g, "###doublequote###").replace(/'/g, "###singlequote###")), 
                    e;
                }), a = 0; a < t.length; a++) t[a].rank = a + 1;
                o(t);
            } else console.log("undefined err");
        },
        fail: function(e) {
            console.log("getFriendData fail", e), setTimeout(function() {
                a(t, o);
            }, 2e3);
        }
    });
}

function o(e, t, a) {
    wx.getGroupCloudStorage({
        shareTicket: t,
        keyList: [ e ],
        success: function(e) {
            e.data = e.data.filter(function(e) {
                return e.KVDataList.length;
            });
            for (var t = e.data.map(function(e) {
                var t = n(e);
                return e.starSum = t || 0, e;
            }), o = 0; o < t.length; o++) t[o].rank = o + 1;
            a(t);
        },
        fail: function(n) {
            console.log("wx.getGroupCloudStorage fail", n), setTimeout(function() {
                o(e, t, a);
            }, 2e3);
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserInfo = t, exports.getDataFromSource = n, exports.findSelf = function(e, t) {
    var a = {
        index: -1,
        self: null
    };
    return e.forEach(function(e, o) {
        if (e.avatarUrl === t.avatarUrl) {
            a.self = e;
            var r = n(e);
            a.self.starSum = r, a.index = o;
        }
    }), a;
}, exports.getGiftData = function(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, a = [];
    wx.getFriendCloudStorage({
        keyList: [ t ],
        success: function(e) {
            if (e) {
                for (var t = e.data, o = 0; o < t.length; o++) {
                    var r = t[o].KVDataList;
                    if (t[o].nickname = t[o].nickname.replace(/"/g, "###doublequote###").replace(/'/g, "###singlequote###"), 
                    !(r.length <= 0) && "friendGift_1" === r[0].key) {
                        var i = JSON.parse(r[0].value), u = new Date();
                        if ((u = u.getUTCFullYear() + "-" + u.getUTCMonth() + "-" + u.getUTCDate()) != i.date) continue;
                        a.push({
                            openid: t[o].openid,
                            value: i
                        });
                    }
                }
                n(a);
            } else console.log("undefined err");
        },
        fail: function(e) {
            console.log("tag", e);
        }
    });
}, exports.getFriendData = a, exports.getGroupData = o;