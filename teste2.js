_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[16], {
    "/0+H": function(e, t, a) {
        "use strict";
        t.__esModule = !0,
        t.isInAmpMode = r,
        t.useAmp = function() {
            return r(o.default.useContext(i.AmpStateContext))
        }
        ;
        var n, o = (n = a("q1tI")) && n.__esModule ? n : {
            default: n
        }, i = a("lwAK");
        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , a = void 0 !== t && t
              , n = e.hybrid
              , o = void 0 !== n && n
              , i = e.hasQuery;
            return a || o && (void 0 !== i && i)
        }
    },
    "2qu3": function(e, t, a) {
        "use strict";
        var n = a("oI91")
          , o = a("/GRZ")
          , i = a("i2R6");
        function r(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(a), !0).forEach((function(t) {
                    n(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function l(e, t) {
            var a = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!a) {
                if (Array.isArray(e) || (a = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return u(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a)
                        return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                        return u(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    a && (e = a);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, r = !0, s = !1;
            return {
                s: function() {
                    a = a.call(e)
                },
                n: function() {
                    var e = a.next();
                    return r = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    i = e
                },
                f: function() {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        t.__esModule = !0,
        t.default = void 0;
        var c, d = (c = a("q1tI")) && c.__esModule ? c : {
            default: c
        }, p = a("8L3h"), m = a("jwwS");
        var f = []
          , h = []
          , g = !1;
        function _(e) {
            var t = e()
              , a = {
                loading: !0,
                loaded: null,
                error: null
            };
            return a.promise = t.then((function(e) {
                return a.loading = !1,
                a.loaded = e,
                e
            }
            )).catch((function(e) {
                throw a.loading = !1,
                a.error = e,
                e
            }
            )),
            a
        }
        function b(e) {
            var t = {
                loading: !1,
                loaded: {},
                error: null
            }
              , a = [];
            try {
                Object.keys(e).forEach((function(n) {
                    var o = _(e[n]);
                    o.loading ? t.loading = !0 : (t.loaded[n] = o.loaded,
                    t.error = o.error),
                    a.push(o.promise),
                    o.promise.then((function(e) {
                        t.loaded[n] = e
                    }
                    )).catch((function(e) {
                        t.error = e
                    }
                    ))
                }
                ))
            } catch (n) {
                t.error = n
            }
            return t.promise = Promise.all(a).then((function(e) {
                return t.loading = !1,
                e
            }
            )).catch((function(e) {
                throw t.loading = !1,
                e
            }
            )),
            t
        }
        function v(e, t) {
            return d.default.createElement(function(e) {
                return e && e.__esModule ? e.default : e
            }(e), t)
        }
        function y(e, t) {
            var a = Object.assign({
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                render: v,
                webpack: null,
                modules: null
            }, t)
              , n = null;
            function o() {
                if (!n) {
                    var t = new k(e,a);
                    n = {
                        getCurrentValue: t.getCurrentValue.bind(t),
                        subscribe: t.subscribe.bind(t),
                        retry: t.retry.bind(t),
                        promise: t.promise.bind(t)
                    }
                }
                return n.promise()
            }
            if (!g && "function" === typeof a.webpack) {
                var i = a.webpack();
                h.push((function(e) {
                    var t, a = l(i);
                    try {
                        for (a.s(); !(t = a.n()).done; ) {
                            var n = t.value;
                            if (-1 !== e.indexOf(n))
                                return o()
                        }
                    } catch (r) {
                        a.e(r)
                    } finally {
                        a.f()
                    }
                }
                ))
            }
            var r = function(e, t) {
                o();
                var i = d.default.useContext(m.LoadableContext)
                  , r = (0,
                p.useSubscription)(n);
                return d.default.useImperativeHandle(t, (function() {
                    return {
                        retry: n.retry
                    }
                }
                ), []),
                i && Array.isArray(a.modules) && a.modules.forEach((function(e) {
                    i(e)
                }
                )),
                d.default.useMemo((function() {
                    return r.loading || r.error ? d.default.createElement(a.loading, {
                        isLoading: r.loading,
                        pastDelay: r.pastDelay,
                        timedOut: r.timedOut,
                        error: r.error,
                        retry: n.retry
                    }) : r.loaded ? a.render(r.loaded, e) : null
                }
                ), [e, r])
            };
            return r.preload = function() {
                return o()
            }
            ,
            r.displayName = "LoadableComponent",
            d.default.forwardRef(r)
        }
        var k = function() {
            function e(t, a) {
                o(this, e),
                this._loadFn = t,
                this._opts = a,
                this._callbacks = new Set,
                this._delay = null,
                this._timeout = null,
                this.retry()
            }
            return i(e, [{
                key: "promise",
                value: function() {
                    return this._res.promise
                }
            }, {
                key: "retry",
                value: function() {
                    var e = this;
                    this._clearTimeouts(),
                    this._res = this._loadFn(this._opts.loader),
                    this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    var t = this._res
                      , a = this._opts;
                    t.loading && ("number" === typeof a.delay && (0 === a.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                        e._update({
                            pastDelay: !0
                        })
                    }
                    ), a.delay)),
                    "number" === typeof a.timeout && (this._timeout = setTimeout((function() {
                        e._update({
                            timedOut: !0
                        })
                    }
                    ), a.timeout))),
                    this._res.promise.then((function() {
                        e._update({}),
                        e._clearTimeouts()
                    }
                    )).catch((function(t) {
                        e._update({}),
                        e._clearTimeouts()
                    }
                    )),
                    this._update({})
                }
            }, {
                key: "_update",
                value: function(e) {
                    this._state = s(s({}, this._state), {}, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, e),
                    this._callbacks.forEach((function(e) {
                        return e()
                    }
                    ))
                }
            }, {
                key: "_clearTimeouts",
                value: function() {
                    clearTimeout(this._delay),
                    clearTimeout(this._timeout)
                }
            }, {
                key: "getCurrentValue",
                value: function() {
                    return this._state
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var t = this;
                    return this._callbacks.add(e),
                    function() {
                        t._callbacks.delete(e)
                    }
                }
            }]),
            e
        }();
        function w(e) {
            return y(_, e)
        }
        function x(e, t) {
            for (var a = []; e.length; ) {
                var n = e.pop();
                a.push(n(t))
            }
            return Promise.all(a).then((function() {
                if (e.length)
                    return x(e, t)
            }
            ))
        }
        w.Map = function(e) {
            if ("function" !== typeof e.render)
                throw new Error("LoadableMap requires a `render(loaded, props)` function");
            return y(b, e)
        }
        ,
        w.preloadAll = function() {
            return new Promise((function(e, t) {
                x(f).then(e, t)
            }
            ))
        }
        ,
        w.preloadReady = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return new Promise((function(t) {
                var a = function() {
                    return g = !0,
                    t()
                };
                x(h, e).then(a, a)
            }
            ))
        }
        ,
        window.__NEXT_PRELOADREADY = w.preloadReady;
        var O = w;
        t.default = O
    },
    "48fX": function(e, t, a) {
        var n = a("qhzo");
        e.exports = function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && n(e, t)
        }
    },
    "5fIB": function(e, t, a) {
        var n = a("7eYB");
        e.exports = function(e) {
            if (Array.isArray(e))
                return n(e)
        }
    },
    "6wPr": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ODXe")
          , o = a("q1tI")
          , i = a.n(o)
          , r = a("8Kt/")
          , s = a.n(r)
          , l = a("MX0m")
          , u = a.n(l)
          , c = a("BUZs")
          , d = a("YWob")
          , p = a("+mK9")
          , m = a("68bG")
          , f = a("J5eH")
          , h = a("RkEw")
          , g = a("dezz")
          , _ = [".top-left-container.jsx-183036748{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0;}", ".settings-menu-container.jsx-183036748{margin-left:16px;}", ".wallet-menu-container.jsx-183036748{margin-left:16px;}", ".pocket-container.jsx-183036748{position:absolute;top:0;right:300px;}", ".minimap-container.jsx-183036748{width:300px;height:300px;border:4px solid var(--col-pink-border);border-left:0;border-bottom:0;}", ".top-right-container.jsx-183036748{position:absolute;top:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:0;}", ".users-health-container.jsx-183036748{margin-bottom:12px;}", ".performance.jsx-183036748{position:absolute;padding:20px;bottom:280px;color:white;background:rgba(0,0,0,0.4);border-radius:0 10px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:".concat(g.a, ";}"), ".bottom-right-container.jsx-183036748{width:60px;position:absolute;bottom:32px;right:54px;}", ".bottom-left-container.jsx-183036748{width:60px;position:absolute;bottom:0;left:0;}", ".action-button-container.jsx-183036748{position:absolute;bottom:12px;right:140px;display:grid;grid-template-columns:repeat(2,1fr);gap:18px;}", ".shootingOnButton.jsx-183036748{display:block;width:60px;height:60px;background:url(images/hud/shoot_on.png);margin-left:10px;border:0px;}", ".shootingOffButton.jsx-183036748{display:block;width:60px;height:60px;background:url(images/hud/shoot_off.png);margin-left:10px;border:0px;}"];
        _.__hash = "183036748";
        var b, v, y = _, k = a("u+iS"), w = a("E1/w"), x = a("0ye6"), O = a("k1Yx"), j = a("YN+D"), S = a("woIc"), E = i.a.createElement, P = function() {
            var e = Object(S.a)().click
              , t = Object(c.b)()
              , a = Object(n.a)(t, 1)[0]
              , r = a.alchemica
              , s = a.selectedPlayer
              , l = a.gotchiUrl
              , p = a.playersHealth
              , g = a.isAavegotchiLent
              , _ = a.escrow
              , v = Object(d.b)()
              , P = Object(n.a)(v, 2)
              , A = P[0]
              , C = A.host
              , D = A.playersOnline
              , M = A.scene
              , H = A.performance
              , I = A.roundTime
              , N = A.toggleDebugConsole
              , T = A.toggleMinimap
              , R = P[1]
              , F = Object(k.b)()
              , U = Object(n.a)(F, 1)[0]
              , W = U.allowMusic
              , L = U.allowSound
              , K = Object(O.b)()
              , B = Object(n.a)(K, 1)[0].currentNetwork
              , G = Object(o.useState)(0)
              , q = G[0]
              , z = G[1]
              , X = Object(o.useState)("00")
              , V = (X[0],
            X[1])
              , Y = Object(o.useState)("00")
              , Q = (Y[0],
            Y[1])
              , Z = Object(o.useState)("00")
              , J = (Z[0],
            Z[1])
              , $ = Object(o.useState)(!1)
              , ee = $[0]
              , te = $[1]
              , ae = Object(o.useState)(!1)
              , ne = ae[0]
              , oe = ae[1]
              , ie = Object(o.useState)(!1)
              , re = ie[0]
              , se = ie[1];
            Object(o.useEffect)((function() {
                R({
                    type: "UPDATE_ROUND_TIME",
                    roundTime: 0
                })
            }
            ), []),
            Object(o.useEffect)((function() {
                z(I),
                b && clearInterval(b),
                b = setInterval((function() {
                    z((function(e) {
                        return e - 1
                    }
                    ))
                }
                ), 1e3)
            }
            ), [I]),
            Object(o.useEffect)((function() {
                var e = Math.floor(q / 3600)
                  , t = Math.floor((q - 60 * e) / 60)
                  , a = q - 60 * t;
                J(e.toString().padStart(2, "0")),
                V(t.toString().padStart(2, "0")),
                Q(a.toString().padStart(2, "0")),
                q <= 0 && clearInterval(b)
            }
            ), [q]);
            return E(i.a.Fragment, null, E(h.k, null), E(h.b, {
                open: re,
                onClose: function() {
                    return se(!1)
                }
            }), E(h.e, null), E(h.i, {
                open: ne,
                onClose: function() {
                    return oe(!1)
                },
                userDetails: {
                    address: (null === s || void 0 === s ? void 0 : s.owner) || "",
                    network: B
                }
            }), E(h.f, {
                open: ee,
                onClose: function() {
                    return te(!1)
                },
                onQuit: function() {
                    window.history.back(),
                    R({
                        type: "UPDATE_CONNECTED",
                        connected: !1
                    })
                }
            }), N && E("div", {
                className: "jsx-".concat(y.__hash) + " top-left-container"
            }, E("div", {
                className: "jsx-".concat(y.__hash) + " settings-menu-container"
            }, E(h.g, {
                musicOn: W,
                soundOn: L,
                onExit: function() {
                    e(),
                    te(!0)
                },
                onToggleMusic: function() {
                    m.a.toggleMusic(),
                    e()
                },
                onToggleSound: function() {
                    m.a.toggleSound(),
                    e()
                }
            })), E("div", {
                className: "jsx-".concat(y.__hash) + " wallet-menu-container"
            }, E(h.j, {
                onClick: function() {
                    return oe(!0)
                },
                address: (null === s || void 0 === s ? void 0 : s.owner) || "",
                network: B
            }))), s && g && _ && N && E("div", {
                className: "jsx-".concat(y.__hash) + " pocket-container"
            }, E(h.c, null)), N && E("div", {
                className: "jsx-".concat(y.__hash) + " top-right-container"
            }, s && l && E("div", {
                className: "jsx-".concat(y.__hash) + " users-health-container"
            }, E(h.h, {
                name: s.name,
                health: {
                    current: null !== p && void 0 !== p ? p : 100,
                    max: 100
                },
                img: l.url,
                backgroundColor: M.backgroundColor
            })), N && E("div", {
                className: "jsx-".concat(y.__hash) + " pending-alchemica-container"
            }, E(h.a, {
                alchemica: {
                    fud: (null === r || void 0 === r ? void 0 : r.fud) || 0,
                    fomo: (null === r || void 0 === r ? void 0 : r.fomo) || 0,
                    alpha: (null === r || void 0 === r ? void 0 : r.alpha) || 0,
                    kek: (null === r || void 0 === r ? void 0 : r.kek) || 0
                },
                maxCapacity: f.ALCHEMICA_MAX_CARRY_QUANTITY,
                total: (null === r || void 0 === r ? void 0 : r.total) || 0
            }))), N && E("p", {
                className: "jsx-".concat(y.__hash) + " performance"
            }, "Aavegotchi Bot V4.x SHELBY FAMILY", C && E("span", {
                className: "jsx-".concat(y.__hash)
            }, "Host: ", C, " "), D && E("span", {
                className: "jsx-".concat(y.__hash)
            }, " Online Players: ", D, " "), Object.keys(H || {}).map((function(e, t) {
                return E("span", {
                    key: t,
                    style: {
                        marginRight: 10,
                        lineHeight: 1
                    }
                }, e.charAt(0).toUpperCase() + e.slice(1), ": ", H[e], "ms")
            }
            ))), N && E("div", {
                className: "jsx-".concat(y.__hash) + " action-button-container"
            }, E(w.a, {
                img: x.e,
                onClick: function() {
                    return se(!0)
                }
            }), E(j.a, null)), N && E("div", {
                className: "jsx-".concat(y.__hash) + " bottom-right-container"
            }, E(h.l, null)), N && E("div", {
                className: "jsx-".concat(y.__hash) + " bottom-left-container"
            }, T && E("div", {
                className: "jsx-".concat(y.__hash) + " minimap-container"
            })), E(u.a, {
                id: y.__hash
            }, y))
        }, A = a("o0o1"), C = a.n(A), D = a("HaE+"), M = a("a6RD"), H = a.n(M), I = a("q6t7"), N = i.a.createElement, T = H()(Object(D.a)(C.a.mark((function e() {
            return C.a.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        a.e(25).then(a.bind(null, "lNlg")).then((function(e) {
                            return e.IonPhaser
                        }
                        ));
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        ))), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return ["lNlg"]
                },
                modules: ["@ion-phaser/react"]
            }
        }), R = function(e) {
            var t = e.gameScene
              , r = Object(O.b)()
              , s = Object(n.a)(r, 2)
              , l = s[0].currentAccount
              , u = (s[1],
            Object(d.b)())
              , c = Object(n.a)(u, 2)
              , p = (c[0].performance,
            c[1])
              , m = Object(o.useState)(void 0)
              , f = m[0]
              , h = m[1]
              , g = Object(o.useState)(void 0)
              , _ = g[0]
              , b = g[1];
            return Object(o.useEffect)((function() {
                var e = a("1O+K");
                h(e)
            }
            ), []),
            Object(o.useEffect)((function() {
                if (I.a.init(p),
                l && t && !_) {
                    var e = {
                        initialize: !0,
                        title: "Realm",
                        game: {
                            type: f ? f.AUTO : void 0,
                            pixelArt: !0,
                            roundPixels: !0,
                            fps: {
                                forceSetTimeOut: !0,
                                target: 30
                            },
                            scale: {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            parent: "game",
                            scene: {
                                preload: t.preload,
                                create: t.create,
                                init: t.init,
                                update: t.update,
                                physics: {
                                    default: !1
                                }
                            }
                        }
                    };
                    b(e)
                }
            }
            ), [t]),
            _ ? N(i.a.Fragment, null, N(T, {
                game: _.game,
                initialize: !0
            })) : N("div", null, "Loading assets...")
        }, F = a("HETB"), U = a("eXga"), W = a("XacQ"), L = a("uJKH"), K = a("2DPU"), B = a("8IY3"), G = a("ZueF"), q = {
            frameWidth: 128,
            frameHeight: 196
        }, z = {
            frameWidth: 256,
            frameHeight: 256
        }, X = {
            frameWidth: 320,
            frameHeight: 384
        }, V = {
            frameWidth: 768,
            frameHeight: 768
        }, Y = {
            initScene: function(e) {
                v = e
            },
            loadSpritesheet: function() {
                v.load.spritesheet("deposit_crystal", "animations/deposit_crystal.png", {
                    frameWidth: 128,
                    frameHeight: 128
                }),
                v.load.spritesheet("deposit_vortex", "animations/deposit_vortex.png", {
                    frameWidth: 384,
                    frameHeight: 320
                }),
                v.load.spritesheet("poof", "animations/poof.png", {
                    frameWidth: 64,
                    frameHeight: 64
                }),
                v.load.spritesheet("shoot_heart", "animations/shoot_heart.png", {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                v.load.spritesheet("death", "animations/gotchi_death.png", {
                    frameWidth: 64,
                    frameHeight: 64
                }),
                v.load.spritesheet("intro", "animations/intro.png", {
                    frameWidth: 736,
                    frameHeight: 160
                }),
                v.load.spritesheet("outro", "animations/outtro.png", {
                    frameWidth: 640,
                    frameHeight: 213
                }),
                v.load.spritesheet("chat", "animations/chat.png", {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                v.load.spritesheet("alchemica_x3", "https://hassegawa91.github.io/teste/teste.png", {
                    frameWidth: 31,
                    frameHeight: 39
                }),
                v.load.spritesheet("pad", "animations/pad.png", {
                    frameWidth: 64,
                    frameHeight: 128
                }),
                v.load.spritesheet("stars", "images/parallax/sheet_stars.png", {
                    frameWidth: 256,
                    frameHeight: 256
                }),
                v.load.spritesheet("pickup", "animations/pickup.png", {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                v.load.spritesheet("shoot_muzzle", "animations/shoot_muzzle1.png", {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                v.load.spritesheet("impact_heart", "animations/impact_heart.png", {
                    frameWidth: 128,
                    frameHeight: 128
                }),
                v.load.spritesheet("alchemica_deposit", "animations/alchemica_deposited.png", {
                    frameWidth: 64,
                    frameHeight: 64
                }),
                v.load.spritesheet("billow", "animations/billow.png", {
                    frameWidth: 128,
                    frameHeight: 224
                }),
                v.load.spritesheet("flame", "animations/flame.png", {
                    frameWidth: 16,
                    frameHeight: 32
                })
            },
            loadInstallation: function() {
                v.load.spritesheet("aaltar", "animations/installations/aaltar.png", z),
                v.load.spritesheet("destroyed1", "animations/installations/destroyed1.png", q),
                v.load.spritesheet("destroyed2", "animations/installations/destroyed2.png", z),
                v.load.spritesheet("destroyed5", "animations/installations/destroyed5.png", X),
                v.load.spritesheet("harv_ALPHA", "animations/installations/harv_ALPHA.png", z),
                v.load.spritesheet("harv_FOMO", "animations/installations/harv_FOMO.png", z),
                v.load.spritesheet("harv_FUD", "animations/installations/harv_FUD.png", z),
                v.load.spritesheet("harv_KEK", "animations/installations/harv_KEK.png", z),
                v.load.spritesheet("nft_large", "animations/installations/nft_large.png", z),
                v.load.spritesheet("nft_smol", "animations/installations/nft_smol.png", z),
                v.load.spritesheet("res_ALPHA", "animations/installations/res_ALPHA.png", z),
                v.load.spritesheet("res_FOMO", "animations/installations/res_FOMO.png", z),
                v.load.spritesheet("res_FUD", "animations/installations/res_FUD.png", z),
                v.load.spritesheet("res_KEK", "animations/installations/res_KEK.png", z),
                v.load.spritesheet("wall", "animations/installations/waall.png", q),
                v.load.spritesheet("lodge", "animations/installations/lodge.png", X),
                v.load.spritesheet("land_wip", "animations/installations/land_wip.png", V)
            },
            loadImage: function() {
                v.load.image("minimap", "https://gotchi.akamaized.net/png/mm_cr1.png"),
                v.load.image("minimap-gotchi", "https://gotchi.akamaized.net/png/icon_player.png"),
                v.load.image("H-owned", "maps/images/parcels/humble_owned.png"),
                v.load.image("H-unowned", "maps/images/parcels/humble_unowned.png"),
                v.load.image("P-owned", "maps/images/parcels/paartner_owned.png"),
                v.load.image("P-unowned", "maps/images/parcels/paartner_unowned.png"),
                v.load.image("R-owned", "maps/images/parcels/reasonable_owned.png"),
                v.load.image("R-unowned", "maps/images/parcels/reasonable_unowned.png"),
                v.load.image("U-owned", "maps/images/parcels/spacious_u_owned.png"),
                v.load.image("U-unowned", "maps/images/parcels/spacious_u_unowned.png"),
                v.load.image("V-owned", "maps/images/parcels/spacious_v_owned.png"),
                v.load.image("V-unowned", "maps/images/parcels/spacious_v_unowned.png"),
                v.load.image("guardian", "maps/images/parcels/guardian.png"),
                v.load.image("e_interact", "images/e_interact_icon.png"),
                v.load.image("vortex-glow", "images/vortex_glow.png"),
                v.load.image("large_starfield1", "images/parallax/starfield_hires_sized_256.png")
            },
            loadAudio: function() {
                v.load.audio("alchemica_deposited", "sounds/alpha/alchemica_deposited.mp3"),
                v.load.audio("alchemica_alpha", "sounds/alpha/alchemica-ALPHA.mp3"),
                v.load.audio("alchemica_fomo", "sounds/alpha/alchemica-FOMO.mp3"),
                v.load.audio("alchemica_fud", "sounds/alpha/alchemica-FUD.mp3"),
                v.load.audio("alchemica_kek", "sounds/alpha/alchemica-KEK.mp3"),
                v.load.audio("bump", "sounds/alpha/bump.mp3"),
                v.load.audio("cant_pickup", "sounds/alpha/cant_pickup.mp3"),
                v.load.audio("gotchi_spawn", "sounds/alpha/gotchi_spawn.mp3"),
                v.load.audio("gotchi_on_road", "sounds/alpha/on_road.mp3"),
                v.load.audio("pickup_alpha", "sounds/alpha/pickup-ALPHA.mp3"),
                v.load.audio("pickup_fomo", "sounds/alpha/pickup-FOMO.mp3"),
                v.load.audio("pickup_fud", "sounds/alpha/pickup-FUD.mp3"),
                v.load.audio("pickup_kek", "sounds/alpha/pickup-KEK.mp3"),
                v.load.audio("death", "sounds/alpha/death.mp3"),
                v.load.audio("impact_heart", "sounds/alpha/impact_heart.mp3"),
                v.load.audio("shoot_heart", "sounds/alpha/shoot_heart.mp3"),
                v.load.audio("round_begin", "sounds/alpha/round_begin2.mp3"),
                v.load.audio("round_ending", "sounds/alpha/round_ending2.mp3"),
                v.load.audio("noshoot", "sounds/alpha/noshoot.mp3"),
                v.load.audio("theme_citaadel", "https://verse-static.aavegotchi.com/sounds/alpha/theme_citaadel_beatscribe.mp3"),
                v.load.audio("send", "sounds/send.mp3"),
                v.load.audio("check", "sounds/click.mp3"),
                v.load.audio("sending", "sounds/sending.mp3"),
                v.load.audio("statue", "sounds/statue.mp3"),
                v.load.audio("pickup_alpha_small", "sounds/alpha/pickup_ALPHA_1.mp3"),
                v.load.audio("pickup_alpha_medium", "sounds/alpha/pickup_ALPHA_2.mp3"),
                v.load.audio("pickup_alpha_large", "sounds/alpha/pickup_ALPHA_3.mp3"),
                v.load.audio("pickup_fomo_small", "sounds/alpha/pickup_FOMO_1.mp3"),
                v.load.audio("pickup_fomo_medium", "sounds/alpha/pickup_FOMO_2.mp3"),
                v.load.audio("pickup_fomo_large", "sounds/alpha/pickup_FOMO_3.mp3"),
                v.load.audio("pickup_fud_small", "sounds/alpha/pickup_FUD_1.mp3"),
                v.load.audio("pickup_fud_medium", "sounds/alpha/pickup_FUD_2.mp3"),
                v.load.audio("pickup_fud_large", "sounds/alpha/pickup_FUD_3.mp3"),
                v.load.audio("pickup_kek_small", "sounds/alpha/pickup_KEK_1.mp3"),
                v.load.audio("pickup_kek_medium", "sounds/alpha/pickup_KEK_2.mp3"),
                v.load.audio("pickup_kek_large", "sounds/alpha/pickup_KEK_3.mp3")
            },
            loadMap: function() {
                v.load.json("master", "maps/chunks/master.json"),
                v.load.image("tower1", "maps/sprites/tower1.png"),
                v.load.image("tower2", "maps/sprites/tower2.png"),
                v.load.image("tower3", "maps/sprites/tower3.png"),
                v.load.image("tower4", "maps/sprites/tower4.png"),
                v.load.image("lights", "maps/sprites/lights.png"),
                v.load.image("gate_north", "maps/sprites/gate_north.png"),
                v.load.image("alchem", "maps/sprites/alchem.png"),
                v.load.image("roads", "maps/sprites/roads.png"),
                v.load.image("alchem_glow", "maps/sprites/alchem_glow.png"),
                v.load.image("statue_prince", "maps/sprites/statue_prince.png"),
                v.load.image("parcels", "maps/sprites/parcels.png"),
                v.load.image("statues", "maps/sprites/statue_soldat_stone1_angles.png")
            },
            createAudio: function() {
                v.itemSound = v.sound.add("send", {
                    volume: .3
                }),
                v.fireSound = v.sound.add("sending", {
                    volume: .3
                }),
                v.checkSound = v.sound.add("sending", {
                    volume: .3
                }),
                v.statueCollision = v.sound.add("statue", {
                    volume: .3
                }),
                v.alchemica_deposited_sound = v.sound.add("alchemica_deposited", {
                    volume: .3
                }),
                v.alchemica_alpha_sound = v.sound.add("alchemica_alpha", {
                    volume: .16,
                    loop: !0
                }),
                v.alchemica_fomo_sound = v.sound.add("alchemica_fomo", {
                    volume: .16,
                    loop: !0
                }),
                v.alchemica_fud_sound = v.sound.add("alchemica_fud", {
                    volume: .16,
                    loop: !0
                }),
                v.alchemica_kek_sound = v.sound.add("alchemica_kek", {
                    volume: .16,
                    loop: !0
                }),
                v.bump_sound = v.sound.add("bump", {
                    volume: .4
                }),
                v.cant_pickup_sound = v.sound.add("cant_pickup", {
                    volume: .4
                }),
                v.gotchi_spawn_sound = v.sound.add("gotchi_spawn", {
                    volume: .3
                }),
                v.on_road_sound = v.sound.add("gotchi_on_road", {
                    volume: .4
                }),
                v.on_road_loop = v.sound.add("alchemica_alpha", {
                    volume: .4,
                    loop: !0
                }),
                v.pickup_alpha_sound = v.sound.add("pickup_alpha", {
                    volume: .4
                }),
                v.pickup_fomo_sound = v.sound.add("pickup_fomo", {
                    volume: .4
                }),
                v.pickup_fud_sound = v.sound.add("pickup_fud", {
                    volume: .4
                }),
                v.pickup_kek_sound = v.sound.add("pickup_kek", {
                    volume: .4
                }),
                v.death_sound = v.sound.add("death", {
                    volume: .3
                }),
                v.impact_heart_sound = v.sound.add("impact_heart", {
                    volume: .3
                }),
                v.shoot_heart_sound = v.sound.add("shoot_heart", {
                    volume: .3
                }),
                v.round_begin_sound = v.sound.add("round_begin", {
                    volume: .3
                }),
                v.round_ending_sound = v.sound.add("round_ending", {
                    volume: .3
                }),
                v.noshoot_sound = v.sound.add("noshoot", {
                    volume: 1
                }),
                v.citaadel_music = v.sound.add("theme_citaadel", {
                    volume: .4,
                    loop: !0
                }),
                v.pickup_alpha_sound_small = v.sound.add("pickup_alpha_small", {
                    volume: .4
                }),
                v.pickup_alpha_sound_medium = v.sound.add("pickup_alpha_medium", {
                    volume: .4
                }),
                v.pickup_alpha_sound_large = v.sound.add("pickup_alpha_large", {
                    volume: .4
                }),
                v.pickup_fomo_sound_small = v.sound.add("pickup_fomo_small", {
                    volume: .4
                }),
                v.pickup_fomo_sound_medium = v.sound.add("pickup_fomo_medium", {
                    volume: .4
                }),
                v.pickup_fomo_sound_large = v.sound.add("pickup_fomo_large", {
                    volume: .4
                }),
                v.pickup_fud_sound_small = v.sound.add("pickup_fud_small", {
                    volume: .4
                }),
                v.pickup_fud_sound_medium = v.sound.add("pickup_fud_medium", {
                    volume: .4
                }),
                v.pickup_fud_sound_large = v.sound.add("pickup_fud_large", {
                    volume: .4
                }),
                v.pickup_kek_sound_small = v.sound.add("pickup_kek_small", {
                    volume: .4
                }),
                v.pickup_kek_sound_medium = v.sound.add("pickup_kek_medium", {
                    volume: .4
                }),
                v.pickup_kek_sound_large = v.sound.add("pickup_kek_large", {
                    volume: .4
                })
            }
        }, Q = a("3HPB"), Z = a("bD56"), J = a("xNd6"), $ = a("nOHt"), ee = a.n($), te = a("AsQu"), ae = a.n(te), ne = i.a.createElement, oe = function() {
            return ne(i.a.Fragment, null, ne("div", {
                className: "jsx-2134295661 background-loading"
            }, ne("img", {
                src: ae.a,
                width: 200,
                className: "jsx-2134295661"
            })), ne(u.a, {
                id: "2134295661"
            }, [".background-loading.jsx-2134295661{position:absolute;top:0;left:0;right:0;bottom:0;background-color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]))
        }, ie = a("CIjU"), re = i.a.createElement;
        t.default = function() {
            var e = Object(O.b)()
              , t = Object(n.a)(e, 2)
              , a = t[0]
              , r = a.authToken
              , l = a.currentAccount
              , u = a.currentNetwork
              , f = a.globalProvider
              , h = a.secondaryNetwork
              , g = a.secondaryProvider
              , _ = (t[1],
            Object(c.b)())
              , b = Object(n.a)(_, 2)
              , v = b[0]
              , y = v.selectedPlayer
              , w = v.gotchiUrl
              , x = v.backgroundColor
              , j = b[1]
              , S = Object(d.b)()
              , E = Object(n.a)(S, 2)
              , A = E[0]
              , M = (A.gameShooting,
            A.maxZoomOut)
              , H = A.zoom
              , I = A.connected
              , N = E[1]
              , T = Object(k.b)()
              , q = Object(n.a)(T, 2)
              , z = q[0]
              , X = z.allowMusic
              , V = z.allowSound
              , $ = q[1]
              , te = Object(ie.b)()
              , ae = Object(n.a)(te, 2)[1]
              , ne = Object(o.useState)(void 0)
              , se = ne[0]
              , le = ne[1]
              , ue = Object(o.useState)(!1)
              , ce = ue[0]
              , de = ue[1]
              , pe = Object(o.useRef)(null)
              , me = Object(k.b)()
              , fe = Object(n.a)(me, 1)[0]
              , he = fe.allowAnimatedTiles
              , ge = fe.allowGotchiGlow
              , _e = fe.allowInstallationAnimations
              , be = fe.allowPlayerAnimation
              , ve = fe.allowStarField
              , ye = fe.fadeGrid
              , ke = Object(o.useState)(!1)
              , we = ke[0]
              , xe = ke[1];
            return Object(o.useEffect)((function() {
                l && (u || Object(J.b)(u)) ? "undefined" !== typeof window.navigator && (de(!0),
                pe && Object(F.a)(pe)) : ee.a.push("/")
            }
            ), ["object", typeof navigator, u, f, l, y, pe]),
            Object(o.useEffect)((function() {
                l && y && w && le(function(e, t, a, n, o, i, r, s, l, u, c, d, f, h, g) {
                    return {
                        preload: function() {
                            var e = Object(D.a)(C.a.mark((function e() {
                                return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            this.cache.tilemap.events.on("add", (function(e, t) {
                                                G.a.displayChunk(t)
                                            }
                                            )),
                                            Y.loadMap(),
                                            Y.loadAudio(),
                                            Y.loadSpritesheet(),
                                            Y.loadInstallation(),
                                            Y.loadImage(),
                                            this.load.scenePlugin("AnimatedTiles", "AnimatedTiles.js", "animatedTiles", "animatedTiles"),
                                            this.load.spritesheet(r.id, l.sprite, {
                                                frameWidth: 64,
                                                frameHeight: 64
                                            }),
                                            void 0 !== r.leftHand && this.load.svg(r.leftHand.id, l.leftHand, {
                                                frameWidth: 32,
                                                frameHeight: 32
                                            }),
                                            void 0 !== r.rightHand && this.load.svg(r.rightHand.id, l.rightHand, {
                                                frameWidth: 32,
                                                frameHeight: 32
                                            }),
                                            this.load.image("gotchi-shadow", "images/gotchi_shadow.png"),
                                            this.load.on("complete", (function() {
                                                g()
                                            }
                                            ));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this)
                            }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        init: function() {
                            this.playersToLoad = [],
                            this.loadedPlayers = [],
                            this.itemsGroup = this.add.group().setDepth(100),
                            this.padsGroup = this.add.group(),
                            this.installationGroup = this.add.group(),
                            this.uiGroup = this.add.group(),
                            this.hudObjects = {},
                            this.currentItems = [],
                            this.spawnedParcelsByIdMap = new Map,
                            this.lastUpdate = {},
                            this.inputActive = !0,
                            this.projectiles = {},
                            this.gameSettings = f,
                            this.authToken = e,
                            this.currentAccount = t,
                            this.currentNetwork = a,
                            this.globalProvider = n,
                            this.secondaryProvider = o,
                            this.backgroundColor = s,
                            this.secondaryNetwork = i,
                            this.realmDispatch = h.realmDispatch,
                            this.phaserDispatch = h.phaserDispatch,
                            this.settingsDispatch = h.settingsDispatch,
                            this.uiDispatch = h.uiDispatch,
                            this.maxZoomOut = u,
                            this.zoom = c,
                            U.a.init(this),
                            m.a.initScene(this),
                            Y.initScene(this),
                            Q.a.initScene(this),
                            W.a.initScene(this),
                            L.a.initScene(this),
                            K.a.initScene(this),
                            B.a.initScene(this),
                            h.phaserDispatch({
                                type: "UPDATE_SCENE",
                                scene: this
                            })
                        },
                        create: function() {
                            var e = Object(D.a)(C.a.mark((function e() {
                                return C.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            Y.createAudio(),
                                            Q.a.create(),
                                            W.a.initPlayer(r),
                                            L.a.initAlchemicaHUD(),
                                            this.gameSettings.allowStarField && Object(p.b)(this),
                                            U.a.socketConnect(h.realmDispatch, r);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this)
                            }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        update: function(e, t) {
                            Z.a.handleKeyboardMovement(),
                            this.gameSettings.allowStarField && Object(p.m)(this, r, t)
                        }
                    }
                }(r, l, u, f, g, h, y, x, w, M, H, 0, {
                    allowAnimatedTiles: he,
                    allowGotchiGlow: ge,
                    allowInstallationAnimations: _e,
                    allowPlayerAnimation: be,
                    allowStarField: ve,
                    fadeGrid: ye,
                    allowSound: V,
                    allowMusic: X
                }, {
                    phaserDispatch: N,
                    realmDispatch: j,
                    settingsDispatch: $,
                    uiDispatch: ae
                }, (function() {
                    return xe(!0)
                }
                )))
            }
            ), [l, y, w, X]),
            ce && se ? re(i.a.Fragment, null, re(s.a, null, re("title", null, "Play | Gotchiverse"), re("meta", {
                property: "og:title",
                content: "Play | Gotchiverse",
                key: "title"
            })), re("div", {
                ref: pe
            }), re(R, {
                gameScene: se
            }), we && I && re(P, null), !we && re(oe, null)) : re(oe, null)
        }
    },
    "8Kt/": function(e, t, a) {
        "use strict";
        var n = a("oI91");
        function o(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        t.__esModule = !0,
        t.defaultHead = p,
        t.default = void 0;
        var i, r = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== typeof e && "function" !== typeof e)
                return {
                    default: e
                };
            var t = d();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                }
            a.default = e,
            t && t.set(e, a);
            return a
        }(a("q1tI")), s = (i = a("Xuae")) && i.__esModule ? i : {
            default: i
        }, l = a("lwAK"), u = a("FYa8"), c = a("/0+H");
        function d() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }
            ,
            e
        }
        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [r.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function m(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === r.default.Fragment ? e.concat(r.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var f = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            return e.reduce((function(e, t) {
                var a = r.default.Children.toArray(t.props.children);
                return e.concat(a)
            }
            ), []).reduce(m, []).reverse().concat(p(t.inAmpMode)).filter(function() {
                var e = new Set
                  , t = new Set
                  , a = new Set
                  , n = {};
                return function(o) {
                    var i = !0;
                    if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                        var r = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(r) ? i = !1 : e.add(r)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (var s = 0, l = f.length; s < l; s++) {
                            var u = f[s];
                            if (o.props.hasOwnProperty(u))
                                if ("charSet" === u)
                                    a.has(u) ? i = !1 : a.add(u);
                                else {
                                    var c = o.props[u]
                                      , d = n[u] || new Set;
                                    d.has(c) ? i = !1 : (d.add(c),
                                    n[u] = d)
                                }
                        }
                    }
                    return i
                }
            }()).reverse().map((function(e, t) {
                var a = e.key || t;
                if ("link" === e.type && e.props.href && ["https://fonts.googleapis.com/css"].some((function(t) {
                    return e.props.href.startsWith(t)
                }
                ))) {
                    var i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(a), !0).forEach((function(t) {
                                n(e, t, a[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                            ))
                        }
                        return e
                    }({}, e.props || {});
                    return i["data-href"] = i.href,
                    i.href = void 0,
                    r.default.cloneElement(e, i)
                }
                return r.default.cloneElement(e, {
                    key: a
                })
            }
            ))
        }
        function g(e) {
            var t = e.children
              , a = (0,
            r.useContext)(l.AmpStateContext)
              , n = (0,
            r.useContext)(u.HeadManagerContext);
            return r.default.createElement(s.default, {
                reduceComponentsToState: h,
                headManager: n,
                inAmpMode: (0,
                c.isInAmpMode)(a)
            }, t)
        }
        g.rewind = function() {}
        ;
        var _ = g;
        t.default = _
    },
    AsQu: function(e, t) {
        e.exports = "/_next/static/images/gotchiverse_loading-44f1c58228b47de769675061c954227d.gif"
    },
    DE6s: function(e, t, a) {
        "use strict";
        var n, o = a("HETB"), i = {
            init: function(e) {
                return function(e) {
                    n = e
                }(e)
            },
            hadleVoiceEvent: function(e) {
                var t = e.action
                  , a = e.data;
                switch (t) {
                case "init":
                    r(a)
                }
            },
            voiceConnect: function(e) {
                console.log("roomState", e),
                Object(o.b)(e.room)
            },
            voiceDisconnect: function(e) {
                r(e),
                Object(o.c)()
            },
            setRoomState: function(e) {
                n({
                    type: "updateVoiceRoomSockets",
                    voiceRoomSockets: e
                })
            },
            setVoiceRoomConnections: function(e, t) {
                n({
                    type: "updateVoiceRoomConnections",
                    voiceRoomConnections: {
                        connected: t,
                        name: e
                    }
                })
            }
        };
        function r(e) {
            n({
                type: "updateVoiceRoomState",
                voiceRoomState: e
            })
        }
        t.a = i
    },
    FYa8: function(e, t, a) {
        "use strict";
        var n;
        t.__esModule = !0,
        t.HeadManagerContext = void 0;
        var o = ((n = a("q1tI")) && n.__esModule ? n : {
            default: n
        }).default.createContext({});
        t.HeadManagerContext = o
    },
    HETB: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", (function() {
                return l
            }
            )),
            a.d(t, "b", (function() {
                return u
            }
            )),
            a.d(t, "c", (function() {
                return c
            }
            ));
            a("o0o1"),
            a("HaE+"),
            a("DE6s");
            var n, o, i, r, s = {};
            e.env.TURN_SERVER,
            e.env.TURN_USERNAME,
            e.env.TURN_PASSWORD;
            function l(e) {
                o = e
            }
            function u(e) {
                if ("" === e)
                    alert("Please type a room ID");
                else {
                    var t = {
                        action: "join",
                        roomId: i = e
                    };
                    r.emit("voice_room", t)
                }
            }
            function c() {
                var e = {
                    action: "leave",
                    roomId: i
                };
                r.emit("voice_room", e),
                r.emit("room_state", {
                    room: i,
                    toAll: !0
                }),
                d()
            }
            function d() {
                var e;
                if (n && n.getTracks().forEach((function(e) {
                    e.stop()
                }
                )),
                null === (e = o) || void 0 === e ? void 0 : e.current)
                    for (; o.current.firstChild; )
                        o.current.removeChild(o.current.firstChild);
                for (var t in s)
                    s[t].close(),
                    delete s[t];
                console.log("rtcPeerConnection after disconnect", s)
            }
        }
        ).call(this, a("8oxB"))
    },
    T0f4: function(e, t) {
        function a(t) {
            return e.exports = a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            a(t)
        }
        e.exports = a
    },
    Xuae: function(e, t, a) {
        "use strict";
        var n = a("mPvQ")
          , o = a("/GRZ")
          , i = a("i2R6")
          , r = a("qXWd")
          , s = a("48fX")
          , l = a("tCBg")
          , u = a("T0f4");
        function c(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, n = u(e);
                if (t) {
                    var o = u(this).constructor;
                    a = Reflect.construct(n, arguments, o)
                } else
                    a = n.apply(this, arguments);
                return l(this, a)
            }
        }
        t.__esModule = !0,
        t.default = void 0;
        var d = a("q1tI")
          , p = !1
          , m = function(e) {
            s(a, e);
            var t = c(a);
            function a(e) {
                var i;
                return o(this, a),
                (i = t.call(this, e))._hasHeadManager = void 0,
                i.emitChange = function() {
                    i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances), i.props))
                }
                ,
                i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances,
                p && i._hasHeadManager && (i.props.headManager.mountedInstances.add(r(i)),
                i.emitChange()),
                i
            }
            return i(a, [{
                key: "componentDidMount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.emitChange()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            a
        }(d.Component);
        t.default = m
    },
    "YN+D": function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return C
        }
        ));
        var n = a("ODXe")
          , o = a("MX0m")
          , i = a.n(o)
          , r = a("q1tI")
          , s = a.n(r)
          , l = [".button-container.jsx-2259095541{position:relative;}", ".notification.jsx-2259095541{position:absolute;background-color:var(--col-info-400);color:white;min-width:30px;height:30px;z-index:1;border-radius:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:24px;-webkit-transform:translate(-25%,-25%);-ms-transform:translate(-25%,-25%);transform:translate(-25%,-25%);box-shadow:0 0 4px 1px var(--col-info-400);}"];
        l.__hash = "2259095541";
        var u = l
          , c = a("E1/w")
          , d = a("JgKV")
          , p = a("o0o1")
          , m = a.n(p)
          , f = a("HaE+")
          , h = a("k1Yx")
          , g = a("FFw8")
          , _ = a("LvDl")
          , b = a.n(_)
          , v = [".error-state.jsx-14941765,.loading-state.jsx-14941765{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".error-state.jsx-14941765 p.jsx-14941765,.loading-state.jsx-14941765 p.jsx-14941765{font-size:18px;}", ".loading-state.jsx-14941765 p.jsx-14941765{color:var(--col-info-400);margin:0 8px 0 0;}", ".error-state.jsx-14941765 p.jsx-14941765{color:var(--col-error-400);margin:0 0 0 8px;}", ".inventory-content.jsx-14941765{position:relative;width:900px;max-width:90vw;height:500px;padding:56px 0 20px;}", ".inventory-content.jsx-14941765:after{content:'';position:absolute;bottom:20px;left:24px;right:24px;height:42px;background:linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0));}", ".sort-container.jsx-14941765{position:absolute;right:2px;z-index:1;}", ".scrollable.jsx-14941765{height:424px;}", ".inventory-grid.jsx-14941765{padding-left:24px;display:grid;grid-template-columns:repeat(5,1fr);gap:18px;z-index:-1;padding-bottom:12px;}"];
        v.__hash = "14941765";
        var y = v
          , k = a("CIjU")
          , w = a("vBO9")
          , x = a("woIc")
          , O = a("gHZi")
          , j = a("/B6Q")
          , S = s.a.createElement
          , E = function(e) {
            var t = e.open
              , a = e.onClose
              , o = Object(h.b)()
              , l = Object(n.a)(o, 1)[0]
              , u = l.currentAccount
              , p = l.currentNetwork
              , _ = l.globalProvider
              , v = Object(r.useState)("name")
              , E = v[0]
              , P = v[1]
              , A = Object(r.useState)([])
              , C = A[0]
              , D = A[1]
              , M = Object(r.useState)(!0)
              , H = M[0]
              , I = M[1]
              , N = Object(k.b)()
              , T = Object(n.a)(N, 2)
              , R = T[0].transactionStatusUpdate
              , F = T[1]
              , U = Object(d.b)()
              , W = Object(n.a)(U, 2)[1]
              , L = Object(x.a)()
              , K = L.success
              , B = L.oops;
            Object(r.useEffect)((function() {
                t && z()
            }
            ), [t]),
            Object(r.useEffect)((function() {
                R && (G(R),
                Object(O.c)(void 0, F))
            }
            ), [R]);
            var G = function(e) {
                var t;
                (null === e || void 0 === e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.status) && e.totalClaimed && ("ERRORED" !== e.data.status ? K() : B(),
                Object(w.b)(W, {
                    type: "ERRORED" === e.data.status ? "error" : "COMPLETED" === e.data.status ? "success" : "info",
                    title: e.data.status.toLowerCase()[0].toUpperCase() + e.data.status.slice(1).toLowerCase(),
                    message: "Withdraw ".concat(e.totalClaimed, " Alchemica")
                }))
            }
              , q = function() {
                var e = Object(f.a)(m.a.mark((function e(t) {
                    var a, n, o, i, r;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = Object(j.b)(t),
                                n = "BUILDING" === t ? "installationsBalancesWithTypes" : "tilesBalancesWithTypes",
                                e.next = 4,
                                Object(g.d)(p, _, a, !1);
                            case 4:
                                if (o = e.sent,
                                i = [],
                                !o) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9,
                                o[n](u);
                            case 9:
                                r = e.sent,
                                console.log("typeResult", t, r),
                                i = b.a.map(r, (function(e) {
                                    var a = e.installationType
                                      , n = e.tileType
                                      , o = e.balance
                                      , i = e.itemId
                                      , r = {
                                        id: Number(i),
                                        name: (null === a || void 0 === a ? void 0 : a.name) || n.name,
                                        quantity: Number(o),
                                        type: t
                                    };
                                    return "BUILDING" === t && b.a.assign(r, {
                                        level: a.level
                                    }),
                                    r
                                }
                                ));
                            case 12:
                                return e.abrupt("return", i);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , z = function() {
                var e = Object(f.a)(m.a.mark((function e() {
                    var t, a, n;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return I(!0),
                                e.next = 3,
                                q("BUILDING");
                            case 3:
                                return t = e.sent,
                                e.next = 6,
                                q("TILE");
                            case 6:
                                a = e.sent,
                                (n = b.a.concat(t, a)) && D(n),
                                I(!1);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return S(s.a.Fragment, null, S(c.n, {
                title: "Inventory",
                open: t,
                onClose: a
            }, S("div", {
                className: "jsx-".concat(y.__hash) + " sort-container"
            }, S(c.q, {
                options: [{
                    value: "name",
                    name: "by name"
                }],
                value: E,
                onSelect: P
            })), S("div", {
                className: "jsx-".concat(y.__hash) + " inventory-content"
            }, S("div", {
                className: "jsx-".concat(y.__hash) + " scrollable"
            }, H && S("div", {
                className: "jsx-".concat(y.__hash) + " loading-state"
            }, S("p", {
                className: "jsx-".concat(y.__hash)
            }, "Fetching Balances..."), S(c.l, {
                size: 2
            })), !H && C && S("div", {
                className: "jsx-".concat(y.__hash) + " inventory-grid"
            }, b.a.map(C, (function(e, t) {
                return S(c.j, {
                    key: t,
                    quantity: e.quantity,
                    installation: {
                        name: e.name,
                        level: e.level,
                        rarity: "common",
                        id: e.id,
                        type: e.type
                    }
                })
            }
            )))))), S(i.a, {
                id: y.__hash
            }, y))
        }
          , P = a("b1nF")
          , A = s.a.createElement
          , C = function() {
            var e = Object(r.useState)(!1)
              , t = e[0]
              , a = e[1]
              , o = Object(d.b)()
              , l = Object(n.a)(o, 2)
              , p = l[0].inventoryUpdates
              , m = l[1];
            return Object(r.useEffect)((function() {
                t && m({
                    type: "REMOVE_INVENTORY_NOTIFICATION"
                })
            }
            ), [t]),
            A(s.a.Fragment, null, A(E, {
                open: t,
                onClose: function() {
                    return a(!1)
                }
            }), A("div", {
                className: "jsx-".concat(u.__hash) + " button-container"
            }, p.length > 0 && A("div", {
                className: "jsx-".concat(u.__hash) + " notification"
            }, p.length), A(c.a, {
                img: P.n,
                onClick: function() {
                    return a(!0)
                }
            })), A(i.a, {
                id: u.__hash
            }, u))
        }
    },
    a6RD: function(e, t, a) {
        "use strict";
        var n = a("oI91");
        function o(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(a), !0).forEach((function(t) {
                    n(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        t.__esModule = !0,
        t.noSSR = c,
        t.default = function(e, t) {
            var a = s.default
              , n = {
                loading: function(e) {
                    e.error,
                    e.isLoading;
                    return e.pastDelay,
                    null
                }
            };
            e instanceof Promise ? n.loader = function() {
                return e
            }
            : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = i(i({}, n), e));
            if (n = i(i({}, n), t),
            "object" === typeof e && !(e instanceof Promise) && (e.render && (n.render = function(t, a) {
                return e.render(a, t)
            }
            ),
            e.modules)) {
                a = s.default.Map;
                var o = {}
                  , r = e.modules();
                Object.keys(r).forEach((function(e) {
                    var t = r[e];
                    "function" !== typeof t.then ? o[e] = t : o[e] = function() {
                        return t.then((function(e) {
                            return e.default || e
                        }
                        ))
                    }
                }
                )),
                n.loader = o
            }
            n.loadableGenerated && delete (n = i(i({}, n), n.loadableGenerated)).loadableGenerated;
            if ("boolean" === typeof n.ssr) {
                if (!n.ssr)
                    return delete n.ssr,
                    c(a, n);
                delete n.ssr
            }
            return a(n)
        }
        ;
        var r = l(a("q1tI"))
          , s = l(a("2qu3"));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = !1;
        function c(e, t) {
            if (delete t.webpack,
            delete t.modules,
            !u)
                return e(t);
            var a = t.loading;
            return function() {
                return r.default.createElement(a, {
                    error: null,
                    isLoading: !0,
                    pastDelay: !1,
                    timedOut: !1
                })
            }
        }
    },
    avgr: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/play", function() {
            return a("6wPr")
        }
        ])
    },
    dezz: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return n
        }
        )),
        a.d(t, "a", (function() {
            return o
        }
        ));
        var n = "20px"
          , o = "24px"
    },
    jwwS: function(e, t, a) {
        "use strict";
        var n;
        t.__esModule = !0,
        t.LoadableContext = void 0;
        var o = ((n = a("q1tI")) && n.__esModule ? n : {
            default: n
        }).default.createContext(null);
        t.LoadableContext = o
    },
    kG2m: function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    lwAK: function(e, t, a) {
        "use strict";
        var n;
        t.__esModule = !0,
        t.AmpStateContext = void 0;
        var o = ((n = a("q1tI")) && n.__esModule ? n : {
            default: n
        }).default.createContext({});
        t.AmpStateContext = o
    },
    mPvQ: function(e, t, a) {
        var n = a("5fIB")
          , o = a("rlHP")
          , i = a("KckH")
          , r = a("kG2m");
        e.exports = function(e) {
            return n(e) || o(e) || i(e) || r()
        }
    }
    oI91: function(e, t) {
        e.exports = function(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
    },
    qXWd: function(e, t) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    },
    rlHP: function(e, t) {
        e.exports = function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
    },
    tCBg: function(e, t, a) {
        var n = a("C+bE")
          , o = a("qXWd");
        e.exports = function(e, t) {
            return !t || "object" !== n(t) && "function" !== typeof t ? o(e) : t
        }
    }
}, [["avgr", 1, 2, 3, 6, 0, 4, 5]]]);