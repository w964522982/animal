function e(e, t) {
    e.type && !a(e.type) ? t(null, null) : n(e, t);
}

function t(e, t) {
    cc.LoadingItems.getQueue(e).addListener(e.id, function(e) {
        e.error && (e.url in T ? delete T[e.url] : w.cleanCache(t));
    });
}

function n(e, t) {
    var n = e.url, i = u.readText;
    o(e.type) === I.BIN && (i = u.readArrayBuffer);
    var l = i(n, function(i, l) {
        i ? t(i) : l ? (e.states[cc.loader.downloader.id] = cc.Pipeline.ItemState.COMPLETE, 
        t(null, l)) : t(new Error("Empty file: " + n));
    });
    l && t(l);
}

function i(e, t) {
    var n = u.checkFsValid();
    n ? t(n) : w.REMOTE_SERVER_ROOT ? c(e, t) : t(null, null);
}

function l(e, t, n) {
    if (T[e] = {
        isCopy: t,
        cachePath: n
    }, !E) {
        E = !0, setTimeout(function e() {
            for (var t in T) {
                if (w.outOfStorage) E = !1; else {
                    var n = T[t], i = w.cacheDir + "/" + n.cachePath, l = u.copyFile;
                    n.isCopy || (l = u.downloadFile), l(t, i, function(i) {
                        if (E = !1, i) {
                            if (O.test(i.message)) return void (w.outOfStorage = !0);
                        } else d[n.cachePath] = 1, delete T[t], r();
                        cc.js.isEmptyObject(T) || E || (E = !0, setTimeout(e, w.cachePeriod));
                    });
                }
                return;
            }
            E = !1;
        }, w.cachePeriod);
    }
}

function c(n, i) {
    var c = n.url;
    if (f.test(c)) i(null, null); else {
        var r = w.REMOTE_SERVER_ROOT + "/" + c;
        n.url = r;
        var a = w.getCacheName(c);
        cc.sys.os === cc.sys.OS_ANDROID && n.type && o(n.type) === I.IMAGE ? (w.cacheAsset && (l(r, !1, a), 
        t(n, a)), i(null, null)) : u.downloadFile(r, void 0, function(c, r) {
            c ? i(c, null) : (n.url = r, w.cacheAsset && (l(r, !0, a), t(n, a)), e(n, i));
        });
    }
}

function r(e) {
    p ? e && v.push(e) : (p = setTimeout(function() {
        p = null, D = !0, u.writeFile(w.cacheDir + "/" + w.cachedFileName, JSON.stringify(d), "utf8", function() {
            D = !1;
            for (var e = 0, t = v.length; e < t; e++) v[e]();
            v.length = 0, v.push.apply(v, y), y.length = 0;
        });
    }, w.writeFilePeriod), !0 === D ? e && y.push(e) : e && v.push(e));
}

function a(e) {
    return o(e) >= I.LOADABLE_MIN;
}

function o(e) {
    return m[e] || I.DEFAULT;
}

var s = "WXDownloader", u = require("./wx-fs-utils"), f = /^\w+:\/\/.*/, h = null, d = null, p = null, T = null, E = !1, O = /the maximum size of the file storage/, A = {}, g = window.WXDownloader = function() {
    this.id = s, this.async = !0, this.pipeline = null, this.REMOTE_SERVER_ROOT = "", 
    this.SUBCONTEXT_ROOT = "";
};

