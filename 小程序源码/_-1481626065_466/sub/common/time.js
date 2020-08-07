function e(e) {
    try {
        return JSON.parse(JSON.stringify(e));
    } catch (t) {
        return e;
    }
}

function t(e) {
    return void 0 == e ? null : e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0;
}

function n(e, n) {
    if (void 0 == e || void 0 == n) return null;
    var r = [];
    for (r[0] = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], r[1] = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]; n < 0; ) e -= 1, 
    n += 12;
    return r[t(e)][n];
}

function r(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    void 0 == e && (e = 0);
    var n = 0;
    n = void 0 == t || null == t ? new Date() : new Date(t);
    var r = new Date(n.getTime() - 24 * e * 3600 * 1e3), a = r.getFullYear(), o = r.getMonth(), u = r.getDate();
    return {
        ms: +new Date(a, o, u),
        s: parseInt(+new Date(a, o, u) / 1e3)
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCurrTime = function() {
    return parseInt(+new Date() / 1e3);
}, exports.deepCopy = e, exports.getSomeDaysBefore = r, exports.getMonday = function(t) {
    var n = 0, a = 0;
    return void 0 == t || null == t ? a = (n = new Date()).getTime() : (n = new Date(t), 
    a = e(t)), r(0 == n.getDay() ? 6 : n.getDay(), a);
}, exports.getLastSunday = function(t) {
    var n = 0, a = 0;
    return void 0 == t || null == t ? a = (n = new Date()).getTime() : (n = new Date(t), 
    a = e(t)), r(0 == n.getDay() ? 7 : n.getDay(), a);
}, exports.getFirstDayOfSomeMonthsBefore = function(e, t) {
    void 0 == e && (e = 0);
    for (var n = 0, r = (n = void 0 == t || null == t ? new Date() : new Date(t)).getFullYear(), a = n.getMonth() - e; a < 0; ) r -= 1, 
    a += 12;
    for (;a > 11; ) r += 1, a -= 12;
    return {
        ms: +new Date(r, a, 1),
        s: parseInt(+new Date(r, a, 1) / 1e3)
    };
}, exports.getLastDayOfSomeMonthsBefore = function(e, t) {
    void 0 == e && (e = 0);
    for (var r = 0, a = (r = void 0 == t || null == t ? new Date() : new Date(t)).getFullYear(), o = r.getMonth() - e; o < 0; ) a -= 1, 
    o += 12;
    var u = n(a, o);
    return {
        ms: +new Date(a, o, u),
        s: parseInt(+new Date(a, o, u) / 1e3)
    };
};