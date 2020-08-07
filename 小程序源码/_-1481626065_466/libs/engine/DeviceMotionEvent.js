var e = _cc.inputManager, c = !1;

Object.assign(e, {
    setAccelerometerEnabled: function(e) {
        var c = cc.director.getScheduler();
        c.enableForTarget(this), e ? (this._registerAccelerometerEvent(), c.scheduleUpdate(this)) : (this._unregisterAccelerometerEvent(), 
        c.unscheduleUpdate(this));
    },
    _registerAccelerometerEvent: function() {
        if (this._accelCurTime = 0, c) wx.startAccelerometer && wx.startAccelerometer({
            fail: function(e) {
                cc.error("register Accelerometer failed ! err: " + e);
            },
            success: function() {},
            complete: function() {}
        }); else {
            c = !0;
            var e = this;
            this._acceleration = new cc.Acceleration(), wx.onAccelerometerChange && wx.onAccelerometerChange(function(c) {
                var r = c.x, t = c.y, n = wx.getSystemInfoSync(), i = n.windowWidth;
                if (n.windowHeight < i) {
                    var o = r;
                    r = -t, t = o;
                }
                e._acceleration.x = r, e._acceleration.y = t, e._acceleration.z = c.z;
            });
        }
    },
    _unregisterAccelerometerEvent: function() {
        this._accelCurTime = 0, wx.stopAccelerometer && wx.stopAccelerometer({
            fail: function(e) {
                cc.error("unregister Accelerometer failed ! err: " + e);
            },
            success: function() {},
            complete: function() {}
        });
    }
});