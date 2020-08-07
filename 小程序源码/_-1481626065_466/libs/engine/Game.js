var e = 60;

cc.game.setFrameRate = function(i) {
    e = i, wx.setPreferredFramesPerSecond ? wx.setPreferredFramesPerSecond(i) : (this._intervalId && window.cancelAnimFrame(this._intervalId), 
    this._intervalId = 0, this._paused = !0, this._setAnimFrame(), this._runMainLoop());
}, cc.game._setAnimFrame = function() {
    this._lastTime = performance.now(), this._frameTime = 1e3 / e, 60 !== e && 30 !== e ? (window.requestAnimFrame = this._stTime, 
    window.cancelAnimFrame = this._ctTime) : (window.requestAnimFrame = window.requestAnimationFrame || this._stTime, 
    window.cancelAnimFrame = window.cancelAnimationFrame || this._ctTime);
}, cc.game.getFrameRate = function() {
    return e;
}, cc.game._runMainLoop = function() {
    var e, i = this, n = i.config, t = cc.director, a = !0, r = n.frameRate;
    cc.debug.setDisplayStats(n.showFPS), e = function() {
        if (!i._paused) {
            if (i._intervalId = window.requestAnimFrame(e), 30 === r && (a = !a)) return;
            t.mainLoop();
        }
    }, i._intervalId = window.requestAnimFrame(e), i._paused = !1;
}, cc.game.end = function() {};