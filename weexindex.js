// { "framework": "Vue" }
!
function(e) {
    function t(o) {
        if (r[o]) return r[o].exports;
        var n = r[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(n.exports, n, n.exports, t),
        n.loaded = !0,
        n.exports
    }
    var r = {};
    return t.m = e,
    t.c = r,
    t.p = "../",
    t(0)
} ({
    0 : function(e, t, r) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(26),
        i = o(n),
        a = r(8),
        s = o(a);
        i.
    default.el = "#root",
        Vue.mixin(s.
    default),
        t.
    default = new Vue(i.
    default),
        e.exports = t.
    default
    },
    1 : function(e, t, r) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getTagInfoFixed = t.tagInfoEnums = t.getNameFixed = t.getScoreImages = t.createLoading = t.getAuthorFixed = t.getFontFaceOptions = t.getFontFamily = t.track = t.toast = t.observer = t.getCreatedFixed = t.getHistoryFixed = t.shouldDisHistory = t.getScoreFixed = t.shouldDisScore = t.createLogoName = t.getScheduleTagFixed = t.isPosterValidate = void 0;
        var n = function() {
            function e(e, t) {
                var r = [],
                o = !0,
                n = !1,
                i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); ! (o = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                } catch(e) {
                    n = !0,
                    i = e
                } finally {
                    try { ! o && s.
                        return && s.
                        return ()
                    } finally {
                        if (n) throw i
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        } (),
        i = r(4),
        a = r(7),
        s = o(a),
        c = (t.isPosterValidate = function(e) {
            var t = e.size,
            r = t.naturalHeight,
            o = t.naturalWidth;
            return !! e.success && (1 !== r || 1 !== o)
        },
        t.getScheduleTagFixed = function(e) {
            return {
                display: !!e,
                fixed: e.trim(),
                style: {
                    borderBottomLeftRadius: "100",
                    borderTopLeftRadius: "100",
                    borderBottomRightRadius: "100",
                    borderTopRightRadius: "100",
                    borderWidth: "1.5",
                    fontSize: "18",
                    paddingTop: "2",
                    paddingBottom: "2",
                    paddingLeft: "11",
                    paddingRight: "11"
                }
            }
        },
        t.createLogoName = function(e) {
            var t = "\u6dd8\u7968\u7968";
            switch (e.toLowerCase()) {
            case i.symbol.GOLDEN:
                return t + " | \u9ec4\u91d1\u4f1a\u5458";
            case i.symbol.JETBLACK:
                return t + " | \u9ed1\u94bb\u4f1a\u5458";
            default:
                return "" + t
            }
        },
        t.shouldDisScore = function(e) {
            return {
                display: 1 * e !== 0
            }
        },
        t.getScoreFixed = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return {
                fixed: 1 * e < 10 ? (1 * e).toFixed(1) : e.toString()
            }
        },
        t.shouldDisHistory = function(e, t) {
            return {
                display: "" !== e && "" !== t
            }
        },
        t.getHistoryFixed = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return {
                fixed: r.replace(/(\%a)|(\%b)/g,
                function(r, o, n) {
                    return o ? e: n ? t: void 0
                })
            }
        },
        t.getCreatedFixed = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (!e) return {
                fixed: ""
            };
            var r = e.split("-"),
            o = n(r, 3),
            i = o[0],
            a = o[1],
            s = o[2];
            return {
                fixed: t.replace(/(\%y)|(\%m)|(\%d)/g,
                function(e, t, r, o) {
                    return t ? parseInt(i) : r ? parseInt(a) : o ? parseInt(s) : void 0
                })
            }
        },
        t.observer = function(e) {
            var t = weex.requireModule("globalEvent");
            t.addEventListener("refreshData", e)
        },
        t.toast = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            r = weex.requireModule("modal");
            r.toast({
                message: e,
                duration: t
            })
        },
        t.track = function e(t, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (e.validate(t, r, o)) {
                var n = weex.requireModule("userTrack");
                n.commitut("click", -1, "", t, "", "", "", r),
                e.stack[t] = JSON.stringify(r)
            }
        });
        c.validate = function(e, t, r) {
            var o = !r.length || r.some(function(e) {
                return t[e]
            });
            if (!o) return ! 1;
            var n = !!c.stack[e] && c.stack[e] === JSON.stringify(t);
            return ! n
        },
        c.stack = {};
        var u = (t.getFontFamily = function(e) {
            return {
                fontFamily: e
            }
        },
        t.getFontFaceOptions = function(e, t) {
            return {
                fontFamily: t,
                src: "url('" + e + "')"
            }
        },
        t.getAuthorFixed = function(e) {
            return {
                fixed: e.length > 10 ? e.slice(0, 9).concat("...") : e
            }
        },
        t.createLoading = function() {
            var e = weex.requireModule("tppLoading");
            return {
                show: function(t) {
                    return e.showLoading("\u6b63\u5728\u66ff\u6362\u56fe\u7247")
                },
                hide: function(t) {
                    return e.hideLoading()
                }
            }
        },
        t.getScoreImages = function(e, t, r) {
            return function(o) {
                var n = 2,
                i = [],
                a = Math.floor(o / n),
                s = o % 2,
                c = 5 - a - s,
                u = function(e, t) {
                    for (; e;) i.push(t),
                    e--
                };
                return u(a, e),
                u(s, t),
                u(c, r),
                i
            }
        },
        t.getNameFixed = function(e) {
            var t = e.length;
            if (t < 8) return e;
            if (t < 14) {
                var r = e.split("");
                return r.splice(7, 0, "\n"),
                r.join("")
            }
            var o = e.split("");
            return o.splice(7, 0, "\n"),
            o.splice(14, t, "..."),
            o.join("")
        },
        t.tagInfoEnums = {
            master: "MASTER",
            mgic: "MAGIC",
            buyer: "BUYER",
            preschedule: "PRESCHEDULE",
            creator: "CREATOR",
            friend: "FRIEND"
        });
        t.getTagInfoFixed = function(e) {
            return e.indexOf(u.master) > -1 ? {
                display: !0,
                icon: s.
            default
            }:
            {
                display:
                !1
            }
        }
    },
    2 : function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = t.platform = {
            iOS: "ios",
            Android: "android"
        };
        t.isIOS = weex.config.env.platform.toLowerCase() === r.iOS,
        t.isAndroid = weex.config.env.platform.toLowerCase() === r.Android,
        t.isIPhoneX = function() {
            var n = weex.requireModule("tppABTestConfig");
            n.getAllABTestConfigs(function(e) {
                    var r = weex.requireModule("modal");
                    r.toast({
                        message: JSON.stringify(e),
                        duration: 5
                    })
                }),
            var e = weex.config.env,
            t = e.deviceWidth,
            r = e.deviceHeight,
            o = e.scale,
            n = t / o,
            i = r / o;
            return 375 === n && 812 === i || 414 === n && 896 === i
        }
    },
    3 : function(e, t, r) {
        "use strict";
        function o(e, t) {
            for (var r = Object.getOwnPropertyNames(t), o = 0; o < r.length; o++) {
                var n = r[o],
                i = Object.getOwnPropertyDescriptor(t, n);
                i && i.configurable && void 0 === e[n] && Object.defineProperty(e, n, i)
            }
            return e
        }
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.
        default = e,
            t
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }
        function s(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ImageCounter = void 0;
        var c = r(5),
        u = n(c),
        d = r(1),
        l = (n(d),
        function() {
            function e() {
                s(this, e),
                this.index = 0
            }
            return e.createInstance = function() {
                for (var e = this,
                t = arguments.length,
                r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                return e.Instance || (e.Instance = new(Function.prototype.bind.apply(e, [null].concat(r))), e.Instance)
            },
            e.prototype.loadedExtend = function(e) {
                this.index++
            },
            e
        } ());
        t.ImageCounter = function(e) {
            function t(r) {
                s(this, t);
                var o = i(this, e.call(this));
                return o.count = r,
                o.notify = u.Notify.createInstance(),
                o.loadedResolve = function(e) {},
                o.counterNotify(),
                o
            }
            return a(t, e),
            t.prototype.loadedExtend = function(t) {
                e.prototype.loadedExtend.call(this, t),
                this.index < this.count || this.loadedResolve()
            },
            t.prototype.counterNotify = function() {
                var e = this;
                return Promise.race([this.timeoutNotify(), this.loadedNotify()]).then(function(t) {
                    return e.notify.ready4Share()
                }).
                catch(function(e) {
                    return console.error(e)
                })
            },
            t.prototype.loadedNotify = function() {
                var e = this;
                return new Promise(function(t) {
                    return e.loadedResolve = t
                })
            },
            t.prototype.timeoutNotify = function() {
                return new Promise(function(e) {
                    return setTimeout(function(t) {
                        return e()
                    },
                    2e3)
                })
            },
            t
        } (l)
    },
    4 : function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.symbol = {
            NOR: "v0",
            BRONZE: "v1",
            SILVER: "v2",
            GOLDEN: "v3",
            JETBLACK: "v4"
        }
    },
    5 : function(e, t) {
        "use strict";
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.Notify = function() {
            function e(t) {
                r(this, e),
                this.notify = t ? t.notify: void 0
            }
            return e.createInstance = function() {
                var e = weex.requireModule("tppNotify"),
                t = this;
                return t.Instance || (t.Instance = new t(e), t.Instance)
            },
            e.prototype.ready4Share = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.notify && this.notify({
                    name: "__weex__ready4Share",
                    userInfo: e
                })
            },
            e
        } ()
    },
    6 : function(e, t, r) {
        "use strict";
        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.
        default = e,
            t
        }
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getPreviewScreenHeight = void 0;
        var i, a, s = r(2),
        c = o(s),
        u = (i = {},
        n(i, c.platform.iOS, c.isIPhoneX() ? 76 : 69), n(i, c.platform.Android, 48), i),
        d = (a = {},
        n(a, c.platform.iOS, c.isIPhoneX() ? 101 : 50), n(a, c.platform.Android, 50), a);
        t.getPreviewScreenHeight = function() {
            var e = weex.config.env,
            t = e.deviceHeight,
            r = e.deviceWidth,
            o = e.scale,
            n = e.platform,
            i = 750 / r,
            a = t * i,
            s = o * i,
            c = n.toLowerCase();
            return a - (u[c] + d[c]) * s
        }
    },
    7 : function(e, t, r) {
        e.exports = r.p + "card/image/446fc0a431c7aff86052c595fb356645.png"
    },
    8 : function(e, t, r) {
        "use strict";
        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.
        default = e,
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = o(n);
        t.
    default = {
            data: function() {
                return {
                    fontURL: "",
                    fontName: "",
                    year: "",
                    count: "",
                    score: "",
                    name: "",
                    comment: "",
                    level: "",
                    author: "",
                    created: "",
                    scheduleTag: "",
                    tagInfo: []
                }
            },
            computed: {
                tagInfoFixed: function() {
                    return i.getTagInfoFixed(this.tagInfo)
                }
            }
        },
        e.exports = t.
    default
    },
    10 : function(e, t, r) {
        e.exports = r.p + "card/image/82979314b07f2fd31753a106fbfd3249.png"
    },
    11 : function(e, t, r) {
        e.exports = r.p + "card/image/1879ed2ea3f82ded07275f16fbc7497c.png"
    },
    26 : function(e, t, r) {
        "use strict";
        var o, n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        a = [];
        a.push(r(82)),
        a.push(r(83)),
        o = r(71);
        var s = r(91);
        n = o = o || {},
        "object" !== i(o.
    default) && "function" != typeof o.
    default || (n = o = o.
    default),
        "function" == typeof n && (n = n.options),
        n.render = s.render,
        n.staticRenderFns = s.staticRenderFns,
        n._scopeId = "data-v-6f383db6",
        n.style = n.style || {},
        a.forEach(function(e) {
            for (var t in e) n.style[t] = e[t]
        }),
        "function" == typeof __register_static_styles__ && __register_static_styles__(n._scopeId, a),
        e.exports = o
    },
    38 : function(e, t, r) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.
        default = e,
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getStars = t.getLayoutStyle = t.getLevelIcon = t.getRootViewStyle = t.getPosterStyle = t.getBrushIcon = t.getLogoIcon = t.getErrorImg = void 0;
        var i = r(2),
        a = n(i),
        s = r(11),
        c = o(s),
        u = r(42),
        d = o(u),
        l = r(43),
        f = o(l),
        g = r(44),
        p = o(g),
        h = r(45),
        y = o(h),
        v = r(46),
        m = o(v),
        b = r(47),
        x = o(b),
        w = r(10),
        _ = o(w),
        I = (t.getErrorImg = function(e) {
            return _.
        default
        },
        t.getLogoIcon = function(e) {
            return c.
        default
        },
        t.getBrushIcon = function(e) {
            return d.
        default
        },
        t.getPosterStyle = function(e) {
            return {
                height: e ? e.toString() : "400"
            }
        },
        t.getRootViewStyle = function(e) {
            return {
                height: e
            }
        },
        t.getLevelIcon = function(e) {
            switch (e.toLowerCase()) {
            case "v3":
                return f.
            default;
            case "v4":
                return p.
            default;
            default:
                return ""
            }
        },
        a.isIPhoneX() ? {
            minHeight: "1354"
        }: {
            minHeight: "1180"
        });
        t.getLayoutStyle = function() {
            return {
                style: a.isIOS ? I: void 0
            }
        },
        t.getStars = function(e) {
            for (var t = 2,
            r = [], o = Math.floor(e / t), n = e % 2, i = 5 - o - n; o;) r.push(m.
        default),
            o--;
            for (; n;) r.push(y.
        default),
            n--;
            for (; i;) r.push(x.
        default),
            i--;
            return r
        }
    },
    42 : function(e, t, r) {
        e.exports = r.p + "card/image/51de331ec9db1a940210d31d338e12ec.png"
    },
    43 : function(e, t, r) {
        e.exports = r.p + "card/image/fb228e56b0e7bae27766daacf66d7d23.png"
    },
    44 : function(e, t, r) {
        e.exports = r.p + "card/image/a0061fb631cd9133e461bff60dd60ffd.png"
    },
    45 : function(e, t, r) {
        e.exports = r.p + "card/image/811b1e028f3631525cd4bc2cbc51275c.png"
    },
    46 : function(e, t, r) {
        e.exports = r.p + "card/image/044390b76df791b7d7bead66d5386467.png"
    },
    47 : function(e, t, r) {
        e.exports = r.p + "card/image/f2e9b58ce04e96eedc46a555b3c5ecb3.png"
    },
    71 : function(e, t, r) {
        "use strict";
        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.
        default = e,
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        },
        i = r(38),
        a = r(3),
        s = o(a),
        c = r(1),
        u = o(c),
        d = r(6),
        l = o(d);
        t.
    default = {
            data: {
                year: "",
                count: "",
                score: "",
                name: "",
                poster: "",
                comment: "",
                level: "",
                author: "",
                created: "",
                posterHeight: "",
                scheduleTag: ""
            },
            computed: {
                authorFixed: function() {
                    return u.getAuthorFixed(this.author)
                },
                logoIcon: function() {
                    return (0, i.getLogoIcon)()
                },
                logoName: function() {
                    return u.createLogoName(this.level)
                },
                brushIcon: function() {
                    return (0, i.getBrushIcon)()
                },
                posterFixed: function() {
                    return {
                        style: (0, i.getPosterStyle)(this.posterHeight),
                        error: (0, i.getErrorImg)()
                    }
                },
                scoreFixed: function() {
                    return n({},
                    u.shouldDisScore(this.score), u.getScoreFixed(this.score))
                },
                createdFixed: function() {
                    return n({},
                    u.getCreatedFixed(this.created, "%y\u5e74%m\u6708%d\u65e5"))
                },
                historyFixed: function() {
                    return n({},
                    u.shouldDisHistory(this.year, this.count), u.getHistoryFixed(this.year, this.count, "%a\u5e74\uff0c\u6211\u770b\u7684\u7b2c%b\u90e8\u7535\u5f71"))
                },
                scheduleTagFixed: function() {
                    return u.getScheduleTagFixed(this.scheduleTag)
                },
                layoutStyle: function() {
                    return (0, i.getLayoutStyle)()
                },
                rootViewStyle: function() {
                    return (0, i.getRootViewStyle)(this.height)
                },
                levelIcon: function() {
                    return (0, i.getLevelIcon)(this.level)
                },
                stars: function() {
                    return (0, i.getStars)(this.score)
                }
            },
            methods: {
                imageOnLoaded: function(e) {
                    var t = s.ImageCounter.createInstance(9);
                    t.loadedExtend(e)
                },
                posterOnLoaded: function(e) {
                    var t = s.ImageCounter.createInstance(9);
                    if (t.loadedExtend(e), !u.isPosterValidate(e)) return void(this.poster = this.posterFixed.error);
                    var r = e.size,
                    o = r.naturalHeight,
                    n = r.naturalWidth,
                    i = 670 / n * o;
                    this.posterHeight = i,
                    u.createLoading().hide()
                },
                registry: function(e) {
                    var t = this;
                    e.poster && e.poster !== this.poster && u.createLoading().show(),
                    Object.keys(e).forEach(function(r) {
                        return t[r] = e[r]
                    }),
                    e.level && this.track()
                },
                track: function() {
                    u.track("Card", {
                        level: this.level
                    },
                    ["level"])
                }
            },
            init: function() {},
            created: function() {
                this.height = l.getPreviewScreenHeight(),
                u.observer(this.registry.bind(this))
            },
            mounted: function() {
                this.track()
            }
        },
        e.exports = t.
    default
    },
    82 : function(e, t) {
        e.exports = {
            scroller: {
                width: 750,
                alignItems: "stretch",
                backgroundColor: "rgba(255,255,255,0)"
            },
            "back-view": {
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0)"
            },
            "card-wrapper": {
                width: 670,
                borderTopLeftRadius: 13,
                borderTopRightRadius: 13,
                borderBottomRightRadius: 13,
                borderBottomLeftRadius: 13,
                overflow: "hidden",
                marginTop: 135
            },
            "poster-wrapper": {
                width: 670,
                height: 424,
                backgroundColor: "#50505a",
                borderRadius: 13
            },
            "score-wrapper": {
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center"
            },
            "score-text": {
                fontSize: 30,
                marginLeft: 10,
                color: "#fea54c"
            },
            "score-star-icon": {
                width: 30,
                height: 30,
                marginRight: 2
            },
            "score-schedule-tag": {
                marginRight: 14,
                textAlign: "center",
                color: "#fea54c",
                borderColor: "#ffc68e"
            },
            "comment-wrapper": {
                paddingTop: 56,
                paddingLeft: 55,
                paddingRight: 55,
                paddingBottom: 35,
                marginTop: -20,
                borderBottomLeftRadius: 13,
                borderBottomRightRadius: 13,
                backgroundColor: "#ffffff"
            },
            "comment-title": {
                color: "#222227",
                fontSize: 40
            },
            "comment-main": {
                color: "#50505a",
                fontSize: 30,
                lineHeight: 52,
                marginTop: 40
            },
            "author-wrapper": {
                marginTop: 50,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"
            },
            "author-text": {
                fontSize: 28,
                color: "#50505a"
            },
            "author-icon": {
                width: 35,
                height: 25,
                marginLeft: 3
            },
            "author-level-icon": {
                width: 36,
                height: 36,
                marginRight: 13
            },
            created: {
                marginTop: 12,
                fontSize: 24,
                color: "#bbbbbb",
                textAlign: "right"
            },
            history: {
                color: "#c8c8c8",
                fontSize: 22,
                marginTop: 46,
                textAlign: "center"
            },
            "logo-wrapper": {
                backgroundColor: "rgba(0,0,0,0.31)",
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopRightRadius: 100,
                paddingLeft: 18,
                paddingRight: 18,
                height: 40,
                marginTop: 60,
                marginBottom: 60,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            },
            "logo-icon": {
                width: 25,
                height: 24,
                marginRight: 4
            },
            "logo-brand": {
                fontSize: 20,
                color: "#d8d8d8"
            }
        }
    },
    83 : function(e, t) {
        e.exports = {
            "tag-info-icon": {
                width: 117,
                height: 28
            },
            "tag-info-icon-middle": {
                marginRight: 13
            },
            "tag-info-icon-right": {
                marginLeft: 13
            }
        }
    },
    91 : function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                t = e.$createElement,
                r = e._self._c || t;
                return r("scroller", {
                    staticClass: ["scroller"],
                    style: e.rootViewStyle,
                    attrs: {
                        showScrollbar: "false"
                    }
                },
                [r("div", {
                    staticClass: ["back-view"],
                    style: e.layoutStyle.style
                },
                [r("div", {
                    staticClass: ["card-wrapper"]
                },
                [r("image", {
                    staticClass: ["poster-wrapper"],
                    style: e.posterFixed.style,
                    attrs: {
                        src: e.poster
                    },
                    on: {
                        load: e.posterOnLoaded
                    }
                }), r("div", {
                    staticClass: ["comment-wrapper"]
                },
                [r("text", {
                    staticClass: ["comment-title"]
                },
                [e._v(e._s(e.name))]), r("div", {
                    staticClass: ["score-wrapper"]
                },
                [e.scheduleTagFixed.display ? r("text", {
                    staticClass: ["score-schedule-tag"],
                    style: e.scheduleTagFixed.style
                },
                [e._v(e._s(e.scheduleTagFixed.fixed))]) : e._e(), e._l(e.stars,
                function(t) {
                    return e.scoreFixed.display ? r("image", {
                        staticClass: ["score-star-icon"],
                        attrs: {
                            src: t,
                            resize: "cover"
                        },
                        on: {
                            load: e.imageOnLoaded
                        }
                    }) : e._e()
                }), e.scoreFixed.display ? r("text", {
                    staticClass: ["score-text"]
                },
                [e._v(e._s(e.scoreFixed.fixed))]) : e._e()], 2), r("text", {
                    staticClass: ["comment-main"]
                },
                [e._v(e._s(e.comment))]), r("div", {
                    staticClass: ["author-wrapper"]
                },
                [r("image", {
                    staticClass: ["author-level-icon"],
                    attrs: {
                        resize: "cover",
                        src: e.levelIcon
                    },
                    on: {
                        load: e.imageOnLoaded
                    }
                }), e.tagInfoFixed.display ? r("image", {
                    staticClass: ["tag-info-icon", "tag-info-icon-middle"],
                    attrs: {
                        src: e.tagInfoFixed.icon
                    },
                    on: {
                        load: e.imageOnLoaded
                    }
                }) : e._e(), r("text", {
                    staticClass: ["author-text"]
                },
                [e._v(e._s(e.authorFixed.fixed))]), r("image", {
                    staticClass: ["author-icon"],
                    attrs: {
                        resize: "cover",
                        src: e.brushIcon
                    },
                    on: {
                        load: e.imageOnLoaded
                    }
                })]), r("text", {
                    staticClass: ["created"]
                },
                [e._v(e._s(e.createdFixed.fixed))]), e.historyFixed.display ? r("text", {
                    staticClass: ["history"]
                },
                [e._v(e._s(e.historyFixed.fixed))]) : e._e()])]), r("div", {
                    staticClass: ["logo-wrapper"]
                },
                [r("image", {
                    staticClass: ["logo-icon"],
                    attrs: {
                        src: e.logoIcon
                    },
                    on: {
                        load: e.imageOnLoaded
                    }
                }), r("text", {
                    staticClass: ["logo-brand"]
                },
                [e._v(e._s(e.logoName))])])])])
            },
            staticRenderFns: []
        }
    }
});