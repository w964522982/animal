require("libs/weapp-adapter/index");

var e = require("libs/xmldom/dom-parser");

window.DOMParser = e.DOMParser, require("libs/wx-downloader.js"), require("src/settings.30a49");

window._CCSettings;

require("main.88664"), require("cocos/cocos2d-js-min.js"), require("./libs/engine/index.js"), 
cc.view._maxPixelRatio = 3, wxDownloader.REMOTE_SERVER_ROOT = "https://restaurant-1257666530.file.myqcloud.com/2.5", 
wxDownloader.SUBCONTEXT_ROOT = "";

var r = cc.loader.subPackPipe || cc.loader.md5Pipe || cc.loader.assetLoader;

if (cc.loader.insertPipeAfter(r, wxDownloader), cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
    var o = require("src/subdomain.json.js");
    cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
        cc.Pipeline.Downloader.PackDownloader._doPreload("WECHAT_SUBDOMAIN", o);
    }), require("./libs/sub-context-adapter");
} else cc.macro.CLEANUP_IMAGE_CACHE = !0;

wxDownloader.init(), window.boot();