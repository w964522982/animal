function r(r) {
    var e = r.url;
    return wx.loadFont(e) || "Arial";
}

function e(r, o, n) {
    function t() {
        c.removeEventListener("load", t), c.removeEventListener("error", i), c.id = r.id, 
        o(null, c);
    }
    function i() {
        c.removeEventListener("load", t), c.removeEventListener("error", i), "https:" !== window.location.protocol && c.crossOrigin && "anonymous" === c.crossOrigin.toLowerCase() ? e(r, o, !1) : o(new Error(cc.debug.getError(4930, a)));
    }
    void 0 === n && (n = !0);
    var a = r.url, c = new Image();
    n && "file:" !== window.location.protocol ? c.crossOrigin = "anonymous" : c.crossOrigin = null, 
    c.addEventListener("load", t), c.addEventListener("error", i), c.src = a;
}

cc.loader.downloader.loadSubpackage = function(r, e) {
    wx.loadSubpackage({
        name: r,
        success: function() {
            e && e();
        },
        fail: function() {
            e && e(new Error("Failed to load subpackage " + r));
        }
    });
}, cc.loader.downloader.addHandlers({
    js: function(r, e, o) {
        var n = "../../" + r.url;
        require(n), e(null, r.url);
    },
    png: e,
    jpg: e,
    bmp: e,
    jpeg: e,
    gif: e,
    ico: e,
    tiff: e,
    webp: function(r, o) {
        return cc.sys.capabilities.webp ? e(r, o) : new Error(cc.debug.getError(4929, r.url));
    },
    image: e
}), cc.loader.loader.addHandlers({
    font: r,
    eot: r,
    ttf: r,
    woff: r,
    svg: r,
    ttc: r
});