window.boot = function() {
    var e = window._CCSettings;
    if (window._CCSettings = void 0, !e.debug) {
        var s = e.uuids, r = e.rawAssets, a = e.assetTypes, i = e.rawAssets = {};
        for (var c in r) {
            var t = r[c], o = i[c] = {};
            for (var n in t) {
                var u = t[n], d = u[1];
                "number" == typeof d && (u[1] = a[d]), o[s[n] || n] = u;
            }
        }
        for (var g = e.scenes, b = 0; b < g.length; ++b) {
            var l = g[b];
            "number" == typeof l.uuid && (l.uuid = s[l.uuid]);
        }
        var v = e.packedAssets;
        for (var p in v) for (var w = v[p], f = 0; f < w.length; ++f) "number" == typeof w[f] && (w[f] = s[w[f]]);
        var m = e.subpackages;
        for (var j in m) {
            var y = m[j].uuids;
            if (y) for (var A = 0, k = y.length; A < k; A++) "number" == typeof y[A] && (y[A] = s[y[A]]);
        }
    }
    var C = e.jsList, h = e.debug ? "src/project.dev.js" : "src/project.bc454.js";
    C ? (C = C.map(function(e) {
        return "src/" + e;
    })).push(h) : C = [ h ];
    var M = {
        id: "GameCanvas",
        scenes: e.scenes,
        debugMode: e.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: e.debug,
        frameRate: 60,
        jsList: C,
        groupList: e.groupList,
        collisionMatrix: e.collisionMatrix
    };
    cc.AssetLibrary.init({
        libraryPath: "res/import",
        rawAssetsBase: "res/raw-",
        rawAssets: e.rawAssets,
        packedAssets: e.packedAssets,
        md5AssetsMap: e.md5AssetsMap,
        subpackages: e.subpackages
    }), cc.game.run(M, function() {
        cc.loader.downloader._subpackages = e.subpackages, cc.view.enableRetina(!0), cc.view.resizeWithBrowserSize(!0);
        var s = e.launchScene;
        cc.director.loadScene(s, null, function() {
            if (cc.sys.isBrowser) {
                document.getElementById("GameCanvas").style.visibility = "";
                var e = document.getElementById("GameDiv");
                e && (e.style.backgroundImage = "");
            }
            cc.loader.onProgress = null, console.log("Success to load scene: " + s);
        });
    });
};

window.jsb && ("function" == typeof loadRuntime ? (require("src/settings.30a49.js"), 
require("src/cocos2d-runtime.js"), require("jsb-adapter/engine/index.js")) : (require("src/settings.30a49.js"), 
require("src/cocos2d-jsb.js"), require("jsb-adapter/jsb-engine.js")), cc.macro.CLEANUP_IMAGE_CACHE = !0, 
window.boot());