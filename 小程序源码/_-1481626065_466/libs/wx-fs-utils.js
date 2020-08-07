function e() {
    return i ? null : (console.warn("can not get the file system!"), new Error("file system does not exist!"));
}

function n(n, r) {
    var l = e();
    if (l) return l;
    i.unlink({
        filePath: n,
        success: function() {
            cc.log("Removed local file " + n + " successfully!"), r && r(null);
        },
        fail: function(e) {
            console.warn(e.errMsg), r && r(new Error(e.errMsg));
        }
    });
}

function r(n, r, l) {
    var t = e();
    if (t) return t;
    i.readFile({
        filePath: n,
        encoding: r,
        success: l ? function(e) {
            l(null, e.data);
        } : void 0,
        fail: function(e) {
            console.warn(e.errMsg), l && l(new Error(e.errMsg), null);
        }
    });
}

var i = wx.getFileSystemManager ? wx.getFileSystemManager() : null;

window.wxFsUtils = module.exports = {
    fs: i,
    checkFsValid: e,
    readDir: function(n, r) {
        var l = e();
        if (l) return l;
        i.readdir({
            dirPath: n,
            success: r ? function(e) {
                r(null, e.files);
            } : void 0,
            fail: r ? function(e) {
                r(new Error(e.errMsg), null);
            } : void 0
        });
    },
    exists: function(n, r) {
        var l = e();
        if (l) return l;
        i.access({
            path: n,
            success: r ? function() {
                r(!0);
            } : void 0,
            fail: r ? function() {
                r(!1);
            } : void 0
        });
    },
    copyFile: function(n, r, l) {
        var t = e();
        if (t) return t;
        i.copyFile({
            srcPath: n,
            destPath: r,
            success: function() {
                cc.log("copy file finished:" + r), l && l(null);
            },
            fail: function(e) {
                cc.log("copy file failed:" + e.errMsg), l && l(new Error(e.errMsg));
            }
        });
    },
    downloadFile: function(e, r, i) {
        wx.downloadFile({
            url: e,
            filePath: r,
            success: function(r) {
                200 === r.statusCode ? i && i(null, r.tempFilePath || r.filePath) : (r.filePath && n(r.filePath), 
                console.warn("Download file failed: " + e), console.warn(r.errMsg), i && i(new Error(r.errMsg), null));
            },
            fail: function(n) {
                console.warn("Download file failed: " + e), console.warn(n.errMsg), i && i(new Error(n.errMsg), null);
            }
        });
    },
    readText: function(e, n) {
        return r(e, "utf8", n);
    },
    readArrayBuffer: function(e, n) {
        return r(e, "", n);
    },
    saveFile: function(e, n, r) {
        wx.saveFile({
            tempFilePath: e,
            filePath: n,
            success: function(e) {
                cc.log("save file finished:" + n), r && r(null, e.savedFilePath);
            },
            fail: function(e) {
                cc.log("save file failed:" + e.errMsg), r && r(new Error(e.errMsg), null);
            }
        });
    },
    writeFile: function(n, r, l, t) {
        var o = e();
        if (o) return o;
        i.writeFile({
            filePath: n,
            encoding: l,
            data: r,
            success: t ? function() {
                t(null);
            } : void 0,
            fail: function(e) {
                console.warn(e.errMsg), t && t(new Error(e.errMsg));
            }
        });
    },
    deleteFile: n,
    writeFileSync: function(n, r, l) {
        var t = e();
        if (t) return t;
        try {
            return i.writeFileSync(n, r, l), null;
        } catch (e) {
            return console.warn(e.message), new Error(e.message);
        }
    },
    readJsonSync: function(n) {
        var r = e();
        if (r) return r;
        try {
            var l = i.readFileSync(n, "utf8");
            return JSON.parse(l);
        } catch (e) {
            return console.warn(e.message), new Error(e.message);
        }
    },
    makeDirSync: function(n, r) {
        var l = e();
        if (l) return l;
        try {
            return i.mkdirSync(n, r), null;
        } catch (e) {
            return console.warn(e.message), new Error(e.message);
        }
    }
};