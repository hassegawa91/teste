(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[141], {
    88764: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/play", function() {
            return a(65793)
        }
        ])
    },
    82576: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/pointer.bebd3961.png",
            height: 32,
            width: 32,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXEKCgpMTExQUFAODg7y8vIUFBQWFhbo6OjT09NlZWUkJCSHh4cqKiocHBxnZ2cqKio3Nzd6enpvb2/IyMiKioq+vr5ubm6Tk5NKsnAIAAAAFHRSTlMAg/H7CP1QQP7+/IXpdcO0wdzJyAMhz14AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA/SURBVAiZHctJEoAgDADBYQkJuGtA//9SS/ve5ON8Yga0e5UNuHpLJgG6DDf3QnOzus4F3VMcC79QJ76H3govV9UCJOP8RZEAAAAASUVORK5CYII="
        }
    },
    65793: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return Te
            }
        });
        var n = a(85893)
          , o = a(67294)
          , i = a(9008)
          , r = a(34051)
          , s = a.n(r)
          , l = a(5152)
          , d = a(53383)
          , c = a(90730)
          , u = a(20952);
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function m(e, t, a, n, o, i, r) {
            try {
                var s = e[i](r)
                  , l = s.value
            } catch (d) {
                return void a(d)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function h(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return p(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return p(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var g, f = (0,
        l.default)((g = s().mark((function e() {
            return s().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        a.e(28).then(a.bind(a, 2811)).then((function(e) {
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
        )),
        function() {
            var e = this
              , t = arguments;
            return new Promise((function(a, n) {
                var o = g.apply(e, t);
                function i(e) {
                    m(o, a, n, i, r, "next", e)
                }
                function r(e) {
                    m(o, a, n, i, r, "throw", e)
                }
                i(void 0)
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [2811]
                }
            },
            ssr: !1
        }), _ = function(e) {
            var t = e.gameScene
              , i = h((0,
            c.$)(), 2)
              , r = i[0].currentAccount
              , s = (i[1],
            h((0,
            u.D)(), 2))
              , l = (s[0].performance,
            s[1])
              , p = (0,
            o.useState)(void 0)
              , m = p[0]
              , g = p[1]
              , _ = (0,
            o.useState)(void 0)
              , x = _[0]
              , b = _[1];
            return (0,
            o.useEffect)((function() {
                var e = a(82260);
                g(e)
            }
            ), []),
            (0,
            o.useEffect)((function() {
                if (d.Z.init(l),
                r && t && !x) {
                    var e = {
                        initialize: !0,
                        title: "Realm",
                        game: {
                            type: m ? m.AUTO : void 0,
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
            x ? (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)(f, {
                    game: x.game,
                    initialize: !0
                })
            }) : (0,
            n.jsx)("div", {
                children: "Loading assets..."
            })
        };
        var x = a(34155);
        x.env.TURN_SERVER,
        x.env.TURN_USERNAME,
        x.env.TURN_PASSWORD;
        function b(e) {
            e
        }
        var v, y = a(73784), w = a(85628), k = a(97164), j = a(86752), A = a(7001), S = a(73622), E = a(33638), N = a(26593), P = {
            frameWidth: 128,
            frameHeight: 196
        }, D = {
            frameWidth: 256,
            frameHeight: 256
        }, H = {
            frameWidth: 320,
            frameHeight: 384
        }, I = {
            frameWidth: 768,
            frameHeight: 768
        }, T = {
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
                }),
                v.load.spritesheet("gotchi_spawn", "animations/gotchi_spawn2.png", {
                    frameWidth: 64,
                    frameHeight: 128
                })
            },
            loadInstallation: function() {
                v.load.spritesheet("aaltar", "animations/installations/aaltar.png", D),
                v.load.spritesheet("aaltar_LE", "animations/installations/aaltar_LE2.png", {
                    frameWidth: 192,
                    frameHeight: 224
                }),
                v.load.spritesheet("destroyed1", "animations/installations/destroyed1.png", P),
                v.load.spritesheet("destroyed2", "animations/installations/destroyed2.png", D),
                v.load.spritesheet("destroyed5", "animations/installations/destroyed5.png", H),
                v.load.spritesheet("harv_0", "animations/installations/harv_FUD.png", D),
                v.load.spritesheet("harv_1", "animations/installations/harv_FOMO.png", D),
                v.load.spritesheet("harv_2", "animations/installations/harv_ALPHA.png", D),
                v.load.spritesheet("harv_3", "animations/installations/harv_KEK.png", D),
                v.load.spritesheet("nft_large", "animations/installations/nft_large.png", D),
                v.load.spritesheet("nft_smol", "animations/installations/nft_smol.png", D),
                v.load.spritesheet("res_0", "animations/installations/res_FUD.png", D),
                v.load.spritesheet("res_1", "animations/installations/res_FOMO.png", D),
                v.load.spritesheet("res_2", "animations/installations/res_ALPHA.png", D),
                v.load.spritesheet("res_3", "animations/installations/res_KEK.png", D),
                v.load.spritesheet("wall", "animations/installations/waall.png", P),
                v.load.spritesheet("lodge", "animations/installations/lodge.png", H),
                v.load.spritesheet("land_wip", "animations/installations/land_wip.png", I),
                v.load.spritesheet("equip", "animations/installations/action_equip.png", {
                    frameWidth: 64,
                    frameHeight: 64
                }),
                v.load.spritesheet("action_upgrade", "animations/installations/action_upgrade.png", {
                    frameWidth: 128,
                    frameHeight: 256
                })
            },
            loadImage: function() {
                v.load.image("equipBtn", "images/equip-btn.png"),
                v.load.image("closeBtn", "images/close-btn.png"),
                v.load.image("upgradeBtn", "images/upgrade-btn.png"),
                v.load.image("minimap", "maps/mm_cr2.png"),
                v.load.image("minimap-gotchi", "maps/icon_player.png"),
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
                v.load.image("large_starfield1", "images/parallax/starfield_hires_sized_256.png"),
                v.load.image("LE_tile_1", "images/tiles/Tile_LE_1.png"),
                v.load.image("LE_tile_2", "images/tiles/Tile_LE_2.png"),
                v.load.image("LE_tile_3", "images/tiles/Tile_LE_3.png")
            },
            loadPaartnerImages: function() {
                v.load.image("ygg", "images/paartner/487_ygg.png"),
                v.load.image("blackpool", "images/paartner/1235_blackpool.png"),
                v.load.image("neon", "images/paartner/3609_neon.png"),
                v.load.image("ordengg", "images/paartner/3682_ordengg.png"),
                v.load.image("flamingo", "images/paartner/5079_flamingo.png"),
                v.load.image("cgu", "images/paartner/13592_cgu.png"),
                v.load.image("readyplayerdao", "images/paartner/23881_readyplayerdao.png"),
                v.load.image("metaguild", "images/paartner/25029_metaguild.png"),
                v.load.image("yggsea", "images/paartner/40689_yggsea.png")
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
                v.load.audio("equip_sound", "sounds/alpha/action_equip.ogg"),
                v.load.audio("theme_citaadel", "https://verse-static.aavegotchi.com/sounds/alpha/theme_citaadel_beatscribe.mp3"),
                v.load.audio("theme_scramble", "https://verse-static.aavegotchi.com/sounds/alpha/theme_scramble_beatscribe.ogg"),
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
                v.load.image("unplayable", "maps/sprites/unplayable.png"),
                v.load.image("gate_north", "maps/sprites/gate_north.png"),
                v.load.image("gate_east", "maps/sprites/gate_east.png"),
                v.load.image("gate_south", "maps/sprites/gate_south.png"),
                v.load.image("gate_west", "maps/sprites/gate_west.png"),
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
                v.scramble_music = v.sound.add("theme_scramble", {
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
                }),
                v.equip_sound = v.sound.add("equip_sound", {
                    volume: .4
                })
            }
        }, O = a(97001), U = a(35038), M = a(1787);
        function C(e, t, a, n, o, i, r) {
            try {
                var s = e[i](r)
                  , l = s.value
            } catch (d) {
                return void a(d)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function z(e) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, a);
                    function r(e) {
                        C(i, n, o, r, s, "next", e)
                    }
                    function s(e) {
                        C(i, n, o, r, s, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        var Z = a(15601)
          , L = a(11163)
          , W = a.n(L)
          , F = a(87659)
          , K = a(65988)
          , R = a.n(K)
          , X = {
            src: "/_next/static/media/gotchiverse_loading.45a92ae2.gif",
            height: 330,
            width: 280
        }
          , B = a(25675)
          , G = a.n(B)
          , q = function() {
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", {
                    className: "jsx-d09f21998065f47f background-loading",
                    children: (0,
                    n.jsx)(G(), {
                        src: X,
                        height: 200,
                        width: 330,
                        objectFit: "contain"
                    })
                }), (0,
                n.jsx)(R(), {
                    id: "d09f21998065f47f",
                    children: ".background-loading.jsx-d09f21998065f47f{position:absolute;top:0;left:0;right:0;bottom:0;background-color:black;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}"
                })]
            })
        }
          , $ = a(21454)
          , Q = a(86991)
          , V = a(95801)
          , J = new String(".build-border.jsx-876ad0ccfa6baf71{position:absolute;pointer-events:none;width:100%;height:100%;top:0;left:0;border:2px solid var(--col-info-400);-webkit-box-shadow:inset 0px 0px 24px rgba(0,185,243,1);-moz-box-shadow:inset 0px 0px 24px rgba(0,185,243,1);box-shadow:inset 0px 0px 24px rgba(0,185,243,1)}.right-container.jsx-876ad0ccfa6baf71{position:absolute;right:0;top:12px;bottom:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.pending-toggle.jsx-876ad0ccfa6baf71{top:0;position:absolute;right:190px}.build-toggle.jsx-876ad0ccfa6baf71{position:absolute;bottom:12px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}");
        J.__hash = "876ad0ccfa6baf71";
        var Y = J
          , ee = a(64989)
          , te = a(19051)
          , ae = a(63382)
          , ne = a(61972)
          , oe = new String('.sidetray-content.jsx-37c5c65536abd0f{width:152px;height:100%;padding:0 12px 12px 8px}.loading-state.jsx-37c5c65536abd0f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;height:24px}.loading-state.jsx-37c5c65536abd0f p.jsx-37c5c65536abd0f{margin:0 4px;color:var(--col-info-400)}.scroll-wrapper.jsx-37c5c65536abd0f{position:relative;height:-webkit-calc(100% - 54px);height:-moz-calc(100% - 54px);height:calc(100% - 54px)}.scroll-wrapper.jsx-37c5c65536abd0f:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:54px;background:-webkit-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:-moz-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:-o-linear-gradient(bottom,rgba(0,0,0,1),rgba(0,0,0,0));background:linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0))}.scroll-container.jsx-37c5c65536abd0f{overflow:scroll;height:100%}.installation-wrapper.jsx-37c5c65536abd0f{cursor:url("/cursors/pointer.png"),pointer;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.scroll-button.jsx-37c5c65536abd0f{margin:12px auto 0;display:block;position:relative;height:18px;width:32px;border:none;background-color:transparent}.scroll-button.jsx-37c5c65536abd0f:after{content:"";position:absolute;width:0;top:0;left:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-top:18px solid var(--col-info-400)}.pointer.jsx-37c5c65536abd0f{position:absolute;top:54px;left:-12px;z-index:1;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation:drag 3e3ms;-moz-animation:drag 3e3ms;-o-animation:drag 3e3ms;animation:drag 3e3ms;-webkit-animation-delay:1e3ms;-moz-animation-delay:1e3ms;-o-animation-delay:1e3ms;animation-delay:1e3ms;opacity:0;pointer-events:none}@keyframes drag{0%{-webkit-transform:rotate(180deg)translateX(0);-moz-transform:rotate(180deg)translateX(0);-o-transform:rotate(180deg)translateX(0);transform:rotate(180deg)translateX(0);opacity:1}50%{-webkit-transform:rotate(180deg)translateX(32px);-moz-transform:rotate(180deg)translateX(32px);-o-transform:rotate(180deg)translateX(32px);transform:rotate(180deg)translateX(32px);opacity:1}51%{-webkit-transform:rotate(180deg)translateX(0);-moz-transform:rotate(180deg)translateX(0);-o-transform:rotate(180deg)translateX(0);transform:rotate(180deg)translateX(0);opacity:1}100%{-webkit-transform:rotate(180deg)translateX(32px);-moz-transform:rotate(180deg)translateX(32px);-o-transform:rotate(180deg)translateX(32px);transform:rotate(180deg)translateX(32px);opacity:1}}');
        oe.__hash = "37c5c65536abd0f";
        var ie = oe
          , re = a(82576);
        function se(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function le(e, t, a, n, o, i, r) {
            try {
                var s = e[i](r)
                  , l = s.value
            } catch (d) {
                return void a(d)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function de(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return se(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return se(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ce = function() {
            var e = de((0,
            ae.a)(), 2)
              , t = e[0].inventory
              , a = e[1]
              , i = de((0,
            c.$)(), 1)[0]
              , r = i.currentNetwork
              , l = i.currentAccount
              , d = i.globalProvider
              , u = (0,
            o.useState)(!1)
              , p = u[0]
              , m = u[1]
              , h = (0,
            o.useRef)(null)
              , g = function() {
                var e = function(e) {
                    return function() {
                        var t = this
                          , a = arguments;
                        return new Promise((function(n, o) {
                            var i = e.apply(t, a);
                            function r(e) {
                                le(i, n, o, r, s, "next", e)
                            }
                            function s(e) {
                                le(i, n, o, r, s, "throw", e)
                            }
                            r(void 0)
                        }
                        ))
                    }
                }(s().mark((function e(t) {
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return m(!0),
                                e.next = 3,
                                (0,
                                ne.e9)(t, a);
                            case 3:
                                m(!1);
                            case 4:
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
            }();
            return (0,
            o.useEffect)((function() {
                l && r && d && g({
                    provider: d,
                    network: r,
                    account: l
                })
            }
            ), [r, l, d]),
            (0,
            n.jsxs)(ee.LR, {
                hideSides: {
                    right: !0
                },
                borrowedColor: !0,
                inheritHeight: !0,
                children: [(0,
                n.jsxs)("div", {
                    className: "jsx-".concat(ie.__hash) + " sidetray-content",
                    children: [(0,
                    n.jsx)("div", {
                        className: "jsx-".concat(ie.__hash) + " loading-state",
                        children: p && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("p", {
                                className: "jsx-".concat(ie.__hash),
                                children: "Fetching..."
                            }), (0,
                            n.jsx)(ee.aN, {
                                size: 1.5
                            })]
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "jsx-".concat(ie.__hash) + " scroll-wrapper",
                        children: [t && t.length > 0 && (0,
                        n.jsx)("span", {
                            className: "jsx-".concat(ie.__hash) + " pointer",
                            children: (0,
                            n.jsx)(G(), {
                                src: re.Z
                            })
                        }), (0,
                        n.jsx)("div", {
                            ref: h,
                            className: "jsx-".concat(ie.__hash) + " scroll-container",
                            children: null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                return (0,
                                n.jsx)("div", {
                                    onPointerDown: function() {
                                        return t = e,
                                        void M.Z.toggleActive(t);
                                        var t
                                    },
                                    onPointerUp: function() {},
                                    className: "jsx-".concat(ie.__hash) + " installation-wrapper",
                                    children: (0,
                                    n.jsx)(ee.Gj, {
                                        quantity: e.quantity,
                                        installation: {
                                            name: e.name,
                                            level: e.level,
                                            rarity: "common",
                                            type: e.type,
                                            itemType: e.itemType,
                                            id: e.id
                                        }
                                    })
                                }, t)
                            }
                            ))
                        })]
                    }), (0,
                    n.jsx)("button", {
                        onClick: function() {
                            h.current.scrollBy({
                                top: 164,
                                behavior: "smooth"
                            })
                        },
                        className: "jsx-".concat(ie.__hash) + " scroll-button"
                    })]
                }), (0,
                n.jsx)(R(), {
                    id: ie.__hash,
                    children: ie
                })]
            })
        }
          , ue = a(32034);
        function pe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function me(e, t, a, n, o, i, r) {
            try {
                var s = e[i](r)
                  , l = s.value
            } catch (d) {
                return void a(d)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function he(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return pe(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return pe(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ge = function() {
            var e = he((0,
            Q.l)(), 2)[1]
              , t = he((0,
            c.$)(), 1)[0]
              , a = t.globalProvider
              , i = t.currentAccount
              , r = t.currentNetwork
              , l = he((0,
            ae.a)(), 2)
              , d = l[0].ongoingUpgrades
              , u = l[1]
              , p = (0,
            o.useState)(!1)
              , m = p[0]
              , h = p[1]
              , g = (0,
            o.useState)(0)
              , f = g[0]
              , _ = g[1]
              , x = function() {
                var e = function(e) {
                    return function() {
                        var t = this
                          , a = arguments;
                        return new Promise((function(n, o) {
                            var i = e.apply(t, a);
                            function r(e) {
                                me(i, n, o, r, s, "next", e)
                            }
                            function s(e) {
                                me(i, n, o, r, s, "throw", e)
                            }
                            r(void 0)
                        }
                        ))
                    }
                }(s().mark((function e(t) {
                    var a;
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.getBlockNumber();
                            case 2:
                                a = e.sent,
                                _(a);
                            case 4:
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
            }();
            return (0,
            o.useEffect)((function() {
                return U.Z.updateDisableKeyboard(!0),
                E.Z.toggleMinimap(!1),
                function() {
                    U.Z.updateDisableKeyboard(!1),
                    E.Z.toggleMinimap(!0)
                }
            }
            ), []),
            (0,
            o.useEffect)((function() {
                a && i && r && (0,
                ne.hB)({
                    provider: a,
                    network: r,
                    account: i
                }, u)
            }
            ), [a, i, r]),
            (0,
            o.useEffect)((function() {
                if (a) {
                    x(a);
                    var e = setInterval((function() {
                        x(a)
                    }
                    ), 1e4);
                    return function() {
                        return clearInterval(e)
                    }
                }
            }
            ), [a]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(ue.k, {
                    currentBlock: f
                }), (0,
                n.jsx)(te.HZ, {}), (0,
                n.jsx)(ue.n, {
                    open: m,
                    onClose: function() {
                        return h(!1)
                    },
                    currentBlock: f
                }), (0,
                n.jsx)("div", {
                    className: "jsx-".concat(Y.__hash) + " build-border"
                }), d && d.length > 0 && (0,
                n.jsx)("div", {
                    className: "jsx-".concat(Y.__hash) + " pending-toggle",
                    children: (0,
                    n.jsx)(ee.CD, {
                        title: "Upgrading now",
                        message: "".concat(d.length, " installations"),
                        onClick: function() {
                            return h(!0)
                        }
                    })
                }), (0,
                n.jsx)("div", {
                    className: "jsx-".concat(Y.__hash) + " right-container",
                    children: (0,
                    n.jsx)(ce, {})
                }), (0,
                n.jsx)("div", {
                    className: "jsx-".concat(Y.__hash) + " build-toggle",
                    children: (0,
                    n.jsx)(ee.zx, {
                        color: "info",
                        onClick: function() {
                            M.Z.toggleBuildMode(!1),
                            e({
                                type: "UPDATE_HUD",
                                hud: "PLAY"
                            })
                        },
                        children: "Exit Build Mode"
                    })
                }), (0,
                n.jsx)(R(), {
                    id: Y.__hash,
                    children: Y
                })]
            })
        }
          , fe = a(818)
          , _e = new String(".top-left-container.jsx-d37251ce02ed68f2{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:0}.settings-menu-container.jsx-d37251ce02ed68f2{margin-left:16px}.wallet-menu-container.jsx-d37251ce02ed68f2{margin-left:16px}.pocket-container.jsx-d37251ce02ed68f2{position:absolute;top:0;right:300px}.minimap-container.jsx-d37251ce02ed68f2{width:300px;height:300px;border:4px solid var(--col-pink-border);border-top:0;border-left:0}.top-right-container.jsx-d37251ce02ed68f2{position:absolute;top:0;right:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;width:0}.users-health-container.jsx-d37251ce02ed68f2{margin-bottom:12px}.performance.jsx-d37251ce02ed68f2{position:absolute;padding:20px;padding-top:10px;top:0;right:380px;color:white;background:rgba(0,0,0,.4);-webkit-border-radius:0 10px 0 0;-moz-border-radius:0 10px 0 0;border-radius:0 10px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:21px;line-height:24px;min-width:330px}.bottom-right-container.jsx-d37251ce02ed68f2{width:60px;position:absolute;bottom:32px;right:54px}.bottom-left-container.jsx-d37251ce02ed68f2{position:absolute;bottom:0;left:0}.chat-container.jsx-d37251ce02ed68f2{margin-bottom:256px}.action-button-container.jsx-d37251ce02ed68f2{position:absolute;bottom:12px;right:140px;gap:18px}.shootingOnButton.jsx-d37251ce02ed68f2{display:block;width:60px;height:60px;background:url(images/hud/shoot_on.png);margin-left:10px;border:0px}.shootingOffButton.jsx-d37251ce02ed68f2{display:block;width:60px;height:60px;background:url(images/hud/shoot_off.png);margin-left:10px;border:0px}");
        _e.__hash = "d37251ce02ed68f2";
        var xe, be = _e, ve = a(20073), ye = a(93577), we = a(61124);
        function ke(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function je(e, t, a, n, o, i, r) {
            try {
                var s = e[i](r)
                  , l = s.value
            } catch (d) {
                return void a(d)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, o)
        }
        function Ae(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ke(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return ke(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Se = function() {
            var e = (0,
            ye.Z)()
              , t = e.click
              , a = e.oops
              , i = Ae((0,
            F.P)(), 2)
              , r = i[0]
              , l = r.alchemica
              , d = r.selectedPlayer
              , p = r.gotchiUrl
              , m = r.playersHealth
              , h = r.isAavegotchiLent
              , g = r.escrow
              , f = r.currentDistrict
              , _ = (r.gameAlert,
            i[1])
              , x = Ae((0,
            u.D)(), 2)
              , b = x[0]
              , v = b.host
              , w = b.playersOnline
              , k = b.scene
              , j = b.performance
              , A = b.roundTime
              , S = b.toggleDebugConsole
              , N = b.toggleMinimap
              , P = b.playerPosition
              , D = x[1]
              , H = Ae((0,
            $.r)(), 1)[0]
              , I = H.allowMusic
              , T = H.allowSound
              , O = Ae((0,
            c.$)(), 1)[0].currentNetwork
              , U = Ae((0,
            Q.l)(), 2)[1]
              , C = (0,
            o.useState)(0)
              , z = C[0]
              , Z = C[1]
              , L = (0,
            o.useState)("00")
              , W = (L[0],
            L[1])
              , K = (0,
            o.useState)("00")
              , X = (K[0],
            K[1])
              , B = (0,
            o.useState)("00")
              , G = (B[0],
            B[1])
              , q = (0,
            o.useState)(!1)
              , V = q[0]
              , J = q[1]
              , Y = (0,
            o.useState)(!1)
              , ae = Y[0]
              , ne = Y[1]
              , oe = (0,
            o.useState)(!1)
              , ie = oe[0]
              , re = oe[1];
            (0,
            o.useEffect)((function() {
                D({
                    type: "UPDATE_ROUND_TIME",
                    roundTime: 0
                })
            }
            ), []),
            (0,
            o.useEffect)((function() {
                Z(A),
                xe && clearInterval(xe),
                xe = setInterval((function() {
                    Z((function(e) {
                        return e - 1
                    }
                    ))
                }
                ), 1e3)
            }
            ), [A]),
            (0,
            o.useEffect)((function() {
                var e = Math.floor(z / 3600)
                  , t = Math.floor((z - 60 * e) / 60)
                  , a = z - 60 * t;
                G(e.toString().padStart(2, "0")),
                W(t.toString().padStart(2, "0")),
                X(a.toString().padStart(2, "0")),
                z <= 0 && clearInterval(xe)
            }
            ), [z]);
            var se = function() {
                var e = function(e) {
                    return function() {
                        var t = this
                          , a = arguments;
                        return new Promise((function(n, o) {
                            var i = e.apply(t, a);
                            function r(e) {
                                je(i, n, o, r, s, "next", e)
                            }
                            function s(e) {
                                je(i, n, o, r, s, "throw", e)
                            }
                            r(void 0)
                        }
                        ))
                    }
                }(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                M.Z.toggleBuildMode(!0);
                            case 2:
                                e.sent ? (t(),
                                U({
                                    type: "UPDATE_HUD",
                                    hud: "BUILD"
                                }),
                                E.Z.toggleMinimap(!1)) : (a(),
                                _({
                                    type: "UPDATE_GAME_ALERT",
                                    gameAlert: "You cannot build here!"
                                }));
                            case 4:
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
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(te.dk, {}), (0,
                n.jsx)(we.N, {}), (0,
                n.jsx)(te.yM, {
                    open: ie,
                    onClose: function() {
                        return re(!1)
                    }
                }), (0,
                n.jsx)(te.HZ, {}), (0,
                n.jsx)(te.xY, {
                    open: ae,
                    onClose: function() {
                        return ne(!1)
                    },
                    userDetails: {
                        address: (null === d || void 0 === d ? void 0 : d.owner) || "",
                        network: O
                    }
                }), (0,
                n.jsx)(te.xh, {
                    open: V,
                    onClose: function() {
                        return J(!1)
                    },
                    onQuit: function() {
                        window.history.back(),
                        D({
                            type: "UPDATE_CONNECTED",
                            connected: !1
                        })
                    }
                }), (0,
                n.jsx)(te.kI, {
                    district: f
                }), (0,
                n.jsx)(te.cS, {}), N && (0,
                n.jsxs)("div", {
                    className: "jsx-".concat(be.__hash) + " top-left-container",
                    children: [N && (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " minimap-container"
                    }), (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " settings-menu-container",
                        children: (0,
                        n.jsx)(te.Tx, {
                            musicOn: I,
                            soundOn: T,
                            onExit: function() {
                                t(),
                                J(!0)
                            },
                            onToggleMusic: function() {
                                y.Z.toggleMusic(),
                                t()
                            },
                            onToggleSound: function() {
                                y.Z.toggleSound(),
                                t()
                            }
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " wallet-menu-container",
                        children: (0,
                        n.jsx)(te.hn, {
                            onClick: function() {
                                return ne(!0)
                            },
                            address: (null === d || void 0 === d ? void 0 : d.owner) || "",
                            network: O
                        })
                    })]
                }), N && d && h && g && (0,
                n.jsx)("div", {
                    className: "jsx-".concat(be.__hash) + " pocket-container",
                    children: (0,
                    n.jsx)(te.vd, {})
                }), N && (0,
                n.jsxs)("div", {
                    className: "jsx-".concat(be.__hash) + " top-right-container",
                    children: [d && p && (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " users-health-container",
                        children: (0,
                        n.jsx)(te.vb, {
                            name: d.name,
                            health: {
                                current: null !== m && void 0 !== m ? m : 100,
                                max: 100
                            },
                            img: p.url,
                            backgroundColor: k.backgroundColor
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " pending-alchemica-container",
                        children: (0,
                        n.jsx)(te.zv, {
                            alchemica: {
                                fud: (null === l || void 0 === l ? void 0 : l.fud) || 0,
                                fomo: (null === l || void 0 === l ? void 0 : l.fomo) || 0,
                                alpha: (null === l || void 0 === l ? void 0 : l.alpha) || 0,
                                kek: (null === l || void 0 === l ? void 0 : l.kek) || 0
                            },
                            maxCapacity: fe.ALCHEMICA_MAX_CARRY_QUANTITY,
                            total: (null === l || void 0 === l ? void 0 : l.total) || 0
                        })
                    })]
                }), S && (0,
                n.jsxs)("p", {
                    className: "jsx-".concat(be.__hash) + " performance",
                    children: ["DEBUG CONSOLE:", v && (0,
                    n.jsxs)("span", {
                        className: "jsx-".concat(be.__hash),
                        children: ["Host: ", v, " "]
                    }), P && (0,
                    n.jsxs)("span", {
                        className: "jsx-".concat(be.__hash),
                        children: [" Map: ", function() {
                            var e = "N"
                              , t = Number(P.y * fe.TILE_SIZE / fe.CITAADEL_HEIGHT * 90 * 2) - 19;
                            t > 90 && (t -= 90,
                            e = "S"),
                            "N" === e && (t = 90 - t);
                            var a = "W"
                              , n = Number(P.x * fe.TILE_SIZE / fe.CITAADEL_WIDTH * 90 * 2) - 12;
                            return n > 90 && (n -= 90,
                            a = "E"),
                            "W" === a && (n = 90 - n),
                            "".concat(t.toFixed(1), "\xb0").concat(e, ", ").concat(n.toFixed(1), "\xb0").concat(a, " (").concat(P.x * fe.TILE_SIZE, ", ").concat(P.y * fe.TILE_SIZE)
                        }(), ")"]
                    }), Object.keys(j || {}).map((function(e, t) {
                        return (0,
                        n.jsxs)("span", {
                            style: {
                                marginRight: 10,
                                lineHeight: 1
                            },
                            children: [e.charAt(0).toUpperCase() + e.slice(1), ": ", j[e], "ms"]
                        }, t)
                    }
                    )), w && (0,
                    n.jsxs)("span", {
                        className: "jsx-".concat(be.__hash),
                        children: [" Online Players: ", w, " "]
                    })]
                }), N && (0,
                n.jsxs)("div", {
                    className: "jsx-".concat(be.__hash) + " action-button-container",
                    children: [(0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " centered flex-row",
                        children: (0,
                        n.jsx)(ee.Kk, {
                            color: "info",
                            img: ve.vV,
                            onClick: se,
                            disableSound: !0
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "jsx-".concat(be.__hash) + " flex-row space-between",
                        children: [(0,
                        n.jsx)(ee.Kk, {
                            img: ve.tq,
                            onClick: function() {
                                return re(!0)
                            }
                        }), (0,
                        n.jsx)(te.as, {})]
                    })]
                }), N && (0,
                n.jsx)("div", {
                    className: "jsx-".concat(be.__hash) + " bottom-right-container",
                    children: (0,
                    n.jsx)(te.zR, {})
                }), N && (0,
                n.jsx)("div", {
                    className: "jsx-".concat(be.__hash) + " bottom-left-container",
                    children: (0,
                    n.jsx)("div", {
                        className: "jsx-".concat(be.__hash) + " chat-container",
                        children: (0,
                        n.jsx)(te.rW, {})
                    })
                }), (0,
                n.jsx)(R(), {
                    id: be.__hash,
                    children: be
                })]
            })
        };
        function Ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function Ne(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Ee(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return Ee(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Pe = function() {
            return "BUILD" === Ne((0,
            Q.l)(), 1)[0].hud ? (0,
            n.jsx)(ge, {}) : (0,
            n.jsx)(Se, {})
        }
          , De = a(79830);
        function He(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function Ie(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, o, i = [], r = !0, s = !1;
                    try {
                        for (a = a.call(e); !(r = (n = a.next()).done) && (i.push(n.value),
                        !t || i.length !== t); r = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return He(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return He(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Te = function() {
            var e, t = Ie((0,
            c.$)(), 2), a = t[0], r = a.authToken, l = a.currentAccount, d = a.currentNetwork, p = a.globalProvider, m = a.secondaryNetwork, h = a.secondaryProvider, g = a.ethersSigner, f = (t[1],
            Ie((0,
            F.P)(), 2)), x = f[0], v = x.selectedPlayer, P = x.gotchiUrl, D = x.backgroundColor, H = x.ownedParcels, I = x.isAavegotchiLent, C = f[1], L = Ie((0,
            u.D)(), 2), K = L[0], R = (K.gameShooting,
            K.maxZoomOut), X = K.zoom, B = K.connected, G = L[1], J = Ie((0,
            $.r)(), 2), Y = J[0], ee = Y.allowMusic, te = Y.allowSound, ae = J[1], ne = Ie((0,
            Q.l)(), 2)[1], oe = Ie((0,
            V.R)(), 2)[1], ie = Ie((0,
            De.l)(), 2)[1], re = (0,
            o.useState)(void 0), se = re[0], le = re[1], de = (0,
            o.useState)(!1), ce = de[0], ue = de[1], pe = (0,
            o.useRef)(null), me = Ie((0,
            $.r)(), 1)[0], he = me.allowAnimatedTiles, ge = me.allowGotchiGlow, fe = me.allowInstallationAnimations, _e = me.allowPlayerAnimation, xe = me.allowStarField, be = me.fadeGrid, ve = (0,
            o.useState)(!1), ye = ve[0], we = ve[1];
            return (0,
            o.useEffect)((function() {
                l && (d || (0,
                Z.oB)(d)) ? "undefined" !== typeof window.navigator && (ue(!0),
                pe && b(pe)) : W().push("/")
            }
            ), ["object", "undefined" === typeof navigator ? "undefined" : (e = navigator,
            e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e), d, p, l, v, pe]),
            (0,
            o.useEffect)((function() {
                l && v && P && le(function(e, t, a, n, o, i, r, l, d, c, u, p, m, h, g, f, _, x) {
                    return {
                        preload: z(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.cache.tilemap.events.on("add", (function(e, t) {
                                            E.Z.displayChunk(t)
                                        }
                                        )),
                                        T.loadMap(),
                                        T.loadAudio(),
                                        T.loadSpritesheet(),
                                        T.loadInstallation(),
                                        T.loadImage(),
                                        T.loadPaartnerImages(),
                                        this.load.scenePlugin("AnimatedTiles", "AnimatedTiles.js", "animatedTiles", "animatedTiles"),
                                        this.load.plugin("rexoutlinepipelineplugin", "rexoutlinepipelineplugin.min.js", !0),
                                        this.load.plugin("rexpinchplugin", "rexpinchplugin.min.js", !0),
                                        this.load.spritesheet(l.id, p.sprite, {
                                            frameWidth: 64,
                                            frameHeight: 64
                                        }),
                                        void 0 !== l.leftHand && this.load.svg(l.leftHand.id, p.leftHand, {
                                            frameWidth: 32,
                                            frameHeight: 32
                                        }),
                                        void 0 !== l.rightHand && this.load.svg(l.rightHand.id, p.rightHand, {
                                            frameWidth: 32,
                                            frameHeight: 32
                                        }),
                                        this.load.image("gotchi-shadow", "images/gotchi_shadow.png"),
                                        this.load.on("complete", (function() {
                                            x()
                                        }
                                        ));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        ))),
                        init: function() {
                            this.playersToLoad = [],
                            this.loadedPlayers = [],
                            this.itemsGroup = this.add.group().setDepth(100),
                            this.padsGroup = this.add.group(),
                            this.uiGroup = this.add.group(),
                            this.hudObjects = {},
                            this.currentItems = [],
                            this.spawnedParcelsByIdMap = new Map,
                            this.installationGroup = new Map,
                            this.installationsWaiting = new Map,
                            this.lastUpdate = {},
                            this.inputActive = !0,
                            this.localPlayerData = d,
                            this.projectiles = {},
                            this.gameSettings = f,
                            this.authToken = e,
                            this.currentAccount = t,
                            this.currentNetwork = a,
                            this.secondaryProvider = i,
                            this.ethersSigner = n,
                            this.globalProvider = o,
                            this.backgroundColor = u,
                            this.secondaryNetwork = r,
                            this.ownedParcels = c,
                            this.realmDispatch = _.realmDispatch,
                            this.phaserDispatch = _.phaserDispatch,
                            this.settingsDispatch = _.settingsDispatch,
                            this.uiDispatch = _.uiDispatch,
                            this.chatDispatch = _.chatDispatch,
                            this.notificationDispatch = _.notificationDispatch,
                            this.maxZoomOut = m,
                            this.zoom = h,
                            w.Z.init(this),
                            y.Z.initScene(this),
                            T.initScene(this),
                            O.Z.initScene(this),
                            k.Z.initScene(this),
                            j.Z.initScene(this),
                            A.Z.initScene(this),
                            S.Z.initScene(this),
                            M.Z.initScene(this),
                            _.phaserDispatch({
                                type: "UPDATE_SCENE",
                                scene: this
                            })
                        },
                        create: z(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.outLinePlugin = this.plugins.get("rexoutlinepipelineplugin"),
                                        null === (t = this.outLinePlugin) || void 0 === t || t.setQuality(1),
                                        this.dragPinch = this.plugins.get("rexpinchplugin").add(this),
                                        T.createAudio(),
                                        O.Z.create(),
                                        k.Z.initPlayer(l),
                                        j.Z.initAlchemicaHUD(),
                                        this.gameSettings.allowStarField && (0,
                                        N.uP)(this),
                                        w.Z.socketConnect(_.realmDispatch, l);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        ))),
                        update: function(e, t) {
                            U.Z.handleKeyboardMovement(),
                            this.gameSettings.allowStarField && (0,
                            N.$g)(this, l, t)
                        }
                    }
                }(r, l, d, g, p, h, m, v, {
                    isAavegotchiLent: I,
                    gotchiUrl: P,
                    ownedParcels: H,
                    backgroundColor: D
                }, H, D, P, R, X, 0, {
                    allowAnimatedTiles: he,
                    allowGotchiGlow: ge,
                    allowInstallationAnimations: fe,
                    allowPlayerAnimation: _e,
                    allowStarField: xe,
                    fadeGrid: be,
                    allowSound: te,
                    allowMusic: ee
                }, {
                    phaserDispatch: G,
                    realmDispatch: C,
                    settingsDispatch: ae,
                    uiDispatch: ne,
                    chatDispatch: oe,
                    notificationDispatch: ie
                }, (function() {
                    return we(!0)
                }
                )))
            }
            ), [l, v, P, ee]),
            ce && se ? (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(i.default, {
                    children: [(0,
                    n.jsx)("title", {
                        children: "Play | Gotchiverse"
                    }), (0,
                    n.jsx)("meta", {
                        property: "og:title",
                        content: "Play | Gotchiverse"
                    }, "title")]
                }), (0,
                n.jsx)("div", {
                    ref: pe
                }), (0,
                n.jsx)(_, {
                    gameScene: se
                }), ye && B && (0,
                n.jsx)(Pe, {}), !ye && (0,
                n.jsx)(q, {})]
            }) : (0,
            n.jsx)(q, {})
        }
    }
}, function(e) {
    e.O(0, [764, 85, 565, 152, 51, 88, 774, 888, 179], (function() {
        return t = 88764,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=play-26f3bdfb5999ea7b.js.map