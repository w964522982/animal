cc && cc.Audio && (cc.Audio.prototype.stop = function() {
    this._element && (this._element.stop(), this._element.currentTime = 0, this._unbindEnded(), 
    this.emit("stop"), this._state = cc.Audio.State.STOPPED);
});