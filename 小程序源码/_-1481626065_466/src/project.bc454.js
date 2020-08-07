var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

window.__require = function e(t, i, n) {
    function a(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var h = "function" == typeof __require && __require;
                    if (!r && h) return h(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
            }
            var l = i[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                return a(t[s][1][e] || e);
            }, l, l.exports, e, t, i, n);
        }
        return i[s].exports;
    }
    for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) a(n[s]);
    return a;
}({
    AdSDKPlatformManager: [ function(e, t, i) {
        cc._RF.push(t, "82b8bS16J5PJ43mghfBMnAg", "AdSDKPlatformManager");
        var n = {
            SDKRewardVideoAd: function(e) {
                "number" == typeof e && (e = String(e)), this.RewardAdCallback && this.RewardAdCallback(e);
            },
            SDKBannerAd: function(e) {
                "number" == typeof e && (e = String(e)), this.BannerAdCallback && this.BannerAdCallback(e);
            },
            SDKInterstitialAd: function(e) {
                "number" == typeof e && (e = String(e)), this.InterstitialCallback && this.InterstitialCallback(e);
            },
            SDKAndroidBack: function() {
                e("userData").sendMessage("on_android_back");
            },
            SDKFacebookLoginCallback: function(e, t, i, n) {
                this.facebookLoginCallback && this.facebookLoginCallback(e, t, i, n);
            },
            SDKFacebookShareCallback: function(e) {
                this.fbShareCallback && this.fbShareCallback(e);
            },
            SDKLineLoginCallback: function(e, t, i) {
                this.lineLoginCallback && this.lineLoginCallback(e, t, i);
            },
            SDKLineShareCallback: function(e) {
                this.lineShareCallback && this.lineShareCallback(e);
            },
            SDKDeviceInfoCallback: function(e, t, i, n, a, o) {
                this.DeviceInfoCallback && this.DeviceInfoCallback(e, t, i, n, a, o);
            },
            TapTapTalkOpenCallback: function(e) {
                this.TapTapTalkCallback && this.TapTapTalkCallback(e);
            },
            SDKAppleLoginCallback: function(e, t, i, n, a, o) {
                this.appleLoginCallback && this.appleLoginCallback(e, t, i, n, a, o);
            },
            SDKAppleShareCallback: function(e) {
                console.log("hereh is SDKAppleShareCallback"), this.appleShareCallback && this.appleShareCallback(e);
            },
            CheckAppleIdStatus: function(e) {
                this.getAppleIdStatus && this.getAppleIdStatus(e);
            },
            SDKNativeShareCallback: function(e) {
                this.nativeShareCallback && this.nativeShareCallback(e);
            }
        };
        window.AdSDKPlatformManager = n, t.exports = n, cc._RF.pop();
    }, {
        userData: "userData"
    } ],
    CryptoJS: [ function(e, t, i) {
        cc._RF.push(t, "1201elX57dFfonDf7YGLdFO", "CryptoJS");
        var n = n || function(e, t) {
            var i = {}, n = i.lib = {}, a = function() {}, o = n.Base = {
                extend: function(e) {
                    a.prototype = this;
                    var t = new a();
                    return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments);
                    }), t.init.prototype = t, t.$super = this, t;
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, s = n.WordArray = o.extend({
                init: function(e, t) {
                    e = this.words = e || [], this.sigBytes = void 0 != t ? t : 4 * e.length;
                },
                toString: function(e) {
                    return (e || c).stringify(this);
                },
                concat: function(e) {
                    var t = this.words, i = e.words, n = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), n % 4) for (var a = 0; a < e; a++) t[n + a >>> 2] |= (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 24 - (n + a) % 4 * 8; else if (65535 < i.length) for (a = 0; a < e; a += 4) t[n + a >>> 2] = i[a >>> 2]; else t.push.apply(t, i);
                    return this.sigBytes += e, this;
                },
                clamp: function() {
                    var t = this.words, i = this.sigBytes;
                    t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, t.length = e.ceil(i / 4);
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0), e;
                },
                random: function(t) {
                    for (var i = [], n = 0; n < t; n += 4) i.push(4294967296 * e.random() | 0);
                    return new s.init(i, t);
                }
            }), r = i.enc = {}, c = r.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; n < e; n++) {
                        var a = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16));
                    }
                    return i.join("");
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new s.init(i, t / 2);
                }
            }, h = r.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                    return i.join("");
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new s.init(i, t);
                }
            }, l = r.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(h.stringify(e)));
                    } catch (e) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function(e) {
                    return h.parse(unescape(encodeURIComponent(e)));
                }
            }, u = n.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new s.init(), this._nDataBytes = 0;
                },
                _append: function(e) {
                    "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                },
                _process: function(t) {
                    var i = this._data, n = i.words, a = i.sigBytes, o = this.blockSize, r = a / (4 * o);
                    if (t = (r = t ? e.ceil(r) : e.max((0 | r) - this._minBufferSize, 0)) * o, a = e.min(4 * t, a), 
                    t) {
                        for (var c = 0; c < t; c += o) this._doProcessBlock(n, c);
                        c = n.splice(0, t), i.sigBytes -= a;
                    }
                    return new s.init(c, a);
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(), e;
                },
                _minBufferSize: 0
            });
            n.Hasher = u.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset();
                },
                reset: function() {
                    u.reset.call(this), this._doReset();
                },
                update: function(e) {
                    return this._append(e), this._process(), this;
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, i) {
                        return new e.init(i).finalize(t);
                    };
                },
                _createHmacHelper: function(e) {
                    return function(t, i) {
                        return new d.HMAC.init(e, i).finalize(t);
                    };
                }
            });
            var d = i.algo = {};
            return i;
        }(Math);
        (function() {
            var e = n, t = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words, i = e.sigBytes, n = this._map;
                    e.clamp(), e = [];
                    for (var a = 0; a < i; a += 3) for (var o = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; 4 > s && a + .75 * s < i; s++) e.push(n.charAt(o >>> 6 * (3 - s) & 63));
                    if (t = n.charAt(64)) for (;e.length % 4; ) e.push(t);
                    return e.join("");
                },
                parse: function(e) {
                    var i = e.length, n = this._map;
                    (a = n.charAt(64)) && -1 != (a = e.indexOf(a)) && (i = a);
                    for (var a = [], o = 0, s = 0; s < i; s++) if (s % 4) {
                        var r = n.indexOf(e.charAt(s - 1)) << s % 4 * 2, c = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
                        a[o >>> 2] |= (r | c) << 24 - o % 4 * 8, o++;
                    }
                    return t.create(a, o);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
        })(), function(e) {
            function t(e, t, i, n, a, o, s) {
                return ((e = e + (t & i | ~t & n) + a + s) << o | e >>> 32 - o) + t;
            }
            function i(e, t, i, n, a, o, s) {
                return ((e = e + (t & n | i & ~n) + a + s) << o | e >>> 32 - o) + t;
            }
            function a(e, t, i, n, a, o, s) {
                return ((e = e + (t ^ i ^ n) + a + s) << o | e >>> 32 - o) + t;
            }
            function o(e, t, i, n, a, o, s) {
                return ((e = e + (i ^ (t | ~n)) + a + s) << o | e >>> 32 - o) + t;
            }
            for (var s = n, r = (h = s.lib).WordArray, c = h.Hasher, h = s.algo, l = [], u = 0; 64 > u; u++) l[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
            h = h.MD5 = c.extend({
                _doReset: function() {
                    this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, n) {
                    for (var s = 0; 16 > s; s++) {
                        var r = e[u = n + s];
                        e[u] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    }
                    s = this._hash.words;
                    var c, h, u = e[n + 0], d = (r = e[n + 1], e[n + 2]), f = e[n + 3], g = e[n + 4], p = e[n + 5], m = e[n + 6], y = e[n + 7], v = e[n + 8], b = e[n + 9], _ = e[n + 10], w = e[n + 11], S = e[n + 12], T = e[n + 13], k = e[n + 14], x = e[n + 15], D = s[0], A = o(A = o(A = o(A = o(A = a(A = a(A = a(A = a(A = i(A = i(A = i(A = i(A = t(A = t(A = t(A = t(A = s[1], h = t(h = s[2], c = t(c = s[3], D = t(D, A, h, c, u, 7, l[0]), A, h, r, 12, l[1]), D, A, d, 17, l[2]), c, D, f, 22, l[3]), h = t(h, c = t(c, D = t(D, A, h, c, g, 7, l[4]), A, h, p, 12, l[5]), D, A, m, 17, l[6]), c, D, y, 22, l[7]), h = t(h, c = t(c, D = t(D, A, h, c, v, 7, l[8]), A, h, b, 12, l[9]), D, A, _, 17, l[10]), c, D, w, 22, l[11]), h = t(h, c = t(c, D = t(D, A, h, c, S, 7, l[12]), A, h, T, 12, l[13]), D, A, k, 17, l[14]), c, D, x, 22, l[15]), h = i(h, c = i(c, D = i(D, A, h, c, r, 5, l[16]), A, h, m, 9, l[17]), D, A, w, 14, l[18]), c, D, u, 20, l[19]), h = i(h, c = i(c, D = i(D, A, h, c, p, 5, l[20]), A, h, _, 9, l[21]), D, A, x, 14, l[22]), c, D, g, 20, l[23]), h = i(h, c = i(c, D = i(D, A, h, c, b, 5, l[24]), A, h, k, 9, l[25]), D, A, f, 14, l[26]), c, D, v, 20, l[27]), h = i(h, c = i(c, D = i(D, A, h, c, T, 5, l[28]), A, h, d, 9, l[29]), D, A, y, 14, l[30]), c, D, S, 20, l[31]), h = a(h, c = a(c, D = a(D, A, h, c, p, 4, l[32]), A, h, v, 11, l[33]), D, A, w, 16, l[34]), c, D, k, 23, l[35]), h = a(h, c = a(c, D = a(D, A, h, c, r, 4, l[36]), A, h, g, 11, l[37]), D, A, y, 16, l[38]), c, D, _, 23, l[39]), h = a(h, c = a(c, D = a(D, A, h, c, T, 4, l[40]), A, h, u, 11, l[41]), D, A, f, 16, l[42]), c, D, m, 23, l[43]), h = a(h, c = a(c, D = a(D, A, h, c, b, 4, l[44]), A, h, S, 11, l[45]), D, A, x, 16, l[46]), c, D, d, 23, l[47]), h = o(h, c = o(c, D = o(D, A, h, c, u, 6, l[48]), A, h, y, 10, l[49]), D, A, k, 15, l[50]), c, D, p, 21, l[51]), h = o(h, c = o(c, D = o(D, A, h, c, S, 6, l[52]), A, h, f, 10, l[53]), D, A, _, 15, l[54]), c, D, r, 21, l[55]), h = o(h, c = o(c, D = o(D, A, h, c, v, 6, l[56]), A, h, x, 10, l[57]), D, A, m, 15, l[58]), c, D, T, 21, l[59]), h = o(h, c = o(c, D = o(D, A, h, c, g, 6, l[60]), A, h, w, 10, l[61]), D, A, d, 15, l[62]), c, D, b, 21, l[63]);
                    s[0] = s[0] + D | 0, s[1] = s[1] + A | 0, s[2] = s[2] + h | 0, s[3] = s[3] + c | 0;
                },
                _doFinalize: function() {
                    var t = this._data, i = t.words, n = 8 * this._nDataBytes, a = 8 * t.sigBytes;
                    i[a >>> 5] |= 128 << 24 - a % 32;
                    var o = e.floor(n / 4294967296);
                    for (i[15 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    i[14 + (a + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    t.sigBytes = 4 * (i.length + 1), this._process(), i = (t = this._hash).words, n = 0; 4 > n; n++) a = i[n], 
                    i[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                    return t;
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            }), s.MD5 = c._createHelper(h), s.HmacMD5 = c._createHmacHelper(h);
        }(Math), function() {
            var e, t = n, i = (e = t.lib).Base, a = e.WordArray, o = (e = t.algo).EvpKDF = i.extend({
                cfg: i.extend({
                    keySize: 4,
                    hasher: e.MD5,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e);
                },
                compute: function(e, t) {
                    for (var i = (r = this.cfg).hasher.create(), n = a.create(), o = n.words, s = r.keySize, r = r.iterations; o.length < s; ) {
                        c && i.update(c);
                        var c = i.update(e).finalize(t);
                        i.reset();
                        for (var h = 1; h < r; h++) c = i.finalize(c), i.reset();
                        n.concat(c);
                    }
                    return n.sigBytes = 4 * s, n;
                }
            });
            t.EvpKDF = function(e, t, i) {
                return o.create(i).compute(e, t);
            };
        }(), n.lib.Cipher || function(e) {
            var t = (g = n).lib, i = t.Base, a = t.WordArray, o = t.BufferedBlockAlgorithm, s = g.enc.Base64, r = g.algo.EvpKDF, c = t.Cipher = o.extend({
                cfg: i.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t);
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t);
                },
                init: function(e, t, i) {
                    this.cfg = this.cfg.extend(i), this._xformMode = e, this._key = t, this.reset();
                },
                reset: function() {
                    o.reset.call(this), this._doReset();
                },
                process: function(e) {
                    return this._append(e), this._process();
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(e) {
                    return {
                        encrypt: function(t, i, n) {
                            return ("string" == typeof i ? p : f).encrypt(e, t, i, n);
                        },
                        decrypt: function(t, i, n) {
                            return ("string" == typeof i ? p : f).decrypt(e, t, i, n);
                        }
                    };
                }
            });
            t.StreamCipher = c.extend({
                _doFinalize: function() {
                    return this._process(!0);
                },
                blockSize: 1
            });
            var h = g.mode = {}, l = function(e, t, i) {
                var n = this._iv;
                n ? this._iv = void 0 : n = this._prevBlock;
                for (var a = 0; a < i; a++) e[t + a] ^= n[a];
            }, u = (t.BlockCipherMode = i.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t);
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t);
                },
                init: function(e, t) {
                    this._cipher = e, this._iv = t;
                }
            })).extend();
            u.Encryptor = u.extend({
                processBlock: function(e, t) {
                    var i = this._cipher, n = i.blockSize;
                    l.call(this, e, t, n), i.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
                }
            }), u.Decryptor = u.extend({
                processBlock: function(e, t) {
                    var i = this._cipher, n = i.blockSize, a = e.slice(t, t + n);
                    i.decryptBlock(e, t), l.call(this, e, t, n), this._prevBlock = a;
                }
            }), h = h.CBC = u, u = (g.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var i, n = (i = (i = 4 * t) - e.sigBytes % i) << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4) o.push(n);
                    i = a.create(o, i), e.concat(i);
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
                }
            }, t.BlockCipher = c.extend({
                cfg: c.cfg.extend({
                    mode: h,
                    padding: u
                }),
                reset: function() {
                    c.reset.call(this);
                    var e = (t = this.cfg).iv, t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor; else i = t.createDecryptor, 
                    this._minBufferSize = 1;
                    this._mode = i.call(t, this, e && e.words);
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t);
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0);
                    } else t = this._process(!0), e.unpad(t);
                    return t;
                },
                blockSize: 4
            });
            var d = t.CipherParams = i.extend({
                init: function(e) {
                    this.mixIn(e);
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this);
                }
            }), f = (h = (g.format = {}).OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext;
                    return ((e = e.salt) ? a.create([ 1398893684, 1701076831 ]).concat(e).concat(t) : t).toString(s);
                },
                parse: function(e) {
                    var t = (e = s.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                        var i = a.create(t.slice(2, 4));
                        t.splice(0, 4), e.sigBytes -= 16;
                    }
                    return d.create({
                        ciphertext: e,
                        salt: i
                    });
                }
            }, t.SerializableCipher = i.extend({
                cfg: i.extend({
                    format: h
                }),
                encrypt: function(e, t, i, n) {
                    n = this.cfg.extend(n);
                    var a = e.createEncryptor(i, n);
                    return t = a.finalize(t), a = a.cfg, d.create({
                        ciphertext: t,
                        key: i,
                        iv: a.iv,
                        algorithm: e,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: e.blockSize,
                        formatter: n.format
                    });
                },
                decrypt: function(e, t, i, n) {
                    return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(i, n).finalize(t.ciphertext);
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e;
                }
            })), g = (g.kdf = {}).OpenSSL = {
                execute: function(e, t, i, n) {
                    return n || (n = a.random(8)), e = r.create({
                        keySize: t + i
                    }).compute(e, n), i = a.create(e.words.slice(t), 4 * i), e.sigBytes = 4 * t, d.create({
                        key: e,
                        iv: i,
                        salt: n
                    });
                }
            }, p = t.PasswordBasedCipher = f.extend({
                cfg: f.cfg.extend({
                    kdf: g
                }),
                encrypt: function(e, t, i, n) {
                    return i = (n = this.cfg.extend(n)).kdf.execute(i, e.keySize, e.ivSize), n.iv = i.iv, 
                    (e = f.encrypt.call(this, e, t, i.key, n)).mixIn(i), e;
                },
                decrypt: function(e, t, i, n) {
                    return n = this.cfg.extend(n), t = this._parse(t, n.format), i = n.kdf.execute(i, e.keySize, e.ivSize, t.salt), 
                    n.iv = i.iv, f.decrypt.call(this, e, t, i.key, n);
                }
            });
        }(), function() {
            for (var e = n, t = e.lib.BlockCipher, i = e.algo, a = [], o = [], s = [], r = [], c = [], h = [], l = [], u = [], d = [], f = [], g = [], p = 0; 256 > p; p++) g[p] = 128 > p ? p << 1 : p << 1 ^ 283;
            var m = 0, y = 0;
            for (p = 0; 256 > p; p++) {
                var v = (v = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & v ^ 99;
                a[m] = v, o[v] = m;
                var b = g[m], _ = g[b], w = g[_], S = 257 * g[v] ^ 16843008 * v;
                s[m] = S << 24 | S >>> 8, r[m] = S << 16 | S >>> 16, c[m] = S << 8 | S >>> 24, h[m] = S, 
                S = 16843009 * w ^ 65537 * _ ^ 257 * b ^ 16843008 * m, l[v] = S << 24 | S >>> 8, 
                u[v] = S << 16 | S >>> 16, d[v] = S << 8 | S >>> 24, f[v] = S, m ? (m = b ^ g[g[g[w ^ b]]], 
                y ^= g[g[y]]) : m = y = 1;
            }
            var T = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            i = i.AES = t.extend({
                _doReset: function() {
                    for (var e = (i = this._key).words, t = i.sigBytes / 4, i = 4 * ((this._nRounds = t + 6) + 1), n = this._keySchedule = [], o = 0; o < i; o++) if (o < t) n[o] = e[o]; else {
                        var s = n[o - 1];
                        o % t ? 6 < t && 4 == o % t && (s = a[s >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s]) : (s = a[(s = s << 8 | s >>> 24) >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s], 
                        s ^= T[o / t | 0] << 24), n[o] = n[o - t] ^ s;
                    }
                    for (e = this._invKeySchedule = [], t = 0; t < i; t++) o = i - t, s = t % 4 ? n[o] : n[o - 4], 
                    e[t] = 4 > t || 4 >= o ? s : l[a[s >>> 24]] ^ u[a[s >>> 16 & 255]] ^ d[a[s >>> 8 & 255]] ^ f[a[255 & s]];
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, s, r, c, h, a);
                },
                decryptBlock: function(e, t) {
                    var i = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = i, this._doCryptBlock(e, t, this._invKeySchedule, l, u, d, f, o), 
                    i = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = i;
                },
                _doCryptBlock: function(e, t, i, n, a, o, s, r) {
                    for (var c = this._nRounds, h = e[t] ^ i[0], l = e[t + 1] ^ i[1], u = e[t + 2] ^ i[2], d = e[t + 3] ^ i[3], f = 4, g = 1; g < c; g++) {
                        var p = n[h >>> 24] ^ a[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & d] ^ i[f++], m = n[l >>> 24] ^ a[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & h] ^ i[f++], y = n[u >>> 24] ^ a[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ i[f++];
                        d = n[d >>> 24] ^ a[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & u] ^ i[f++], h = p, 
                        l = m, u = y;
                    }
                    p = (r[h >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & d]) ^ i[f++], 
                    m = (r[l >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & h]) ^ i[f++], 
                    y = (r[u >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & l]) ^ i[f++], 
                    d = (r[d >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & u]) ^ i[f++], 
                    e[t] = p, e[t + 1] = m, e[t + 2] = y, e[t + 3] = d;
                },
                keySize: 8
            }), e.AES = t._createHelper(i);
        }(), n.pad.ZeroPadding = {
            pad: function(e, t) {
                var i = 4 * t;
                e.clamp(), e.sigBytes += i - (e.sigBytes % i || i);
            },
            unpad: function(e) {
                for (var t = e.words, i = e.sigBytes - 1; !(t[i >>> 2] >>> 24 - i % 4 * 8 & 255); ) i--;
                e.sigBytes = i + 1;
            }
        }, t.exports = n, cc._RF.pop();
    }, {} ],
    FramePerGenerating: [ function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        cc._RF.push(t, "009ffaRA6pOcJ2t24w/7D0Z", "FramePerGenerating"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t;
            };
        }(), o = function() {
            function e(t, i, a) {
                n(this, e), this.index = 0, this.handler = null, this.sourceData = null, this.handler = t, 
                this.sourceData = i, this.complete = a || null;
            }
            return a(e, [ {
                key: "next",
                value: function() {
                    var e = this.index, t = this.sourceData[e];
                    return t ? (this.handler(t, e), this.index++, !0) : (this.complete && this.complete(), 
                    !1);
                }
            }, {
                key: "free",
                value: function() {
                    this.handler = null, this.sourceData = null, this.complete = null;
                }
            } ]), e;
        }();
        i.default = o, t.exports = i.default, cc._RF.pop();
    }, {} ],
    IDGenerator: [ function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        cc._RF.push(t, "0fa48zWkfZMYp/+6XtGrQ0X", "IDGenerator"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t;
            };
        }(), o = ".", s = function() {
            function e(t) {
                n(this, e), this._id = 0, this._prefix = t ? t + o : "";
            }
            return a(e, [ {
                key: "getNewId",
                value: function() {
                    return this._prefix + ++this._id;
                }
            } ]), e;
        }();
        i.default = s, t.exports = i.default, cc._RF.pop();
    }, {} ],
    Loading: [ function(e, t, i) {
        cc._RF.push(t, "85044rF8SNCnpx5o8YrJYUz", "Loading");
        var n = e("ViewMessageEnum");
        cc.Class({
            extends: e("ViewHandler"),
            properties: {},
            init: function(e) {
                this.loadingType = e;
            },
            onMessage: function(e, t) {
                switch (e) {
                  case n.CloseLoading:
                    t == this.loadingType && (this.loadingType = null, this.close());
                }
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler",
        ViewMessageEnum: "ViewMessageEnum"
    } ],
    MailData: [ function(e, t, i) {
        cc._RF.push(t, "d06e8dNUMRJa4vrEZkUan75", "MailData");
        var n = e("userData"), a = {
            mail_1: {
                img: "Mail_chaiquan1",
                prob: .8,
                weight: 0,
                carryCus: [ {
                    key: "customer_8",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    key: "customer_10",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 100,
                    cutWeight: -1e3
                } ],
                orderKey: "order_14",
                prefabName: "mailDlg",
                carryStar: {
                    number: 2800,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                star: 180
            },
            mail_2: {
                img: "Mail_baozhi1",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 300,
                    cutWeight: 0
                } ],
                prefabName: "baozhiDlg",
                star: 80
            },
            mail_3: {
                img: "Mail_xiyanghonglvxingtuan",
                orderKey: "order_15",
                isRepeat: !0,
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e4
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e4
                } ],
                carryMail: [ {
                    key: "mail_2",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "lvxingtuanDlg"
            },
            mail_4: {
                img: "Mail_tugaidexin",
                imgOffset: {
                    x: 0,
                    y: -60
                },
                orderKey: "order_16",
                isRepeat: !0,
                prob: .5,
                weight: 0,
                carryEmp: [ {
                    key: "employee_4",
                    incWeight: 30,
                    cutWeight: -1e4
                } ],
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 100,
                    cutWeight: -1e4
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 100,
                    cutWeight: -1e4
                } ],
                prefabName: "mail2Dlg"
            },
            mail_5: {
                img: "Mail_baozhi2",
                prob: 1,
                weight: 0,
                carryCus: [ {
                    key: "customer_67",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    key: "customer_62",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "baozhiDlg",
                star: 240
            },
            mail_6: {
                img: "Mail_shexiangxiaogou",
                prob: .6,
                weight: 0,
                carryCus: [ {
                    key: "customer_58",
                    incWeight: 80,
                    cutWeight: -1e3
                } ],
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 40,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 40,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 40,
                    cutWeight: -1e3
                } ],
                prefabName: "mailDlg",
                star: 170
            },
            mail_7: {
                img: "Mail_bianmudexin",
                imgOffset: {
                    x: 40,
                    y: 0
                },
                prob: 1,
                weight: 0,
                carryCus: [ {
                    key: "customer_3",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryOrder: [ {
                    key: "order_7",
                    incWeight: 100,
                    cutWeight: -1e3
                } ],
                prefabName: "mail3Dlg",
                star: 100
            },
            mail_8: {
                img: "Mail_bianmudemingxinpian",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_7",
                    incWeight: 100,
                    cutWeight: -1e3
                } ],
                prefabName: "mingxingpianDlg",
                star: 120
            },
            mail_9: {
                img: "Mail_paiduixiaogoudehuixin",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryOrder: [ {
                    key: "order_13",
                    incWeight: 70,
                    cutWeight: -1e3
                } ],
                prefabName: "mail2Dlg",
                star: 150
            },
            mail_10: {
                img: "Mail_ouxiang101",
                prob: 1,
                weight: 50,
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: 0
                } ],
                prefabName: "ouxiang101LDlg",
                star: 60
            },
            mail_11: {
                img: "Mail_chaiquanxiaobao",
                prob: .4,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 20,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 100,
                    cutWeight: 0
                } ],
                carryOrder: [ {
                    key: "order_14",
                    incWeight: 40,
                    cutWeight: -1e3
                } ],
                prefabName: "mailDlg",
                star: 200
            },
            mail_12: {
                img: "Mail_ailisi1",
                prob: 1,
                weight: 0,
                carryCus: [ {
                    key: "customer_66",
                    incWeight: 50,
                    cutWeight: -15
                } ],
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 20,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -20
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 20,
                    cutWeight: -1e3
                } ],
                prefabName: "alisDlg",
                star: 90
            },
            mail_13: {
                img: "Mail_ailisi2",
                prob: 1,
                weight: .5,
                carryCus: [ {
                    key: "customer_66",
                    incWeight: 40,
                    cutWeight: -1e3
                } ],
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 40,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 10,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 10,
                    cutWeight: -1e3
                } ],
                prefabName: "alisDlg",
                star: 140
            },
            mail_14: {
                img: "Mail_shouzhang1",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "shouzhangDlg",
                carryStar: {
                    number: 6500,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                star: 130
            },
            mail_15: {
                img: "Mail_shouzhang2",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 30,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 30,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 30,
                    cutWeight: -1e3
                } ],
                carryOrder: [ {
                    key: "order_17",
                    incWeight: 30,
                    cutWeight: -1e3
                } ],
                prefabName: "shouzhangDlg",
                star: 160
            },
            mail_16: {
                img: "Mail_shouzhang3",
                imgScale: .92,
                imgOffset: {
                    x: 10,
                    y: 25
                },
                prob: .2,
                weight: 0,
                carryCus: [ {
                    key: "customer_74",
                    incWeight: 20,
                    cutWeight: -1e4
                } ],
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 20,
                    cutWeight: -100
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 20,
                    cutWeight: -100
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 20,
                    cutWeight: -100
                } ],
                carryStar: {
                    number: 2e4,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "shouzhang2Dlg",
                star: 600
            },
            mail_17: {
                img: "Mail_sijinhexiongzhang",
                prob: 1,
                weight: 50,
                carryCus: [ {
                    key: "customer_36",
                    incWeight: 50,
                    cutWeight: -50
                } ],
                prefabName: "shouzhang3Dlg",
                star: 50
            },
            mail_18: {
                isFood: !0,
                prob: .2,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_10",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 12e3,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_19: {
                isFood: !0,
                prob: .9,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_49",
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 12800,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_20: {
                isFood: !0,
                prob: .7,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_50",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 13600,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_21: {
                isFood: !0,
                prob: .8,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_32",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 6800,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_22: {
                isFood: !0,
                prob: 1,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_22",
                carryItem: [ {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 7400,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_23: {
                isFood: !0,
                prob: .5,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_19",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 8e3,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_24: {
                isFood: !0,
                prob: .6,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_20",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 4400,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_25: {
                isFood: !0,
                prob: 1,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_5",
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 5600,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_26: {
                isFood: !0,
                prob: .7,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_46",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 6800,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_27: {
                isFood: !0,
                prob: .8,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_16",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 15800,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_28: {
                isFood: !0,
                prob: .9,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_28",
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 18200,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_29: {
                isFood: !0,
                prob: 1,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_51",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 11600,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_30: {
                isFood: !0,
                prob: .9,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_48",
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 23e3,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_31: {
                isFood: !0,
                prob: .8,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_42",
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 15200,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_32: {
                isFood: !0,
                prob: .7,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_15",
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 29e3,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_33: {
                isFood: !0,
                prob: .6,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_33",
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 18800,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_34: {
                isFood: !0,
                prob: .5,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_1",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 20400,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_35: {
                isFood: !0,
                prob: .4,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_55",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 36200,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_36: {
                isFood: !0,
                prob: .3,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_57",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 23600,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_37: {
                isFood: !0,
                prob: .2,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_62",
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 25200,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_38: {
                isFood: !0,
                prob: .1,
                weight: 0,
                prefabName: "foodPriceDlg",
                foodKey: "food_64",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 26400,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_39: {
                prefabName: "specialCard",
                img: "Mail_kingPoker",
                weight: 0,
                capsuleToyWeight: 1
            },
            mail_40: {
                isFood: !0,
                prob: 1,
                weight: .5,
                prefabName: "foodPriceDlg",
                foodKey: "food_67",
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 3e4,
                    incWeight: 100,
                    cutWeight: -1e3
                }
            },
            mail_41: {
                img: "Mail_tuzidezhangdan",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 900,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "tuzidezhangdan"
            },
            mail_42: {
                img: "Mail_yiyejiushouzhang",
                prob: .4,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 2e4,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "yiyejiushouzhang",
                star: 200
            },
            mail_43: {
                img: "Mail_xueyouyongdee",
                prob: .8,
                weight: 0,
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 5e3,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "mailDlg",
                star: 75
            },
            mail_44: {
                img: "Mail_yecandezhaopian",
                prob: .6,
                weight: 0,
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 15e3,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "mailDlg",
                star: 115
            },
            mail_45: {
                img: "Mail_xiaohulidexin",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 1e4,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "xiaohulidexinDlg",
                star: 125,
                openID: !0
            },
            mail_46: {
                img: "Mail_chaiquandelaixin3",
                prob: .4,
                weight: 0,
                carryItem: [ {
                    type: "Garden_clover",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_76",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mail4Dlg",
                star: 150
            },
            mail_47: {
                img: "Mail_heibaijundelaixin2",
                prob: .5,
                weight: 0,
                carryItem: [ {
                    type: "Garden_yinghua",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mail5Dlg",
                star: 165
            },
            mail_48: {
                img: "Mail_jidanriji",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "seed",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_79",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "jidanrijiDlg",
                star: 180
            },
            mail_49: {
                img: "Mail_jidanriji2",
                prob: .5,
                weight: 0,
                carryItem: [ {
                    type: "Garden_clover",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_yinghua",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_74",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    key: "customer_79",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "jidanrijiDlg",
                star: 200
            },
            mail_50: {
                img: "Mail_yiyejiushouzhang2",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_74",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "yiyejiushouzhang2",
                star: 220
            },
            mail_51: {
                img: "Mail_baozhibg3",
                prob: 0,
                weight: 0,
                carryStar: {
                    number: 1e6,
                    incWeight: 0,
                    cutWeight: 0
                },
                prefabName: "baozhiDlg3",
                star: 120
            },
            mail_52: {
                img: "Mail_yingyancanzhuoganxiexin",
                prob: .2,
                weight: 0,
                isCommunity: !0,
                prefabName: "gongyiDlg",
                hedwigSkip: !0
            },
            mail_53: {
                img: "Mail_shuitadelaixin1",
                prob: .15,
                weight: 0,
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_45",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "shuitadelaixin"
            },
            mail_54: {
                img: "Mail_xiaohuliriji2",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_clover",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryCus: [ {
                    key: "customer_80",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "xiaohulidexinDlg",
                star: 250,
                openID: !0
            },
            mail_55: {
                img: "Mail_xiaohuliriji3",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_54",
                    incWeight: 10,
                    cutWeight: -1e4
                }, {
                    key: "mail_45",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "xiaohulidexin3Dlg",
                star: 270,
                openID: !0
            },
            mail_56: {
                img: "Mail_shuitadelaixin2",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_baimeigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_53",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "shuitadelaixin2",
                star: 265
            },
            mail_57: {
                img: "Mail_jidanriji3",
                prob: 0,
                weight: 0,
                prefabName: "jidanrijiDlg",
                hedwigSkip: !0,
                star: 20,
                capsuleToyWeight: 20
            },
            mail_58: {
                img: "Mail_jidanriji4",
                prob: 0,
                weight: 0,
                prefabName: "jidanrijiDlg",
                hedwigSkip: !0,
                star: 35,
                capsuleToyWeight: 15
            },
            mail_59: {
                img: "Mail_jidanriji5",
                prob: 0,
                weight: 0,
                prefabName: "jidanrijiDlg",
                hedwigSkip: !0,
                star: 50,
                capsuleToyWeight: 10
            },
            mail_60: {
                img: "Mail_baozhi4",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryStar: {
                    number: 15e3,
                    incWeight: 0,
                    cutWeight: -1e3
                },
                prefabName: "baozhiDlg4",
                star: 100
            },
            mail_61: {
                img: "Mail_jidanriji6",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_fengye",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_60",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "jidanrijiDlg",
                star: 200
            },
            mail_64: {
                img: "Mail_shengdanlitiheka",
                prob: 1,
                christmas: !0,
                weight: 0,
                prefabName: "shengdanjie",
                noTitle: !0
            },
            mail_62: {
                img: "Mail_jidanriji7",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_fengye",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xuehua",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "jidanrijiDlg",
                star: 260
            },
            mail_63: {
                img: "Mail_yuekexiabaobao",
                prob: .15,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xuehua",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mail4Dlg",
                star: 280
            },
            mail_65: {
                img: "Mail_hujingdelaixin",
                prob: 1,
                weight: -500,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 300,
                    cutWeight: -1e3
                } ],
                prefabName: "hujingDlg",
                springFestival_2: !0
            },
            mail_66: {
                img: "Mail_jidanriji8",
                prob: 1,
                weight: -500,
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 300,
                    cutWeight: -1e3
                } ],
                prefabName: "jidanrijiDlg",
                springFestival_1: !0
            },
            mail_67: {
                img: "Mail_tuixiaoyuandeliwu",
                prob: .2,
                weight: 0,
                prefabName: "tuixiaoyuanDlg",
                cCard: !0,
                hedwigSkip: !0
            },
            mail_68: {
                img: "Mail_jiaoyujudexin",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "jiaoyujudexinDlg",
                star: 50,
                inTitle: "mail_68_inTitle"
            },
            mail_69: {
                img: "Mail_damaerzidelaixin",
                prob: .2,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xuehua",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_fengye",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "damaerzidelaixin",
                star: 210
            },
            mail_70: {
                img: "Mail_shiwanjinian",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 30,
                    cutWeight: -1e3
                } ],
                prefabName: "mailDlg",
                star: 60
            },
            mail_71: {
                img: "Mail_tugoudehuiyilu_1",
                prob: .15,
                weight: 0,
                carryItem: [ {
                    type: "Garden_yinghua",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 30,
                    cutWeight: -1e3
                } ],
                prefabName: "xiaohulidexinDlg",
                star: 60
            },
            mail_72: {
                img: "Mail_weipidanyingyuan",
                prob: .5,
                weight: 0,
                carryEmp: [ {
                    key: "employee_10",
                    incWeight: 30,
                    cutWeight: -1e4
                } ],
                carryItem: [ {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "pidanOuenMail"
            },
            mail_73: {
                img: "Mail_jidanriji9",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "jidanrijiDlg",
                star: 51,
                festivalKey: "workersDay"
            },
            mail_74: {
                img: "Mail_yuekexiabaobaodexin2",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_63",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "Mail_yuekexiabaobaodexin2",
                festivalKey: "mothersDay",
                outOffDayProb: .01,
                star: 80
            },
            mail_75: {
                img: "Mail_xiaohonghuajiangli",
                prob: 1,
                festivalKey: "childrenDay",
                weight: 0,
                prefabName: "shengdanjie"
            },
            mail_77: {
                img: "Mail_baozhi_5",
                prob: .5,
                weight: 0,
                carryItem: [ {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_yinghua",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "baozhiDlg3",
                star: 60
            },
            mail_78: {
                img: "Mail_baozhi6",
                prob: 1,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_1",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_clover",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_77",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "baozhiDlg3",
                star: 65
            },
            mail_81: {
                img: "Mail_chengtuanhaibao",
                prob: .4,
                weight: 0,
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                carryMail: [ {
                    key: "mail_78",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                prefabName: "shengdanjie",
                noTitle: !0,
                star: 70
            },
            mail_82: {
                img: "Mail_chaiquanxiaobaodelaixin",
                prob: .9,
                weight: 0,
                carryItem: [ {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mail3Dlg",
                festivalKey: "fathersDay",
                startDay: "2020-6-21",
                outOffDayProb: .01,
                star: 88
            },
            mail_84: {
                img: "Mail_shexiangxiaogoudelaixin2",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_clover",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mail3Dlg",
                carryMail: [ {
                    key: "mail_6",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                star: 22
            },
            mail_83: {
                img: "Mail_tugoudehuiyilu_2",
                prob: .4,
                weight: 0,
                carryItem: [ {
                    type: "Garden_xiangrikui",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_3",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_meigui",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "xiaohulidexinDlg",
                carryMail: [ {
                    key: "mail_71",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                star: 25
            },
            mail_80: {
                img: "Mail_xueyouyongdee_2",
                prob: .3,
                weight: 0,
                carryItem: [ {
                    type: "Garden_lanfengling",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_Watercan_2",
                    incWeight: 50,
                    cutWeight: -1e3
                }, {
                    type: "Garden_xiaochuju",
                    incWeight: 50,
                    cutWeight: -1e3
                } ],
                prefabName: "mailDlg",
                carryMail: [ {
                    key: "mail_43",
                    incWeight: 10,
                    cutWeight: -1e4
                } ],
                star: 25
            }
        };
        (function() {
            for (var e in a) if (a.hasOwnProperty(e)) {
                var t = a[e];
                t.star && (t.star = n.encryptData(t.star)), t.capsuleToyWeight && (t.capsuleToyWeight = n.encryptData(t.capsuleToyWeight));
            }
        })(), t.exports = a, cc._RF.pop();
    }, {
        userData: "userData"
    } ],
    SceneEnum: [ function(e, t, i) {
        cc._RF.push(t, "d16castKy1CnqPDVViUgT5r", "SceneEnum"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = {
            DiningRoom: 1,
            Kitchen: 2,
            Garden: 3,
            Buffet: 4,
            Pond: 5,
            TakeOut: 6
        }, t.exports = i.default, cc._RF.pop();
    }, {} ],
    SceneModule: [ function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        cc._RF.push(t, "07cedjncVdNqq2PgLMZWwLu", "SceneModule"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a, o, s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t;
            };
        }(), r = e("SceneEnum"), c = e("userData"), h = e("global"), l = e("config"), u = e("FramePerGenerating"), d = {
            "-2": {
                0: r.Pond
            },
            "-1": {
                0: r.Garden
            },
            0: {
                0: r.DiningRoom,
                "-1": r.Buffet
            },
            1: {
                0: r.Kitchen
            },
            2: {
                0: r.TakeOut
            }
        }, f = (o = a = function() {
            function e() {
                for (var t in n(this, e), this.currentCoord = cc.Vec2.ZERO, this.activeScene = [], 
                this.buildingMap = {}, this.buildingsList = [], this.listenerAry = [], this.loadingStatus = {}, 
                this.generators = {}, r) this.generators[r[t]] = {};
                this.themeResMap = {}, this.themeOutdoorGroup = {};
            }
            return s(e, null, [ {
                key: "ins",
                get: function() {
                    return e._ins || (e._ins = new e()), e._ins;
                }
            } ]), s(e, [ {
                key: "init",
                value: function(e) {
                    var t = this;
                    for (var i in this.mainScene = e, r) this.loadingStatus[r[i]] = 1;
                    for (var n = 0; n < l.buildings.length; n++) l.buildings[n].index = n, this.buildingsList.push(l.buildings[n]);
                    for (var a = l.secret_store, o = 0; o < a.length; o++) {
                        var s = a[o];
                        "building" == s.type && this.buildingsList.push(s);
                    }
                    for (var h = 0; h < this.buildingsList.length; ++h) !function(e) {
                        var i = t.buildingsList[e];
                        t.listenerAry.push(c.addListener("building_lv_" + i.key + "_change", function(n, a) {
                            t.releaseBuilding(i.key), t.mainScene.createBuilding(n, a, !0, t.buildingsList[e]);
                        }));
                    }(h);
                    this.activeScene.push(r.DiningRoom), this.activateScene(r.DiningRoom);
                }
            }, {
                key: "clear",
                value: function() {
                    this.mainScene = null, this.currentCoord = cc.Vec2.ZERO, this.activeScene = [], 
                    this.buildingMap = {}, this.buildingsList = [], this.listenerAry = [], this.loadingStatus = {}, 
                    this.generator = null;
                }
            }, {
                key: "onMoveScene",
                value: function(e) {
                    var t = d[e.x][e.y];
                    this.sceneIsActive(t) || (this.activeScene.push(t), this.activateScene(t));
                }
            }, {
                key: "onMoveFinish",
                value: function(e) {
                    this.currentCoord = e;
                    for (var t = d[e.x][e.y], i = 0; i < this.activeScene.length; ++i) {
                        var n = this.activeScene[i];
                        n != t && (this.sleepScene(n), this.generators[n].theme = null, this.generators[n].building = null, 
                        this.loadingStatus[n] = 1);
                    }
                    this.activeScene = [ t ];
                }
            }, {
                key: "activateScene",
                value: function(e) {
                    if (1 == this.loadingStatus[e]) {
                        switch (this.loadingStatus[e] = 2, e) {
                          case r.Pond:
                            this.refreshPondTheme(!0);
                            break;

                          case r.Garden:
                            this.refreshGardenTheme(!0);
                            break;

                          case r.Kitchen:
                            this.refreshKitchenTheme(!0);
                            break;

                          case r.Buffet:
                            this.refreshBuffetTheme(!0);
                            break;

                          case r.DiningRoom:
                            this.refreshDiningRoomTheme(!0);
                            break;

                          case r.TakeOut:
                            this.refreshTakeOutRoomTheme(!0);
                        }
                        this.refreshBuilding(e, !0);
                    }
                }
            }, {
                key: "sleepScene",
                value: function(e) {
                    switch (e) {
                      case r.Pond:
                        this.refreshPondTheme(!1);
                        break;

                      case r.Garden:
                        this.refreshGardenTheme(!1);
                        break;

                      case r.Kitchen:
                        this.refreshKitchenTheme(!1);
                        break;

                      case r.Buffet:
                        this.refreshBuffetTheme(!1);
                        break;

                      case r.DiningRoom:
                        this.refreshDiningRoomTheme(!1);
                        break;

                      case r.TakeOut:
                        this.refreshTakeOutRoomTheme(!1);
                    }
                }
            }, {
                key: "getTheme",
                value: function(e) {
                    return new Promise(function(t) {
                        c.getTheme(e, function(e) {
                            t(e);
                        });
                    });
                }
            }, {
                key: "retainTheme",
                value: function(e, t) {
                    this.themeResMap[e] ? this.themeResMap[e].refCount++ : (h.retainRes(t), this.themeResMap[e] = {
                        refCount: 1,
                        spriteFrame: t
                    });
                }
            }, {
                key: "releaseTheme",
                value: function(e) {
                    this.themeResMap[e] && this.themeResMap[e].refCount--;
                }
            }, {
                key: "clearThemeCache",
                value: function() {
                    for (var e in this.themeResMap) if (this.themeResMap.hasOwnProperty(e)) {
                        var t = this.themeResMap[e];
                        t.refCount <= 0 && (h.releaseRes(t.spriteFrame), delete this.themeResMap[e]);
                    }
                }
            }, {
                key: "clearBuildingCache",
                value: function() {
                    var e = [ r.Pond, r.Garden, r.Buffet, r.DiningRoom, r.TakeOut, r.Kitchen ], t = !0, i = !1, n = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                            var s = a.value;
                            -1 == this.activeScene.indexOf(s) && this.refreshBuilding(s, !1);
                        }
                    } catch (e) {
                        i = !0, n = e;
                    } finally {
                        try {
                            !t && o.return && o.return();
                        } finally {
                            if (i) throw n;
                        }
                    }
                }
            }, {
                key: "loadThemeRes",
                value: function(e, t, i) {
                    var n = this;
                    h.loadRes(e, cc.SpriteFrame, function(a, o) {
                        if (!n.sceneIsActive(i)) return n.retainTheme(e, o), void n.releaseTheme(e);
                        if (a) cc.warn(a); else {
                            if (!cc.isValid(t.node)) return n.retainTheme(e, o), void n.releaseTheme(e);
                            t.spriteFrame && n.releaseTheme(t.tw_imgPath), t.spriteFrame = o, t.tw_imgPath = e, 
                            n.retainTheme(t.tw_imgPath, t.spriteFrame);
                        }
                    }, 10);
                }
            }, {
                key: "unloadThemeRes",
                value: function(e) {
                    e.spriteFrame && (this.releaseTheme(e.tw_imgPath), e.spriteFrame = null, e.tw_imgPath = null);
                }
            }, {
                key: "refreshPondTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.pond.getChildByName("bg1").getComponent(cc.Sprite), n = this.mainScene.pond.getChildByName("bg2").getComponent(cc.Sprite), a = this.mainScene.pondRightWall.getChildByName("Pond_Bridge_1").getComponent(cc.Sprite), o = this.mainScene.pondRightWall.getChildByName("Pond_Bridge_2").getComponent(cc.Sprite), s = this.mainScene.pondRightWall.getChildByName("Pond_river_1").getComponent(cc.Sprite), c = this.mainScene.pondRightWall.getChildByName("Pond_river_2").getComponent(cc.Sprite);
                    e ? this.getTheme("theme_outdoor_group").then(function(e) {
                        if (t.sceneIsActive(r.Pond)) {
                            var h = l.secretStoreItemMap[e], d = [];
                            d.push({
                                image: h.loadImg.img_pond_1,
                                sprite: i,
                                scene: r.Pond
                            }), d.push({
                                image: h.loadImg.img_pond_2,
                                sprite: n,
                                scene: r.Pond
                            }), d.push({
                                image: h.loadImg.img_bridge,
                                sprite: a,
                                scene: r.Pond
                            }), d.push({
                                image: h.loadImg.img_bridge,
                                sprite: o,
                                scene: r.Pond
                            }), d.push({
                                image: h.loadImg.img_river_1,
                                sprite: s,
                                scene: r.Pond
                            }), d.push({
                                image: h.loadImg.img_river_2,
                                sprite: c,
                                scene: r.Pond
                            }), t.generators[r.Pond].theme = new u(t.themeGeneratorHandler.bind(t), d), t.refreshParticle(r.Pond, e, h.particalPath);
                        }
                    }) : (this.unloadThemeRes(i), this.unloadThemeRes(n), this.unloadThemeRes(a), this.unloadThemeRes(o), 
                    this.unloadThemeRes(s), this.unloadThemeRes(c));
                }
            }, {
                key: "refreshGardenTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.garden.getChildByName("garden_BG_T").getComponent(cc.Sprite), n = this.mainScene.garden.getChildByName("garden_BG_d").getComponent(cc.Sprite);
                    e ? this.getTheme("theme_outdoor_group").then(function(e) {
                        if (t.sceneIsActive(r.Garden)) {
                            var a = l.secretStoreItemMap[e], o = [];
                            o.push({
                                image: a.loadImg.img_garden_1,
                                sprite: i,
                                scene: r.Garden
                            }), o.push({
                                image: a.loadImg.img_garden_2,
                                sprite: n,
                                scene: r.Garden
                            }), t.generators[r.Garden].theme = new u(t.themeGeneratorHandler.bind(t), o), t.refreshParticle(r.Garden, e, a.particalPath);
                        }
                    }) : (this.unloadThemeRes(i), this.unloadThemeRes(n));
                }
            }, {
                key: "refreshDiningRoomTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.diningRoom.getChildByName("DiningRoom_BG_1_T").getComponent(cc.Sprite), n = this.mainScene.diningRoom.getChildByName("DiningRoom_BG_1_d").getComponent(cc.Sprite), a = this.mainScene.diningRoom.getChildByName("DiningRoom_BG_2").getComponent(cc.Sprite), o = this.mainScene.diningRoom.getChildByName("DiningRoom_BG_1_3").getComponent(cc.Sprite);
                    e ? (this.getTheme("theme_diningRoom_group").then(function(e) {
                        if (t.sceneIsActive(r.DiningRoom)) {
                            var o = l.secretStoreItemMap[e], s = [];
                            s.push({
                                image: o.loadImg.img_bg_T,
                                sprite: i,
                                scene: r.DiningRoom
                            }), s.push({
                                image: o.loadImg.img_bg_D,
                                sprite: n,
                                scene: r.DiningRoom
                            }), s.push({
                                image: o.loadImg.img_bg_1,
                                sprite: a,
                                scene: r.DiningRoom
                            }), t.generators[r.DiningRoom].theme = new u(t.themeGeneratorHandler.bind(t), s);
                        }
                    }), this.getTheme("theme_outdoor_group").then(function(e) {
                        var i = l.secretStoreItemMap[e];
                        t.loadThemeRes(i.loadImg.img_diningRoomOut, o, r.DiningRoom);
                    })) : (this.unloadThemeRes(i), this.unloadThemeRes(n), this.unloadThemeRes(a));
                }
            }, {
                key: "refreshKitchenTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.kitchenRoom.getChildByName("kitchen_BG_T").getComponent(cc.Sprite), n = this.mainScene.kitchenRoom.getChildByName("kitchen_BG_d").getComponent(cc.Sprite);
                    e ? this.getTheme("theme_kitchRoom_group").then(function(e) {
                        if (t.sceneIsActive(r.Kitchen)) {
                            var a = l.secretStoreItemMap[e], o = [];
                            o.push({
                                image: a.loadImg.img_bg_T,
                                sprite: i,
                                scene: r.Kitchen
                            }), o.push({
                                image: a.loadImg.img_bg_D,
                                sprite: n,
                                scene: r.Kitchen
                            }), t.generators[r.Kitchen].theme = new u(t.themeGeneratorHandler.bind(t), o);
                        }
                    }) : (this.unloadThemeRes(i), this.unloadThemeRes(n));
                }
            }, {
                key: "refreshTakeOutRoomTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.takeOutRoom.getChildByName("takeOut_BG_T").getComponent(cc.Sprite), n = this.mainScene.takeOutRoom.getChildByName("takeOut_BG_D").getComponent(cc.Sprite);
                    e ? this.getTheme("theme_takeOutRoom_group").then(function(e) {
                        if (t.sceneIsActive(r.TakeOut)) {
                            var a = l.secretStoreItemMap[e], o = [];
                            o.push({
                                image: a.loadImg.img_bg_T,
                                sprite: i,
                                scene: r.TakeOut
                            }), o.push({
                                image: a.loadImg.img_bg_D,
                                sprite: n,
                                scene: r.TakeOut
                            }), t.generators[r.TakeOut].theme = new u(t.themeGeneratorHandler.bind(t), o);
                        }
                    }) : (this.unloadThemeRes(i), this.unloadThemeRes(n));
                }
            }, {
                key: "refreshBuffetTheme",
                value: function(e) {
                    var t = this, i = this.mainScene.buffetRoom.getChildByName("Buffet_BG_2_1").getComponent(cc.Sprite), n = this.mainScene.buffetRoom.getChildByName("buffet_BG_T").getComponent(cc.Sprite), a = this.mainScene.buffetRoom.getChildByName("buffet_BG_d").getComponent(cc.Sprite), o = this.mainScene.buffetRoom.getChildByName("buffet_BG_2").getComponent(cc.Sprite);
                    e ? this.getTheme("theme_buffetRoom_group").then(function(e) {
                        if (t.sceneIsActive(r.Buffet)) {
                            var s = l.secretStoreItemMap[e], c = [];
                            c.push({
                                image: s.loadImg.img_bg_1,
                                sprite: i,
                                scene: r.Buffet
                            }), c.push({
                                image: s.loadImg.img_bg_T,
                                sprite: n,
                                scene: r.Buffet
                            }), c.push({
                                image: s.loadImg.img_bg_D,
                                sprite: a,
                                scene: r.Buffet
                            }), c.push({
                                image: s.loadImg.img_bg_2,
                                sprite: o,
                                scene: r.Buffet
                            }), t.generators[r.TakeOut].theme = new u(t.themeGeneratorHandler.bind(t), c);
                        }
                    }) : (this.unloadThemeRes(i), this.unloadThemeRes(n), this.unloadThemeRes(a), this.unloadThemeRes(o));
                }
            }, {
                key: "getBuildingNode",
                value: function(e) {
                    return this.buildingMap[e] ? this.buildingMap[e] : null;
                }
            }, {
                key: "refreshBuilding",
                value: function(e, t) {
                    var i = this, n = "-1";
                    switch (e) {
                      case r.Pond:
                        n = "pond";
                        break;

                      case r.Garden:
                        n = "garden";
                        break;

                      case r.Kitchen:
                        n = "kitchen";
                        break;

                      case r.TakeOut:
                        n = "takeOutRoom";
                        break;

                      case r.Buffet:
                        n = "buffetRoom";
                        break;

                      case r.DiningRoom:
                        n = "diningRoom";
                    }
                    for (var a = [], o = 0; o < this.buildingsList.length; ++o) {
                        var s = this.buildingsList[o];
                        s[n] && a.push(s);
                    }
                    if (t) {
                        for (var c = [], h = 0; h < a.length; ++h) c.push(this.getBuildingGroupStatusBit(a[h].key));
                        Promise.all(c).then(function(t) {
                            for (var n = [], o = 0; o < t.length; ++o) for (var s = t[o], r = 0; r < a[o].items.length; ++r) if ((s >> 2 * r & 3) > 0) {
                                n.push({
                                    config: a[o],
                                    bit: s
                                });
                                break;
                            }
                            i.generators[e].building = new u(function(e, t) {
                                i.mainScene.createBuilding(e.bit, e.bit, !1, e.config);
                            }, n);
                        });
                    } else for (var l = 0; l < a.length; ++l) this.releaseBuilding(a[l].key);
                }
            }, {
                key: "releaseBuilding",
                value: function(e) {
                    var t = this.getBuildingNode(e);
                    if (t) {
                        t.node.destroy();
                        var i = t.node2;
                        i && i.destroy(), this.buildingMap[e] = null;
                    }
                }
            }, {
                key: "getBuildingGroupStatusBit",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        c.getData("building_lv_" + e, function(e) {
                            i(e);
                        }, t);
                    });
                }
            }, {
                key: "sceneIsActive",
                value: function(e) {
                    return -1 != this.activeScene.indexOf(e);
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t in this.generators) {
                        var i = this.generators[t];
                        if (i.theme) i.theme.next() || (i.theme.free(), i.theme = null); else if (i.building) for (var n = 0; n < 2; ++n) if (!i.building.next()) {
                            i.building.free(), i.building = null;
                            break;
                        }
                    }
                }
            }, {
                key: "themeGeneratorHandler",
                value: function(e, t) {
                    this.loadThemeRes(e.image, e.sprite, e.scene);
                }
            }, {
                key: "refreshParticle",
                value: function(e, t, i) {
                    var n = function(e) {
                        var t = e.getChildByName("partical");
                        cc.isValid(t, !0) && t.destroy();
                    }, a = null;
                    switch (e) {
                      case r.Pond:
                        a = this.mainScene.pond;
                        break;

                      case r.Garden:
                        a = this.mainScene.garden;
                    }
                    if (a) if (i) {
                        if (this.themeOutdoorGroup[e] === t) return;
                        n(a), h.loadRes(i, cc.Prefab, function(e, t) {
                            if (!e) {
                                var i = h.autoReleaseInstantiate(t);
                                i.parent = a, i.zIndex = cc.macro.MAX_ZINDEX, i.name = "partical";
                            }
                        }, 100), this.themeOutdoorGroup[e] = t;
                    } else n(a);
                }
            } ]), e;
        }(), a._ins = null, o);
        i.default = f, t.exports = i.default, cc._RF.pop();
    }, {
        FramePerGenerating: "FramePerGenerating",
        SceneEnum: "SceneEnum",
        config: "config",
        global: "global",
        userData: "userData"
    } ],
    ViewHandler: [ function(e, t, i) {
        cc._RF.push(t, "27bf1T9V3ZPlpgJvRdTJdRo", "ViewHandler");
        var n = e("twComponent");
        cc.Class({
            extends: n,
            init: function(e) {},
            open: function(e) {
                this.init(e);
            },
            close: function() {
                cc.isValid(this.node) && e("ViewModule").ins.popView(this);
            },
            onMessage: function(e, t) {}
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        twComponent: "twComponent"
    } ],
    ViewMessageEnum: [ function(e, t, i) {
        cc._RF.push(t, "4b814gkK0dDMKrWYVE+iDjw", "ViewMessageEnum"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = {
            None: 0,
            GameEntranceConfirm: 1,
            GameEntranceCancel: 2,
            GameEntranceOpenGame: 3,
            TakeOutOrderStart: 4,
            BbqMiniGameOver: 5,
            CloseLoading: 6
        }, t.exports = i.default, cc._RF.pop();
    }, {} ],
    ViewModule: [ function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        cc._RF.push(t, "7b6belXS2lBSaf96gZ4nJRX", "ViewModule"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a, o, s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t;
            };
        }(), r = e("IDGenerator"), c = e("global"), h = e("userData"), l = e("localize"), u = (o = a = function() {
            function e() {
                n(this, e), this._activeViews = {}, this._views = {}, this._loadingMap = {}, this._idGenerator = new r();
            }
            return s(e, null, [ {
                key: "ins",
                get: function() {
                    return e._ins || (e._ins = new e()), e._ins;
                }
            } ]), s(e, [ {
                key: "clear",
                value: function() {
                    for (var e in this._activeViews) {
                        var t = this._activeViews[e];
                        t && cc.isValid(t, !0) && t.destroy();
                    }
                    for (var i in this._activeViews = {}, this._views) {
                        var n = this._views[i];
                        n && cc.isValid(n, !0) && n.destroy();
                    }
                    this._views = {};
                }
            }, {
                key: "pushView",
                value: function(e, t, i) {
                    if (e) {
                        i = this._handleOptions(i);
                        var n = this._activeViews[e];
                        n || i.only && this._loadingMap[e] || (this._loadingMap[e] ? this._loadingMap[e].push(t) : (this._loadingMap[e] = [ t ], 
                        (n = this._views[e]) ? this._loadViewSuccess(e, i, n) : this.loadView(e, i)));
                    }
                }
            }, {
                key: "popView",
                value: function(e) {
                    if (e) {
                        var t = e.viewID, i = e.viewName, n = this._activeViews[t];
                        delete this._activeViews[t], n && cc.isValid(n, !0) && (i in this._views ? (n.active = !1, 
                        n.removeFromParent()) : n.destroy());
                    }
                }
            }, {
                key: "popViewsByName",
                value: function(e) {
                    var t = [];
                    for (var i in this._activeViews) {
                        var n = this._activeViews[i];
                        n.name == e && t.push(n);
                    }
                    var a = !0, o = !1, s = void 0;
                    try {
                        for (var r, c = t[Symbol.iterator](); !(a = (r = c.next()).done); a = !0) {
                            var h = r.value;
                            this.popView(h.getComponent(e));
                        }
                    } catch (e) {
                        o = !0, s = e;
                    } finally {
                        try {
                            !a && c.return && c.return();
                        } finally {
                            if (o) throw s;
                        }
                    }
                }
            }, {
                key: "loadView",
                value: function(e, t) {
                    var i = this;
                    c.loadRes("View/" + e, cc.Prefab, function(n, a) {
                        if (n) i._loadViewFail(e, t, n); else {
                            var o = c.autoReleaseInstantiate(a);
                            i._loadViewSuccess(e, t, o);
                        }
                    }, 10);
                }
            }, {
                key: "layer",
                value: function() {
                    return cc.find("Canvas/npcDlg");
                }
            }, {
                key: "activeView",
                value: function(e) {
                    return this._activeViews[e];
                }
            }, {
                key: "isWorkingByName",
                value: function(e) {
                    if (!e) return !1;
                    if (this._loadingMap[e]) return !0;
                    for (var t in this._activeViews) {
                        var i = this._activeViews[t];
                        if (i.name == e && cc.isValid(i, !0)) return !0;
                    }
                    return !1;
                }
            }, {
                key: "_loadViewSuccess",
                value: function(e, t, i) {
                    t.keep && (this._views[e] = i);
                    for (var n = [ i ], a = this._loadingMap[e].length, o = 1; o < a; ++o) n.push(c.autoReleaseInstantiate(i));
                    for (var s = 0; s < a; ++s) {
                        var r = this._loadingMap[e][s], h = n[s];
                        h.zIndex = t.zIndex;
                        var l = e;
                        t.only || (l = e + this._idGenerator.getNewId()), this._activeViews[l] = h;
                        var u = h.getComponent(e);
                        u || (u = h.addComponent(e)), u.viewID = l, u.viewName = e, u.open(r), h.name = e, 
                        h.parent = this.layer(), h.active = !0;
                    }
                    delete this._loadingMap[e];
                }
            }, {
                key: "_loadViewFail",
                value: function(e, t, i) {
                    t.failCallback ? t.failCallback(i) : h.sendMessage("showToast", l.getText("toast_string_6")), 
                    delete this._loadingMap[e];
                }
            }, {
                key: "_handleOptions",
                value: function(e) {
                    return e || (e = {}), e.zIndex = e.zIndex ? e.zIndex : 0, e.keep = !!e.keep, e.only = !("only" in e && !e.only), 
                    e;
                }
            }, {
                key: "sendMessage",
                value: function(e, t) {
                    for (var i in this._activeViews) {
                        var n = this._activeViews[i];
                        if (cc.isValid(n)) {
                            var a = n.getComponent("ViewHandler");
                            a && a.onMessage(e, t);
                        }
                    }
                }
            } ]), e;
        }(), a._ins = null, o);
        i.default = u, t.exports = i.default, cc._RF.pop();
    }, {
        IDGenerator: "IDGenerator",
        global: "global",
        localize: "localize",
        userData: "userData"
    } ],
    ViewZIndexEnum: [ function(e, t, i) {
        cc._RF.push(t, "d5479TzT3RDgr/79oxwTSBO", "ViewZIndexEnum"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = {
            Default: 0,
            Dialog: 1,
            Toast: 2,
            Loading: 1002
        }, t.exports = i.default, cc._RF.pop();
    }, {} ],
    audioManager: [ function(e, t, i) {
        cc._RF.push(t, "f962aFWxlBL9LSFbyIdLBdF", "audioManager");
        var n = e("userData");
        cc.Class({
            extends: cc.Component,
            properties: {
                settingDlg: cc.Prefab,
                bgm: {
                    type: cc.AudioSource,
                    default: null
                },
                anger: {
                    type: cc.AudioSource,
                    default: null
                },
                button: {
                    type: cc.AudioSource,
                    default: null
                },
                coinAdd: {
                    type: cc.AudioSource,
                    default: null
                },
                clean: {
                    type: cc.AudioSource,
                    default: null
                },
                showUp: {
                    type: cc.AudioSource,
                    default: null
                },
                song: {
                    type: cc.AudioSource,
                    default: null
                },
                hit: {
                    type: cc.AudioSource,
                    default: null
                },
                chief: {
                    type: cc.AudioSource,
                    default: null
                },
                cutDown: {
                    type: cc.AudioSource,
                    default: null
                },
                sprinking: {
                    type: cc.AudioSource,
                    default: null
                },
                plantFlower: {
                    type: cc.AudioSource,
                    default: null
                },
                putFlowerIntoVase: {
                    type: cc.AudioSource,
                    default: null
                },
                seeding: {
                    type: cc.AudioSource,
                    default: null
                },
                makeWish: {
                    type: cc.AudioSource,
                    default: null
                },
                getGift: {
                    type: cc.AudioSource,
                    default: null
                },
                durCapToy: {
                    type: cc.AudioSource,
                    default: null
                },
                flyCapToy: {
                    type: cc.AudioSource,
                    default: null
                },
                openCapToy: {
                    type: cc.AudioSource,
                    default: null
                },
                durCapToy2: {
                    type: cc.AudioSource,
                    default: null
                },
                openCapToy2: {
                    type: cc.AudioSource,
                    default: null
                },
                fishSuccess: {
                    type: cc.AudioSource,
                    default: null
                },
                fishFail: {
                    type: cc.AudioSource,
                    default: null
                },
                onOpenChristmasNode: {
                    type: cc.AudioSource,
                    default: null
                },
                onAd: cc.Node,
                badGuyCry: {
                    type: cc.AudioSource,
                    default: null
                },
                badGuySpit: {
                    type: cc.AudioSource,
                    default: null
                },
                chunjieFire: {
                    type: cc.AudioSource,
                    default: null
                },
                chunjieLion: {
                    type: cc.AudioSource,
                    default: null
                },
                bingo: {
                    type: cc.AudioSource,
                    default: null
                },
                onFail: {
                    type: cc.AudioSource,
                    default: null
                },
                warn: {
                    type: cc.AudioSource,
                    default: null
                },
                onSuccess: {
                    type: cc.AudioSource,
                    default: null
                },
                cutCake: {
                    type: cc.AudioSource,
                    default: null
                },
                cutCakeRight: {
                    type: cc.AudioSource,
                    default: null
                },
                cutCakeWrong: {
                    type: cc.AudioSource,
                    default: null
                },
                captureFish: {
                    type: cc.AudioSource,
                    default: null
                },
                onBBQ: {
                    type: cc.AudioSource,
                    default: null
                }
            },
            onLoad: function() {
                this.bugMap = {};
            },
            showSettingDlg: function() {
                n.sendMessage("hideFeedBackRedDot"), e("ViewModule").ins.pushView("settingDlg", this);
            },
            swtichBgm: function(e) {
                var t = this;
                n.setData("muteBgm", 1 ^ e, function() {
                    t.bgmIsInit = e, e || (t.bgm.stop(), t.node.stopActionByTag(124421), t.lastMusic && t.lastMusic.stop(), 
                    t.lastMusic = null, t.bgmOnDelay = null), e && t.bgm.play();
                }, this);
            },
            swtichEffect: function(e) {
                n.setData("muteEffect", 1 ^ e, function() {}, this);
            },
            start: function() {
                var e = this;
                this.effectSound = {
                    anger: this.anger,
                    button: this.button,
                    coinAdd: this.coinAdd,
                    clean: this.clean,
                    showUp: this.showUp,
                    song: this.song,
                    hit: this.hit,
                    chief: this.chief,
                    cutDown: this.cutDown,
                    sprinking: this.sprinking,
                    plantFlower: this.plantFlower,
                    putFlowerIntoVase: this.putFlowerIntoVase,
                    seeding: this.seeding,
                    makeWish: this.makeWish,
                    getGift: this.getGift,
                    durCapToy: this.durCapToy,
                    flyCapToy: this.flyCapToy,
                    openCapToy: this.openCapToy,
                    durCapToy2: this.durCapToy2,
                    openCapToy2: this.openCapToy2,
                    fishSuccess: this.fishSuccess,
                    fishFail: this.fishFail,
                    onOpenChristmasNode: this.onOpenChristmasNode,
                    badGuyCry: this.badGuyCry,
                    badGuySpit: this.badGuySpit,
                    chunjie_fire: this.chunjieFire,
                    chunjie_lion: this.chunjieLion,
                    bingo: this.bingo,
                    onFail: this.onFail,
                    warn: this.warn,
                    onSuccess: this.onSuccess,
                    cutCake: this.cutCake,
                    cutCakeRight: this.cutCakeRight,
                    cutCakeWrong: this.cutCakeWrong,
                    captureFish: this.captureFish,
                    onBBQ: this.onBBQ
                };
                var t = this.onAd.getComponents(cc.AudioSource);
                if (this.effectSound.onAd = t[1], this.effectSound.onAd_2 = t[0], this.fixMute(function() {
                    n.getData("muteBgm", function(e) {
                        e || this.bgmOnDelay || (this.bgmIsInit = !0, this.bgm.play());
                    }, e), e.listenerAry = [], e.listenerAry.push(n.addListener("playEffect", function(e, t) {
                        var i = this;
                        this.pause || (t ? n.getData("muteBgm", function(n) {
                            n || i.playMusic(e, t);
                        }) : n.getData("muteEffect", function(t) {
                            t || i.playEffect(e);
                        }));
                    }, e)), e.listenerAry.push(n.addListener("stopEffect", function(e) {
                        this.stopEffect(e);
                    }, e)), e.listenerAry.push(n.addListener("stopAllEffect", function() {
                        this.stopAllEffect();
                    }, e)), e.listenerAry.push(n.addListener("pauseAllEffect", function() {
                        this.pauseAllEffect();
                    }, e)), e.listenerAry.push(n.addListener("resumeAllEffect", function() {
                        this.resumeAllEffect();
                    }, e)), e.listenerAry.push(n.addListener("money_change", function(e, t) {
                        e > t && n.sendMessage("playEffect", "coinAdd");
                    }, e)), e.listenerAry.push(n.addListener("star_change", function(e, t) {
                        e > t && n.sendMessage("playEffect", "coinAdd");
                    }, e)), e.listenerAry.push(n.addListener("onAdOpen", function(e) {
                        this.isAdOpen = e, 1 == e ? (cc.game.pause(), this.pauseAllEffect()) : (cc.game.resume(), 
                        this.resumeAllEffect());
                    }, e));
                }), "undefined" != typeof wx) {
                    var i = this, a = function() {
                        i.pauseAllEffect();
                    }, o = function() {
                        i.isAdOpen || i.resumeAllEffect();
                    };
                    wx.onAudioInterruptionBegin(a), this.onAudioInterruptionBegin = a, wx.onAudioInterruptionEnd(o), 
                    this.onAudioInterruptionEnd = o;
                }
            },
            playMusic: function(e, t) {
                this.bgmOnDelay = !0, this.bgm.pause(), this.lastMusic && (this.lastMusic.stop(), 
                this.lastMusic = null, this.node.stopActionByTag(124421));
                var i = this.effectSound[e];
                if (i) {
                    i.play(), this.bugMap[e] || (this.bugMap[e] = !0, this.node.runAction(cc.sequence(cc.delayTime(.05), cc.callFunc(function() {
                        i.stop(), i.play();
                    }, this)))), this.lastMusic = i;
                    var a = cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                        this.bgmOnDelay = !1, n.getData("muteBgm", function(e) {
                            e || (this.bgmIsInit ? this.bgm.resume() : this.bgm.play());
                        }, this);
                    }, this));
                    a.setTag(124421), this.node.runAction(a);
                }
            },
            playEffect: function(e) {
                var t = this.effectSound[e];
                if (t && t.isPlaying) {
                    var i = null;
                    "durCapToy" == e ? i = "durCapToy2" : "openCapToy" == e && (i = "openCapToy2"), 
                    i && (e = i), t = this.effectSound[e];
                }
                t && t.play();
            },
            stopEffect: function(e) {
                var t = this.effectSound[e];
                t && t.stop();
                var i = null;
                "durCapToy" == e ? i = "durCapToy2" : "openCapToy" == e && (i = "openCapToy2"), 
                (t = this.effectSound[i]) && t.stop();
            },
            onDestroy: function() {
                for (var e = 0; e < this.listenerAry.length; e++) n.removeListener(this.listenerAry[e]);
                this.listenerAry = null, this.onAudioInterruptionBegin && (wx.offAudioInterruptionBegin(this.onAudioInterruptionBegin), 
                this.onAudioInterruptionBegin = null), this.onAudioInterruptionEnd && (wx.offAudioInterruptionEnd(this.onAudioInterruptionEnd), 
                this.onAudioInterruptionEnd = null);
            },
            pauseAllEffect: function() {
                if (this.pause = !0, this.pauseArr = [], this.effectSound) for (var e in this.effectSound) {
                    var t = this.effectSound[e];
                    this.pauseArr.push(t), t.pause();
                }
                !this.bgmOnDelay && this.bgmIsInit && (this.pauseArr.push(this.bgm), this.bgm.pause());
            },
            resumeAllEffect: function() {
                if (this.pause = !1, this.pauseArr) {
                    for (var e = 0; e < this.pauseArr.length; e++) this.pauseArr[e].resume();
                    this.pauseArr = null;
                }
            },
            stopAllEffect: function() {
                if (this.effectSound) for (var e in this.effectSound) this.effectSound[e].stop();
                !this.bgmOnDelay && this.bgmIsInit && this.bgm.stop();
            },
            fixMute: function(e) {
                var t = this;
                n.getData("mute", function(i) {
                    i ? n.setDataByArray([ {
                        key: "muteBgm",
                        value: 1
                    }, {
                        key: "muteEffect",
                        value: 1
                    }, {
                        key: "mute",
                        value: 0
                    } ], e, t) : e();
                }, this);
            }
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        userData: "userData"
    } ],
    autoLabel: [ function(e, t, i) {
        cc._RF.push(t, "2776ascYp9KKo3J67ZUJNp1", "autoLabel");
        var n = e("localize"), a = e("global");
        cc.Class({
            extends: cc.Label,
            properties: {
                key: cc.String,
                fixLabelWidth: {
                    type: cc.Integer,
                    default: 0
                },
                fixLabelHeight: {
                    type: cc.Integer,
                    default: 0
                },
                fixLblH: {
                    type: cc.Label.HorizontalAlign,
                    default: cc.Label.HorizontalAlign.CENTER
                },
                fixLblV: {
                    type: cc.Label.VerticalAlign,
                    default: cc.Label.VerticalAlign.CENTER
                }
            },
            start: function() {
                var e = n.getText(this.key);
                this.string = e;
                var t = this.fixLabelWidth, i = this.fixLabelHeight, o = this.fixLblH, s = this.fixLblV;
                a.fixLabel(this, t, i, o, s);
            }
        }), cc._RF.pop();
    }, {
        global: "global",
        localize: "localize"
    } ],
    bigVersionWarnDlg: [ function(e, t, i) {
        cc._RF.push(t, "d27baXekZ9JF4VVnVuHNi3z", "bigVersionWarnDlg");
        var n = e("global");
        cc.Class({
            extends: cc.Component,
            properties: {},
            init: function(e, t) {
                this.url = e || n.getShopUrl(), this.callback = t;
            },
            onConfirm: function() {
                var e = this.url;
                cc.sys.openURL(e);
            },
            onCancel: function() {
                this.callback && this.callback(), this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        global: "global"
    } ],
    byteArryMd5: [ function(e, t, i) {
        cc._RF.push(t, "b67a3UDRE5Cf5GoUhMpd243", "byteArryMd5"), t.exports = function(e) {
            function t(e) {
                var t = (e >>> 24).toString(16), i = (16777215 & e).toString(16);
                return "00".substr(0, 2 - t.length) + t + "000000".substr(0, 6 - i.length) + i;
            }
            function i(e, t) {
                return e << t & 4294967295 | e >>> 32 - t;
            }
            function n(e, t, i) {
                return e & t | ~e & i;
            }
            function a(e, t, i) {
                return i & e | ~i & t;
            }
            function o(e, t, i) {
                return e ^ t ^ i;
            }
            function s(e, t, i) {
                return t ^ (e | ~i);
            }
            function r(e, t) {
                return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
            }
            function c(e, t) {
                return 4294967295 & e + t;
            }
            if (!e instanceof Uint8Array) return function(e) {
                try {
                    console.log("input data type mismatch only support Uint8Array");
                } catch (e) {}
            }(), null;
            for (var h = [], l = 0; l < e.byteLength; l++) h.push(e[l]);
            var u = h.length;
            h.push(128);
            var d = h.length % 64;
            if (d > 56) {
                for (l = 0; l < 64 - d; l++) h.push(0);
                d = h.length % 64;
            }
            for (l = 0; l < 56 - d; l++) h.push(0);
            var f = function(e) {
                for (var t = [], i = 0; i < 8; i++) t.push(255 & e), e >>>= 8;
                return t;
            }(8 * u), g = !0, p = !1, m = void 0;
            try {
                for (var y, v = f[Symbol.iterator](); !(g = (y = v.next()).done); g = !0) {
                    var b = y.value;
                    h.push(b);
                }
            } catch (e) {
                p = !0, m = e;
            } finally {
                try {
                    !g && v.return && v.return();
                } finally {
                    if (p) throw m;
                }
            }
            var _ = 1732584193, w = 4023233417, S = 2562383102, T = 271733878, k = 0, x = 0, D = 0, A = 0, M = function(e, t, n, a) {
                var o = A;
                A = D, D = x, x = c(x, i(c(k, c(e, c(t, n))), a)), k = o;
            };
            for (l = 0; l < h.length / 64; l++) {
                k = _;
                var I = 64 * l;
                M(n(x = w, D = S, A = T), 3614090360, r(h, I), 7), M(n(x, D, A), 3905402710, r(h, I + 4), 12), 
                M(n(x, D, A), 606105819, r(h, I + 8), 17), M(n(x, D, A), 3250441966, r(h, I + 12), 22), 
                M(n(x, D, A), 4118548399, r(h, I + 16), 7), M(n(x, D, A), 1200080426, r(h, I + 20), 12), 
                M(n(x, D, A), 2821735955, r(h, I + 24), 17), M(n(x, D, A), 4249261313, r(h, I + 28), 22), 
                M(n(x, D, A), 1770035416, r(h, I + 32), 7), M(n(x, D, A), 2336552879, r(h, I + 36), 12), 
                M(n(x, D, A), 4294925233, r(h, I + 40), 17), M(n(x, D, A), 2304563134, r(h, I + 44), 22), 
                M(n(x, D, A), 1804603682, r(h, I + 48), 7), M(n(x, D, A), 4254626195, r(h, I + 52), 12), 
                M(n(x, D, A), 2792965006, r(h, I + 56), 17), M(n(x, D, A), 1236535329, r(h, I + 60), 22), 
                M(a(x, D, A), 4129170786, r(h, I + 4), 5), M(a(x, D, A), 3225465664, r(h, I + 24), 9), 
                M(a(x, D, A), 643717713, r(h, I + 44), 14), M(a(x, D, A), 3921069994, r(h, I), 20), 
                M(a(x, D, A), 3593408605, r(h, I + 20), 5), M(a(x, D, A), 38016083, r(h, I + 40), 9), 
                M(a(x, D, A), 3634488961, r(h, I + 60), 14), M(a(x, D, A), 3889429448, r(h, I + 16), 20), 
                M(a(x, D, A), 568446438, r(h, I + 36), 5), M(a(x, D, A), 3275163606, r(h, I + 56), 9), 
                M(a(x, D, A), 4107603335, r(h, I + 12), 14), M(a(x, D, A), 1163531501, r(h, I + 32), 20), 
                M(a(x, D, A), 2850285829, r(h, I + 52), 5), M(a(x, D, A), 4243563512, r(h, I + 8), 9), 
                M(a(x, D, A), 1735328473, r(h, I + 28), 14), M(a(x, D, A), 2368359562, r(h, I + 48), 20), 
                M(o(x, D, A), 4294588738, r(h, I + 20), 4), M(o(x, D, A), 2272392833, r(h, I + 32), 11), 
                M(o(x, D, A), 1839030562, r(h, I + 44), 16), M(o(x, D, A), 4259657740, r(h, I + 56), 23), 
                M(o(x, D, A), 2763975236, r(h, I + 4), 4), M(o(x, D, A), 1272893353, r(h, I + 16), 11), 
                M(o(x, D, A), 4139469664, r(h, I + 28), 16), M(o(x, D, A), 3200236656, r(h, I + 40), 23), 
                M(o(x, D, A), 681279174, r(h, I + 52), 4), M(o(x, D, A), 3936430074, r(h, I), 11), 
                M(o(x, D, A), 3572445317, r(h, I + 12), 16), M(o(x, D, A), 76029189, r(h, I + 24), 23), 
                M(o(x, D, A), 3654602809, r(h, I + 36), 4), M(o(x, D, A), 3873151461, r(h, I + 48), 11), 
                M(o(x, D, A), 530742520, r(h, I + 60), 16), M(o(x, D, A), 3299628645, r(h, I + 8), 23), 
                M(s(x, D, A), 4096336452, r(h, I), 6), M(s(x, D, A), 1126891415, r(h, I + 28), 10), 
                M(s(x, D, A), 2878612391, r(h, I + 56), 15), M(s(x, D, A), 4237533241, r(h, I + 20), 21), 
                M(s(x, D, A), 1700485571, r(h, I + 48), 6), M(s(x, D, A), 2399980690, r(h, I + 12), 10), 
                M(s(x, D, A), 4293915773, r(h, I + 40), 15), M(s(x, D, A), 2240044497, r(h, I + 4), 21), 
                M(s(x, D, A), 1873313359, r(h, I + 32), 6), M(s(x, D, A), 4264355552, r(h, I + 60), 10), 
                M(s(x, D, A), 2734768916, r(h, I + 24), 15), M(s(x, D, A), 1309151649, r(h, I + 52), 21), 
                M(s(x, D, A), 4149444226, r(h, I + 16), 6), M(s(x, D, A), 3174756917, r(h, I + 44), 10), 
                M(s(x, D, A), 718787259, r(h, I + 8), 15), M(s(x, D, A), 3951481745, r(h, I + 36), 21), 
                _ = c(_, k), w = c(w, x), S = c(S, D), T = c(T, A);
            }
            return function(e, i, n, a) {
                for (var o = "", s = 0, r = 0, c = 3; c >= 0; c--) s = 255 & (r = arguments[c]), 
                s <<= 8, s |= 255 & (r >>>= 8), s <<= 8, s |= 255 & (r >>>= 8), s <<= 8, o += t(s |= r >>>= 8);
                return o;
            }(T, S, w, _).toLowerCase();
        }, cc._RF.pop();
    }, {} ],
    cdKeyDlg: [ function(e, t, i) {
        cc._RF.push(t, "c1976BLbM1Dua1CctMhN2II", "cdKeyDlg");
        var n = e("netManager"), a = e("userData"), o = e("localize"), s = e("global"), r = (e("config"), 
        e("memorialData"));
        cc.Class({
            extends: e("ViewHandler"),
            properties: {
                dark: cc.Node,
                editbox: cc.EditBox,
                btnLbl: cc.Label,
                desc_label: cc.Label,
                inputLbl: cc.Label
            },
            start: function() {
                var e = this.node.getChildByName("UI_MainMenu_Bg").getChildByName("title").getComponent(cc.Label);
                e.string = o.getText("btn_cdKey"), this.btnLbl.string = o.getText("btn_confirm"), 
                this.desc_label.string = o.getText("cdKeyDlg_desc"), this.inputLbl.string = o.getText("giftCodeStr"), 
                s.fixLabel(e), s.fixLabel(this.btnLbl), s.fixLabel(this.desc_label), this.dark.on(cc.Node.EventType.TOUCH_END, function() {
                    this.keepOpen || (this.dark.off(cc.Node.EventType.TOUCH_END), this.close());
                }, this);
            },
            onClick: function() {
                var t = this.editbox.string;
                if (t) {
                    if (this.isWorking) return;
                    this.isWorking = !0, n.checkCdKey(t, function(t, i) {
                        var c = this;
                        if (cc.isValid(this.node)) if (0 == t) if (0 == i.status) {
                            var h = i.data, l = function() {
                                if ("money" == h.type) {
                                    var t = o.getText("cdkey_toast_3") + o.getText("money") + "+" + h.value;
                                    a.sendMessage("showToast", t), c.node.parent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                                        a.changeData("money", h.value, function() {
                                            this.starNumLabelAction("money", h.value);
                                        }, this);
                                    }, c))), c.close();
                                } else if ("star" == h.type) {
                                    var i = o.getText("cdkey_toast_3") + o.getText("star") + "+" + h.value;
                                    a.sendMessage("showToast", i), c.node.parent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                                        a.changeData("star", h.value, function() {
                                            this.starNumLabelAction("star", h.value);
                                        }, this);
                                    }, c))), c.close();
                                } else if ("plate" == h.type) {
                                    a.sendMessage("showPlateLbl");
                                    var l = o.getText("cdkey_toast_3") + o.getText("item_plate_name") + "+" + h.value;
                                    a.sendMessage("showToast", l), c.node.parent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                                        a.changeData("money_plate", h.value, function() {
                                            this.starNumLabelAction("plate", h.value);
                                        }, this);
                                    }, c))), c.close();
                                } else if ("bell" == h.type) {
                                    a.sendMessage("showBellLbl");
                                    var u = o.getText("cdkey_toast_3") + o.getText("item_bell_name") + "+" + h.value;
                                    a.sendMessage("showToast", u), c.node.parent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                                        a.changeData("money_bell", h.value, function() {
                                            this.starNumLabelAction("bell", h.value);
                                        }, this);
                                    }, c))), c.close();
                                } else if ("monthCard" == h.type) s.isNativeOnly() || s.isWxOnly() || s.isQQOnly() ? n.getNowTime(function(e) {
                                    if (cc.isValid(this.node)) {
                                        if (e) {
                                            var t = s.getServerTime(), i = a.getDayStartTime(t, 2);
                                            a.getData("monthCard_endTime", function(e) {
                                                var t = void 0;
                                                t = i >= e ? i + 24 * h.value * 60 * 60 * 1e3 : e + 24 * h.value * 60 * 60 * 1e3, 
                                                a.setData("monthCard_endTime", t, function() {
                                                    a.sendMessage("showMonthCardOrder");
                                                });
                                            }), a.sendMessage("showToast", o.getText("toast_string_getMonthCard"));
                                        } else a.sendMessage("showToast", o.getText("toast_string_6"));
                                        this.close();
                                    }
                                }, c) : c.close(); else if ("yuer" == h.type) {
                                    a.sendMessage("showYuerLbl");
                                    var d = o.getText("cdkey_toast_3") + o.getText("item_yuer_name") + "+" + h.value;
                                    a.sendMessage("showToast", d), c.node.parent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                                        a.changeData("yuer", h.value, function() {
                                            this.starNumLabelAction("yuer", h.value);
                                        }, this);
                                    }, c))), c.close();
                                } else if ("monthCardPlate" == h.type) s.isNativeOnly() || s.isWxOnly() || s.isQQOnly() ? n.getNowTime(function(t) {
                                    if (cc.isValid(this.node)) {
                                        if (t) {
                                            var i = s.getServerTime(), n = a.getDayStartTime(i, 2);
                                            a.getData("monthCard_plate_endTime", function(t) {
                                                var i = void 0;
                                                i = n >= t ? n + 24 * h.value * 60 * 60 * 1e3 : t + 24 * h.value * 60 * 60 * 1e3, 
                                                a.setData("monthCard_plate_endTime", i, function() {
                                                    a.getData("capsuleFreeTimes", function(t) {
                                                        var i = e("config");
                                                        t || a.setData("capsuleFreeTimes", i.capsuleFreeTimes, function() {});
                                                    }), a.sendMessage("showPlateMonthCardOrder");
                                                });
                                            }), a.sendMessage("showToast", o.getText("toast_string_getMonthCard"));
                                        } else a.sendMessage("showToast", o.getText("toast_string_6"));
                                        this.close();
                                    }
                                }, c) : c.close(); else if ("memorial" == h.type) {
                                    if (!r.memorialsMap[h.value]) return void (cc.isValid(c.node) && c.close());
                                    s.loadRes("Prefab/memorialDetailDlg", cc.Prefab, function(e, t) {
                                        if (e) console.error(e); else {
                                            var i = "memorial_unlock_" + h.value;
                                            a.sendMessage("playEffect", "showUp");
                                            var n = s.autoReleaseInstantiate(t);
                                            n.parent = cc.find("Canvas/topDlg"), n.info = r.memorialsMap[h.value], n.unlock = !0, 
                                            n.triggerStory = !0, n.firstUnlock = !0, a.setData(i, 1, function() {}, c), cc.isValid(c.node) && c.close();
                                        }
                                    }, 10);
                                } else cc.isValid(c.node) && c.close();
                            };
                            if (this.keepOpen = !0, h.unique && h.unique > 0) {
                                var u = "cdCode_" + h.code;
                                if ("memorial" == h.type) {
                                    var d = "memorial_unlock_" + h.value;
                                    a.getData(d, function(e) {
                                        cc.isValid(this.node) && (e ? (this.close(), a.sendMessage("showToast", o.getText("cdkey_toast_4"))) : a.setData(u, 1, function() {
                                            l();
                                        }, this));
                                    }, this);
                                } else a.getData(u, function(e) {
                                    cc.isValid(this.node) && (0 == e ? a.setData(u, 1, function() {
                                        l();
                                    }, this) : (this.close(), a.sendMessage("showToast", o.getText("cdkey_toast_4"))));
                                }, this);
                            } else l();
                        } else -100 == i.status || -1e3 == i.status ? (a.sendMessage("showToast", o.getText("cdkey_toast_2")), 
                        this.close()) : -101 == i.status && (a.sendMessage("showToast", o.getText("cdkey_toast_1")), 
                        this.close()); else a.sendMessage("showToast", o.getText("toast_string_6")), this.close();
                    }, this);
                } else a.sendMessage("showToast", o.getText("cdkey_toast_2")), this.close();
            },
            starNumLabelAction: function(e, t) {
                var i = cc.find("Canvas/topUI"), n = cc.find("Canvas/topUI/UI_Coins_Line").getChildByName("moneyLbl"), o = s.autoReleaseInstantiate(n);
                o.parent = i;
                var r = o.getComponent(cc.Label), c = i.getChildByName("UI_Coins_Line").getChildByName("moneyLbl"), h = i.getChildByName("UI_Rating_bg").getChildByName("starLbl"), l = i.getChildByName("UI_Plate_bg").getChildByName("plateLbl"), u = i.getChildByName("UI_Yuer").getChildByName("yuerLbl"), d = null;
                "money" == e ? (i.getChildByName("UI_Coins_Line").getChildByName("UI_Icon_Coins").runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, 1))), 
                d = i.convertToNodeSpaceAR(c.convertToWorldSpaceAR(cc.v2(0, 0)))) : "star" == e ? (i.getChildByName("UI_Rating_bg").getChildByName("UI_Icon_Rating").runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, 1))), 
                d = i.convertToNodeSpaceAR(h.convertToWorldSpaceAR(cc.v2(0, 0)))) : "plate" == e ? (i.getChildByName("UI_Plate_bg").getChildByName("UI_Icon_Plate").runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, 1))), 
                d = i.convertToNodeSpaceAR(l.convertToWorldSpaceAR(cc.v2(0, 0)))) : "bell" == e ? (i.getChildByName("UI_Bell").getChildByName("UI_Icon_bell").runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, 1))), 
                d = i.convertToNodeSpaceAR(l.convertToWorldSpaceAR(cc.v2(0, 0)))) : "yuer" == e && (i.getChildByName("UI_Yuer").getChildByName("UI_Icon_yuer1").runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, 1))), 
                d = i.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.v2(0, 0)))), o.x = d.x, o.y = d.y, 
                o.anchorX = 0, r.fontSize = 38, r.string = "+" + t, o.opacity = 0;
                var f = cc.fadeIn(.5), g = cc.fadeOut(.25), p = cc.moveBy(1, 0, 100);
                o.runAction(cc.sequence(f, cc.delayTime(.25), g, cc.callFunc(function() {
                    "plate" == e ? a.sendMessage("hidePlateLbl") : "yuer" == e ? a.sendMessage("hideYuerLbl") : "bell" == e && a.sendMessage("hideBellLbl");
                }, this), cc.destroySelf())), o.runAction(p);
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler",
        config: "config",
        global: "global",
        localize: "localize",
        memorialData: "memorialData",
        netManager: "netManager",
        userData: "userData"
    } ],
    config: [ function(e, t, i) {
        cc._RF.push(t, "2ee6eGR4PdNPIaZWRICEGcy", "config");
        var n = {
            version: "v7.5.9",
            app_type: "inland",
            BUFFER_INV_TIME: 144e5,
            init: function() {
                var t = e("userData"), i = e("global");
                this.buffet_price = t.encryptData(this.buffet_price), this.takeOutRoom_price = t.encryptData(this.takeOutRoom_price), 
                this.buffet_need_star = t.encryptData(this.buffet_need_star), this.takeOutRoom_need_star = t.encryptData(this.takeOutRoom_need_star);
                var n = this.npcs;
                this.npcsMap = {};
                for (var a = 0; a < n.length; a++) {
                    var o = n[a];
                    this.npcsMap[o.key] = o, o.shareCoin && (o.shareCoin = t.encryptData(o.shareCoin));
                }
                this.customersMap = {}, this.customersOrderMap = {};
                for (var s = new Date(i.getServerTime()).getMonth(), r = 0; r < this.customers.length; r++) {
                    var c = this.customers[r];
                    s >= 2 && s <= 4 && "spring" == c.limitType && (c.attrs.weight = c.attrs.weight / 2), 
                    s >= 5 && s <= 7 && "summer" == c.limitType && (c.attrs.weight = c.attrs.weight / 2), 
                    s >= 8 && s <= 10 && "autumn" == c.limitType && (c.attrs.weight = c.attrs.weight / 2), 
                    (s >= 11 || s <= 1) && "winter" == c.limitType && (c.attrs.weight = c.attrs.weight / 2), 
                    c.buffetReward = {}, c.buffetReward.coin = 100 + 20 * r, c.buffetReward.star = .1 + r % 5 * .1, 
                    c.buffetReward.plate = 2 + 1 * r, this.customersMap[c.key] = c, c.attrs.orderKey && (this.customersOrderMap[c.attrs.orderKey] = c), 
                    c.shareCoin && (c.shareCoin = t.encryptData(c.shareCoin));
                    var h = c.attrs;
                    h && (h.starProb && (h.starProb = t.encryptData(h.starProb)), h.starValue && (h.starValue = t.encryptData(h.starValue))), 
                    c.buffetReward && (c.buffetReward.coin && (c.buffetReward.coin = t.encryptData(c.buffetReward.coin)), 
                    c.buffetReward.star && (c.buffetReward.star = t.encryptData(c.buffetReward.star)), 
                    c.buffetReward.plate && (c.buffetReward.plate = t.encryptData(c.buffetReward.plate)));
                }
                this.boothsMap = {};
                for (var l = 0; l < this.booths.length; l++) {
                    var u = this.booths[l];
                    this.boothsMap[u.key] = u;
                }
                this.cookbooksMap = {}, this.delicacyCookMap = {};
                for (var d = 0; d < this.cookbooks.length; d++) {
                    var f = this.cookbooks[d];
                    if (this.cookbooksMap[f.key] = f, f.cost && (f.cost = t.encryptData(f.cost)), f.income && (f.income = t.encryptData(f.income)), 
                    f.needStar && (f.needStar = t.encryptData(f.needStar)), f.lvUp && f.lvUp.length > 0) for (var g = f.lvUp, p = 0; p < g.length; p++) g[p].income && (g[p].income = t.encryptData(g[p].income));
                    if (f.delicacy) {
                        var m = "cusLv_" + f.delicacy.cusLv;
                        this.delicacyCookMap[m] || (this.delicacyCookMap[m] = []), this.delicacyCookMap[m].push(f);
                    }
                }
                this.buffetFoodMap = {};
                for (var y = 0; y < this.buffetFoods.length; y++) {
                    var v = this.buffetFoods[y];
                    if (this.buffetFoodMap[v.key] = v, v.cost && (v.cost = t.encryptData(v.cost)), v.income && (v.income = t.encryptData(v.income)), 
                    v.needStar && (v.needStar = t.encryptData(v.needStar)), v.cusCoinPro && (v.cusCoinPro = t.encryptData(v.cusCoinPro)), 
                    v.cusStarPro && (v.cusStarPro = t.encryptData(v.cusStarPro)), v.cusPlatePro && (v.cusPlatePro = t.encryptData(v.cusPlatePro)), 
                    v.lvUp && v.lvUp.length > 0) for (var b = v.lvUp, _ = 0; _ < b.length; _++) b[_].income && (b[_].income = t.encryptData(b[_].income));
                }
                this.buildingsMap = {}, this.buildingsItemMap = {};
                for (var w = 0; w < this.buildings.length; w++) {
                    var S = this.buildings[w];
                    this.buildingsMap[S.key] = S;
                    for (var T = 0; T < S.items.length; T++) {
                        var k = S.items[T];
                        this.buildingsItemMap[k.key] || (this.buildingsItemMap[k.key] = []), this.buildingsItemMap[k.key].push({
                            key: S.key,
                            index: T,
                            item: k
                        }), k.star && (k.star = t.encryptData(k.star)), k.tipCap && (k.tipCap = t.encryptData(k.tipCap)), 
                        k.tip && (k.tip = t.encryptData(k.tip)), k.cookTime && (k.cookTime = t.encryptData(k.cookTime)), 
                        k.genCoin && (k.genCoin = t.encryptData(k.genCoin)), k.genPlate && (k.genPlate = t.encryptData(k.genPlate)), 
                        k.cost && (k.cost = t.encryptData(k.cost)), k.income && (k.income = t.encryptData(k.income)), 
                        k.flowerHp && (k.flowerHp = t.encryptData(k.flowerHp)), k.wishFreeTimes && (k.wishFreeTimes = t.encryptData(k.wishFreeTimes)), 
                        k.wishAwardCount && (k.wishAwardCount = t.encryptData(k.wishAwardCount)), k.needStar && (k.needStar = t.encryptData(k.needStar)), 
                        k.daliyCount && (k.daliyCount = t.encryptData(k.daliyCount)), k.daliyMoneyCount && (k.daliyMoneyCount = t.encryptData(k.daliyMoneyCount));
                    }
                }
                this.secretStoreMap = {}, this.secretStoreItemMap = {};
                for (var x = 0; x < this.secret_store.length; x++) {
                    var D = this.secret_store[x];
                    this.secretStoreMap[D.key] = D;
                    for (var A = D.items, M = 0; M < A.length; M++) {
                        var I = A[M];
                        I.star && (I.star = t.encryptData(I.star)), this.secretStoreItemMap[I.key] = I;
                    }
                }
                this.employeesMap = {};
                for (var C = 0; C < this.employees.length; C++) {
                    var R = this.employees[C];
                    this.employeesMap[R.key] = R;
                    for (var W = 0; W < R.attrs.length; W++) {
                        var P = R.attrs[W];
                        if (P.star && (P.star = t.encryptData(P.star)), P.baitNum && (P.baitNum = t.encryptData(P.baitNum)), 
                        P.tipCap && (P.tipCap = t.encryptData(P.tipCap)), P.tip && (P.tip = t.encryptData(P.tip)), 
                        P.genCoin && (P.genCoin = t.encryptData(P.genCoin)), P.income && (P.income = t.encryptData(P.income)), 
                        P.cost && (P.cost = t.encryptData(P.cost)), P.needTime && (P.needTime = t.encryptData(P.needTime)), 
                        P.incomeCd && (P.incomeCd = t.encryptData(P.incomeCd)), P.longPressTime && (P.longPressTime = t.encryptData(P.longPressTime)), 
                        P.native_genPlate && (P.native_genPlate = t.encryptData(P.native_genPlate)), P.takeOutMax && (P.takeOutMax = t.encryptData(P.takeOutMax)), 
                        P.takeOutFactor && (P.takeOutFactor = t.encryptData(P.takeOutFactor)), P.likeCount && (P.likeCount = t.encryptData(P.likeCount)), 
                        P.increaseOrderLimit && (P.increaseOrderLimit = t.encryptData(P.increaseOrderLimit)), 
                        P.skill) {
                            var O = P.skill;
                            O.duration && (O.duration = t.encryptData(O.duration)), O.cd && (O.cd = t.encryptData(O.cd)), 
                            O.value && (O.value = t.encryptData(O.value));
                        }
                        P.fly && (P.fly.minTime && (P.fly.minTime = t.encryptData(P.fly.minTime)), P.fly.maxTime && (P.fly.maxTime = t.encryptData(P.fly.maxTime))), 
                        P.buffetJob && P.buffetJob.plate && (P.buffetJob.plate = t.encryptData(P.buffetJob.plate));
                    }
                }
            }
        };
        t.exports = n, cc._RF.pop();
    }, {
        global: "global",
        userData: "userData"
    } ],
    destroySelfAction: [ function(e, t, i) {
        cc._RF.push(t, "f79b6d5vShJKp+P8D4tbnts", "destroySelfAction"), cc.DestroySelf = cc.Class({
            name: "cc.DestroySelf",
            extends: cc.ActionInstant,
            update: function() {
                this.target.destroy();
            },
            reverse: function() {
                return new cc.DestroySelf();
            },
            clone: function() {
                return new cc.DestroySelf();
            }
        }), cc.destroySelf = function() {
            return new cc.DestroySelf();
        }, cc._RF.pop();
    }, {} ],
    employee_10: [ function(e, t, i) {
        cc._RF.push(t, "c2214DuwXNE+L9RWlQ5zAVy", "employee_10");
        var n = e("userData"), a = e("global"), o = e("config"), s = e("netManager"), r = (e("localize"), 
        o.BUFFER_INV_TIME);
        cc.Class({
            extends: e("employees"),
            properties: {},
            useSkill: function() {},
            onLoad: function() {},
            start: function() {
                this._super(), this.node.active = !1, this.node.active = !1, this.initStatus();
            },
            initStatus: function() {
                if (a.isNativeOnly()) this.node.active = !0, this.status = 0, this.firstEnter = !0, 
                this.throwPlatesTimeCount = 300, this.listenerAry.push(n.addListener("enterBuffetRoom", function() {
                    if (this.firstEnter) return this.throwPlates(), void (this.firstEnter = !1);
                    this.throwPlatesTimeCount <= 0 && s.getNowTime(function(e) {
                        e && this.throwPlates();
                    }, this);
                }, this)); else {
                    var e = a.buffetToStartTime_emp, t = a.getServerTime();
                    n.getData("buffetMoneyPay", function(i) {
                        cc.isValid(this.node, !0) && (this.node.active = !0, t - e < r ? (this.status = 3, 
                        this.node.x = 1500, this.node.y = -500) : e <= i || !e ? this.status = 0 : (this.status = 3, 
                        this.node.x = 1500, this.node.y = -500));
                    }, this);
                }
            },
            throwPlates: function() {
                a.isNativeOnly() && (this.throwPlatesWorking || (this.throwPlatesWorking = !0, n.getData("employee_10_throwPlate_time", function(e) {
                    if (this.throwPlatesTimeCount = 300, e) {
                        var t = a.getServerTime() - e, i = Math.floor(t / r), o = Math.min(i, 3);
                        if (o <= 0) return void (this.throwPlatesWorking = !1);
                        this.status = 4;
                        var s = a.getServerTime();
                        s -= t % r, this.move(100 * Math.random() - 50, -850, function() {
                            n.setData("employee_10_throwPlate_time", s, function() {
                                this.status = 0;
                                var e = 0;
                                this.attr && this.attr.native_genPlate && (e = n.decodeData(this.attr.native_genPlate) || 0);
                                var t = function() {
                                    o--;
                                    var i = this.getRandomCoinPoint(80);
                                    i.key = this.info.key, i.buffetRoom = !0, i.randomX = 0, i.randomY = 0;
                                    var n = Math.floor(e / 3);
                                    this.buffetManager.createPlates(n, i), this.buffetManager.createPlates(n, i), this.buffetManager.createPlates(e - 2 * n, i), 
                                    o > 0 ? this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                                        t();
                                    }, this))) : this.throwPlatesWorking = !1;
                                };
                                t = t.bind(this), o > 0 ? t() : this.throwPlatesWorking = !1;
                            }, this);
                        }, this);
                    } else n.setData("employee_10_throwPlate_time", a.getServerTime(), function() {
                        this.throwPlatesWorking = !1;
                    }, this);
                }, this)));
            },
            goOutSide: function() {
                this.status = 3, this.move(500, -500, function() {
                    this.move(1500, -500, function() {}, this);
                }, this);
            },
            comeBack: function() {
                this.status = 4, this.move(500, -500, function() {
                    this.status = 0;
                }, this);
            },
            checkToBack: function() {
                var e = a.buffetToStartTime_emp || 0;
                a.getServerTime() - e >= r && this.comeBack();
            },
            checkToGoOutSide: function() {
                var e = a.buffetToStartTime_emp || 0;
                a.getServerTime() - e < r && this.goOutSide();
            },
            update: function(e) {
                a.isNativeOnly() ? this.throwPlatesTimeCount > 0 && (this.throwPlatesTimeCount -= e) : (0 == this.status && this.checkToGoOutSide(), 
                3 == this.status && this.checkToBack()), this._super(e);
            }
        }), cc._RF.pop();
    }, {
        config: "config",
        employees: "employees",
        global: "global",
        localize: "localize",
        netManager: "netManager",
        userData: "userData"
    } ],
    employee_11: [ function(e, t, i) {
        cc._RF.push(t, "e7641P9FS5NyJhA+E6l0oyL", "employee_11");
        var n = e("userData"), a = e("global"), o = e("netManager"), s = [ {
            fishType: 1,
            weight: 200
        }, {
            fishType: 11,
            weight: 400
        }, {
            fishType: 8,
            weight: 400
        }, {
            fishType: 13,
            weight: 400
        }, {
            fishType: 7,
            weight: 600
        }, {
            fishType: 12,
            weight: 600
        }, {
            fishType: 2,
            weight: 800
        }, {
            fishType: 10,
            weight: 800
        }, {
            fishType: 9,
            weight: 1400
        }, {
            fishType: 3,
            weight: 1400
        }, {
            fishType: 4,
            weight: 1e3
        }, {
            fishType: 5,
            weight: 800
        }, {
            fishType: 6,
            weight: 800
        } ];
        cc.Class({
            extends: e("employees"),
            onLoad: function() {
                this._super(), this.baitNum = null, this.timeCount = 0;
            },
            start: function() {
                var e = this;
                this._super(), this.baitNum = this.attr.baitNum, this.firstEnter = !0, this.bubbleNode = this.node.parent.getChildByName("bubbleNode"), 
                this.bubbleNode.x -= 400, this.bubbleNode.y += 50, this.warnBubbleNode = this.bubbleNode.getChildByName("warnBubble"), 
                this.baitBubbleNode = this.bubbleNode.getChildByName("baitBubble"), this.listenerAry.push(n.addListener("enterPond", function(t) {
                    1 == t && (e.canGetBait = !1), n.getData("yuer", function(t) {
                        cc.isValid(e.node, !0) && (t > 0 ? e.onCheckCanGetFreeBait(function(t) {
                            t || e.canGetBait ? (e.canGetBait = !0, e.warnBubbleNode.active = !1, e.baitBubbleNode.active = !0) : t || e.canGetBait || (e.warnBubbleNode.active = !0, 
                            e.baitBubbleNode.active = !1, n.getData("IsTheFirstTimeInFishingPond", function(t) {
                                t || e.tutorialsManager.isWorking() || n.sendMessage("showFishClickTutorials");
                            }));
                        }) : e.onCheckCanGetFreeBait(function(t) {
                            t || e.canGetBait ? (e.canGetBait = !0, e.warnBubbleNode.active = !1, e.baitBubbleNode.active = !0) : t || e.canGetBait || (e.warnBubbleNode.active = !1, 
                            e.baitBubbleNode.active = !1, n.getData("IsTheFirstTimeInFishingPond", function(t) {
                                t || e.tutorialsManager.isWorking() || n.sendMessage("showFishClickTutorials");
                            }));
                        }));
                    });
                }, this)), this.isWorking = !1, this.btn = this.node.parent.getChildByName("btn").getComponent(cc.Button), 
                this.btn.node.on("click", function() {
                    e.onClick();
                });
            },
            onClick: function() {
                var e = this;
                this.isWorking || (this.isWorking = !0, this.node.runAction(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    e.baitBubbleNode.active ? e.onCreateBaitDlg() : (n.sendMessage("removeTurorialsCatFinger"), 
                    n.sendMessage("employee_11_onFishing"), e.isWorking = !1);
                }))));
            },
            updateZIndex: function() {
                null != this.lastY && Math.abs(this.node.parent.y - this.lastY) < .1 || (this.lastY = this.node.parent.y, 
                this.node.parent.zIndex = 5e3 - this.node.parent.y);
            },
            onCheckCanGetFreeBait: function(e) {
                var t = this;
                this.timeCount <= 0 ? (this.timeCount = 7200, o.getNowTime(function(i) {
                    i && n.getData("daily_bait", function(t) {
                        if (cc.isValid(this.node, !0)) {
                            var i = 0;
                            if (t) {
                                var n = a.getServerTime() + 72e5, o = new Date(n), s = new Date(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), 0).getTime();
                                t + 72e5 >= (s -= 60 * o.getTimezoneOffset() * 1e3) && (s += 864e5), i = (s - n) / 1e3;
                            }
                            e(i <= 0);
                        }
                    }, t);
                })) : e(!1);
            },
            useSkill: function() {
                this.onCheckRewardOffline();
            },
            onCreateBaitDlg: function() {
                e("ViewModule").ins.pushView("baitDlg", this.baitNum), this.isWorking = !1;
            },
            onCheckRewardOffline: function() {
                var e = this;
                !this.throwFishWorking && cc.isValid(this.node) && (this.throwFishWorking = !0, 
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    n.getData("employee_11_throwFish_time", function(e) {
                        var t = this;
                        e ? o.getNowTime(function(i) {
                            if (cc.isValid(t.node, !0)) if (i) {
                                var o = a.getServerTime(), s = o - e, r = 1e3 * n.decodeData(t.skill.cd), c = Math.floor(s / r), h = c > 10 ? 10 : c;
                                o -= s % r, n.setData("employee_11_throwFish_time", o, function() {
                                    if (cc.isValid(t.node, !0)) {
                                        for (var e = 0; e < h; e++) t.onCreateFish();
                                        t.throwFishWorking = !1, t.nextTime = r;
                                    }
                                }, t);
                            } else t.throwFishWorking = !1;
                        }) : n.setData("employee_11_throwFish_time", a.getServerTime(), function() {
                            this.throwFishWorking = !1;
                        }, this);
                    }, e);
                }))));
            },
            onCreateFish: function() {
                var e, t = 0, i = 0, a = 0;
                s.forEach(function(e) {
                    t += e.weight;
                }), e = Math.random() * t;
                for (var o = 0; o < s.length; o++) {
                    var r = s[o];
                    if (!r.fishType) return;
                    if (a += r.weight, e >= i && e <= a) {
                        n.sendMessage("fishThrow", {
                            fishType: r.fishType,
                            num: 1
                        });
                        break;
                    }
                    i += r.weight;
                }
            },
            update: function(e) {
                this._super(e), this.timeCount && (this.timeCount -= e);
            }
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        employees: "employees",
        global: "global",
        netManager: "netManager",
        userData: "userData"
    } ],
    employee_12: [ function(e, t, i) {
        cc._RF.push(t, "c2ecdAETsJMroGY/FDtKr20", "employee_12");
        var n = e("userData"), a = e("global"), o = e("memorialData");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this.listenerAry = [], this.finishTime = 0, this.timeCount = 0, this.node.active = !1, 
                this.working = !0, this.getEmpFinishTime(function() {
                    this.working = !0, n.getData(this.key + "_car", function(e) {
                        this.working = !1;
                        var t = this.node.getChildByName("vehicle").getComponent(cc.Animation);
                        this.carAnim = t;
                        var i = this.info.defaultCarInfo;
                        if (e) {
                            var n = o.carsMap["car_" + e];
                            n && (i = n.carInfo);
                        }
                        this.initCar(i), this.initStatus();
                        var a = this.anim;
                        this.initHead(), a.play(this.key);
                    }, this);
                }), this.listenerAry.push(n.addListener("changeMemorial", function(t, i) {
                    if (t.headInfo.parentKey == this.key) {
                        e("ViewModule").ins.popViewsByName("cusMenuDlg"), this.customerManager.mainScene.toTakeOutRoom(), 
                        this.changeMemorial(t, i);
                        var n = this.info.defaultCarInfo;
                        i && t.carInfo && (n = t.carInfo), this.initCar(n);
                    }
                }, this));
            },
            initStatus: function() {
                this.node.active = !0;
                var e = a.getServerTime();
                this.finishTime > e ? (this.node.x = this.info.outSideX, this.node.y = this.info.outSideY, 
                this.status = 3) : (this.setFaceTo(!0), this.node.x = this.info.startX, this.node.y = this.info.startY, 
                this.status = 0);
            },
            initCar: function(e) {
                var t = this, i = e.carIndex;
                n.setData(this.key + "_car", i, function() {
                    var i = t.node.getChildByName("vehicle").getComponent(cc.Sprite), n = t.carAnim;
                    t.carAnimClip && n.removeClip(t.carAnimClip, !0), t.loadRes("Animation/" + e.carAnimClip, cc.AnimationClip, function(t, i) {
                        t ? console.error(t) : n.addClip(i, e.carAnimClip);
                    }, 6);
                    var o = e[t.key];
                    i.node.x = o.x || 0, i.node.y = o.y || 0, i.node.zIndex = o.zIndex || 0, t.carAnimClip = e.carAnimClip, 
                    a.loadRes(e.img, cc.SpriteFrame, function(e, t) {
                        if (e) console.error(e); else {
                            if (!cc.isValid(i.node)) return a.retainRes(t), void a.releaseRes(t);
                            i.spriteFrame = t, a.retainRes(t);
                        }
                    }, 100);
                });
            },
            goOutSide: function() {
                this.status = 3, this.anim.stop(this.key), this.anim.play(this.key), this.carAnim.play(this.carAnimClip), 
                this.move(this.info.outSideX, this.info.outSideY, function() {}, this);
            },
            comeBack: function() {
                this.status = 4, this.anim.stop(this.key), this.anim.play(this.key), this.carAnim.play(this.carAnimClip), 
                this.move(this.info.startX, this.info.startY, function() {
                    this.status = 0;
                }, this);
            },
            checkToBack: function() {
                var e = this.finishTime || 0;
                a.getServerTime() >= e && this.comeBack();
            },
            checkToGoOutSide: function() {
                var e = this.finishTime || 0;
                a.getServerTime() < e && this.goOutSide();
            },
            getEmpFinishTime: function(e) {
                var t = this;
                e = e.bind(this), this.takeOutManager.getEmpFinishTime(this.key).then(function(i) {
                    cc.isValid(t.node) && (t.working = !1, t.finishTime = i, e());
                });
            },
            update: function(e) {
                this.working || (this.working = !0, this.getEmpFinishTime(function() {
                    0 == this.status && this.checkToGoOutSide(), 3 == this.status && this.checkToBack();
                })), this._super(e);
            },
            useSkill: function() {}
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        employees: "employees",
        global: "global",
        memorialData: "memorialData",
        userData: "userData"
    } ],
    employee_13: [ function(e, t, i) {
        cc._RF.push(t, "0cb88LCcm5KkbvRZ9eQ0pgu", "employee_13"), e("userData"), e("global"), 
        cc.Class({
            extends: e("employee_12")
        }), cc._RF.pop();
    }, {
        employee_12: "employee_12",
        global: "global",
        userData: "userData"
    } ],
    employee_14: [ function(e, t, i) {
        cc._RF.push(t, "7bef5LC+eNEQY1cK5qxUiu7", "employee_14");
        var n = e("userData"), a = e("netManager");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.setActionFollowFace(!0), this.skillTimeKey = this.key + "_sk_time";
            },
            update: function(e) {
                this.anim && (this.isSkCheckWorking || (this.isSkCheckWorking = !0, n.getData(this.skillTimeKey, function(e) {
                    a.getNowTime(function(t) {
                        var i = this;
                        if (t && cc.isValid(this.node)) {
                            if (!e) return void n.setData(this.skillTimeKey, t, function() {
                                this.isSkCheckWorking = !1, this.toIdle();
                            }, this);
                            var a = Math.abs(t - e), o = Math.floor(a / 36e5);
                            if (a >= 36e5) {
                                var s = o;
                                s > 24 && (s = 24), this.onAddGoodEvaluate(s);
                            }
                            var r = function() {
                                cc.isValid(i.node) && (a - 36e5 * o <= 9e5 ? (i.isSkCheckWorking = !1, i.moveAndRest()) : (i.isSkCheckWorking = !1, 
                                i.toIdle()));
                            };
                            o > 0 ? (e += 36e5 * o, n.setData(this.skillTimeKey, e, function() {
                                r();
                            }, this)) : r();
                        } else setTimeout(function() {
                            cc.isValid(i.node) && (i.isSkCheckWorking = !1, i.toIdle());
                        }, 5e3);
                    }, this, 300);
                }, this)), this._super(e), "emp_14_resting" == this.status ? this.anim.node.zIndex = 9999 : this.updateZIndex());
            },
            toIdle: function() {
                var e = this;
                if (0 != this.status && "emp_14_id_move" != this.status) if ("emp_14_resting" == this.status && (this.node.y -= 100), 
                Math.abs(this.node.x - 250) < 1 && Math.abs(this.node.y - 420) < 1) {
                    this.anim.play(this.key), this.status = "emp_14_id_move";
                    var t = {
                        x: 250,
                        y: 320
                    };
                    this.move(t.x, t.y, function() {
                        e.status = 0;
                    });
                } else this.status = 0, this.anim.play(this.key);
            },
            moveAndRest: function() {
                var e = this;
                if ("emp_14_rest" != this.status && "emp_14_resting" != this.status) {
                    this.status = "emp_14_rest";
                    var t = this.takeOutManager.getEmpRestPos();
                    t && this.move(200, 320, function() {
                        e.move(t.x, t.y - 100, function() {
                            e.status = "emp_14_resting", e.anim.node.zIndex = 9999, e.anim.play("employee_14_rest"), 
                            e.node.y = t.y;
                        });
                    });
                }
            },
            onAddGoodEvaluate: function(e) {
                for (var t = 0; e > 0; ) e--, Math.random() < this.attr.likePro && (t += n.decodeData(this.attr.likeCount));
                if (!(t <= 0)) {
                    var i = this.getRandomCoinPoint(0);
                    i.parent = this.node.parent, i.key = this.key, i.takeOutRoom = !0, this.customerManager.createLikes(t, i);
                }
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        netManager: "netManager",
        userData: "userData"
    } ],
    employee_1: [ function(e, t, i) {
        cc._RF.push(t, "c18402kHXRMCrrPyet9ZO/d", "employee_1");
        var n = e("userData"), a = e("global"), o = e("twSprite");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.skillCountKey = this.key + "_sk_count";
            },
            onCheckUsingSkill: function(e, t) {
                n.getData(this.skillCountKey, function(t) {
                    if (cc.isValid(this.node)) if (t >= n.decodeData(this.skill.duration)) {
                        var i = [ {
                            key: this.skillStateKey,
                            value: 0
                        }, {
                            key: this.skillTimeKey,
                            value: e
                        }, {
                            key: this.skillCountKey,
                            value: 0
                        } ];
                        n.setDataByArray(i, function() {
                            this.isSkCheckWorking = !1, this.toIdle();
                        }, this);
                    } else this.isSkCheckWorking = !1, this.toSkill();
                }, this);
            },
            useSkill: function() {
                this.skillPlayCount = 0, this._super();
            },
            onAnimCall_skill1: function() {
                this.isCountWorking || ++this.skillPlayCount >= 25 && (this.skillPlayCount = 0, 
                this.isCountWorking = !0, n.changeData(this.skillCountKey, 1, function() {
                    n.getData("ads_lv", function(e) {
                        this.isCountWorking = !1, this.customerManager.customerComing({
                            adIndex: e + 1
                        }, function() {
                            var t = new cc.Node();
                            t.parent = this.node.parent, t.opacity = 0, t.x = this.node.x, t.y = this.node.y + 295, 
                            t.zIndex = this.node.zIndex + 300;
                            var i = t.addComponent(o), n = "Publicity/UI_Chuandan_" + (e + 1);
                            a.loadRes(n, cc.SpriteFrame, function(e, t) {
                                if (!e) return cc.isValid(i.node) ? void (i.spriteFrame = t) : (a.retainRes(t), 
                                void a.releaseRes(t));
                                console.error(e);
                            }), t.runAction(cc.fadeIn(.2));
                            var s = cc.moveTo(.4, t.x, t.y + 100);
                            s.easing(cc.easeOut(2)), t.runAction(cc.sequence(s, cc.moveTo(.42, t.x, t.y + 80))), 
                            t.runAction(cc.sequence(cc.delayTime(.7), cc.fadeOut(.2), cc.destroySelf()));
                        }, this);
                    }, this);
                }, this));
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        global: "global",
        twSprite: "twSprite",
        userData: "userData"
    } ],
    employee_2: [ function(e, t, i) {
        cc._RF.push(t, "c9f9f+Thy1LXLAdM0mqYdQU", "employee_2");
        var n = e("userData");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.skillTimeLeft = 0;
            },
            update: function(e) {
                if (!(e >= 30)) {
                    this._super(e), this.skillTimeLeft += e;
                    var t = n.decodeData(this.attr.incomeCd);
                    this.skillTimeLeft >= t && (this.skillTimeLeft -= t, this.useSkill());
                }
            },
            useSkill: function() {
                var e = this.getRandomCoinPoint(30);
                e.parent = this.node.parent, e.key = this.key, e.kitchen = !0, n.sendMessage("createCoins", n.decodeData(this.attr.income), e);
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        userData: "userData"
    } ],
    employee_3: [ function(e, t, i) {
        cc._RF.push(t, "b3de0qgHahKDIn0Z9rObl3d", "employee_3");
        var n = e("global"), a = e("userData");
        cc.Class({
            extends: e("employees"),
            isSkillEnabled: function() {
                return 0 == this.status || 5 == this.status || 1 == this.status;
            },
            toSkill: function() {
                this.isSkillEnabled() && this._super();
            },
            onCheckUsingSkill: function(e, t) {
                this.isSkillEnabled() ? 5 == this.status ? this._super(e, t) : Math.abs(e - t) >= 1e3 * a.decodeData(this.skill.duration) ? this.status = 4 : (this.toSkill(), 
                this.isSkCheckWorking = !1) : this.isSkCheckWorking = !1;
            },
            update: function(e) {
                if (!(this.readCount < 2)) if (this._super(e), 2 == this.status && a.getData(this.skillTimeKey, function(e) {
                    a.getData(this.skillStateKey, function(t) {
                        if (cc.isValid(this.node)) {
                            var i = n.getServerTime();
                            if (0 == t && Math.abs(i - e) >= 1e3 * a.decodeData(this.skill.cd)) {
                                var o = [ {
                                    key: this.skillStateKey,
                                    value: 1
                                }, {
                                    key: this.skillTimeKey,
                                    value: i
                                } ];
                                a.setDataByArray(o, function() {
                                    this.toSkill();
                                }, this);
                            }
                        }
                    }, this);
                }, this), 1 == this.status) {
                    var t = void 0, i = n.getItemGroupMap("garbage"), o = 1e6, s = {};
                    if (i) for (var r in i) s[r] = i[r];
                    var c = this.pondManager.pondGarbageMap;
                    if (c) for (var h in c) s[h] = c[h];
                    if (s) for (var l in s) {
                        var u = s[l], d = cc.winSize.width / 1242, f = cc.winSize.height / 2688, g = Math.min(d, f), p = 1e6;
                        if (this.kitchen) if (u.kitchen) p = this.node.position.sub(u.endPos).mag(); else if (u.garden) {
                            var m = 701 / g;
                            p = this.node.position.sub(cc.v2(m, -760)).mag(), p += 1800, p += u.endPos.sub(cc.v2(-550, -310)).mag();
                        } else if (u.pond) {
                            var y = 701 / g;
                            p = u.endPos.sub(cc.v2(y, -760)).mag(), p += 2800, p += this.node.position.sub(cc.v2(-550, -310)).mag();
                        } else {
                            var v = -701 / g;
                            p = this.node.position.sub(cc.v2(v, -310)).mag(), p += 200, p += u.endPos.sub(cc.v2(550, -310)).mag();
                        } else if (this.garden) if (u.kitchen) {
                            var b = -641 / g;
                            p = this.node.position.sub(cc.v2(b, -310)).mag(), p += 1800, p += u.endPos.sub(cc.v2(550, -760)).mag();
                        } else if (u.garden) p = this.node.position.sub(u.endPos).mag(); else if (u.pond) {
                            var _ = 701 / g;
                            p = u.endPos.sub(cc.v2(_, -760)).mag();
                            var w = -651 / g;
                            p += this.node.position.sub(cc.v2(w, -760)).mag();
                        } else {
                            var S = -651 / g;
                            p = this.node.position.sub(cc.v2(S, -760)).mag(), p += 200, p += u.endPos.sub(cc.v2(550, -760)).mag();
                        } else if (this.pond) if (u.pond) p = this.node.position.sub(u.endPos).mag(); else if (u.garden) {
                            var T = -651 / g;
                            p = u.endPos.sub(cc.v2(T, -760)).mag();
                            var k = 701 / g;
                            p += this.node.position.sub(cc.v2(k, -760)).mag();
                        } else if (u.kitchen) {
                            var x = 701 / g;
                            p = this.node.position.sub(cc.v2(x, -760)).mag(), p += 2800, p += u.endPos.sub(cc.v2(-550, -310)).mag();
                        } else {
                            var D = -651 / g;
                            p = u.endPos.sub(cc.v2(D, -760)).mag(), p += 2e3, p += this.node.position.sub(cc.v2(550, -760)).mag();
                        } else if (u.kitchen) {
                            var A = 651 / g;
                            p = this.node.position.sub(cc.v2(A, -310)).mag(), p += 200, p += u.endPos.sub(cc.v2(-550, -310)).mag();
                        } else if (u.garden) {
                            var M = -651 / g;
                            p = this.node.position.sub(cc.v2(M, -760)).mag(), p += 200, p += u.endPos.sub(cc.v2(550, -760)).mag();
                        } else if (u.pond) {
                            var I = -651 / g;
                            p = this.node.position.sub(cc.v2(I, -760)).mag(), p += 2e3, p += u.endPos.sub(cc.v2(550, -760)).mag();
                        } else p = this.node.position.sub(u.endPos).mag();
                        o > p && (t = u, o = p);
                    }
                    if (t) {
                        this.status = 3, this.targetInfo = t, this.strollFlag = !1;
                        for (var C = cc.v2(0, 0), R = t.endPos, W = 0; W <= 20 && (C.x = R.x - 40 + 80 * Math.random(), 
                        C.y = R.y - 40 + 80 * Math.random(), !this.mapManager.isMapLegal(C.x, C.y)); ) W++;
                        this.targetPos = C;
                    } else if (!this.strollFlag) {
                        this.strollFlag = !0;
                        var P = this.mapManager.getRandomPoint(this.node);
                        this.move(P.x, P.y, function() {
                            this.strollFlag = !1;
                        });
                    }
                } else if (3 == this.status) {
                    var O = this.targetInfo;
                    if (O) {
                        this.status = 3.2;
                        var L = this.targetPos;
                        O.kitchen ? this.kitchen ? (this.status = 3.1, this.move(L.x, L.y, function() {
                            this.status = 0, this.checkGarbage();
                        })) : this.toKitchenRoom(function() {
                            this.status = 3;
                        }) : O.garden ? this.garden ? (this.status = 3.1, this.move(L.x, L.y, function() {
                            this.status = 0, this.checkGarbage();
                        })) : this.toGarden(function() {
                            this.status = 3;
                        }) : O.pond ? this.pond ? (this.status = 3.1, this.move(L.x, L.y, function() {
                            this.status = 0, this.checkGarbage();
                        })) : this.toPond(function() {
                            this.status = 3;
                        }) : this.kitchen || this.garden || this.pond ? this.toDiningRoom(function() {
                            this.status = 3;
                        }) : (this.status = 3.1, this.move(L.x, L.y, function() {
                            this.status = 0, this.checkGarbage();
                        }));
                    } else this.status = 1;
                } else 4 == this.status && (this.status = 4.1, this.kitchen ? (this.isSkCheckWorking = !1, 
                this.status = 5) : this.toKitchenRoom(function() {
                    this.isSkCheckWorking = !1, this.status = 5;
                }));
            },
            checkGarbage: function() {
                var e = this.targetInfo;
                if (e && this.node.position.sub(e.endPos).magSqr() <= 3249) {
                    if (e.pondGarbage) {
                        var t = e.node;
                        return void (cc.isValid(t, !0) && (t.__clickItem(), this.targetInfo = null));
                    }
                    for (var i = 0; i < e.nodes.length; i++) {
                        var n = e.nodes[i];
                        if (cc.isValid(n, !0)) {
                            var a = n.getComponent("item");
                            a && (a.clickItem(), a.removeTouchListener()), e.nodes = [], this.targetInfo = null;
                            break;
                        }
                    }
                }
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        global: "global",
        userData: "userData"
    } ],
    employee_4: [ function(e, t, i) {
        cc._RF.push(t, "ab6f5W4aT1BnJ49HKpGYX9x", "employee_4");
        var n = e("global");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.hitTimeLeft = this.attr.hitInterval;
            },
            update: function(e) {
                if (!(this.readyCount < 2)) {
                    this._super(e);
                    var t = this.targetNpc;
                    if (t && 12 != this.status && cc.isValid(t.node) && t.isAlive() && (this.hitTimeLeft -= e, 
                    this.hitTimeLeft <= 0 && this.kitchen == t.kitchen && this.garden == t.garden && this.pond == t.pond)) {
                        var i = this.node.position;
                        if (i.sub(t.node).magSqr() <= 9e4) return this.hitTimeLeft = null, this.node.runAction(cc.sequence(cc.moveTo(.1, t.node), cc.callFunc(function() {
                            t.onStrike(this.attr.hitHp);
                        }, this), cc.moveTo(.12, i), cc.callFunc(function() {
                            this.hitTimeLeft = this.attr.hitInterval, this.status = 10;
                        }, this))), this.status = 12, void this.stopMove();
                    }
                    if (0 == this.status) {
                        var a = n.npcUnitMap;
                        if (a) {
                            var o = void 0;
                            for (var s in a) {
                                if (o = a[s], cc.isValid(o.node) && o.isAlive()) break;
                                o = null;
                            }
                            o && (this.status = 10, this.targetNpc = o);
                        }
                    } else if (10 == this.status) {
                        if (this.status = 11, !t || !cc.isValid(t.node) || !t.isAlive()) return this.status = 12, 
                        this.targetNpc = null, void (this.garden || this.pond ? this.toKitchenRoom(function() {
                            this.status = 0;
                        }) : this.kitchen ? this.status = 0 : this.toKitchenRoom(function() {
                            this.status = 0;
                        }));
                        var r = this.targetNpc.getHitInfo(), c = this.targetNpc.getPosInfo();
                        c.kitchen == this.kitchen && c.garden == this.garden && c.pond == this.pond && (r = c);
                        var h = r.pos;
                        this.targetInfo = r, r.kitchen ? this.kitchen ? this.move(h.x, h.y, function() {
                            this.status = 10;
                        }) : (this.status = 12, this.toKitchenRoom(function() {
                            this.status = 10;
                        })) : r.garden ? this.garden ? this.move(h.x, h.y, function() {
                            this.status = 10;
                        }) : (this.status = 12, this.toGarden(function() {
                            this.status = 10;
                        })) : r.pond ? this.pond ? this.move(h.x, h.y, function() {
                            this.status = 10;
                        }) : (this.status = 12, this.toPond(function() {
                            this.status = 10;
                        })) : this.kitchen || this.garden || this.pond ? (this.status = 12, this.toDiningRoom(function() {
                            this.status = 10;
                        })) : this.move(h.x, h.y, function() {
                            this.status = 10;
                        });
                    } else if (11 == this.status) {
                        if (!t || !cc.isValid(t.node) || !t.isAlive()) return void this.status;
                        if (null != this.checkInterval && (this.checkInterval -= e, this.checkInterval > 0)) return;
                        var l = this.targetNpc.getHitInfo(), u = this.targetNpc.getPosInfo();
                        u.kitchen == this.kitchen && u.garden == this.garden && u.pond == this.pond && (l = u), 
                        l.kitchen != this.targetInfo.kitchen || l.garden != this.targetInfo.garden || t.pond != this.targetInfo.pond ? (this.status = 10, 
                        this.checkInterval = 6, this.stopMove()) : l.pos.sub(this.targetInfo.pos).magSqr() > 78400 ? (this.status = 10, 
                        this.checkInterval = 8, this.stopMove()) : this.checkInterval = 4;
                    }
                }
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        global: "global"
    } ],
    employee_5: [ function(e, t, i) {
        cc._RF.push(t, "9f112rTYwJDDoqSsbmB7tpa", "employee_5");
        var n = e("userData");
        cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.timeCount = .5;
            },
            useSkill: function() {
                n.addBaseCookTimeFactor(n.decodeData(this.skill.value));
            },
            onSkillEnd: function() {
                n.addBaseCookTimeFactor(-n.decodeData(this.skill.value));
            },
            update: function(e) {
                var t = this;
                this._super(e), this.timeCount -= e, this.timeCount <= 0 && (this.timeCount = 10, 
                n.getData("specStroyState", function(e) {
                    cc.isValid(t.node) && (1 == e ? t.node.opacity = 0 : 0 == t.node.opacity ? (t.sepcShowUpCount ? t.sepcShowUpCount++ : t.sepcShowUpCount = 1, 
                    t.sepcShowUpCount >= 20 && (t.node.opacity = 255)) : 255 != t.node.opacity && (t.node.opacity = 255));
                }));
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        userData: "userData"
    } ],
    employee_6: [ function(e, t, i) {
        cc._RF.push(t, "e810bHgUoVGCpGTzj8ZK1dY", "employee_6"), cc.Class({
            extends: e("employees"),
            start: function() {
                this._super(), this.skill3Count = 0;
            },
            onAnimCall_skill3: function() {
                var e = this;
                ++this.skill3Count < 2 || (this.skill3Count = 0, this.customerManager.checkWaitOrder(function(t) {
                    cc.isValid(e.node) && t && t.autoOrder();
                }));
            },
            updateZIndex: function() {
                null != this.lastY && Math.abs(this.node.y - this.lastY) < .1 || (this.lastY = this.node.y, 
                this.node.zIndex = 5e3 - this.node.y + 100);
            }
        }), cc._RF.pop();
    }, {
        employees: "employees"
    } ],
    employee_7: [ function(e, t, i) {
        cc._RF.push(t, "b8fe9S8PhpO5ZcGzGZM0sWp", "employee_7");
        var n = e("global"), a = e("userData");
        cc.Class({
            extends: e("employees"),
            isSkillEnabled: function() {
                return 0 == this.status || 3 == this.status || 5 == this.status;
            },
            toSkill: function() {
                this.isSkillEnabled() && (this.timeCount = 0, this._super());
            },
            onCheckUsingSkill: function(e, t) {
                this.isSkillEnabled() ? 5 == this.status ? this._super(e, t) : Math.abs(e - t) >= 1e3 * a.decodeData(this.skill.duration) ? this.status = 4 : (this.toSkill(), 
                this.isSkCheckWorking = !1) : this.isSkCheckWorking = !1;
            },
            update: function(e) {
                if (!(this.readyCount < 2)) if (this._super(e), 1 == this.status) {
                    var t = void 0, i = n.getItemGroupMap("coin");
                    if (i) {
                        var a = 1e6;
                        for (var o in i) {
                            var s = i[o];
                            if (s.incomeSum > 0) {
                                var r = cc.winSize.width / 1242, c = cc.winSize.height / 2688, h = Math.min(r, c), l = 1e6;
                                if (this.kitchen) if (s.kitchen) l = this.node.position.sub(s.endPos).mag(); else if (s.garden) {
                                    var u = 701 / h;
                                    l = s.endPos.sub(cc.v2(u, -760)).mag(), l += 1800, l += this.node.position.sub(cc.v2(-550, -310)).mag();
                                } else if (s.buffetRoom) {
                                    var d = -701 / h;
                                    l = this.node.position.sub(cc.v2(d, -310)).mag(), l += 1400, l += 800, l += s.endPos.sub(cc.v2(-260, 442)).mag();
                                } else if (s.pond) {
                                    var f = 701 / h;
                                    l = s.endPos.sub(cc.v2(f, -760)).mag(), l += 2800, l += this.node.position.sub(cc.v2(-550, -310)).mag();
                                } else {
                                    var g = -701 / h;
                                    l = this.node.position.sub(cc.v2(g, -310)).mag(), l += 200, l += s.endPos.sub(cc.v2(550, -310)).mag();
                                } else if (this.garden) if (s.kitchen) {
                                    var p = -641 / h;
                                    l = this.node.position.sub(cc.v2(p, -310)).mag(), l += 1800, l += s.endPos.sub(cc.v2(550, -760)).mag();
                                } else if (s.garden) l = this.node.position.sub(s.endPos).mag(); else if (s.buffetRoom) {
                                    var m = 701 / h;
                                    l = this.node.position.sub(cc.v2(m, -760)).mag(), l += 1e3, l += 800, l += s.endPos.sub(cc.v2(-260, 442)).mag();
                                } else if (s.pond) {
                                    var y = 701 / h;
                                    l = s.endPos.sub(cc.v2(y, -760)).mag();
                                    var v = -651 / h;
                                    l += this.node.position.sub(cc.v2(v, -760)).mag();
                                } else {
                                    var b = -651 / h;
                                    l = this.node.position.sub(cc.v2(b, -760)).mag(), l += 200, l += s.endPos.sub(cc.v2(550, -760)).mag();
                                } else if (this.buffetRoom) if (s.buffetRoom) l = this.node.position.sub(s.endPos).mag(); else if (s.garden) {
                                    var _ = 701 / h;
                                    l = s.endPos.sub(cc.v2(_, -760)).mag(), l += 1e3, l += 800, l += this.node.position.sub(cc.v2(-260, 442)).mag();
                                } else if (s.kitchen) {
                                    var w = -701 / h;
                                    l = s.endPos.sub(cc.v2(w, -310)).mag(), l += 1400, l += 800, l += this.node.position.sub(cc.v2(-260, 442)).mag();
                                } else if (s.pond) {
                                    var S = 701 / h;
                                    l = s.endPos.sub(cc.v2(S, -760)).mag(), l += 2800, l += 800, l += this.node.position.sub(cc.v2(-260, 442)).mag();
                                } else l = s.endPos.sub(cc.v2(-260, -1244)).mag(), l += 200, l += 800, l += this.node.position.sub(cc.v2(-260, 442)).mag(); else if (this.pond) if (s.pond) l = this.node.position.sub(s.endPos).mag(); else if (s.garden) {
                                    var T = -651 / h;
                                    l = s.endPos.sub(cc.v2(T, -760)).mag();
                                    var k = 701 / h;
                                    l += this.node.position.sub(cc.v2(k, -760)).mag();
                                } else if (s.buffetRoom) {
                                    var x = 701 / h;
                                    l = this.node.position.sub(cc.v2(x, -760)).mag(), l += 2800, l += 800, l += s.endPos.sub(cc.v2(-260, 442)).mag();
                                } else if (s.kitchen) {
                                    var D = 701 / h;
                                    l = this.node.position.sub(cc.v2(D, -760)).mag(), l += 2800, l += s.endPos.sub(cc.v2(-550, -310)).mag();
                                } else {
                                    var A = -651 / h;
                                    l = s.endPos.sub(cc.v2(A, -760)).mag(), l += 2e3, l += this.node.position.sub(cc.v2(550, -760)).mag();
                                } else if (s.kitchen) {
                                    var M = 651 / h;
                                    l = this.node.position.sub(cc.v2(M, -310)).mag(), l += 200, l += s.endPos.sub(cc.v2(-550, -310)).mag();
                                } else if (s.garden) {
                                    var I = -651 / h;
                                    l = this.node.position.sub(cc.v2(I, -760)).mag(), l += 200, l += s.endPos.sub(cc.v2(550, -760)).mag();
                                } else if (s.buffetRoom) l = this.node.position.sub(cc.v2(-260, -1244)).mag(), l += 200, 
                                l += 800, l += s.endPos.sub(cc.v2(-260, 442)).mag(); else if (s.pond) {
                                    var C = -651 / h;
                                    l = this.node.position.sub(cc.v2(C, -760)).mag(), l += 2e3, l += s.endPos.sub(cc.v2(550, -760)).mag();
                                } else l = this.node.position.sub(s.endPos).mag();
                                a > l && (t = s, a = l);
                            }
                        }
                    }
                    if (t) {
                        this.status = 2, this.targetInfo = t, this.strollFlag = !1;
                        for (var R = cc.v2(0, 0), W = t.endPos, P = 0; P <= 20 && (R.x = W.x - 30 + 80 * Math.random(), 
                        R.y = W.y - 30 + 80 * Math.random(), !this.mapManager.isMapLegal(R.x, R.y)); ) P++;
                        this.targetPos = R;
                    } else if (!this.strollFlag) {
                        this.strollFlag = !0;
                        var O = this.mapManager.getRandomPoint(this.node);
                        this.move(O.x, O.y, function() {
                            this.strollFlag = !1, this.status = 3, this.timeCount = 0;
                        });
                    }
                } else if (2 == this.status) {
                    var L = this.targetInfo;
                    if (!L || L.incomeSum <= 0) this.status = 1; else {
                        this.status = 2.2;
                        var N = this.targetPos;
                        L.kitchen ? this.kitchen ? (this.status = 2.1, this.move(N.x, N.y, function() {
                            this.checkCoin();
                        })) : this.toKitchenRoom(function() {
                            this.status = 2;
                        }) : L.garden ? this.garden ? (this.status = 2.1, this.move(N.x, N.y, function() {
                            this.checkCoin();
                        })) : this.toGarden(function() {
                            this.status = 2;
                        }) : L.buffetRoom ? this.buffetRoom ? (this.status = 2.1, this.move(N.x, N.y, function() {
                            this.checkCoin();
                        })) : this.toBuffetRoom(function() {
                            this.status = 2;
                        }) : L.pond ? this.pond ? (this.status = 2.1, this.move(N.x, N.y, function() {
                            this.checkCoin();
                        })) : this.toPond(function() {
                            this.status = 2;
                        }) : this.kitchen || this.garden || this.buffetRoom || this.pond ? this.toDiningRoom(function() {
                            this.status = 2;
                        }) : (this.status = 2.1, this.move(N.x, N.y, function() {
                            this.checkCoin();
                        }));
                    }
                } else 3 == this.status ? (this.timeCount ? this.timeCount += e : this.timeCount = e, 
                this.timeCount >= 2 && (this.timeCount = 0, this.status = 1)) : 4 == this.status && (this.status = 4.1, 
                this.kitchen || this.garden || this.pond || this.buffetRoom ? this.toDiningRoom(function() {
                    this.goback();
                }) : this.goback());
            },
            goback: function() {
                this.status = 4.2, this.move(this.info.startX, this.info.startY, function() {
                    this.isSkCheckWorking = !1, this.status = 5;
                });
            },
            checkCoin: function() {
                this.status = 3, this.timeCount = 0;
                var e = this.targetInfo;
                if (e && e.incomeSum > 0 && this.node.position.sub(e.endPos).magSqr() <= 5625) for (var t = 0; t < e.nodes.length; t++) {
                    var i = e.nodes[t].getComponent("item");
                    i && (i.clickItem(), i.removeTouchListener());
                }
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        global: "global",
        userData: "userData"
    } ],
    employee_8: [ function(e, t, i) {
        cc._RF.push(t, "6a102wQGadFIL22pi5ukvLz", "employee_8");
        var n = e("userData"), a = e("global");
        cc.Class({
            extends: e("employees"),
            properties: {
                water: cc.Prefab
            },
            isSkillEnabled: function() {
                return 0 == this.status || 1 == this.status || 4 == this.status;
            },
            useSkill: function() {},
            start: function() {
                this.timeCount = 0, this.oriParterreKey = "", this.waterNode = a.autoReleaseInstantiate(this.water), 
                this.waterNode.parent = this.node.parent, this.waterNode.active = !1, this._super();
            },
            onCheckUsingSkill: function(e, t) {
                this.isSkillEnabled() ? 4 == this.status ? this._super(e, t) : Math.abs(e - t) >= 1e3 * n.decodeData(this.skill.duration) ? this.status = 3 : (this.toSkill(), 
                this.isSkCheckWorking = !1) : this.isSkCheckWorking = !1;
            },
            update: function(e) {
                this.readyCount < 2 || (this._super(e), 1 == this.status ? (this.status = 1.1, this.gardenManager.getRandomParterre(function(e, t, i) {
                    if (cc.isValid(this.node)) if (1 == e) {
                        if (this.oriParterreKey == t) return this.anim.play(this.key), this.oriParterreKey = "", 
                        void (this.status = 1.2);
                        this.oriParterreKey = t, i.x += 220, i.y += 60, this.move(i.x, i.y, function() {
                            this.setFaceTo(!0), this.status = 2, this.waterNode.x = this.node.x - 150, this.waterNode.y = this.node.y + 100, 
                            this.waterNode.zIndex = 5500 - this.waterNode.y, this.waterNode.active = !0, this.waterNode.getComponent(cc.ParticleSystem).resetSystem(), 
                            this.gardenManager.toSpeedUp(t, n.decodeData(this.skill.value));
                        });
                    } else if (0 == e) {
                        var a = this.mapManager.getRandomPoint(this.volume);
                        this.move(a.x, a.y, function() {
                            this.status = 1;
                        });
                    }
                }, this)) : 1.2 == this.status ? (this.timeCount += e, this.timeCount > 5 && (this.timeCount = 0, 
                this.anim.play(this.skillName), this.status = 1)) : 2 == this.status ? (this.timeCount += e, 
                this.timeCount >= 10 && (this.timeCount = 0, this.status = 1, this.waterNode.getComponent(cc.ParticleSystem).stopSystem(), 
                this.waterNode.active = !1)) : 3 == this.status && (this.status = 3.1, this.goback()));
            },
            goback: function() {
                this.status = 3.2, this.move(this.info.startX, this.info.startY, function() {
                    this.isSkCheckWorking = !1, this.status = 4;
                });
            }
        }), cc._RF.pop();
    }, {
        employees: "employees",
        global: "global",
        userData: "userData"
    } ],
    employee_9: [ function(e, t, i) {
        cc._RF.push(t, "99c523oBRJMRaE1XuVGLKM1", "employee_9");
        var n = e("userData"), a = e("global"), o = e("netManager"), s = e("config"), r = e("wishPoolData"), c = e("flowerData"), h = e("MailData"), l = e("localize"), u = e("memorialData"), d = e("twSprite");
        cc.Class({
            extends: e("movementUtil"),
            properties: {
                head: cc.Node
            },
            init: function(e, t, i, n, a) {
                this.mapManager = e, this.customerManager = t, this.kitchenManager = t.kitchenManager, 
                this.gardenManager = t.gardenManager, this.mainScene = a, this.info = i, this.key = "employee_9", 
                this.anim = this.node.getChildByName("animNode").getComponent(cc.Animation), this.btn = this.node.getComponent(cc.Button), 
                this.info.kitchen && (this.kitchen = !0), this.info.garden && (this.garden = !0), 
                this.changeLv(n);
            },
            changeLv: function(e) {
                this.lv = Math.min(this.info.attrs.length, e), this.attr = this.info.attrs[this.lv - 1], 
                this.fly = this.attr.fly;
            },
            initHead: function() {
                if (this.head) {
                    var e = new cc.Node(), t = e.addComponent(d);
                    t.spriteFrame = null, e.parent = this.head, this.headSpNode = e, this.headSp = t, 
                    n.getData(this.key + "_head", function(e) {
                        if (cc.isValid(this.node, !0) && (e || this.info && this.info.headImg)) {
                            var t = this.headSpNode, i = this.headSp;
                            this.head.active = !0;
                            var n = this.info.headImg;
                            if (e) {
                                this.headIndex = e;
                                var o = "memorial_" + this.key + "_" + e, s = u.memorialsMap[o];
                                if (s) {
                                    var r = s.headInfo;
                                    r.isBeard && this.beard ? t.parent = this.beard : t.parent = this.head, t.x += r.offsetX || 0, 
                                    t.y += r.offsetY || 0, t.rotation += r.offsetRotation || 0, t.scaleX = r.scaleX || 1, 
                                    t.scaleY = r.scaleY || 1, n = s.img;
                                }
                            }
                            a.loadRes(n, cc.SpriteFrame, function(e, n) {
                                if (e) console.error(e); else {
                                    if (!cc.isValid(t)) return a.retainRes(n), void a.releaseRes(n);
                                    i.spriteFrame && (a.releaseRes(i.spriteFrame), i.spriteFrame = null), i.spriteFrame = n, 
                                    a.retainRes(n);
                                }
                            }, 100);
                        }
                    }, this);
                }
            },
            start: function() {
                var t = this;
                this.initHead(), a.loadRes("Prefab/mailBubble", cc.Prefab, function(e, i) {
                    e && (console.log(e), n.sendMessage("showToast", l.getText("toast_string_6"))), 
                    cc.isValid(t.node) && (t.mailBubble = a.autoReleaseInstantiate(i), t.mailBubble.parent = t.node, 
                    t.mailBubble.on("click", function() {
                        t.onClick();
                    }));
                }, 1e3), this.timeCount = 0, this.listenerAry = [], this.node.x = this.info.startX + 3e3, 
                this.node.y = this.info.startY + 2e3, this.state = 0, this.checkPigeonBack(), this.listenerAry.push(n.addListener("sendMail", function() {
                    this.preFly = !0, o.getNowTime(function(e) {
                        if (e) {
                            if (!cc.isValid(this.node, !0)) return;
                            var t = a.getServerTime(), i = n.decodeData(this.fly.minTime), o = n.decodeData(this.fly.maxTime), s = t + 6e4 * (i + Math.random() * (o - i));
                            this.endTime = s, this.mailBubble && (this.mailBubble.active = !1), n.setData("pigeon_endTime", s, function() {
                                cc.isValid(this.node) && (this.preFly = !1, this.flyAway());
                            }, this);
                        } else this.preFly = !1, n.sendMessage("showToast", l.getText("toast_string_6"));
                    }, this);
                }, this)), this.listenerAry.push(n.addListener("changeMemorial", function(t, i) {
                    if ("employee_9" == t.headInfo.parentKey) {
                        e("ViewModule").ins.popViewsByName("cusMenuDlg");
                        var n = a.curRoom;
                        "kitchenRoom" == this.node.parent.name && "kitchenRoom" !== n ? this.customerManager.mainScene.toKitchenRoom() : "garden" == this.node.parent.name && "garden" !== n ? this.customerManager.mainScene.toGarden() : "buffetRoom" == this.node.parent.name && "buffetRoom" !== n ? this.customerManager.mainScene.toBuffetRoom() : "diningRoom" == this.node.parent.name && "diningRoom" !== n && this.customerManager.mainScene.toDiningRoom(), 
                        this.changeMemorial(t, i);
                    }
                }, this)), this.listenerAry.push(n.addListener("employee_9_back", function() {
                    n.setData("pigeon_endTime", a.getServerTime(), function() {});
                }));
            },
            changeMemorial: function(e, t) {
                if (this.head && this.headSpNode && !this.changeMemorialWorking) {
                    var i = this.headSpNode, o = this.headSp, s = t ? e.headInfo.headIndex : 0;
                    this.changeMemorialWorking = !0, n.setData("employee_9_head", s, function() {
                        var n = this;
                        if (t) {
                            this.head.active = !0;
                            var s = e.headInfo;
                            i.x = s.offsetX || 0, i.y = s.offsetY || 0, i.rotation = s.offsetRotation || 0, 
                            i.scaleX = s.scaleX || 1, i.scaleY = s.scaleY || 1, this.headIndex !== e.headInfo.headIndex ? (o.spriteFrame && (a.releaseRes(o.spriteFrame), 
                            o.spriteFrame = null), this.headIndex = e.headInfo.headIndex, a.loadRes(e.img, cc.SpriteFrame, function(e, t) {
                                n.changeMemorialWorking = !1, e ? console.error(e) : cc.isValid(i) && (o.spriteFrame = t, 
                                a.retainRes(t));
                            })) : this.changeMemorialWorking = !1;
                        } else i.x = 0, i.y = 0, i.rotation = 0, i.scale = 1, this.info.headImg ? (o.spriteFrame && (a.releaseRes(o.spriteFrame), 
                        o.spriteFrame = null), this.headIndex = null, a.loadRes(this.info.headImg, cc.SpriteFrame, function(e, t) {
                            n.changeMemorialWorking = !1, e ? console.error(e) : cc.isValid(i) && (o.spriteFrame = t, 
                            a.retainRes(t));
                        })) : (this.changeMemorialWorking = !1, this.head.active = !1);
                    }, this);
                }
            },
            checkPigeonBack: function() {
                n.getData("pigeon_st", function(e) {
                    0 == e ? this.initStand() : n.getData("pigeon_endTime", function(e) {
                        a.getServerTime() >= e ? (this.state = 2, "garden" == this.mainScene.getCurRoomName() && this.flyBack(), 
                        this.showBackBarrage || (this.showBackBarrage = !0, n.sendMessage("showBarrage", "barrage_garden_8"))) : this.state = 1;
                    }, this);
                }, this);
            },
            initStand: function() {
                this.state = 0, this.node.x = this.info.startX, this.node.y = this.info.startY, 
                this.updateZIndex(), this.btn.interactable = !0, this.anim.play("employee_9");
            },
            flyAway: function() {
                this.state = 1, this.showBackBarrage = !1, this.mailBubble && (this.mailBubble.active = !1), 
                this.isBack = !1, n.getData("specStroyState", function(e) {
                    0 == e && n.isMailExsit("mail_51", function(e) {
                        e || n.getData("cookbook_unlock_food_10", function(e) {
                            e >= 3 && n.getData("employee_lv_employee_5", function(e) {
                                e >= 10 && n.setData("specStroyState", 1, function() {
                                    n.sendMessage("msg_mail_unlock", {
                                        key: "story_mail_51_start"
                                    });
                                });
                            });
                        });
                    });
                }), n.setData("pigeon_st", 1, function() {
                    var e = this;
                    this.node.x = this.info.startX, this.node.y = this.info.startY, this.node.zIndex = 9999, 
                    this.btn.interactable = !1, this.anim.play("employee_9_FlyMail"), this.node.scaleX = -1, 
                    this.gardenManager.isPigeonBack = !1, this.node.runAction(cc.sequence(cc.moveTo(6, this.info.startX + 3e3, this.info.startY + 2e3), cc.callFunc(function() {
                        e.updateZIndex(), e.node.scaleX = 1;
                    })));
                }, this);
            },
            flyBack: function() {
                this.state = 2, this.isBack = !0, n.setData("pigeon_st", 2, function() {
                    var e = this;
                    this.node.x = this.info.startX + 3e3, this.node.y = this.info.startY + 2e3, this.node.zIndex = 9999, 
                    this.anim.play("employee_9_fly"), this.btn.interactable = !1, this.mailBubble && (this.mailBubble.active = !1), 
                    this.node.runAction(cc.sequence(cc.moveTo(6, this.info.startX, this.info.startY), cc.callFunc(function() {
                        e.btn.interactable = !0, e.updateZIndex(), e.anim.play("employee_9_Mail");
                    })));
                }, this);
            },
            onClick: function() {
                this.isWorking || (this.isWorking = !0, n.sendMessage("showBarrage", "barrage_garden_9"), 
                n.getData("pigeon_st", function(e) {
                    0 == e ? (this.isWorking = !1, this.mailBubble && (this.mailBubble.active = !1), 
                    this.gardenManager.showCaseDlg()) : 2 == e && o.getNowTime(function(e) {
                        e ? n.getData("pigeon_endTime", function(e) {
                            var t = this;
                            a.getServerTime() >= e - 1e4 ? o.onBridBack(function(e) {
                                e ? n.setData("pigeon_st", 0, function() {
                                    n.setData("pigeon_endTime", 0, function() {
                                        this.genMailReward(function() {
                                            this.createMail(function() {
                                                n.getObjFromJson("flowerBag", function(e) {
                                                    for (var t in e) {
                                                        var i = e[t];
                                                        i.position && "case" == i.position.substring(0, 4) && delete e[t];
                                                    }
                                                    n.setObjToJson("flowerBag", e, function() {
                                                        this.isWorking = !1, this.initStand();
                                                    }, this);
                                                }, this);
                                            }, this);
                                        }, this);
                                    }, this);
                                }, t) : (t.isWorking = !1, n.sendMessage("showToast", l.getText("toast_string_6")));
                            }) : n.setData("pigeon_st", 1, function() {
                                this.state = 1, this.node.x = this.info.startX + 3e3, this.node.y = this.info.startY + 2e3, 
                                this.isWorking = !1, this.showBackBarrage = !1;
                            }, this);
                        }, this) : (this.isWorking = !1, n.sendMessage("showToast", l.getText("toast_string_6")));
                    }, this);
                }, this));
            },
            genReward: function(e, t) {
                for (var i = void 0, n = 0, a = Math.floor(Math.random() * t), o = 0, s = r.items[e], c = [], h = 0; h < s.length; h++) {
                    var l = s[h];
                    "memorial" != l.type && "yanhua" != l.type && c.push(l);
                }
                for (var u = 0; u < c.length; u++) {
                    if (o += c[u].weight, a >= n && a < o) {
                        i = c[u];
                        break;
                    }
                    n += c[u].weight;
                }
                this.creaetReward(i);
            },
            creaetReward: function(e) {
                var t = this.node.position, i = e.type, a = {
                    garden: !0,
                    x: t.x,
                    y: t.y,
                    left: !1,
                    key: "mailReward" + i,
                    autoDrop: !0,
                    itemType: i,
                    offsetX: 50,
                    offsetY: -50
                };
                if (e.minValue && e.maxValue ? (a.itemValue = e.minValue + Math.random() * (e.maxValue - e.minValue), 
                a.itemValue >= 1e4 ? a.itemValue = 1e3 * Math.floor(a.itemValue / 1e3) : a.itemValue >= 1e3 ? a.itemValue = 100 * Math.floor(a.itemValue / 100) : a.itemValue = Math.floor(a.itemValue)) : e.itemValue && (a.itemValue = e.itemValue), 
                "flower" == i) {
                    if (c[e.flowerType]) {
                        for (var o = 1, s = 0, r = 100 * Math.random(), h = 0; h < e.flowerWeight.length; h++) {
                            var l = e.flowerWeight[h];
                            if (r >= s && r < s + l) {
                                o = h + 1;
                                break;
                            }
                            s += l;
                        }
                        if (a.flowerLevel = o, a.flowerType = e.flowerType, a.position = "floor", !e.flowerType || !c[e.flowerType]) return void console.log("error unknow type", e);
                        this.gardenManager.createFlower(this.gardenManager.garden, a);
                    }
                } else "sprinkler" == i ? (a.sprinklerType = e.sprinklerType, n.sendMessage("createItem", a)) : n.sendMessage("createItem", a);
            },
            genMailReward: function(e, t) {
                t && (e = e.bind(t)), n.getStarSum(function(t) {
                    var i = 0;
                    i = t <= 2e3 ? 0 : t > 2e3 && t <= 4500 ? 1 : t > 4500 && t <= 8e3 ? 2 : 3;
                    for (var a = 0, o = r.items[i], s = 0; s < o.length; s++) {
                        var h = o[s];
                        "memorial" != h.type && "yanhua" != h.type && (a += h.weight);
                    }
                    this.gardenManager.getItemInMailCase(function(t) {
                        function o(s, r) {
                            if (r) {
                                if (s >= t.length) return Math.random() < .4 ? this.creaetReward({
                                    type: "star",
                                    minValue: 5 + 2 * i,
                                    maxValue: 10 + 10 * i
                                }) : this.creaetReward({
                                    type: "coin",
                                    minValue: 1e4 + 1e4 * i,
                                    maxValue: 5e4 + 5e4 * i
                                }), void e();
                                var h = t[s];
                                if ("flower" == h.itemType) {
                                    var l = c[h.flowerType][h.flowerLevel - 1];
                                    if (l && l.award) {
                                        for (var u = 0, d = 0; d < l.award.length; d++) {
                                            var f = l.award[d];
                                            u += f.weight / 100 * n.decodeData(f.value);
                                        }
                                        if (u > 0) {
                                            var g = n.decodeData(l.hp) + (this.gardenManager.extraFlowerHp || 0);
                                            this.creaetReward({
                                                type: "star",
                                                itemValue: Math.ceil(u * g * (.5 + 2.5 * Math.random()))
                                            }), o(s + 1);
                                        } else o(s + 1);
                                    } else o(s + 1);
                                } else if ("seed" == h.itemType) if (Math.random() < .4) this.creaetReward({
                                    type: "flower",
                                    flowerType: "Garden_baimeigui",
                                    flowerWeight: [ 50, 30, 15, 5 ],
                                    weight: 3
                                }), o(s + 1); else {
                                    var p = function(e) {
                                        e <= 0 ? o(s + 1) : this.node.runAction(cc.sequence(cc.callFunc(function() {
                                            this.genReward(3, a);
                                        }, this), cc.delayTime(.08), cc.callFunc(function() {
                                            p(e - 1);
                                        }, this)));
                                    };
                                    (p = p.bind(this))(1 + Math.floor(2 * Math.random()));
                                } else if ("sprinkler" == h.itemType) {
                                    if ("Garden_Watercan_1" == h.sprinklerType) Math.random() < .7 ? this.creaetReward({
                                        type: "sprinkler",
                                        sprinklerType: "Garden_Watercan_2"
                                    }) : this.creaetReward({
                                        type: "star",
                                        minValue: 1,
                                        maxValue: 5
                                    }); else if ("Garden_Watercan_2" == h.sprinklerType) Math.random() < .6 ? this.creaetReward({
                                        type: "sprinkler",
                                        sprinklerType: "Garden_Watercan_3"
                                    }) : this.creaetReward({
                                        type: "star",
                                        minValue: 6,
                                        maxValue: 12
                                    }); else {
                                        var m = Math.random();
                                        m < .2 ? (this.creaetReward({
                                            type: "sprinkler",
                                            sprinklerType: "Garden_Watercan_3"
                                        }), this.creaetReward({
                                            type: "sprinkler",
                                            sprinklerType: "Garden_Watercan_3"
                                        })) : m < .6 ? this.creaetReward({
                                            type: "star",
                                            minValue: 7,
                                            maxValue: 24
                                        }) : this.genReward(3, a);
                                    }
                                    o(s + 1);
                                } else o(s + 1);
                            } else this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                                o(s, !0);
                            }, this)));
                        }
                        (o = o.bind(this))(0);
                    }, this);
                }, this);
            },
            checkIfCreateMail: function() {
                return !0;
            },
            checkOrderIsFinished: function(e, t, i) {
                i && (t = t.bind(i));
                var a = e.lastIndexOf("_"), o = parseInt(e.substring(a + 1, e.length));
                if (isNaN(o)) t(!1); else {
                    var s = "storyOrderFlag_" + Math.floor(o / 30), r = o % 30;
                    n.getData(s, function(i) {
                        0 == (i >> r & 1) ? "order_14" == e ? n.isMailExsit("mail_1", function(i) {
                            i ? n.getObjFromJson("orderMap", function(i) {
                                t(i && i[e] ? !1 : !0);
                            }, this) : t(!1);
                        }) : t(!1) : t(!0);
                    }, this);
                }
            },
            getMail: function(t, i) {
                var o = this;
                i = i.bind(this), n.getData("specStroyState", function(s) {
                    1 == s ? n.setData("specStroyState", 0, function() {
                        i("mail_51");
                    }) : function() {
                        var s = e("MailData"), r = {}, c = 0;
                        for (var h in s) c++;
                        var l = function() {
                            if (!(--c > 0)) {
                                var e = 0;
                                for (var t in r) r[t].weight <= 0 && (r[t].weight = 0), e += r[t].weight;
                                var n = e * Math.random(), a = 0, o = 0, s = 0, h = null;
                                for (var l in r) {
                                    if (o += r[l].weight, n > a && n < o) {
                                        s = r[l].prob, h = l;
                                        break;
                                    }
                                    a += r[l].weight;
                                }
                                var u = Math.random();
                                i(u < s ? h : null);
                            }
                        };
                        for (var u in s) !function(i) {
                            n.isMailExsit(i, function(o) {
                                var c = this;
                                s[i].hedwigSkip || o && !s[i].isRepeat ? l() : function() {
                                    var o = s[i];
                                    r[i] || (r[i] = {
                                        weight: o.weight || 0,
                                        prob: 0
                                    });
                                    var h = function() {
                                        if (o.prob && (r[i].prob = o.prob), o.carryFood && o.carryFood.length > 0) for (var n = 0; n < o.carryFood.length; n++) {
                                            var s = o.carryFood[n].key;
                                            null == t[s] ? r[i].weight += o.carryFood[n].cutWeight : r[i].weight += o.carryFood[n].incWeight * t[s];
                                        }
                                        if (o.carryMail && o.carryMail.length > 0) for (var h = 0; h < o.carryMail.length; h++) {
                                            var u = o.carryMail[h].key;
                                            null == t[u] ? r[i].weight += o.carryMail[h].cutWeight : r[i].weight += o.carryMail[h].incWeight * t[u];
                                        }
                                        if (o.carryEmp && o.carryEmp.length > 0) for (var d = 0; d < o.carryEmp.length; d++) {
                                            var f = o.carryEmp[d].key;
                                            null == t[f] ? r[i].weight += o.carryEmp[d].cutWeight : r[i].weight += o.carryEmp[d].incWeight * t[f];
                                        }
                                        if (o.carryCus && o.carryCus.length > 0) for (var g = 0; g < o.carryCus.length; g++) {
                                            var p = o.carryCus[g].key;
                                            null == t[p] ? r[i].weight += o.carryCus[g].cutWeight : r[i].weight += o.carryCus[g].incWeight * t[p];
                                        }
                                        if (o.carryItem && o.carryItem.length > 0) for (var m = 0; m < o.carryItem.length; m++) {
                                            var y = o.carryItem[m].type;
                                            null == t[y] ? r[i].weight += o.carryItem[m].cutWeight : r[i].weight += o.carryItem[m].incWeight * t[y];
                                        }
                                        if (o.carryStar && (c.starNumber < o.carryStar.number ? r[i].weight += o.carryStar.cutWeight : r[i].weight += o.carryStar.incWeight), 
                                        o.startDay && (a.checkCommunityActivityDate(o.startDay) || (r[i].weight -= 1e6)), 
                                        o.christmas && a.checkActivityDate("2019-12-25", "2019-12-31") && (r[i].weight += 500), 
                                        o.festivalKey) {
                                            var v = e("activityDateMap")[o.festivalKey], b = new Date().getFullYear(), _ = b + "-" + v.startTime, w = b + "-" + v.endTime;
                                            a.checkActivityDate(_, w) ? r[i].weight += 1e5 : r[i].prob = r[i].outOffDayProb || 0;
                                        }
                                        o.springFestival_1 && (a.checkActivityDate("2020-1-25", "2020-2-10") ? r[i].weight += 600 : r[i].weight -= 1e4), 
                                        o.springFestival_2 && (a.checkActivityDate("2020-1-20", "2020-2-10") ? r[i].weight += 600 : r[i].weight -= 1e4), 
                                        l();
                                    }, u = 0;
                                    if (c.starNumber = 0, o.carryOrder && o.carryOrder.length > 0) {
                                        u += o.carryOrder.length;
                                        for (var d = 0; d < o.carryOrder.length; d++) !function(e) {
                                            var t = o.carryOrder[e].key;
                                            c.checkOrderIsFinished(t, function(t) {
                                                r[i].weight += t ? o.carryOrder[e].incWeight : o.carryOrder[e].cutWeight, --u <= 0 && (o.carryStar ? n.getStarSum(function(e) {
                                                    this.starNumber = e, h();
                                                }, this) : h());
                                            }, c);
                                        }(d);
                                    } else o.carryStar ? n.getStarSum(function(e) {
                                        this.starNumber = e, h();
                                    }, c) : h();
                                }();
                            }, o);
                        }(u);
                    }();
                });
            },
            createMail: function(e, t) {
                t && (e = e.bind(t)), this.genMail(function(t) {
                    t ? n.pushMailToList(t, function() {
                        e();
                        var i = "Mail/" + h[t].prefabName;
                        a.loadRes(i, cc.Prefab, function(e, i) {
                            if (e) console.error(e); else {
                                a.retainRes(i);
                                var n = a.autoReleaseInstantiate(i);
                                n.parent = cc.find("Canvas/topDlg");
                                var o = n.getComponent("MailDetail");
                                o && o.initMailDetail(t, !0, i);
                            }
                        }, 10);
                    }, this) : e();
                }, this);
            },
            genMail: function(e, t) {
                t && (e = e.bind(t));
                var i = {};
                this.checkIfCreateMail() ? this.gardenManager.getItemInMailCase(function(t) {
                    for (var a = this, o = 0; o < t.length; o++) {
                        var r = t[o];
                        if ("flower" == r.itemType) {
                            var c = r.flowerType;
                            null == i[c] ? i[c] = r.flowerLevel : i[c] += r.flowerLevel;
                        } else "seed" == r.itemType ? null == i[r.itemType] ? i[r.itemType] = 1 : i[r.itemType] += 1 : "sprinkler" == r.itemType && (null == i[r.sprinklerType] ? i[r.sprinklerType] = 1 : i[r.sprinklerType] += 1);
                    }
                    var l = s.customers.length;
                    l += s.cookbooks.length, l += s.employees.length, l++;
                    for (var u = function() {
                        --l <= 0 && a.getMail(i, function(t) {
                            if (t) if (h[t].orderKey) {
                                var i = h[t].orderKey;
                                n.getObjFromJson("orderMap", function(n) {
                                    e(n && n[i] ? null : t);
                                }, this);
                            } else e(t); else e(t);
                        }, a);
                    }, d = 0; d < s.customers.length; d++) !function(e) {
                        var t = "customer_unlock_" + s.customers[e].key;
                        n.getData(t, function(t) {
                            t && (i[s.customers[e].key] || (i[s.customers[e].key] = 1)), u();
                        }, a);
                    }(d);
                    for (var f = 0; f < s.cookbooks.length; f++) !function(e) {
                        var t = "cookbook_unlock_" + s.cookbooks[e].key;
                        n.getData(t, function(t) {
                            t && (i[s.cookbooks[e].key] || (i[s.cookbooks[e].key] = 1)), u();
                        }, a);
                    }(f);
                    for (var g = 0; g < s.employees.length; g++) !function(e) {
                        var t = s.employees[e], o = "employee_lv_" + t.key;
                        n.getData(o, function(e) {
                            e > 0 && (i[t.key] || (i[t.key] = 1)), u();
                        }, a);
                    }(g);
                    n.getMailList(function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            i[n] ? i[n] += 1 : i[n] = 1;
                        }
                        u();
                    }, this);
                }, this) : e(null);
            },
            onDestroy: function() {
                for (var e = 0; e < this.listenerAry.length; e++) n.removeListener(this.listenerAry[e]);
                this.listenerAry = null;
                var t = this.headSp;
                t.spriteFrame && (a.releaseRes(t.spriteFrame), t.spriteFrame = null);
            },
            getEndTime: function() {
                return this.endTime;
            },
            update: function(e) {
                1 == this.state && (this.timeCount += e, this.timeCount >= 10 && !this.showBackBarrage && (this.timeCount = 0, 
                this.checkPigeonBack())), "garden" != this.mainScene.getCurRoomName() || this.isBack || 2 != this.state || this.flyBack(), 
                this.gardenManager.caseDlg && !this.gardenManager.caseDlg.storageFlag || 1 == this.state || 2 == this.state || this.preFly ? this.mailBubble && (this.mailBubble.active = !1) : this.mailBubble && (this.mailBubble.active = !0);
            }
        }), cc._RF.pop();
    }, {
        MailData: "MailData",
        ViewModule: "ViewModule",
        activityDateMap: void 0,
        config: "config",
        flowerData: "flowerData",
        global: "global",
        localize: "localize",
        memorialData: "memorialData",
        movementUtil: "movementUtil",
        netManager: "netManager",
        twSprite: "twSprite",
        userData: "userData",
        wishPoolData: "wishPoolData"
    } ],
    employees: [ function(e, t, i) {
        cc._RF.push(t, "165bbY9ecdHhaEzofJq76L3", "employees");
        var n = e("userData"), a = e("global"), o = e("netManager"), s = e("memorialData"), r = e("twSprite");
        cc.Class({
            extends: e("movementUtil"),
            properties: {
                lv: 1,
                head: cc.Node,
                beard: cc.Node
            },
            init: function(e, t, i, n) {
                this.updateCount = 0, this.mapManager = e, this.customerManager = t, this.kitchenManager = t.kitchenManager, 
                this.gardenManager = t.gardenManager, this.buffetManager = t.buffetManager, this.pondManager = t.pondManager, 
                this.tutorialsManager = t.tutorialsManager, this.takeOutManager = t.takeOutManager, 
                this.info = i, this.key = i.key, this.skillName = i.skillName, this.anim = this.node.getComponent(cc.Animation), 
                this.volume = i.volume || 2, this.info.kitchen && (this.kitchen = !0), this.info.garden && (this.garden = !0), 
                this.info.buffetRoom && (this.buffetRoom = !0), this.info.pond && (this.pond = !0), 
                this.info.takeOutRoom && (this.takeOutRoom = !0), this.changeLv(n);
            },
            changeLv: function(e) {
                this.lv = Math.min(this.info.attrs.length, e), this.attr = this.info.attrs[this.lv - 1], 
                this.skill = this.attr.skill;
                var t = this.info.moveAttr;
                t && (t.speed && (this.speed = t.speed * (1 + (this.attr.speedUp || 0))), t.minStand && (this.standTimeLeft = t.minStand + Math.random() * (t.maxStand - t.minStand) * .4));
            },
            initHead: function() {
                if (this.head) {
                    var e = new cc.Node(), t = e.addComponent(r);
                    t.spriteFrame = null, e.parent = this.head, this.headSpNode = e, this.headSp = t;
                }
                n.getData(this.key + "_head", function(e) {
                    if (this.head && (e || this.info && this.info.headImg)) {
                        var t = this.headSpNode, i = this.headSp;
                        this.head.active = !0;
                        var n = this.info.headImg;
                        if (e) {
                            this.headIndex = e;
                            var o = "memorial_" + this.key + "_" + e, r = s.memorialsMap[o];
                            if (r) {
                                var c = r.headInfo;
                                c.isBeard && this.beard ? t.parent = this.beard : t.parent = this.head, t.x += c.offsetX || 0, 
                                t.y += c.offsetY || 0, t.rotation += c.offsetRotation || 0, t.scaleX = c.scaleX || 1, 
                                t.scaleY = c.scaleY || 1, n = r.img;
                            }
                        }
                        a.loadRes(n, cc.SpriteFrame, function(e, n) {
                            if (e) console.error(e); else {
                                if (!cc.isValid(t)) return a.retainRes(n), void a.releaseRes(n);
                                i.spriteFrame = n, a.retainRes(n);
                            }
                        }, 100);
                    }
                }, this);
            },
            start: function() {
                this.listenerAry = [];
                var t = this.anim;
                this.initHead(), t.play(this.key), this.skillName && (this.skillStateKey = this.key + "_sk_state", 
                this.skillTimeKey = this.key + "_sk_time"), this.node.x = this.info.startX, this.node.y = this.info.startY, 
                this.status = 0, this.listenerAry.push(n.addListener("changeMemorial", function(t, i) {
                    if (t.headInfo.parentKey == this.key) {
                        e("ViewModule").ins.popViewsByName("cusMenuDlg");
                        var n = a.curRoom, o = this.node.parent.name;
                        "employee_11" == this.key && (o = this.node.parent.parent.name), "kitchenRoom" == o && "kitchenRoom" !== n ? this.customerManager.mainScene.toKitchenRoom() : "garden" == o && "garden" !== n ? this.customerManager.mainScene.toGarden() : "buffetRoom" == o && "buffetRoom" !== n ? this.customerManager.mainScene.toBuffetRoom() : "diningRoom" == o && "diningRoom" !== n ? this.customerManager.mainScene.toDiningRoom() : "pond" == o && "pond" !== n && this.customerManager.mainScene.toPond(), 
                        this.changeMemorial(t, i);
                    }
                }, this)), this.updateZIndex();
            },
            changeMemorial: function(e, t) {
                if (this.head && this.headSpNode && !this.changeMemorialWorking) {
                    var i = this.headSpNode, o = this.headSp, s = t ? e.headInfo.headIndex : 0;
                    this.changeMemorialWorking = !0, n.setData(this.key + "_head", s, function() {
                        var n = this;
                        if (t) {
                            var s = e.headInfo;
                            s.isBeard && this.beard ? (this.beard.active = !0, i.parent = this.beard) : (this.head.active = !0, 
                            i.parent = this.head), i.x = s.offsetX || 0, i.y = s.offsetY || 0, i.rotation = s.offsetRotation || 0, 
                            i.scaleX = s.scaleX || 1, i.scaleY = s.scaleY || 1, this.headIndex !== e.headInfo.headIndex ? (o.spriteFrame && (a.releaseRes(o.spriteFrame), 
                            o.spriteFrame = null), this.headIndex = e.headInfo.headIndex, a.loadRes(e.img, cc.SpriteFrame, function(e, t) {
                                if (n.changeMemorialWorking = !1, e) console.error(e); else {
                                    if (!cc.isValid(i)) return a.retainRes(t), void a.releaseRes(t);
                                    n.headSp && n.headSp.spriteFrame && a.releaseRes(n.headSp.spriteFrame), o.spriteFrame = t, 
                                    a.retainRes(t);
                                }
                            })) : this.changeMemorialWorking = !1;
                        } else i.x = 0, i.y = 0, i.rotation = 0, i.scale = 1, this.info.headImg ? (o.spriteFrame && (a.releaseRes(o.spriteFrame), 
                        o.spriteFrame = null), this.headIndex = null, a.loadRes(this.info.headImg, cc.SpriteFrame, function(e, t) {
                            if (n.changeMemorialWorking = !1, e) console.error(e); else {
                                if (!cc.isValid(i)) return a.retainRes(t), void a.releaseRes(t);
                                n.headSp && n.headSp.spriteFrame && a.releaseRes(n.headSp.spriteFrame), o.spriteFrame = t, 
                                a.retainRes(t);
                            }
                        })) : (this.changeMemorialWorking = !1, this.head && (this.head.active = !1), this.beard && (this.beard.active = !1));
                    }, this);
                }
            },
            isSkillEnabled: function() {
                return !0;
            },
            update: function(e) {
                if (this.updateZIndex(), this.skill && this.skillName && !this.isSkCheckWorking && this.isSkillEnabled() && (this.isSkCheckWorking = !0, 
                n.getData(this.skillTimeKey, function(e) {
                    n.getData(this.skillStateKey, function(t) {
                        o.getNowTime(function(i) {
                            var a = this;
                            if (i && cc.isValid(this.node)) if (0 == t) if (Math.abs(i - e) >= 1e3 * n.decodeData(this.skill.cd)) {
                                var o = [ {
                                    key: this.skillStateKey,
                                    value: 1
                                }, {
                                    key: this.skillTimeKey,
                                    value: i
                                } ];
                                n.setDataByArray(o, function() {
                                    cc.isValid(this.node) && (this.isSkCheckWorking = !1, this.toSkill());
                                }, this);
                            } else this.isSkCheckWorking = !1, this.toIdle(); else this.onCheckUsingSkill(i, e); else setTimeout(function() {
                                cc.isValid(a.node) && (a.isSkCheckWorking = !1, a.toIdle());
                            }, 5e3);
                        }, this, 300);
                    }, this);
                }, this)), 0 == this.status && this.info.moveAttr && !this.info.moveAttr.holdStand) {
                    if (this.info.kitchen && !this.kitchen) return this.status = 2, void this.toKitchenRoom(function() {
                        this.status = 0;
                    });
                    var t = this.info.moveAttr;
                    if (t && t.minStand) {
                        if (this.standTimeLeft -= e, this.standTimeLeft <= 0) {
                            this.standTimeLeft = t.minStand + Math.random() * (t.maxStand - t.minStand), this.status = 2;
                            var i = this.mapManager.getRandomPoint(this.volume);
                            this.move(i.x, i.y, function() {
                                this.status = 0;
                            });
                        }
                    } else {
                        this.status = 2;
                        var a = this.mapManager.getRandomPoint(this.volume);
                        this.move(a.x, a.y, function() {
                            this.status = 0;
                        });
                    }
                }
            },
            onCheckUsingSkill: function(e, t) {
                if (Math.abs(e - t) >= 1e3 * n.decodeData(this.skill.duration)) {
                    var i = [ {
                        key: this.skillStateKey,
                        value: 0
                    }, {
                        key: this.skillTimeKey,
                        value: e
                    } ];
                    n.setDataByArray(i, function() {
                        this.isSkCheckWorking = !1, this.toIdle();
                    }, this);
                } else this.isSkCheckWorking = !1, this.toSkill();
            },
            toIdle: function() {
                0 != this.status && (this.anim.play(this.key), 1 == this.status && this.onSkillEnd(), 
                this.status = 0, n.sendMessage(this.key + "msg_st_change", 0));
            },
            toSkill: function() {
                1 != this.status && (this.status = 1, this.anim.play(this.skillName), n.sendMessage(this.key + "msg_st_change", 1), 
                this.useSkill());
            },
            useSkill: function() {},
            onSkillEnd: function() {},
            onDestroy: function() {
                for (var e = 0; e < this.listenerAry.length; e++) n.removeListener(this.listenerAry[e]);
                this.listenerAry = null, this.headSp && this.headSp.spriteFrame && a.releaseRes(this.headSp.spriteFrame);
            }
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        global: "global",
        memorialData: "memorialData",
        movementUtil: "movementUtil",
        netManager: "netManager",
        twSprite: "twSprite",
        userData: "userData"
    } ],
    exitGameDlg: [ function(e, t, i) {
        cc._RF.push(t, "6db2f8QvMFGfb08umqopnHm", "exitGameDlg"), cc.Class({
            extends: e("ViewHandler"),
            properties: {},
            start: function() {
                this.node.getChildByName("dark").on("click", function(e) {
                    cc.isValid(this.node) && this.close();
                }, this);
            },
            onConfirm: function() {
                cc.game.end();
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler"
    } ],
    flowerData: [ function(t, i, n) {
        cc._RF.push(i, "0d154qE3YpDCLLmBbw5vB87", "flowerData");
        var a = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, o = t("userData"), s = {
            garden_need_star: 300,
            garden_price: 5e4,
            Garden_xiaochuju: [ {
                hp: 2,
                time: 600,
                value: 18e3,
                cost: 2e3,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 93,
                    type: "star",
                    value: .1
                }, {
                    weight: 7,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 20
            }, {
                hp: 3,
                time: 1200,
                value: 22e3,
                cost: 9500,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 85
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 20,
                    y: -10
                } ],
                award: [ {
                    weight: 92,
                    type: "star",
                    value: .2
                }, {
                    weight: 8,
                    type: "star",
                    value: 4
                } ],
                capsuleToyWeight: 40
            }, {
                value: 4e4,
                hp: 4,
                time: 2400,
                cost: 28e3,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 10
                }, {
                    x: 20,
                    y: 25
                }, {
                    x: 0,
                    y: -15
                } ],
                award: [ {
                    weight: 91,
                    type: "star",
                    value: .3
                }, {
                    weight: 9,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 30
            }, {
                value: 8e4,
                hp: 5,
                time: 4800,
                cost: 6e4,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 20
                }, {
                    x: 20,
                    y: 0
                }, {
                    x: -30,
                    y: -10
                }, {
                    x: 0,
                    y: -30
                } ],
                award: [ {
                    weight: 90,
                    type: "star",
                    value: .4
                }, {
                    weight: 10,
                    type: "star",
                    value: 12
                } ],
                capsuleToyWeight: 15
            } ],
            Garden_xiangrikui: [ {
                value: 22e3,
                hp: 2,
                time: 900,
                cost: 3e3,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 88,
                    type: "star",
                    value: .1
                }, {
                    weight: 12,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 20
            }, {
                value: 26e3,
                hp: 3,
                time: 1800,
                cost: 12e3,
                pos: [ {
                    x: -40,
                    y: 10
                }, {
                    x: 30,
                    y: 30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 90
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 35,
                    y: -25
                } ],
                award: [ {
                    weight: 87,
                    type: "star",
                    value: .2
                }, {
                    weight: 13,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 40
            }, {
                value: 5e4,
                hp: 4,
                time: 3600,
                cost: 35e3,
                pos: [ {
                    x: -50,
                    y: 10
                }, {
                    x: 40,
                    y: 50
                }, {
                    x: 30,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 30
                }, {
                    x: 35,
                    y: 10
                }, {
                    x: 0,
                    y: -20
                } ],
                award: [ {
                    weight: 86,
                    type: "star",
                    value: .4
                }, {
                    weight: 14,
                    type: "star",
                    value: 6
                } ],
                capsuleToyWeight: 30
            }, {
                value: 12e4,
                hp: 5,
                time: 7200,
                cost: 8e4,
                pos: [ {
                    x: -60,
                    y: 40
                }, {
                    x: 35,
                    y: 40
                }, {
                    x: -35,
                    y: -40
                }, {
                    x: 65,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -15,
                    y: 30
                }, {
                    x: 30,
                    y: 15
                }, {
                    x: -30,
                    y: -15
                }, {
                    x: 15,
                    y: -30
                } ],
                award: [ {
                    weight: 85,
                    type: "star",
                    value: .6
                }, {
                    weight: 15,
                    type: "star",
                    value: 10
                } ],
                capsuleToyWeight: 15
            } ],
            Garden_meigui: [ {
                value: 3e4,
                hp: 3,
                time: 1500,
                cost: 5e3,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: -5,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 98,
                    type: "star",
                    value: .2
                }, {
                    weight: 2,
                    type: "star",
                    value: 7
                } ],
                capsuleToyWeight: 20
            }, {
                value: 35e3,
                hp: 4,
                time: 3e3,
                cost: 2e4,
                pos: [ {
                    x: -35,
                    y: 10
                }, {
                    x: 30,
                    y: -10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 90
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 25,
                    y: -15
                } ],
                award: [ {
                    weight: 97,
                    type: "star",
                    value: .4
                }, {
                    weight: 3,
                    type: "star",
                    value: 16
                } ],
                capsuleToyWeight: 40
            }, {
                value: 7e4,
                hp: 5,
                time: 6e3,
                cost: 5e4,
                pos: [ {
                    x: -50,
                    y: 15
                }, {
                    x: 25,
                    y: -35
                }, {
                    x: 35,
                    y: 45
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -25,
                    y: 20
                }, {
                    x: 10,
                    y: -10
                }, {
                    x: 20,
                    y: 30
                } ],
                award: [ {
                    weight: 96,
                    type: "star",
                    value: .6
                }, {
                    weight: 4,
                    type: "star",
                    value: 24
                } ],
                capsuleToyWeight: 30
            }, {
                value: 14e4,
                hp: 6,
                time: 12e3,
                cost: 12e4,
                pos: [ {
                    x: -50,
                    y: 35
                }, {
                    x: 50,
                    y: 35
                }, {
                    x: -60,
                    y: -50
                }, {
                    x: 35,
                    y: -50
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 20
                }, {
                    x: 20,
                    y: 20
                }, {
                    x: -20,
                    y: -20
                }, {
                    x: 20,
                    y: -20
                } ],
                award: [ {
                    weight: 95,
                    type: "star",
                    value: .8
                }, {
                    weight: 5,
                    type: "star",
                    value: 36
                } ],
                capsuleToyWeight: 15
            } ],
            Garden_lanfengling: [ {
                value: 42e3,
                hp: 4,
                time: 2400,
                cost: 8e3,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: -45,
                    y: 50
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 83,
                    type: "star",
                    value: .3
                }, {
                    weight: 17,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 20
            }, {
                value: 5e4,
                hp: 5,
                time: 4800,
                cost: 3e4,
                pos: [ {
                    x: 20,
                    y: 5
                }, {
                    x: -40,
                    y: -35
                } ],
                flowerViewPos: {
                    x: -10,
                    y: 70
                },
                aggregatedPos: [ {
                    x: 10,
                    y: 15
                }, {
                    x: -15,
                    y: -15
                } ],
                award: [ {
                    weight: 82,
                    type: "star",
                    value: .5
                }, {
                    weight: 18,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 40
            }, {
                value: 9e4,
                hp: 6,
                time: 9600,
                cost: 75e3,
                pos: [ {
                    x: -50,
                    y: 10
                }, {
                    x: 40,
                    y: 50
                }, {
                    x: 30,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 0
                }, {
                    x: 20,
                    y: 10
                }, {
                    x: 5,
                    y: -30
                } ],
                award: [ {
                    weight: 81,
                    type: "star",
                    value: .7
                }, {
                    weight: 19,
                    type: "star",
                    value: 6
                } ],
                capsuleToyWeight: 30
            }, {
                value: 2e5,
                hp: 7,
                time: 19200,
                cost: 16e4,
                pos: [ {
                    x: -65,
                    y: 30
                }, {
                    x: 35,
                    y: 35
                }, {
                    x: -50,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 20
                }, {
                    x: 25,
                    y: 0
                }, {
                    x: -35,
                    y: -20
                }, {
                    x: 0,
                    y: -35
                } ],
                award: [ {
                    weight: 80,
                    type: "star",
                    value: .9
                }, {
                    weight: 20,
                    type: "star",
                    value: 10
                } ],
                capsuleToyWeight: 15
            } ],
            Garden_baimeigui: [ {
                value: 18e4,
                hp: 6,
                time: 39960,
                cost: 0,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: -5,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: .1
                }, {
                    weight: 22,
                    type: "star",
                    value: 2
                } ],
                capsuleToyWeight: 16
            }, {
                value: 22e4,
                hp: 8,
                time: 39960,
                cost: 0,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 90
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 25,
                    y: -15
                } ],
                award: [ {
                    weight: 77,
                    type: "star",
                    value: .1
                }, {
                    weight: 23,
                    type: "star",
                    value: 4
                } ],
                capsuleToyWeight: 14
            }, {
                value: 27e4,
                hp: 10,
                time: 39960,
                cost: 0,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -25,
                    y: 20
                }, {
                    x: 10,
                    y: -10
                }, {
                    x: 20,
                    y: 30
                } ],
                award: [ {
                    weight: 76,
                    type: "star",
                    value: .1
                }, {
                    weight: 24,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 10
            }, {
                value: 33e4,
                hp: 12,
                time: 39960,
                cost: 0,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 20
                }, {
                    x: 20,
                    y: 20
                }, {
                    x: -20,
                    y: -20
                }, {
                    x: 20,
                    y: -20
                } ],
                award: [ {
                    weight: 75,
                    type: "star",
                    value: .1
                }, {
                    weight: 25,
                    type: "star",
                    value: 12
                } ],
                capsuleToyWeight: 6
            } ],
            Garden_yinghua: [ {
                value: 24e4,
                takeOutWPro: .1,
                hp: 6,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: .5
                }, {
                    weight: 22,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 5
            }, {
                value: 29e4,
                takeOutWPro: .09,
                hp: 8,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 85
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 20,
                    y: -10
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1
                }, {
                    weight: 22,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 3
            }, {
                value: 35e4,
                takeOutWPro: .08,
                hp: 10,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -20,
                    y: 10
                }, {
                    x: 20,
                    y: 25
                }, {
                    x: 0,
                    y: -15
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1.5
                }, {
                    weight: 22,
                    type: "star",
                    value: 5
                } ],
                capsuleToyWeight: 2
            }, {
                value: 42e4,
                takeOutWPro: .07,
                hp: 12,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 20
                }, {
                    x: 20,
                    y: 0
                }, {
                    x: -30,
                    y: -10
                }, {
                    x: 0,
                    y: -30
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 2
                }, {
                    weight: 22,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 1
            } ],
            Garden_clover: [ {
                value: 24e4,
                takeOutWPro: .1,
                hp: 6,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: .5
                }, {
                    weight: 22,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 5
            }, {
                value: 29e4,
                takeOutWPro: .09,
                hp: 8,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 85
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 20,
                    y: -10
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1
                }, {
                    weight: 22,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 3
            }, {
                value: 35e4,
                takeOutWPro: .08,
                hp: 10,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -25,
                    y: 10
                }, {
                    x: 20,
                    y: 25
                }, {
                    x: 5,
                    y: -20
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1.5
                }, {
                    weight: 22,
                    type: "star",
                    value: 5
                } ],
                capsuleToyWeight: 2
            }, {
                value: 42e4,
                takeOutWPro: .07,
                hp: 12,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 25,
                    y: 0
                }, {
                    x: -30,
                    y: -15
                }, {
                    x: 0,
                    y: -35
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 2
                }, {
                    weight: 22,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 1
            } ],
            Garden_fengye: [ {
                value: 24e4,
                takeOutWPro: .1,
                hp: 6,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: .5
                }, {
                    weight: 22,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 5
            }, {
                value: 29e4,
                takeOutWPro: .09,
                hp: 8,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 85
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 20,
                    y: -10
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1
                }, {
                    weight: 22,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 3
            }, {
                value: 35e4,
                takeOutWPro: .08,
                hp: 10,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -25,
                    y: 10
                }, {
                    x: 20,
                    y: 25
                }, {
                    x: 5,
                    y: -20
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1.5
                }, {
                    weight: 22,
                    type: "star",
                    value: 5
                } ],
                capsuleToyWeight: 2
            }, {
                value: 42e4,
                takeOutWPro: .07,
                hp: 12,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 25,
                    y: 0
                }, {
                    x: -30,
                    y: -15
                }, {
                    x: 0,
                    y: -35
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 2
                }, {
                    weight: 22,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 1
            } ],
            Garden_xuehua: [ {
                value: 24e4,
                takeOutWPro: .1,
                hp: 6,
                pos: [ {
                    x: 0,
                    y: 0
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 110
                },
                aggregatedPos: [ {
                    x: 0,
                    y: 0
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: .5
                }, {
                    weight: 22,
                    type: "star",
                    value: 1
                } ],
                capsuleToyWeight: 10
            }, {
                value: 29e4,
                takeOutWPro: .09,
                hp: 8,
                pos: [ {
                    x: -35,
                    y: 20
                }, {
                    x: 30,
                    y: 10
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 85
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 20,
                    y: -10
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1
                }, {
                    weight: 22,
                    type: "star",
                    value: 3
                } ],
                capsuleToyWeight: 6
            }, {
                value: 35e4,
                takeOutWPro: .08,
                hp: 10,
                pos: [ {
                    x: -60,
                    y: 30
                }, {
                    x: 50,
                    y: 20
                }, {
                    x: 5,
                    y: -30
                } ],
                flowerViewPos: {
                    x: 0,
                    y: 0
                },
                aggregatedPos: [ {
                    x: -25,
                    y: 10
                }, {
                    x: 20,
                    y: 25
                }, {
                    x: 5,
                    y: -20
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 1.5
                }, {
                    weight: 22,
                    type: "star",
                    value: 5
                } ],
                capsuleToyWeight: 4
            }, {
                value: 42e4,
                takeOutWPro: .07,
                hp: 12,
                pos: [ {
                    x: -50,
                    y: 50
                }, {
                    x: 40,
                    y: 40
                }, {
                    x: -40,
                    y: -40
                }, {
                    x: 40,
                    y: -40
                } ],
                flowerViewPos: {
                    x: -30,
                    y: -30
                },
                aggregatedPos: [ {
                    x: -10,
                    y: 25
                }, {
                    x: 25,
                    y: 0
                }, {
                    x: -30,
                    y: -15
                }, {
                    x: 0,
                    y: -35
                } ],
                award: [ {
                    weight: 78,
                    type: "star",
                    value: 2
                }, {
                    weight: 22,
                    type: "star",
                    value: 8
                } ],
                capsuleToyWeight: 2
            } ]
        };
        for (var r in s) if (s.hasOwnProperty(r)) {
            var c = s[r];
            if ("number" == typeof c) s[r] = o.encryptData(c); else if ("object" == (void 0 === c ? "undefined" : a(c))) for (var h = 0; h < c.length; h++) {
                var l = c[h];
                if (l.hp && (l.hp = o.encryptData(l.hp)), l.cost && (l.cost = o.encryptData(l.cost)), 
                l.time && (l.time = o.encryptData(l.time)), l.award) for (var u = 0; u < l.award.length; u++) {
                    var d = l.award[u];
                    d.value = o.encryptData(d.value);
                }
                l.capsuleToyWeight && (l.capsuleToyWeight = o.encryptData(l.capsuleToyWeight));
            }
        }
        i.exports = s, cc._RF.pop();
    }, {
        userData: "userData"
    } ],
    fullScale: [ function(e, t, i) {
        cc._RF.push(t, "e9a76/0p+1Dla95NssVaKkY", "fullScale"), cc.Class({
            extends: cc.Component,
            properties: {
                actionFlag: !1
            },
            fixSize: function() {
                this.node.width = cc.winSize.width, this.node.height = cc.winSize.height;
            },
            start: function() {},
            onDestroy: function() {},
            onEnable: function() {
                if (this.fixSize(), this.actionFlag) {
                    var e = this.node.scale;
                    this.node.scale = .2 * e, this.node.runAction(cc.sequence(cc.scaleTo(.2, 1.05 * e), cc.delayTime(.05), cc.scaleTo(.1, e)));
                }
            }
        }), cc._RF.pop();
    }, {} ],
    global: [ function(t, i, n) {
        cc._RF.push(i, "6b0fcSt9XlOX7sMvPdl6gUe", "global");
        var a = function() {
            function e(e, t) {
                var i = [], n = !0, a = !1, o = void 0;
                try {
                    for (var s, r = e[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), 
                    !t || i.length !== t); n = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        !n && r.return && r.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
            return function(t, i) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, s = 0, r = {};
        cc.view.setResizeCallback(function() {
            for (var e in r) (0, r[e])();
        });
        var c = {
            addResizeCallback: function(e, t) {
                return t = t.bind(e), r[++s] = t, s;
            },
            removeResizeCallback: function(e) {
                r[e] = null;
            },
            confirmScale: function(e) {
                for (var t = 1, i = 1; e.parent; ) t *= e.parent.scaleX, i *= e.parent.scaleY, e = e.parent;
                return {
                    sx: t,
                    sy: i
                };
            },
            setChildrenRenderComponentEnable: function(e, t) {
                if (cc.isValid(e, !0)) {
                    if (e._components) {
                        var i = e.getComponent(cc.Sprite), n = e.getComponent(cc.Label), a = e.getComponent(cc.Mask);
                        if (i && cc.isValid(i, !0)) try {
                            i.enabled = t;
                        } catch (e) {
                            console.log("err", e);
                        }
                        n && cc.isValid(n, !0) && (n.enabled = t), a && cc.isValid(a, !0) && (a.enabled = t);
                    }
                    for (var o = e.children, s = 0; s < o.length; s++) {
                        var r = o[s];
                        this.setChildrenRenderComponentEnable(r, t);
                    }
                }
            },
            setComponentEnableByArr: function(e, t) {
                for (var i = 0; i < e.length; i++) this.setChildrenRenderComponentEnable(e[i], t);
            },
            deepClone: function(e, t) {
                if (!e) return null;
                t || (this.cloneCache = []);
                var i = Array.isArray(e) ? [] : {};
                if (e && "object" === (void 0 === e ? "undefined" : o(e))) for (var n in e) if (e.hasOwnProperty(n)) {
                    var a = e[n];
                    a && "object" === (void 0 === a ? "undefined" : o(a)) ? -1 === this.cloneCache.indexOf(a) && (this.cloneCache.push(a), 
                    i[n] = this.deepClone(a, !0)) : i[n] = a;
                }
                return t || (this.cloneCache = null), i;
            },
            itemTypeGroupInfoMap: {},
            playTimeCount: 100,
            cumulativeDayPlayTime: 0,
            getItemGroupMap: function(e) {
                return this.itemTypeGroupInfoMap[e];
            },
            onRestart: function() {
                this.itemTypeGroupInfoMap = {}, this.poolManager && cc.isValid(this.poolManager) && this.poolManager.clearCache(), 
                this.ranklistNode && (cc.game.removePersistRootNode(this.ranklistNode), this.ranklistNode = null), 
                this.wxOnShow && (wx.offShow(this.wxOnShow), this.wxOnShow = null), t("ViewModule").ins.clear(), 
                t("SceneModule").ins.clear();
            },
            wxCleanTimeCount: 0,
            wxCleanSum: 0,
            checkCacheTime: -2,
            onUpdate: function(e) {
                this.checkInviteInfo(), this.playTimeCount += e, this.cumulativeDayPlayTime += Math.floor(10 * e) / 10, 
                this.checkOldCaches(e), this.checkCacheTime += e, this.checkCacheTime > 1.5 && (this.checkCacheTime = 0, 
                this.clearCacheLatest());
            },
            checkOldCaches: function(e) {
                if ("undefined" != typeof wx) {
                    if (this.wxCleanTimeCount += e, this.wxCleanTimeCount <= 10) return;
                    return this.wxCleanTimeCount = 0, void ((1 == wxDownloader.outOfStorage || this.outOfStorage) && (this.outOfStorage = null, 
                    this.wxCleanTimeCount = -120, this.wxCleanSum++, c.reportMonitor("3", this.wxCleanSum), 
                    wxDownloader.cleanOldCaches()));
                }
            },
            waitResCallbackMap: {},
            tempResRetainMap: {},
            resWaittingCount: 0,
            loadRes: function(e, t, i, n) {
                var a = this, o = cc.loader.getRes(e, t);
                if (o) i(null, o); else if (this.waitResCallbackMap[e] && this.waitResCallbackMap[e][t]) this.waitResCallbackMap[e][t].push(i); else {
                    this.waitResCallbackMap[e] || (this.waitResCallbackMap[e] = {}), this.waitResCallbackMap[e][t] = [ i ], 
                    n || (n = 5);
                    var s = [], r = {}, c = function(i, n) {
                        for (var o = 0; o < a.waitResCallbackMap[e][t].length; o++) a.waitResCallbackMap[e][t][o](i, n);
                        if (delete a.waitResCallbackMap[e][t], s.length > 0) for (var r = 0; r < s.length; r++) a.protectResMap[s[r]]--;
                        a.resWaittingCount--;
                    }, h = function(i, n) {
                        if (!i && a.tempResRetainMap[e] && a.tempResRetainMap[e][t]) {
                            for (var o = a.tempResRetainMap[e][t], s = 0; s < o.length; s++) {
                                var r = o[s];
                                a.releaseUid(r, !0);
                            }
                            delete a.tempResRetainMap[e][t];
                        }
                        c(i, n);
                    }, l = function(i, n) {
                        if (a.tempResRetainMap[e] && a.tempResRetainMap[e][t]) {
                            for (var o = a.tempResRetainMap[e][t], r = 0; r < o.length; r++) {
                                var c = o[r];
                                a.releaseUid(c, !0);
                            }
                            delete a.tempResRetainMap[e][t];
                        }
                        if (s.length > 0) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                a.retainUid(u);
                            }
                            a.tempResRetainMap[e] || (a.tempResRetainMap[e] = {}), a.tempResRetainMap[e][t] = s;
                        }
                        h(i, n);
                    };
                    this.resWaittingCount++, function i() {
                        cc.loader.loadRes(e, t, function(e, t, i) {
                            for (var n = cc.loader.getDependsRecursively(i.url), o = 0; o < n.length; o++) {
                                var c = n[o];
                                r[c] || (r[c] = !0, a.protectResMap[c] ? a.protectResMap[c]++ : a.protectResMap[c] = 1, 
                                s.push(c));
                            }
                        }, function(t, a) {
                            t ? --n > 0 ? setTimeout(function() {
                                i();
                            }, 800) : l(t, a) : cc.isValid(a, !0) ? h(null, a) : (cc.log("isNotValid", e), --n >= 0 ? setTimeout(function() {
                                i();
                            }, 800) : l("isNotValid", a));
                        });
                    }();
                }
            },
            loadSubpackage: function(e, t, i) {
                return i && (t = t.bind(i)), "undefined" == typeof wx ? (cc.loader.downloader.loadSubpackage(e, function(e) {
                    t(!e);
                }), null) : wx.loadSubpackage ? wx.loadSubpackage({
                    name: e,
                    success: function() {
                        t(!0);
                    },
                    fail: function(e) {
                        console.log("@@@@loadSubpackage fail", e), t(!1, e);
                    }
                }) : (t(!1), null);
            },
            serverDiffTime: 0,
            offsetTime: 0,
            getServerTime: function() {
                return t("config").isDebug || (this.offsetTime = 0), new Date().getTime() + this.serverDiffTime + this.offsetTime;
            },
            changeTime: function(e) {
                this.offsetTime += e;
            },
            referenceMap: {},
            retainRes: function(e) {
                for (var t = cc.loader.getDependsRecursively(e), i = 0; i < t.length; i++) {
                    var n = t[i];
                    this.retainUid(n);
                }
            },
            protectResMap: {},
            garbageResMap: {},
            retainUid: function(e) {
                this.referenceMap[e] ? this.referenceMap[e]++ : (this.referenceMap[e] = 1, this.garbageResMap[e] && delete this.garbageResMap[e]);
            },
            releaseRes: function(e, t, i) {
                for (var n = cc.loader.getDependsRecursively(e), a = 0; a < n.length; a++) {
                    var o = n[a];
                    this.releaseUid(o, t, i);
                }
            },
            releaseUid: function(e, t, i) {
                this.referenceMap[e] ? (this.referenceMap[e] -= i || 1, this.referenceMap[e] <= 0 && (delete this.referenceMap[e], 
                t || (this.clearDirty || (this.clearDirty = !0), this.garbageResMap[e] = !0))) : console.log("releaseRes error ", e);
            },
            onStarLoad: function() {
                var e = this;
                if ("undefined" != typeof wx && null != wx.onMemoryWarning) {
                    this.autoClear = !0;
                    var i = this;
                    this.wxOnMemoryWarning = function() {
                        console.log("onMemoryWarningReceive"), wx.triggerGC(), i.clearCache();
                    }, wx.onMemoryWarning(this.wxOnMemoryWarning), this.launchInfo = wx.getLaunchOptionsSync(), 
                    this.checkInviteFlag = !0;
                    var n = this.launchInfo;
                    n.query && n.query.showGroupRank && n.shareTicket && void 0 !== n.shareTicket && (this.checkGroupRankFlag = !0), 
                    n.query && n.query.buffetInvite && (this.checkBuffetInviteFlag = !0), n.query && n.query.waimaiInvite && (this.checkWaimaiInviteFlag = !0, 
                    this.waimaiOrderNeedTime = n.query.needTime, this.waimaiOrderKey = n.query.orderKey), 
                    n.query && n.query.communityInviteFriend && n.query.openid && (this.communityInviteFriend = !0), 
                    this.wxOnShow = function(i) {
                        var n = t("userData");
                        e.launchInfo = i, e.checkInviteFlag = !0, 2 == e.isBackAppButtonLoading && (e.isBackAppButtonLoading = null);
                        var a = i.shareTicket;
                        i.query && i.query.showGroupRank && a && void 0 !== a && (e.checkGroupRankFlag = !0), 
                        i.query && i.query.buffetInvite && (e.checkBuffetInviteFlag = !0), i.query && i.query.waimaiInvite && (e.checkWaimaiInviteFlag = !0, 
                        e.waimaiOrderNeedTime = i.query.needTime, e.waimaiOrderKey = i.query.orderKey), 
                        e.checkSpecialTaskIsFinished() && n.sendMessage("jijiSpecialTaskFinished"), i.query && i.query.communityInviteFriend && i.query.openid && (e.communityInviteFriend = !0);
                    }, wx.onShow(this.wxOnShow);
                }
            },
            checkInviteInfo: function() {
                if (this.checkInviteFlag) {
                    this.checkInviteFlag = null;
                    var e = this.launchInfo;
                    if (e) {
                        var i = e.query;
                        if (i && "dailyTask" == i.msg) {
                            var n = t("netManager");
                            if (!n.openid || !i.inviteId || i.inviteId == n.openid) return;
                            n.openDailyTaskInviteInfo(i, function(e) {
                                var i = t("userData"), n = t("localize");
                                0 == e ? i.sendMessage("showToast", n.getText("toast_dailyTaskInviteHelp")) : i.sendMessage("showToast", n.getText("toast_string_6"));
                            });
                        }
                    }
                }
            },
            clearCache: function() {
                var e = t("SceneModule").ins;
                e.clearThemeCache(), e.clearBuildingCache(), this.poolManager && cc.isValid(this.poolManager) && this.poolManager.clearCache(), 
                this.reportMonitor("4", 1), this.clearCacheLatest();
            },
            clearCacheLatest: function() {
                if (!(this.resWaittingCount > 0) && this.clearDirty) {
                    this.clearDirty = null;
                    var e = [];
                    for (var t in this.garbageResMap) this.protectResMap[t] || (cc.loader.release(t), 
                    e.push(t));
                    if (e.length > 0) for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        delete this.garbageResMap[n];
                    }
                }
            },
            cusDetailRef: 0,
            onCusDetailClose: function() {
                this.cusDetailRef--;
            },
            onCusDetailOpen: function() {
                this.cusDetailRef++;
            },
            isCusDetailOpen: function() {
                return this.cusDetailRef > 0;
            },
            compareVersion: function(e) {
                if ("undefined" == typeof wx) return -1;
                var t = this.wxInfo;
                t || (t = wx.getSystemInfoSync(), this.wxInfo = t);
                var i = t.SDKVersion;
                if (!i || !e) return -1;
                i = i.split("."), e = e.split(".");
                for (var n = Math.max(i.length, e.length); i.length < n; ) i.push("0");
                for (;e.length < n; ) e.push("0");
                for (var a = 0; a < n; a++) {
                    var o = parseInt(i[a]), s = parseInt(e[a]);
                    if (o > s) return 1;
                    if (o < s) return -1;
                }
                return 0;
            },
            getNextDate: function(e, t) {
                var i = new Date(e);
                return i.setDate(i.getDate() + t), new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
            },
            getDatePassDay: function(e, t) {
                var i = new Date(e), n = new Date(t), a = new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime(), o = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
                return Math.floor((a - o) / 864e5);
            },
            vibrateShort: function() {
                "undefined" != typeof wx && wx.vibrateShort();
            },
            getRandomString: function(e) {
                for (var t = "", i = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = i.length, a = 0; a < (e || 8); a++) t += i.charAt(Math.floor(Math.random() * n));
                return t;
            },
            isWxOnly: function() {
                return "undefined" != typeof wx && "undefined" == typeof qq;
            },
            isQQOnly: function() {
                return "undefined" != typeof qq;
            },
            isNativeOnly: function() {
                return !(!cc.sys.isNative && !cc.sys.isBrowser || "undefined" != typeof wx || "undefined" != typeof qq);
            },
            isAppOnly: function() {
                return !(!cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS && cc.sys.os != cc.sys.OS_ANDROID);
            },
            isIosOnly: function() {
                return !(!cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS);
            },
            isAndroidOnly: function() {
                return !(!cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID);
            },
            isTtOnly: function() {
                return "undefined" != typeof tt;
            },
            checkSpecialTaskIsFinished: function() {
                var e = this.launchInfo.scene;
                return 1001 == e || 1103 == e || 1104 == e || 1089 == e;
            },
            reportMonitor: function(e, t) {
                "undefined" != typeof wx && wx.reportMonitor && wx.reportMonitor(e, t);
            },
            isNotShare: function() {
                return !1;
            },
            fixLabelOpt: function(e, i, n, a, o) {
                var s = t("localize");
                cc.sys.isNative && "cn" != s.lan && ("kr" == s.lan || "jp" == s.lan || "th" == s.lan || "vi" == s.lan || "cn_2" == s.lan ? c.loadRes("Font/" + s.lan + "All", cc.Font, function(t, i) {
                    cc.isValid(e.node) && (t ? e.useSystemFont = !0 : (e.useSystemFont = !1, e.font = i, 
                    e.lineHeight = 50));
                }, 100) : "en" != s.lan && "ms" != s.lan && (e.useSystemFont = !0), "cn_2" != s.lan && (i ? e.fontSize = i * e.fontSize : "en" == s.lan && (e.fontSize *= .7), 
                n && (e.overflow = cc.Label.Overflow.RESIZE_HEIGHT, e.node.width = n), null != a && (e.horizontalAlign = a), 
                null != o && (e.verticalAlign = o)));
            },
            fixLabel: function(e, i, n, a, o) {
                var s = t("localize");
                cc.sys.isNative && "cn" != s.lan && ("kr" == s.lan || "jp" == s.lan || "th" == s.lan || "vi" == s.lan || "cn_2" == s.lan ? c.loadRes("Font/" + s.lan + "All", cc.Font, function(t, a) {
                    if (cc.isValid(e.node)) if (t) e.useSystemFont = !0; else {
                        if (e.useSystemFont = !1, e.font = a, e.lineHeight = 50, "cn_2" == s.lan) return;
                        c.shrinkLabel(e, i, n);
                    }
                }, 100) : "en" == s.lan || "ms" == s.lan ? c.shrinkLabel(e, i, n) : "en" != s.lan && "ms" != s.lan && (e.useSystemFont = !0), 
                "cn_2" != s.lan && (null != a && (e.horizontalAlign = a), null != o && (e.verticalAlign = o)));
            },
            shrinkLabel: function(e, t, i, n, a) {
                if (cc.isValid(e.node) && t && (e.fontSize = a || e.fontSize, i || (e.overflow = cc.Label.Overflow.NONE, 
                e._updateRenderData(!0), i = e.node.height), e.overflow = cc.Label.Overflow.RESIZE_HEIGHT, 
                e.node.width = t, e._updateRenderData(!0), e.node.height > i)) {
                    for (n = n || 16, a = a || e.fontSize; n < a - 1; ) {
                        var o = Math.floor((n + a) / 2);
                        if (e.fontSize = o, e._updateRenderData(!0), e.node.height < i) n = o; else {
                            if (e.node.height == i) break;
                            a = o;
                        }
                    }
                    e.fontSize = n, e._updateRenderData(!0);
                }
            },
            onGuestAuth: function(e) {
                c.loadRes("Prefab/reLoginDlg", cc.Prefab, function(t, i) {
                    if (t) console.error("taskView error", t); else {
                        var n = c.autoReleaseInstantiate(i);
                        n.getComponent("reLoginDlg").init(e), n.parent = cc.find("Canvas/npcDlg");
                    }
                });
            },
            initWaimaiFriendInfo: function(e) {
                this.isNativeOnly() || (this.waimaiFriendInfo = e, this.waimaiToStartTime = e.toStartTime, 
                this.waimaiToNeedTime = e.toNeedTime, this.toOrderKey = e.toOrderKey);
            },
            initBuffetFriendInfo: function(e) {
                if (!this.isNativeOnly()) {
                    this.buffetFriendInfo = e, this.buffetFriendTimeList = [];
                    for (var t = 1; t <= 3; t++) e["inviteOpenId_" + t] && this.buffetFriendTimeList.push(e["inviteStartTime_" + t]);
                    this.buffetToStartTime = e.toStartTime, this.buffetToNickName = e.toNickName || "???", 
                    this.buffetToStartTime_emp = e.toStartTime_emp, this.buffetToNickName_emp = e.toNickName_emp || "???", 
                    this.buffetFriendInfoMap || (this.buffetFriendInfoMap = {});
                    var i = this.buffetFriendInfoMap;
                    e.inviteOpenId_1 && (this.buffetFriend_1_head = parseInt(e.inviteEmpHead_1 || 0), 
                    i.friend_1 = {
                        openid: e.inviteOpenId_1,
                        startTime: e.inviteStartTime_1,
                        avatarUrl: e.inviteAvatarUrl_1,
                        nickName: e.inviteNickName_1 || "???",
                        emp: e.inviteIsEmp_1
                    }), e.inviteOpenId_2 && (this.buffetFriend_2_head = parseInt(e.inviteEmpHead_2 || 0), 
                    i.friend_2 = {
                        openid: e.inviteOpenId_2,
                        startTime: e.inviteStartTime_2,
                        avatarUrl: e.inviteAvatarUrl_2,
                        nickName: e.inviteNickName_2 || "???",
                        emp: e.inviteIsEmp_2
                    }), e.inviteOpenId_3 && (this.buffetFriend_3_head = parseInt(e.inviteEmpHead_3 || 0), 
                    i.friend_3 = {
                        openid: e.inviteOpenId_3,
                        startTime: e.inviteStartTime_3,
                        avatarUrl: e.inviteAvatarUrl_3,
                        nickName: e.inviteNickName_3 || "???",
                        emp: e.inviteIsEmp_3
                    });
                }
            },
            curRoom: "diningRoom",
            checkActivityDate: function(e, t) {
                return this.checkCommunityActivityDate(e) && !this.checkCommunityActivityDate(t, 1);
            },
            checkCommunityActivityDate: function(e, t) {
                var i = this.getServerTime(), n = e.split("-"), o = a(n, 6), s = o[0], r = o[1], c = o[2], h = o[3], l = o[4], u = o[5];
                return e.split("-").length - 1 == 1 && (c = r, r = s, s = new Date(i).getFullYear()), 
                e = s + "/" + r + "/" + c + " " + (h = h || "00") + ":" + (l = l || "00") + ":" + (u = u || "00"), 
                i >= new Date(e).getTime() + 24 * (t || 0) * 3600 * 1e3;
            },
            cmpDate: function(e, t, i) {
                var n = e.getFullYear(), o = e.getMonth() + 1, s = e.getDate(), r = t.split("-"), c = a(r, 3), h = c[0], l = c[1], u = c[2];
                return h = parseInt(h), l = parseInt(l), u = parseInt(u) + (i || 0), n > h || n === h && (o > l || o === l && s >= u);
            },
            gameRestart: function() {
                t("userData").sendMessage("stopAllEffect");
                var e = t("config");
                "undefined" == typeof sdkbox || "inland" == e.app_type && c.isAndroidOnly() || sdkbox.IAP.removeListener(), 
                cc.game.restart();
            },
            gameClosing: !1,
            gameClose: function(e) {
                c.gameClosing || (c.gameClosing = !0, setTimeout(function() {
                    t("userData").sendMessage("stopAllEffect");
                    var e = t("config");
                    "undefined" == typeof sdkbox || "inland" == e.app_type && c.isAndroidOnly() || sdkbox.IAP.removeListener(), 
                    c.gameClosing = !1, cc.game.end();
                }, 1e3 * e));
            },
            isPrefix: function(e, t) {
                for (var i = 0; i < t.length; i++) if (t.charAt(i) != e.charAt(i)) return !1;
                return !0;
            },
            getLocalizeLanByCode: function(e) {
                var t = !0, i = !1, n = void 0;
                try {
                    for (var a, o = [ {
                        localize: "cn_2",
                        codeList: [ "zh-hant", "zh-tw", "zh-mo", "zh-sg", "zh_cn_#hant", "zh_tw", "zh_hant", "zh_mo", "zh_sg", "zh_hk", "zh-hk" ]
                    }, {
                        localize: "cn",
                        codeList: [ "zh" ]
                    }, {
                        localize: "jp",
                        codeList: [ "ja" ]
                    }, {
                        localize: "kr",
                        codeList: [ "ko" ]
                    }, {
                        localize: "ms",
                        codeList: [ "ms" ]
                    }, {
                        localize: "th",
                        codeList: [ "th" ]
                    }, {
                        localize: "vi",
                        codeList: [ "vi" ]
                    } ][Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                        var s = a.value, r = !0, h = !1, l = void 0;
                        try {
                            for (var u, d = s.codeList[Symbol.iterator](); !(r = (u = d.next()).done); r = !0) {
                                var f = u.value;
                                if (c.isPrefix(e, f)) return s.localize;
                            }
                        } catch (e) {
                            h = !0, l = e;
                        } finally {
                            try {
                                !r && d.return && d.return();
                            } finally {
                                if (h) throw l;
                            }
                        }
                    }
                } catch (e) {
                    i = !0, n = e;
                } finally {
                    try {
                        !t && o.return && o.return();
                    } finally {
                        if (i) throw n;
                    }
                }
                return "en";
            },
            addFloatItem: function(e, i) {
                var n = t("userData"), a = void 0, o = void 0, s = void 0, r = [];
                r = Array.isArray(e) ? e : [ e ];
                var h = [], l = cc.find("Canvas/topUI"), u = cc.find("Canvas/topDlg"), d = 0, f = !0, g = !1, p = void 0;
                try {
                    for (var m, y = r[Symbol.iterator](); !(f = (m = y.next()).done); f = !0) !function(e) {
                        "coin" == e.type || "money" == e.type ? (a = "UI_Coins_Line", o = "UI_Icon_Coins", 
                        s = "money") : "star" == e.type ? (a = "UI_Rating_bg", o = "UI_Icon_Rating", s = "star") : "plate" == e.type || "money_plate" == e.type ? (a = "UI_Plate_bg", 
                        o = "UI_Icon_Plate", s = "money_plate") : "yuer" == e.type ? (a = "UI_Yuer", o = "UI_Icon_yuer1", 
                        s = "yuer") : "bell" != e.type && "money_bell" != e.type || (a = "UI_Bell", o = "UI_Icon_bell", 
                        s = "money_bell"), d += e.number || 0;
                        var t = e.offset || {
                            x: 0,
                            y: 0
                        }, i = e.worldPos || e.node.convertToWorldSpaceAR(new cc.v2(t.x, t.y)), n = u.convertToNodeSpaceAR(new cc.v2(i.x, i.y)), r = e.type;
                        "money" == r && (r = "coin");
                        var f = c.poolManager.getItemNode(r), g = f.getComponent("item");
                        g.info = {
                            itemType: r
                        }, g.initView(), f.x = n.x, f.y = n.y, f.parent = u, f.group = "capsule";
                        var p = cc.scaleTo(.6, 1, 1);
                        f.runAction(p);
                        var m = l.getChildByName(a), y = m.getChildByName(o), v = m.active;
                        m.active = !0;
                        var b = y.convertToWorldSpaceAR(new cc.v2(0, 0)), _ = u.convertToNodeSpaceAR(new cc.v2(b.x, b.y)), w = function(e, t) {
                            var i, n;
                            i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
                            var a = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)) / 2200;
                            return a < .3 ? a = .3 : a > .6 && (a = .6), a;
                        }(n, _);
                        h.push(new Promise(function(e) {
                            var t = cc.sequence(cc.moveTo(w, _.x, _.y), cc.hide(), cc.callFunc(function() {
                                f.group = "default", c.poolManager.putItemNode(f, r), e({
                                    endNode: y,
                                    uiActive: v
                                });
                            }));
                            f.runAction(t), f.runAction(cc.scaleTo(w, 1));
                        }));
                    }(m.value);
                } catch (e) {
                    g = !0, p = e;
                } finally {
                    try {
                        !f && y.return && y.return();
                    } finally {
                        if (g) throw p;
                    }
                }
                var v = 1;
                "UI_Bell" == a && (v = .9), Promise.all(h).then(function(e) {
                    var t = !0, a = !1, o = void 0;
                    try {
                        for (var r, h = e[Symbol.iterator](); !(t = (r = h.next()).done); t = !0) {
                            var l = r.value, u = l.endNode;
                            l.uiActive, u.runAction(cc.sequence(cc.scaleTo(.2, 1.15), cc.delayTime(.05), cc.scaleTo(.1, v), cc.delayTime(.5), cc.callFunc(function() {})));
                        }
                    } catch (e) {
                        a = !0, o = e;
                    } finally {
                        try {
                            !t && h.return && h.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    d = parseInt(10 * d) / 10, n.changeData(s, d, function() {
                        var t = c.poolManager.getBaseFontLblNode("+" + d + " ", 38), n = !0, a = !1, o = void 0;
                        try {
                            for (var s, r = e[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                                var h = s.value.endNode;
                                t.parent = h.parent;
                            }
                        } catch (e) {
                            a = !0, o = e;
                        } finally {
                            try {
                                !n && r.return && r.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        i && i();
                    });
                });
            },
            addFloatLabel: function(e, i) {
                var n = e.reward, a = e.moneyKey, o = e.parent, s = e.touchPoint, r = o.convertToNodeSpaceAR(s), h = this.poolManager.getBaseFontLblNode("+" + n, 55, !0);
                h.parent = o;
                var l = new cc.Node();
                l.parent = h, l.scale = .8, l.x = -90;
                var u = l.addComponent(t("twSprite")), d = void 0;
                "takeOutRoomThumb" == a && (d = "Icon/UI_waimai_icon_zandehe"), c.loadRes(d, cc.SpriteFrame, function(e, t) {
                    e ? console.error(e) : cc.isValid(l) && (u.spriteFrame = t);
                }), h.x = r.x, h.y = r.y, h.zIndex = 7e3, h.parent = o, h.opacity = 0;
                var f = cc.fadeIn(.5), g = cc.fadeOut(.5), p = cc.moveBy(1, 0, 150), m = cc.sequence(f, cc.delayTime(.5), g, cc.delayTime(.5), cc.callFunc(function() {
                    i(), cc.isValid(h) && h.destroy();
                }, this));
                h.runAction(m), h.runAction(p), t("userData").changeData(a, n, function() {}, this);
            },
            flyDoll: function(e) {
                var i = cc.find("Canvas/topDlg"), n = t("Dolls"), a = new cc.Node();
                a.parent = i, a.group = "capsule", a.position = i.convertToNodeSpaceAR(e.worldPos), 
                a.scale = .6, c.loadRes("Dolls/" + n[e.dollKey].img, cc.SpriteFrame, function(e, i) {
                    e ? console.log(e) : cc.isValid(a) && (a.addComponent(t("twSprite")).spriteFrame = i);
                }), a.runAction(cc.sequence(cc.moveTo(.5, i.convertToNodeSpaceAR(cc.v2(cc.winSize.width, cc.winSize.height / 2))), cc.callFunc(function() {
                    a.destroy();
                })));
            },
            isFloatItem: function(e) {
                return [ "money", "coin", "star", "plate", "money_plate" ].indexOf(e) > -1;
            },
            getIconPath: function(e) {
                switch (e.type) {
                  case "coin":
                    return !e.level || e.level < 4 ? "Icon/UI_Icon_Coins" : "Icon/UI_chahua_Coins";

                  case "star":
                    return !e.level || e.level < 4 ? "Icon/UI_Icon_Rating" : "Icon/niudan_xingxing_ssr";

                  case "plate":
                    return !e.level || e.level < 4 ? "Icon/Buffet_icon_Plate" : "Icon/niudan_panzi_ssr";

                  case "mail":
                    return "Mail/" + t("MailData")[e.key].img;

                  case "memorial":
                    var i = t("memorialData").memorials, n = !0, a = !1, o = void 0;
                    try {
                        for (var s, r = i[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                            var c = s.value;
                            if (c.key === e.key) return c.img;
                        }
                    } catch (e) {
                        a = !0, o = e;
                    } finally {
                        try {
                            !n && r.return && r.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    return "";

                  case "flower":
                  case "sprinkler":
                    return "Flowers/" + e.key;

                  case "seed":
                    return "Flowers/Garden_icon_seed";

                  case "doll":
                    return "Dolls/" + t("Dolls")[e.key].img;
                }
            },
            createItemIcon: function(e, i) {
                var n = c.getIconPath(e);
                if ("mail" == e.type) {
                    var a = t("MailData"), o = t("config"), s = a[e.key];
                    if (s.isFood && o.cookbooksMap[s.foodKey]) return void c.loadRes("Prefab/MailItem", cc.Prefab, function(e, t) {
                        if (e) return console.log(e), void i(-1);
                        c.retainRes(t);
                        var n = o.cookbooksMap[s.foodKey].img;
                        c.loadRes("Cookbooks/" + n, cc.SpriteFrame, function(e, n) {
                            if (e) return c.retainRes(n), c.releaseRes(n), console.log(e), void i(-1);
                            c.retainRes(n);
                            var a = c.autoReleaseInstantiate(t), o = a.getChildByName("icon").getComponent(cc.Sprite);
                            o.spriteFrame = n;
                            var r = n.getRect().width, h = n.getRect().height, l = Math.min(274 / r, 196 / h);
                            s.isFood ? (l = Math.min(30 / r, 30 / h), o.node.y = 10) : o.node.y = 0;
                            var u = l > 1 ? 1 : l;
                            o.node.scale = u, i(0, a, n);
                        }, 10);
                    }, 10);
                }
                c.loadRes(n, cc.SpriteFrame, function(n, a) {
                    if (n) return console.log(n), void i(-1);
                    for (var o = new cc.Node(), s = a.getOriginalSize(), r = s.width + 20, c = s.height + 20, h = 1e5, l = 1e5, u = -1e5, d = -1e5, f = t("flowerData"), g = e.flowerLevel || e.level || 1, p = function() {
                        switch (e.type) {
                          case "flower":
                            return f[e.key][g - 1].aggregatedPos;

                          case "coin":
                            return [ [ {
                                x: 0,
                                y: 0
                            } ], [ {
                                x: -20.5,
                                y: -10.7
                            }, {
                                x: 28,
                                y: -11.8
                            } ], [ {
                                x: -13.5,
                                y: -1,
                                scale: cc.v2(.8, .87),
                                rotation: -11
                            }, {
                                x: 29.9,
                                y: 4,
                                scale: cc.v2(.8, .87),
                                rotation: -11
                            }, {
                                x: -10.2,
                                y: -35.6,
                                scale: cc.v2(.8, .87),
                                rotation: -11
                            }, {
                                x: 27.2,
                                y: 15 - 39.8,
                                scale: cc.v2(.8, .87),
                                rotation: -11
                            } ], [ {
                                x: 0,
                                y: -30
                            } ] ][g - 1];

                          case "star":
                            return [ [ {
                                x: 0,
                                y: 0
                            } ], [ {
                                x: -25,
                                y: 0
                            }, {
                                x: 29,
                                y: 0
                            } ], [ {
                                x: 0,
                                y: 10
                            }, {
                                x: -25,
                                y: -32
                            }, {
                                x: 27,
                                y: -30
                            } ], [ {
                                x: 0,
                                y: -20
                            } ] ][g - 1];

                          case "plate":
                            return [ [ {
                                x: 0,
                                y: 0
                            } ], [ {
                                x: -18.6,
                                y: -13.3
                            }, {
                                x: 25,
                                y: -11
                            } ], [ {
                                x: 26.3,
                                y: -33.5
                            }, {
                                x: 0,
                                y: 10
                            }, {
                                x: -32.6,
                                y: -34
                            } ], [ {
                                x: 0,
                                y: -20
                            } ] ][g - 1];

                          default:
                            return [ [ {
                                x: 0,
                                y: 0
                            } ], [ {
                                x: -10,
                                y: 25
                            }, {
                                x: 20,
                                y: -10
                            } ], [ {
                                x: -60,
                                y: 30
                            }, {
                                x: 50,
                                y: 20
                            }, {
                                x: 5,
                                y: -30
                            } ], [ {
                                x: -10,
                                y: 20
                            }, {
                                x: 20,
                                y: 0
                            }, {
                                x: -30,
                                y: -10
                            }, {
                                x: 0,
                                y: -30
                            } ] ][g - 1];
                        }
                    }() || [], m = 0; m < p.length; m++) {
                        var y = new cc.Node();
                        y.parent = o;
                        var v = p[m];
                        y.x = v.x, y.y = v.y, v.scale && y.setScale(v.scale), v.rotation && (y.rotation = v.rotation), 
                        y.zIndex = 10 * m + 1, y.addComponent(t("twSprite")).spriteFrame = a;
                        var b = r * y.scaleX, _ = c * y.scaleY;
                        h = Math.min(h, v.x - .5 * b), l = Math.min(l, v.y - .5 * _), u = Math.max(u, v.x + .5 * b), 
                        d = Math.max(d, v.y + .5 * _);
                    }
                    o.width = u - h, o.height = d - l, i(0, o, a);
                }, 10);
            },
            flyNode: function(e, t) {
                var i = e.type, n = e.key, a = e.flowerLevel, o = e.scale, s = e.startPos, r = e.endPos;
                if (s) {
                    var h = cc.find("Canvas/topDlg");
                    c.createItemIcon({
                        type: i,
                        key: n,
                        flowerLevel: a
                    }, function(e, n, a) {
                        0 != e ? (n.parent = h, s = h.convertToNodeSpaceAR(new cc.v2(s.x, s.y)), r = h.convertToNodeSpaceAR(new cc.v2(r.x, r.y)), 
                        n.x = s.x, n.y = s.y, o && (n.scale *= o), c.isReleaseType(i) && c.retainRes(a), 
                        n.runAction(cc.sequence(cc.delayTime(2), cc.moveTo(.6, r.x, r.y), cc.callFunc(function() {
                            c.isReleaseType(i) && (n.active = !1, c.releaseRes(a)), t && t();
                        }), cc.destroySelf()))) : (c.isReleaseType(i) && (c.retainRes(a), c.releaseRes(a)), 
                        t(e));
                    });
                } else t();
            },
            isUniqueItem: function(e) {
                return [ "mail", "memorial", "doll" ].indexOf(e) > -1;
            },
            isReleaseType: function(e) {
                return [ "mail", "memorial", "doll" ].indexOf(e) > -1;
            },
            getSeason: function() {
                var e = "spring", t = new Date(this.getServerTime()).getMonth();
                return t >= 5 && t <= 7 ? e = "summer" : t >= 8 && t <= 10 ? e = "autumn" : (t >= 11 || t <= 1) && (e = "winter"), 
                e;
            },
            addItemToBag: function(e, i, n, a, o) {
                if (this.addItemList || (this.addItemList = []), this.addItemList.push({
                    bagKey: e,
                    itemIdKey: i,
                    info: n,
                    callback: a,
                    target: o
                }), !(this.addItemList.length > 1)) {
                    var s = t("userData"), r = function(e) {
                        var t = e.bagKey, i = e.itemIdKey, n = e.info, a = e.callback, o = e.target;
                        o && (a = a.bind(o)), s.getObjFromJson(t, function(e) {
                            e || (e = {}), s.changeData(i, 1, function(i) {
                                var o = "item_" + i, c = {};
                                for (var h in n) c[h] = n[h];
                                e[o] = c, s.setObjToJson(t, e, function() {
                                    if (a(o), this.addItemList.splice(0, 1), this.addItemList.length > 0) {
                                        var e = this.addItemList[0];
                                        r(e);
                                    }
                                }, this);
                            }, this);
                        }, this);
                    };
                    (r = r.bind(this))(this.addItemList[0]);
                }
            },
            removeItemFromBag: function(e, i) {
                var n = t("userData");
                n.getObjFromJson(e, function(t) {
                    t && t[i] && (delete t[i], n.setObjToJson(e, t, function() {}, this));
                }, this);
            },
            changeItemFromBag: function(e, i, n, a, o) {
                o && (a = a.bind(o));
                var s = t("userData");
                s.getObjFromJson(e, function(t) {
                    if (t || (t = {}), t[i]) {
                        var o = t[i];
                        for (var r in n) o[r] = n[r];
                        s.setObjToJson(e, t, function() {
                            a();
                        }, this);
                    } else cc.log("error id is not find ", n.itemUid), a();
                }, this);
            },
            randomInt: function(e, t) {
                if (t > e) {
                    var i = e;
                    e = t, t = i;
                }
                return Math.floor(Math.random() * (e - t + 1) + t);
            },
            random01: function() {
                return c.randomInt(10, 0) % 2;
            },
            GetDateDiff: function(e, t) {
                function i(e) {
                    return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
                }
                return function(e, t) {
                    var i = new Date(Date.parse(e.replace(/-/g, "/"))).getTime(), n = new Date(Date.parse(t.replace(/-/g, "/"))).getTime();
                    return Math.floor(i - n) / 864e5;
                }(i(new Date(e)), i(new Date(t)));
            },
            IsWxAndroidOnly: function() {
                var e = !1;
                return "undefined" != typeof wx && "undefined" == typeof qq && wx.getSystemInfo({
                    success: function(t) {
                        "android" != t.platform && "devtools" != t.platform || (e = !0);
                    },
                    fail: function() {
                        console.log("global getSystemInfo failed");
                    }
                }), e;
            },
            tempHideBuilding: function(e, i) {
                var n = t("userData");
                n.sendMessage("showBarrage", "barrage_16"), i = i || 6, n.sendMessage("showDust", e), 
                e.active = !1, setTimeout(function() {
                    cc.isValid(e, !0) && !1 === e.active && (e.active = !0, n.sendMessage("showDust", e));
                }, 1e3 * i);
            },
            getShopUrl: function() {
                var e = t("config");
                return "global" == e.app_type && c.isAndroidOnly() ? "https://play.google.com/store/apps/details?id=droidhang.twgame.restaurant" : "global" == e.app_type && c.isIosOnly() ? "https://itunes.apple.com/us/app/id1460564684" : "inland" == e.app_type && c.isAndroidOnly() ? "https://www.taptap.com/app/175600" : "https://itunes.apple.com/cn/app/id1479366779";
            },
            getScenePath: function(e, t) {
                function i(e) {
                    for (var t = 0; t < n.length; t++) for (var i = 0; i < n[t].length; i++) if (n[t][i] == e) return {
                        x: t,
                        y: i
                    };
                }
                var n = [ [ "pond", "garden", "dining_room", "kitchen_room" ], [ 0, 0, "buffet_room", 0 ] ], a = i(e), o = i(t);
                return this.getBFSPath(n, a, o).pathDir;
            },
            getBFSPath: function(e, t, i) {
                var n = {}, o = [], s = [ [ 0, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, 0 ] ];
                for (o.push(t); o.length > 0; ) {
                    var r = o.shift(), c = r.x, h = r.y;
                    if (c === i.x && h == i.y) {
                        for (var l = i, u = []; l; ) u.push(l), l = n[l.x][l.y];
                        u.push(t), u.reverse();
                        for (var d = [], f = 0; f < u.length; f++) {
                            var g = u[f + 1].x - u[f].x, p = u[f + 1].y - u[f].y;
                            d.push({
                                x: g,
                                y: p
                            });
                        }
                        return {
                            path: u,
                            pathDir: d
                        };
                    }
                    var m = !0, y = !1, v = void 0;
                    try {
                        for (var b, _ = s[Symbol.iterator](); !(m = (b = _.next()).done); m = !0) {
                            var w = b.value, S = a(w, 2), T = c + S[0], k = h + S[1];
                            n[T] || (n[T] = {}), T < 0 || T > e.length || !e[T][k] || n[T][k] || (n[T][k] = now, 
                            o.push({
                                x: T,
                                y: k
                            }));
                        }
                    } catch (e) {
                        y = !0, v = e;
                    } finally {
                        try {
                            !m && _.return && _.return();
                        } finally {
                            if (y) throw v;
                        }
                    }
                }
                return null;
            },
            insertChild: function(e, t, i) {
                for (var n = 0; n < t.children.length; n++) t.children[n].name == i && t.insertChild(e, n);
            },
            IsNumer: function(e) {
                return "number" == typeof e && !isNaN(e);
            },
            autoReleaseInstantiate: function(e) {
                if (cc.isValid(e)) {
                    var i = cc.instantiate(e);
                    if (e instanceof cc.Prefab) i.addComponent(t("twAutoRelease")).initPrefab(e); else if (e instanceof cc.Node) {
                        var n = i.getComponent(t("twAutoRelease"));
                        n && n.prefab && c.retainRes(n.prefab);
                    }
                    return i;
                }
                console.log("global autoReleaseInstantiate, prefab is invaild.");
            },
            getDroidhangBiSession: function() {
                for (var e = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], t = "", i = 0; i < 10; i++) t += e[Math.ceil(35 * Math.random())];
                return t;
            },
            activeTopUI: function(e) {
                var t = cc.find("Canvas/topUI");
                t && (t.active = e);
            },
            randomIndex: function(e, t, i) {
                for (var n = [], a = [], o = e; o <= t; o++) n.push(o);
                for (var s = 0; s < i; s++) {
                    var r = this.randomInt(n.length - 1, 0);
                    a.push(n[r]), n.splice(r, 1);
                }
                return a;
            },
            randomSelect: function(e, t) {
                t = t || e.length;
                var i = this.randomIndex(0, e.length - 1, t), n = [], a = !0, o = !1, s = void 0;
                try {
                    for (var r, c = i[Symbol.iterator](); !(a = (r = c.next()).done); a = !0) {
                        var h = r.value;
                        n.push(e[h]);
                    }
                } catch (e) {
                    o = !0, s = e;
                } finally {
                    try {
                        !a && c.return && c.return();
                    } finally {
                        if (o) throw s;
                    }
                }
                return n;
            },
            setTimer: function(e, t, i) {
                t.timeLeft = e, t.schedule(function e() {
                    cc.isValid(t.node) && t.gaming && t.timeLeft > 0 && !t.pause && (t.timeLeft--, i.string = t.timeLeft, 
                    t.timeLeft <= 0 && (t.gaming = !1, t.gameOver(!1), t.timeLabel.unschedule(e)));
                }, 1);
            },
            equal: function(e, t) {
                return Math.abs(e - t) < .001;
            },
            destroyAllChildren: function(e) {
                if (cc.isValid(e, !0)) for (var t = e._children, i = t.length - 1; i >= 0; i--) {
                    var n = t[i];
                    cc.isValid(n, !0) && (n.removeFromParent(), n.destroy());
                }
            },
            isQQAndroidOnly: function() {
                if ("undefined" == typeof qq) return !1;
                var e = !1;
                try {
                    var t = qq.getSystemInfoSync();
                    "android" != t.platform && "devtools" != t.platform || (e = !0);
                } catch (t) {
                    console.log("isQQAndroidOnly error ", t), e = !0;
                }
                return e;
            },
            isWxPCOnly: function() {
                var e = !1;
                if (this.isWxOnly() && wx.getSystemInfoSync) {
                    var t = wx.getSystemInfoSync();
                    t && "windows" == t.platform && (e = !0);
                }
                return e;
            }
        };
        i.exports = c, cc._RF.pop();
    }, {
        Dolls: void 0,
        MailData: "MailData",
        SceneModule: "SceneModule",
        ViewModule: "ViewModule",
        config: "config",
        flowerData: "flowerData",
        localize: "localize",
        memorialData: "memorialData",
        netManager: "netManager",
        twAutoRelease: "twAutoRelease",
        twSprite: "twSprite",
        userData: "userData"
    } ],
    hotUpdateRepair: [ function(e, t, i) {
        cc._RF.push(t, "a4f00bTXDFJoo9Hqbb5s2wA", "hotUpdateRepair");
        var n = e("global");
        cc.Class({
            extends: cc.Component,
            properties: {},
            repair: function() {
                var e = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "restaurant-hot-update/";
                jsb.fileUtils.isDirectoryExist(e) && (localStorage.removeItem("HotUpdateSearchPaths"), 
                jsb.fileUtils.removeDirectory(e)), localStorage.removeItem("HotUpdateVersion_twgame"), 
                n.gameRestart();
            }
        }), cc._RF.pop();
    }, {
        global: "global"
    } ],
    hotUpdate: [ function(e, t, i) {
        cc._RF.push(t, "3c79aAvMwREO4bbjxohlVM1", "hotUpdate");
        var n = e("global"), a = e("byteArryMd5");
        cc.Class({
            extends: cc.Component,
            properties: {
                manifestUrl: {
                    type: cc.Asset,
                    default: null
                },
                _updating: !1,
                _storagePath: ""
            },
            init: function(e, t) {
                this.checkCallBack = e, this.updateCallBack = t;
            },
            checkCb: function(e) {
                var t = 0;
                switch (e.getEventCode()) {
                  case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    console.log("No local manifest file found, hot update skipped."), t = -1;
                    break;

                  case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    console.log("Fail to download manifest file, hot update skipped."), t = -1;
                    break;

                  case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    console.log("Fail to parse manifest file, hot update skipped."), t = -1;
                    break;

                  case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    console.log("Already up to date with the latest remote version."), t = 1;
                    break;

                  case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    console.log("New version found, please try to update."), t = 0;
                    break;

                  default:
                    return;
                }
                this._am.setEventCallback(null), this._updating = !1, this.checkCallBack(t);
            },
            updateCb: function(e) {
                var t = !1, i = !1;
                switch (e.getEventCode()) {
                  case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    console.log("No local manifest file found, hot update skipped.'"), i = !0;
                    break;

                  case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                    var a = e.getMessage();
                    a && console.log("Updated file: " + a);
                    var o = 0;
                    e.getTotalBytes() > 0 && (o = e.getDownloadedBytes() / e.getTotalBytes()), this.updateCallBack(0, o, e.getDownloadedBytes(), e.getTotalBytes());
                    break;

                  case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    console.log("Fail to download manifest file, hot update skipped."), i = !0;
                    break;

                  case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    console.log("Fail to parse manifest file, hot update skipped."), i = !0;
                    break;

                  case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    console.log("Already up to date with the latest remote version."), i = !0;
                    break;

                  case jsb.EventAssetsManager.UPDATE_FINISHED:
                    console.log("Update finished. " + e.getMessage()), t = !0;
                    break;

                  case jsb.EventAssetsManager.UPDATE_FAILED:
                    console.log("Update failed. " + e.getMessage()), i = !0;
                    break;

                  case jsb.EventAssetsManager.ERROR_UPDATING:
                    console.log("Asset update error: " + e.getAssetId() + ", " + e.getMessage()), i = !0;
                    break;

                  case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                    console.log("ERROR_DECOMPRESS: ", e.getMessage()), i = !0;
                }
                if (i && (this._am.setEventCallback(null), this._updating = !1, this.updateCallBack(-1)), 
                t) {
                    this._am.setEventCallback(null);
                    var s = jsb.fileUtils.getSearchPaths(), r = this._am.getLocalManifest().getSearchPaths();
                    Array.prototype.unshift.apply(s, r), cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(s)), 
                    jsb.fileUtils.setSearchPaths(s), console.log("newPaths: ", r), n.gameRestart();
                }
            },
            checkUpdate: function() {
                if (console.log("checkUpdate"), !this._updating) {
                    if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                        var e = this.manifestUrl.nativeUrl;
                        cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), this._am.loadLocalManifest(e);
                    }
                    this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded() ? (this._am.setEventCallback(this.checkCb.bind(this)), 
                    this._am.checkUpdate(), this._updating = !0) : console.log("Failed to load local manifest ...");
                }
            },
            hotUpdate: function() {
                if (console.log("hotUpdate"), this._am && !this._updating) {
                    if (this._am.setEventCallback(this.updateCb.bind(this)), this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                        var e = this.manifestUrl.nativeUrl;
                        cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), this._am.loadLocalManifest(e);
                    }
                    this._failCount = 0, this._am.update(), this._updating = !0;
                }
            },
            onLoad: function() {
                n.isNativeOnly() && (this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "restaurant-hot-update", 
                this.versionCompareHandle = function(e, t) {
                    console.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
                    for (var i = e.split("."), n = t.split("."), a = 0; a < i.length; ++a) {
                        var o = parseInt(i[a]), s = parseInt(n[a] || 0);
                        if (o !== s) return o - s;
                    }
                    return n.length > i.length ? -1 : 0;
                }, this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle), 
                this._am.setVerifyCallback(function(e, t) {
                    var i = t.compressed, n = t.md5, o = t.path;
                    if (i) return !0;
                    var s = jsb.fileUtils.getDataFromFile(e), r = a(s);
                    return n === r || (console.log("Verification fail : " + o + " (" + n + ") (" + r + ")"), 
                    !1);
                }), cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2), this.checkUpdate());
            },
            onDestroy: function() {
                this._am.setEventCallback(null);
            }
        }), cc._RF.pop();
    }, {
        byteArryMd5: "byteArryMd5",
        global: "global"
    } ],
    jsencrypt: [ function(t, i, n) {
        cc._RF.push(i, "69d44s9YvhOC6BkdgWkxgms", "jsencrypt");
        var a = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        };
        (function(e, t) {
            "object" === (void 0 === n ? "undefined" : a(n)) && void 0 !== i ? t(n) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t((void 0).JSEncrypt = {});
        })(0, function(e) {
            function t(e) {
                return D.charAt(e);
            }
            function i(e, t) {
                return e & t;
            }
            function n(e, t) {
                return e | t;
            }
            function a(e, t) {
                return e ^ t;
            }
            function o(e, t) {
                return e & ~t;
            }
            function s(e) {
                if (0 == e) return -1;
                var t = 0;
                return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 
                0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, 
                t;
            }
            function r(e) {
                for (var t = 0; 0 != e; ) e &= e - 1, ++t;
                return t;
            }
            function c(e) {
                var t, i, n = "";
                for (t = 0; t + 3 <= e.length; t += 3) i = parseInt(e.substring(t, t + 3), 16), 
                n += A.charAt(i >> 6) + A.charAt(63 & i);
                for (t + 1 == e.length ? (i = parseInt(e.substring(t, t + 1), 16), n += A.charAt(i << 2)) : t + 2 == e.length && (i = parseInt(e.substring(t, t + 2), 16), 
                n += A.charAt(i >> 2) + A.charAt((3 & i) << 4)); (3 & n.length) > 0; ) n += M;
                return n;
            }
            function h(e) {
                var i, n = "", a = 0, o = 0;
                for (i = 0; i < e.length && e.charAt(i) != M; ++i) {
                    var s = A.indexOf(e.charAt(i));
                    s < 0 || (0 == a ? (n += t(s >> 2), o = 3 & s, a = 1) : 1 == a ? (n += t(o << 2 | s >> 4), 
                    o = 15 & s, a = 2) : 2 == a ? (n += t(o), n += t(s >> 2), o = 3 & s, a = 3) : (n += t(o << 2 | s >> 4), 
                    n += t(15 & s), a = 0));
                }
                return 1 == a && (n += t(o << 2)), n;
            }
            function l(e, t) {
                function i() {
                    this.constructor = e;
                }
                I(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, 
                new i());
            }
            function u(e, t) {
                return e.length > t && (e = e.substring(0, t) + P), e;
            }
            function d() {
                return new G(null);
            }
            function f(e, t) {
                return new G(e, t);
            }
            function g(e, t) {
                var i = J[e.charCodeAt(t)];
                return null == i ? -1 : i;
            }
            function p(e) {
                var t = d();
                return t.fromInt(e), t;
            }
            function m(e) {
                var t, i = 1;
                return 0 != (t = e >>> 16) && (e = t, i += 16), 0 != (t = e >> 8) && (e = t, i += 8), 
                0 != (t = e >> 4) && (e = t, i += 4), 0 != (t = e >> 2) && (e = t, i += 2), 0 != (t = e >> 1) && (e = t, 
                i += 1), i;
            }
            function y() {
                if (null == Y) {
                    for (Y = new X(); Q < Z; ) {
                        var e = Math.floor(65536 * Math.random());
                        $[Q++] = 255 & e;
                    }
                    for (Y.init($), Q = 0; Q < $.length; ++Q) $[Q] = 0;
                    Q = 0;
                }
                return Y.next();
            }
            function v(e, t) {
                if (t < e.length + 22) return console.error("Message too long for RSA"), null;
                for (var i = t - e.length - 6, n = "", a = 0; a < i; a += 2) n += "ff";
                return f("0001" + n + "00" + e, 16);
            }
            function b(e, t) {
                if (t < e.length + 11) return console.error("Message too long for RSA"), null;
                for (var i = [], n = e.length - 1; n >= 0 && t > 0; ) {
                    var a = e.charCodeAt(n--);
                    a < 128 ? i[--t] = a : a > 127 && a < 2048 ? (i[--t] = 63 & a | 128, i[--t] = a >> 6 | 192) : (i[--t] = 63 & a | 128, 
                    i[--t] = a >> 6 & 63 | 128, i[--t] = a >> 12 | 224);
                }
                i[--t] = 0;
                for (var o = new ae(), s = []; t > 2; ) {
                    for (s[0] = 0; 0 == s[0]; ) o.nextBytes(s);
                    i[--t] = s[0];
                }
                return i[--t] = 2, i[--t] = 0, new G(i);
            }
            function _(e, t) {
                for (var i = e.toByteArray(), n = 0; n < i.length && 0 == i[n]; ) ++n;
                if (i.length - n != t - 1 || 2 != i[n]) return null;
                for (++n; 0 != i[n]; ) if (++n >= i.length) return null;
                for (var a = ""; ++n < i.length; ) {
                    var o = 255 & i[n];
                    o < 128 ? a += String.fromCharCode(o) : o > 191 && o < 224 ? (a += String.fromCharCode((31 & o) << 6 | 63 & i[n + 1]), 
                    ++n) : (a += String.fromCharCode((15 & o) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), 
                    n += 2);
                }
                return a;
            }
            function w(e) {
                return se[e] || "";
            }
            function S(e) {
                for (var t in se) if (se.hasOwnProperty(t)) {
                    var i = se[t], n = i.length;
                    if (e.substr(0, n) == i) return e.substr(n);
                }
                return e;
            }
            var T, k, x, D = "0123456789abcdefghijklmnopqrstuvwxyz", A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", M = "=", I = function(e, t) {
                return (I = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                })(e, t);
            }, C = function(e) {
                var t;
                if (void 0 === T) {
                    var i = "0123456789ABCDEF", n = " \f\n\r\t \u2028\u2029";
                    for (T = {}, t = 0; t < 16; ++t) T[i.charAt(t)] = t;
                    for (i = i.toLowerCase(), t = 10; t < 16; ++t) T[i.charAt(t)] = t;
                    for (t = 0; t < n.length; ++t) T[n.charAt(t)] = -1;
                }
                var a = [], o = 0, s = 0;
                for (t = 0; t < e.length; ++t) {
                    var r = e.charAt(t);
                    if ("=" == r) break;
                    if (-1 != (r = T[r])) {
                        if (void 0 === r) throw new Error("Illegal character at offset " + t);
                        o |= r, ++s >= 2 ? (a[a.length] = o, o = 0, s = 0) : o <<= 4;
                    }
                }
                if (s) throw new Error("Hex encoding incomplete: 4 bits missing");
                return a;
            }, R = {
                decode: function(e) {
                    var t;
                    if (void 0 === k) {
                        var i = "= \f\n\r\t \u2028\u2029";
                        for (k = Object.create(null), t = 0; t < 64; ++t) k["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                        for (t = 0; t < i.length; ++t) k[i.charAt(t)] = -1;
                    }
                    var n = [], a = 0, o = 0;
                    for (t = 0; t < e.length; ++t) {
                        var s = e.charAt(t);
                        if ("=" == s) break;
                        if (-1 != (s = k[s])) {
                            if (void 0 === s) throw new Error("Illegal character at offset " + t);
                            a |= s, ++o >= 4 ? (n[n.length] = a >> 16, n[n.length] = a >> 8 & 255, n[n.length] = 255 & a, 
                            a = 0, o = 0) : a <<= 6;
                        }
                    }
                    switch (o) {
                      case 1:
                        throw new Error("Base64 encoding incomplete: at least 2 bits missing");

                      case 2:
                        n[n.length] = a >> 10;
                        break;

                      case 3:
                        n[n.length] = a >> 16, n[n.length] = a >> 8 & 255;
                    }
                    return n;
                },
                re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                unarmor: function(e) {
                    var t = R.re.exec(e);
                    if (t) if (t[1]) e = t[1]; else {
                        if (!t[2]) throw new Error("RegExp out of sync");
                        e = t[2];
                    }
                    return R.decode(e);
                }
            }, W = function() {
                function e(e) {
                    this.buf = [ +e || 0 ];
                }
                return e.prototype.mulAdd = function(e, t) {
                    var i, n, a = this.buf, o = a.length;
                    for (i = 0; i < o; ++i) (n = a[i] * e + t) < 1e13 ? t = 0 : n -= 1e13 * (t = 0 | n / 1e13), 
                    a[i] = n;
                    t > 0 && (a[i] = t);
                }, e.prototype.sub = function(e) {
                    var t, i, n = this.buf, a = n.length;
                    for (t = 0; t < a; ++t) (i = n[t] - e) < 0 ? (i += 1e13, e = 1) : e = 0, n[t] = i;
                    for (;0 === n[n.length - 1]; ) n.pop();
                }, e.prototype.toString = function(e) {
                    if (10 != (e || 10)) throw new Error("only base 10 is supported");
                    for (var t = this.buf, i = t[t.length - 1].toString(), n = t.length - 2; n >= 0; --n) i += (1e13 + t[n]).toString().substring(1);
                    return i;
                }, e.prototype.valueOf = function() {
                    for (var e = this.buf, t = 0, i = e.length - 1; i >= 0; --i) t = 1e13 * t + e[i];
                    return t;
                }, e.prototype.simplify = function() {
                    var e = this.buf;
                    return 1 == e.length ? e[0] : this;
                }, e;
            }(), P = "…", O = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, L = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, N = function() {
                function e(t, i) {
                    this.hexDigits = "0123456789ABCDEF", t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, 
                    this.pos = i);
                }
                return e.prototype.get = function(e) {
                    if (void 0 === e && (e = this.pos++), e >= this.enc.length) throw new Error("Requesting byte offset " + e + " on a stream of length " + this.enc.length);
                    return "string" == typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e];
                }, e.prototype.hexByte = function(e) {
                    return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e);
                }, e.prototype.hexDump = function(e, t, i) {
                    for (var n = "", a = e; a < t; ++a) if (n += this.hexByte(this.get(a)), !0 !== i) switch (15 & a) {
                      case 7:
                        n += "  ";
                        break;

                      case 15:
                        n += "\n";
                        break;

                      default:
                        n += " ";
                    }
                    return n;
                }, e.prototype.isASCII = function(e, t) {
                    for (var i = e; i < t; ++i) {
                        var n = this.get(i);
                        if (n < 32 || n > 176) return !1;
                    }
                    return !0;
                }, e.prototype.parseStringISO = function(e, t) {
                    for (var i = "", n = e; n < t; ++n) i += String.fromCharCode(this.get(n));
                    return i;
                }, e.prototype.parseStringUTF = function(e, t) {
                    for (var i = "", n = e; n < t; ) {
                        var a = this.get(n++);
                        i += a < 128 ? String.fromCharCode(a) : a > 191 && a < 224 ? String.fromCharCode((31 & a) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & a) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++));
                    }
                    return i;
                }, e.prototype.parseStringBMP = function(e, t) {
                    for (var i, n, a = "", o = e; o < t; ) i = this.get(o++), n = this.get(o++), a += String.fromCharCode(i << 8 | n);
                    return a;
                }, e.prototype.parseTime = function(e, t, i) {
                    var n = this.parseStringISO(e, t), a = (i ? O : L).exec(n);
                    return a ? (i && (a[1] = +a[1], a[1] += +a[1] < 70 ? 2e3 : 1900), n = a[1] + "-" + a[2] + "-" + a[3] + " " + a[4], 
                    a[5] && (n += ":" + a[5], a[6] && (n += ":" + a[6], a[7] && (n += "." + a[7]))), 
                    a[8] && (n += " UTC", "Z" != a[8] && (n += a[8], a[9] && (n += ":" + a[9]))), n) : "Unrecognized time: " + n;
                }, e.prototype.parseInteger = function(e, t) {
                    for (var i, n = this.get(e), a = n > 127, o = a ? 255 : 0, s = ""; n == o && ++e < t; ) n = this.get(e);
                    if (0 == (i = t - e)) return a ? -1 : 0;
                    if (i > 4) {
                        for (s = n, i <<= 3; 0 == (128 & (+s ^ o)); ) s = +s << 1, --i;
                        s = "(" + i + " bit)\n";
                    }
                    a && (n -= 256);
                    for (var r = new W(n), c = e + 1; c < t; ++c) r.mulAdd(256, this.get(c));
                    return s + r.toString();
                }, e.prototype.parseBitString = function(e, t, i) {
                    for (var n = this.get(e), a = "(" + ((t - e - 1 << 3) - n) + " bit)\n", o = "", s = e + 1; s < t; ++s) {
                        for (var r = this.get(s), c = s == t - 1 ? n : 0, h = 7; h >= c; --h) o += r >> h & 1 ? "1" : "0";
                        if (o.length > i) return a + u(o, i);
                    }
                    return a + o;
                }, e.prototype.parseOctetString = function(e, t, i) {
                    if (this.isASCII(e, t)) return u(this.parseStringISO(e, t), i);
                    var n = t - e, a = "(" + n + " byte)\n";
                    n > (i /= 2) && (t = e + i);
                    for (var o = e; o < t; ++o) a += this.hexByte(this.get(o));
                    return n > i && (a += P), a;
                }, e.prototype.parseOID = function(e, t, i) {
                    for (var n = "", a = new W(), o = 0, s = e; s < t; ++s) {
                        var r = this.get(s);
                        if (a.mulAdd(128, 127 & r), o += 7, !(128 & r)) {
                            if ("" === n) if ((a = a.simplify()) instanceof W) a.sub(80), n = "2." + a.toString(); else {
                                var c = a < 80 ? a < 40 ? 0 : 1 : 2;
                                n = c + "." + (a - 40 * c);
                            } else n += "." + a.toString();
                            if (n.length > i) return u(n, i);
                            a = new W(), o = 0;
                        }
                    }
                    return o > 0 && (n += ".incomplete"), n;
                }, e;
            }(), B = function() {
                function e(e, t, i, n, a) {
                    if (!(n instanceof F)) throw new Error("Invalid tag value.");
                    this.stream = e, this.header = t, this.length = i, this.tag = n, this.sub = a;
                }
                return e.prototype.typeName = function() {
                    switch (this.tag.tagClass) {
                      case 0:
                        switch (this.tag.tagNumber) {
                          case 0:
                            return "EOC";

                          case 1:
                            return "BOOLEAN";

                          case 2:
                            return "INTEGER";

                          case 3:
                            return "BIT_STRING";

                          case 4:
                            return "OCTET_STRING";

                          case 5:
                            return "NULL";

                          case 6:
                            return "OBJECT_IDENTIFIER";

                          case 7:
                            return "ObjectDescriptor";

                          case 8:
                            return "EXTERNAL";

                          case 9:
                            return "REAL";

                          case 10:
                            return "ENUMERATED";

                          case 11:
                            return "EMBEDDED_PDV";

                          case 12:
                            return "UTF8String";

                          case 16:
                            return "SEQUENCE";

                          case 17:
                            return "SET";

                          case 18:
                            return "NumericString";

                          case 19:
                            return "PrintableString";

                          case 20:
                            return "TeletexString";

                          case 21:
                            return "VideotexString";

                          case 22:
                            return "IA5String";

                          case 23:
                            return "UTCTime";

                          case 24:
                            return "GeneralizedTime";

                          case 25:
                            return "GraphicString";

                          case 26:
                            return "VisibleString";

                          case 27:
                            return "GeneralString";

                          case 28:
                            return "UniversalString";

                          case 30:
                            return "BMPString";
                        }
                        return "Universal_" + this.tag.tagNumber.toString();

                      case 1:
                        return "Application_" + this.tag.tagNumber.toString();

                      case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";

                      case 3:
                        return "Private_" + this.tag.tagNumber.toString();
                    }
                }, e.prototype.content = function(e) {
                    if (void 0 === this.tag) return null;
                    void 0 === e && (e = 1 / 0);
                    var t = this.posContent(), i = Math.abs(this.length);
                    if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + i, e);
                    switch (this.tag.tagNumber) {
                      case 1:
                        return 0 === this.stream.get(t) ? "false" : "true";

                      case 2:
                        return this.stream.parseInteger(t, t + i);

                      case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + i, e);

                      case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + i, e);

                      case 6:
                        return this.stream.parseOID(t, t + i, e);

                      case 16:
                      case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

                      case 12:
                        return u(this.stream.parseStringUTF(t, t + i), e);

                      case 18:
                      case 19:
                      case 20:
                      case 21:
                      case 22:
                      case 26:
                        return u(this.stream.parseStringISO(t, t + i), e);

                      case 30:
                        return u(this.stream.parseStringBMP(t, t + i), e);

                      case 23:
                      case 24:
                        return this.stream.parseTime(t, t + i, 23 == this.tag.tagNumber);
                    }
                    return null;
                }, e.prototype.toString = function() {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
                }, e.prototype.toPrettyString = function(e) {
                    void 0 === e && (e = "");
                    var t = e + this.typeName() + " @" + this.stream.pos;
                    if (this.length >= 0 && (t += "+"), t += this.length, this.tag.tagConstructed ? t += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (t += " (encapsulates)"), 
                    t += "\n", null !== this.sub) {
                        e += "  ";
                        for (var i = 0, n = this.sub.length; i < n; ++i) t += this.sub[i].toPrettyString(e);
                    }
                    return t;
                }, e.prototype.posStart = function() {
                    return this.stream.pos;
                }, e.prototype.posContent = function() {
                    return this.stream.pos + this.header;
                }, e.prototype.posEnd = function() {
                    return this.stream.pos + this.header + Math.abs(this.length);
                }, e.prototype.toHexString = function() {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
                }, e.decodeLength = function(e) {
                    var t = e.get(), i = 127 & t;
                    if (i == t) return i;
                    if (i > 6) throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
                    if (0 === i) return null;
                    t = 0;
                    for (var n = 0; n < i; ++n) t = 256 * t + e.get();
                    return t;
                }, e.prototype.getHexStringValue = function() {
                    var e = this.toHexString(), t = 2 * this.header, i = 2 * this.length;
                    return e.substr(t, i);
                }, e.decode = function(t) {
                    var i;
                    i = t instanceof N ? t : new N(t, 0);
                    var n = new N(i), a = new F(i), o = e.decodeLength(i), s = i.pos, r = s - n.pos, c = null, h = function() {
                        var t = [];
                        if (null !== o) {
                            for (var n = s + o; i.pos < n; ) t[t.length] = e.decode(i);
                            if (i.pos != n) throw new Error("Content size is not correct for container starting at offset " + s);
                        } else try {
                            for (;;) {
                                var a = e.decode(i);
                                if (a.tag.isEOC()) break;
                                t[t.length] = a;
                            }
                            o = s - i.pos;
                        } catch (e) {
                            throw new Error("Exception while decoding undefined length content: " + e);
                        }
                        return t;
                    };
                    if (a.tagConstructed) c = h(); else if (a.isUniversal() && (3 == a.tagNumber || 4 == a.tagNumber)) try {
                        if (3 == a.tagNumber && 0 != i.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        c = h();
                        for (var l = 0; l < c.length; ++l) if (c[l].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                    } catch (e) {
                        c = null;
                    }
                    if (null === c) {
                        if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                        i.pos = s + Math.abs(o);
                    }
                    return new e(n, r, o, a, c);
                }, e;
            }(), F = function() {
                function e(e) {
                    var t = e.get();
                    if (this.tagClass = t >> 6, this.tagConstructed = 0 != (32 & t), this.tagNumber = 31 & t, 
                    31 == this.tagNumber) {
                        var i = new W();
                        do {
                            t = e.get(), i.mulAdd(128, 127 & t);
                        } while (128 & t);
                        this.tagNumber = i.simplify();
                    }
                }
                return e.prototype.isUniversal = function() {
                    return 0 === this.tagClass;
                }, e.prototype.isEOC = function() {
                    return 0 === this.tagClass && 0 === this.tagNumber;
                }, e;
            }(), E = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], V = (1 << 26) / E[E.length - 1], G = function() {
                function e(e, t, i) {
                    null != e && ("number" == typeof e ? this.fromNumber(e, t, i) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t));
                }
                return e.prototype.toString = function(e) {
                    if (this.s < 0) return "-" + this.negate().toString(e);
                    var i;
                    if (16 == e) i = 4; else if (8 == e) i = 3; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
                        if (4 != e) return this.toRadix(e);
                        i = 2;
                    }
                    var n, a = (1 << i) - 1, o = !1, s = "", r = this.t, c = this.DB - r * this.DB % i;
                    if (r-- > 0) for (c < this.DB && (n = this[r] >> c) > 0 && (o = !0, s = t(n)); r >= 0; ) c < i ? (n = (this[r] & (1 << c) - 1) << i - c, 
                    n |= this[--r] >> (c += this.DB - i)) : (n = this[r] >> (c -= i) & a, c <= 0 && (c += this.DB, 
                    --r)), n > 0 && (o = !0), o && (s += t(n));
                    return o ? s : "0";
                }, e.prototype.negate = function() {
                    var t = d();
                    return e.ZERO.subTo(this, t), t;
                }, e.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this;
                }, e.prototype.compareTo = function(e) {
                    var t = this.s - e.s;
                    if (0 != t) return t;
                    var i = this.t;
                    if (0 != (t = i - e.t)) return this.s < 0 ? -t : t;
                    for (;--i >= 0; ) if (0 != (t = this[i] - e[i])) return t;
                    return 0;
                }, e.prototype.bitLength = function() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + m(this[this.t - 1] ^ this.s & this.DM);
                }, e.prototype.mod = function(t) {
                    var i = d();
                    return this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(e.ZERO) > 0 && t.subTo(i, i), 
                    i;
                }, e.prototype.modPowInt = function(e, t) {
                    var i;
                    return i = e < 256 || t.isEven() ? new U(t) : new q(t), this.exp(e, i);
                }, e.prototype.clone = function() {
                    var e = d();
                    return this.copyTo(e), e;
                }, e.prototype.intValue = function() {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1;
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0;
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
                }, e.prototype.byteValue = function() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24;
                }, e.prototype.shortValue = function() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16;
                }, e.prototype.signum = function() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
                }, e.prototype.toByteArray = function() {
                    var e = this.t, t = [];
                    t[0] = this.s;
                    var i, n = this.DB - e * this.DB % 8, a = 0;
                    if (e-- > 0) for (n < this.DB && (i = this[e] >> n) != (this.s & this.DM) >> n && (t[a++] = i | this.s << this.DB - n); e >= 0; ) n < 8 ? (i = (this[e] & (1 << n) - 1) << 8 - n, 
                    i |= this[--e] >> (n += this.DB - 8)) : (i = this[e] >> (n -= 8) & 255, n <= 0 && (n += this.DB, 
                    --e)), 0 != (128 & i) && (i |= -256), 0 == a && (128 & this.s) != (128 & i) && ++a, 
                    (a > 0 || i != this.s) && (t[a++] = i);
                    return t;
                }, e.prototype.equals = function(e) {
                    return 0 == this.compareTo(e);
                }, e.prototype.min = function(e) {
                    return this.compareTo(e) < 0 ? this : e;
                }, e.prototype.max = function(e) {
                    return this.compareTo(e) > 0 ? this : e;
                }, e.prototype.and = function(e) {
                    var t = d();
                    return this.bitwiseTo(e, i, t), t;
                }, e.prototype.or = function(e) {
                    var t = d();
                    return this.bitwiseTo(e, n, t), t;
                }, e.prototype.xor = function(e) {
                    var t = d();
                    return this.bitwiseTo(e, a, t), t;
                }, e.prototype.andNot = function(e) {
                    var t = d();
                    return this.bitwiseTo(e, o, t), t;
                }, e.prototype.not = function() {
                    for (var e = d(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                    return e.t = this.t, e.s = ~this.s, e;
                }, e.prototype.shiftLeft = function(e) {
                    var t = d();
                    return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
                }, e.prototype.shiftRight = function(e) {
                    var t = d();
                    return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
                }, e.prototype.getLowestSetBit = function() {
                    for (var e = 0; e < this.t; ++e) if (0 != this[e]) return e * this.DB + s(this[e]);
                    return this.s < 0 ? this.t * this.DB : -1;
                }, e.prototype.bitCount = function() {
                    for (var e = 0, t = this.s & this.DM, i = 0; i < this.t; ++i) e += r(this[i] ^ t);
                    return e;
                }, e.prototype.testBit = function(e) {
                    var t = Math.floor(e / this.DB);
                    return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB);
                }, e.prototype.setBit = function(e) {
                    return this.changeBit(e, n);
                }, e.prototype.clearBit = function(e) {
                    return this.changeBit(e, o);
                }, e.prototype.flipBit = function(e) {
                    return this.changeBit(e, a);
                }, e.prototype.add = function(e) {
                    var t = d();
                    return this.addTo(e, t), t;
                }, e.prototype.subtract = function(e) {
                    var t = d();
                    return this.subTo(e, t), t;
                }, e.prototype.multiply = function(e) {
                    var t = d();
                    return this.multiplyTo(e, t), t;
                }, e.prototype.divide = function(e) {
                    var t = d();
                    return this.divRemTo(e, t, null), t;
                }, e.prototype.remainder = function(e) {
                    var t = d();
                    return this.divRemTo(e, null, t), t;
                }, e.prototype.divideAndRemainder = function(e) {
                    var t = d(), i = d();
                    return this.divRemTo(e, t, i), [ t, i ];
                }, e.prototype.modPow = function(e, t) {
                    var i, n, a = e.bitLength(), o = p(1);
                    if (a <= 0) return o;
                    i = a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6, n = a < 8 ? new U(t) : t.isEven() ? new K(t) : new q(t);
                    var s = [], r = 3, c = i - 1, h = (1 << i) - 1;
                    if (s[1] = n.convert(this), i > 1) {
                        var l = d();
                        for (n.sqrTo(s[1], l); r <= h; ) s[r] = d(), n.mulTo(l, s[r - 2], s[r]), r += 2;
                    }
                    var u, f, g = e.t - 1, y = !0, v = d();
                    for (a = m(e[g]) - 1; g >= 0; ) {
                        for (a >= c ? u = e[g] >> a - c & h : (u = (e[g] & (1 << a + 1) - 1) << c - a, g > 0 && (u |= e[g - 1] >> this.DB + a - c)), 
                        r = i; 0 == (1 & u); ) u >>= 1, --r;
                        if ((a -= r) < 0 && (a += this.DB, --g), y) s[u].copyTo(o), y = !1; else {
                            for (;r > 1; ) n.sqrTo(o, v), n.sqrTo(v, o), r -= 2;
                            r > 0 ? n.sqrTo(o, v) : (f = o, o = v, v = f), n.mulTo(v, s[u], o);
                        }
                        for (;g >= 0 && 0 == (e[g] & 1 << a); ) n.sqrTo(o, v), f = o, o = v, v = f, --a < 0 && (a = this.DB - 1, 
                        --g);
                    }
                    return n.revert(o);
                }, e.prototype.modInverse = function(t) {
                    var i = t.isEven();
                    if (this.isEven() && i || 0 == t.signum()) return e.ZERO;
                    for (var n = t.clone(), a = this.clone(), o = p(1), s = p(0), r = p(0), c = p(1); 0 != n.signum(); ) {
                        for (;n.isEven(); ) n.rShiftTo(1, n), i ? (o.isEven() && s.isEven() || (o.addTo(this, o), 
                        s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                        for (;a.isEven(); ) a.rShiftTo(1, a), i ? (r.isEven() && c.isEven() || (r.addTo(this, r), 
                        c.subTo(t, c)), r.rShiftTo(1, r)) : c.isEven() || c.subTo(t, c), c.rShiftTo(1, c);
                        n.compareTo(a) >= 0 ? (n.subTo(a, n), i && o.subTo(r, o), s.subTo(c, s)) : (a.subTo(n, a), 
                        i && r.subTo(o, r), c.subTo(s, c));
                    }
                    return 0 != a.compareTo(e.ONE) ? e.ZERO : c.compareTo(t) >= 0 ? c.subtract(t) : c.signum() < 0 ? (c.addTo(t, c), 
                    c.signum() < 0 ? c.add(t) : c) : c;
                }, e.prototype.pow = function(e) {
                    return this.exp(e, new j());
                }, e.prototype.gcd = function(e) {
                    var t = this.s < 0 ? this.negate() : this.clone(), i = e.s < 0 ? e.negate() : e.clone();
                    if (t.compareTo(i) < 0) {
                        var n = t;
                        t = i, i = n;
                    }
                    var a = t.getLowestSetBit(), o = i.getLowestSetBit();
                    if (o < 0) return t;
                    for (a < o && (o = a), o > 0 && (t.rShiftTo(o, t), i.rShiftTo(o, i)); t.signum() > 0; ) (a = t.getLowestSetBit()) > 0 && t.rShiftTo(a, t), 
                    (a = i.getLowestSetBit()) > 0 && i.rShiftTo(a, i), t.compareTo(i) >= 0 ? (t.subTo(i, t), 
                    t.rShiftTo(1, t)) : (i.subTo(t, i), i.rShiftTo(1, i));
                    return o > 0 && i.lShiftTo(o, i), i;
                }, e.prototype.isProbablePrime = function(e) {
                    var t, i = this.abs();
                    if (1 == i.t && i[0] <= E[E.length - 1]) {
                        for (t = 0; t < E.length; ++t) if (i[0] == E[t]) return !0;
                        return !1;
                    }
                    if (i.isEven()) return !1;
                    for (t = 1; t < E.length; ) {
                        for (var n = E[t], a = t + 1; a < E.length && n < V; ) n *= E[a++];
                        for (n = i.modInt(n); t < a; ) if (n % E[t++] == 0) return !1;
                    }
                    return i.millerRabin(e);
                }, e.prototype.copyTo = function(e) {
                    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                    e.t = this.t, e.s = this.s;
                }, e.prototype.fromInt = function(e) {
                    this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
                }, e.prototype.fromString = function(t, i) {
                    var n;
                    if (16 == i) n = 4; else if (8 == i) n = 3; else if (256 == i) n = 8; else if (2 == i) n = 1; else if (32 == i) n = 5; else {
                        if (4 != i) return void this.fromRadix(t, i);
                        n = 2;
                    }
                    this.t = 0, this.s = 0;
                    for (var a = t.length, o = !1, s = 0; --a >= 0; ) {
                        var r = 8 == n ? 255 & +t[a] : g(t, a);
                        r < 0 ? "-" == t.charAt(a) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = r : s + n > this.DB ? (this[this.t - 1] |= (r & (1 << this.DB - s) - 1) << s, 
                        this[this.t++] = r >> this.DB - s) : this[this.t - 1] |= r << s, (s += n) >= this.DB && (s -= this.DB));
                    }
                    8 == n && 0 != (128 & +t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
                    this.clamp(), o && e.ZERO.subTo(this, this);
                }, e.prototype.clamp = function() {
                    for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) --this.t;
                }, e.prototype.dlShiftTo = function(e, t) {
                    var i;
                    for (i = this.t - 1; i >= 0; --i) t[i + e] = this[i];
                    for (i = e - 1; i >= 0; --i) t[i] = 0;
                    t.t = this.t + e, t.s = this.s;
                }, e.prototype.drShiftTo = function(e, t) {
                    for (var i = e; i < this.t; ++i) t[i - e] = this[i];
                    t.t = Math.max(this.t - e, 0), t.s = this.s;
                }, e.prototype.lShiftTo = function(e, t) {
                    for (var i = e % this.DB, n = this.DB - i, a = (1 << n) - 1, o = Math.floor(e / this.DB), s = this.s << i & this.DM, r = this.t - 1; r >= 0; --r) t[r + o + 1] = this[r] >> n | s, 
                    s = (this[r] & a) << i;
                    for (r = o - 1; r >= 0; --r) t[r] = 0;
                    t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp();
                }, e.prototype.rShiftTo = function(e, t) {
                    t.s = this.s;
                    var i = Math.floor(e / this.DB);
                    if (i >= this.t) t.t = 0; else {
                        var n = e % this.DB, a = this.DB - n, o = (1 << n) - 1;
                        t[0] = this[i] >> n;
                        for (var s = i + 1; s < this.t; ++s) t[s - i - 1] |= (this[s] & o) << a, t[s - i] = this[s] >> n;
                        n > 0 && (t[this.t - i - 1] |= (this.s & o) << a), t.t = this.t - i, t.clamp();
                    }
                }, e.prototype.subTo = function(e, t) {
                    for (var i = 0, n = 0, a = Math.min(e.t, this.t); i < a; ) n += this[i] - e[i], 
                    t[i++] = n & this.DM, n >>= this.DB;
                    if (e.t < this.t) {
                        for (n -= e.s; i < this.t; ) n += this[i], t[i++] = n & this.DM, n >>= this.DB;
                        n += this.s;
                    } else {
                        for (n += this.s; i < e.t; ) n -= e[i], t[i++] = n & this.DM, n >>= this.DB;
                        n -= e.s;
                    }
                    t.s = n < 0 ? -1 : 0, n < -1 ? t[i++] = this.DV + n : n > 0 && (t[i++] = n), t.t = i, 
                    t.clamp();
                }, e.prototype.multiplyTo = function(t, i) {
                    var n = this.abs(), a = t.abs(), o = n.t;
                    for (i.t = o + a.t; --o >= 0; ) i[o] = 0;
                    for (o = 0; o < a.t; ++o) i[o + n.t] = n.am(0, a[o], i, o, 0, n.t);
                    i.s = 0, i.clamp(), this.s != t.s && e.ZERO.subTo(i, i);
                }, e.prototype.squareTo = function(e) {
                    for (var t = this.abs(), i = e.t = 2 * t.t; --i >= 0; ) e[i] = 0;
                    for (i = 0; i < t.t - 1; ++i) {
                        var n = t.am(i, t[i], e, 2 * i, 0, 1);
                        (e[i + t.t] += t.am(i + 1, 2 * t[i], e, 2 * i + 1, n, t.t - i - 1)) >= t.DV && (e[i + t.t] -= t.DV, 
                        e[i + t.t + 1] = 1);
                    }
                    e.t > 0 && (e[e.t - 1] += t.am(i, t[i], e, 2 * i, 0, 1)), e.s = 0, e.clamp();
                }, e.prototype.divRemTo = function(t, i, n) {
                    var a = t.abs();
                    if (!(a.t <= 0)) {
                        var o = this.abs();
                        if (o.t < a.t) return null != i && i.fromInt(0), void (null != n && this.copyTo(n));
                        null == n && (n = d());
                        var s = d(), r = this.s, c = t.s, h = this.DB - m(a[a.t - 1]);
                        h > 0 ? (a.lShiftTo(h, s), o.lShiftTo(h, n)) : (a.copyTo(s), o.copyTo(n));
                        var l = s.t, u = s[l - 1];
                        if (0 != u) {
                            var f = u * (1 << this.F1) + (l > 1 ? s[l - 2] >> this.F2 : 0), g = this.FV / f, p = (1 << this.F1) / f, y = 1 << this.F2, v = n.t, b = v - l, _ = null == i ? d() : i;
                            for (s.dlShiftTo(b, _), n.compareTo(_) >= 0 && (n[n.t++] = 1, n.subTo(_, n)), e.ONE.dlShiftTo(l, _), 
                            _.subTo(s, s); s.t < l; ) s[s.t++] = 0;
                            for (;--b >= 0; ) {
                                var w = n[--v] == u ? this.DM : Math.floor(n[v] * g + (n[v - 1] + y) * p);
                                if ((n[v] += s.am(0, w, n, b, 0, l)) < w) for (s.dlShiftTo(b, _), n.subTo(_, n); n[v] < --w; ) n.subTo(_, n);
                            }
                            null != i && (n.drShiftTo(l, i), r != c && e.ZERO.subTo(i, i)), n.t = l, n.clamp(), 
                            h > 0 && n.rShiftTo(h, n), r < 0 && e.ZERO.subTo(n, n);
                        }
                    }
                }, e.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var e = this[0];
                    if (0 == (1 & e)) return 0;
                    var t = 3 & e;
                    return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t;
                }, e.prototype.isEven = function() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s);
                }, e.prototype.exp = function(t, i) {
                    if (t > 4294967295 || t < 1) return e.ONE;
                    var n = d(), a = d(), o = i.convert(this), s = m(t) - 1;
                    for (o.copyTo(n); --s >= 0; ) if (i.sqrTo(n, a), (t & 1 << s) > 0) i.mulTo(a, o, n); else {
                        var r = n;
                        n = a, a = r;
                    }
                    return i.revert(n);
                }, e.prototype.chunkSize = function(e) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(e));
                }, e.prototype.toRadix = function(e) {
                    if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
                    var t = this.chunkSize(e), i = Math.pow(e, t), n = p(i), a = d(), o = d(), s = "";
                    for (this.divRemTo(n, a, o); a.signum() > 0; ) s = (i + o.intValue()).toString(e).substr(1) + s, 
                    a.divRemTo(n, a, o);
                    return o.intValue().toString(e) + s;
                }, e.prototype.fromRadix = function(t, i) {
                    this.fromInt(0), null == i && (i = 10);
                    for (var n = this.chunkSize(i), a = Math.pow(i, n), o = !1, s = 0, r = 0, c = 0; c < t.length; ++c) {
                        var h = g(t, c);
                        h < 0 ? "-" == t.charAt(c) && 0 == this.signum() && (o = !0) : (r = i * r + h, ++s >= n && (this.dMultiply(a), 
                        this.dAddOffset(r, 0), s = 0, r = 0));
                    }
                    s > 0 && (this.dMultiply(Math.pow(i, s)), this.dAddOffset(r, 0)), o && e.ZERO.subTo(this, this);
                }, e.prototype.fromNumber = function(t, i, a) {
                    if ("number" == typeof i) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, a), 
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), n, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); ) this.dAddOffset(2, 0), 
                    this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this); else {
                        var o = [], s = 7 & t;
                        o.length = 1 + (t >> 3), i.nextBytes(o), s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0, 
                        this.fromString(o, 256);
                    }
                }, e.prototype.bitwiseTo = function(e, t, i) {
                    var n, a, o = Math.min(e.t, this.t);
                    for (n = 0; n < o; ++n) i[n] = t(this[n], e[n]);
                    if (e.t < this.t) {
                        for (a = e.s & this.DM, n = o; n < this.t; ++n) i[n] = t(this[n], a);
                        i.t = this.t;
                    } else {
                        for (a = this.s & this.DM, n = o; n < e.t; ++n) i[n] = t(a, e[n]);
                        i.t = e.t;
                    }
                    i.s = t(this.s, e.s), i.clamp();
                }, e.prototype.changeBit = function(t, i) {
                    var n = e.ONE.shiftLeft(t);
                    return this.bitwiseTo(n, i, n), n;
                }, e.prototype.addTo = function(e, t) {
                    for (var i = 0, n = 0, a = Math.min(e.t, this.t); i < a; ) n += this[i] + e[i], 
                    t[i++] = n & this.DM, n >>= this.DB;
                    if (e.t < this.t) {
                        for (n += e.s; i < this.t; ) n += this[i], t[i++] = n & this.DM, n >>= this.DB;
                        n += this.s;
                    } else {
                        for (n += this.s; i < e.t; ) n += e[i], t[i++] = n & this.DM, n >>= this.DB;
                        n += e.s;
                    }
                    t.s = n < 0 ? -1 : 0, n > 0 ? t[i++] = n : n < -1 && (t[i++] = this.DV + n), t.t = i, 
                    t.clamp();
                }, e.prototype.dMultiply = function(e) {
                    this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
                }, e.prototype.dAddOffset = function(e, t) {
                    if (0 != e) {
                        for (;this.t <= t; ) this[this.t++] = 0;
                        for (this[t] += e; this[t] >= this.DV; ) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), 
                        ++this[t];
                    }
                }, e.prototype.multiplyLowerTo = function(e, t, i) {
                    var n = Math.min(this.t + e.t, t);
                    for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0;
                    for (var a = i.t - this.t; n < a; ++n) i[n + this.t] = this.am(0, e[n], i, n, 0, this.t);
                    for (a = Math.min(e.t, t); n < a; ++n) this.am(0, e[n], i, n, 0, t - n);
                    i.clamp();
                }, e.prototype.multiplyUpperTo = function(e, t, i) {
                    --t;
                    var n = i.t = this.t + e.t - t;
                    for (i.s = 0; --n >= 0; ) i[n] = 0;
                    for (n = Math.max(t - this.t, 0); n < e.t; ++n) i[this.t + n - t] = this.am(t - n, e[n], i, 0, 0, this.t + n - t);
                    i.clamp(), i.drShiftTo(1, i);
                }, e.prototype.modInt = function(e) {
                    if (e <= 0) return 0;
                    var t = this.DV % e, i = this.s < 0 ? e - 1 : 0;
                    if (this.t > 0) if (0 == t) i = this[0] % e; else for (var n = this.t - 1; n >= 0; --n) i = (t * i + this[n]) % e;
                    return i;
                }, e.prototype.millerRabin = function(t) {
                    var i = this.subtract(e.ONE), n = i.getLowestSetBit();
                    if (n <= 0) return !1;
                    var a = i.shiftRight(n);
                    (t = t + 1 >> 1) > E.length && (t = E.length);
                    for (var o = d(), s = 0; s < t; ++s) {
                        o.fromInt(E[Math.floor(Math.random() * E.length)]);
                        var r = o.modPow(a, this);
                        if (0 != r.compareTo(e.ONE) && 0 != r.compareTo(i)) {
                            for (var c = 1; c++ < n && 0 != r.compareTo(i); ) if (0 == (r = r.modPowInt(2, this)).compareTo(e.ONE)) return !1;
                            if (0 != r.compareTo(i)) return !1;
                        }
                    }
                    return !0;
                }, e.prototype.square = function() {
                    var e = d();
                    return this.squareTo(e), e;
                }, e.prototype.gcda = function(e, t) {
                    var i = this.s < 0 ? this.negate() : this.clone(), n = e.s < 0 ? e.negate() : e.clone();
                    if (i.compareTo(n) < 0) {
                        var a = i;
                        i = n, n = a;
                    }
                    var o = i.getLowestSetBit(), s = n.getLowestSetBit();
                    s < 0 ? t(i) : (o < s && (s = o), s > 0 && (i.rShiftTo(s, i), n.rShiftTo(s, n)), 
                    setTimeout(function e() {
                        (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i), (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n), 
                        i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)), 
                        i.signum() > 0 ? setTimeout(e, 0) : (s > 0 && n.lShiftTo(s, n), setTimeout(function() {
                            t(n);
                        }, 0));
                    }, 10));
                }, e.prototype.fromNumberAsync = function(t, i, a, o) {
                    if ("number" == typeof i) if (t < 2) this.fromInt(1); else {
                        this.fromNumber(t, a), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), n, this), 
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this;
                        setTimeout(function n() {
                            s.dAddOffset(2, 0), s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s), s.isProbablePrime(i) ? setTimeout(function() {
                                o();
                            }, 0) : setTimeout(n, 0);
                        }, 0);
                    } else {
                        var r = [], c = 7 & t;
                        r.length = 1 + (t >> 3), i.nextBytes(r), c > 0 ? r[0] &= (1 << c) - 1 : r[0] = 0, 
                        this.fromString(r, 256);
                    }
                }, e;
            }(), j = function() {
                function e() {}
                return e.prototype.convert = function(e) {
                    return e;
                }, e.prototype.revert = function(e) {
                    return e;
                }, e.prototype.mulTo = function(e, t, i) {
                    e.multiplyTo(t, i);
                }, e.prototype.sqrTo = function(e, t) {
                    e.squareTo(t);
                }, e;
            }(), U = function() {
                function e(e) {
                    this.m = e;
                }
                return e.prototype.convert = function(e) {
                    return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
                }, e.prototype.revert = function(e) {
                    return e;
                }, e.prototype.reduce = function(e) {
                    e.divRemTo(this.m, null, e);
                }, e.prototype.mulTo = function(e, t, i) {
                    e.multiplyTo(t, i), this.reduce(i);
                }, e.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t);
                }, e;
            }(), q = function() {
                function e(e) {
                    this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
                    this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
                }
                return e.prototype.convert = function(e) {
                    var t = d();
                    return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(G.ZERO) > 0 && this.m.subTo(t, t), 
                    t;
                }, e.prototype.revert = function(e) {
                    var t = d();
                    return e.copyTo(t), this.reduce(t), t;
                }, e.prototype.reduce = function(e) {
                    for (;e.t <= this.mt2; ) e[e.t++] = 0;
                    for (var t = 0; t < this.m.t; ++t) {
                        var i = 32767 & e[t], n = i * this.mpl + ((i * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                        for (e[i = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[i] >= e.DV; ) e[i] -= e.DV, 
                        e[++i]++;
                    }
                    e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
                }, e.prototype.mulTo = function(e, t, i) {
                    e.multiplyTo(t, i), this.reduce(i);
                }, e.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t);
                }, e;
            }(), K = function() {
                function e(e) {
                    this.m = e, this.r2 = d(), this.q3 = d(), G.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e);
                }
                return e.prototype.convert = function(e) {
                    if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                    if (e.compareTo(this.m) < 0) return e;
                    var t = d();
                    return e.copyTo(t), this.reduce(t), t;
                }, e.prototype.revert = function(e) {
                    return e;
                }, e.prototype.reduce = function(e) {
                    for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, 
                    e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; ) e.dAddOffset(1, this.m.t + 1);
                    for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) e.subTo(this.m, e);
                }, e.prototype.mulTo = function(e, t, i) {
                    e.multiplyTo(t, i), this.reduce(i);
                }, e.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t);
                }, e;
            }();
            "Microsoft Internet Explorer" == navigator.appName ? (G.prototype.am = function(e, t, i, n, a, o) {
                for (var s = 32767 & t, r = t >> 15; --o >= 0; ) {
                    var c = 32767 & this[e], h = this[e++] >> 15, l = r * c + h * s;
                    a = ((c = s * c + ((32767 & l) << 15) + i[n] + (1073741823 & a)) >>> 30) + (l >>> 15) + r * h + (a >>> 30), 
                    i[n++] = 1073741823 & c;
                }
                return a;
            }, x = 30) : "Netscape" != navigator.appName ? (G.prototype.am = function(e, t, i, n, a, o) {
                for (;--o >= 0; ) {
                    var s = t * this[e++] + i[n] + a;
                    a = Math.floor(s / 67108864), i[n++] = 67108863 & s;
                }
                return a;
            }, x = 26) : (G.prototype.am = function(e, t, i, n, a, o) {
                for (var s = 16383 & t, r = t >> 14; --o >= 0; ) {
                    var c = 16383 & this[e], h = this[e++] >> 14, l = r * c + h * s;
                    a = ((c = s * c + ((16383 & l) << 14) + i[n] + a) >> 28) + (l >> 14) + r * h, i[n++] = 268435455 & c;
                }
                return a;
            }, x = 28), G.prototype.DB = x, G.prototype.DM = (1 << x) - 1, G.prototype.DV = 1 << x, 
            G.prototype.FV = Math.pow(2, 52), G.prototype.F1 = 52 - x, G.prototype.F2 = 2 * x - 52;
            var z, H, J = [];
            for (z = "0".charCodeAt(0), H = 0; H <= 9; ++H) J[z++] = H;
            for (z = "a".charCodeAt(0), H = 10; H < 36; ++H) J[z++] = H;
            for (z = "A".charCodeAt(0), H = 10; H < 36; ++H) J[z++] = H;
            G.ZERO = p(0), G.ONE = p(1);
            var Y, Q, X = function() {
                function e() {
                    this.i = 0, this.j = 0, this.S = [];
                }
                return e.prototype.init = function(e) {
                    var t, i, n;
                    for (t = 0; t < 256; ++t) this.S[t] = t;
                    for (i = 0, t = 0; t < 256; ++t) i = i + this.S[t] + e[t % e.length] & 255, n = this.S[t], 
                    this.S[t] = this.S[i], this.S[i] = n;
                    this.i = 0, this.j = 0;
                }, e.prototype.next = function() {
                    var e;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], 
                    this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
                }, e;
            }(), Z = 256, $ = null, ee = 0;
            if (null == $) {
                $ = [], Q = 0;
                var te = void 0;
                if (window.crypto && window.crypto.getRandomValues) {
                    var ie = new Uint32Array(256);
                    for (window.crypto.getRandomValues(ie), te = 0; te < ie.length; ++te) $[Q++] = 255 & ie[te];
                }
                var ne = function e(t) {
                    if (ee >= 256 || Q >= Z) window.removeEventListener ? window.removeEventListener("mousemove", e, !1) : window.detachEvent && window.detachEvent("onmousemove", e); else try {
                        var i = t.x + t.y;
                        $[Q++] = 255 & i, ee += 1;
                    } catch (e) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", ne, !1) : window.attachEvent && window.attachEvent("onmousemove", ne);
            }
            var ae = function() {
                function e() {}
                return e.prototype.nextBytes = function(e) {
                    for (var t = 0; t < e.length; ++t) e[t] = y();
                }, e;
            }(), oe = function() {
                function e() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
                    this.dmq1 = null, this.coeff = null;
                }
                return e.prototype.doPublic = function(e) {
                    return e.modPowInt(this.e, this.n);
                }, e.prototype.doPrivate = function(e) {
                    if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
                    for (var t = e.mod(this.p).modPow(this.dmp1, this.p), i = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(i) < 0; ) t = t.add(this.p);
                    return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
                }, e.prototype.setPublic = function(e, t) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = f(e, 16), this.e = parseInt(t, 16)) : console.error("Invalid RSA public key");
                }, e.prototype.encrypt = function(e) {
                    var t = b(e, this.n.bitLength() + 7 >> 3);
                    if (null == t) return null;
                    var i = this.doPublic(t);
                    if (null == i) return null;
                    var n = i.toString(16);
                    return 0 == (1 & n.length) ? n : "0" + n;
                }, e.prototype.setPrivate = function(e, t, i) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = f(e, 16), this.e = parseInt(t, 16), 
                    this.d = f(i, 16)) : console.error("Invalid RSA private key");
                }, e.prototype.setPrivateEx = function(e, t, i, n, a, o, s, r) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = f(e, 16), this.e = parseInt(t, 16), 
                    this.d = f(i, 16), this.p = f(n, 16), this.q = f(a, 16), this.dmp1 = f(o, 16), this.dmq1 = f(s, 16), 
                    this.coeff = f(r, 16)) : console.error("Invalid RSA private key");
                }, e.prototype.generate = function(e, t) {
                    var i = new ae(), n = e >> 1;
                    this.e = parseInt(t, 16);
                    for (var a = new G(t, 16); ;) {
                        for (;this.p = new G(e - n, 1, i), 0 != this.p.subtract(G.ONE).gcd(a).compareTo(G.ONE) || !this.p.isProbablePrime(10); ) ;
                        for (;this.q = new G(n, 1, i), 0 != this.q.subtract(G.ONE).gcd(a).compareTo(G.ONE) || !this.q.isProbablePrime(10); ) ;
                        if (this.p.compareTo(this.q) <= 0) {
                            var o = this.p;
                            this.p = this.q, this.q = o;
                        }
                        var s = this.p.subtract(G.ONE), r = this.q.subtract(G.ONE), c = s.multiply(r);
                        if (0 == c.gcd(a).compareTo(G.ONE)) {
                            this.n = this.p.multiply(this.q), this.d = a.modInverse(c), this.dmp1 = this.d.mod(s), 
                            this.dmq1 = this.d.mod(r), this.coeff = this.q.modInverse(this.p);
                            break;
                        }
                    }
                }, e.prototype.decrypt = function(e) {
                    var t = f(e, 16), i = this.doPrivate(t);
                    return null == i ? null : _(i, this.n.bitLength() + 7 >> 3);
                }, e.prototype.generateAsync = function(e, t, i) {
                    var n = new ae(), a = e >> 1;
                    this.e = parseInt(t, 16);
                    var o = new G(t, 16), s = this;
                    setTimeout(function t() {
                        var r = function() {
                            if (s.p.compareTo(s.q) <= 0) {
                                var e = s.p;
                                s.p = s.q, s.q = e;
                            }
                            var n = s.p.subtract(G.ONE), a = s.q.subtract(G.ONE), r = n.multiply(a);
                            0 == r.gcd(o).compareTo(G.ONE) ? (s.n = s.p.multiply(s.q), s.d = o.modInverse(r), 
                            s.dmp1 = s.d.mod(n), s.dmq1 = s.d.mod(a), s.coeff = s.q.modInverse(s.p), setTimeout(function() {
                                i();
                            }, 0)) : setTimeout(t, 0);
                        }, c = function e() {
                            s.q = d(), s.q.fromNumberAsync(a, 1, n, function() {
                                s.q.subtract(G.ONE).gcda(o, function(t) {
                                    0 == t.compareTo(G.ONE) && s.q.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(e, 0);
                                });
                            });
                        };
                        setTimeout(function t() {
                            s.p = d(), s.p.fromNumberAsync(e - a, 1, n, function() {
                                s.p.subtract(G.ONE).gcda(o, function(e) {
                                    0 == e.compareTo(G.ONE) && s.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(t, 0);
                                });
                            });
                        }, 0);
                    }, 0);
                }, e.prototype.sign = function(e, t, i) {
                    var n = v(w(i) + t(e).toString(), this.n.bitLength() / 4);
                    if (null == n) return null;
                    var a = this.doPrivate(n);
                    if (null == a) return null;
                    var o = a.toString(16);
                    return 0 == (1 & o.length) ? o : "0" + o;
                }, e.prototype.verify = function(e, t, i) {
                    var n = f(t, 16), a = this.doPublic(n);
                    return null == a ? null : S(a.toString(16).replace(/^1f+00/, "")) == i(e).toString();
                }, e;
            }(), se = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            }, re = {};
            re.lang = {
                extend: function(e, t, i) {
                    if (!t || !e) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var n = function() {};
                    if (n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e, 
                    e.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t), 
                    i) {
                        var a;
                        for (a in i) e.prototype[a] = i[a];
                        var o = function() {}, s = [ "toString", "valueOf" ];
                        try {
                            /MSIE/.test(navigator.userAgent) && (o = function(e, t) {
                                for (a = 0; a < s.length; a += 1) {
                                    var i = s[a], n = t[i];
                                    "function" == typeof n && n != Object.prototype[i] && (e[i] = n);
                                }
                            });
                        } catch (e) {}
                        o(e.prototype, i);
                    }
                }
            };
            var ce = {};
            void 0 !== ce.asn1 && ce.asn1 || (ce.asn1 = {}), ce.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(e) {
                    var t = e.toString(16);
                    return t.length % 2 == 1 && (t = "0" + t), t;
                }, this.bigIntToMinTwosComplementsHex = function(e) {
                    var t = e.toString(16);
                    if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t); else {
                        var i = t.substr(1).length;
                        i % 2 == 1 ? i += 1 : t.match(/^[0-7]/) || (i += 2);
                        for (var n = "", a = 0; a < i; a++) n += "f";
                        t = new G(n, 16).xor(e).add(G.ONE).toString(16).replace(/^-/, "");
                    }
                    return t;
                }, this.getPEMStringFromHex = function(e, t) {
                    return hextopem(e, t);
                }, this.newObject = function(e) {
                    var t = ce.asn1, i = t.DERBoolean, n = t.DERInteger, a = t.DERBitString, o = t.DEROctetString, s = t.DERNull, r = t.DERObjectIdentifier, c = t.DEREnumerated, h = t.DERUTF8String, l = t.DERNumericString, u = t.DERPrintableString, d = t.DERTeletexString, f = t.DERIA5String, g = t.DERUTCTime, p = t.DERGeneralizedTime, m = t.DERSequence, y = t.DERSet, v = t.DERTaggedObject, b = t.ASN1Util.newObject, _ = Object.keys(e);
                    if (1 != _.length) throw "key of param shall be only one.";
                    var w = _[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":")) throw "undefined key: " + w;
                    if ("bool" == w) return new i(e[w]);
                    if ("int" == w) return new n(e[w]);
                    if ("bitstr" == w) return new a(e[w]);
                    if ("octstr" == w) return new o(e[w]);
                    if ("null" == w) return new s(e[w]);
                    if ("oid" == w) return new r(e[w]);
                    if ("enum" == w) return new c(e[w]);
                    if ("utf8str" == w) return new h(e[w]);
                    if ("numstr" == w) return new l(e[w]);
                    if ("prnstr" == w) return new u(e[w]);
                    if ("telstr" == w) return new d(e[w]);
                    if ("ia5str" == w) return new f(e[w]);
                    if ("utctime" == w) return new g(e[w]);
                    if ("gentime" == w) return new p(e[w]);
                    if ("seq" == w) {
                        for (var S = e[w], T = [], k = 0; k < S.length; k++) {
                            var x = b(S[k]);
                            T.push(x);
                        }
                        return new m({
                            array: T
                        });
                    }
                    if ("set" == w) {
                        for (S = e[w], T = [], k = 0; k < S.length; k++) x = b(S[k]), T.push(x);
                        return new y({
                            array: T
                        });
                    }
                    if ("tag" == w) {
                        var D = e[w];
                        if ("[object Array]" === Object.prototype.toString.call(D) && 3 == D.length) {
                            var A = b(D[2]);
                            return new v({
                                tag: D[0],
                                explicit: D[1],
                                obj: A
                            });
                        }
                        var M = {};
                        if (void 0 !== D.explicit && (M.explicit = D.explicit), void 0 !== D.tag && (M.tag = D.tag), 
                        void 0 === D.obj) throw "obj shall be specified for 'tag'.";
                        return M.obj = b(D.obj), new v(M);
                    }
                }, this.jsonToASN1HEX = function(e) {
                    return this.newObject(e).getEncodedHex();
                };
            }(), ce.asn1.ASN1Util.oidHexToInt = function(e) {
                for (var t = "", i = parseInt(e.substr(0, 2), 16), n = (t = Math.floor(i / 40) + "." + i % 40, 
                ""), a = 2; a < e.length; a += 2) {
                    var o = ("00000000" + parseInt(e.substr(a, 2), 16).toString(2)).slice(-8);
                    n += o.substr(1, 7), "0" == o.substr(0, 1) && (t = t + "." + new G(n, 2).toString(10), 
                    n = "");
                }
                return t;
            }, ce.asn1.ASN1Util.oidIntToHex = function(e) {
                var t = function(e) {
                    var t = e.toString(16);
                    return 1 == t.length && (t = "0" + t), t;
                };
                if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                var i = "", n = e.split("."), a = 40 * parseInt(n[0]) + parseInt(n[1]);
                i += t(a), n.splice(0, 2);
                for (var o = 0; o < n.length; o++) i += function(e) {
                    var i = "", n = new G(e, 10).toString(2), a = 7 - n.length % 7;
                    7 == a && (a = 0);
                    for (var o = "", s = 0; s < a; s++) o += "0";
                    for (n = o + n, s = 0; s < n.length - 1; s += 7) {
                        var r = n.substr(s, 7);
                        s != n.length - 7 && (r = "1" + r), i += t(parseInt(r, 2));
                    }
                    return i;
                }(n[o]);
                return i;
            }, ce.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var e = this.hV.length / 2, t = e.toString(16);
                    if (t.length % 2 == 1 && (t = "0" + t), e < 128) return t;
                    var i = t.length / 2;
                    if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                    return (128 + i).toString(16) + t;
                }, this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
                    this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
                    this.isModified = !1), this.hTLV;
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV;
                }, this.getFreshValueHex = function() {
                    return "";
                };
            }, ce.asn1.DERAbstractString = function(e) {
                ce.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s;
                }, this.setString = function(e) {
                    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(this.s);
                }, this.setStringHex = function(e) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e ? this.setString(e) : void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex));
            }, re.lang.extend(ce.asn1.DERAbstractString, ce.asn1.ASN1Object), ce.asn1.DERAbstractTime = function(e) {
                ce.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(e) {
                    return utc = e.getTime() + 6e4 * e.getTimezoneOffset(), new Date(utc);
                }, this.formatDate = function(e, t, i) {
                    var n = this.zeroPadding, a = this.localDateToUTC(e), o = String(a.getFullYear());
                    "utc" == t && (o = o.substr(2, 2));
                    var s = o + n(String(a.getMonth() + 1), 2) + n(String(a.getDate()), 2) + n(String(a.getHours()), 2) + n(String(a.getMinutes()), 2) + n(String(a.getSeconds()), 2);
                    if (!0 === i) {
                        var r = a.getMilliseconds();
                        if (0 != r) {
                            var c = n(String(r), 3);
                            s = s + "." + (c = c.replace(/[0]+$/, ""));
                        }
                    }
                    return s + "Z";
                }, this.zeroPadding = function(e, t) {
                    return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e;
                }, this.getString = function() {
                    return this.s;
                }, this.setString = function(e) {
                    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(e);
                }, this.setByDateValue = function(e, t, i, n, a, o) {
                    var s = new Date(Date.UTC(e, t - 1, i, n, a, o, 0));
                    this.setByDate(s);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                };
            }, re.lang.extend(ce.asn1.DERAbstractTime, ce.asn1.ASN1Object), ce.asn1.DERAbstractStructured = function(e) {
                ce.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(e) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = e;
                }, this.appendASN1Object = function(e) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(e);
                }, this.asn1Array = new Array(), void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array);
            }, re.lang.extend(ce.asn1.DERAbstractStructured, ce.asn1.ASN1Object), ce.asn1.DERBoolean = function() {
                ce.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
            }, re.lang.extend(ce.asn1.DERBoolean, ce.asn1.ASN1Object), ce.asn1.DERInteger = function(e) {
                ce.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(e) {
                    this.hTLV = null, this.isModified = !0, this.hV = ce.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
                }, this.setByInteger = function(e) {
                    var t = new G(String(e), 10);
                    this.setByBigInteger(t);
                }, this.setValueHex = function(e) {
                    this.hV = e;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
            }, re.lang.extend(ce.asn1.DERInteger, ce.asn1.ASN1Object), ce.asn1.DERBitString = function(e) {
                if (void 0 !== e && void 0 !== e.obj) {
                    var t = ce.asn1.ASN1Util.newObject(e.obj);
                    e.hex = "00" + t.getEncodedHex();
                }
                ce.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(e) {
                    this.hTLV = null, this.isModified = !0, this.hV = e;
                }, this.setUnusedBitsAndHexValue = function(e, t) {
                    if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
                    var i = "0" + e;
                    this.hTLV = null, this.isModified = !0, this.hV = i + t;
                }, this.setByBinaryString = function(e) {
                    var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                    8 == t && (t = 0);
                    for (var i = 0; i <= t; i++) e += "0";
                    var n = "";
                    for (i = 0; i < e.length - 1; i += 8) {
                        var a = e.substr(i, 8), o = parseInt(a, 2).toString(16);
                        1 == o.length && (o = "0" + o), n += o;
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + t + n;
                }, this.setByBooleanArray = function(e) {
                    for (var t = "", i = 0; i < e.length; i++) 1 == e[i] ? t += "1" : t += "0";
                    this.setByBinaryString(t);
                }, this.newFalseArray = function(e) {
                    for (var t = new Array(e), i = 0; i < e; i++) t[i] = !1;
                    return t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array));
            }, re.lang.extend(ce.asn1.DERBitString, ce.asn1.ASN1Object), ce.asn1.DEROctetString = function(e) {
                if (void 0 !== e && void 0 !== e.obj) {
                    var t = ce.asn1.ASN1Util.newObject(e.obj);
                    e.hex = t.getEncodedHex();
                }
                ce.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04";
            }, re.lang.extend(ce.asn1.DEROctetString, ce.asn1.DERAbstractString), ce.asn1.DERNull = function() {
                ce.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
            }, re.lang.extend(ce.asn1.DERNull, ce.asn1.ASN1Object), ce.asn1.DERObjectIdentifier = function(e) {
                var t = function(e) {
                    var t = e.toString(16);
                    return 1 == t.length && (t = "0" + t), t;
                }, i = function(e) {
                    var i = "", n = new G(e, 10).toString(2), a = 7 - n.length % 7;
                    7 == a && (a = 0);
                    for (var o = "", s = 0; s < a; s++) o += "0";
                    for (n = o + n, s = 0; s < n.length - 1; s += 7) {
                        var r = n.substr(s, 7);
                        s != n.length - 7 && (r = "1" + r), i += t(parseInt(r, 2));
                    }
                    return i;
                };
                ce.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(e) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.setValueOidString = function(e) {
                    if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                    var n = "", a = e.split("."), o = 40 * parseInt(a[0]) + parseInt(a[1]);
                    n += t(o), a.splice(0, 2);
                    for (var s = 0; s < a.length; s++) n += i(a[s]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = n;
                }, this.setValueName = function(e) {
                    var t = ce.asn1.x509.OID.name2oid(e);
                    if ("" === t) throw "DERObjectIdentifier oidName undefined: " + e;
                    this.setValueOidString(t);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name));
            }, re.lang.extend(ce.asn1.DERObjectIdentifier, ce.asn1.ASN1Object), ce.asn1.DEREnumerated = function(e) {
                ce.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(e) {
                    this.hTLV = null, this.isModified = !0, this.hV = ce.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
                }, this.setByInteger = function(e) {
                    var t = new G(String(e), 10);
                    this.setByBigInteger(t);
                }, this.setValueHex = function(e) {
                    this.hV = e;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
            }, re.lang.extend(ce.asn1.DEREnumerated, ce.asn1.ASN1Object), ce.asn1.DERUTF8String = function(e) {
                ce.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c";
            }, re.lang.extend(ce.asn1.DERUTF8String, ce.asn1.DERAbstractString), ce.asn1.DERNumericString = function(e) {
                ce.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12";
            }, re.lang.extend(ce.asn1.DERNumericString, ce.asn1.DERAbstractString), ce.asn1.DERPrintableString = function(e) {
                ce.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13";
            }, re.lang.extend(ce.asn1.DERPrintableString, ce.asn1.DERAbstractString), ce.asn1.DERTeletexString = function(e) {
                ce.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14";
            }, re.lang.extend(ce.asn1.DERTeletexString, ce.asn1.DERAbstractString), ce.asn1.DERIA5String = function(e) {
                ce.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16";
            }, re.lang.extend(ce.asn1.DERIA5String, ce.asn1.DERAbstractString), ce.asn1.DERUTCTime = function(e) {
                ce.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function(e) {
                    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date));
            }, re.lang.extend(ce.asn1.DERUTCTime, ce.asn1.DERAbstractTime), ce.asn1.DERGeneralizedTime = function(e) {
                ce.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", 
                this.withMillis = !1, this.setByDate = function(e) {
                    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date), 
                !0 === e.millis && (this.withMillis = !0));
            }, re.lang.extend(ce.asn1.DERGeneralizedTime, ce.asn1.DERAbstractTime), ce.asn1.DERSequence = function(e) {
                ce.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
                    for (var e = "", t = 0; t < this.asn1Array.length; t++) e += this.asn1Array[t].getEncodedHex();
                    return this.hV = e, this.hV;
                };
            }, re.lang.extend(ce.asn1.DERSequence, ce.asn1.DERAbstractStructured), ce.asn1.DERSet = function(e) {
                ce.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, 
                this.getFreshValueHex = function() {
                    for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                        var i = this.asn1Array[t];
                        e.push(i.getEncodedHex());
                    }
                    return 1 == this.sortFlag && e.sort(), this.hV = e.join(""), this.hV;
                }, void 0 !== e && void 0 !== e.sortflag && 0 == e.sortflag && (this.sortFlag = !1);
            }, re.lang.extend(ce.asn1.DERSet, ce.asn1.DERAbstractStructured), ce.asn1.DERTaggedObject = function(e) {
                ce.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
                this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(e, t, i) {
                    this.hT = t, this.isExplicit = e, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
                    this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
                    this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.tag && (this.hT = e.tag), void 0 !== e.explicit && (this.isExplicit = e.explicit), 
                void 0 !== e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
            }, re.lang.extend(ce.asn1.DERTaggedObject, ce.asn1.ASN1Object);
            var he = function(e) {
                function t(i) {
                    var n = e.call(this) || this;
                    return i && ("string" == typeof i ? n.parseKey(i) : (t.hasPrivateKeyProperty(i) || t.hasPublicKeyProperty(i)) && n.parsePropertiesFrom(i)), 
                    n;
                }
                return l(t, e), t.prototype.parseKey = function(e) {
                    try {
                        var t = 0, i = 0, n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? C(e) : R.unarmor(e), a = B.decode(n);
                        if (3 === a.sub.length && (a = a.sub[2].sub[0]), 9 === a.sub.length) {
                            t = a.sub[1].getHexStringValue(), this.n = f(t, 16), i = a.sub[2].getHexStringValue(), 
                            this.e = parseInt(i, 16);
                            var o = a.sub[3].getHexStringValue();
                            this.d = f(o, 16);
                            var s = a.sub[4].getHexStringValue();
                            this.p = f(s, 16);
                            var r = a.sub[5].getHexStringValue();
                            this.q = f(r, 16);
                            var c = a.sub[6].getHexStringValue();
                            this.dmp1 = f(c, 16);
                            var h = a.sub[7].getHexStringValue();
                            this.dmq1 = f(h, 16);
                            var l = a.sub[8].getHexStringValue();
                            this.coeff = f(l, 16);
                        } else {
                            if (2 !== a.sub.length) return !1;
                            var u = a.sub[1].sub[0];
                            t = u.sub[0].getHexStringValue(), this.n = f(t, 16), i = u.sub[1].getHexStringValue(), 
                            this.e = parseInt(i, 16);
                        }
                        return !0;
                    } catch (e) {
                        return !1;
                    }
                }, t.prototype.getPrivateBaseKey = function() {
                    var e = {
                        array: [ new ce.asn1.DERInteger({
                            int: 0
                        }), new ce.asn1.DERInteger({
                            bigint: this.n
                        }), new ce.asn1.DERInteger({
                            int: this.e
                        }), new ce.asn1.DERInteger({
                            bigint: this.d
                        }), new ce.asn1.DERInteger({
                            bigint: this.p
                        }), new ce.asn1.DERInteger({
                            bigint: this.q
                        }), new ce.asn1.DERInteger({
                            bigint: this.dmp1
                        }), new ce.asn1.DERInteger({
                            bigint: this.dmq1
                        }), new ce.asn1.DERInteger({
                            bigint: this.coeff
                        }) ]
                    };
                    return new ce.asn1.DERSequence(e).getEncodedHex();
                }, t.prototype.getPrivateBaseKeyB64 = function() {
                    return c(this.getPrivateBaseKey());
                }, t.prototype.getPublicBaseKey = function() {
                    var e = new ce.asn1.DERSequence({
                        array: [ new ce.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new ce.asn1.DERNull() ]
                    }), t = new ce.asn1.DERSequence({
                        array: [ new ce.asn1.DERInteger({
                            bigint: this.n
                        }), new ce.asn1.DERInteger({
                            int: this.e
                        }) ]
                    }), i = new ce.asn1.DERBitString({
                        hex: "00" + t.getEncodedHex()
                    });
                    return new ce.asn1.DERSequence({
                        array: [ e, i ]
                    }).getEncodedHex();
                }, t.prototype.getPublicBaseKeyB64 = function() {
                    return c(this.getPublicBaseKey());
                }, t.wordwrap = function(e, t) {
                    if (t = t || 64, !e) return e;
                    var i = "(.{1," + t + "})( +|$\n?)|(.{1," + t + "})";
                    return e.match(RegExp(i, "g")).join("\n");
                }, t.prototype.getPrivateKey = function() {
                    var e = "-----BEGIN RSA PRIVATE KEY-----\n";
                    return e += t.wordwrap(this.getPrivateBaseKeyB64()) + "\n", e += "-----END RSA PRIVATE KEY-----";
                }, t.prototype.getPublicKey = function() {
                    var e = "-----BEGIN PUBLIC KEY-----\n";
                    return e += t.wordwrap(this.getPublicBaseKeyB64()) + "\n", e += "-----END PUBLIC KEY-----";
                }, t.hasPublicKeyProperty = function(e) {
                    return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e");
                }, t.hasPrivateKeyProperty = function(e) {
                    return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff");
                }, t.prototype.parsePropertiesFrom = function(e) {
                    this.n = e.n, this.e = e.e, e.hasOwnProperty("d") && (this.d = e.d, this.p = e.p, 
                    this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
                }, t;
            }(oe), le = function() {
                function e(e) {
                    e = e || {}, this.default_key_size = parseInt(e.default_key_size, 10) || 1024, this.default_public_exponent = e.default_public_exponent || "010001", 
                    this.log = e.log || !1, this.key = null;
                }
                return e.prototype.setKey = function(e) {
                    this.log && this.key && console.warn("A key was already set, overriding existing."), 
                    this.key = new he(e);
                }, e.prototype.setPrivateKey = function(e) {
                    this.setKey(e);
                }, e.prototype.setPublicKey = function(e) {
                    this.setKey(e);
                }, e.prototype.decrypt = function(e) {
                    try {
                        return this.getKey().decrypt(h(e));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.encrypt = function(e) {
                    try {
                        return c(this.getKey().encrypt(e));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.sign = function(e, t, i) {
                    try {
                        return c(this.getKey().sign(e, t, i));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.verify = function(e, t, i) {
                    try {
                        return this.getKey().verify(e, h(t), i);
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.getKey = function(e) {
                    if (!this.key) {
                        if (this.key = new he(), e && "[object Function]" === {}.toString.call(e)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                        this.key.generate(this.default_key_size, this.default_public_exponent);
                    }
                    return this.key;
                }, e.prototype.getPrivateKey = function() {
                    return this.getKey().getPrivateKey();
                }, e.prototype.getPrivateKeyB64 = function() {
                    return this.getKey().getPrivateBaseKeyB64();
                }, e.prototype.getPublicKey = function() {
                    return this.getKey().getPublicKey();
                }, e.prototype.getPublicKeyB64 = function() {
                    return this.getKey().getPublicBaseKeyB64();
                }, e.version = "3.0.0-rc.1", e;
            }();
            window.JSEncrypt = le, e.JSEncrypt = le, e.default = le, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }), cc._RF.pop();
    }, {} ],
    localize: [ function(e, t, i) {
        cc._RF.push(t, "38203/i0DtH4ohHq0PK/yN0", "localize");
        var n = {
            lan: "cn",
            getText: function(t) {
                var i = this[this.lan];
                if ("cn" !== this.lan && (i = e(this.lan)), i[t]) {
                    for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                    return this.replaceAll(i[t], "%s", a);
                }
                return "unknow";
            },
            replaceAll: function(e, t, i) {
                if (i.length <= 0) return e;
                for (var n = e.split(t), a = [], o = 0; o < n.length - 1; o++) a.push(n[o]), a.push(i[o]);
                return a.push(n[n.length - 1]), a.join("");
            }
        };
        t.exports = n, cc._RF.pop();
    }, {} ],
    loginNode: [ function(e, t, i) {
        cc._RF.push(t, "b3a5dXLqCZIwa9/TSf+OOj0", "loginNode");
        var n = e("userData"), a = e("localize"), o = e("global"), s = e("netManager"), r = e("config"), c = e("ViewModule").ins;
        cc.Class({
            extends: cc.Component,
            properties: {
                fbLoginBtn: cc.Node,
                fbLoginLbl: cc.Label,
                wxLoginBtn: cc.Node,
                wxLoginLbl: cc.Label,
                guestLoginBtn: cc.Node,
                guestLoginLbl: cc.Label,
                lineLoginBtn: cc.Node,
                lineLoginLbl: cc.Label,
                appleLoginBtn: cc.Node,
                appleLoginLbl: cc.Label,
                loadingNode: cc.Prefab,
                toggle: cc.Toggle,
                tip: cc.Node
            },
            initAppleLogin: function() {
                if (o.isIosOnly()) {
                    var e = jsb.reflection.callStaticMethod("RootViewController", "isCanAppleLogin");
                    console.log("res apple is ", e), this.appleLoginBtn.active = "1" == e || 1 == e || 1 == e, 
                    this.appleLoginBtn.active = !0, this.appleLoginLbl.string = a.getText("apple_login"), 
                    n.initApple(), this.appleLoginBtn.on("click", function() {
                        this.isWorking || this.isAppleWorking || (this.toggle.isChecked || "inland" != r.app_type ? (this.isAppleWorking = !0, 
                        this.startLoading(), jsb.reflection.callStaticMethod("RootViewController", "appleLogin")) : c.pushView("toastDlg", {
                            content: "请先详细阅读并同意协议！"
                        }, {
                            keep: !0,
                            zIndex: 500
                        }));
                    }, this), this.listenerAry.push(n.addListener("apple_onLogin", function(e, t) {
                        var i = this;
                        this.isAppleWorking = !1, e ? s.nativeAppleLogin(function(e) {
                            i.stopLoading(), o.isAuthing = !1, e ? n.sendMessage("msg_startLoad") : c.pushView("toastDlg", {
                                content: a.getText("toast_string_6")
                            }, {
                                keep: !0,
                                zIndex: 500
                            });
                        }) : e || "iosOld" != t ? (o.isAuthing = !1, this.stopLoading(), c.pushView("toastDlg", {
                            content: a.getText("loginFail")
                        }, {
                            keep: !0,
                            zIndex: 500
                        })) : (o.isAuthing = !1, this.stopLoading(), c.pushView("toastDlg", {
                            content: a.getText("iosSysOld")
                        }, {
                            keep: !0,
                            zIndex: 2e3
                        }));
                    }, this));
                }
            },
            initWxLogin: function() {
                var t = this;
                if (o.isIosOnly()) {
                    var i = jsb.reflection.callStaticMethod("WXApiManager", "isWeChatHas");
                    console.log("res wx is ", i), this.wxLoginBtn.active = "1" == i || 1 == i || 1 == i;
                }
                var r = e("wechatPlatformManager");
                r.loginCallback = function(e) {
                    if (!e || "" == e) return t.isWorking = !1, t.stopLoading(), void c.pushView("toastDlg", {
                        content: a.getText("loginFail")
                    }, {
                        keep: !0,
                        zIndex: 500
                    });
                    r.loginCallback = null, s.nativeWxLogin(e, function(e) {
                        t.stopLoading(), e ? n.sendMessage("msg_startLoad") : (c.pushView("toastDlg", {
                            content: a.getText("toast_string_6")
                        }, {
                            keep: !0,
                            zIndex: 500
                        }), t.isWorking = !1, t.initWxLogin());
                    });
                };
            },
            onLoad: function() {
                "inland" == r.app_type && o.isNativeOnly() && (this.tip.active = !0, this.toggle.node.active = !0), 
                o.fixLabel(this.fbLoginLbl, 400, 120);
                var e = this.node.getChildByName("Logo_Cn"), t = e.getComponent(cc.Sprite), i = void 0;
                "cn" === a.lan ? i = "Home/Logo_Cn" : "cn_2" == a.lan ? i = "Home/cn_2_logo" : "kr" === a.lan ? (i = "Home/kr_logo", 
                t.node.x = 0, t.node.y = 578) : "jp" === a.lan ? (i = "Home/jp_logo", t.node.x = 0) : (i = "Home/en_logo", 
                t.node.scale = .98, t.node.x = 30, t.node.y = 578), o.loadRes(i, cc.SpriteFrame, function(i, n) {
                    i ? console.error(i) : cc.isValid(e) && (t.spriteFrame = n);
                }), this.listenerAry = [], "global" === r.app_type ? (this.wxLoginBtn.active = !1, 
                this.wxLoginLbl.active = !1, this.fbLoginBtn.active = !0, this.fbLoginLbl.active = !0, 
                this.fbLoginLbl.string = a.getText("fb_login"), this.lineLoginBtn.active = !0, this.lineLoginLbl.active = !0, 
                this.lineLoginLbl.string = a.getText("line_login"), o.isAndroidOnly() && (this.guestLoginBtn.y = this.appleLoginBtn.y), 
                this.fbLoginBtn.on("click", function() {
                    this.isFbWorking || this.isLineWorking || (this.isFbWorking = !0, this.startLoading(), 
                    n.nativeFbLogin());
                }, this), this.lineLoginBtn.on("click", function() {
                    this.isFbWorking || this.isLineWorking || (this.isLineWorking = !0, this.startLoading(), 
                    n.nativeLineLogin());
                }, this), this.listenerAry.push(n.addListener("facebook_onLogin", function(e) {
                    var t = this;
                    e ? s.nativeFbLogin(function(e) {
                        t.stopLoading(), o.isAuthing = !1, e ? n.sendMessage("msg_startLoad") : (c.pushView("toastDlg", {
                            content: a.getText("toast_string_6")
                        }, {
                            keep: !0,
                            zIndex: 500
                        }), t.isFbWorking = !1);
                    }) : (o.isAuthing = !1, this.isFbWorking = !1, this.stopLoading(), c.pushView("toastDlg", {
                        content: a.getText("loginFail")
                    }, {
                        keep: !0,
                        zIndex: 500
                    }));
                }, this)), this.listenerAry.push(n.addListener("line_onLogin", function(e) {
                    var t = this;
                    e ? s.nativeLineLogin(function(e) {
                        t.stopLoading(), o.isAuthing = !1, e ? n.sendMessage("msg_startLoad") : (c.pushView("toastDlg", {
                            content: a.getText("toast_string_6")
                        }, {
                            keep: !0,
                            zIndex: 500
                        }), t.isLineWorking = !1);
                    }) : (o.isAuthing = !1, this.isLineWorking = !1, this.stopLoading(), c.pushView("toastDlg", {
                        content: a.getText("loginFail")
                    }, {
                        keep: !0,
                        zIndex: 500
                    }));
                }, this))) : (this.wxLoginBtn.active = !0, this.wxLoginLbl.active = !0, this.fbLoginBtn.active = !1, 
                this.fbLoginLbl.active = !1, this.lineLoginBtn.active = !1, this.lineLoginLbl.active = !1, 
                this.initAppleLogin(), this.wxLoginLbl.string = a.getText("wx_login"), o.fixLabel(this.wxLoginLbl, 400, 120), 
                this.initWxLogin(), this.wxLoginBtn.on("click", function() {
                    if (!this.isWorking && !this.isAppleWorking) if (this.toggle.isChecked || "inland" != r.app_type) {
                        this.isWorking = !0, this.startLoading();
                        var e = o.getRandomString();
                        o.isIosOnly() ? jsb.reflection.callStaticMethod("WXApiManager", "SendAuthRequest:State:", "snsapi_userinfo", e) : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "wxLogin", "()V");
                    } else c.pushView("toastDlg", {
                        content: "请先详细阅读并同意协议！"
                    }, {
                        keep: !0,
                        zIndex: 500
                    });
                }, this)), this.guestLoginLbl.string = a.getText("guestLogin"), o.fixLabel(this.guestLoginLbl, 700, 120), 
                o.isAndroidOnly() && (this.guestLoginBtn.y = this.appleLoginBtn.y), this.guestLoginBtn.on("click", function() {
                    var e = this;
                    this.isGuestWorking || (this.toggle.isChecked || "inland" != r.app_type ? (this.isGuestWorking = !0, 
                    this.startLoading(), s.nativeGuestLogin(function(t) {
                        e.stopLoading(), t ? n.sendMessage("msg_startLoad") : (e.isGuestWorking = !1, c.pushView("toastDlg", {
                            content: a.getText("loginFail")
                        }, {
                            keep: !0,
                            zIndex: 500
                        }));
                    })) : c.pushView("toastDlg", {
                        content: "请先详细阅读并同意协议！"
                    }, {
                        keep: !0,
                        zIndex: 500
                    }));
                }, this);
            },
            start: function() {
                if (o.isAndroidOnly()) {
                    var e = cc.find("Canvas"), t = cc.find("Canvas/Main Camera"), i = new cc.Node();
                    i.parent = t, i.width = 2, i.height = 2;
                    var n = i.addComponent(cc.Widget);
                    return n.target = e, n.isAlignLeft = !0, n.isAlignTop = !0, n.left = 0, n.top = 0, 
                    i.addComponent(cc.Button), void i.on("click", function() {
                        c.pushView("exitGameDlg", null, {
                            zIndex: 1e4
                        });
                    }, this);
                }
            },
            onDestroy: function() {
                for (var e = 0; e < this.listenerAry.length; e++) n.removeListener(this.listenerAry[e]);
                this.listenerAry = null;
            },
            startLoading: function() {
                this.loading = o.autoReleaseInstantiate(this.loadingNode), this.loading.parent = cc.find("Canvas"), 
                this.loading.runAction(cc.sequence(cc.delayTime(120), cc.callFunc(function() {}, this), cc.destroySelf()));
            },
            stopLoading: function() {
                cc.isValid(this.loading) && this.loading.destroy();
            }
        }), cc._RF.pop();
    }, {
        ViewModule: "ViewModule",
        config: "config",
        global: "global",
        localize: "localize",
        netManager: "netManager",
        userData: "userData",
        wechatPlatformManager: "wechatPlatformManager"
    } ],
    memorialData: [ function(e, t, i) {
        cc._RF.push(t, "69351LfpVxCiK9qvcooYg5F", "memorialData");
        var n = {
            init: function() {
                var t = e("userData");
                this.memorialsMap = {}, this.carsMap = {};
                for (var i = 0; i < this.memorials.length; i++) {
                    var n = this.memorials[i].key;
                    if (this.memorials[i].attrs && this.memorials[i].attrs.rewardStar && (this.memorials[i].attrs.rewardStar = t.encryptData(this.memorials[i].attrs.rewardStar)), 
                    this.memorials[i].shareCoin && (this.memorials[i].shareCoin = t.encryptData(this.memorials[i].shareCoin)), 
                    this.memorials[i].capsuleToyWeight && (this.memorials[i].capsuleToyWeight = t.encryptData(this.memorials[i].capsuleToyWeight)), 
                    this.memorials[i].limitDay && this.memorials[i].limitDay.capsuleToyWeight && (this.memorials[i].limitDay.capsuleToyWeight = t.encryptData(this.memorials[i].limitDay.capsuleToyWeight)), 
                    this.memorials[i].headInfo) {
                        var a = "memorial_" + this.memorials[i].headInfo.parentKey + "_" + this.memorials[i].headInfo.headIndex;
                        this.memorialsMap[a] = this.memorials[i];
                    }
                    if (this.memorialsMap[n] = this.memorials[i], this.memorials[i].carInfo) {
                        var o = "car_" + this.memorials[i].carInfo.carIndex;
                        this.carsMap[o] = this.memorials[i];
                        var s = "memorial_employee_13_" + this.memorials[i].headInfo.headIndex;
                        this.memorialsMap[s] = this.memorials[i];
                    }
                    this.carsMap[n] = this.memorials[i];
                }
            }
        };
        t.exports = n, cc._RF.pop();
    }, {
        userData: "userData"
    } ],
    minScale: [ function(e, t, i) {
        cc._RF.push(t, "5ade14TIb9O0Ij1caxyjblS", "minScale"), e("global"), cc.Class({
            extends: cc.Component,
            properties: {
                actionFlag: !1
            },
            fixSize: function() {
                var e = cc.winSize.width / 1242, t = cc.winSize.height / 2688, i = Math.min(e, t);
                this.node.scale = i;
            },
            start: function() {},
            onDestroy: function() {},
            onEnable: function() {
                if (this.fixSize(), this.actionFlag) {
                    var e = this.node.scale;
                    this.node.scale = .2 * e, this.node.runAction(cc.sequence(cc.scaleTo(.2, 1.05 * e), cc.delayTime(.05), cc.scaleTo(.1, e)));
                }
            }
        }), cc._RF.pop();
    }, {
        global: "global"
    } ],
    movementUtil: [ function(e, t, i) {
        cc._RF.push(t, "7f75clhYEBFAp8mDEv1dzh0", "movementUtil");
        for (var n = e("global"), a = e("twQueue"), o = [], s = -1; s <= 1; s++) for (var r = -1; r <= 1; r++) if (0 != s || 0 != r) {
            var c = Math.abs(s) + Math.abs(r);
            2 == c && (c = 1.414), o.push({
                x: s,
                y: r,
                len: c
            });
        }
        cc.Class({
            extends: e("twComponent"),
            properties: {
                speed: 200,
                volume: 1,
                animNode: cc.Node
            },
            converPointToMap: function(e, t) {
                return this.mapManager.converPointToMap(e, t);
            },
            moveWithDir: function(e, t, i) {
                function n() {
                    for (var n = 0; !(h.isEmpty() || ++n > 88); ) {
                        p++;
                        var a = h.popTop(), s = 1e3 * a.x + a.y;
                        if (d[s] = !1, s == g || m > 0 && p > 1e3) {
                            h.clear();
                            break;
                        }
                        for (var r = 0; r < o.length; r++) {
                            var c = a.x + o[r].x, f = a.y + o[r].y, y = 1e3 * c + f;
                            (this.mapManager.checkMove(c, f, this.volume) || y == g) && (null == u[y] || u[y] > u[s] + o[r].len) && (u[y] = u[s] + o[r].len, 
                            l[y] = a, d[y] || (d[y] = !0, h.pushBack({
                                x: c,
                                y: f
                            })), y == g && m++);
                        }
                    }
                    if (h.isEmpty()) if (this.unschedule(this.__bfs), this.__bfs = null, null != u[g]) {
                        for (var v = g, b = []; l[v]; ) b.push(l[v]), v = 1e3 * l[v].x + l[v].y;
                        b.reverse();
                        var _ = 0, w = this;
                        !function n() {
                            if (b[_]) {
                                var a = w.mapManager.converMapToPoint(b[_++]);
                                b[_] || (a = {
                                    x: e,
                                    y: t
                                });
                                var o = a.x - w.node.x, s = a.y - w.node.y, r = cc.v2(o, s).signAngle(cc.v2(0, 1)) / Math.PI * 180;
                                w.animNode.rotation = r;
                                var c = w.cptDistance(a.x, a.y), h = cc.sequence(cc.delayTime(0), cc.moveTo(c / w.speed, a.x, a.y), cc.callFunc(function() {
                                    n();
                                }, w));
                                h.setTag(199872), w.node.runAction(h);
                            } else Math.abs(w.node.x - w.destX) < .1 && Math.abs(w.node.y - w.destY) < .1 ? (w.arrive = !0, 
                            i(0)) : w.sampleMove(w.destX, w.destY, i);
                        }();
                    } else cc.log("@@ error can't find path!!"), this.sampleMove(e, t, i);
                }
                if (this.arrive = !1, this.destX = e, this.destY = t, this.node.stopActionByTag(199872), 
                this.__bfs && (this.unschedule(this.__bfs), this.__bfs = null), i = i.bind(this), 
                Math.abs(this.node.x - e) < .1 && Math.abs(this.node.y - t) < .1) {
                    var s = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                        this.arrive = !0, i(0);
                    }, this));
                    return s.setTag(199872), void this.node.runAction(s);
                }
                var r = this.converPointToMap(this.node.x, this.node.y), c = this.converPointToMap(e, t), h = new a(), l = {}, u = {}, d = {}, f = 1e3 * r.x + r.y;
                u[f] = 0, d[f] = !0, h.pushBack({
                    x: r.x,
                    y: r.y
                });
                var g = 1e3 * c.x + c.y, p = 0, m = 0;
                n = n.bind(this), this.schedule(n, .025), this.__bfs = n;
            },
            move: function(e, t, i) {
                function n() {
                    for (var n = 0; !(c.isEmpty() || ++n > 88); ) {
                        g++;
                        var a = c.popTop(), s = 1e3 * a.x + a.y;
                        if (u[s] = !1, s == f || p > 0 && g > 1e3) {
                            c.clear();
                            break;
                        }
                        for (var r = 0; r < o.length; r++) {
                            var d = a.x + o[r].x, m = a.y + o[r].y, y = 1e3 * d + m;
                            (this.mapManager.checkMove(d, m, this.volume) || y == f) && (null == l[y] || l[y] > l[s] + o[r].len) && (l[y] = l[s] + o[r].len, 
                            h[y] = a, u[y] || (u[y] = !0, c.pushBack({
                                x: d,
                                y: m
                            })), y == f && p++);
                        }
                    }
                    if (c.isEmpty()) if (this.unschedule(this.__bfs), this.__bfs = null, null != l[f]) {
                        for (var v = f, b = []; h[v]; ) b.push(h[v]), v = 1e3 * h[v].x + h[v].y;
                        b.reverse();
                        var _ = 0, w = this;
                        !function n() {
                            if (b[_]) {
                                var a = w.mapManager.converMapToPoint(b[_++]);
                                b[_] || (a = {
                                    x: e,
                                    y: t
                                }), Math.abs(a.x - w.node.x) > 10 && (a.x > w.node.x ? w.setFaceTo(!1) : w.setFaceTo(!0));
                                var o = w.cptDistance(a.x, a.y), s = cc.sequence(cc.moveTo(o / w.speed, a.x, a.y), cc.callFunc(function() {
                                    n();
                                }, w));
                                s.setTag(199872), w.node.runAction(s);
                            } else Math.abs(w.node.x - w.destX) < .1 && Math.abs(w.node.y - w.destY) < .1 ? (w.arrive = !0, 
                            i(0)) : w.sampleMove(w.destX, w.destY, i);
                        }();
                    } else cc.log("@@ error can't find path!!"), this.sampleMove(e, t, i);
                }
                if (this.arrive = !1, this.destX = e, this.destY = t, this.node.stopActionByTag(199872), 
                this.__bfs && (this.unschedule(this.__bfs), this.__bfs = null), i = i.bind(this), 
                Math.abs(this.node.x - e) < .1 && Math.abs(this.node.y - t) < .1) {
                    var a = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                        this.arrive = !0, i(0);
                    }, this));
                    return a.setTag(199872), void this.node.runAction(a);
                }
                var s = this.converPointToMap(this.node.x, this.node.y), r = this.converPointToMap(e, t), c = {
                    dataMap: {},
                    head: null,
                    tail: null,
                    id: 0,
                    isEmpty: function() {
                        return null == this.head;
                    },
                    popTop: function() {
                        if (this.isEmpty()) return null;
                        var e = this.dataMap[this.head];
                        return this.dataMap[this.head] = null, this.head = e.next, null == this.head && (this.tail = null), 
                        e.value;
                    },
                    pushBack: function(e) {
                        var t = {
                            value: e
                        }, i = ++this.id;
                        this.dataMap[i] = t, null == this.head && (this.head = i), null != this.tail && (this.dataMap[this.tail].next = i), 
                        this.tail = i;
                    },
                    clear: function() {
                        this.head = null;
                    }
                }, h = {}, l = {}, u = {}, d = 1e3 * s.x + s.y;
                l[d] = 0, u[d] = !0, c.pushBack({
                    x: s.x,
                    y: s.y
                });
                var f = 1e3 * r.x + r.y, g = 0, p = 0;
                n = n.bind(this), this.schedule(n, .025), this.__bfs = n;
            },
            sampleMove: function(e, t, i) {
                i = i.bind(this), Math.abs(e - this.node.x) > 3 && (e > this.node.x ? this.setFaceTo(!1) : this.setFaceTo(!0)), 
                this.node.stopActionByTag(199872);
                var n = this.cptDistance(e, t), a = cc.sequence(cc.moveTo(n / this.speed, e, t), cc.callFunc(function() {
                    Math.abs(this.node.x - this.destX) < .1 && Math.abs(this.node.y - this.destY) < .1 ? (this.arrive = !0, 
                    i(-1)) : this.sampleMove(this.destX, this.destY, i);
                }, this));
                a.setTag(199872), this.node.runAction(a);
            },
            cptDistance: function(e, t) {
                return Math.sqrt(Math.pow(e - this.node.x, 2) + Math.pow(t - this.node.y, 2));
            },
            updateZIndex: function() {
                null != this.lastY && Math.abs(this.node.y - this.lastY) < .1 || (this.lastY = this.node.y, 
                this.node.zIndex = 5e3 - this.node.y);
            },
            changeDest: function(e, t, i) {
                this.destX = e, this.destY = t, this.arrive && (this.arrive = !1, this.sampleMove(e, t, function() {
                    i && (i = i.bind(this))();
                }));
            },
            setFaceTo: function(e) {
                this.info && this.info.turn && (e = !e), e ? (this.animNode.scaleX = 1, this.animNode.scaleY = 1) : (this.animNode.scaleX = -1, 
                this.animNode.scaleY = 1);
            },
            toBuffetRoom: function(e) {
                var t = this;
                if (e = e.bind(this), this.mapManager != this.gardenManager) if (this.mapManager != this.kitchenManager) if (this.mapManager != this.pondManager) {
                    var i = -230 - 30 * Math.random();
                    this.move(i, -1244, function() {
                        this.changeDest(i, -1314, function() {
                            this.node.runAction(cc.fadeOut(.27)), this.changeDest(i, -1444, function() {
                                var t = cc.find("Canvas/buffetRoom"), a = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "buffetRoom" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = a.x, this.node.y = a.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.27)), this.changeDest(i, 444, function() {
                                    this.mapManager = this.buffetManager, this.buffetRoom = !0, this.kitchen = null, 
                                    this.garden = null, this.pond = null, e();
                                });
                            });
                        });
                    });
                } else this.toGarden(function() {
                    t.toDiningRoom(function() {
                        t.toBuffetRoom(e);
                    });
                }); else this.toDiningRoom(function() {
                    this.toBuffetRoom(e);
                }); else this.toDiningRoom(function() {
                    this.toBuffetRoom(e);
                });
            },
            toKitchenRoom: function(e) {
                var t = this;
                if (e = e.bind(this), this.mapManager != this.gardenManager && this.mapManager != this.buffetManager) if (this.mapManager != this.pondManager) {
                    var i = cc.winSize.width / 1242, a = cc.winSize.height / 2688, o = Math.min(i, a), s = 591 / o, r = -270 - 80 * Math.random();
                    this.move(550, r, function() {
                        this.changeDest(s, r, function() {
                            this.node.runAction(cc.fadeOut(.25));
                            var t = 651 / o;
                            this.changeDest(t, r, function() {
                                var t = cc.find("Canvas/kitchenRoom"), i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "kitchenRoom" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.25)), this.changeDest(-550, r, function() {
                                    this.mapManager = this.kitchenManager, this.kitchen = !0, this.garden = null, this.buffetRoom = null, 
                                    this.pond = null, e();
                                });
                            });
                        });
                    });
                } else this.toGarden(function() {
                    t.toKitchenRoom(e);
                }); else this.toDiningRoom(function() {
                    t.toKitchenRoom(e);
                });
            },
            toDiningRoom: function(e) {
                var t = this;
                e = e.bind(this);
                var i = cc.winSize.width / 1242, a = cc.winSize.height / 2688, o = Math.min(i, a);
                if (this.mapManager != this.pondManager) if (this.mapManager == this.kitchenManager) {
                    var s = -641 / o, r = -270 - 80 * Math.random();
                    this.move(-550, r, function() {
                        this.changeDest(s, r, function() {
                            this.node.runAction(cc.fadeOut(.25));
                            var t = -701 / o;
                            this.changeDest(t, r, function() {
                                var t = cc.find("Canvas/diningRoom"), i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "diningRoom" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.25)), this.changeDest(550, r, function() {
                                    this.mapManager = this.customerManager, this.kitchen = null, this.garden = null, 
                                    this.buffetRoom = null, this.pond = null, e();
                                });
                            });
                        });
                    });
                } else if (this.mapManager == this.buffetManager) {
                    var c = -240 - 30 * Math.random();
                    this.move(c, 444, function() {
                        this.changeDest(c, 1324, function() {
                            this.node.runAction(cc.fadeOut(.25)), this.changeDest(c, 1424, function() {
                                var t = cc.find("Canvas/diningRoom"), i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "diningRoom" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.25)), this.changeDest(c, -1244, function() {
                                    this.mapManager = this.customerManager, this.kitchen = null, this.garden = null, 
                                    this.buffetRoom = null, this.pond = null, e();
                                });
                            });
                        });
                    });
                } else {
                    var h = 641 / o, l = -720 - 80 * Math.random();
                    this.move(550, l, function() {
                        this.changeDest(h, l, function() {
                            this.node.runAction(cc.fadeOut(.25));
                            var t = 701 / o;
                            this.changeDest(t, l, function() {
                                var t = cc.find("Canvas/diningRoom"), i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "diningRoom" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.25)), this.changeDest(-500, l, function() {
                                    this.mapManager = this.customerManager, this.kitchen = null, this.garden = null, 
                                    this.buffetRoom = null, this.pond = null, e();
                                });
                            });
                        });
                    });
                } else this.toGarden(function() {
                    t.toDiningRoom(e);
                });
            },
            toGarden: function(e) {
                var t = cc.winSize.width / 1242, i = cc.winSize.height / 2688, a = Math.min(t, i);
                if (this.mapManager != this.kitchenManager && this.mapManager != this.buffetManager) if (e = e.bind(this), 
                this.mapManager == this.pondManager) {
                    var o = 580 / a, s = Math.random() < .5 ? 1 : -1, r = 0;
                    s < 0 && (r = -120);
                    var c = (-700 - 80 * Math.random()) * s + r;
                    this.move(550, c, function() {
                        this.changeDest(o, c, function() {
                            var t = cc.find("Canvas/garden"), i = cc.find("Canvas/pondRightWall");
                            "garden" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0);
                            var o = i.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                            this.node.parent = i, this.node.x = o.x, this.node.y = o.y, this.node.zIndex = 5e3 - this.node.y + 1e3, 
                            this.changeDest(this.node.x + 105 / a, this.node.y + 50 / a, function() {
                                this.changeDest(this.node.x + 250 / a, o.y, function() {
                                    var i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.node.zIndex = 5e3 - this.node.y + 1e3, 
                                    this.changeDest(550, c, function() {
                                        this.updateZIndex(), this.mapManager = this.customerManager, this.kitchen = null, 
                                        this.garden = !0, this.buffetRoom = null, this.pond = null, e();
                                    });
                                });
                            });
                        });
                    });
                } else {
                    var h = -591 / a, l = -720 - 80 * Math.random();
                    this.move(-550, l, function() {
                        this.changeDest(h, l, function() {
                            this.node.runAction(cc.fadeOut(.25));
                            var t = -651 / a;
                            this.changeDest(t, l, function() {
                                var t = cc.find("Canvas/garden"), i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                "garden" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0), 
                                this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.updateZIndex(), 
                                this.node.runAction(cc.fadeIn(.25)), this.changeDest(550, l, function() {
                                    this.mapManager = this.gardenManager, this.kitchen = null, this.garden = !0, this.buffetRoom = null, 
                                    this.pond = null, e();
                                });
                            });
                        });
                    });
                } else this.toDiningRoom(function() {
                    this.toGarden(e);
                });
            },
            toPond: function(e) {
                var t = this;
                if (this.mapManager != this.kitchenManager && this.mapManager != this.buffetManager) if (this.mapManager != this.customerManager) {
                    e = e.bind(this);
                    var i = cc.winSize.width / 1242, a = cc.winSize.height / 2688, o = Math.min(i, a), s = Math.random() < .5 ? 1 : -1, r = 0;
                    s < 0 && (this.__uppond = !0, r = -120);
                    var c = -571 / o, h = (-700 - 80 * Math.random()) * s + r;
                    this.move(-530, h, function() {
                        this.changeDest(c, h, function() {
                            var t = cc.find("Canvas/pond"), i = cc.find("Canvas/pondRightWall");
                            "pond" == this.customerManager.mainScene.getCurRoomName() && n.setChildrenRenderComponentEnable(this.node, !0);
                            var a = i.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                            this.node.parent = i, this.node.x = a.x, this.node.y = a.y, this.node.zIndex = 5e3 - this.node.y + 1e3, 
                            this.changeDest(this.node.x - 105 / o, this.node.y + 50 / o, function() {
                                this.changeDest(this.node.x - 200 / o, a.y, function() {
                                    var i = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    this.node.parent = t, this.node.x = i.x, this.node.y = i.y, this.node.zIndex = 5e3 - this.node.y + 1e3, 
                                    this.changeDest(550, h, function() {
                                        this.updateZIndex(), this.mapManager = this.pondManager, this.kitchen = null, this.pond = !0, 
                                        this.garden = null, this.buffetRoom = null, e();
                                    });
                                });
                            });
                        });
                    });
                } else this.toGarden(function() {
                    t.toPond(e);
                }); else this.toDiningRoom(function() {
                    t.toGarden(function() {
                        t.toPond(e);
                    });
                });
            },
            update: function() {
                this.updateZIndex();
            },
            getRandomCoinPoint: function(e) {
                for (var t = void 0, i = this.node.y + e, n = 0, a = void 0, o = void 0, s = void 0; n <= 12 && (n++, 
                a = (s = this.actionFollowFace ? this.animNode.scaleX > 0 : Math.random() > .5) ? (t = this.node.x - 10) - (120 + 30 * Math.random() * 2) : (t = this.node.x + 10) + 150 - 30 + 30 * Math.random() * 2, 
                o = i + (120 + 30 * Math.random() * 2), !this.mapManager.isMapLegal(a, o)); ) ;
                return {
                    x: t,
                    y: i,
                    randomX: a,
                    randomY: o,
                    left: s
                };
            },
            stopMove: function() {
                this.arrive = !0, this.node.stopActionByTag(199872), this.__bfs && (this.unschedule(this.__bfs), 
                this.__bfs = null);
            },
            pauseMove: function() {
                this.node.pauseAllActions(), this.__bfs && this.unschedule(this.__bfs);
            },
            resumeMove: function() {
                this.node.resumeAllActions(), this.__bfs && this.schedule(this.__bfs, .025);
            },
            setActionFollowFace: function(e) {
                this.actionFollowFace = e;
            }
        }), cc._RF.pop();
    }, {
        global: "global",
        twComponent: "twComponent",
        twQueue: "twQueue"
    } ],
    netManager: [ function(t, i, n) {
        function a() {
            u = "undefined" != typeof qq ? [ {
                url: "https://qqplay-restaurant-shanghai.twomiles.cn:8060"
            }, {
                url: "https://qqplay-restaurant-guangzhou.twomiles.cn:8060"
            }, {
                url: "https://qqplay-restaurant-beijing.twomiles.cn:8060"
            }, {
                url: "https://qqplay-restaurant-chengdu.twomiles.cn:8060"
            } ] : "undefined" != typeof wx ? [ {
                url: "https://restaurant.twomiles.cn"
            }, {
                url: "https://dsa-restaurant-beijing.twomiles.cn"
            }, {
                url: "https://dsa-restaurant-shanghai.twomiles.cn"
            }, {
                url: "https://dsa-restaurant-chengdu.twomiles.cn"
            } ] : "global" == l.app_type ? [ {
                url: "https://ios-global-restaurant.twomiles.cn:8060"
            } ] : "inland" == l.app_type ? [ {
                url: "https://ios-inland-restaurant.twomiles.cn:8060"
            } ] : [ {
                url: "https://restaurant-hk.twomiles.cn:8060"
            } ];
            var e = new JSEncrypt();
            e.setPublicKey(d), f.crypt = e;
        }
        cc._RF.push(i, "d6d43v1nmpMdpEweVHMVS6K", "netManager");
        var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, s = t("userData"), r = t("global"), c = t("localize"), h = t("CryptoJS"), l = t("config"), u = void 0, d = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMZ0MINl1LEgBMZ+TL9I1CkEyb4dSsiW/afzX/6miJz+X1jf0yEgwW2Gk4HS2xqOolOEUm1NptTpTb3246qVQjcCAwEAAQ==-----END PUBLIC KEY-----", f = {
            failCount: 0,
            serverId: 0,
            playTime: 0,
            BuffetInviteInfo: {},
            request: function(e, t, i, n, s, r, c, h) {
                this.lazyInitFlag || (a(), this.lazyInitFlag = !0), s && (n = n.bind(s)), t && t.openid && (t.openid = this.crypt.encrypt(t.openid, "base64")), 
                "undefined" != typeof wx ? this.getServerInfo(c, function(a) {
                    h || (h = 3);
                    var o = this, s = a.url + (r || "") + "/" + e;
                    !function e() {
                        wx.request({
                            url: s,
                            data: t,
                            method: i,
                            success: function(e) {
                                o.failCount = 0, e.data && "string" == typeof e.data && -1 != e.data.indexOf("html") ? n(-1) : n(0, e.data);
                            },
                            fail: function() {
                                (h -= 1) <= 0 ? (n(-1), o.failCount++) : setTimeout(function() {
                                    e();
                                }, 2e3);
                            }
                        });
                    }();
                }, this) : this.getServerInfo(c, function(a) {
                    h || (h = 3);
                    var s = this, c = !1;
                    !function l() {
                        var u = new XMLHttpRequest();
                        c = !1;
                        var d = function() {
                            (h -= 1) <= 0 ? (n(-1), s.failCount++) : setTimeout(function() {
                                l();
                            }, 2e3);
                        }, f = setTimeout(function() {
                            c = !0, u.abort(), d();
                        }, 5e3), g = a.url + (r || "") + "/" + e, p = null;
                        if ("object" == (void 0 === t ? "undefined" : o(t))) {
                            var m = [];
                            for (var y in t) m.push(encodeURIComponent(y) + "=" + encodeURIComponent(t[y]));
                            "GET" == i ? (g += "?", g += m.join("&")) : p = JSON.stringify(t);
                        }
                        u.open(i, g, !0), "POST" == i && u.setRequestHeader("Content-Type", "application/json"), 
                        u.onreadystatechange = function() {
                            var e = u.responseText;
                            if (clearTimeout(f), 4 == u.readyState) if (200 == u.status) {
                                var t = JSON.parse(e);
                                n(0, t);
                            } else !1 === c && d();
                        }, u.send(p);
                    }();
                }, this);
            },
            update: function(e) {
                if (this.playTime += e, this.playTime >= 120) {
                    var t = 1e3 * this.playTime;
                    this.playTime = 0, s.changeData("playTime", t, function() {}, this);
                }
                var i = new Date().getTime();
                this.updateTime ? this.isWorking || i - this.updateTime >= 3e5 && (this.isWorking = !0, 
                this.updateTime = new Date().getTime(), this.updateNowTime(function() {
                    this.isWorking = !1;
                }, this)) : this.updateTime = i;
            },
            updateCallbackAry: [],
            updateNowTime: function(e, t) {
                t && (e = e.bind(t)), this.updateCallbackAry.push(e), this.updateCallbackAry.length > 1 || this.getLegalTime(function(e) {
                    if (e) {
                        var t = new Date().getTime();
                        this.localTime = t, this.legalTime = e;
                        for (var i = 0; i < this.updateCallbackAry.length; i++) (0, this.updateCallbackAry[i])(!0);
                        this.updateCallbackAry = [];
                    } else {
                        for (var n = 0; n < this.updateCallbackAry.length; n++) (0, this.updateCallbackAry[n])(!1);
                        this.updateCallbackAry = [];
                    }
                }, this);
            },
            nowTimeCallbackAry: [],
            getNowTime: function(e, t, i) {
                function n(e) {
                    for (var t = 0; t < this.nowTimeCallbackAry.length; t++) (0, this.nowTimeCallbackAry[t])(e);
                    this.nowTimeCallbackAry = [];
                }
                if (t && (e = e.bind(t)), this.nowTimeCallbackAry.push(e), !(this.nowTimeCallbackAry.length > 1)) if (n = n.bind(this), 
                this.legalTime) {
                    var a = new Date().getTime() - (this.localTime || 0);
                    i ? i *= 1e3 : i = 9e5, a >= -6e4 && a <= i ? n(this.legalTime + a) : this.updateNowTime(function(e) {
                        e ? n(this.legalTime) : (this.legalTime = null, n(null));
                    }, this);
                } else this.updateNowTime(function(e) {
                    n(e ? this.legalTime : null);
                }, this);
            },
            serverInfoCallbackQue: [],
            getServerInfo: function(e, t, i) {
                var n = this;
                if (i && (t = t.bind(i)), e) t(e); else if (this.serverInfoCallbackQue.push(t), 
                !(this.serverInfoCallbackQue.length > 1)) {
                    var a = function(e) {
                        for (var t = {}, i = !1, a = u.length, o = 0; o < u.length; o++) t[o] = 0, function e(i, a) {
                            var o = u[i];
                            n.request("getNowTime", null, "GET", function(n, o) {
                                var s = !1;
                                0 == n && o && o.nowTime && (s = !0), t[i]++, t[i] >= 1 ? a(i, s) : e(i, a);
                            }, n, null, o, 1);
                        }(o, function(t, n) {
                            i || (n || --a <= 0) && (i = !0, t++, s.setData("lastServerId", t, function() {
                                e(t);
                            }));
                        });
                    };
                    s.getData("lastServerId", function(e, t, i) {
                        var n = this;
                        if (t && i && (e = i), 0 == e || this.failCount >= 5 || !u[e - 1]) a(function(e) {
                            n.failCount = 0;
                            for (var t = 0; t < n.serverInfoCallbackQue.length; t++) (0, n.serverInfoCallbackQue[t])(u[e - 1]);
                            n.serverInfoCallbackQue = [];
                        }); else {
                            for (var o = 0; o < this.serverInfoCallbackQue.length; o++) (0, this.serverInfoCallbackQue[o])(u[e - 1]);
                            this.serverInfoCallbackQue = [];
                        }
                    }, this, !0);
                }
            },
            getLegalTime: function(e, t) {
                t && (e = e.bind(t)), this.request("getNowTime", {}, "GET", function(t, i) {
                    if (0 == t) {
                        var n = new Date().getTime(), a = i.nowTime - n, o = Math.abs(a - r.serverDiffTime);
                        r.serverDiffTimeInit && o > 18e4 ? s.getData("cheatingCount", function(e) {
                            e <= 3 ? s.setData("cheatingCount", e + 1, function() {}) : e > 3 && s.setData("cheatingCount", e + 2, function() {
                                e >= 5 && (s.sendMessage("showToast", c.getText("toast_cheatingWarning"), 10 + 30 * e), 
                                e >= 25 && s.changeData("blackCount", 1, function(e) {
                                    f.request("uploadBlackUser", {
                                        openid: f.openid,
                                        blackCount: e,
                                        type: "bc_SpeedUp"
                                    }, "GET", function() {});
                                }));
                            });
                        }) : o <= 3e4 && s.getData("cheatingCount", function(e) {
                            e > 0 && e <= 30 && s.setData("cheatingCount", e - 1, function() {});
                        }), r.serverDiffTime = a, r.serverDiffTimeInit = !0, s.getData("tipTimestamp", function(t) {
                            t > 0 ? e(i.nowTime) : s.setData("tipTimestamp", i.nowTime, function() {
                                e(i.nowTime);
                            }, this);
                        }, this);
                    } else e(null);
                }, this);
            },
            login: function(e, t) {
                if (t && (e = e.bind(t)), this.failCount >= 3) return this.failCount = 0, void e(!1);
                var i = this;
                s.getObjFromJson("openid", function(t) {
                    t && t.openid ? (i.openid = t.openid, i.orgOpenId = t.orgOpenId, s.userType = t.userType, 
                    i.serverId = t.serverId || 0, null == t.serverId ? i.request("getServerId", {
                        openid: i.openid
                    }, "GET", function(n, a) {
                        0 == n && 0 == a.status ? (i.serverId = a.serverId, t.serverId = a.serverId, s.setObjToJson("openid", t, function() {
                            e(!0);
                        })) : e(!0);
                    }) : e(!0)) : (t && (i.aid = t.aid, i.channel = t.channel), "undefined" != typeof wx ? wx.login({
                        success: function(t) {
                            var n = {
                                code: t.code
                            };
                            i.aid && (n.aid = i.aid), i.channel && (n.channel = i.channel);
                            try {
                                var a = wx.getLaunchOptionsSync();
                                a.scene && (n.scene = a.scene);
                                var o = a.referrerInfo;
                                o && o.appId && (n.appId = o.appId);
                                var r = a.query;
                                r && (r.inviteId && (n.inviteId = r.inviteId), r.memorial && (n.memorial = r.memorial), 
                                r.imageUrlId && (n.imageUrlId = r.imageUrlId), r.revMemorial && (n.revMemorial = r.revMemorial));
                            } catch (e) {}
                            try {
                                var c = wx.getSystemInfoSync();
                                c.model && (n.model = c.model), c.platform && (n.platform = c.platform);
                            } catch (e) {}
                            "undefined" != typeof qq ? i.request("code2SessionQQPlay", n, "GET", function(t, n) {
                                0 == t && n.openid ? (i.failCount = 0, s.getObjFromJson("openid", function(t) {
                                    t || (t = {}), t.openid = n.openid, t.serverId = n.serverId || 0, s.setObjToJson("openid", t, function() {
                                        i.openid = n.openid, e(!0);
                                    });
                                })) : setTimeout(function() {
                                    i.login(e);
                                }, 1e3);
                            }, this, null, null, 1) : i.request("code2Session", n, "GET", function(t, n) {
                                0 == t && n.openid ? (i.failCount = 0, s.getObjFromJson("openid", function(t) {
                                    t || (t = {}), t.openid = n.openid, t.serverId = n.serverId || 0, s.setObjToJson("openid", t, function() {
                                        i.openid = t.openid, i.serverId = t.serverId, e(!0);
                                    });
                                })) : setTimeout(function() {
                                    i.login(e);
                                }, 1e3);
                            }, this, null, null, 1);
                        },
                        fail: function(t) {
                            console.log("@@@@login ", t), i.failCount++, setTimeout(function() {
                                i.login(e);
                            }, 1e3);
                        }
                    }) : e(!0));
                }, this);
            },
            nativeWxLogin: function(e, t) {
                var i = {
                    code: e
                };
                cc.sys.OS_IOS == cc.sys.os ? i.platform = "ios" : i.platform = "android", this.openid && (i.orgOpenId = this.openid);
                var n = 1;
                i.userType = "app_wx";
                var a = this;
                !function e() {
                    a.request("code2SessionNativeWx", i, "GET", function(o, r) {
                        0 == o && r.openid ? (a.failCount = 0, s.getObjFromJson("openid", function(e) {
                            e || (e = {});
                            var n = e.openid;
                            e.openid = r.openid, e.userType = i.userType, a.openid || (e.serverId = r.serverId || 0), 
                            n && !e.orgOpenId && n != r.openid && (e.orgOpenId = n), s.setObjToJson("openid", e, function() {
                                a.openid = r.openid, s.userType = i.userType, a.serverId = r.serverId || 0, t(!0);
                            }, a);
                        }, a)) : --n >= 0 ? setTimeout(function() {
                            e();
                        }, 1e3) : t(!1);
                    }, a);
                }();
            },
            nativeFbLogin: function(e) {
                var t = {
                    openid: s.fbUserID,
                    token: s.fbAccessToken
                };
                cc.sys.OS_IOS == cc.sys.os ? t.platform = "ios" : t.platform = "android", this.openid && (t.orgOpenId = this.openid);
                var i = 1;
                t.userType = "app_fb";
                var n = this;
                t.biInfo = JSON.stringify(this.handleBiInfo()), function a() {
                    n.request("code2SessionNativeFb", t, "GET", function(o, r) {
                        console.log("login callback ", o, JSON.stringify(r)), 0 == o && r.openid ? (n.failCount = 0, 
                        s.getObjFromJson("openid", function(i) {
                            i || (i = {});
                            var a = i.openid;
                            i.openid = r.openid, i.userType = t.userType, n.openid || (i.serverId = r.serverId || 0), 
                            a && !i.orgOpenId && a != r.openid && (i.orgOpenId = a), s.setObjToJson("openid", i, function() {
                                n.openid = r.openid, s.userType = t.userType, a || (s.globalKey = r.openid), n.serverId = r.serverId || 0, 
                                e(!0);
                            }, n);
                        }, n)) : --i >= 0 ? setTimeout(function() {
                            a();
                        }, 1e3) : e(!1);
                    }, n);
                }();
            },
            nativeLineLogin: function(e) {
                var t = {
                    openid: s.lineUserID,
                    token: s.lineAccessToken
                };
                cc.sys.OS_IOS == cc.sys.os ? t.platform = "ios" : t.platform = "android", this.openid && (t.orgOpenId = this.openid);
                var i = 1;
                t.userType = "app_line";
                var n = this;
                t.biInfo = JSON.stringify(this.handleBiInfo()), function a() {
                    n.request("code2SessionNativeLine", t, "GET", function(o, r) {
                        console.log("login callback ", o, JSON.stringify(r)), 0 == o && r.openid ? (n.failCount = 0, 
                        s.getObjFromJson("openid", function(i) {
                            i || (i = {});
                            var a = i.openid;
                            i.openid = r.openid, i.userType = t.userType, n.openid || (i.serverId = r.serverId || 0), 
                            a && !i.orgOpenId && a != r.openid && (i.orgOpenId = a), s.setObjToJson("openid", i, function() {
                                n.openid = r.openid, s.userType = t.userType, a || (s.globalKey = r.openid), n.serverId = r.serverId || 0, 
                                e(!0);
                            }, n);
                        }, n)) : --i >= 0 ? setTimeout(function() {
                            a();
                        }, 1e3) : e(!1);
                    }, n);
                }();
            },
            nativeGuestLogin: function(e) {
                var t = {
                    userType: "guest"
                };
                cc.sys.OS_IOS == cc.sys.os ? t.platform = "ios" : t.platform = "android";
                var i = 1, n = this;
                t.biInfo = JSON.stringify(this.handleBiInfo()), function a() {
                    n.request("loginNativeGuest", t, "GET", function(o, r) {
                        0 == o && r.openid ? (n.failCount = 0, s.setObjToJson("openid", {
                            openid: r.openid,
                            userType: t.userType,
                            serverId: r.serverId || 0
                        }, function() {
                            n.openid = r.openid, s.userType = t.userType, n.serverId = r.serverId || 0, e(!0);
                        }, n)) : --i >= 0 ? setTimeout(function() {
                            a();
                        }, 1e3) : e(!1);
                    }, n);
                }();
            },
            uploadRecordToServer: function(e, t, i) {
                var n = this;
                i && (t = t.bind(i));
                var a = function() {
                    var i = h.MD5("32roiFEI" + e.record + n.openid).toString();
                    e.checkSign2 = i.charAt(8) + i.charAt(3) + i.charAt(21) + i.charAt(10) + i.charAt(16) + i.charAt(9) + i.charAt(11) + i.charAt(23), 
                    s.getData("playTime", function(i) {
                        e.playTime = i, s.getData("money", function(i) {
                            s.getData("money_plate", function(n) {
                                e.money = i, s.getStarSum(function(i) {
                                    e.plate = n, i < e.starSum ? t(-1) : this.request("uploadRecord", e, "POST", function(e, i) {
                                        t(0 == e ? i.status : e);
                                    }, this, null, null, 1);
                                }, this);
                            }, this);
                        }, this);
                    }, n);
                };
                "undefined" != typeof wx ? wx.login({
                    success: function(t) {
                        e.code = t.code;
                        var i = "wx";
                        "undefined" != typeof qq && (i = "qq"), e.type = i, a();
                    },
                    fail: function(e) {
                        console.log(e), t(-1);
                    }
                }) : (e.type = "native", e.code = 100 + Math.floor(900 * Math.random()) + "d42fe" + Math.floor(10 * Math.random()), 
                a());
            },
            getStorageInfo: function(e, t) {
                if (t && (e = e.bind(t)), "undefined" != typeof wx) {
                    var i = function(t) {
                        function i() {
                            --c <= 0 && e(r > 0 ? null : JSON.stringify(a));
                        }
                        function n() {
                            var e = t[o++];
                            if (null != s.cache[e]) {
                                if ("obj" == s.cacheType[e]) a[e] = JSON.stringify(s.cache[e]); else {
                                    var n = s.decodeData(s.cache[e], e);
                                    a[e] = s.getEncryptString(n, e);
                                }
                                i();
                            } else wx.getStorage({
                                key: e,
                                success: function(t) {
                                    a[e] = t.data, i();
                                },
                                fail: function(e) {
                                    console.log(e), r++, i();
                                }
                            });
                        }
                        var a = {}, o = 0, r = 0, c = t.length;
                        if (c <= 0) e(null); else var h = setInterval(function() {
                            for (var e = Math.min(o + 20, t.length - 1), i = e - o + 1; i > 0; ) i--, n();
                            e >= t.length - 1 && clearInterval(h);
                        }, 80);
                    };
                    wx.getStorageInfo({
                        success: function(e) {
                            i(e.keys);
                        },
                        fail: function(t) {
                            console.log(t), e(null);
                        }
                    });
                } else {
                    for (var n = {}, a = 0; a < localStorage.length; a++) {
                        var o = localStorage.key(a);
                        if ("fb_friends_cache" != o) {
                            var r = cc.sys.localStorage.getItem(o);
                            n[o] = r;
                        }
                    }
                    e(JSON.stringify(n));
                }
            },
            uploadRecord: function(e, t) {
                this.isUploadRecord || (this.isUploadRecord = !0, this.openid ? this.onUploadRecord(e, t) : this.login(function() {
                    this.openid ? this.onUploadRecord(e, t) : (this.isUploadRecord = !1, t && t(!1));
                }, this));
            },
            onUploadRecord: function(e, t) {
                var i = new Date().getTime();
                s.getData("lastTimeRecord", function(n) {
                    !n || i - n >= 84e4 || e ? s.getStarSum(function(n) {
                        if (n <= 6 && !e) return this.isUploadRecord = !1, void (t && t(!1));
                        s.getData("playTime", function(e) {
                            this.getStorageInfo(function(a) {
                                var o = this;
                                a ? this.uploadRecordToServer({
                                    openid: this.openid,
                                    starSum: n,
                                    playTime: e,
                                    record: a
                                }, function(e) {
                                    var n = this;
                                    i = new Date().getTime(), e >= 0 ? s.setData("lastTimeRecord", i, function() {
                                        n.isUploadRecord = !1, t && t(e);
                                    }) : s.setData("lastTimeRecord", i - 3e5, function() {
                                        n.isUploadRecord = !1, t && t(e);
                                    });
                                }, this) : s.setData("lastTimeRecord", i - 6e5, function() {
                                    o.isUploadRecord = !1, t && t(-1);
                                });
                            }, this);
                        }, this);
                    }, this) : (this.isUploadRecord = !1, t && t(!1));
                }, this);
            },
            setStorageInfo: function(e, t, i) {
                function n() {
                    --g <= 0 && (u > 0 ? t(-1) : (s.init(), s.getObjFromJson("openid", function(e) {
                        e && (p.serverId = e.serverId), t(0);
                    }, this)));
                }
                function a() {
                    var e = d[l++];
                    wx.setStorage({
                        key: e,
                        data: o[e],
                        success: function(e) {
                            n();
                        },
                        fail: function(e) {
                            console.log(e), u++, n();
                        }
                    });
                }
                i && (t = t.bind(i));
                var o = void 0;
                try {
                    o = JSON.parse(e);
                } catch (e) {
                    return console.log("@@@ ", e), void t(-1);
                }
                if ("undefined" == typeof wx) {
                    var r = [ "HotUpdateVersion_twgame", "HotUpdateSearchPaths" ];
                    for (var c in o) if (!(r.indexOf(c) > -1)) {
                        var h = o[c];
                        cc.sys.localStorage.setItem(c, h);
                    }
                    return s.init(), void t(0);
                }
                var l = 0, u = 0, d = [];
                for (var f in o) d.push(f);
                var g = d.length, p = this, m = setInterval(function() {
                    for (var e = Math.min(l + 15, d.length - 1), t = e - l + 1; t > 0; ) t--, a();
                    e >= d.length - 1 && clearInterval(m);
                }, 100);
            },
            checkLogin: function(e, t, i) {
                i && (t = t.bind(i)), this.openid ? s.getData("playTime", function(i) {
                    s.getData("money", function(n) {
                        var a = {
                            openid: this.openid,
                            starSum: e,
                            playTime: i,
                            money: n
                        };
                        if ("undefined" != typeof wx) {
                            var o = wx.getLaunchOptionsSync().query;
                            o && (o.inviteId && (a.inviteId = o.inviteId), o.memorial && (a.memorial = o.memorial));
                        }
                        this.request("checkLogin", a, "GET", function(e, i) {
                            if (0 == e) {
                                if (i.data && r.initBuffetFriendInfo(i.data), i.waimaiData && r.initWaimaiFriendInfo(i.waimaiData), 
                                i.nowTime) {
                                    var n = new Date().getTime();
                                    this.localTime = n, this.legalTime = i.nowTime;
                                    var a = i.nowTime - n;
                                    r.serverDiffTime = a, r.serverDiffTimeInit = !0;
                                }
                                t(i.status, i);
                            } else t(e);
                        }, this);
                    }, this);
                }, this) : t(-200);
            },
            checkRecord: function(e, t, i) {
                i && (t = t.bind(i)), this.openid ? s.getData("playTime", function(i) {
                    s.getData("money", function(n) {
                        s.getData("money_plate", function(a) {
                            this.request("checkRecord", {
                                openid: this.openid,
                                starSum: e,
                                playTime: i,
                                money: n,
                                plate: a
                            }, "GET", function(e, i) {
                                0 == e ? t(i.status, i) : t(e);
                            }, this);
                        }, this);
                    }, this);
                }, this) : t(-200);
            },
            downloadRecord: function(e, t) {
                function i(e) {
                    var t = new JSEncrypt();
                    return t.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----MIICWwIBAAKBgHWR0OoyxsInULWzWMI1NDKnZIsYs7zZ2ryAgA4G/0ezr89lV4E2jY3eeNADhMRQxrxeK1CJJhpyEROHILj5M8EcnMX2ihDeoAPc2yMKZynMS/R0gXmMaeihP0M3pkP13AlD9lOiHkyZgxtv4BZcvCP8ZzELfF0k30C8rK2OBTr3AgMBAAECgYBg2mf1lzDf3w2BMicLjlLa68VLRWVETWAB7AYSCDei9Ob/fqfwnWVNmxmBm3RzWWvu39Dk/qbyIEfrA2W0nC7CZu4JJOeCgtzVSvqnLghqdBdxRIfHLalvQBAsZQLyNV82EloiH835C6p793axOEkiwsVZQVhM5RQFmxTKfF7reQJBAMFibJdgMrFUCeRT4FmyN2ZOP1plTM2Rc/A816fVxUXPkmiDE7FqmpUga86q0gIw7Ktkjj+Pyl1W9efAGzWAfW0CQQCbox8bHfDFq34eSqRLh7t95Py5wO1Af/Y2qqsADIwr7bPmN7cjNwIXkCzL+tnGQm0JIo6VifHZTgEGzhM3EY9zAkA+9GKzmO6Hyfr6aM/Vg24DkR+Qtv+cwGhE4hm2mqIBCwT3nwxPKowuVgKiofuCGRlC5pZkXNQdNM0S5/gzn6O1AkB960D8cIHfe7tDCMLaNQvVdJGgO934BE+QtQ46sOwrklqtlUA/Zn7zz3re4aqWBCIxdNsFU6DvXnPoLIxRTozPAkEApTeFlkzLTZQSDJ3UL7hOEMyDqnqzpJR/RUasAAIp3RJ1bqJLG+qa/L1aZUx/L69Vsgp5PBbIkaDyfS4/Y3SvRw==-----END RSA PRIVATE KEY-----"), 
                    t.decrypt(e);
                }
                var n = this;
                t && (e = e.bind(t)), this.openid ? "undefined" != typeof wx ? wx.login({
                    success: function(t) {
                        var a = "wx";
                        "undefined" != typeof qq && (a = "qq"), n.request("downloadRecord", {
                            openid: n.openid,
                            code: t.code,
                            type: a
                        }, "GET", function(t, n) {
                            if (0 == t) {
                                if (i(n.encryptCode) !== this.openid) return void e(-2);
                                0 == n.status ? n.record && "undefined" != n.record ? this.setStorageInfo(n.record, function(t) {
                                    e(t);
                                }, this) : e(-101) : e(n.status);
                            } else e(t);
                        }, n, null, null, 1);
                    },
                    fail: function(t) {
                        console.log(t), e(-1);
                    }
                }) : this.request("downloadRecord", {
                    openid: this.openid,
                    code: 100 + Math.floor(900 * Math.random()) + "d42fe" + Math.floor(10 * Math.random()),
                    type: "native"
                }, "GET", function(t, i) {
                    0 == t ? 0 == i.status ? i.record && "undefined" != i.record ? this.setStorageInfo(i.record, function(t) {
                        e(t);
                    }, this) : e(-101) : e(i.status) : e(t);
                }, this) : e(-200);
            },
            uploadAdTrace: function() {
                var e = void 0;
                try {
                    e = wx.getLaunchOptionsSync();
                } catch (t) {
                    e = {};
                }
                var t = e.query, i = t.gdt_vid, n = t.weixinadinfo, a = 0;
                if (n) {
                    var o = n.split(".");
                    a = o[0];
                }
                a || "ad" != t.msg || (a = t.aid);
                var r = null;
                r = a ? "dhgame_wechat01" : "natural", t.channel && (r = t.channel), this.channel = r, 
                s.getObjFromJson("openid", function(e) {
                    if (!a) return e && e.openid ? void 0 : e && e.aid ? (this.aid = e.aid, void (this.channel = e.channel)) : void 0;
                    this.aid = a;
                    var t = {
                        aid: a,
                        gdt_vid: i,
                        channel: r
                    };
                    e && e.openid && (t.openid = e.openid), this.request("uploadAdTrace", t, "GET", function(e) {}, this), 
                    e || (e = {}), e.aid = a, e.channel = r, s.setObjToJson("openid", e, function() {});
                }, this);
            },
            updateAdVedioTimes: function(e) {
                var t = {
                    openid: this.openid || 0,
                    index: e
                };
                s.userType && (t.userType = s.userType), this.request("updateWatchAdVedioTimes", t, "GET", function(e) {}, this);
            },
            uploadStarToWorldRank: function(e, t, i, n) {
                i && (t = t.bind(i)), s.getStarSum(function(i) {
                    var a = {
                        openid: this.openid,
                        serverId: this.serverId,
                        star: i,
                        userType: s.userType
                    }, o = i + ",";
                    e.avatarUrl && (a.avatarUrl = e.avatarUrl, o += a.avatarUrl + ","), e.nickName && (a.nickName = e.nickName, 
                    o += a.nickName + ","), e.province && (a.province = e.province, o += a.province + ","), 
                    n && (a.rankType = n);
                    var r = h.MD5(o + this.openid).toString();
                    a.checkSign = r.charAt(17) + r.charAt(3) + r.charAt(27) + r.charAt(11) + r.charAt(23), 
                    this.request("uploadStar", a, "POST", function(e, n) {
                        t(e, n, i);
                    }, this);
                }, this);
            },
            checkCdKey: function(e, t, i) {
                i && (t = t.bind(i)), this.request("getOneCode", {
                    code: e
                }, "GET", function(e, i) {
                    t(e, i);
                }, this);
            },
            addFeedback: function(e, t, i) {
                i && (t = t.bind(i));
                var n = {
                    message: e.message,
                    openid: this.openid,
                    language: e.lan,
                    version: l.version,
                    type: l.app_type
                };
                r.isAndroidOnly() ? n.platform = "android" : r.isIosOnly() && (n.platform = "ios"), 
                this.request("addFeedback", n, "POST", function(e) {
                    t(e);
                });
            },
            refreshDailyTask: function(e, t) {
                t && (e = e.bind(t)), this.request("refreshDailyTask", {
                    openid: this.openid
                }, "GET", function(t) {
                    e(t);
                }, this);
            },
            getDailyTaskInviteInfo: function(e, t, i) {
                var n = this;
                t && (e = e.bind(t));
                var a = function() {
                    n.request("getDailyTaskInviteInfo", {
                        openid: n.openid
                    }, "GET", function(t, i) {
                        this.dailyTaskInviteInfoCacheTime = r.getServerTime(), 0 == t && (this.dailyTaskInviteInfoCacheData = {
                            status: t,
                            res: i
                        }), e(t, i);
                    }, n);
                };
                if (i) a(); else {
                    var o = r.getServerTime() - (this.dailyTaskInviteInfoCacheTime || 0);
                    !this.dailyTaskInviteInfoCacheData || o > 3e5 ? o <= 3e3 ? setTimeout(function() {
                        a();
                    }, 3e3) : a() : e(this.dailyTaskInviteInfoCacheData.status, this.dailyTaskInviteInfoCacheData.res);
                }
            },
            openDailyTaskInviteInfo: function(e, t) {
                this.request("openDailyTaskInviteInfo", {
                    openid: this.openid,
                    sourceId: e.inviteId
                }, "GET", function(e, i) {
                    t(0 == e ? i.status : e);
                });
            },
            getSignupTime: function(e, t) {
                t && (e = e.bind(t)), this.openid ? this.request("getSignupTime", {
                    openid: this.openid
                }, "GET", function(t, i) {
                    e(0 == t ? i.signupTime : null);
                }) : e(null);
            },
            onBridBack: function(e, t) {
                t && (e = e.bind(t)), this.openid ? this.request("onBridBack", {
                    openid: this.openid
                }, "GET", function(t, i) {
                    e(0 == t && 0 == i.status ? !0 : !1);
                }) : e(!1);
            },
            checkPayment: function(e, t, i) {
                i && (t = t.bind(i)), this.openid ? (e.openid = this.openid, this.request("checkPayment", e, "POST", function(e, i) {
                    t(0 == e && 0 == i.status ? !0 : 0 == e && -20000003 == i.status ? !0 : !1);
                })) : t(!1);
            },
            acceptWaimaiInvite: function(e, t, i) {
                i && (t = t.bind(i)), this.openid ? (e.openid = this.openid, this.request("acceptWaimaiInvite", e, "GET", function(e, i) {
                    0 == e ? 1 == i.status ? t(1) : 2 == i.status ? t(2) : 3 == i.status ? t(3) : 0 == i.status ? t(0, i) : t(-1) : t(-1);
                })) : t(!1);
            },
            acceptBuffetInvite: function(e, t, i) {
                i && (t = t.bind(i)), this.openid ? (e.openid = this.openid, this.request("acceptBuffetInvite", e, "GET", function(e, i) {
                    0 == e ? 1 == i.status ? t(1) : 2 == i.status ? t(2) : 3 == i.status ? t(3) : 0 == i.status ? t(0, i) : t(-1) : t(-1);
                })) : t(!1);
            },
            getWaimaiInviteInfo: function(e, t) {
                if (t && (e = e.bind(t)), this.openid) {
                    var i = {
                        openid: this.openid
                    };
                    this.request("getWaimaiInviteInfo", i, "GET", function(t, i) {
                        0 == t && 0 == i.status ? e(0, i.data) : e(-1);
                    });
                } else e(!1);
            },
            getBuffetInviteInfo: function(e, t) {
                if (t && (e = e.bind(t)), this.openid) {
                    var i = {
                        openid: this.openid
                    };
                    this.request("getBuffetInviteInfo", i, "GET", function(t, i) {
                        0 == t && 0 == i.status ? e(0, i.data) : e(-1);
                    });
                } else e(!1);
            },
            addCommunityLoveSum: function(e, t, i) {
                i && (t = t.bind(i)), this.request("addCommunityLoveSum", {
                    count: e
                }, "GET", function(e, i) {
                    t(0 == e && 0 == i.status ? 0 : -1);
                }, this, null, null, 1);
            },
            communityLoveSumQueue: [],
            getCommunityLoveSum: function(e, t) {
                if (t && (e = e.bind(t)), this.communityLoveSumQueue.length > 0) this.communityLoveSumQueue.push(e); else {
                    this.communityLoveSumQueue.push(e);
                    var i = this;
                    this.request("getCommunityLoveSum", {}, "GET", function(e, t) {
                        var n = !0, a = !1, o = void 0;
                        try {
                            for (var s, r = i.communityLoveSumQueue[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                                var c = s.value;
                                0 == e && 0 == t.status ? c(0, t.data) : c(-1);
                            }
                        } catch (e) {
                            a = !0, o = e;
                        } finally {
                            try {
                                !n && r.return && r.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        i.communityLoveSumQueue = [];
                    });
                }
            },
            communityInviteQueue: [],
            getCommunityInviteInfo: function(e, t, i) {
                if (i && (t = t.bind(i)), this.communityInviteQueue.length > 0) this.communityInviteQueue.push(t); else {
                    this.communityInviteQueue.push(t), e.openid = this.openid;
                    var n = this;
                    this.request("getCommunityInviteInfo", e, "GET", function(e, t) {
                        var i = !0, a = !1, o = void 0;
                        try {
                            for (var s, r = n.communityInviteQueue[Symbol.iterator](); !(i = (s = r.next()).done); i = !0) {
                                var c = s.value;
                                0 == e && 0 == t.status ? c(0, t.data) : c(-1);
                            }
                        } catch (e) {
                            a = !0, o = e;
                        } finally {
                            try {
                                !i && r.return && r.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        n.communityInviteQueue = [];
                    });
                }
            },
            acceptCommunityDailyInvite: function(e, t, i) {
                i && (t = t.bind(i)), e.selfid = this.openid, this.request("acceptCommunityDailyInvite", e, "POST", function(e, i) {
                    0 == e && 0 == i.status ? t(0, i.data) : t(-1);
                });
            },
            decryptWXData: function(e, t) {
                var i = e.encryptedData, n = e.iv;
                this.request("decryptWXData", {
                    encryptedData: i,
                    iv: n,
                    openid: this.openid
                }, "GET", function(e, i) {
                    0 == e ? 0 == i.status ? t(0, i.data) : t(i.status) : t(e);
                });
            },
            getUserInteractiveStorage: function(e, t, i, n) {
                i && (t = t.bind(i));
                var a = this;
                wx.getUserInteractiveStorage({
                    keyList: e.keyList,
                    success: function(o) {
                        a.decryptWXData(o, function(o, s) {
                            0 == o ? t(0, s) : -2 != o && -3 != o || n ? t(o) : a.code2SessionWX(function(n) {
                                0 == n ? a.getUserInteractiveStorage(e, t, i, !0) : t(-102);
                            });
                        });
                    },
                    fail: function(e) {
                        var i = e.errCode, n = e.errMsg;
                        t(i, n);
                    }
                });
            },
            code2SessionWX: function(e) {
                var t = this;
                wx.login({
                    success: function(i) {
                        t.request("code2SessionWX", {
                            code: i.code
                        }, "GET", function(t, i) {
                            e(0 == t ? i.status : t);
                        });
                    },
                    fail: function() {
                        e(-101);
                    }
                });
            },
            getMemorialInviteInfoQueue: [],
            getMemorialInviteInfo: function(e, t) {
                if (t && (e = e.bind(t)), this.getMemorialInviteInfoQueue.length > 0) this.getMemorialInviteInfoQueue.push(e); else {
                    this.getMemorialInviteInfoQueue.push(e);
                    var i = this;
                    if (!this.openid) return this.getMemorialInviteInfoQueue = [], void e(-1);
                    this.request("getMemorialInviteInfo", {
                        openid: i.openid
                    }, "GET", function(e, t) {
                        var n = !0, a = !1, o = void 0;
                        try {
                            for (var s, r = i.getMemorialInviteInfoQueue[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                                var c = s.value;
                                0 == e ? 0 == t.status ? c(0, t.data) : c(t.status) : c(-1);
                            }
                        } catch (e) {
                            a = !0, o = e;
                        } finally {
                            try {
                                !n && r.return && r.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        i.getMemorialInviteInfoQueue = [];
                    });
                }
            },
            subscribeOrder: function(e, t) {
                this.request("subscribeOrder", {
                    template_id: e.temlid,
                    duration: e.duration,
                    openid: this.openid,
                    title: e.title
                }, "POST", function(e, i) {
                    t(0 == e ? i.status : -1);
                }, this, null, null, 1);
            },
            deleteFeedBack: function() {
                s.getObjFromJson("feedBackMsg", function(e) {
                    var t = 0;
                    e && (e.feedBackMsg && e.feedBackMsg.length && (t = e.feedBackMsg[e.feedBackMsg.length - 1].timestamp || 0), 
                    this.openid && this.request("deleteFeedBackInfo", {
                        openid: this.openid,
                        timestamp: t
                    }, "GET", function(e, t) {
                        0 == e && 0 == t.status && s.setObjToJson("feedBackMsg", {
                            feedBackMsg: []
                        }, function() {}, this);
                    }, this));
                }, this);
            },
            getFeedBackInfo: function(e, t) {
                if (t && (e = e.bind(t)), this.getFeedBackInfoQueue || (this.getFeedBackInfoQueue = []), 
                this.getFeedBackInfoQueue.length > 0) this.getFeedBackInfoQueue.push(e); else {
                    this.getFeedBackInfoQueue.push(e);
                    var i = this;
                    if (!this.openid) return this.getFeedBackInfoQueue = [], void e([], !1);
                    s.getObjFromJson("feedBackMsg", function(e) {
                        var t = 0, n = [];
                        e || (e = {}), e.feedBackMsg && e.feedBackMsg.length && (t = (n = e.feedBackMsg)[n.length - 1].timestamp || 0), 
                        this.request("getFeedBackInfo", {
                            openid: this.openid,
                            timestamp: t
                        }, "GET", function(e, t) {
                            var a = !1;
                            if (0 == e && 0 == t.status) {
                                for (var o = 0; o < n.length; o++) n[o].new && (a = !0);
                                var r = t.data;
                                if (r && r.length) for (var c = 0; c < r.length; c++) "service" == r[c].userType && (r[c].new = !0, 
                                a = !0), n.push(r[c]);
                            }
                            s.setObjToJson("feedBackMsg", {
                                feedBackMsg: n
                            }, function() {
                                var e = !0, t = !1, o = void 0;
                                try {
                                    for (var s, r = i.getFeedBackInfoQueue[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) (0, 
                                    s.value)(n, a);
                                } catch (e) {
                                    t = !0, o = e;
                                } finally {
                                    try {
                                        !e && r.return && r.return();
                                    } finally {
                                        if (t) throw o;
                                    }
                                }
                                i.getFeedBackInfoQueue = [];
                            }, this);
                        }, this);
                    }, this);
                }
            },
            uploadErrorInfo: function(e, t, i) {
                i && (t = t.bind(i)), e.openid = this.openid, r.isIosOnly() ? e.platform = "ios" : r.isAndroidOnly() && (e.platform = "android"), 
                this.request("uploadErrorInfo", e, "POST", function(e, i) {
                    t(0 === e && 0 === i.status ? 0 : -1);
                }, this);
            },
            getSelfInfo: function() {
                var e = this.openid;
                this.request("getSelfInfo", {
                    openid: e
                }, "POST", function(e, t) {
                    0 == e && 0 == t.status && (this.nickName = t.data.nickName, this.avatarUrl = t.data.avatarUrl);
                }, this);
            },
            getNickName: function() {
                return this.nickName;
            },
            getAvatarUrl: function() {
                return this.avatarUrl;
            },
            getRecommendApp: function(e) {
                this.request("getRecommendApp", {}, "GET", function(t, i) {
                    0 == t && (0 == i.status ? e(0, i.data || []) : e(i.status));
                }, this);
            },
            getRecommendAppVersion: function(e) {
                this.request("getRecommendAppVersion", {}, "GET", function(t, i) {
                    0 == t && (0 == i.status ? e(0, i.version) : e(i.status));
                }, this);
            },
            clickRecommendApp: function(e, t) {
                this.request("clickRecommendApp", {
                    appId: e
                }, "GET", function(e, i) {
                    0 == e && t(0 == i.status ? 0 : i.status);
                }, this);
            },
            payTypeInfo: [ "fish1", "fish2", "fish3", "fishMonth", "plate1", "plate2", "plate3", "plateMonth" ],
            WxMiTryPay: function(e, t, i) {
                var n = this;
                if (this.openid && "" != this.openid && -1 != this.payTypeInfo.indexOf(e.payType)) if (i && (t = t.bind(i)), 
                "undefined" != typeof wx) {
                    var a = {};
                    a.openid = this.openid, a.payType = e.payType, wx.login({
                        success: function(e) {
                            if (e.code) {
                                a.code = e.code;
                                var i = s.MiPayNetSign(a);
                                a.sign = i, n.request("WxMiTryPay", a, "POST", function(e, i) {
                                    0 == e ? 0 == i.status ? t(0, i) : 1 == i.status ? t(1, i) : t(-1) : (console.log("WxMiTryPay error", e), 
                                    t(-2));
                                }, n);
                            } else t(-2);
                        },
                        fail: function(e) {
                            console.log("wxlogin error", e), t(-2);
                        }
                    });
                } else t(-1); else t(-1);
            },
            wxMiPaySuccess: function(e, t, i) {
                if (this.openid && "" != this.openid && e.orderId && "" != e.orderId && e.payMoney && "" != e.payMoney && -1 != this.payTypeInfo.indexOf(e.payType)) if (i && (t = t.bind(i)), 
                "undefined" != typeof wx) {
                    var n = {};
                    n.openid = this.openid, n.orderId = e.orderId, n.payMoney = e.payMoney, n.payType = e.payType;
                    var a = s.MiPayNetSign(n);
                    n.sign = a, this.request("wxMiPaySuccess", n, "POST", function(e, i) {
                        0 == e ? 0 == i.status ? t(0, i) : t(-1) : (console.log("WxMiTryPay error", e), 
                        t(-2));
                    }, this);
                } else t(-1); else t(-1);
            },
            checkWxMiOrder: function(e, t, i) {
                if (this.openid && "" != this.openid && e.orderId && "" != e.orderId) if (i && (t = t.bind(i)), 
                "undefined" != typeof wx) {
                    var n = {};
                    n.openid = this.openid, n.orderId = e.orderId;
                    var a = s.MiPayNetSign(n);
                    n.sign = a, this.request("checkWxMiOrder", n, "POST", function(e, i) {
                        0 == e ? 0 == i.status ? t(0, i) : t(-1) : t(-2);
                    }, this);
                } else t(-1); else t(-1);
            },
            wxApp_unifiedorder: function(e, t, i) {
                if (this.openid && "" != this.openid) if (i && (t = t.bind(i)), "undefined" == typeof wx) {
                    var n = {}, a = this;
                    n.openid = this.openid, n.payType = e.payType, this.request("wxApp_unifiedorder", n, "POST", function(e, i) {
                        0 == e ? 0 == i.status ? (a.wxAppOrderId = i.xml.out_trade_no, t(0, i.xml)) : t(-1) : (console.log("wxApp_unifiedorder error", e), 
                        t(-2));
                    }, this);
                } else t(-1); else t(-1);
            },
            checkWxAppPay: function(e, t, i) {
                if (this.openid && "" != this.openid) if (i && (t = t.bind(i)), "undefined" == typeof wx) {
                    var n = {};
                    n.openid = this.openid, n.out_trade_no = this.wxAppOrderId, this.request("checkWxAppPay", n, "POST", function(e, i) {
                        0 == e ? t(i.status, i.type) : t(-2);
                    }, this);
                } else t(-1); else t(-1);
            },
            uploadCapsuleToyCost: function(e, t) {
                e.openid = f.openid, this.request("uploadCapsuleToyCost", e, "GET", function(e, i) {
                    t(0 == e ? 0 == i.status ? 0 : i.status : -1);
                }, this);
            },
            checkBigVersion: function(e) {
                var t = "";
                r.isAndroidOnly() ? t = "android" : r.isIosOnly() && (t = "ios");
                var i = {
                    app_type: l.app_type,
                    version: l.version,
                    platform: t
                };
                this.request("checkBigVersion", i, "GET", function(t, i) {
                    0 == t ? 0 == i.status ? e(0, i) : e(i.status) : e(-1);
                }, this);
            },
            uploadLikeToWorldRank: function(e, t, i, n) {
                i && (t = t.bind(i)), s.getData("takeOutRoomThumb", function(i) {
                    var a = {
                        openid: this.openid,
                        serverId: this.serverId,
                        star: i,
                        userType: s.userType
                    }, o = i + ",";
                    e.avatarUrl && (a.avatarUrl = e.avatarUrl, o += a.avatarUrl + ","), e.nickName && (a.nickName = e.nickName, 
                    o += a.nickName + ","), e.province && (a.province = e.province, o += a.province + ","), 
                    n && (a.rankType = n);
                    var r = h.MD5(o + this.openid).toString();
                    a.checkSign = r.charAt(17) + r.charAt(3) + r.charAt(27) + r.charAt(11) + r.charAt(23), 
                    this.request("uploadLike", a, "POST", function(e, n) {
                        t(e, n, i);
                    }, this);
                }, this);
            },
            uploadWaimaiCancelKey: function(e, t) {
                this.openid ? this.request("uploadWaimaiCancelKey", {
                    openid: this.openid,
                    inviteOrderKey: e.inviteOrderKey
                }, "GET", function(e, i) {
                    0 == e && 0 == i.status && t(i.status);
                }, this) : t();
            },
            realNameReg: function(e, t, i) {
                if (this.openid && "" != this.openid && e && "" != e && t && "" != t) {
                    var n = {
                        openid: this.openid,
                        cardName: e,
                        cardNum: t
                    };
                    this.request("realNameReg", n, "POST", function(e, t) {
                        0 == e ? (console.log("realNameReg netback ", JSON.stringify(t)), i(t.status, t.age)) : i({
                            status: 1
                        });
                    });
                } else i(-11);
            },
            checkIsRealNameReg: function(e) {
                if (this.openid && "" != this.openid) {
                    var t = {
                        openid: this.openid
                    };
                    this.orgOpenId && "" != this.orgOpenId && (t.orgOpenId = this.orgOpenId), this.request("checkIsRealNameReg", t, "GET", function(t, i) {
                        0 == t ? (console.log("checkIsRealNameReg netback ", JSON.stringify(i)), 0 == i.status ? e(0, i.age) : e(-1)) : e(1);
                    });
                } else e(-11);
            },
            biLoginInfo: function(e, t) {
                if (this.openid && "" != this.openid) {
                    t && (e = e.bind(t));
                    var i;
                    i = this.handleBiInfo(), this.request("droidhangBI/Login", i, "POST", function(e, t) {
                        0 == e && t.status;
                    });
                } else e(-1);
            },
            getTapJoyCurrency: function(e, t) {
                this.request("tapjoy/getCurrency", {
                    type: JSON.stringify(e),
                    openid: this.openid
                }, "GET", function(e, i) {
                    0 == e ? 0 == i.status ? t(0, i.data) : t(i.status) : t(-1);
                }, this);
            },
            spendTapJoyCurrency: function(e, t, i) {
                this.request("tapjoy/spendCurrency", {
                    type: e,
                    openid: this.openid,
                    cost: t
                }, "GET", function(e, t) {
                    0 == e ? (console.log("tapjoy/spendCurrency ", t.status), i(0 == t.status ? 0 : t.status)) : i(-1);
                }, this);
            },
            handleBiInfo: function() {
                var e = {};
                r.isNativeOnly() && "global" == l.app_type && (e.buildType = "globalApp"), e.app_version = l.version, 
                e.user_id = this.openid, e.language = s.getBiLang();
                var t = s.getNetWork_type();
                return t && (e.network_type = t), s.dhBIsession && (e.session_id = s.dhBIsession), 
                r.isIosOnly() ? (s.adid && (e.adid = s.adid), s.idfv && (e.idfv = s.idfv), s.device_model && (e.device_model = s.device_model), 
                s.os_version && (e.os_version = s.os_version), s.device_name && (e.device_name = s.device_name), 
                s.appsflyer_id && (e.appsflyer_id = s.appsflyer_id), e.platform = "IOS") : (s.adid && (e.adid = s.adid), 
                s.android_id && (e.android_id = s.android_id), s.device_model && (e.device_model = s.device_model), 
                s.os_version && (e.os_version = s.os_version), s.device_name && (e.device_name = s.device_name), 
                s.appsflyer_id && (e.appsflyer_id = s.appsflyer_id), e.platform = "ANDROID"), e;
            },
            biPayInfo: function(e, t, i, n) {
                if (this.openid && "" != this.openid) {
                    n && (i = i.bind(n)), console.log("product is ", JSON.stringify(e));
                    var a = {};
                    a = this.handleBiInfo();
                    var o = void 0, s = void 0;
                    if (t.monthCard.iap == e.id || t.monthCard.iap == e.name) o = t.monthCard.payDollar, 
                    s = t.monthCard.pay; else if (t.monthCardPlate.iap == e.id || t.monthCardPlate.iap == e.id) o = t.monthCardPlate.payDollar, 
                    s = t.monthCardPlate.pay; else {
                        var r = t.items, c = !0, h = !1, l = void 0;
                        try {
                            for (var u, d = r[Symbol.iterator](); !(c = (u = d.next()).done); c = !0) {
                                var f = u.value;
                                f.iap != e.id && f.iap != e.name || (o = f.payDollar, s = f.pay);
                            }
                        } catch (e) {
                            h = !0, l = e;
                        } finally {
                            try {
                                !c && d.return && d.return();
                            } finally {
                                if (h) throw l;
                            }
                        }
                    }
                    var g = {
                        order_no: e.orderId,
                        pay_price: o,
                        pay_price_rmb: s,
                        store_id: e.id,
                        channel: ""
                    };
                    a.event_value = g, this.request("droidhangBI/Pay", a, "POST", function(e, t) {
                        0 == e && t.status;
                    });
                } else i(-1);
            },
            qqMiPrePay: function(e, t, i) {
                var n = this;
                if (this.openid && "" != this.openid && -1 != this.payTypeInfo.indexOf(e.payType)) if (i && (t = t.bind(i)), 
                "undefined" != typeof qq) {
                    var a = {};
                    a.openid = this.openid, a.payType = e.payType, wx.login({
                        success: function(e) {
                            if (e.code) {
                                a.code = e.code;
                                var i = s.MiPayNetSign(a);
                                a.sign = i, n.request("qqMiPrePay", a, "POST", function(e, i) {
                                    0 == e ? 0 == i.status ? t(0, i) : t(-1) : (console.log("qqMiPrePay error", e), 
                                    t(-2));
                                }, n);
                            } else t(-2);
                        },
                        fail: function(e) {
                            console.log("qqlogin error", e), t(-2);
                        }
                    });
                } else t(-1); else t(-1);
            },
            checkQQAppPay: function(e, t, i) {
                if (this.openid && "" != this.openid && e.bill_no && "" != e.bill_no && e.prepayId) if (i && (t = t.bind(i)), 
                "undefined" != typeof qq) {
                    var n = {};
                    n.openid = this.openid, n.bill_no = e.bill_no, n.prepayId = e.prepayId, n.payMoney = e.payMoney;
                    var a = s.MiPayNetSign(n);
                    n.sign = a, this.request("checkQQAppPay", n, "POST", function(e, i) {
                        0 == e ? t(0 == i.status ? 0 : -1) : (console.log("checkQQAppPay net error", e), 
                        t(-2));
                    }, this);
                } else t(-1); else t(-1);
            },
            nativeAppleLogin: function(e) {
                var t = {
                    code: s.appleCode,
                    userType: "app_apple",
                    token: s.appleToken,
                    user_id: s.appleUserId
                };
                s.appleName && "x x" != s.appleName && (t.appleName = s.appleName), this.openid && (t.orgOpenId = this.openid), 
                s.appleNoTokenLogin && (t.appleNoTokenLogin = !0), this.request("appleLogin", t, "POST", function(i, n) {
                    0 == i && n.openid ? s.getObjFromJson("openid", function(i) {
                        i || (i = {});
                        var a = i.openid;
                        i.openid = n.openid, i.userType = t.userType, this.openid || (i.serverId = n.serverId || 0), 
                        a && !i.orgOpenId && a != n.openid && (i.orgOpenId = a), s.setObjToJson("openid", i, function() {
                            this.openid = n.openid, s.userType = t.userType, a || (s.globalKey = n.openid), 
                            this.serverId = n.serverId || 0, e(!0);
                        }, this);
                    }, this) : (console.log("back status is ", n.status), e(!1));
                }, this);
            }
        };
        i.exports = f, cc._RF.pop();
    }, {
        CryptoJS: "CryptoJS",
        config: "config",
        global: "global",
        localize: "localize",
        userData: "userData"
    } ],
    protocolDlg: [ function(e, t, i) {
        cc._RF.push(t, "9f928XIzJNAI5h1UiXgGvd7", "protocolDlg"), cc.Class({
            extends: cc.Component,
            properties: {
                dark: cc.Node,
                tip: cc.Node,
                toggle: cc.Toggle,
                refuse: cc.Button,
                agree: cc.Button,
                wxLoginBtn: cc.Button,
                guestLoginBtn: cc.Button
            },
            onLoad: function() {
                this.wxLoginBtn.interactable = !1, this.guestLoginBtn.interactable = !1, this.toggle.interactable = !1;
            },
            start: function() {
                this.refuse.node.on("click", this.onRefuse, this), this.agree.node.on("click", this.onAgree, this);
            },
            onRefuse: function(e) {
                e.bubbles = !1, this.toggle.isChecked = !1, this.tip.active = !1, this.wxLoginBtn.interactable = !0, 
                this.guestLoginBtn.interactable = !0, this.toggle.interactable = !0;
            },
            onAgree: function(e) {
                e.bubbles = !1, this.toggle.isChecked = !0, this.tip.active = !1, this.wxLoginBtn.interactable = !0, 
                this.guestLoginBtn.interactable = !0, this.toggle.interactable = !0;
            }
        }), cc._RF.pop();
    }, {} ],
    recordDlg: [ function(e, t, i) {
        cc._RF.push(t, "451e5psh8ZBL62JXQbQjSjU", "recordDlg");
        var n = e("localize"), a = e("userData"), o = e("netManager"), s = e("global"), r = !1;
        cc.Class({
            extends: e("ViewHandler"),
            properties: {
                dark: cc.Node,
                titleLbl: cc.Label,
                last_Record_time: cc.Label,
                last_Record_star: cc.Label,
                btn: cc.Node,
                btn_lbl: cc.Label,
                desc_lbl: cc.Label,
                timeLbl: cc.Label,
                starLbl: cc.Label
            },
            start: function() {
                "vi" == n.lan || "ms" == n.lan ? s.fixLabelOpt(this.btn_lbl, .7, 360) : s.fixLabelOpt(this.btn_lbl), 
                this.btn_lbl.lineHeight = this.btn_lbl.fontSize, this.titleLbl.string = n.getText("recordDlg_title"), 
                this.last_Record_time.string = n.getText("last_Record_time"), this.timeLbl.string = n.getText("loadRecord"), 
                this.starLbl.string = n.getText("loadRecord"), this.last_Record_star.string = n.getText("last_Record_star"), 
                this.desc_lbl.string = n.getText("recordDlg_desc"), this.dark.on(cc.Node.EventType.TOUCH_END, function() {
                    this.keepOpen || (this.dark.off(cc.Node.EventType.TOUCH_END), this.close());
                }, this), this.checkRecord(), s.fixLabel(this.titleLbl), s.fixLabel(this.last_Record_time, 360), 
                s.fixLabel(this.timeLbl), s.fixLabel(this.starLbl), s.fixLabel(this.last_Record_star, 360), 
                s.fixLabel(this.desc_lbl);
            },
            checkRecord: function() {
                a.getStarSum(function(e) {
                    o.checkRecord(e, function(e, t) {
                        if (cc.isValid(this.node)) {
                            if (e < 0) return a.sendMessage("showToast", n.getText("toast_string_6")), void this.close();
                            this.starLbl.string = "", this.timeLbl.string = "", t && (null != t.starSum && (this.starLbl.string = t.starSum), 
                            t.updateTime && (this.timeLbl.string = this.format(t.updateTime))), 1 == e ? this.btn_lbl.string = n.getText("recordDlg_btn_2") : 2 == e ? this.btn_lbl.string = n.getText("recordDlg_btn") : 4 == e ? (this.btn.getComponent(cc.Button).interactable = !1, 
                            this.btn_lbl.string = n.getText("recordDlg_btn_4")) : (this.btn.getComponent(cc.Button).interactable = !1, 
                            this.btn_lbl.string = n.getText("recordDlg_btn_3"), a.getData("lastTimeRecord", function(e) {
                                cc.isValid(this.node) && new Date().getTime() - e < 3e5 && (this.btn_lbl.string = n.getText("recordDlg_btn_4"));
                            }, this));
                        }
                    }, this);
                }, this);
            },
            onUpload: function() {
                r || (r = !0, a.getStarSum(function(e) {
                    o.checkRecord(e, function(t, i) {
                        var c = this;
                        1 == t ? (this.keepOpen = !0, a.sendMessage("showToast", n.getText("toast_string_12"), 5), 
                        o.downloadRecord(function(e) {
                            r = !1, 0 == e ? (a.clearAllListener(), s.onRestart(), cc.game.pause(), setTimeout(function() {
                                s.gameRestart(), cc.game.resume();
                            }, 3e3)) : a.sendMessage("showToast", n.getText("toast_string_6"));
                        }, this)) : 2 == t ? (cc.isValid(this.node) && (this.timeLbl.string = n.getText("recordDlg_inUpdate")), 
                        o.uploadRecord(!0, function(t) {
                            r = !1, t >= 0 ? (cc.isValid(c.node) && (c.starLbl.string = e, c.timeLbl.string = c.format(s.getServerTime()), 
                            c.btn_lbl.string = n.getText("recordDlg_btn_3"), c.btn.getComponent(cc.Button).interactable = !1), 
                            a.sendMessage("showToast", n.getText("toast_string_11"))) : -1e3 == t ? a.sendMessage("showToast", n.getText("toast_uploadError")) : a.sendMessage("showToast", n.getText("toast_string_6"));
                        })) : -1e3 == t ? (a.sendMessage("showToast", n.getText("toast_uploadError")), cc.isValid(this.node) && (this.btn.getComponent(cc.Button).interactable = !1, 
                        r = !1)) : (cc.isValid(this.node) && (this.btn.getComponent(cc.Button).interactable = !1, 
                        r = !1), a.sendMessage("showToast", n.getText("toast_string_13")));
                    }, this);
                }, this));
            },
            format: function(e) {
                var t = new Date(e);
                return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler",
        global: "global",
        localize: "localize",
        netManager: "netManager",
        userData: "userData"
    } ],
    richTextClick: [ function(e, t, i) {
        cc._RF.push(t, "caa95QNjKJKVqESJ0R+OUnx", "richTextClick"), cc.Class({
            extends: cc.Component,
            properties: {
                tip: cc.Node
            },
            start: function() {},
            protocol_1: function() {
                cc.sys.openURL("https://www.dhgames.cn/other/ad/register.html");
            },
            protocol_2: function() {
                cc.sys.openURL("https://www.dhgames.cn/other/ad/privacy.html");
            },
            protocol_1t: function() {
                this.tip.active || cc.sys.openURL("https://www.dhgames.cn/other/ad/register.html");
            },
            protocol_2t: function() {
                this.tip.active || cc.sys.openURL("https://www.dhgames.cn/other/ad/privacy.html");
            }
        }), cc._RF.pop();
    }, {} ],
    settingDlg: [ function(e, t, i) {
        cc._RF.push(t, "a8b3bV7wM9B2awqp/R7h1Yl", "settingDlg");
        var n = e("userData"), a = e("netManager"), o = e("global"), s = e("localize"), r = e("config"), c = e("ViewModule").ins, h = new JSEncrypt();
        h.setPublicKey("-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMZ0MINl1LEgBMZ+TL9I1CkEyb4dSsiW/afzX/6miJz+X1jf0yEgwW2Gk4HS2xqOolOEUm1NptTpTb3246qVQjcCAwEAAQ==-----END PUBLIC KEY-----"), 
        cc.Class({
            extends: e("ViewHandler"),
            properties: {
                btn_sound_on: cc.SpriteFrame,
                btn_sound_off: cc.SpriteFrame,
                btn_soundLeft: cc.Node,
                btn_soundRight: cc.Node,
                btn_faq: cc.Node,
                bg_1: cc.SpriteFrame,
                bg_2: cc.SpriteFrame,
                idLabel: cc.Label,
                helpBtn: cc.Node,
                realNameBtn: cc.Node,
                cdKeyDlg: cc.Prefab,
                label_cdKey: cc.Label,
                label_sync: cc.Label,
                label_help: cc.Label,
                label_css: cc.Label,
                label_realName: cc.Label,
                weiboNode: cc.Node,
                underLineNode: cc.Node,
                underLineNode1: cc.Node,
                feedbackRedDot: cc.Node
            },
            open: function(e) {
                this.initDlg(e);
            },
            initDlg: function(e) {
                this.audioManager = e;
            },
            start: function() {
                var e = this;
                this.initSound(), o.isFeedBackNew ? this.feedbackRedDot.active = !0 : this.feedbackRedDot.active = !1;
                var t = [];
                if ("undefined" != typeof qq) this.weiboNode.active = !1; else if (this.weiboLbl = this.weiboNode.getComponent("dynamicAutoLabel"), 
                "global" == r.app_type) {
                    n.appsflyer_Obtain(), n.appsflyer_ads();
                    var i = new cc.Node(), l = i.addComponent(cc.Label);
                    l.string = s.getText("follow_us"), l._updateRenderData(!0);
                    var u = i.width + 60;
                    this.underLineNode.y = -i.height, this.underLineNode.width = u, this.underLineNode.height = 2, 
                    this.underLineNode1.y = -i.height - 6, this.underLineNode1.width = u, this.underLineNode1.height = 2, 
                    this.weiboLbl.string = s.getText("follow_us"), this.weiboLbl.useSystemFont = !0, 
                    this.weiboNode.getComponent(cc.Button).node.on("click", function() {
                        this.underLineNode.color = cc.color(211, 211, 211), this.underLineNode1.color = cc.color(211, 211, 211), 
                        c.pushView("communityDlg");
                    }, this);
                } else {
                    this.underLineNode.active = !1, this.underLineNode1.active = !1;
                    var d = this.weiboNode.getComponent(cc.Button);
                    this.weiboLbl && (this.weiboLbl.string = s.getText("authority_blog"), o.isNativeOnly() ? d.node.on("click", function() {
                        cc.sys.openURL("https://weibo.com/mewchelin?is_hot=1");
                    }) : d.interactable = !1);
                }
                if (this.label_cdKey.string = s.getText("btn_cdKey"), this.label_sync.string = s.getText("btn_sync"), 
                this.label_help.string = s.getText("btn_help"), this.label_css.string = s.getText("btn_css"), 
                this.label_realName.string = "实名认证", this.label_realName.node.parent.active = !1, 
                t.push(this.label_sync.node.parent), o.fixLabelOpt(this.label_cdKey, .7), o.fixLabelOpt(this.label_sync, .7), 
                a.openid) {
                    this.idLabel.string = s.getText("authority_blog_thankStr");
                    var f = h.encrypt(a.openid, "base64");
                    o.fixLabel(this.idLabel, 600, 45), "vi" == s.lan && o.fixLabelOpt(this.idLabel), 
                    this.idLabel.node.on("click", function() {
                        "undefined" != typeof wx && wx.setClipboardData({
                            data: f,
                            success: function(e) {
                                "undefined" != typeof qq && n.sendMessage("showToast", "内容已复制");
                            }
                        }), o.isAndroidOnly() && (jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "copyToClipboard", "(Ljava/lang/String;)V", f), 
                        n.sendMessage("showToast", s.getText("toast_string_copy_id"))), o.isIosOnly() && (jsb.reflection.callStaticMethod("AdSDKManager", "copyToClipboard:", f), 
                        n.sendMessage("showToast", s.getText("toast_string_copy_id")));
                    }, this);
                }
                var g = this.node.getChildByName("dark");
                if (g.on(cc.Node.EventType.TOUCH_END, function() {
                    g.off(cc.Node.EventType.TOUCH_END), this.close();
                }, this), t.push(this.label_css.node.parent), o.isWxOnly()) t.push(this.label_cdKey.node.parent), 
                t.push(this.helpBtn), this.node.runAction(cc.sequence(cc.delayTime(.35), cc.callFunc(function() {
                    this.createGameClubButton(this.helpBtn);
                }, this))); else {
                    this.label_help.node.parent.active = !1, this.label_css.string = s.getText("feedback");
                    var p = r.app_type;
                    o.isNativeOnly() ? ("global" == p ? (this.helpBtn.on("click", function() {
                        c.pushView("languageDetial"), e.close();
                    }), this.label_help.string = s.getText("language"), o.fixLabel(this.label_help, 220, 120), 
                    o.fixLabel(this.label_css, 220, 120), this.label_help.node.parent.active = !0, t.push(this.helpBtn), 
                    this.idLabel.string = "email: arcs@droidhang.com") : (this.label_help.node.parent.active = !0, 
                    t.push(this.helpBtn), o.isAndroidOnly() ? this.helpBtn.on("click", function() {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "taptapTalk", "()V");
                    }) : o.isIosOnly() && (AdSDKPlatformManager.TapTapTalkCallback = function(e) {
                        1 == e || "1" == e ? n.sendMessage("onAdOpen", !0) : n.sendMessage("onAdOpen", !1);
                    }, this.helpBtn.on("click", function() {
                        jsb.reflection.callStaticMethod("AdSDKManager", "taptapTalk");
                    })), this.label_realName.node.parent.active = !0, t.push(this.realNameBtn), this.idLabel.string = "email: arcss@droidhang.com"), 
                    this.label_cdKey.node.parent.active = !1, this.idLabel.node.on("click", function() {
                        this.onCdKey();
                    }, this)) : t.push(this.label_cdKey.node.parent);
                }
                t.push(this.btn_faq);
                var m = {
                    UI_Bt_cdKey: 1,
                    UI_Bt_sync: 2,
                    UI_Bt_FAQ: 3,
                    UI_Bt_help: 4,
                    UI_Bt_css: 5,
                    UI_Bt_realName: 6
                };
                t.sort(function(e, t) {
                    return m[e._name] < m[t._name] ? -1 : 1;
                });
                for (var y = t[0].height, v = t.length, b = (762 - v * y) / (v - 1) + y, _ = 0; _ < t.length; _++) t[_].y -= _ * b;
            },
            onEnable: function() {
                n.showBannerAd(0);
            },
            onDisable: function() {
                n.hideBannerAd(0), this.btnGameClub && (this.btnGameClub.destroy(), this.btnGameClub = null);
            },
            onCss: function() {
                o.isWxOnly() ? wx.openCustomerServiceConversation({}) : (this.feedbackRedDot.active && (o.isFeedBackNew = !1, 
                this.feedbackRedDot.active = !1), c.pushView("feedbackMsgList"));
            },
            initSound: function() {
                var e = this;
                n.getData("muteBgm", function(t) {
                    cc.isValid(e.node) && (e.soundBgm = 0, e.btn_soundLeft.active = !0, e.soundBgm = 1 ^ t, 
                    e.soundBgm && (e.btn_soundLeft.x += 76), e.btn_soundLeft.getComponent(cc.Sprite).spriteFrame = e.soundBgm ? e.btn_sound_on : e.btn_sound_off);
                }, this), n.getData("muteEffect", function(t) {
                    cc.isValid(e.node) && (e.btn_soundRight.active = !0, e.soundEffect = 1 ^ t, e.soundEffect && (e.btn_soundRight.x += 76), 
                    e.btn_soundRight.getComponent(cc.Sprite).spriteFrame = e.soundEffect ? e.btn_sound_on : e.btn_sound_off);
                }, this);
            },
            onFAQ: function() {
                var e = this;
                this.faqWorking || (this.faqWorking = !0, o.loadRes("Prefab/faqOne", cc.Prefab, function(t, i) {
                    e.faqWorking = !1, cc.isValid(e.node) && !t && (o.autoReleaseInstantiate(i).parent = cc.find("Canvas/menuNode"), 
                    e.close());
                }));
            },
            swtichBGM: function() {
                var e = this;
                this.btn_soundLeftWorking || (this.btn_soundLeftWorking = !0, this.soundBgm ^= 1, 
                this.audioManager.swtichBgm(this.soundBgm), this.swtichSoundAnimation(this.soundBgm, this.btn_soundLeft, function() {
                    cc.isValid(e.node) && (e.btn_soundLeft.getComponent(cc.Sprite).spriteFrame = e.soundBgm ? e.btn_sound_on : e.btn_sound_off, 
                    e.btn_soundLeftWorking = !1);
                }));
            },
            swtichEffect: function() {
                var e = this;
                this.btn_soundRightWorking || (this.btn_soundRightWorking = !0, this.soundEffect ^= 1, 
                this.audioManager.swtichEffect(this.soundEffect), this.swtichSoundAnimation(this.soundEffect, this.btn_soundRight, function() {
                    cc.isValid(e.node) && (e.btn_soundRight.getComponent(cc.Sprite).spriteFrame = e.soundEffect ? e.btn_sound_on : e.btn_sound_off, 
                    e.btn_soundRightWorking = !1);
                }));
            },
            swtichSoundAnimation: function(e, t, i) {
                var n = 76 * (e ? 1 : -1);
                cc.tween(t).by(.2, {
                    position: cc.v2(n, 0)
                }).call(function() {
                    i();
                }).start();
            },
            onCdKey: function() {
                c.pushView("cdKeyDlg"), this.close();
            },
            onRealName: function() {
                if (n.isRealNameReg) return c.pushView("realNameDlg", {
                    type: 2,
                    text: "             该账号已经完成实名认证！"
                }), void this.close();
                c.pushView("realNameDlg"), this.close();
            },
            createGameClubButton: function(e) {
                var t = e.getBoundingBoxToWorld();
                t.x -= 5, t.y -= 5, t.width += 10, t.height += 10;
                var i = cc.view.getFrameSize(), n = cc.director.getWinSize(), a = t.height / n.width * i.width, o = t.width / n.width * i.width, s = t.x / n.width * i.width, r = i.height - (t.y + t.height) / n.height * i.height;
                this.btnGameClub = wx.createGameClubButton({
                    type: "text",
                    text: "",
                    style: {
                        left: s,
                        top: r,
                        width: o,
                        height: a,
                        lineHeight: 0,
                        backgroundColor: "",
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 16,
                        borderRadius: 4
                    }
                });
            },
            showRecordDlg: function() {
                var e = this;
                if ("guest" == n.userType) {
                    if (this.isOpenRank) return;
                    return this.isOpenRank = !0, void o.onGuestAuth(function(t) {
                        cc.isValid(e.node) && (e.isOpenRank = !1, t && (c.pushView("recordDlg"), e.close()));
                    });
                }
                c.pushView("recordDlg"), this.close();
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler",
        ViewModule: "ViewModule",
        config: "config",
        global: "global",
        localize: "localize",
        netManager: "netManager",
        userData: "userData"
    } ],
    startScene: [ function(e, t, i) {
        cc._RF.push(t, "a479fXwf4xIXI5EXKWIcLV9", "startScene");
        var n = e("global"), a = e("netManager"), o = e("userData"), s = e("localize"), r = e("config"), c = e("memorialData"), h = e("twSprite");
        e("destroySelfAction");
        var l = e("SceneModule").ins;
        cc.Class({
            extends: cc.Component,
            properties: {
                loadingBar: cc.Sprite,
                desc: cc.Label,
                num: cc.Label,
                anim: cc.Animation,
                storySprite: cc.Sprite,
                storyDesc: cc.Label,
                stotySkip: cc.Node,
                versionLbl: cc.Label
            },
            onLoad: function() {
                this.readyCount = 0, this.tryCount = 0, this.bigStep = 0, this.process = 0, this.waitingTimeCount = 0, 
                this.loadResRefAry = [], this.sceneProgress = 0, this.subPackageProgress = 0, this.listenerAry = [], 
                this.loadSubpackageCount = 0, this.loadSubpackageFailCount = 0, this.sceneTotal = .36, 
                o.init();
            },
            start: function() {
                o.onStartSceneEnter(), n.onStarLoad(), this.preloadConfigs(function() {
                    "undefined" != typeof wx && (a.uploadAdTrace(), wx.showShareMenu({
                        withShareTicket: !0
                    }), wx.onShareAppMessage(function() {
                        var e = o.getShareImgInfo(), t = "inviteId=" + (a.openid || 0);
                        return t += "&imageUrlId=" + e.imageUrlId, {
                            title: e.title,
                            imageUrlId: e.imageUrlId,
                            imageUrl: e.imageUrl,
                            query: t
                        };
                    })), cc.sys.isNative && cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME ? this.initLogo() : (this.initView(), 
                    this.startLoad());
                });
            },
            preloadConfigs: function(e) {
                var t = this;
                e = e.bind(this);
                var i = 0, n = !1, a = function() {
                    if (i++, t.updateLoadingBar(i / 3), i >= 3) {
                        if (n) return void t.preloadConfigs(e);
                        t.process = 0, t.loadingBar.node.parent.active = !1, t.desc.string = "", e();
                    }
                };
                this.loadingBar.node.parent.active = !0, this.updateLoadingBar(0), this.desc.string = "init", 
                r.lazyInitFlag ? a() : cc.loader.loadRes("configs/config", function(e, t) {
                    if (e) return n = !0, void a();
                    var i = t.json;
                    for (var o in i) r[o] = i[o];
                    r.init(), r.lazyInitFlag = !0, a();
                }), s.lazyInitFlag ? a() : cc.loader.loadRes("configs/cn", function(e, t) {
                    if (e) return n = !0, void a();
                    s.cn = t.json, s.lazyInitFlag = !0, a();
                }), c.lazyInitFlag ? a() : cc.loader.loadRes("configs/memorialData", function(e, t) {
                    if (e) return n = !0, void a();
                    c.memorials = t.json.memorials, c.init(), c.lazyInitFlag = !0, a();
                });
            },
            initLogo: function() {
                var e = this;
                n.loadRes("Prefab/logo", cc.Prefab, function(t, i) {
                    if (t) return console.error(t), void e.startApp();
                    var a = n.autoReleaseInstantiate(i);
                    a.x = 0, a.y = 0, a.parent = cc.find("Canvas"), "inland" == r.app_type && n.isNativeOnly() && e.initInfo(), 
                    a.runAction(cc.sequence(cc.delayTime(1.6), cc.fadeOut(.3), cc.destroySelf())), e.node.runAction(cc.sequence(cc.delayTime(1.9), cc.callFunc(function() {
                        this.startApp();
                    }, e)));
                }, 1);
            },
            initInfo: function() {
                var e = new cc.Node();
                e.parent = cc.find("Canvas");
                var t = new cc.Node(), i = new cc.Node();
                t.y = 180, i.y = 80, t.color = new cc.Color(0, 0, 0), i.color = new cc.Color(0, 0, 0), 
                t.parent = e, i.parent = e;
                var n = t.addComponent(cc.Label), a = i.addComponent(cc.Label), o = e.addComponent(cc.Widget);
                o.isAlignBottom = !0, o.isAlignOnce = !1, o.bottom = 30, o.updateAlignment(), n.horizontalAlign = cc.Label.HorizontalAlign.CENTER, 
                n.verticalAlign = cc.Label.VerticalAlign.CENTER, a.horizontalAlign = cc.Label.HorizontalAlign.CENTER, 
                a.verticalAlign = cc.Label.VerticalAlign.CENTER, n.fontSize = 40, n.lineHeight = 44, 
                a.fontSize = 30, a.lineHeight = 34, n.string = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n\n", 
                a.string = "著作权人：两英里科技成都有限公司 \n出版单位：山东科学技术出版社有限公司 \n运营单位：成都卓杭网络科技股份有限公司 \n审批文号：国新出审[2020]40 号 ISBN：978-7-498-07224-5 \n文网文号：川网文 [2018]10713-421 号", 
                e.runAction(cc.sequence(cc.delayTime(1.6), cc.fadeOut(.3), cc.destroySelf()));
            },
            preloadFont: function(e) {
                e = e.bind(this), n.loadRes("Prefab/fontPreload", cc.Prefab, function(t, i) {
                    if (t) return console.log(t), void e();
                    var a = n.autoReleaseInstantiate(i);
                    a.active = !1, a.parent = this.node, e();
                });
            },
            startApp: function() {
                o.initApp();
                var e = r.app_type;
                "global" == e ? this.preloadFont(function() {
                    o.getObjFromJson("language", function(e) {
                        console.log("language: ", e, cc.sys.languageCode), e ? this.onNativeStar(e) : (e = n.getLocalizeLanByCode(cc.sys.languageCode), 
                        o.setObjToJson("language", e, function() {
                            this.onNativeStar(e);
                        }, this));
                    }, this);
                }) : this.onNativeStar("cn", e);
            },
            onNativeStar: function(e) {
                var t = this;
                s.lan = e, n.fixLabel(this.desc), n.fixLabel(this.num), n.fixLabelOpt(this.storyDesc, null, 1200), 
                n.fixLabel(this.versionLbl);
                var i = function() {
                    cc.sys.OS_IOS == cc.sys.os || cc.sys.OS_ANDROID === cc.sys.os ? o.getObjFromJson("openid", function(e) {
                        e && e.openid ? (this.initView(), this.startLoad()) : this.showLoginButton();
                    }, t) : (t.initView(), t.startLoad());
                };
                "global" == r.app_type ? n.loadSubpackage("localizeData", function(e) {
                    e || (s.lan = "cn"), i();
                }) : i();
            },
            initLoadCounter: function() {
                this.index = 0, this.waitCount = 0, this.totalCbCount = 0;
            },
            initPreloadUserData: function() {
                this.keyList = [];
                for (var e = r.buildings, t = 0; t < e.length; t++) {
                    var i = "building_lv_" + e[t].key;
                    this.keyList.push({
                        key: i
                    });
                    var n = i + "_isUnfold";
                    this.keyList.push({
                        key: n,
                        type: "json"
                    });
                }
                for (var a = r.employees, o = 0; o < a.length; o++) {
                    var s = "employee_lv_" + a[o].key;
                    this.keyList.push({
                        key: s
                    });
                }
                for (var c = r.cookbooks, h = 0; h < c.length; h++) {
                    var l = "cookbook_unlock_" + c[h].key;
                    this.keyList.push({
                        key: l
                    });
                }
                for (var u = r.customers, d = 0; d < u.length; d++) {
                    var f = u[d], g = "customer_unlock_" + f.key;
                    this.keyList.push({
                        key: g
                    }), f.attrs.goOnProbTime ? f.attrs.weight *= .5 : f.attrs.critProb && (f.attrs.weight *= .7);
                }
                this.keyList.push({
                    key: "customerComingCount"
                }), this.keyList.push({
                    key: "money"
                }), this.keyList.push({
                    key: "recordCustomer",
                    type: "json"
                }), this.keyList.push({
                    key: "flowerBag",
                    type: "json"
                });
            },
            initPreloadResData: function() {
                function e(e, t, n, a) {
                    i[e] || (i[e] = !0, this.loadResAry.push({
                        resName: e,
                        type: t,
                        retain: n,
                        instantiate: a
                    }));
                }
                var t = this;
                this.loadResAry = [];
                var i = {}, n = r.buildings, a = r.cookbooks, s = r.employees, c = r.customers;
                (e = e.bind(this))("Prefab/loadFont", cc.Prefab, !0, !0), this.isNewUser && (e("Prefab/tutorialsDlg", cc.Prefab, !0, !0), 
                e("Prefab/tutorialsTipsNode", cc.Prefab, !0, !0));
                for (var h = [ 0, 1, 14 ], u = 0; u < h.length; u++) for (var d = n[h[u]], f = 0; f < d.items.length && f < 4; f++) {
                    var g = d.items[f];
                    e(g.useOrgImg ? "Funiture/" + g.img : "FunitureIcon/" + g.img), g.img2 && e(g.useOrgImg2 ? "Funiture/" + g.img2 : "FunitureIcon/" + g.img2);
                }
                for (var p = 0; p < n.length; p++) !function(i) {
                    var a = n[i], s = "building_lv_" + a.key;
                    o.getData(s, function(t) {
                        for (var i = 0; i < a.items.length; i++) {
                            var n = a.items[i];
                            2 == (t >> 2 * i & 3) && (e("Funiture/" + n.img), n.img2 && e("Funiture/" + n.img2));
                        }
                    }, t);
                }(p);
                e("Prefab/audioManager", cc.Prefab, !0);
                for (p = 0; p < s.length; p++) !function(i) {
                    var n = s[i], a = "employee_lv_" + n.key;
                    o.getData(a, function(t) {
                        t > 0 && e("Prefab/" + n.key, cc.Prefab, !0);
                    }, t);
                }(p);
                for (e("Employees/Employee_adao"), e("Employees/Employee_ahua"), p = 0; p < 3; p++) e("Cookbooks/" + a[p].img);
                for (var m = 0; m < 2; m++) e("Animal/" + c[m].img);
                for (var y = [], v = 0; v < n.length; ++v) y.push(n[v]);
                for (var b = r.secret_store, _ = 0; _ < b.length; _++) {
                    var w = b[_];
                    "building" == w.type && y.push(w);
                }
                var S = [ "theme_outdoor_group", "theme_diningRoom_group", "theme_kitchRoom_group", "theme_buffetRoom_group" ], T = 1 + S.length + y.length, k = function() {
                    --T > 0 || (t.bigStep = 2);
                }, x = r.customersMap;
                o.getObjFromJson("recordCustomer", function(t) {
                    if (t) for (var i = 0; i < t.length; i++) {
                        var n = t[i], a = x[n.cid];
                        a && e("Animation/" + a.key, cc.AnimationClip);
                    }
                    k();
                });
                for (var D = 0; D < S.length; D++) {
                    var A = S[D];
                    o.getTheme(A, function(t) {
                        var i = r.secretStoreItemMap[t];
                        for (var n in i.loadImg) e(i.loadImg[n]);
                        k();
                    }, this);
                }
                for (var M = 0; M < y.length; ++M) !function(t) {
                    l.getBuildingGroupStatusBit(y[t].key).then(function(i) {
                        for (var n = 0; n < y[t].items.length; ++n) if (2 == (i >> 2 * n & 3)) {
                            e(y[n].key);
                            break;
                        }
                        k();
                    });
                }(M);
            },
            loadRes: function() {
                var e = this;
                if (!(this.index >= this.loadResAry.length || 2 != this.bigStep)) {
                    this.waitCount++;
                    var t = this.loadResAry[this.index++], i = t.resName, a = t.type || cc.SpriteFrame, o = t.retain, s = t.instantiate;
                    n.loadRes(i, a, function(t, i) {
                        if (t || (n.retainRes(i), o || n.releaseRes(i)), s && !t && i) {
                            if (!cc.isValid(e.node, !0)) return;
                            var a = n.autoReleaseInstantiate(i);
                            a.x = -1e4, a.y = -1e4, a.parent = e.node;
                        }
                        cc.isValid(e.node, !0) && (o || n.isNativeOnly() || n.clearCache(), e.totalCbCount++, 
                        e.updateLoadingBar(.18 + e.totalCbCount / e.loadResAry.length * .42), e.totalCbCount == e.loadResAry.length && e.onNext(), 
                        e.waitCount--);
                    }, 1);
                }
            },
            getData: function() {
                function e() {
                    this.totalCbCount++, this.updateLoadingBar(this.totalCbCount / this.keyList.length * .14), 
                    this.totalCbCount == this.keyList.length && this.onNext(), this.waitCount--;
                }
                if (!(this.index >= this.keyList.length || 1 != this.bigStep)) {
                    this.waitCount++;
                    var t = this.keyList[this.index++];
                    e = e.bind(this), t.type ? o.getObjFromJson(t.key, function(t) {
                        e();
                    }) : o.getData(t.key, function(t) {
                        e();
                    });
                }
            },
            updateLoadingBar: function(e) {
                null == e && (e = this.process), e < this.process || (this.process = e, this.readyCount > 1 && (e += this.sceneProgress, 
                e += this.subPackageProgress), this.loadingBar && cc.isValid(this.loadingBar.node) && (this.loadingBar.fillRange = e, 
                this.num.string = Math.floor(100 * e) + "%"));
            },
            showDebugInfo: function(e) {
                this.initDebugLabe(), this.debugLabel.string = e;
            },
            initDebugLabe: function() {
                if (!this.debugLabel) {
                    var e = new cc.Node();
                    e.parent = cc.find("Canvas"), e.anchorX = 1, e.anchorY = 0, e.color = cc.color(161, 143, 142, 255), 
                    this.debugLabel = e.addComponent(cc.Label), this.debugLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT, 
                    this.debugLabel.horizontalAlign = cc.Label.HorizontalAlign.RIGHT, e.width = 900;
                    var t = e.addComponent(cc.Widget);
                    t.isAlignRight = !0, t.isAlignBottom = !0, t.right = 36, t.bottom = 36;
                }
            },
            loadSubpackage: function() {
                var e = this, t = n.loadSubpackage("Script", function(e, t) {
                    cc.isValid(this.node) && (e ? (this.subPackageProgress = .04, this.loadSubpackageCount++) : (this.loadSubpackageFailCount++, 
                    t && this.loadSubpackageFailCount >= 30 && this.readyCount > 5 && (this.showDebugInfo("子包加载失败\n请先移除游戏，包括最近使用和收藏\n再通过搜索或者分享卡片进入游戏\n" + JSON.stringify(t)), 
                    this.desc.string = s.getText("waittingLoad"), this.loadSubpackageFailCount = 0), 
                    this.node.runAction(cc.sequence(cc.delayTime(.25), cc.callFunc(function() {
                        this.loadSubpackage();
                    }, this)))));
                }, this);
                t ? t.onProgressUpdate(function(t) {
                    cc.isValid(e.node) && (e.subPackageProgress = .04 * Math.min(t.totalBytesWritten / t.totalBytesExpectedToWrite, 1), 
                    e.updateLoadingBar());
                }) : (this.subPackageProgress = .04, this.updateLoadingBar());
            },
            startLoad: function() {
                var e = this, t = function() {
                    n.isNativeOnly() && cc.tween(e.node).delay(15).call(function() {
                        cc.isValid(e.node) && (e.isNewUser || n.loadRes("Prefab/hotUpdateRepair", cc.Prefab, function(t, i) {
                            !t && cc.isValid(e.node) && (e.isNewUser || (n.autoReleaseInstantiate(i).parent = cc.find("Canvas")));
                        }));
                    }).start(), e.loadSubpackage(), a.login(function() {
                        if (a.openid) {
                            if (o.globalKey = a.openid, a.orgOpenId && (o.globalKey = a.orgOpenId), o.getData("signupTime", function(e) {
                                e || a.getSignupTime(function(e) {
                                    e && o.setData("signupTime", e, function() {}, this);
                                }, this);
                            }, this), "undefined" != typeof wx) {
                                var e = wx.getOpenDataContext();
                                e && e.postMessage({
                                    action: "selfOpenid",
                                    data: a.openid
                                });
                            }
                        } else this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            this.failLoginCount ? this.failLoginCount++ : this.failLoginCount = 1, this.failLoginCount >= 4 && (this.desc.string = s.getText("waittingLoad"), 
                            n.reportMonitor("5", 1)), this.startLoad();
                        }, this)));
                    }, e), 0 == e.readyCount && e.onNext();
                };
                this.checkBigVersion(function(i, n) {
                    i > 0 ? e.showBigVersionWarnDlg(n, function() {
                        t();
                    }) : 0 == i ? e.startHotUpdate(function() {
                        t();
                    }) : t();
                });
            },
            onStoryStar: function(e) {
                function t(i) {
                    var n = this, o = s.getText("story_begin_" + i), h = o.split(""), l = a[i - 1].lbDelay, u = h.length * l + 2.5, d = 0, f = cc.find("Canvas");
                    this.storyDesc.string = "";
                    var g = 0;
                    c.runAction(cc.repeat(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
                        this.storyDesc.string += h[g++];
                    }, this)), h.length));
                    var p = function() {
                        if (i >= e.length) return r.runAction(cc.fadeOut(.3)), void c.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                            this.onStoryEnd();
                        }, n)));
                        r.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                            this.storySprite.spriteFrame = e[i], r.y = a[i].y;
                        }, n), cc.fadeIn(.5))), c.runAction(cc.sequence(cc.fadeOut(.3), cc.delayTime(1), cc.callFunc(function() {
                            this.storyDesc.string = "", t(i + 1);
                        }, n), cc.fadeIn(.5)));
                    };
                    c.runAction(cc.sequence(cc.delayTime(u), cc.callFunc(function() {
                        0 == d && (d = 2, f.off("click"), p());
                    }, this))), f.getComponent(cc.Button) || f.addComponent(cc.Button), f.off("click"), 
                    f.on("click", function() {
                        0 == d && (g < h.length && (g = h.length, this.storyDesc.string = o), d = 1, c.stopAllActions(), 
                        f.off("click"), f.on("click", function() {
                            1 == d && (d = 2, c.stopAllActions(), f.off("click"), p());
                        }, this), c.runAction(cc.sequence(cc.delayTime(1.2), cc.callFunc(function() {
                            d = 2, f.off("click"), p();
                        }, this))));
                    }, this);
                }
                var i = this.stotySkip.getComponent(cc.Label);
                i.string = s.getText("jumpOffPrg"), n.fixLabelOpt(i, 1), this.storyLock = !0, this.process = 0, 
                this.isNewUser = !0, o.onStartSceneExit();
                var a = [ {
                    y: 150,
                    lbDelay: .25
                }, {
                    y: 50,
                    lbDelay: .14
                }, {
                    y: 100,
                    lbDelay: .15
                }, {
                    y: 100,
                    lbDelay: .14
                }, {
                    y: 120,
                    lbDelay: .14
                } ];
                this.num.node.parent.runAction(cc.fadeOut(.3)), this.anim.node.runAction(cc.fadeOut(.3)), 
                this.loadSpNode && this.loadSpNode.runAction(cc.fadeOut(.3)), this.storySprite.spriteFrame = e[0];
                var r = this.storySprite.node;
                r.y = a[0].y, r.opacity = 0, r.runAction(cc.sequence(cc.delayTime(.3), cc.fadeIn(.5)));
                var c = this.storyDesc.node;
                c.opacity = 0, t = t.bind(this), c.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                    t(1), this.updateLoadingBar(0), this.onNext();
                }, this), cc.fadeIn(.5))), this.stotySkip.active = !0, this.stotySkip.opacity = 0, 
                this.stotySkip.runAction(cc.fadeIn(1)), this.stotySkip.on("click", function() {
                    this.isStoryEnding || (this.onStoryEnd(), this.storySprite.node.active = !1, this.storyDesc.node.active = !1, 
                    1 == this.readyCount && (this.updateLoadingBar(0), this.onNext()));
                }, this);
            },
            onStoryEnd: function() {
                if (!this.isStoryEnding) {
                    if (this.isStoryEnding = !0, this.stotySkip.active = !1, this.storyLoadUrls) for (var e = 0; e < this.storyLoadUrls.length; e++) {
                        var t = this.storyLoadUrls[e];
                        cc.loader.releaseRes(t, cc.SpriteFrame);
                    }
                    o.getData("cookbook_unlock_food_10", function(e) {
                        console.log("food:" + e), e ? (this.storyLock = !1, this.num.node.parent.runAction(cc.fadeIn(.3)), 
                        this.anim.node.runAction(cc.fadeIn(.3)), this.loadSpNode && this.loadSpNode.runAction(cc.fadeIn(.3))) : o.setData("cookbook_unlock_food_10", 1, function(e, t) {
                            t ? this.showDebugInfo("存档加载失败\n请先移除游戏，包括最近使用和收藏\n再通过搜索或者分享卡片进入游戏\n" + t) : (console.log("food被重置"), 
                            this.storyLock = !1, this.num.node.parent.runAction(cc.fadeIn(.3)), this.anim.node.runAction(cc.fadeIn(.3)), 
                            this.loadSpNode && this.loadSpNode.runAction(cc.fadeIn(.3)));
                        }, this);
                    }, this, !0);
                }
            },
            initView: function() {
                var e = this;
                r.app_type && n.isNativeOnly() ? "global" == r.app_type ? this.versionLbl.string = r.version + ".g" : this.versionLbl.string = r.version + ".i" : this.versionLbl.string = r.version, 
                this.loadingBar.node.parent.active = !0, this.updateLoadingBar(0);
                var t = Math.floor(12 * Math.random());
                if (this.desc.string = s.getText("loading_tip_" + t % 3), n.fixLabel(this.desc, 360, 120, cc.Label.HorizontalAlign.LEFT, cc.Label.VerticalAlign.TOP), 
                Math.random() < .85) {
                    var i = [ "skill_1", "employee_2", "employee_3", "employee_4", "employee_5", "employee_7", "employee_8", "employee_9", "employee_11", "loading_aixinduoduo", "loading_jiayoupidan", "loading_tiaowujiji" ][t];
                    n.loadRes("Animation/" + i, cc.AnimationClip, function(t, i) {
                        if (t) console.error(t); else {
                            if (!cc.isValid(e.node)) return n.retainRes(i), void n.releaseRes(i);
                            e.loadResRefAry.push(i), n.retainRes(i), e.anim.addClip(i, "anim"), e.anim.play("anim");
                        }
                    }, 5);
                } else {
                    var a = new cc.Node(), o = a.addComponent(h);
                    a.x = 0, a.y = 300, a.parent = this.node, this.loadSpNode = a, n.loadRes("Employees/Loading_particle_zhaocaimao", cc.SpriteFrame, function(t, i) {
                        if (t) console.error(t); else {
                            if (!cc.isValid(e.loadSpNode)) return n.retainRes(i), void n.releaseRes(i);
                            o.spriteFrame = i, e.loadResRefAry.push(i), n.retainRes(i);
                        }
                    }, 5);
                }
            },
            startHotUpdate: function(e) {
                var t = this;
                !r.isDebug && r.app_type && n.isNativeOnly() ? n.loadRes("Prefab/hotUpdateNode", cc.Prefab, function(i, a) {
                    if (i) console.log(i), e(); else {
                        var o = n.autoReleaseInstantiate(a);
                        o.parent = t.node;
                        var r = o.getComponent("hotUpdate");
                        r.init(function(i) {
                            0 === i ? (t.desc.string = s.getText("loading_tip_updating"), r.hotUpdate()) : (o.destroy(), 
                            e());
                        }, function(i, n) {
                            0 === i ? t.updateLoadingBar(n) : (o.destroy(), t.process = 0, t.updateLoadingBar(0), 
                            e());
                        }), t.desc.string = s.getText("loading_tip_check_update"), t.updateLoadingBar(0);
                    }
                }) : e();
            },
            checkBigVersion: function(e) {
                r.app_type && n.isNativeOnly() ? a.checkBigVersion(function(t, i) {
                    if (0 == t) {
                        var n = i.isUpdate, a = i.url;
                        n ? e(1, a) : e(0);
                    } else e(-1);
                }) : e(-1);
            },
            showBigVersionWarnDlg: function(e, t) {
                n.loadRes("Prefab/bigVersionWarnDlg", cc.Prefab, function(i, a) {
                    if (i) t(); else {
                        var o = n.autoReleaseInstantiate(a);
                        o.getComponent("bigVersionWarnDlg").init(e, t), o.parent = cc.find("Canvas");
                    }
                }, 10);
            },
            showLoginButton: function() {
                var e = this;
                n.loadRes("Prefab/loginNode", cc.Prefab, function(t, i) {
                    if (t) return o.clearAllListener(), n.onRestart(), void n.gameRestart();
                    e.loginNode = n.autoReleaseInstantiate(i), e.loginNode.parent = cc.find("Canvas/npcDlg"), 
                    e.listenerAry.push(o.addListener("msg_startLoad", function() {
                        this.loginNode.active = !1, this.initView(), this.startLoad();
                    }, e));
                }, 10);
            },
            preloadScene: function() {
                var e = this;
                this.loadSubpackageCount < 1 ? this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    if (this.loadSubpackageTryCount ? this.loadSubpackageTryCount++ : this.loadSubpackageTryCount = 1, 
                    this.loadSubpackageTryCount <= 22 || this.readyCount <= 5) this.preloadScene(); else {
                        n.reportMonitor("0", 1);
                        var e = this;
                        "undefined" != typeof wx && wx.getSavedFileList ? wx.getSavedFileList({
                            success: function(t) {
                                var i = t.fileList.length;
                                i > 0 ? function() {
                                    for (var n = 0, a = 0; a < i; a++) wx.removeSavedFile({
                                        filePath: t.fileList[a].filePath,
                                        complete: function(t) {
                                            ++n >= i && e.preloadScene();
                                        }
                                    });
                                }() : e.preloadScene();
                            },
                            fail: function() {
                                e.preloadScene();
                            }
                        }) : e.preloadScene();
                    }
                }, this))) : cc.director.preloadScene("main", function(t, i, n) {
                    e.sceneProgress = t / i * e.sceneTotal, e.updateLoadingBar();
                }, function(t) {
                    cc.isValid(e.node) && (t ? (e.failPreloadCount ? e.failPreloadCount++ : e.failPreloadCount = 1, 
                    e.failPreloadCount >= 20 && (e.desc.string = s.getText("waittingLoad"), n.reportMonitor("2", 1)), 
                    e.failPreloadCount >= 30 && (e.showDebugInfo(JSON.stringify(t)), e.failPreloadCount = 0), 
                    e.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                        this.preloadScene();
                    }, e)))) : e.isSceneReady = !0);
                });
            },
            onNext: function(t) {
                if (t) return this.needRestartGame ? (this.needRestartGame = null, this.unschedule(this.update), 
                o.clearAllListener(), n.onRestart(), void setTimeout(function() {
                    n.gameRestart();
                }, 800)) : (this.readyCount--, void this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                    this.onNext();
                }, this))));
                if (1 == ++this.readyCount) o.getData("cookbook_unlock_food_10", function(e, t, i) {
                    var a = this;
                    if (e > 0 || i > 0) this.onNext(); else {
                        var s = [ "Story/Story_1", "Story/Story_2", "Story/Story_3", "Story/Story_4", "Story/Story_5" ];
                        this.storyLoadUrls = s;
                        for (var r = 0, c = [], h = s.length, l = [], u = 0; u < s.length; u++) !function(e) {
                            c.push(0), n.loadRes(s[e], cc.SpriteFrame, function(t, i) {
                                if (t || (!cc.isValid(a.node) || h <= 0 ? cc.loader.releaseRes(s[e], cc.SpriteFrame) : l.push(s[e])), 
                                !(h <= 0)) if (h--, t) {
                                    for (var n = 0; n < l.length; n++) {
                                        var u = l[n];
                                        cc.loader.releaseRes(u, cc.SpriteFrame);
                                    }
                                    h = 0, o.setData("cookbook_unlock_food_10", 1, function() {
                                        this.process = 0, this.updateLoadingBar(0), this.onNext();
                                    }, a);
                                } else c[e] = i, r++, a.updateLoadingBar(r / s.length), r >= s.length && a.onStoryStar(c);
                            }, 2);
                        }(u);
                    }
                }, this, !0); else if (2 == this.readyCount) {
                    var i = function() {
                        o.setData("version", 35, function() {
                            this.onNext();
                        }, this);
                    };
                    if (this.updateLoadingBar(.01), !a.openid) return void this.onNext(!0);
                    i = i.bind(this), o.getData("version", function(t, n, s) {
                        if (t || n) if (34 != s) if (t < 34) {
                            var r = function() {
                                function e() {
                                    o.getData("tutorials_progress", function(e) {
                                        e >= 5 ? o.setData("tutorials_progress", 9, function() {
                                            i();
                                        }) : i();
                                    }, this);
                                }
                                o.getStarSum(function(t) {
                                    t >= 2e3 ? o.setData("ads_lv", 3, function() {
                                        e();
                                    }, this) : t >= 1e3 ? o.setData("ads_lv", 2, function() {
                                        e();
                                    }, this) : t >= 200 ? o.setData("ads_lv", 1, function() {
                                        e();
                                    }, this) : e();
                                }, this), e = e.bind(this);
                            };
                            r = r.bind(this), a.getStorageInfo(function(t) {
                                if (o.globalKey = a.openid, a.orgOpenId && (o.globalKey = a.orgOpenId), t) {
                                    var i = 0, n = null;
                                    try {
                                        n = JSON.parse(t);
                                    } catch (e) {}
                                    if (n) {
                                        for (var s in n) n.hasOwnProperty(s) && i++;
                                        if (i <= 0) r(); else for (var c in o.cache = {}, n) if (n.hasOwnProperty(c)) {
                                            var h = n[c];
                                            if (isNaN(h)) if ("string" == typeof h && h.length >= 9 && "t" == h.charAt(0)) {
                                                var l = h.substring(9);
                                                isNaN(l) ? --i <= 0 && r() : -1 != l.indexOf(".") ? (h = parseFloat(l), o.setData(c, h, function() {
                                                    --i <= 0 && r();
                                                }, this)) : (h = parseInt(l), o.setData(c, h, function() {
                                                    --i <= 0 && r();
                                                }, this));
                                            } else if ("mailData" == c) {
                                                var u = e("CryptoJS"), d = JSON.parse(h), f = d.mailList, g = JSON.stringify(f), p = u.MD5(g + o.globalKey).toString(), m = p.charAt(17) + p.charAt(3) + p.charAt(27) + p.charAt(11) + p.charAt(23);
                                                d.sign = m, o.setObjToJson("mailData", d, function() {
                                                    --i <= 0 && r();
                                                }, this);
                                            } else --i <= 0 && r(); else "string" == typeof h && (h = "star" == c ? parseFloat(h) : parseInt(h)), 
                                            o.setData(c, h, function() {
                                                --i <= 0 && r();
                                            }, this);
                                        }
                                    } else r();
                                } else r();
                            }, this);
                        } else this.onNext(); else i(); else i();
                    }, this, !0);
                } else if (3 == this.readyCount) this.bigStep = 1, this.initLoadCounter(), this.initPreloadUserData(), 
                this.preloadScene(); else if (4 == this.readyCount) this.updateLoadingBar(.16), 
                this.bigStep = 0, o.initGetSum(function() {
                    this.onNext();
                }, this); else if (5 == this.readyCount) this.updateLoadingBar(.17), o.getStarSum(function(e) {
                    n.isNativeOnly() && "inland" == r.app_type && a.checkIsRealNameReg(function(e, t) {
                        0 == e && (o.isRealNameReg = !0, o.cardAge = t), console.log("@@@@j checkIsRealNameReg ", o.isRealNameReg, o.cardAge);
                    }), a.checkLogin(e, function(e) {
                        1 == e ? (this.orgDescStr = this.desc.string, this.desc.string = s.getText("loading_tip_downloadRecord"), 
                        a.downloadRecord(function(e) {
                            0 == e || -2 == e ? o.getData("version", function(e) {
                                e < 34 ? (this.needRestartGame = !0, this.onNext(!0)) : this.onNext();
                            }, this) : (this.downloadRetry ? ++this.downloadRetry >= 4 && n.reportMonitor("6", 1) : this.downloadRetry = 1, 
                            this.onNext(!0));
                        }, this)) : 2 == e ? (a.uploadRecord(), this.onNext()) : 0 == e || 4 == e ? this.onNext() : (this.checkLoginRetry ? (++this.checkLoginRetry >= 4 && (n.reportMonitor("7", 1), 
                        this.desc.string = s.getText("waittingLoad")), this.checkLoginRetry >= 8 && (this.showDebugInfo("请确保网络通畅，或者联系我们"), 
                        this.checkLoginRetry = 0)) : this.checkLoginRetry = 1, this.onNext(!0));
                    }, this);
                }, this); else if (6 == this.readyCount) n.isNativeOnly() && "global" == r.app_type && a.biLoginInfo(function() {}), 
                this.orgDescStr && (this.desc.string = this.orgDescStr, this.orgDescStr = null), 
                this.desc.string = s.getText("loading_tip_enter"), this.updateLoadingBar(.18), this.initLoadCounter(), 
                this.initPreloadResData(); else if (7 == this.readyCount) this.updateLoadingBar(.6), 
                this.bigStep = 3, this.isSceneReady ? this.onNext() : this.onNext(!0); else if (this.readyCount >= 8) {
                    if (this.storyLock) return void this.onNext(!0);
                    this.gotoNextScene = !0, n.backAppButton = null, cc.director.loadScene("main") ? o.onStartSceneExit() : (this.needRestartGame = !0, 
                    this.onNext(!0));
                }
            },
            onClear: function() {
                o.clear();
            },
            updateWxAppBack: function() {
                var e = this;
                if ("undefined" != typeof wx && wx.launchApp && n.launchInfo) {
                    var t = n.launchInfo.scene, i = n.launchInfo.referrerInfo;
                    n.launchAppFlag = 1069 == t || 1036 == t, n.launchAppFlag && i && i.appId ? n.backAppButton || n.isBackAppButtonLoading || (n.isBackAppButtonLoading = !0, 
                    n.loadRes("Prefab/tencentAppBack", cc.Prefab, function(t, i) {
                        n.isBackAppButtonLoading = null, t ? console.log("@@load tencentAppBack", t) : cc.isValid(e.node) && (e.gotoNextScene || (n.backAppButton = n.autoReleaseInstantiate(i), 
                        n.backAppButton.parent = cc.find("Canvas"), n.backAppButton.zIndex = 1e3));
                    })) : n.backAppButton && (cc.isValid(n.backAppButton, !0) && n.backAppButton.destroy(), 
                    n.backAppButton = null);
                }
            },
            update: function(e) {
                if (1 == this.bigStep) for (var t = 14 - this.waitCount, i = 0; i < t; i++) this.getData(); else if (2 == this.bigStep) for (var a = 8 - this.waitCount, s = 0; s < a; s++) this.loadRes();
                1 != this.bigStep || this.isNewUser || o.loadAd(e), n.checkOldCaches(e), this.updateWxAppBack();
            },
            onDestroy: function() {
                if (this.loadResRefAry && this.loadResRefAry.length > 0) {
                    for (var e = 0; e < this.loadResRefAry.length; e++) {
                        var t = this.loadResRefAry[e];
                        n.releaseRes(t);
                    }
                    this.loadResRefAry = null;
                }
                for (var i = 0; i < this.listenerAry.length; i++) o.removeListener(this.listenerAry[i]);
                this.listenerAry = null;
            }
        }), cc._RF.pop();
    }, {
        CryptoJS: "CryptoJS",
        SceneModule: "SceneModule",
        config: "config",
        destroySelfAction: "destroySelfAction",
        global: "global",
        localize: "localize",
        memorialData: "memorialData",
        netManager: "netManager",
        twSprite: "twSprite",
        userData: "userData"
    } ],
    tencentAppBack: [ function(e, t, i) {
        cc._RF.push(t, "56be9+CqOtPu4H6aPRlkeh+", "tencentAppBack");
        var n = e("global");
        cc.Class({
            extends: cc.Component,
            properties: {
                desc: cc.Label
            },
            start: function() {
                var e = n.launchInfo.referrerInfo;
                if (e) {
                    var t = e.appId;
                    this.desc.string = "wx073f4a4daff0abe8" == t ? "腾讯新闻" : "wxca942bbff22e0e51" == t ? "腾讯视频" : "wx4297cf03e4daa5fa" == t ? "动物餐厅" : "未知";
                }
            },
            onBack: function() {
                var e = this;
                if (cc.isValid(this.node, !0)) {
                    var t = "", i = n.launchInfo.referrerInfo;
                    if (i) {
                        var a = i.appId;
                        if (!a) return console.log("@@@ no app"), void this.onClose();
                        "wx073f4a4daff0abe8" == a ? t = "qqnews://article_9528?act=restore&from=news_ad_gh_99212a2e323c" : "wxca942bbff22e0e51" == a || ("还未开通功能" == a ? t = "qqsports://tadopenapp?action=66&from=客户英文名称" : "wx4297cf03e4daa5fa" == a && (t = "test"));
                    }
                    if (!wx.launchApp) return console.log("@@@ no launchApp"), void this.onClose();
                    try {
                        wx.launchApp({
                            appParameter: t,
                            success: function(t) {
                                n.launchAppFlag = !1, console.log("launchApp success", t), e.onClose();
                            },
                            fail: function(e) {
                                return console.log("launchApp fail", e);
                            }
                        });
                    } catch (e) {
                        console.log("@@@launchApp err", e), this.onClose();
                    }
                }
            },
            onClose: function() {
                cc.isValid(this.node, !0) && (n.backAppButton = null, n.isBackAppButtonLoading = 2, 
                this.node.destroy());
            }
        }), cc._RF.pop();
    }, {
        global: "global"
    } ],
    toastDlg: [ function(e, t, i) {
        cc._RF.push(t, "272f99cq49KQonOWwqcrNDn", "toastDlg");
        var n = e("global");
        cc.Class({
            extends: e("ViewHandler"),
            properties: {
                toastContent: cc.Label
            },
            open: function(e) {
                this.holdToastTime = 1, this.content = e.content, void 0 !== e.holdToastTime && ("capsule" === e.holdToastTime.channel ? this.node.group = "ui" : this.holdToastTime = e.holdToastTime || 1);
            },
            onEnable: function() {
                var e = this;
                n.fixLabel(this.toastContent), this.toastContent.string = this.content, this.sprite = this.node.getChildByName("Toast"), 
                this.contentHeight = this.sprite.getChildByName("toastLabel").height, this.sprite.setContentSize(this.sprite.width, this.contentHeight + 150), 
                this.node.opacity = 0, cc.tween(this.node).to(.2, {
                    opacity: 255
                }).delay(this.holdToastTime || 1).to(.18, {
                    opacity: 0
                }).call(function() {
                    e.close();
                }).start();
            },
            destroySelf: function() {
                var e = this;
                cc.tween(this.node).to(.18, {
                    opacity: 0
                }).call(function() {
                    e.close();
                }).start();
            },
            update: function() {
                var e = this.sprite.getChildByName("toastLabel").height;
                e != this.contentHeight && this.sprite.setContentSize(this.sprite.width, e + 150);
            }
        }), cc._RF.pop();
    }, {
        ViewHandler: "ViewHandler",
        global: "global"
    } ],
    twAutoRelease: [ function(e, t, i) {
        cc._RF.push(t, "9a8d2t+q9dJFqbQH/QehIJy", "twAutoRelease");
        var n = e("global");
        cc.Class({
            extends: cc.Component,
            editor: {
                menu: "twComponent/twAutoRelease"
            },
            initPrefab: function(e) {
                this.prefab = e, n.retainRes(e);
            },
            onDestroy: function() {
                this.prefab && (n.releaseRes(this.prefab), this.prefab = null);
            }
        }), cc._RF.pop();
    }, {
        global: "global"
    } ],
    twComponent: [ function(e, t, i) {
        cc._RF.push(t, "7415ajyMlxJ6Y5Cb92w3PrY", "twComponent");
        var n = e("global");
        cc.Class({
            extends: cc.Component,
            editor: {
                menu: "twComponent/twComponent"
            },
            properties: {
                _loadResMap: {
                    default: {}
                },
                _resRefNameMap: {
                    default: {}
                }
            },
            onLoad: function() {
                this.listenerAry || (this.listenerAry = []);
            },
            loadRes: function(e, t, i, a) {
                var o = this;
                n.loadRes(e, t, function(t, a) {
                    cc.isValid(o.node, !0) ? (!t && a && (n.retainRes(a), o._loadResMap[e] ? o._loadResMap[e].count++ : (o._loadResMap[e] = {
                        res: a,
                        count: 1
                    }, o._resRefNameMap[a._uuid] = e)), i(t, a)) : !t && a && (n.retainRes(a), n.releaseRes(a));
                }, a);
            },
            releaseRes: function(e) {
                var t = this._resRefNameMap[e._uuid];
                this.releaseResByPath(t);
            },
            releaseResByPath: function(e) {
                var t = this._loadResMap[e];
                t ? (n.releaseRes(t.res), t.count--, t.count <= 0 && delete this._loadResMap[e]) : console.error("@@release Error", e);
            },
            onDestroy: function() {
                if (this._loadResMap) {
                    for (var t in this._loadResMap) if (this._loadResMap.hasOwnProperty(t)) {
                        var i = this._loadResMap[t];
                        n.releaseRes(i.res, null, i.count);
                    }
                    this._loadResMap = null;
                }
                var a = e("userData");
                if (this.listenerAry) {
                    for (var o = 0; o < this.listenerAry.length; o++) a.removeListener(this.listenerAry[o]);
                    this.listenerAry = null;
                }
            }
        }), cc._RF.pop();
    }, {
        global: "global",
        userData: "userData"
    } ],
    twQueue: [ function(e, t, i) {
        cc._RF.push(t, "588ffu7naFM3q8+ETr60jeC", "twQueue");
        var n = cc.Class({
            properties: {
                dataMap: {
                    default: {}
                },
                head: null,
                tail: null,
                id: 0
            },
            isEmpty: function() {
                return null == this.head;
            },
            popTop: function() {
                if (this.isEmpty()) return null;
                var e = this.dataMap[this.head];
                return this.dataMap[this.head] = null, this.head = e.next, null == this.head && (this.tail = null), 
                e.value;
            },
            pushBack: function(e) {
                var t = {
                    value: e
                }, i = ++this.id;
                this.dataMap[i] = t, null == this.head && (this.head = i), null != this.tail && (this.dataMap[this.tail].next = i), 
                this.tail = i;
            },
            clear: function() {
                this.head = null;
            }
        });
        t.exports = n, cc._RF.pop();
    }, {} ],
    twSprite: [ function(e, t, i) {
        cc._RF.push(t, "5f7ed9drUtE+6/hOIzKSn7c", "twSprite");
        var n = e("global");
        e("config"), cc.Class({
            extends: cc.Sprite,
            editor: {
                menu: "twComponent/twSprite"
            },
            onLoad: function() {
                this._spriteFrame && !this.initApplySpriteFrame && (this.initApplySpriteFrame = !0, 
                n.retainRes(this._spriteFrame)), this.showRefCount();
            },
            _applySpriteFrame: function(e) {
                this._super(e), e && this.initApplySpriteFrame && n.releaseRes(e), this.initApplySpriteFrame || (this.initApplySpriteFrame = !0);
                var t = this._spriteFrame;
                t && n.retainRes(t), this.showRefCount();
            },
            onDestroy: function() {
                this._super();
                var e = this._spriteFrame;
                e && (this._spriteFrame = null, n.releaseRes(e));
            },
            showRefCount: function() {},
            update: function(e) {}
        }), cc._RF.pop();
    }, {
        config: "config",
        global: "global"
    } ],
    userData: [ function(t, i, n) {
        cc._RF.push(i, "d9ec2weT9lIoJ0AW+qklJk9", "userData");
        var a = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, o = t("global"), s = t("localize"), r = t("CryptoJS"), c = t("AdSDKPlatformManager"), h = t("twSprite"), l = {
            cache: {},
            cacheType: {},
            globalKey: "twgame_rj32io",
            init: function() {
                this.cache = {}, this.cacheType = {}, this.mailListCache = null, this.AllSum = {
                    star: 0,
                    tip: 0,
                    cap: 0,
                    factor: 0,
                    KtGenCoin: 0,
                    plate: 0,
                    buffetFoodTip: 0,
                    buffet_cusCoinPro: 0,
                    buffet_cusStarPro: 0,
                    buffet_cusPlatePro: 0
                }, this.AllSum.buffet_cusCoinPro = this.encryptData(this.AllSum.buffet_cusCoinPro, "buffet_cusCoinPro"), 
                this.AllSum.buffet_cusStarPro = this.encryptData(this.AllSum.buffet_cusStarPro, "buffet_cusStarPro"), 
                this.AllSum.buffet_cusPlatePro = this.encryptData(this.AllSum.buffet_cusPlatePro, "buffet_cusPlatePro"), 
                this.getSumCallbackAry = [], this.firstCallInitGetSum = !0, this.id = 0, this.idMap = {}, 
                this.listenerMap = {}, this.baseCookTimeFactor = 0;
            },
            clear: function() {
                cc.sys.localStorage.clear(), this.cache = {};
            },
            vitalKeyMap: {},
            encryptData: function(e, t) {
                if (t && this.vitalKeyMap[t]) return this.getEncryptString(e, t);
                var i = Math.floor(10 * Math.random());
                return o.getRandomString(3) + e + i + o.getRandomString(2);
            },
            decodeData: function(e, t) {
                if (!e || "string" != typeof e) return 0;
                if (t && this.vitalKeyMap[t]) {
                    var i = e.substring(6, 9), n = e.substring(9), a = parseFloat(n);
                    return this.getEncryptString(a, t, parseInt(i)) == e ? a : 0;
                }
                var o = e.substring(3, e.length - 3);
                return parseFloat(o);
            },
            getEncryptString: function(e, t, i) {
                i || (i = 100 + Math.floor(900 * Math.random()));
                var n = e + 100 + i, a = r.MD5(n + this.globalKey + t).toString();
                return "t" + (a.charAt(17) + a.charAt(3) + a.charAt(27) + a.charAt(11) + a.charAt(23)) + i + e;
            },
            setData: function(e, t, i, n) {
                if (n && (i = i.bind(n)), isNaN(t)) return console.log("@@Nan value", e), o.reportMonitor("7", 1), 
                void i();
                var a = this.decodeData(this.cache[e], e);
                if (this.cache[e] && a == t) i(); else {
                    var s = this.getEncryptString(t, e);
                    if ("undefined" == typeof wx) return null == a && (a = parseInt(cc.sys.localStorage.getItem(e) || "0")), 
                    this.cache[e] = this.encryptData(t, e), cc.sys.localStorage.setItem(e, s), this.sendMessage(e + "_change", t, a), 
                    void i(t);
                    this.cache[e] = this.encryptData(t, e);
                    var r = this;
                    !function n() {
                        wx.setStorage({
                            key: e,
                            data: s,
                            success: function(n) {
                                null != a ? r.sendMessage(e + "_change", t, a) : r.sendMessage(e + "_change", t, 0), 
                                i(t);
                            },
                            fail: function(e) {
                                console.log(e), setTimeout(function() {
                                    n();
                                }, 200);
                            }
                        });
                    }();
                }
            },
            getData: function(e, t, i, n) {
                if (i && (t = t.bind(i)), null == this.cache[e]) {
                    if ("undefined" == typeof wx) {
                        var a = cc.sys.localStorage.getItem(e), o = 0, s = null, r = null;
                        if (!a || "string" != typeof a || a.length <= 8) o = 0, s = !0; else {
                            var c = a.substring(6, 9), h = a.substring(9), l = parseFloat(h);
                            this.getEncryptString(l, e, parseInt(c)) == a ? o = "star" == e ? l : parseInt(l) : (r = "star" == e ? l : parseInt(l), 
                            s = !0);
                        }
                        return isNaN(o) && (o = 0), s && n || (this.cache[e] = this.encryptData(o, e)), 
                        void t(o, s, r);
                    }
                    var u = this, d = 5;
                    !function i() {
                        wx.getStorage({
                            key: e,
                            success: function(i) {
                                var a = 0, o = i.data, s = null, r = null;
                                if (o && "string" == typeof o) if (o.length <= 8) a = 0, s = !0; else {
                                    var c = o.substring(6, 9), h = o.substring(9), l = parseFloat(h);
                                    u.getEncryptString(l, e, parseInt(c)) == o ? a = "star" == e ? l : parseInt(l) : (r = "star" == e ? l : parseInt(l), 
                                    s = !0);
                                } else s = !0;
                                s && n || (u.cache[e] = u.encryptData(a, e)), t(a, s, r);
                            },
                            fail: function(n) {
                                if ("getStorage:fail data not found" != n && d > 0) return d--, void i();
                                u.cache[e] = u.encryptData(0, e), t(0);
                            }
                        });
                    }();
                } else t(this.decodeData(this.cache[e], e));
            },
            getDataByArray: function(e, t, i) {
                var n = this;
                i && (t = t.bind(i));
                var a = [], o = !0, s = !1, r = void 0;
                try {
                    for (var c, h = e[Symbol.iterator](); !(o = (c = h.next()).done); o = !0) !function(e) {
                        a.push(new Promise(function(t) {
                            n.getData(e, t);
                        }));
                    }(c.value);
                } catch (e) {
                    s = !0, r = e;
                } finally {
                    try {
                        !o && h.return && h.return();
                    } finally {
                        if (s) throw r;
                    }
                }
                Promise.all(a).then(t);
            },
            removeData: function(e, t, i) {
                if (i && (t = t.bind(i)), "undefined" == typeof wx) {
                    cc.sys.localStorage.removeItem(e);
                    var n = this.decodeData(this.cache[e], e);
                    return this.cache[e] = this.encryptData(0, e), void t(n);
                }
                var a = this;
                wx.removeStorage({
                    key: e,
                    complete: function() {
                        var i = a.decodeData(a.cache[e], e);
                        a.cache[e] = a.encryptData(0, e), null != i ? a.sendMessage(e + "_change", 0, i) : a.sendMessage(e + "_change", 0, 0), 
                        t();
                    }
                });
            },
            changeData: function(e, t, i, n) {
                var a = this;
                this.getData(e, function(o) {
                    o || (o = 0), isNaN(t) && (t = 0), (o += t) < 0 && (o = 0), a.setData(e, o, i, n);
                });
            },
            setDataByArray: function(e, t, i) {
                i && (t = t.bind(i));
                for (var n = e.length, a = 0; a < e.length; a++) {
                    var o = e[a];
                    this.setData(o.key, o.value, function() {
                        --n <= 0 && t();
                    });
                }
            },
            setObjToJson: function(e, i, n, o) {
                o && (n = n.bind(o));
                var s = [], r = null, c = JSON.stringify(i, function(e, t) {
                    if ("object" === (void 0 === t ? "undefined" : a(t)) && null !== t) {
                        if (-1 !== s.indexOf(t)) try {
                            return JSON.parse(JSON.stringify(t));
                        } catch (e) {
                            return r = e, void console.log(e);
                        }
                        s.push(t);
                    }
                    return t;
                });
                if (s = null, "undefined" == typeof wx) return this.cache[e] = i, this.cacheType[e] = "obj", 
                cc.sys.localStorage.setItem(e, c), void n();
                if (r) {
                    if (this.setObjErrorUpTime || (this.setObjErrorUpTime = 1), Date.parse(new Date()) - this.setObjErrorUpTime > 2e3 && !this.setObjIsNeting) {
                        this.setObjIsNeting = !0;
                        var h = t("config"), l = t("netManager"), u = {
                            exception: "key: " + e + ", value: " + c + ", Error: " + r,
                            type: h.app_type,
                            version: h.version
                        };
                        l.uploadErrorInfo(u, function(e) {
                            this.setObjIsNeting = null, this.setObjErrorUpTime = Date.parse(new Date());
                        }, this);
                    }
                    n();
                } else this.cache[e] = i, this.cacheType[e] = "obj", function t() {
                    wx.setStorage({
                        key: e,
                        data: c,
                        success: function(e) {
                            n();
                        },
                        fail: function(e) {
                            console.log(e), setTimeout(function() {
                                t();
                            }, 200);
                        }
                    });
                }();
            },
            getObjFromJson: function(e, t, i) {
                if (i && (t = t.bind(i)), null != this.cache[e]) {
                    var n = this.cache[e];
                    return -404 === n && (n = null), void t(n);
                }
                if ("undefined" != typeof wx) {
                    var a = this, o = 5;
                    !function i() {
                        wx.getStorage({
                            key: e,
                            success: function(i) {
                                if ("" == i.data || "-404" == i.data || -404 == i.data) a.cache[e] = null, t(null); else {
                                    var n = null;
                                    try {
                                        n = JSON.parse(i.data);
                                    } catch (e) {}
                                    a.cache[e] = n, a.cacheType[e] = "obj", t(n);
                                }
                            },
                            fail: function(n) {
                                if ("getStorage:fail data not found" != n && o > 0) return o--, void i();
                                a.cache[e] = -404, t(null);
                            }
                        });
                    }();
                } else {
                    var s = cc.sys.localStorage.getItem(e);
                    if (s) {
                        var r = null;
                        try {
                            r = JSON.parse(s);
                        } catch (e) {}
                        this.cache[e] = r, this.cacheType[e] = "obj", t(r);
                    } else t(null);
                }
            },
            id: 0,
            idMap: {},
            listenerMap: {},
            addListener: function(e, t, i) {
                var n = this.listenerMap, a = {
                    id: this.id,
                    callback: t.bind(i)
                };
                return n[e] ? n[e].push(a) : n[e] = [ a ], this.idMap[this.id++] = e, a.id;
            },
            removeListener: function(e) {
                var t = this.idMap[e], i = this.listenerMap[t];
                if (i) for (var n = 0; n < i.length; n++) if (i[n].id == e) return void (i = i.splice(n, 1));
            },
            sendMessage: function(e, t, i) {
                var n = this.listenerMap[e];
                if (n) for (var a = 0; a < n.length; a++) n[a].callback(t, i);
            },
            clearAllListener: function() {
                this.listenerMap = [], this.wxOnHide && (wx.offHide(this.wxOnHide), this.wxOnHide = null), 
                this.wxOnShow && (wx.offShow(this.wxOnShow), this.wxOnShow = null);
            },
            loadAdTimeCount: 0,
            isInterstitialAdReady: function(e) {
                if (o.isAppOnly()) return !0 === this.GDTInAdStatus;
                if (!this.interstitialAd) return !1;
                var t = this.interstitialAd[e];
                return !(!t || !t.isReady || t.timeCount < 15 || t.isWorking);
            },
            isJDInterstitialAdReady: function(e) {
                if (!this.JDInterstitialAd) return !1;
                var t = this.JDInterstitialAd[e];
                return !(!t || !t.isReady || t.timeCount < 15 || t.isWorking);
            },
            showInterstitialAd: function(e, t) {
                if (this.isInterstitialAdReady(e)) {
                    if (o.isAppOnly()) {
                        var i = this;
                        return c.InterstitialCallback = function(e) {
                            "0" === e ? (i.GDTInAdAction = 2, i.GDTInAdStatus = !1, t(!0)) : "-1" === e ? (i.GDTInAdAction = -2, 
                            i.GDTInAdStatus = !1, t(!1)) : (console.log("show interstitialAD unknow code is " + e + " " + (void 0 === e ? "undefined" : a(e))), 
                            t(!1));
                        }, void (o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "showInterstitialAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "()V"));
                    }
                    try {
                        var n = this.interstitialAd[e];
                        n.callback = t, n.isWorking = !0, n.ad.show().catch(function(e) {
                            n.isWorking = !1, n.timeCount = 10, n.callback && (n.callback(!1), n.callback = null), 
                            l.sendMessage("showToast", s.getText("toast_insertAd_short")), console.log(e);
                        });
                    } catch (e) {
                        console.log("err", e);
                    }
                } else t(!1);
            },
            showJDInterstitialAd: function(e, t) {
                if (this.isJDInterstitialAdReady(e)) try {
                    var i = this.JDInterstitialAd[e];
                    i.callback = t, i.isWorking = !0, i.ad.show().catch(function(e) {
                        i.isWorking = !1, i.timeCount = 10, i.callback && (i.callback(!1), i.callback = null), 
                        l.sendMessage("showToast", s.getText("toast_insertAd_short")), console.log(e);
                    });
                } catch (e) {
                    console.log("err", e);
                } else t(!1);
            },
            loadInterstitialAd: function(e) {
                var t = this;
                if (o.isAppOnly()) if (0 !== this.GDTInAdAction && 1 !== this.GDTInAdAction && -3 !== this.GDTInAdAction) {
                    var i = this;
                    c.InterstitialCallback = function(e) {
                        "0" === e ? (i.GDTInAdAction = 1, i.GDTInAdStatus = !0) : "-1" === e ? (i.GDTInAdAction = -1, 
                        i.GDTInAdStatus = !1) : "-3" === e ? (i.GDTInAdAction = -3, i.GDTInAdStatus = !1) : (console.log("load interstitialAD unknow code is " + e + " " + (void 0 === e ? "undefined" : a(e))), 
                        i.GDTInAdAction = -3, i.GDTInAdStatus = !1);
                    }, i.GDTInAdAction = 0, o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "loadInterstitialAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadInterstitialAd", "()V");
                } else -3 === this.GDTInAdAction && (this.waitInTime = void 0 === this.waitInTime ? e : this.waitInTime + e, 
                this.waitInTime >= 30 && (this.waitInTime = 0, this.GDTInAdAction = -1)); else if (this.interstitialAd) for (var n = 0; n < this.interstitialAd.length; n++) this.interstitialAd[n].timeCount += e; else if (this.interstitialAd = [], 
                "undefined" != typeof wx && wx.createInterstitialAd && !(o.compareVersion("2.6.4") < 0)) for (var s = [ "adunit-8dc97b84097a1891" ], r = 0; r < s.length; r++) !function(e) {
                    var i = wx.createInterstitialAd({
                        adUnitId: s[e]
                    }), n = {
                        ad: i,
                        timeCount: 60
                    };
                    t.interstitialAd.push(n), i.onLoad(function() {
                        n.isReady = !0;
                    }), i.onClose(function() {
                        n.isReady = !1, n.timeCount = 0, n.isWorking = !1, n.callback && (n.callback(!0), 
                        n.callback = null);
                    }), i.onError(function(e) {
                        cc.log(e);
                    });
                }(r);
            },
            onStartSceneEnter: function() {
                this.isInStartScene = !0, this.loadCustomAd();
            },
            onStartSceneExit: function() {
                this.isInStartScene = null, this.customAdInfo && (this.customAdInfo.ad.destroy(), 
                this.customAdInfo = null);
            },
            loadCustomAd: function() {
                if (o.isWxOnly() && wx.createCustomAd) {
                    var e = this, t = function() {
                        var t = e.systemInfo, i = t.screenWidth - 90, n = t.screenHeight - 140, a = wx.createCustomAd({
                            adUnitId: "adunit-3b68ac9a35eb65ad",
                            left: i,
                            top: n,
                            fixed: !1
                        });
                        e.customAdInfo = {
                            ad: a
                        }, a.onLoad(function() {
                            if (!e.isInStartScene && e.customAdInfo) return e.customAdInfo.ad.destroy(), void (e.customAdInfo = null);
                            e.customAdInfo && e.customAdInfo.ad.show().catch(function(e) {
                                cc.log("show customAd catch", e);
                            });
                        }), a.onClose(function() {
                            e.customAdInfo = null;
                        }), a.onError(function(t) {
                            cc.log("Load customAd err", t), e.customAdInfo && (e.customAdInfo.ad.destroy(), 
                            e.customAdInfo = null);
                        });
                    };
                    this.systemInfo ? t() : wx.getSystemInfo({
                        success: function(i) {
                            e.systemInfo = i, t();
                        },
                        fail: function() {
                            cc.log("getSystemInfo failed");
                        }
                    });
                }
            },
            loadJDInterstitialAd: function(e) {
                var t = this;
                if (o.isWxOnly() && wx.createInterstitialAd && !(o.compareVersion("2.6.4") < 0)) if (this.JDInterstitialAd) for (var i = 0; i < this.JDInterstitialAd.length; i++) this.JDInterstitialAd[i].timeCount += e; else {
                    this.JDInterstitialAd = [];
                    for (var n = [ "adunit-1b9c632c89fe61b7" ], a = 0; a < n.length; a++) !function(e) {
                        var i = wx.createInterstitialAd({
                            adUnitId: n[e]
                        }), a = {
                            ad: i,
                            timeCount: 60
                        };
                        t.JDInterstitialAd.push(a), i.onLoad(function() {
                            a.isReady = !0;
                        }), i.onClose(function() {
                            a.isReady = !1, a.timeCount = 0, a.isWorking = !1, a.callback && (a.callback(!0), 
                            a.callback = null);
                        }), i.onError(function(e) {
                            cc.log(e);
                        });
                    }(a);
                }
            },
            loadAd: function(e) {
                if (this.loadAdTimeCount += e, this.loadAdTimeCount >= .5) if (this.loadAdTimeCount -= .5, 
                e = .5, this.loadBannerAd(e), this.resetShareTime(), this.loadGamePortalAd(), this.checkIsAdOutOfUse(function(t) {
                    t && this.loadInterstitialAd(e);
                }, this, 8), "undefined" != typeof wx && wx.createRewardedVideoAd) {
                    if (this.adInfo) {
                        var i = this.adInfo;
                        if (0 == i.status ? (i.reloadTime += e, i.reloadTime >= 15 && (i.reloadTime = -2 * Math.random(), 
                        i.status = 1, i.videoAd.load().catch(function(e) {}))) : 1 == i.status && (i.adOutOfUseTimeOut += e, 
                        i.adOutOfUseTimeOut >= 40 && (i.status = 0, i.adOutOfUseTimeOut = 0, this.changeData("noSuitAdCount", 1, function() {
                            console.log("@@ timeout reload ad"), i.videoAd.load().catch(function(e) {});
                        }))), this.adInfoLong) {
                            var n = this.adInfoLong;
                            0 == n.status ? (n.reloadTime += e, n.reloadTime >= 15 && (n.reloadTime = -2 * Math.random(), 
                            n.status = 1, n.videoAd.load().catch(function(e) {}))) : 1 == n.status && (n.adOutOfUseTimeOut += e, 
                            n.adOutOfUseTimeOut >= 40 && (n.status = 0, n.adOutOfUseTimeOut = 0, n.videoAd.load().catch(function(e) {})));
                        }
                        return;
                    }
                    var s = this;
                    s.adInfo = {
                        status: 1,
                        reloadTime: 0,
                        adOutOfUseTimeOut: 0
                    };
                    var r = [ "adunit-a6f07708e9cb19d8" ];
                    "undefined" != typeof qq && (r = [ "3d9a8a1479d45e42f756ae907f548021" ]);
                    var h = wx.createRewardedVideoAd({
                        adUnitId: r[0]
                    });
                    if (h.onLoad(function() {
                        console.log("@@video onLoad"), s.adInfo.status = 2, s.adInfo.adOutOfUseTimeOut = 0, 
                        l.setData("noSuitAdCount", 0, function() {
                            l.getData("advertiseAdCount", function(e) {
                                e < t("config").advertiseAdMaxCount && l.setData("first_watch_ad", 0, function() {
                                    cc.log("重置红点");
                                });
                            }, this);
                        });
                    }), h.onError(function(e) {
                        console.log("@@loadError", e), s.adInfo.status = 0, e && ("no advertisement" == e.errMsg || 0 == e.errCode || 1004 == e.errCode ? (s.adInfo.reloadTime -= 15, 
                        l.changeData("noSuitAdCount", 1, function(e) {
                            e > 15 && (s.adInfo.reloadTime -= 60);
                        })) : l.changeData("noSuitAdCount", .5, function(e) {
                            e > 15 && (s.adInfo.reloadTime -= 60);
                        }));
                    }), s.adInfo.videoAd = h, o.compareVersion("2.8.0") < 0 || "undefined" != typeof qq) return;
                    s.adInfoLong = {
                        status: 1,
                        reloadTime: 0,
                        adOutOfUseTimeOut: 0
                    };
                    var u = wx.createRewardedVideoAd({
                        adUnitId: "adunit-6304a06c94bd8431",
                        multiton: !0
                    });
                    u.onLoad(function() {
                        console.log("@@video Long onLoad"), s.adInfoLong.status = 2, s.adInfoLong.adOutOfUseTimeOut = 0;
                    }), u.onError(function(e) {
                        console.log("@@loadError", e), s.adInfoLong.status = 0, e && ("no advertisement" == e.errMsg || 0 == e.errCode || 1004 == e.errCode ? s.adInfoLong.reloadTime -= 15 : s.adInfoLong.reloadTime -= 30);
                    }), s.adInfoLong.videoAd = u;
                } else if (o.isAppOnly()) if (0 !== this.GDTAdAction && 1 !== this.GDTAdAction && -3 !== this.GDTAdAction) {
                    var d = this;
                    c.RewardAdCallback = function(e) {
                        "0" === e ? (d.GDTAdStatus = !0, d.GDTAdAction = 1, l.setData("noSuitAdCount", 0, function() {
                            l.getData("advertiseAdCount", function(e) {
                                e < t("config").advertiseAdMaxCount && l.setData("first_watch_ad", 0, function() {
                                    console.log("重置红点");
                                });
                            }, d);
                        })) : "-1" === e ? (d.GDTAdStatus = !1, d.GDTAdAction = -1) : "-3" === e ? (d.changeData("noSuitAdCount", 1, function() {}), 
                        d.GDTAdStatus = !1, d.GDTAdAction = -3) : "-4" === e ? (d.GDTAdStatus = !1, d.GDTAdAction = -1) : (console.log("load rewardAD unknow code " + e + " " + (void 0 === e ? "undefined" : a(e))), 
                        d.GDTAdStatus = !1, d.GDTAdAction = -3);
                    }, this.GDTAdAction = 0, o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "loadRewardVideoAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadRewardAd", "()V");
                } else -3 === this.GDTAdAction && (this.waitTime = void 0 === this.waitTime ? e : this.waitTime + e, 
                this.waitTime >= 25 && (this.waitTime = 0, this.GDTAdAction = -1));
            },
            resetShareTime: function() {
                if (!this.resetShareWorking) {
                    var e = o.getServerTime();
                    this.getData("resetTimestamp", function(i) {
                        var n = e - i;
                        Math.abs(n) >= 54e6 && (this.resetShareWorking = !0, t("netManager").getNowTime(function(t) {
                            if (this.resetShareWorking = !1, t) {
                                var n = o.getServerTime() - i;
                                if (Math.abs(n) >= 5399e4) {
                                    var a = [ {
                                        key: "shareTimes",
                                        value: 0
                                    }, {
                                        key: "first_watch_ad",
                                        value: 0
                                    }, {
                                        key: "resetTimestamp",
                                        value: e
                                    }, {
                                        key: "advertiseAdCount",
                                        value: 0
                                    } ];
                                    l.setDataByArray(a, function() {}, this);
                                }
                            }
                        }, this));
                    }, this);
                }
            },
            checkIsAdOutOfUse: function(e, t, i) {
                t && (e = e.bind(t)), this.isAdReady() ? e(!1, 0) : (i || (i = 16), this.getData("noSuitAdCount", function(t) {
                    e(t >= i);
                }, this));
            },
            isAdReady: function() {
                var e = t("config");
                if ("undefined" != typeof wx) return !(!this.adInfo || (!this.adInfoLong || 2 != this.adInfoLong.status) && 2 != this.adInfo.status);
                if ("global" == e.app_type) return !0 === this.GDTAdStatus;
                if (o.isAppOnly()) {
                    var i = !0;
                    return i = o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "isRewardVideoADReady") : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isRewardVideoADReady", "()Z"), 
                    !0 === this.GDTAdStatus && i;
                }
                return !1;
            },
            showAd: function(e, i, n) {
                function s(e) {
                    i && (0 == e && (l.sendMessage("msg_touchSendAd", 1), r.appsflyer_ads(), r.appsflyer_Obtain()), 
                    l.sendMessage("onAdOpen", !1), i(e), i = null);
                }
                n && (i = i.bind(n));
                var r = this;
                if (t("netManager").updateAdVedioTimes(e), "undefined" != typeof wx) {
                    var h = this.adInfo, u = h.videoAd;
                    this.adInfoLong && (2 != h.status ? (h = this.adInfoLong, u = h.videoAd) : 2 == this.adInfoLong.status && (1 != e && 2 != e && 5 != e && 6 != e && 10 != e || (h = this.adInfoLong, 
                    u = h.videoAd))), h.onRes && (u.offClose(h.onRes), h.onRes = null), u.onClose(function e(t) {
                        u.offClose(e), h.onRes = null, h.status = 0, s(t && t.isEnded || void 0 === t ? 0 : -1);
                    }), u.load().then(function() {
                        l.sendMessage("onAdOpen", !0), u.show().then(function() {}).catch(function(e) {
                            console.log("err1 ", e), h.status = 0, s(-1);
                        });
                    }).catch(function(e) {
                        console.log("err2 ", e), h.status = 0, s(-1);
                    });
                } else if (o.isAppOnly()) {
                    l.sendMessage("onAdOpen", !0);
                    var d = this;
                    c.RewardAdCallback = function(e) {
                        "0" === e ? (d.GDTAdStatus = !1, d.GDTAdAction = 2, s(0)) : "-1" === e ? (d.GDTAdStatus = !1, 
                        d.GDTAdAction = -2, s(-1)) : "-4" === e || (console.log("show rewardAD unknow code " + e + (void 0 === e ? "undefined" : a(e))), 
                        d.GDTAdStatus = !1, d.GDTAdAction = -2, s(-1));
                    }, o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "showRewardVideoAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showRewardAd", "()V");
                }
            },
            bannerAdMap: {},
            loadBannerAd: function(e) {
                if ("undefined" != typeof wx && wx.createBannerAd) {
                    var t = this;
                    if (t.isLoadBannerWorking) return;
                    t.isLoadBannerWorking = !0;
                    var i = [ "adunit-2eea35483d214191", "adunit-11611119d0e7e6ed", "adunit-36cf27baab301399", "adunit-17c8466204c9652c" ];
                    "undefined" != typeof qq && (i = [ "1a4c77a4839e4735c785a38250091102", "42aa1c057a0c0295a133c02724c37a3d", "b104d1aa872cf69d511668bff9082062", "6f94a14f77dac309b1289b740fd63b01" ]);
                    var n = function() {
                        var n = t.systemInfo;
                        if (t.isLoadBannerWorking = !1, !t.lazyInitBannerAd) {
                            t.lazyInitBannerAd = !0;
                            for (var o = 0; o < i.length; o++) t.bannerAdMap[o] = i[o];
                            wx.createGameIcon && wx.createGameBanner ? Math.random() < .3 ? t.bannerAdMap[1e3] = "PBgAA5LEaGYlNq_o" : t.bannerAdMap[1e3] = "PBgAA5LEaGYoQymM" : wx.createGameIcon ? t.bannerAdMap[1e3] = "PBgAA5LEaGYlNq_o" : wx.createGameBanner && (t.bannerAdMap[1e3] = "PBgAA5LEaGYoQymM"), 
                            wx.createGridAd && (t.bannerAdMap[1e4] = "adunit-f3213d477c7beaf3");
                        }
                        for (var s in t.bannerAdMap) !function(i) {
                            var o = t.bannerAdMap[i];
                            if (o && "object" === (void 0 === o ? "undefined" : a(o))) {
                                if (0 == o.state || o.lock) return "continue";
                                if (1 == o.state && (o.loadTimeCount += e), !o.hide) {
                                    if (o.showTime += e, o.showTime > 90) {
                                        o.hide = !0;
                                        var s = o.bannerAd.hide();
                                        s && s.catch(function(e) {
                                            console.log(e);
                                        }), o.showTime = 0;
                                    }
                                    return "continue";
                                }
                                if (-1 != o.state) return "continue";
                                if (o.reloadDelay -= e, !(o.reloadDelay <= 0)) return "continue";
                                try {
                                    o.bannerAd.destroy(), o = o.adUnitId;
                                } catch (e) {
                                    console.log(err);
                                }
                            }
                            var r = o;
                            o = {
                                showCount: 0,
                                hide: !0,
                                state: 0,
                                showTime: 0,
                                reloadDelay: 30 + 30 * Math.random(),
                                adUnitId: r
                            }, t.bannerAdMap[i] = o;
                            var c = n.screenWidth / 960 * 334;
                            try {
                                var h = void 0;
                                (h = 1e3 != i && 1e4 != i ? wx.createBannerAd({
                                    adUnitId: r,
                                    style: {
                                        left: 0,
                                        top: n.screenHeight - c - 12,
                                        width: n.screenWidth,
                                        height: c
                                    }
                                }) : 1e4 == i ? wx.createGridAd({
                                    adUnitId: r,
                                    style: {
                                        left: 0,
                                        top: n.screenHeight - c - 12,
                                        width: n.screenWidth,
                                        height: c
                                    }
                                }) : "PBgAA5LEaGYlNq_o" == r ? wx.createGameIcon({
                                    adUnitId: r,
                                    count: 3,
                                    style: [ {
                                        left: .25 * n.screenWidth - 38,
                                        top: n.screenHeight - c - 12,
                                        size: 52,
                                        color: "#FFFFFF"
                                    }, {
                                        left: .5 * n.screenWidth - 38,
                                        top: n.screenHeight - c - 12,
                                        size: 52,
                                        color: "#FFFFFF"
                                    }, {
                                        left: .75 * n.screenWidth - 38,
                                        top: n.screenHeight - c - 12,
                                        size: 52,
                                        color: "#FFFFFF"
                                    } ]
                                }) : wx.createGameBanner({
                                    adUnitId: r,
                                    style: {
                                        left: 0,
                                        top: n.screenHeight - c - 12,
                                        width: n.screenWidth,
                                        height: c
                                    }
                                })).onError(function(e) {
                                    console.log(h, e), o.state = -1, e && ("no advertisement" == e.errMsg || 0 == e.errCode || 1004 == e.errCode ? o.reloadDelay += 120 : o.reloadDelay += 60);
                                }), h.onLoad(function() {
                                    o.loadTimeCount = 0, o.state = 1;
                                }), o.bannerAd = h;
                            } catch (e) {
                                console.log(e);
                            }
                        }(s);
                    };
                    t.systemInfo ? n() : wx.getSystemInfo({
                        success: function(e) {
                            t.systemInfo = e, n();
                        },
                        fail: function() {
                            console.log("getSystemInfo failed"), t.isLoadBannerWorking = !1;
                        }
                    });
                } else if (o.isAppOnly()) {
                    if (void 0 === this.AdSDKBannerAction) {
                        var s = this;
                        c.BannerAdCallback = function(e) {
                            "0" === e ? (s.AdSDKBannerStatus = !0, s.AdSDKBannerAction = 1) : "-1" === e ? (s.AdSDKBannerStatus = !1, 
                            s.AdSDKBannerAction = -1) : "-3" === e ? (s.AdSDKBannerStatus = !1, s.AdSDKBannerAction = -3) : "2" === e ? (s.AdSDKBannerStatus = !1, 
                            s.AdSDKBannerAction = 2) : (console.log("load BannerAD unknow code " + e + " " + (void 0 === e ? "undefined" : a(e))), 
                            s.AdSDKBannerStatus = !1, s.AdSDKBannerAction = -3);
                        };
                    }
                    0 !== this.AdSDKBannerAction && 1 !== this.AdSDKBannerAction && -3 !== this.AdSDKBannerAction ? (this.AdSDKBannerAction = 0, 
                    o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "loadBannerAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadBanner", "()V")) : -3 === this.AdSDKBannerAction && (this.waitBannerTime = void 0 === this.waitBannerTime ? e : this.waitBannerTime + e, 
                    this.waitBannerTime >= 30 && (this.waitBannerTime = 0, this.AdSDKBannerAction = -1));
                }
            },
            loadGamePortalAd: function() {
                var e = this;
                if ("undefined" != typeof wx && wx.createGamePortal && !this.gamePortalAd) {
                    var t = wx.createGamePortal({
                        adUnitId: "PBgAA5LEaGYg5c9M"
                    });
                    t.load().then(function() {
                        e.gamePortalReady = !0;
                    }).catch(function(e) {
                        console.log(e);
                    }), this.gamePortalAd = t;
                }
            },
            showGamePortalAd: function(e) {
                return !!this.gamePortalReady && (this.gamePortalAd.show().then(function() {
                    e();
                }).catch(function(t) {
                    console.log(t), e();
                }), !0);
            },
            spBannerAdMap: {},
            isSpBannerAdReady: function() {
                return !1;
            },
            showSpBannerAd: function(e, t, i) {},
            hideSpBannerAd: function(e) {},
            showBannerAd: function(e) {
                var t = this;
                if ("undefined" != typeof wx) {
                    var i = this.bannerAdMap[e], n = i, s = this.bannerAdMap[1e3], r = this.bannerAdMap[1e4];
                    3 != e || "object" !== (void 0 === r ? "undefined" : a(r)) || r.lock || 1 != r.state || r.show || "object" !== (void 0 === i ? "undefined" : a(i)) || i.lock || i.show || i.lastShowId || (1 != i.state || Math.random() < .05 ? (n.lastShowId = 1e4, 
                    i = r) : n.lastShowId = null), "object" !== (void 0 === s ? "undefined" : a(s)) || s.lock || 1 != s.state || s.show || "object" !== (void 0 === i ? "undefined" : a(i)) || i.lock || i.show || i.lastShowId || (1 != i.state || Math.random() < .2 ? (n.lastShowId = 1e3, 
                    i = s) : i.lastShowId = null), "object" !== (void 0 === i ? "undefined" : a(i)) || i.lock || 1 != i.state || i.show || i.lastShowId || (i.lock = !0, 
                    i.hide = !1, i.bannerAd.show().then(function() {
                        i.showCount++, i.lock = null, i.show = !0, i.hide && t.hideBannerAd(e);
                    }).catch(function(e) {
                        console.log(e), i.lock = null;
                    }));
                } else o.isAppOnly() && 1 === this.AdSDKBannerAction && (o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "ShowBannerAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V"));
            },
            hideBannerAd: function(e) {
                var t = this;
                if ("undefined" != typeof wx) {
                    var i = this.bannerAdMap[e], n = i, s = null;
                    if ("object" === (void 0 === i ? "undefined" : a(i)) && ((s = i.lastShowId) ? i = this.bannerAdMap[s] : s = e), 
                    "object" !== (void 0 === i ? "undefined" : a(i)) || i.lock) "object" === (void 0 === i ? "undefined" : a(i)) && (i.hide = !0); else {
                        i.lock = !0;
                        var r = i.bannerAd.hide();
                        if (r) r.then(function() {
                            if (i.showTime = 0, i.hide = !0, i.lock = null, n.lastShowId = null, i.show = null, 
                            i.showCount >= 6 && i.loadTimeCount >= 120) {
                                try {
                                    i.bannerAd.destroy();
                                } catch (e) {
                                    console.log(e);
                                }
                                t.bannerAdMap[s] = i.adUnitId;
                            }
                        }).catch(function(e) {
                            console.log(e), i.lock = null;
                        }); else if (i.showTime = 0, i.hide = !0, i.lock = null, n.lastShowId = null, i.show = null, 
                        i.showCount >= 6) {
                            try {
                                i.bannerAd.destroy();
                            } catch (e) {
                                console.log(e);
                            }
                            this.bannerAdMap[s] = i.adUnitId;
                        }
                    }
                } else o.isAppOnly() && 1 === this.AdSDKBannerAction && (o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "hideBannerAD") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V"));
            },
            getShareImgInfo: function() {
                var e = [ {
                    imageUrlId: "mrNqvpasTsOSUGmx7MWfmQ",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmBoFac38bIuI9WqSGoh2g9BVsqrcXuS6ibY2K7K6TPjPic8zyCQ88zxOS/0"
                }, {
                    imageUrlId: "DNP3PqbgSHGcKAioTcaQXw",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmB0vyUgGGtvwsrnIKib1WZtbf6puNAYRqE4d8UCfoDT5VoJLhpHILL4ib/0"
                }, {
                    imageUrlId: "iU-G-a-eSBKnHa9LvxL1EA",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmD6GFKyXaNlicyP8bPibwnryrSkKLpg2dcicYZaoib2KzWqES6JqsIA7krw/0"
                }, {
                    imageUrlId: "_3rIuJnEQOKw8kjAyMRKOQ",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmDZQQRNBPjqPY9frmcuEhGDvhJRSURebW9yHuBict3Aiaq7PfKXRmS26V/0"
                }, {
                    imageUrlId: "LWwxwNxjQtCcFvryp5dBrg",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmBTWTU2PicaEAXicuEkSIKrGdLnnN95PBIyCWDpoWVXUeLzLqzrSaJqoe/0"
                }, {
                    imageUrlId: "rlxNPBEQRKKCPJAi9qUeaw",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmAIABSsssedUVAyYRyzIAET0R2D8yP8IsKzBrib7kaHyxg3AErXrBGDic/0"
                }, {
                    imageUrlId: "zmmU-8W0S6anm4_NxYtvfg",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmB7ibexdpRY2MQicib1RiaicbePgE76iaE7Jib1oqqhyAibI4d79ea1jRJ1xKuJ/0"
                }, {
                    imageUrlId: "NBtXyU4PRvOtf7lNLIPOYg",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmCpYlmicicDKemoBGFGb5P9zQMyvTzAVCYnKb1gUDlcyhfFnD2IA1CiaAb/0"
                }, {
                    imageUrlId: "1VkoPZvYT92iRi56ucyR9A",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmAgoRddYDxa5WFicyQhNSRlVrWV3JElvEEupaFKCiad4ia6eNiauP34HIDC/0"
                }, {
                    imageUrlId: "pyZ1DfNfQ1uzS13bxFme_A",
                    imageUrl: "https://mmocgame.qpic.cn/wechatgame/m2yjZWQDHmAoUicQNiaEebBz5hLicTtBzXwrflPb1AUUpJ2Ol3r1Pux6MgHuNWiaJsp0/0"
                } ], t = e[Math.floor(Math.random() * e.length)], i = Math.floor(4 * Math.random());
                return t.title = 0 == i ? "谁才是喵其林厨王?" : 1 == i ? "欢迎光临我的餐厅" : 2 == i ? "开始营业" : "快来玩耍吧", 
                "cn" != s.lan && (t.title = "come to play together"), t;
            },
            wxShareFailCount: 0,
            onShare: function(e, i, n, a, s) {
                var r = this;
                i && (e = e.bind(i));
                var c = this.getShareImgInfo();
                if ("undefined" != typeof wx) {
                    var h = function() {
                        this.wxCheckShare && (this.wxHideTimestamp = new Date().getTime());
                    }, u = function() {
                        if (this.wxCheckShare) {
                            if (this.wxCheckShare = !1, this.wxOnHide && (wx.offHide(this.wxOnHide), this.wxOnHide = null), 
                            this.wxOnShow && (wx.offShow(this.wxOnShow), this.wxOnShow = null), n || !o.isWxOnly()) return void e(!0);
                            new Date().getTime() - this.wxHideTimestamp >= 700 || this.wxShareFailCount > 0 ? (this.wxShareFailCount = 0, 
                            e(!0)) : (this.wxShareFailCount++, e(!1));
                        }
                    };
                    if ("guest" == this.userType) {
                        if (this.isOpenShare) return;
                        return this.isOpenShare = !0, void o.onGuestAuth(function(t) {
                            r.isOpenShare = !1, t && r.onShare(e, i, n, a, s);
                        });
                    }
                    this.wxCheckShare = !0;
                    var d = "inviteId=" + (t("netManager").openid || 0);
                    d += "&imageUrlId=" + c.imageUrlId, s && (d += "&msg=" + s), wx.shareAppMessage({
                        title: a || c.title,
                        imageUrlId: c.imageUrlId,
                        imageUrl: c.imageUrl,
                        query: d
                    }), h = h.bind(this), u = u.bind(this), this.wxOnHide && (wx.offHide(this.wxOnHide), 
                    this.wxOnHide = null), wx.onHide(h), this.wxOnHide = h, this.wxOnShow && (wx.offShow(this.wxOnShow), 
                    this.wxOnShow = null), wx.onShow(u), this.wxOnShow = u;
                } else if (cc.sys.isNative) if ("guest" == this.userType) {
                    if (this.isOpenShare) return;
                    this.isOpenShare = !0, o.onGuestAuth(function(t) {
                        t ? l.nativeShare(c, function(t) {
                            l.isOpenShare = !1, e(t);
                        }) : (l.isOpenShare = !1, e(!1));
                    });
                } else {
                    this.isOpenShare = !0;
                    var f = {
                        title: a,
                        shareInfo: c,
                        callback: function(t) {
                            l.isOpenShare = !1, e(t);
                        }
                    };
                    n && (f.group = n), t("ViewModule").ins.pushView("shareDlg", f, {
                        zIndex: 5
                    });
                } else e(!0);
            },
            globalShareUrl: "https://restaurant.dhgames.cn/download_ext_en.html",
            inlandShareUrl: "https://restaurant.dhgames.cn/download_ext.html",
            nativeShare: function(e, i, n) {
                if ("app_wx" == this.userType) {
                    var a = this.inLandAppStoreUrl, s = t("wechatPlatformManager");
                    s.shareCallback = function(e) {
                        n(e), s.shareCallback = null;
                    }, o.isIosOnly() ? jsb.reflection.callStaticMethod("WXApiManager", "ShareLinkToChatScene:Title:Description:", a, i.title, e || "") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "ShareLinkToChatScene", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", a, i.title, e || i.title);
                } else if ("app_apple" == this.userType) c.appleShareCallback = function(e) {
                    n("success" == e), c.appleShareCallback = null;
                }, jsb.reflection.callStaticMethod("AdSDKManager", "shareLinkApple:Title:", "https://restaurant.dhgames.cn/", i.title); else if ("app_fb" == this.userType) {
                    var r = this.appStoreUrl;
                    l.nativeFbIsLoggedIn() ? (c.fbShareCallback = function(e) {
                        n("success" == e), c.fbShareCallback = null;
                    }, o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "shareLink:Quote:", r, e || i.title) : o.isAndroidOnly() && (r = this.googleStoreUrl, 
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareLink", "(Ljava/lang/String;Ljava/lang/String;)V", r, e || i.title))) : (n(!1), 
                    l.nativeFbLogin());
                } else if ("app_line" == this.userType) {
                    var h = this.appStoreUrl;
                    c.lineShareCallback = function(e) {
                        n("success" == e), c.fbShareCallback = null;
                    }, o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "shareLineLink:Quote:", h, e || i.title) : o.isAndroidOnly() && (h = this.googleStoreUrl, 
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareLinkToLine", "(Ljava/lang/String;Ljava/lang/String;)V", h, e || i.title));
                } else n(!1);
            },
            nativeFbLogin: function() {
                o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "facebookLogin") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "facebookLogin", "()V");
            },
            nativeFbIsLoggedIn: function() {
                return o.isIosOnly() ? jsb.reflection.callStaticMethod("AdSDKManager", "isLoggedIn") : !!o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isLoggedIn", "()Z");
            },
            nativeLineLogin: function() {
                o.isIosOnly() ? jsb.reflection.callStaticMethod("RootViewController", "LineLogin") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "lineLogin", "()V");
            },
            screenShoot: function(e) {
                var i = this;
                if ("app_fb" == this.userType) {
                    if (!l.nativeFbIsLoggedIn()) return void l.nativeFbLogin();
                } else if ("guest" == this.userType) return void o.onGuestAuth(function() {});
                if (!this.isShootWorking) {
                    this.isShootWorking = !0;
                    var n = "UI_screenshotMask_1";
                    "global" == t("config").app_type && (n = "UI_screenshotMask_1_app"), o.loadRes("Ohter/" + n, cc.SpriteFrame, function(t, n) {
                        if (t) return console.error(t), l.sendMessage("showToast", s.getText("toast_string_6")), 
                        void (i.isShootWorking = !1);
                        o.loadRes("Ohter/UI_screenshotMask_2", cc.SpriteFrame, function(t, a) {
                            if (t) return console.error(t), l.sendMessage("showToast", s.getText("toast_string_6")), 
                            void (i.isShootWorking = !1);
                            var r = "Ohter/code";
                            "app_wx" == i.userType ? r = "Ohter/codeTapTapInland" : "app_fb" != i.userType && "app_line" != i.userType || (r = o.isIosOnly() ? "Ohter/codeAppStoreGlobal" : "Ohter/codeAnroidGlobal"), 
                            o.loadRes(r, cc.SpriteFrame, function(t, r) {
                                if (t) return console.error(t), l.sendMessage("showToast", s.getText("toast_string_6")), 
                                void (i.isShootWorking = !1);
                                var c = cc.winSize.width, u = cc.winSize.height, d = new cc.Node();
                                d.addComponent(h).spriteFrame = n;
                                var f = cc.find("Canvas");
                                f.scale = (f.width - 240) / f.width, d.parent = f.parent, d.zIndex = 101, d.x = .5 * c, 
                                d.y = .5 * u, d.width = c, d.height = .5 * u, d.anchorY = 0;
                                var g = new cc.Node();
                                g.addComponent(h).spriteFrame = a, g.parent = f.parent, g.zIndex = 100, g.x = .5 * c, 
                                g.y = .5 * u, g.width = c, g.height = .5 * u, g.anchorY = 1;
                                var p = new cc.Node();
                                p.addComponent(h).spriteFrame = r, p.parent = d, p.width = r.getRect().width, p.height = r.getRect().height, 
                                p.x = .5 * c, p.y = .5 * -u, p.anchorX = 1, p.anchorY = 0, "undefined" == typeof wx && (p.scale = .8, 
                                p.x -= 50, p.y += 50), d.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                                    var t = this, i = cc.game.canvas, n = void 0;
                                    if ("undefined" != typeof wx) {
                                        try {
                                            n = i.toTempFilePathSync({
                                                x: 0,
                                                y: 0,
                                                width: c,
                                                height: u,
                                                destWidth: c,
                                                destHeight: u,
                                                fileType: "jpg"
                                            });
                                        } catch (t) {
                                            console.log(t);
                                        }
                                        if (!n) return d.destroy(), g.destroy(), f.scale = 1, void (this.isShootWorking = !1);
                                        wx.previewImage({
                                            current: n,
                                            urls: [ n ],
                                            complete: function() {
                                                cc.isValid(d) && cc.isValid(g) && (d.destroy(), g.destroy(), f.scale = 1, e ? wx.saveImageToPhotosAlbum({
                                                    filePath: n,
                                                    success: function() {
                                                        t.isShootWorking = !1, l.sendMessage("showToast", s.getText("toast_writePhotosAlbum"));
                                                    },
                                                    fail: function() {
                                                        t.isShootWorking = !1;
                                                    }
                                                }) : t.isShootWorking = !1);
                                            }
                                        });
                                    } else {
                                        var a = function() {
                                            l.isShootWorking = !1, d.destroy(), g.destroy(), f.scale = 1;
                                        }, r = function(e) {
                                            cc.find("Canvas").parent.getChildByName("shareDlg").destroy();
                                        }, h = new cc.Node();
                                        h.parent = cc.director.getScene();
                                        var p = h.addComponent(cc.Camera);
                                        p.cullingMask = 4294967295;
                                        var m = new cc.RenderTexture(), y = cc.game._renderContext;
                                        m.initWithSize(cc.visibleRect.width, cc.visibleRect.height, y.STENCIL_INDEX8), p.targetTexture = m;
                                        var v = m.width, b = m.height;
                                        h.x = .5 * v, h.y = .5 * b, p.render();
                                        for (var _ = m.readPixels(), w = new Uint8Array(v * b * 4), S = 4 * v, T = 0; T < b; T++) for (var k = (b - 1 - T) * v * 4, x = T * v * 4, D = 0; D < S; D++) w[x + D] = _[k + D];
                                        var A = jsb.fileUtils.getWritablePath() + "full_screenshot.png", M = jsb.saveImageData(w, v, b, A);
                                        if (h.destroy(), !M) return void a();
                                        a(), o.loadRes("View/shareDlg", cc.Prefab, function(e, i) {
                                            if (e) return console.error(e), void l.sendMessage("showToast", s.getText("toast_string_6"));
                                            var n = o.autoReleaseInstantiate(i), a = n.getComponent("shareDlg"), h = t.getShareImgInfo();
                                            a.init({
                                                shareInfo: h,
                                                filePath: A,
                                                callback: r
                                            }), n.parent = cc.find("Canvas").parent, n.zIndex = 102, n.x = .5 * c, n.y = .5 * u;
                                        });
                                    }
                                }, i)));
                            });
                        });
                    });
                }
            },
            initGetSum: function(e, i, n) {
                function a() {
                    for (var e = 0; e < this.getSumCallbackAry.length; e++) o(this.getSumCallbackAry[e].cbFunc, this.getSumCallbackAry[e].type);
                    this.getSumCallbackAry = [];
                }
                function o(e, t) {
                    t && "star" != t ? "tip" == t ? e(this.decodeData(this.AllSum.tip, "tip"), this.decodeData(this.AllSum.cap, "cap")) : "buffetRoomTip" == t ? e(this.decodeData(this.AllSum.buffetRoomTip, "buffetRoomTip")) : "factor" == t ? e(this.decodeData(this.AllSum.factor, "factor") + 1) : "KtGenCoin" == t ? e(this.decodeData(this.AllSum.KtGenCoin, "KtGenCoin")) : "buffetFoodTip" == t ? e(this.decodeData(this.AllSum.buffetFoodTip, "buffetFoodTip")) : "buffet_cusRewardPro" == t && e(this.decodeData(this.AllSum.buffet_cusCoinPro, "buffet_cusCoinPro"), this.decodeData(this.AllSum.buffet_cusStarPro, "buffet_cusStarPro"), this.decodeData(this.AllSum.buffet_cusPlatePro, "buffet_cusPlatePro")) : e(this.decodeData(this.AllSum.star, "star"));
                }
                var s = this;
                if (i && (e = e.bind(i)), this.getSumCallbackAry.push({
                    cbFunc: e,
                    type: n
                }), !(this.getSumCallbackAry.length > 1)) {
                    a = a.bind(this), o = o.bind(this);
                    var r = t("config");
                    this.firstCallInitGetSum ? function() {
                        var e = function() {
                            --n <= 0 && (o.firstCallInitGetSum = !1, a());
                        }, i = function(e) {
                            if (e.val) {
                                var t = o.decodeData(o.AllSum[e.type], e.type) + e.val;
                                o.AllSum[e.type] = o.encryptData(t, e.type);
                            }
                        }, n = 0, o = s;
                        n++;
                        var c = r.buildings;
                        n += c.length;
                        var h = r.employees;
                        n += h.length;
                        var u = r.buffetFoods;
                        n += u.length;
                        var d = t("MailData");
                        l.getMailList(function(t) {
                            for (var n = 0; n < t.length; n++) {
                                var a = t[n], s = d[a];
                                s && s.star && i({
                                    type: "star",
                                    val: o.decodeData(s.star)
                                });
                            }
                            e();
                        }, s), s.addListener("mailData_change", function(e) {
                            var t = d[e];
                            t && t.star && i({
                                type: "star",
                                val: o.decodeData(t.star)
                            });
                        }, s);
                        for (var f = 0; f < c.length; f++) !function(t) {
                            var n = c[t], a = "building_lv_" + n.key;
                            s.addListener(a + "_change", function(e, t) {
                                for (var a = 0; a < n.items.length; a++) {
                                    var s = n.items[a];
                                    0 == (t >> 2 * a & 3) && (e >> 2 * a & 3) > 0 && (s.star && i({
                                        type: "star",
                                        val: o.decodeData(s.star)
                                    }), s.tip && !n.buffetRoom && i({
                                        type: "tip",
                                        val: o.decodeData(s.tip)
                                    }), s.tip && n.buffetRoom && i({
                                        type: "buffetRoomTip",
                                        val: o.decodeData(s.tip)
                                    }), s.tipCap && !n.buffetRoom && i({
                                        type: "cap",
                                        val: o.decodeData(s.tipCap)
                                    }), s.cookTime && i({
                                        type: "factor",
                                        val: o.decodeData(s.cookTime)
                                    }));
                                }
                            }), l.getData(a, function(t) {
                                for (var a = 0, s = 0, r = 0, c = 0, h = 0, l = 0; l < n.items.length; l++) {
                                    var u = n.items[l];
                                    0 != (t >> 2 * l & 3) && (u.star && (a += o.decodeData(u.star)), u.tip && !n.buffetRoom && (s += o.decodeData(u.tip)), 
                                    u.tip && n.buffetRoom && (r += o.decodeData(u.tip)), u.tipCap && !n.buffetRoom && (c += o.decodeData(u.tipCap)), 
                                    u.cookTime && (h += o.decodeData(u.cookTime)));
                                }
                                i({
                                    type: "star",
                                    val: a
                                }), i({
                                    type: "tip",
                                    val: s
                                }), i({
                                    type: "cap",
                                    val: c
                                }), i({
                                    type: "buffetRoomTip",
                                    val: r
                                }), i({
                                    type: "factor",
                                    val: h
                                }), e();
                            });
                        }(f);
                        for (f = 0; f < h.length; f++) !function(t) {
                            var n = h[t], a = "employee_lv_" + n.key;
                            s.addListener(a + "_change", function(e, t) {
                                if (t > 0) {
                                    var a = n.attrs[t - 1];
                                    a && (a.star && i({
                                        type: "star",
                                        val: -o.decodeData(a.star)
                                    }), a.tipCap && !n.buffetRoom && i({
                                        type: "cap",
                                        val: -o.decodeData(a.tipCap)
                                    }), a.tip && !n.buffetRoom && i({
                                        type: "tip",
                                        val: -o.decodeData(a.tip)
                                    }), a.tip && n.buffetRoom && i({
                                        type: "buffetRoomTip",
                                        val: -o.decodeData(a.tip)
                                    }), a.genCoin && i({
                                        type: "KtGenCoin",
                                        val: -o.decodeData(a.genCoin)
                                    }));
                                }
                                var s = n.attrs[e - 1];
                                if (!s) {
                                    if (isNaN(e) || e <= 0) return;
                                    s = n.attrs[n.attrs.length - 1];
                                }
                                s.star && i({
                                    type: "star",
                                    val: o.decodeData(s.star)
                                }), s.tipCap && !n.buffetRoom && i({
                                    type: "cap",
                                    val: o.decodeData(s.tipCap)
                                }), s.tip && !n.buffetRoom && i({
                                    type: "tip",
                                    val: o.decodeData(s.tip)
                                }), s.tip && n.buffetRoom && i({
                                    type: "buffetRoomTip",
                                    val: o.decodeData(s.tip)
                                }), s.genCoin && i({
                                    type: "KtGenCoin",
                                    val: o.decodeData(s.genCoin)
                                });
                            }), l.getData(a, function(t) {
                                if (t > 0) {
                                    var s = n.attrs[t - 1];
                                    s || (s = n.attrs[n.attrs.length - 1], l.setData(a, n.attrs.length, function() {})), 
                                    s.star && i({
                                        type: "star",
                                        val: o.decodeData(s.star)
                                    }), s.tipCap && !n.buffetRoom && i({
                                        type: "cap",
                                        val: o.decodeData(s.tipCap)
                                    }), s.tip && !n.buffetRoom && i({
                                        type: "tip",
                                        val: o.decodeData(s.tip)
                                    }), s.tip && n.buffetRoom && i({
                                        type: "buffetRoomTip",
                                        val: o.decodeData(s.tip)
                                    }), s.genCoin && i({
                                        type: "KtGenCoin",
                                        val: o.decodeData(s.genCoin)
                                    });
                                }
                                e();
                            }, s);
                        }(f);
                        for (f = 0; f < u.length; f++) !function(t) {
                            var n = u[t], a = "buffetFood_unlock_" + n.key;
                            s.addListener(a + "_change", function(e) {
                                if (e) {
                                    var t = n;
                                    t && (t.income && i({
                                        type: "buffetFoodTip",
                                        val: o.decodeData(t.income)
                                    }), t.cusCoinPro && i({
                                        type: "buffet_cusCoinPro",
                                        val: o.decodeData(t.cusCoinPro)
                                    }), t.cusStarPro && i({
                                        type: "buffet_cusStarPro",
                                        val: o.decodeData(t.cusStarPro)
                                    }), t.cusPlatePro && i({
                                        type: "buffet_cusPlatePro",
                                        val: o.decodeData(t.cusPlatePro)
                                    }));
                                }
                            }), l.getData(a, function(t) {
                                if (t) {
                                    var a = n;
                                    a && (a.income && i({
                                        type: "buffetFoodTip",
                                        val: o.decodeData(a.income)
                                    }), a.cusCoinPro && i({
                                        type: "buffet_cusCoinPro",
                                        val: o.decodeData(a.cusCoinPro)
                                    }), a.cusStarPro && i({
                                        type: "buffet_cusStarPro",
                                        val: o.decodeData(a.cusStarPro)
                                    }), a.cusPlatePro && i({
                                        type: "buffet_cusPlatePro",
                                        val: o.decodeData(a.cusPlatePro)
                                    }));
                                }
                                e();
                            }, s);
                        }(f);
                    }() : a();
                }
            },
            getStarSum: function(e, t) {
                t && (e = e.bind(t)), this.getData("star", function(t) {
                    this.initGetSum(function(i) {
                        var n = t + i, a = Math.round(10 * n) / 10;
                        e(a);
                    }, this, "star");
                }, this);
            },
            getGainTipSum: function(e, t) {
                this.initGetSum(e, t, "tip");
            },
            getGainBuffetRoomTipSum: function(e, t) {
                this.initGetSum(e, t, "buffetRoomTip");
            },
            getGainBuffetFoodTipSum: function(e, t) {
                this.initGetSum(e, t, "buffetFoodTip");
            },
            getCookTimeFactor: function(e, t) {
                t && (e = e.bind(t)), this.initGetSum(function(t) {
                    e(t + (this.baseCookTimeFactor || 0));
                }, this, "factor");
            },
            getBuffetRewardPro: function(e, t, i) {
                i && (t = t.bind(i)), this.initGetSum(t, i, e);
            },
            addBaseCookTimeFactor: function(e) {
                this.baseCookTimeFactor += e;
            },
            getKitchenRoomGenCoin: function(e, t) {
                this.initGetSum(e, t, "KtGenCoin");
            },
            uploadDataToRank: function(e) {
                var t = Math.floor(new Date().getTime() / 1e3);
                t - (this.rankUpdateTime || 0) <= 360 || (this.rankUpdateTime = t, "undefined" == typeof wx) || wx.setUserCloudStorage && function() {
                    var i = [ {
                        key: "starSum",
                        value: e + ""
                    } ], n = {
                        wxgame: {
                            score: e,
                            update_time: t
                        }
                    };
                    i.push({
                        key: "starRank",
                        value: JSON.stringify(n)
                    }), wx.setUserCloudStorage({
                        KVDataList: i,
                        success: function() {
                            o.resetUIRank = !0;
                        },
                        fail: function(e) {
                            console.log("uploadDataToRank fail", e);
                        }
                    });
                }();
            },
            isAchievementClaim: function(e, t, i) {
                i && (t = t.bind(i));
                var n = "ach_claim_flag" + Math.floor(e / 30), a = e % 30;
                this.getData(n, function(e) {
                    t(e >> a & 1);
                });
            },
            setAchievementClaim: function(e, t, i) {
                var n = "ach_claim_flag" + Math.floor(e / 30), a = e % 30;
                this.getData(n, function(e) {
                    e |= 1 << a, this.setData(n, e, t, i);
                }, this);
            },
            isComAchievementClaim: function(e, t, i) {
                i && (t = t.bind(i));
                var n = "loveAch_claim_flag" + Math.floor(e / 20), a = e % 20;
                l.getData(n, function(e) {
                    t(e >> a & 1);
                });
            },
            setComAchievementClaim: function(e, t, i) {
                var n = "loveAch_claim_flag" + Math.floor(e / 20), a = e % 20;
                l.getData(n, function(e) {
                    e |= 1 << a, l.setData(n, e, t, i);
                }, this);
            },
            hanldeBuyAndPayMoney: function(e, t, i, n, a, r, c) {
                var h = this;
                c && (r = r.bind(c));
                var l = function() {
                    h.getStarSum(function(e) {
                        cc.isValid(n, !0) && e >= 6 && this.showBannerAd(3);
                    }, h);
                };
                this.getData(e, function(c) {
                    var h = this;
                    if (cc.isValid(n, !0)) if (c < t) {
                        var u = n.getChildByName("UI_MainMenu_Bg"), d = new cc.Node();
                        d.parent = u, d.width = u.width, d.height = u.height, d.x = 0, d.y = 0;
                        var f = void 0, g = void 0, p = void 0;
                        if ("money" == e ? p = s.getText("add_fish_tip") + (t - c) : "money_plate" == e && (p = s.getText("add_plate_tip")), 
                        o.poolManager) g = (f = o.poolManager.getBaseFontLblNode(p, 40, !0)).getComponent(cc.Label); else {
                            var m = (g = (f = new cc.Node()).addComponent(cc.Label)).addComponent(cc.LabelOutline);
                            m.color = new cc.Color(168, 63, 34), m.width = 1, g.fontSize = 40, g.lineHeight = 50, 
                            g.string = p;
                        }
                        o.fixLabel(g), f.parent = i, f.y = -120, f.color = new cc.Color(168, 63, 34), "money_plate" == e && o.isNativeOnly() && (f.active = !1), 
                        a(function(i) {
                            i && h.isAdReady() && "money" == e ? h.getStarSum(function(e) {
                                var i = this, n = t - c;
                                if (n <= Math.min(Math.max(2e3 + 45 * e, 4e3), 4e5) && n >= 2e3) {
                                    var a = Math.random() > .5 ? "Prefab/tv_cat_1" : "Prefab/tv_cat_2";
                                    o.loadRes(a, cc.Prefab, function(e, n) {
                                        if (e) console.error(e); else if (cc.isValid(d)) {
                                            var h = o.autoReleaseInstantiate(n);
                                            if (h.parent = d, h.y = -d.height / 2 - 230, "Prefab/tv_cat_2" == a) {
                                                var l = cc.winSize.width / 1242, u = cc.winSize.height / 2688, f = Math.min(l, u), g = 1051 / f, p = 621 / f;
                                                h.opacity = 0, h.runAction(cc.sequence(cc.delayTime(.25), cc.fadeIn(.15))), h.x = p, 
                                                h.runAction(cc.repeatForever(cc.sequence(cc.moveTo(14, -g, h.y), cc.callFunc(function() {
                                                    h.x = g;
                                                }))));
                                            }
                                            var m = h.getChildByName("tv");
                                            h.getChildByName("add_fish").getComponent(cc.Label).string = s.getText("watchAdBuyToast");
                                            var y = !1;
                                            m.on("click", function() {
                                                y || (y = !0, this.showAd(4, function(e) {
                                                    y = !1, h.destroy(), 0 == e ? r(t - c) : this.sendMessage("showToast", s.getText("toast_string_5"));
                                                }, this));
                                            }, i);
                                        }
                                    }, 10);
                                } else l();
                            }, h) : l();
                        });
                    } else l();
                }, this);
            },
            handleCostMoney: function(e, t, i, n) {
                if (n) {
                    if (n.isHandleCostMoneyWorking) return;
                    n.isHandleCostMoneyWorking = !0, i = i.bind(n);
                }
                this.getData(t, function(a) {
                    a >= e ? l.changeData(t, -e, function() {
                        n && cc.isValid(n.node) && (n.isHandleCostMoneyWorking = !1), i(!0);
                    }) : (n && cc.isValid(n.node) && (n.isHandleCostMoneyWorking = !1), o.IsWxAndroidOnly() || cc.sys.isNative || o.isQQAndroidOnly() || o.isWxPCOnly() ? this.sendMessage("showGotoShop", e - a, t) : "money" == t ? this.sendMessage("showToast", s.getText("toast_string_1")) : this.sendMessage("showToast", s.getText("toast_string_plate_isNot_enough")), 
                    i(!1));
                }, this);
            },
            initFacebook: function() {
                var e = this;
                c.facebookLoginCallback = function(t, i, n, a) {
                    "success" == t ? (e.fbUserID = i, e.fbAccessToken = n, e.sendMessage("facebook_onLogin", !0)) : e.sendMessage("facebook_onLogin", !1);
                };
            },
            initLine: function() {
                var e = this;
                c.lineLoginCallback = function(t, i, n) {
                    "success" == t ? (e.lineUserID = i, e.lineAccessToken = n, e.sendMessage("line_onLogin", !0)) : e.sendMessage("line_onLogin", !1);
                };
            },
            initApple: function() {
                var e = this;
                c.appleLoginCallback = function(t, i, n, a, o, s) {
                    "true" == t && i ? (e.appleCode = i, e.appleToken = n, e.appleUserId = a, e.appleName = s + " " + o, 
                    e.sendMessage("apple_onLogin", !0)) : "logined" == t ? (e.appleUserId = i, e.appleNoTokenLogin = !0, 
                    e.sendMessage("apple_onLogin", !0)) : "iosOld" == t ? e.sendMessage("apple_onLogin", !1, t) : e.sendMessage("apple_onLogin", !1);
                };
            },
            getDeviceInfo: function() {
                var e = this;
                l.dhBIsession && "" != l.dhBIsession || (l.dhBIsession = o.getDroidhangBiSession()), 
                o.isAndroidOnly() ? (c.DeviceInfoCallback = function(t, i, n, a, o, s) {
                    t && (e.adid = t), i && (e.android_id = i), n && (e.device_model = n), a && (e.os_version = a), 
                    o && (e.device_name = o), s && (e.appsflyer_id = s), console.log("aaaaaaa ", e.adid), 
                    console.log(e.android_id), console.log(e.device_model), console.log(e.os_version), 
                    console.log(e.device_name), console.log(e.appsflyer_id);
                }, jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDeviceInfo", "()V")) : o.isIosOnly() && (c.DeviceInfoCallback = function(t, i, n, a, o, s) {
                    t && (e.adid = t), i && (e.idfv = i), n && (e.device_model = n), a && (e.os_version = a), 
                    o && (e.device_name = o), s && (e.appsflyer_id = s), console.log("aaaaaaa ", e.adid), 
                    console.log(e.idfv), console.log(e.device_model), console.log(e.os_version), console.log(e.device_name), 
                    console.log(e.appsflyer_id);
                }, jsb.reflection.callStaticMethod("AdSDKManager", "getDeviceInfo"));
            },
            getNetWork_type: function() {
                var e = t("config"), i = 0;
                return "global" == e.app_type && o.isAndroidOnly() ? i = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getNetWorkType", "()Ljava/lang/String;") : "global" == e.app_type && o.isIosOnly() && (i = jsb.reflection.callStaticMethod("AdSDKManager", "getNetWorkType")), 
                console.log("type is ", i), i = "1" == i || 1 == i ? 1 : "2" == i || 2 == i ? 2 : 0;
            },
            getDayStartTime: function(e, t) {
                var i = 3600 * t * 1e3, n = new Date(e + i), a = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0).getTime();
                return (a -= 60 * n.getTimezoneOffset() * 1e3) - i;
            },
            checkMonthCard: function(e, t) {
                t && (e = e.bind(t)), this.getData("monthCard_endTime", function(t) {
                    var i = o.getServerTime(), n = this.getDayStartTime(i, 2);
                    if (n <= t) {
                        var a = (t - n) / 864e5;
                        a = parseInt(a), this.getData("monthCard_receiveTime", function(t) {
                            var i = 0;
                            t && (i = this.getDayStartTime(t, 2));
                            var o = !1;
                            i < n && (o = !0), e(o, a);
                        }, this);
                    } else e(!1, 0);
                }, this);
            },
            checkPlateMonthCard: function(e, t) {
                t && (e = e.bind(t)), this.getData("monthCard_plate_endTime", function(t) {
                    var i = o.getServerTime(), n = this.getDayStartTime(i, 2);
                    if (n <= t) {
                        var a = (t - n) / 864e5;
                        a = parseInt(a), this.getData("monthCard_plate_receiveTime", function(t) {
                            var i = 0;
                            t && (i = this.getDayStartTime(t, 2));
                            var o = !1;
                            i < n && (o = !0), e(o, a);
                        }, this);
                    } else l.setData("capsuleFreeTimes", 0, function() {}), e(!1, 0);
                }, this);
            },
            isMailExsit: function(e, t, i) {
                i && (t = t.bind(i)), this.getMailList(function(i) {
                    for (var n = 0; n < i.length; n++) if (i[n] == e) return void t(!0);
                    t(!1);
                }, this);
            },
            getMailList: function(e, i) {
                i && (e = e.bind(i)), this.mailListCache ? e(this.mailListCache) : this.getObjFromJson("mailData", function(i) {
                    var n = this;
                    if (!i) return this.mailListCache = [], void e([]);
                    var a = i.mailList, o = JSON.stringify(a), s = r.MD5(o + this.globalKey).toString();
                    if (s.charAt(17) + s.charAt(3) + s.charAt(27) + s.charAt(11) + s.charAt(23) == i.sign) {
                        if (this.mailListCache = a, e(a), !this.initMailBugFlag) {
                            this.initMailBugFlag = !0;
                            for (var c = t("MailData"), h = 0; h < a.length; h++) {
                                var u = a[h], d = c[u];
                                d && d.orderKey && !d.isRepeat && function() {
                                    var e = d.orderKey, t = e.lastIndexOf("_"), i = parseInt(e.substring(t + 1, e.length));
                                    if (!isNaN(i)) {
                                        var a = "storyOrderFlag_" + Math.floor(i / 30), o = i % 30;
                                        l.getData(a, function(t) {
                                            0 == (t >> o & 1) && l.getObjFromJson("orderMap", function(i) {
                                                i && !i[e] && (t |= 1 << o, l.setData(a, t, function() {}));
                                            }, this);
                                        }, n);
                                    }
                                }(), "mail_51" == u && l.getData("specStroyState", function(e) {
                                    1 == e && l.setData("specStroyState", 0, function() {});
                                });
                            }
                        }
                    } else this.mailListCache = [], e([]);
                }, this);
            },
            pushMailToList: function(e, t, i) {
                i && (t = t.bind(i)), this.getMailList(function(i) {
                    for (var n = 0; n < i.length; n++) if (e == i[n]) return void t();
                    i.push(e);
                    var a = JSON.stringify(i), o = r.MD5(a + this.globalKey).toString(), s = {
                        mailList: i,
                        sign: o.charAt(17) + o.charAt(3) + o.charAt(27) + o.charAt(11) + o.charAt(23)
                    };
                    this.mailListCache = i, this.setObjToJson("mailData", s, function() {
                        t(), this.sendMessage("mailData_change", e);
                    }, this);
                }, this);
            },
            pushDolls: function(e, t) {
                var i = this;
                this.getDolls(function(n) {
                    for (var a in e) n[a] ? n[a].number += e[a].number : n[a] = e[a];
                    i.setObjToJson("dollsBag", n, function() {
                        t();
                    }, i);
                });
            },
            setDollState: function(e) {
                var t = this;
                this.getDolls(function(i) {
                    for (var n in i) if (n == e) {
                        i[n].state = 3;
                        break;
                    }
                    t.setObjToJson("dollsBag", i, function() {}, t);
                });
            },
            getDolls: function(e) {
                this.getObjFromJson("dollsBag", function(t) {
                    t || (t = t || {}), e(t);
                }, this);
            },
            checkCookBookLvUp: function(e, i, n) {
                if (n && (i = i.bind(n)), e.lvUp) {
                    var a = t("config");
                    this.getData("cookbook_unlock_" + e.key, function(t) {
                        var n = this;
                        if (t - 1 >= 0 && t - 1 < e.lvUp.length) {
                            var o = e.lvUp, s = o[t - 1].needStar, r = o[t - 1].needMail, c = o[t - 1].needBuilding, h = o[t - 1].needAdLv;
                            h ? l.getData("ads_lv", function(e) {
                                i(!(e < h), t);
                            }, this) : s ? l.getStarSum(function(e) {
                                i(!(e < s), t);
                            }, this) : r ? l.isMailExsit(r, function(e) {
                                i(e, t);
                            }, this) : c && function() {
                                for (var e = a.buildingsItemMap[c], o = e.length, s = 0, r = 0; r < e.length; r++) !function(a) {
                                    var r = e[a], c = "building_lv_" + r.key;
                                    l.getData(c, function(e) {
                                        o--, 0 != (e >> 2 * r.index & 3) && s++, o <= 0 && i(s > 0, t);
                                    }, n);
                                }(r);
                            }();
                        } else i(!1, t);
                    }, this);
                } else i(!1, 0);
            },
            checkWaimaiFoodLv: function(e, t, i) {
                i && (t = t.bind(i)), this.getData(e.key + "_lv", function(i) {
                    if (i >= 4) t(!1, 4); else {
                        var n = {
                            needStar: e["lvUp_needStart_" + (i + 1)],
                            needThumb: e["lvUp_needThumb_" + (i + 1)]
                        }, a = !0, o = 2, s = function() {
                            --o <= 0 && t(a, i);
                        };
                        n.needStar ? l.getStarSum(function(e) {
                            e < this.decodeData(n.needStar) && (a = !1), s();
                        }, this) : s(), n.needThumb ? l.getData("takeOutRoomThumb", function(e) {
                            e < this.decodeData(n.needThumb) && (a = !1), s();
                        }, this) : s();
                    }
                }, this);
            },
            paySuccessAction: function(e, t, i) {
                var n = {};
                e.coin ? (n.type = "coin", n.number = e.coin, n.worldPos = e.coinPos) : e.plate && (n.type = "plate", 
                n.number = e.plate, n.worldPos = e.coinPos);
                var a = new cc.Node();
                a.parent = cc.find("Canvas/topUI"), n.worldPos = a.convertToWorldSpaceAR(n.worldPos), 
                o.addFloatItem(n), 1 != t && l.sendMessage("onIAP_callback", "onSuccess");
            },
            localizePay: {},
            initApp: function() {
                var e = this, i = t("config");
                l.initErrorUpload(), "global" == i.app_type && (l.initFacebook(), l.initLine(), 
                l.getDeviceInfo()), "undefined" != typeof sdkbox && ("global" == i.app_type || "inland" == i.app_type && o.isIosOnly()) && (sdkbox.IAP.setListener({
                    onSuccess: function(t) {
                        console.log("iap @@@@ onSuccess", t.name, t.id), e.netCheckPay(t);
                    },
                    onFailure: function(e, t) {
                        console.log("iap @@@@ onFailure", JSON.stringify(e), t), l.sendMessage("showToast", s.getText("pay_fail")), 
                        l.sendMessage("onIAP_callback", "onFailure");
                    },
                    onCanceled: function(e) {
                        console.log("iap @@@@ onCanceled", JSON.stringify(e)), l.sendMessage("showToast", s.getText("pay_fail")), 
                        l.sendMessage("onIAP_callback", "onCanceled");
                    },
                    onRestored: function(e) {
                        console.log("iap @@@@ onRestored");
                    },
                    onProductRequestSuccess: function(e) {
                        for (var t = {}, i = 0; i < e.length; i++) {
                            console.log("iap @@@@ onProductRequestSuccess", JSON.stringify(e[i]));
                            var n = e[i];
                            t[n.name] = n.price;
                        }
                        l.localizePay = t, l.setObjToJson("localizePay", t, function() {}, this);
                    },
                    onProductRequestFailure: function(e) {
                        console.log("iap @@@@ onProductRequestFailure", e);
                    }
                }), sdkbox.IAP.init(), sdkbox.IAP.enableUserSideVerification(!0), sdkbox.IAP.refresh(), 
                l.checkPaied());
            },
            showMail: function(e) {
                var i = "Mail/" + t("MailData")[e].prefabName;
                o.loadRes(i, cc.Prefab, function(t, i) {
                    if (t) console.error(t); else {
                        o.retainRes(i);
                        var n = o.autoReleaseInstantiate(i);
                        n.parent = cc.find("Canvas/topDlg"), n.group = "ui";
                        var a = n.getComponent("MailDetail");
                        a && a.initMailDetail(e, !0, i);
                    }
                }, 10);
            },
            initErrorUpload: function() {
                if (o.isAppOnly()) {
                    var e = t("config"), i = t("netManager"), n = 0, a = !1;
                    window.__errorHandler = function(t, o, s, r, c) {
                        var h = {};
                        if (h.errorMessage = t, h.file = o, h.line = s, h.message = r, h.error = c, window.exception != JSON.stringify(h) && (window.exception = JSON.stringify(h), 
                        Date.parse(new Date()) - n > 2e3 && !1 === a)) {
                            a = !0;
                            var l = {
                                exception: h,
                                type: e.app_type,
                                version: e.version
                            };
                            i.uploadErrorInfo(l, function(e) {
                                a = !1, n = Date.parse(new Date());
                            }, this);
                        }
                    };
                }
            },
            isMemorialExsit: function(e, t, i) {
                i && (t = t.bind(i)), this.getData("memorial_unlock_" + e, function(i) {
                    this.getObjFromJson("memorialBag", function(n) {
                        var a = !1;
                        for (var o in n) n[o].key == e && (a = !0);
                        !a && i && (a = !0), t(a);
                    }, this);
                }, this);
            },
            netCheckPay: function(e, i) {
                var n = t("config"), a = "ios", r = e.receiptCipheredPayload;
                if (o.isAndroidOnly() && "global" == n.app_type) {
                    a = "google_play";
                    var c = {};
                    try {
                        c = JSON.parse(e.receipt);
                    } catch (e) {
                        console.log("jjjj ", e), c = {};
                    }
                    r = c.purchaseToken;
                }
                var h = t("netManager"), u = {
                    platform: a,
                    package: "global" == n.app_type ? "droidhang.twgame.restaurant" : "inland.twgame.restaurant",
                    order: e.transactionID,
                    token: r,
                    product: e.id,
                    value: e.priceValue
                };
                h.checkPayment(u, function(a) {
                    if (e.tryNum = e.tryNum ? e.tryNum + 1 : 0, console.log("iap @@@@ onSuccess ", a), 
                    a) {
                        i && l.getObjFromJson("savePaied", function(t) {
                            if (t) {
                                for (var i = t.length, n = [], a = 0; a < i; a++) {
                                    var o = t[a];
                                    o.transactionID != e.transactionID && n.push(o);
                                }
                                l.setObjToJson("savePaied", n, function() {}, this);
                            }
                        }, this);
                        var r = t("shopData");
                        if ("iapgiftbag_coin" == e.name || "droidhang.twgame.restaurant.iapgiftbag_coin" == e.id || "in_iapgiftbag_coin" == e.name) {
                            "in_iapgiftbag_coin" == e.name && l.noAdultAddPayNum(40), "iapgiftbag_coin" == e.name && h.biPayInfo({
                                orderId: e.transactionID,
                                id: e.id,
                                name: e.name
                            }, r, function() {});
                            var c = r.monthCard.duration, u = o.getServerTime(), d = this.getDayStartTime(u, 2);
                            l.getData("monthCard_endTime", function(t) {
                                var a = void 0, h = !1;
                                d >= t ? a = d + 24 * c * 60 * 60 * 1e3 : (h = !0, a = t + 24 * c * 60 * 60 * 1e3), 
                                l.setData("monthCard_endTime", a, function() {
                                    h && l.sendMessage("showToast", s.getText("pay_success")), l.sendMessage("onIAP_callback", "onSuccess", "monthCard"), 
                                    i || (o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "AFpayInfo:And:OrderId:", r.monthCard.payDollar, e.id, e.transactionID) : o.isAndroidOnly() && "global" == n.app_type && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_payInfo", "(Ljava/lang/String;Ljava/lang/String;)V", r.monthCard.payDollar, e.transactionID));
                                }, this);
                            }, this);
                        } else if ("iapgiftbag_plate" == e.name || "droidhang.twgame.restaurant.iapgiftbag_plate" == e.id || "in_iapgiftbag_plate" == e.name) {
                            "in_iapgiftbag_plate" == e.name && l.noAdultAddPayNum(40), "iapgiftbag_plate" == e.name && h.biPayInfo({
                                orderId: e.transactionID,
                                id: e.id,
                                name: e.name
                            }, r, function() {});
                            var f = r.monthCardPlate.duration, g = o.getServerTime(), p = this.getDayStartTime(g, 2);
                            l.getData("monthCard_plate_endTime", function(t) {
                                var a = void 0, c = !1;
                                p >= t ? a = p + 24 * f * 60 * 60 * 1e3 : (c = !0, a = t + 24 * f * 60 * 60 * 1e3), 
                                l.setData("monthCard_plate_endTime", a, function() {
                                    c && l.sendMessage("showToast", s.getText("pay_success")), l.sendMessage("onIAP_callback", "onSuccess", "monthCard_plate"), 
                                    i || (o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "AFpayInfo:And:OrderId:", r.monthCardPlate.payDollar, e.id, e.transactionID) : o.isAndroidOnly() && "global" == n.app_type && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_payInfo", "(Ljava/lang/String;Ljava/lang/String;)V", r.monthCardPlate.payDollar, e.transactionID));
                                }, this);
                            }, this), l.getData("capsuleFreeTimes", function(e) {
                                var i = t("config");
                                e || l.setData("capsuleFreeTimes", i.capsuleFreeTimes, function() {});
                            });
                        } else {
                            for (var m = r.items, y = null, v = 1, b = 0; b < m.length; b++) {
                                var _ = m[b];
                                if (1 == v && b >= 3 && (v = 2), _.iap == e.name || _.in_iap == e.name) {
                                    y = _;
                                    break;
                                }
                            }
                            y && !i && (l.paySuccessAction(y, !1, v), o.isIosOnly() && "inland" == n.app_type && l.noAdultAddPayNum(y.pay), 
                            o.isNativeOnly() && "global" == n.app_type && h.biPayInfo({
                                orderId: e.transactionID,
                                id: e.id,
                                name: e.name
                            }, r, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "AFpayInfo:And:OrderId:", y.payDollar, e.id, e.transactionID) : o.isAndroidOnly() && "global" == n.app_type && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_payInfo", "(Ljava/lang/String;Ljava/lang/String;)V", y.payDollar, e.transactionID));
                        }
                    } else i || (l.sendMessage("showToast", s.getText("pay_fail")), l.sendMessage("onIAP_callback", "onFailure")), 
                    l.getObjFromJson("savePaied", function(t) {
                        if (t) {
                            for (var i = !1, n = [], a = 0; a < t.length; a++) {
                                var o = t[a];
                                o.transactionID == e.transactionID ? i = !0 : n.push(o);
                            }
                            i ? (e.tryNum >= 10 && (t = n), l.setObjToJson("savePaied", t, function() {}, this)) : (t.push(e), 
                            l.setObjToJson("savePaied", t, function() {}, this));
                        } else l.setObjToJson("savePaied", [ e ], function() {}, this);
                    }, this);
                }, this);
            },
            checkPaied: function() {
                l.getObjFromJson("savePaied", function(e) {
                    var t = this;
                    if (setTimeout(function() {
                        t.checkPaied();
                    }, 18e4), e) {
                        var i = e.length;
                        i > 10 && (e = e.slice(i - 10, i));
                        var n = e[0];
                        n && this.netCheckPay(n, !0);
                    }
                }, this);
            },
            taskAttentionShow: !1,
            openScoreDlg: function() {
                function e(e) {
                    l.getData(e, function(i) {
                        i || t("ViewModule").ins.pushView("scoreDlg", e);
                    });
                }
                if (o.isNativeOnly() && !l.taskAttentionShow) {
                    var i = 0;
                    l.getData("task_attention", function(e) {
                        i = e;
                    }), i || (l.taskAttentionShow = !0, l.getStarSum(function(t) {
                        t > 2e3 ? e("task_attention_2000") : t > 500 && t < 2e3 ? e("task_attention_500") : t > 50 && t < 500 && e("task_attention_50");
                    }));
                }
            },
            appsflyer_ads: function() {
                var e = t("config");
                if (o.isNativeOnly() && ("global" == e.app_type || "inland" == e.app_type && o.isIosOnly())) {
                    var i = !1;
                    l.getData("signupTime", function(e) {
                        e < 15790896e5 && (i = !0);
                    }, this), i || l.getData("cumulative_sendAd", function(e) {
                        e >= 20 && l.getData("af_adsTimes20", function(e) {
                            e || (l.setData("af_adsTimes20", 1, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "af_ads:", "2") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_ads", "(Ljava/lang/String;)V", "2"));
                        }), e >= 10 && l.getData("af_adsTimes10", function(e) {
                            e || (l.setData("af_adsTimes10", 1, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "af_ads:", "1") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_ads", "(Ljava/lang/String;)V", "1"));
                        });
                    }, this);
                }
            },
            appsflyer_Obtain: function() {
                var e = t("config");
                if (o.isNativeOnly() && ("global" == e.app_type || "inland" == e.app_type && o.isIosOnly())) {
                    var i = !1;
                    l.getData("signupTime", function(e) {
                        e < 15790896e5 && (i = !0);
                    }, this), i || l.getData("cumulative_money", function(e) {
                        e >= 3e6 && l.getData("af_cod3M", function(e) {
                            e || (l.setData("af_cod3M", 1, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "af_obtain:", "3") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_obtain", "(Ljava/lang/String;)V", "3"));
                        }), e >= 1e6 && l.getData("af_cod1M", function(e) {
                            e || (l.setData("af_cod1M", 1, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "af_obtain:", "2") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_obtain", "(Ljava/lang/String;)V", "2"));
                        }), e >= 5e5 && l.getData("af_cod50W", function(e) {
                            e || (l.setData("af_cod50W", 1, function() {}), o.isIosOnly() ? jsb.reflection.callStaticMethod("PayManager", "af_obtain:", "1") : o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_obtain", "(Ljava/lang/String;)V", "1"));
                        });
                    }, this);
                }
            },
            WxAppPay: function(e) {
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "wxPay", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e.partnerid, e.prepayid, e.noncestr, e.timestamp, e.sign);
            },
            initWxAppPay: function() {
                var e = this, i = t("wechatPlatformManager");
                i.wechatPayCallback = function(n) {
                    if ("true" == n || 1 == n) {
                        var a = t("shopData"), o = t("netManager"), r = a.items, c = {
                            fish1: 0,
                            fish2: 1,
                            fish3: 2,
                            plate1: 3,
                            plate2: 4,
                            plate3: 5
                        };
                        o.checkWxAppPay({}, function(e, t) {
                            if (0 == e) {
                                if (console.log("weixin 购买成功", t), "fishMonth" == t) l.noAdultAddPayNum(40), l.payMoneyMonthCard(a.monthCard.duration, a.monthCard.payDollar, o.wxAppOrderId); else if ("plateMonth" == t) l.noAdultAddPayNum(40), 
                                l.payPlateMonthCard(a.monthCardPlate.duration, a.monthCardPlate.payDollar, o.wxAppOrderId); else if (c[t] <= 5 && c[t] >= 0) {
                                    var i = c[t], n = i <= 2 ? 1 : 2;
                                    l.noAdultAddPayNum(r[i].pay), l.paySuccessAction(r[i], !1, n);
                                }
                            } else -2 == e ? l.sendMessage("showToast", s.getText("toast_string_6")) : l.sendMessage("showToast", s.getText("pay_fail")), 
                            l.sendMessage("onIAP_callback", "onFailure");
                        }, e);
                    } else l.sendMessage("showToast", s.getText("pay_fail")), l.sendMessage("onIAP_callback", "onFailure");
                    i.wechatPayCallback = null;
                };
            },
            payMoneyMonthCard: function(e, t, i) {
                var n = o.getServerTime(), a = this.getDayStartTime(n, 2);
                l.getData("monthCard_endTime", function(n) {
                    var r = void 0, c = !1;
                    a >= n ? r = a + 24 * e * 60 * 60 * 1e3 : (c = !0, r = n + 24 * e * 60 * 60 * 1e3), 
                    l.setData("monthCard_endTime", r, function() {
                        c && l.sendMessage("showToast", s.getText("pay_success")), l.sendMessage("onIAP_callback", "onSuccess", "monthCard"), 
                        o.isIosOnly() || o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_payInfo", "(Ljava/lang/String;Ljava/lang/String;)V", t, i || "");
                    }, this);
                }, this);
            },
            payPlateMonthCard: function(e, i, n) {
                var a = o.getServerTime(), r = this.getDayStartTime(a, 2);
                l.getData("monthCard_plate_endTime", function(t) {
                    var a = void 0, c = !1;
                    r >= t ? a = r + 24 * e * 60 * 60 * 1e3 : (c = !0, a = t + 24 * e * 60 * 60 * 1e3), 
                    l.setData("monthCard_plate_endTime", a, function() {
                        c && l.sendMessage("showToast", s.getText("pay_success")), l.sendMessage("onIAP_callback", "onSuccess", "monthCard_plate"), 
                        o.isIosOnly() || o.isAndroidOnly() && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "af_payInfo", "(Ljava/lang/String;Ljava/lang/String;)V", i, n || "");
                    }, this);
                }, this), l.getData("capsuleFreeTimes", function(e) {
                    var i = t("config");
                    e || l.setData("capsuleFreeTimes", i.capsuleFreeTimes, function() {});
                });
            },
            WxMiPay: function(e, t) {
                if ("undefined" != typeof wx) {
                    var i = !1, n = {
                        mode: "game",
                        offerId: "1450023386",
                        currencyType: "CNY",
                        env: 0,
                        platform: "android",
                        buyQuantity: e,
                        success: function(e) {
                            i = !0;
                        },
                        fail: function(e) {
                            console.log(e);
                        },
                        complete: function(e) {
                            t(i);
                        }
                    };
                    o.isWxPCOnly() && (n.platform = "windows"), wx.requestMidasPayment(n);
                } else t(!1);
            },
            addWxMiPayList: function(e) {
                l.getObjFromJson("wxMiPayList", function(t) {
                    if (t && 0 != t.length) {
                        for (var i = [ e ], n = 0; n < t.length; n++) {
                            var a = t[n];
                            if (i.push(a), n >= 5) break;
                        }
                        l.setObjToJson("wxMiPayList", i, function() {});
                    } else l.setObjToJson("wxMiPayList", [ e ], function() {});
                });
            },
            deleteMiPayList: function(e) {
                l.getObjFromJson("wxMiPayList", function(t) {
                    if (t && 0 != t.length) {
                        for (var i = [], n = 0; n < t.length; n++) {
                            var a = t[n];
                            a != e && i.push(a);
                        }
                        l.setObjToJson("wxMiPayList", i, function() {});
                    }
                });
            },
            countMiPayNum: function(e) {
                for (var t = [ 1, 3, 6, 8, 12, 18, 25, 30, 40, 45, 50, 60, 68, 73, 78, 88, 98, 108 ], i = 0; i < t.length - 1; i++) {
                    var n = t[i], a = t[i + 1];
                    if (n == e) return n;
                    if (a == e) return a;
                    if (e < a && e > n) return a;
                }
                return 108;
            },
            checkMiPayFailOrd: function() {
                l.getObjFromJson("wxMiPayList", function(e) {
                    e && 0 != e.length && t("netManager").checkWxMiOrder({
                        orderId: e[0]
                    }, function(t, i) {
                        if (0 == t && i.type) {
                            var n = {
                                fish1: 2e5,
                                fish2: 1e6,
                                fish3: 5e6,
                                plate1: 500,
                                plate2: 2500,
                                plate3: 12500
                            };
                            if ("fishMonth" == i.type) setTimeout(function() {
                                l.sendMessage("showToast", s.getText("pay_success")), l.payMoneyMonthCard(30, 40, null);
                            }, 500); else if ("plateMonth" == i.type) setTimeout(function() {
                                l.sendMessage("showToast", s.getText("pay_success")), l.payPlateMonthCard(30, 40, null);
                            }, 500); else if (n[i.type] >= 2e5) {
                                var a = {
                                    coin: n[i.type],
                                    coinPos: {
                                        x: 170,
                                        y: -50
                                    }
                                };
                                setTimeout(function() {
                                    l.sendMessage("showToast", s.getText("pay_success")), l.paySuccessAction(a, !0, 1);
                                }, 500);
                            } else if (n[i.type] < 2e5 && n[i.type] >= 500) {
                                var o = {
                                    plate: n[i.type],
                                    coinPos: {
                                        x: 170,
                                        y: -50
                                    }
                                };
                                setTimeout(function() {
                                    l.sendMessage("showToast", s.getText("pay_success")), l.paySuccessAction(o, !0, 2);
                                }, 500);
                            }
                        }
                        for (var r = [], c = 1; c < e.length; c++) {
                            var h = e[c];
                            r.push(h);
                        }
                        l.setObjToJson("wxMiPayList", r, function() {});
                    });
                });
            },
            MiPayNetSign: function(e) {
                var t = [], i = {};
                for (var n in e) e[n] && "" != e[n] && t.push(n);
                for (var a in t.sort(), t) {
                    var o = t[a];
                    i[o] = e[o];
                }
                var s = "";
                for (var c in i) s += c, s += "=", s += i[c], s += "&";
                var h = s + "key=twgame_MiJJc";
                return r.MD5(h).toString().toUpperCase();
            },
            getTheme: function(e, i, n) {
                n && (i = i.bind(n)), this.getData("theme_" + e, function(n) {
                    for (var a = this, o = t("config"), s = t("global"), r = s.getSeason(), c = o.secretStoreMap[e], h = c.items, l = h[0].key, u = 0, d = 0; d < h.length; d++) if (h[d].type == r) {
                        l = h[d].key, u = d;
                        break;
                    }
                    if (!n) return n &= ~(3 << 2 * u), n |= 2 << 2 * u, void this.setData("theme_" + e, n, function() {
                        i(l);
                    }, this);
                    for (var f = l, g = c.items.length, p = function() {
                        --g <= 0 && i(f);
                    }, m = 0; m < c.items.length; m++) !function(t) {
                        var i = c.items[t], o = n >> 2 * t & 3;
                        a.getData("theme_time_" + i.key, function(a) {
                            var r = i.validTime, c = s.getServerTime() - a;
                            2 == o && (f = i.key), !r || 1 != o && 2 != o ? p() : (c > r && t !== u && (n &= ~(3 << 2 * t), 
                            2 == o && (n &= ~(3 << 2 * u), n |= 2 << 2 * u, f = l)), this.setData("theme_" + e, n, function() {
                                p();
                            }, this));
                        }, a);
                    }(m);
                }, this);
            },
            isRealNameReg: !1,
            cardAge: 1,
            noAdultAddPayNum: function(e) {
                if (l.isRealNameReg && !(l.cardAge >= 18) && e) {
                    var t = new Date(), i = t.getFullYear() + ":" + (t.getMonth() + 1);
                    l.getObjFromJson("realNamePay", function(t) {
                        t ? (t.payCount || (t.payCount = 0), e += t.payCount, l.setObjToJson("realNamePay", {
                            date: i,
                            payCount: e
                        }, function() {
                            console.log("@@@@jjj noAdultAddPayNum ", e);
                        })) : l.setObjToJson("realNamePay", {
                            date: i,
                            payCount: e
                        }, function() {
                            console.log("@@@@jjj noAdultAddPayNum ", e);
                        });
                    });
                }
            },
            saveCumulativePlayTime: function() {
                l.getObjFromJson("cumulativeDayPlayTime", function(e) {
                    if (e) {
                        var t = new Date(), i = t.getFullYear() + ":" + (t.getMonth() + 1) + ":" + t.getDate();
                        e.date == i && o.IsNumer(e.playTime) ? o.cumulativeDayPlayTime = e.playTime : o.cumulativeDayPlayTime = 0;
                    } else o.cumulativeDayPlayTime = 0;
                }), console.log("@@@@j global.cumulativeDayPlayTime is ", o.cumulativeDayPlayTime), 
                function e() {
                    var t = new Date(), i = t.getFullYear() + ":" + (t.getMonth() + 1) + ":" + t.getDate();
                    l.getObjFromJson("cumulativeDayPlayTime", function(t) {
                        t ? (t.date != i && (o.cumulativeDayPlayTime = 0), l.setObjToJson("cumulativeDayPlayTime", {
                            date: i,
                            playTime: o.cumulativeDayPlayTime
                        }, function() {
                            setTimeout(function() {
                                e();
                            }, 6e4), console.log("@@@@jj global.cumulativeDayPlayTime is ", o.cumulativeDayPlayTime);
                        })) : l.setObjToJson("cumulativeDayPlayTime", {
                            date: i,
                            playTime: o.cumulativeDayPlayTime
                        }, function() {});
                    });
                }();
            },
            delNoAdultPayNum: function() {
                var e = new Date(), t = e.getFullYear(), i = e.getMonth() + 1;
                l.isRealNameReg && l.cardAge < 18 && l.getObjFromJson("realNamePay", function(e) {
                    if (e) {
                        var n = t + ":" + i;
                        e.date != n && l.setObjToJson("realNamePay", {
                            date: n,
                            payCount: 0
                        }, function() {});
                    } else l.setObjToJson("realNamePay", {
                        date: t + ":" + i,
                        payCount: 0
                    }, function() {});
                }, this);
            },
            delDayPlayTime: function() {
                var e = new Date(), t = e.getFullYear(), i = e.getMonth() + 1, n = e.getDate();
                l.getObjFromJson("cumulativeDayPlayTime", function(e) {
                    if (e) {
                        var a = t + ":" + i + ":" + n;
                        e.date != a ? (l.setObjToJson("cumulativeDayPlayTime", {
                            date: a,
                            playTime: 0
                        }, function() {}), o.cumulativeDayPlayTime = 0) : o.cumulativeDayPlayTime = e.playTime;
                    } else l.setObjToJson("cumulativeDayPlayTime", {
                        date: t + ":" + i + ":" + n,
                        playTime: 0
                    }, function() {}), o.cumulativeDayPlayTime = 0;
                });
            },
            getBiLang: function() {
                var e = s.lan;
                return "kr" == e && (e = "ko"), "jp" == e && (e = "ja"), "cn2" == e && (e = "zh"), 
                e;
            },
            qqMiPay: function(e, t, i) {
                "undefined" != typeof qq && e && t ? (console.log("qqMiPayqqMiPayqqMiPay ", t), 
                qq.requestMidasPayment({
                    prepayId: e,
                    starCurrency: t,
                    success: function() {
                        console.log("支付成功"), i(0, t);
                    },
                    fail: function(e) {
                        var t = e.errMsg, n = e.errCode;
                        console.log("qq小程序支付失败"), console.log(t, n), i(-1);
                    }
                })) : i(-1);
            }
        };
        l.init(), i.exports = l, cc._RF.pop();
    }, {
        AdSDKPlatformManager: "AdSDKPlatformManager",
        CryptoJS: "CryptoJS",
        MailData: "MailData",
        ViewModule: "ViewModule",
        config: "config",
        global: "global",
        localize: "localize",
        netManager: "netManager",
        shopData: void 0,
        twSprite: "twSprite",
        wechatPlatformManager: "wechatPlatformManager"
    } ],
    wechatPlatformManager: [ function(e, t, i) {
        cc._RF.push(t, "01691WyDCtGIoFycfa/z+Z3", "wechatPlatformManager");
        var n = {
            wechatOnRespone: function(e) {
                this.loginCallback && this.loginCallback(e);
            },
            wechatOnShare: function(e) {
                this.shareCallback && this.shareCallback(e);
            },
            wechatPay: function(e) {
                this.wechatPayCallback && this.wechatPayCallback(e);
            }
        };
        window.wechatPlatformManager = n, t.exports = n, cc._RF.pop();
    }, {} ],
    wishPoolData: [ function(e, t, i) {
        cc._RF.push(t, "00538Y2QrdFh5xkojlKPZgn", "wishPoolData");
        var n = e("global"), a = e("userData"), o = e("config"), s = {
            refreshTime: 64800,
            items: [ [ {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_1",
                weight: 0
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_2",
                weight: 0
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_3",
                weight: 0
            }, {
                type: "coin",
                minValue: 4e3,
                maxValue: 8e3,
                weight: 50
            }, {
                type: "star",
                minValue: 1,
                maxValue: 5,
                weight: 18
            }, {
                type: "flower",
                flowerType: "Garden_baimeigui",
                flowerWeight: [ 100, 0, 0, 0 ],
                weight: 0
            }, {
                type: "flower",
                flowerType: "Garden_xiaochuju",
                flowerWeight: [ 100, 0, 0, 0 ],
                weight: 11
            }, {
                type: "flower",
                flowerType: "Garden_xiangrikui",
                flowerWeight: [ 100, 0, 0, 0 ],
                weight: 9
            }, {
                type: "flower",
                flowerType: "Garden_meigui",
                flowerWeight: [ 100, 0, 0, 0 ],
                weight: 7
            }, {
                type: "flower",
                flowerType: "Garden_lanfengling",
                flowerWeight: [ 100, 0, 0, 0 ],
                weight: 5
            }, {
                type: "seed",
                seedType: "Garden_icon_seed",
                weight: 0
            } ], [ {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_1",
                weight: 6
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_2",
                weight: 0
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_3",
                weight: 0
            }, {
                type: "coin",
                minValue: 4e3,
                maxValue: 8e3,
                weight: 45
            }, {
                type: "star",
                minValue: 2,
                maxValue: 6,
                weight: 14
            }, {
                type: "flower",
                flowerType: "Garden_baimeigui",
                flowerWeight: [ 75, 20, 5, 0 ],
                weight: 1
            }, {
                type: "flower",
                flowerType: "Garden_xiaochuju",
                flowerWeight: [ 75, 20, 5, 0 ],
                weight: 11
            }, {
                type: "flower",
                flowerType: "Garden_xiangrikui",
                flowerWeight: [ 75, 20, 5, 0 ],
                weight: 9
            }, {
                type: "flower",
                flowerType: "Garden_meigui",
                flowerWeight: [ 75, 20, 5, 0 ],
                weight: 7
            }, {
                type: "flower",
                flowerType: "Garden_lanfengling",
                flowerWeight: [ 75, 20, 5, 0 ],
                weight: 5
            }, {
                type: "seed",
                seedType: "Garden_icon_seed",
                weight: 2
            } ], [ {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_1",
                weight: 8
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_2",
                weight: 2
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_3",
                weight: 1
            }, {
                type: "coin",
                minValue: 4e3,
                maxValue: 8e3,
                weight: 40
            }, {
                type: "star",
                minValue: 2,
                maxValue: 6,
                weight: 12
            }, {
                type: "flower",
                flowerType: "Garden_baimeigui",
                flowerWeight: [ 70, 25, 10, 5 ],
                weight: 2
            }, {
                type: "flower",
                flowerType: "Garden_xiaochuju",
                flowerWeight: [ 70, 25, 10, 5 ],
                weight: 11
            }, {
                type: "flower",
                flowerType: "Garden_xiangrikui",
                flowerWeight: [ 70, 25, 10, 5 ],
                weight: 9
            }, {
                type: "flower",
                flowerType: "Garden_meigui",
                flowerWeight: [ 70, 25, 10, 5 ],
                weight: 7
            }, {
                type: "flower",
                flowerType: "Garden_lanfengling",
                flowerWeight: [ 70, 25, 10, 5 ],
                weight: 5
            }, {
                type: "seed",
                seedType: "Garden_icon_seed",
                weight: 3
            } ], [ {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_1",
                weight: 8
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_2",
                weight: 5
            }, {
                type: "sprinkler",
                sprinklerType: "Garden_Watercan_3",
                weight: 2
            }, {
                type: "coin",
                minValue: 4e3,
                maxValue: 8e3,
                weight: 36
            }, {
                type: "star",
                minValue: 2,
                maxValue: 6,
                weight: 10
            }, {
                type: "flower",
                flowerType: "Garden_baimeigui",
                flowerWeight: [ 60, 20, 12, 8 ],
                weight: 3
            }, {
                type: "flower",
                flowerType: "Garden_xiaochuju",
                flowerWeight: [ 60, 20, 12, 8 ],
                weight: 11
            }, {
                type: "flower",
                flowerType: "Garden_xiangrikui",
                flowerWeight: [ 60, 20, 12, 8 ],
                weight: 9
            }, {
                type: "flower",
                flowerType: "Garden_meigui",
                flowerWeight: [ 60, 20, 12, 8 ],
                weight: 7
            }, {
                type: "flower",
                flowerType: "Garden_lanfengling",
                flowerWeight: [ 60, 20, 12, 8 ],
                weight: 5
            }, {
                type: "seed",
                seedType: "Garden_icon_seed",
                weight: 4
            } ] ],
            initWeather: function() {
                var e = this;
                s.initWeatherFlag = !0;
                var t = new Date(n.getServerTime()).getMonth();
                if (t >= 2 && t <= 4) {
                    this.weather = "spring";
                    for (var i = [ {
                        type: "flower",
                        flowerType: "Garden_yinghua",
                        flowerWeight: [ 100, 0, 0, 0 ],
                        weight: 2
                    }, {
                        type: "flower",
                        flowerType: "Garden_yinghua",
                        flowerWeight: [ 75, 20, 5, 0 ],
                        weight: 3
                    }, {
                        type: "flower",
                        flowerType: "Garden_yinghua",
                        flowerWeight: [ 70, 25, 10, 5 ],
                        weight: 4
                    }, {
                        type: "flower",
                        flowerType: "Garden_yinghua",
                        flowerWeight: [ 60, 20, 12, 8 ],
                        weight: 5
                    } ], o = s.items, r = 0; r < o.length; r++) i[r] && o[r].push(i[r]);
                } else if (t >= 5 && t <= 7) {
                    this.weather = "summer";
                    for (var c = [ {
                        type: "flower",
                        flowerType: "Garden_clover",
                        flowerWeight: [ 100, 0, 0, 0 ],
                        weight: 2
                    }, {
                        type: "flower",
                        flowerType: "Garden_clover",
                        flowerWeight: [ 75, 20, 5, 0 ],
                        weight: 3
                    }, {
                        type: "flower",
                        flowerType: "Garden_clover",
                        flowerWeight: [ 70, 25, 10, 5 ],
                        weight: 4
                    }, {
                        type: "flower",
                        flowerType: "Garden_clover",
                        flowerWeight: [ 60, 20, 12, 8 ],
                        weight: 5
                    } ], h = s.items, l = 0; l < h.length; l++) c[l] && h[l].push(c[l]);
                } else if (t >= 8 && t <= 10) {
                    this.weather = "autumn";
                    for (var u = [ {
                        type: "flower",
                        flowerType: "Garden_fengye",
                        flowerWeight: [ 100, 0, 0, 0 ],
                        weight: 2
                    }, {
                        type: "flower",
                        flowerType: "Garden_fengye",
                        flowerWeight: [ 75, 20, 5, 0 ],
                        weight: 3
                    }, {
                        type: "flower",
                        flowerType: "Garden_fengye",
                        flowerWeight: [ 70, 25, 10, 5 ],
                        weight: 4
                    }, {
                        type: "flower",
                        flowerType: "Garden_fengye",
                        flowerWeight: [ 60, 20, 12, 8 ],
                        weight: 5
                    } ], d = s.items, f = 0; f < d.length; f++) u[f] && d[f].push(u[f]);
                } else if (t >= 11 || t <= 1) {
                    this.weather = "winter";
                    for (var g = [ {
                        type: "flower",
                        flowerType: "Garden_xuehua",
                        flowerWeight: [ 100, 0, 0, 0 ],
                        weight: 2
                    }, {
                        type: "flower",
                        flowerType: "Garden_xuehua",
                        flowerWeight: [ 75, 20, 5, 0 ],
                        weight: 3
                    }, {
                        type: "flower",
                        flowerType: "Garden_xuehua",
                        flowerWeight: [ 70, 25, 10, 5 ],
                        weight: 4
                    }, {
                        type: "flower",
                        flowerType: "Garden_xuehua",
                        flowerWeight: [ 60, 20, 12, 8 ],
                        weight: 5
                    } ], p = s.items, m = 0; m < p.length; m++) g[m] && p[m].push(g[m]);
                }
                a.getTheme("theme_outdoor_group", function(e) {
                    this.changeTheme(e);
                }, this), a.addListener("changeTheme", function(t) {
                    "outdoor" == t.scene && e.changeTheme(t.itemKey);
                });
            },
            changeTheme: function(e) {
                this.oldThemeKey && this.onChangeTheme(this.oldThemeKey, -1), this.oldThemeKey = e, 
                this.onChangeTheme(e, 1);
            },
            onChangeTheme: function(e, t) {
                var i = o.secretStoreItemMap[e];
                if (this.weather != i.type) {
                    var n = void 0;
                    "spring" == i.type ? n = "Garden_yinghua" : "summer" == i.type ? n = "Garden_clover" : "autumn" == i.type ? n = "Garden_fengye" : "winter" == i.type && (n = "Garden_xuehua");
                    for (var a = s.items, r = 0; r < a.length; r++) {
                        for (var c = a[r], h = !1, l = 0; l < c.length; l++) {
                            var u = c[l];
                            "flower" == u.type && u.flowerType == n && (h = !0, u.weight += t);
                        }
                        if (!h && t > 0) {
                            var d = {
                                type: "flower",
                                flowerType: n,
                                flowerWeight: [ 76, 18, 5, 0 ],
                                weight: t
                            };
                            c.push(d);
                        }
                    }
                }
            }
        };
        t.exports = s, cc._RF.pop();
    }, {
        config: "config",
        global: "global",
        userData: "userData"
    } ]
}, {}, [ "CryptoJS", "MailData", "config", "jsencrypt", "localize", "loginNode", "movementUtil", "netManager", "toastDlg", "userData", "audioManager", "cdKeyDlg", "employee_1", "employee_10", "employee_11", "employee_12", "employee_13", "employee_14", "employee_2", "employee_3", "employee_4", "employee_5", "employee_6", "employee_7", "employee_8", "employee_9", "employees", "flowerData", "memorialData", "recordDlg", "settingDlg", "tencentAppBack", "wishPoolData", "AdSDKPlatformManager", "SceneEnum", "ViewMessageEnum", "ViewZIndexEnum", "Loading", "SceneModule", "ViewHandler", "ViewModule", "FramePerGenerating", "IDGenerator", "autoLabel", "bigVersionWarnDlg", "byteArryMd5", "destroySelfAction", "exitGameDlg", "fullScale", "global", "hotUpdate", "hotUpdateRepair", "minScale", "protocolDlg", "richTextClick", "startScene", "twAutoRelease", "twComponent", "twQueue", "twSprite", "wechatPlatformManager" ]);