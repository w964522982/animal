exports.main = function(e) {
    try {
        e = JSON.parse(e);
        var r = wx.getOpenId(), t = e.toUser, i = wx.getFriendUserStorage([ "friendGift_1" ]), n = new Date();
        n = n.getUTCFullYear() + "-" + n.getUTCMonth() + "-" + n.getUTCDate();
        var s = !1, a = i.user_item.find(function(e) {
            return e.openid === t;
        });
        if (a) {
            var o = a.kv_list[a.kv_list.length - 1], c = o && o.value;
            (c = function(e) {
                return e && (e = JSON.parse(e)).date != n && (e = null), e || (e = {
                    receiveRecords: [],
                    date: n
                }), e;
            }(c)) && c.receiveRecords.some(function(e) {
                return e === r;
            }) || (c.receiveRecords.push(r), 0 === wx.setFriendUserStorage(t, [ {
                key: "friendGift_1",
                value: JSON.stringify(c)
            } ]).errcode ? s = !0 : console.error("fail"));
        }
        return s ? JSON.stringify({
            ret: !0
        }) : "validate fail";
    } catch (e) {
        console.error(e.message);
    }
};