g.ID = s, g.prototype.init = function() {
    if (!CC_WECHATGAMESUB) {
        this.cacheDir = wx.env.USER_DATA_PATH + "/gamecaches", this.cachedFileName = "cacheList.json", 
        this.cacheAsset = !0, this.cachePeriod = 500, this.outOfStorage = !1, this.writeFilePeriod = 2e3, 
        T = {}, h = {};
        var e = this.cacheDir + "/" + this.cachedFileName;
        (d = u.readJsonSync(e)) instanceof Error && (d = {}, u.makeDirSync(this.cacheDir, !0), 
        u.writeFileSync(e, JSON.stringify(d), "utf8"));
    }
}, g.prototype.handle = function(n, l) {
    function c(t) {
        t ? e(n, l) : i(n, l);
    }
    if ("js" === n.type) return null;
    if ("uuid" === n.type) {
        var a = cc.Pipeline.Downloader.PackDownloader.load(n, l);
        if (void 0 !== a) return a || void 0;
    }
    if (CC_WECHATGAMESUB) return f.test(n.url) ? null : (n.url = this.SUBCONTEXT_ROOT + "/" + n.url, 
    u.checkFsValid() ? null : void e(n, l));
    var o = w.getCacheName(n.url);
    if (o in d) if (h[n.url]) e(n, l); else {
        var s = w.cacheDir + "/" + o;
        u.exists(s, function(i) {
            i ? (A[o] = !0, n.url = s, h[n.url] = i, t(n, o), e(n, l)) : (delete d[o], delete A[o], 
            r(), n.url in h ? c(h[n.url]) : u.exists(n.url, function(e) {
                h[n.url] = e, c(e);
            }));
        });
    } else n.url in h ? c(h[n.url]) : u.exists(n.url, function(e) {
        h[n.url] = e, c(e);
    });
}, g.prototype.cleanOldAssets = function() {
    return cc.warn("wxDownloader.cleanOldAssets has been deprecated, please use wxDownloader.cleanOldCaches instead!"), 
    this.cleanOldCaches();
}, g.prototype.cleanOldCaches = function() {
    this.cleanAllCaches(A, function(e) {
        if (e) cc.warn(e); else {
            for (var t in A) cc.log("reserve local file: " + t);
            cc.log("Clean old Assets successfully!");
        }
    });
}, g.prototype.getCacheName = function(e) {
    var t = /\//g;
    return e.replace(t, "-");
}, g.prototype.getCachedFileList = function() {
    return d;
}, g.prototype.cleanCache = function(e) {
    if (e in d) {
        var t = this;
        delete d[e], h[e] && delete h[e], r(function() {
            e in d || u.deleteFile(t.cacheDir + "/" + e, function(e) {
                e || (t.outOfStorage = !1);
            });
        });
    }
}, g.prototype.cleanAllAssets = function() {
    cc.warn("wxDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!"), 
    this.cleanAllCaches(null, function(e) {
        e && cc.error(e.message);
    });
}, g.prototype.cleanAllCaches = function(e, t) {
    e = e || {};
    var n = this, i = u.readDir(n.cacheDir, function(i, l) {
        if (i) t && t(i); else {
            for (var c = [], a = 0, o = l.length; a < o; a++) {
                var s = l[a];
                s !== n.cachedFileName && (s in e || (s in T ? delete T[s] : (delete d[s], h[s] && delete h[s], 
                c.push(s))));
            }
            r(function() {
                for (var e = 0, i = 0, l = c.length; i < l; i++) c[i] in d ? ++e === l && (n.outOfStorage = !1, 
                t && t(null)) : u.deleteFile(n.cacheDir + "/" + c[i], function(i) {
                    ++e === l && (n.outOfStorage = !1, t && t(null));
                });
            });
        }
    });
    i && t(i);
};

var w = window.wxDownloader = new g(), v = [], y = [], D = !1, I = {
    IMAGE: 1,
    FONT: 2,
    AUDIO: 3,
    SCRIPT: 4,
    TEXT: 5,
    BIN: 6,
    DEFAULT: 7,
    LOADABLE_MIN: 5
}, m = {
    js: I.SCRIPT,
    png: I.IMAGE,
    jpg: I.IMAGE,
    bmp: I.IMAGE,
    jpeg: I.IMAGE,
    gif: I.IMAGE,
    ico: I.IMAGE,
    tiff: I.IMAGE,
    webp: I.IMAGE,
    image: I.IMAGE,
    mp3: I.AUDIO,
    ogg: I.AUDIO,
    wav: I.AUDIO,
    m4a: I.AUDIO,
    txt: I.TEXT,
    xml: I.TEXT,
    vsh: I.TEXT,
    fsh: I.TEXT,
    atlas: I.TEXT,
    tmx: I.TEXT,
    tsx: I.TEXT,
    json: I.TEXT,
    ExportJson: I.TEXT,
    plist: I.TEXT,
    fnt: I.TEXT,
    font: I.FONT,
    eot: I.FONT,
    ttf: I.FONT,
    woff: I.FONT,
    svg: I.FONT,
    ttc: I.FONT,
    binary: I.BIN,
    dbbin: I.BIN,
    bin: I.BIN,
    pvr: I.BIN,
    pkm: I.BIN
};