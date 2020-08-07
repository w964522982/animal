Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var s = ' <view class="container" id="main"> <view class="rankList"> <scrollview class="groupList"> ', t = e.data;
    if (t) for (var a, l = -1, i = t.length - 1; l < i; ) a = t[l += 1], s += ' <view class="listItem"> <text class="listItemNum" value="' + (l + 1) + '"></text> <image class="listHeadImg" src="' + a.avatarUrl + '"></image> <text class="selfListName" value="' + a.nickname + '"></text> <image class="selfListStarImg" src="' + e.starUrl + '"></image> <text class="listScore" value ="' + a.starSum + '"></text> </view> ';
    return s += ' </scrollview> <view class="selfRank"> <text class="listItemNum" value="' + e.selfIndex + '"></text> <image class="listHeadImg" src="' + e.self.avatarUrl + '"></image> <text class="selfListName" value="' + e.self.nickname + '"></text> <image class="selfListStarImg" src="sub/UI_Icon_Rating.png"></image> <text class="listScore" value ="' + e.self.starSum + '"></text> </view> </view> </view>';
};