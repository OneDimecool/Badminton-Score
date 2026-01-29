export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.2";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.2";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            display: "flex",
                            flexDirection: "column",
                            width: "212px",
                            height: "520px",
                            backgroundColor: "#000000",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundImage: "common/background.png",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "block1"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#3ac7ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "block2"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#ff3a33"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score"
                            ]
                        ],
                        {
                            lineHeight: "160px",
                            fontSize: "70px",
                            color: "#ffffff",
                            zIndex: 2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            width: "200px",
                            height: "40px",
                            marginTop: "20px",
                            borderRadius: "5px",
                            backgroundColor: "#09ba07",
                            fontSize: "20px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "player"
                            ]
                        ],
                        {
                            fontSize: "35px",
                            color: "#ffffff",
                            marginTop: "10px",
                            marginRight: "15px",
                            marginBottom: "10px",
                            marginLeft: "15px",
                            zIndex: 2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score-container"
                            ]
                        ],
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score-container"
                            ],
                            [
                                0,
                                "top"
                            ]
                        ],
                        {
                            marginTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score-container"
                            ],
                            [
                                0,
                                "bottom"
                            ]
                        ],
                        {
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "players-container"
                            ]
                        ],
                        {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            flex: 1
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "players-row"
                            ]
                        ],
                        {
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "15px",
                            marginRight: "0",
                            marginBottom: "15px",
                            marginLeft: "0",
                            gap: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "center-image-container"
                            ]
                        ],
                        {
                            position: "absolute",
                            zIndex: 1
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            score_opp: 0,
                            score_self: 0,
                            OperationList: [],
                            opp_player1: "A",
                            opp_player2: "B",
                            self_player1: "C",
                            self_player2: "D",
                            last_score: "",
                            opp_player_left: "",
                            opp_player_right: "",
                            self_player_left: "",
                            self_player_right: ""
                        },
                        onInit () {
                            this.init();
                        },
                        init () {
                            console.log("初始化页面数据");
                            this.opp_player_left = this.opp_player1;
                            this.opp_player_right = this.opp_player2;
                            this.self_player_left = this.self_player1;
                            this.self_player_right = this.self_player2;
                        },
                        onSwipe (eve) {
                            if ('up' === eve.direction) {
                                this.score_self += 1;
                                let _score_side = 'self';
                                if (this.last_score === _score_side) this.self_exchange();
                                this.last_score = _score_side;
                                console.log(this.last_score);
                            } else if ('down' === eve.direction) {
                                this.score_opp += 1;
                                let _score_side = 'opp';
                                if (this.last_score === _score_side) this.opp_exchange();
                                this.last_score = _score_side;
                            }
                        },
                        self_exchange () {
                            console.log(this.self_player_left);
                            let temp = this.self_player_left;
                            this.self_player_left = this.self_player_right;
                            this.self_player_right = temp;
                        },
                        opp_exchange () {
                            let temp = this.opp_player_left;
                            this.opp_player_left = this.opp_player_right;
                            this.opp_player_right = temp;
                        },
                        onLongPress (eve) {
                            this.score_opp = 0;
                            this.score_self = 0;
                        },
                        routeDetail () {
                            _system.default.push({
                                uri: "/pages/detail"
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ],
                            events: {
                                swipe: function(evt) {
                                    return _vm_.onSwipe(evt);
                                }
                            }
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "center-image-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "center-image"
                                    ],
                                    src: "/common/playground.png"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "score-container",
                                    "top"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "score"
                                    ],
                                    value: function() {
                                        return _vm_.score_opp;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "players-container"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "players-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "player"
                                        ],
                                        value: function() {
                                            return _vm_.opp_player_left;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "player"
                                        ],
                                        value: function() {
                                            return _vm_.opp_player_right;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "players-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "player"
                                        ],
                                        value: function() {
                                            return _vm_.self_player_left;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "player"
                                        ],
                                        value: function() {
                                            return _vm_.self_player_right;
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "score-container",
                                    "bottom"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "score"
                                    ],
                                    value: function() {
                                        return _vm_.score_self;
                                    }
                                }
                            }, [])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL015Rmlyc3RBcHAvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL015Rmlyc3RBcHAvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vTXlGaXJzdEFwcC9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMlwiOyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZVwiIEBzd2lwZT1cIm9uU3dpcGVcIiA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY2VudGVyLWltYWdlXCIgc3JjPVwiLi4vLi4vY29tbW9uL3BsYXlncm91bmQucG5nXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSDpobbpg6ggc2NvcmUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmUtY29udGFpbmVyIHRvcFwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInNjb3JlXCI+e3sgc2NvcmVfb3BwIH19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDkuK3pl7QgcGxheWVycyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJzLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVycy1yb3dcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInBsYXllclwiPnt7IG9wcF9wbGF5ZXJfbGVmdCB9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInBsYXllclwiPnt7IG9wcF9wbGF5ZXJfcmlnaHQgfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVycy1yb3dcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInBsYXllclwiPnt7IHNlbGZfcGxheWVyX2xlZnQgfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJwbGF5ZXJcIj57eyBzZWxmX3BsYXllcl9yaWdodCB9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOW6lemDqCBzY29yZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJzY29yZS1jb250YWluZXIgYm90dG9tXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwic2NvcmVcIj57eyBzY29yZV9zZWxmIH19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8g6aG16Z2i57qn57uE5Lu255qE5pWw5o2u5qih5Z6L77yM5b2x5ZON5Lyg5YWl5pWw5o2u55qE6KaG55uW5py65Yi277yacHJpdmF0ZeWGheWumuS5ieeahOWxnuaAp+S4jeWFgeiuuOiiq+imhuebllxyXG4gIHByaXZhdGU6IHtcclxuICAgIHNjb3JlX29wcDogMCxcclxuICAgIHNjb3JlX3NlbGY6IDAsXHJcbiAgICBPcGVyYXRpb25MaXN0OiBbXSxcclxuICAgIG9wcF9wbGF5ZXIxOlwiQVwiLFxyXG4gICAgb3BwX3BsYXllcjI6XCJCXCIsXHJcbiAgICBzZWxmX3BsYXllcjE6XCJDXCIsXHJcbiAgICBzZWxmX3BsYXllcjI6XCJEXCIsXHJcbiAgICBsYXN0X3Njb3JlOlwiXCIsIC8v6K6w5b2V5LiK5LiA5qyh5b6X5YiG5pa5XHJcbiAgICBvcHBfcGxheWVyX2xlZnQ6XCJcIixcclxuICAgIG9wcF9wbGF5ZXJfcmlnaHQ6XCJcIixcclxuICAgIHNlbGZfcGxheWVyX2xlZnQ6XCJcIixcclxuICAgIHNlbGZfcGxheWVyX3JpZ2h0OlwiXCJcclxuICB9LFxyXG4gIG9uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0sXHJcbiAgaW5pdCgpe1xyXG4gICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbpobXpnaLmlbDmja5cIik7XHJcbiAgICB0aGlzLm9wcF9wbGF5ZXJfbGVmdCA9IHRoaXMub3BwX3BsYXllcjE7XHJcbiAgICB0aGlzLm9wcF9wbGF5ZXJfcmlnaHQgPSB0aGlzLm9wcF9wbGF5ZXIyO1xyXG4gICAgdGhpcy5zZWxmX3BsYXllcl9sZWZ0ID0gdGhpcy5zZWxmX3BsYXllcjE7XHJcbiAgICB0aGlzLnNlbGZfcGxheWVyX3JpZ2h0ID0gdGhpcy5zZWxmX3BsYXllcjI7XHJcbiAgfSxcclxuICBvblN3aXBlKGV2ZSl7XHJcbiAgICBpZihldmUuZGlyZWN0aW9uID09PSAndXAnKXtcclxuICAgICAgdGhpcy5zY29yZV9zZWxmICs9IDE7XHJcbiAgICAgIGxldCBfc2NvcmVfc2lkZSA9ICdzZWxmJztcclxuICAgICAgaWYodGhpcy5sYXN0X3Njb3JlID09PSBfc2NvcmVfc2lkZSl7XHJcbiAgICAgICAgdGhpcy5zZWxmX2V4Y2hhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0X3Njb3JlID0gX3Njb3JlX3NpZGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFzdF9zY29yZSlcclxuXHJcbiAgICB9IGVsc2UgaWYoZXZlLmRpcmVjdGlvbiA9PT0gJ2Rvd24nKXtcclxuICAgICAgdGhpcy5zY29yZV9vcHAgKz0gMTtcclxuICAgICAgbGV0IF9zY29yZV9zaWRlID0gJ29wcCc7XHJcbiAgICAgIGlmKHRoaXMubGFzdF9zY29yZSA9PT0gX3Njb3JlX3NpZGUpe1xyXG4gICAgICAgIHRoaXMub3BwX2V4Y2hhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0X3Njb3JlID0gX3Njb3JlX3NpZGU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG4gIHNlbGZfZXhjaGFuZ2UoKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZl9wbGF5ZXJfbGVmdCk7XHJcbiAgICBsZXQgdGVtcCA9IHRoaXMuc2VsZl9wbGF5ZXJfbGVmdDtcclxuICAgIHRoaXMuc2VsZl9wbGF5ZXJfbGVmdCA9IHRoaXMuc2VsZl9wbGF5ZXJfcmlnaHQ7XHJcbiAgICB0aGlzLnNlbGZfcGxheWVyX3JpZ2h0ID0gdGVtcDtcclxuICB9LFxyXG4gIG9wcF9leGNoYW5nZSgpe1xyXG4gICAgbGV0IHRlbXAgPSB0aGlzLm9wcF9wbGF5ZXJfbGVmdDtcclxuICAgIHRoaXMub3BwX3BsYXllcl9sZWZ0ID0gdGhpcy5vcHBfcGxheWVyX3JpZ2h0O1xyXG4gICAgdGhpcy5vcHBfcGxheWVyX3JpZ2h0ID0gdGVtcDtcclxuICB9LFxyXG4gIG9uTG9uZ1ByZXNzKGV2ZSl7XHJcblxyXG4gICAgdGhpcy5zY29yZV9vcHAgPSAwO1xyXG4gICAgdGhpcy5zY29yZV9zZWxmID0gMDtcclxuICB9LFxyXG5cclxuICByb3V0ZURldGFpbCgpIHtcclxuICAgIC8vIOi3s+i9rOWIsOW6lOeUqOWGheeahOafkOS4qumhtemdou+8jHJvdXRlcueUqOazleivpuinge+8muaWh+ahoy0+5o6l5Y+jLT7pobXpnaLot6/nlLFcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgdXJpOiBcIi9wYWdlcy9kZXRhaWxcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5wYWdle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDoyMTJweDtcclxuICBoZWlnaHQ6NTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2NvbW1vbi9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmxvY2sxLC5ibG9jazIge1xyXG4gIHdpZHRoOiAxOTJweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJsb2NrMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FjN2ZmO1xyXG59XHJcbi5ibG9jazIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNhMzM7XHJcbn1cclxuLnNjb3Jle1xyXG4gIGxpbmUtaGVpZ2h0OiAxNjBweDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDliYTA3O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucGxheWVyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnNjb3JlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7IC8qIOaOp+WItiBzY29yZSDljLrln5/pq5jluqYgKi9cclxufVxyXG5cclxuLnNjb3JlLWNvbnRhaW5lci50b3Age1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7IC8qIOmhtumDqOmXtOi3nSAqL1xyXG59XHJcblxyXG4uc2NvcmUtY29udGFpbmVyLmJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyog5bqV6YOo6Ze06LedICovXHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wbGF5ZXJzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMTsgLyog5Y2g5o2u5Lit6Ze05Ymp5L2Z56m66Ze0ICovXHJcbn1cclxuXHJcbi5wbGF5ZXJzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyog5rC05bmz5YiG5biDICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7IC8qIOihjOmXtOi3nSAqL1xyXG4gIGdhcDogMTBweDsgLyog6K6+572u5Lik5Liq5YWD57Sg5LmL6Ze055qE6Ze06LedICovXHJcbn1cclxuLmNlbnRlci1pbWFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyog57ud5a+55a6a5L2NICovXHJcbiAgei1pbmRleDogMTsgLyog56Gu5L+d5Zu+54mH5Zyo6IOM5pmv5Zu+5LiK5pa5ICovXHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwic2NvcmVfb3BwIiwic2NvcmVfc2VsZiIsIk9wZXJhdGlvbkxpc3QiLCJvcHBfcGxheWVyMSIsIm9wcF9wbGF5ZXIyIiwic2VsZl9wbGF5ZXIxIiwic2VsZl9wbGF5ZXIyIiwibGFzdF9zY29yZSIsIm9wcF9wbGF5ZXJfbGVmdCIsIm9wcF9wbGF5ZXJfcmlnaHQiLCJzZWxmX3BsYXllcl9sZWZ0Iiwic2VsZl9wbGF5ZXJfcmlnaHQiLCJvbkluaXQiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIm9uU3dpcGUiLCJldmUiLCJkaXJlY3Rpb24iLCJfc2NvcmVfc2lkZSIsInNlbGZfZXhjaGFuZ2UiLCJvcHBfZXhjaGFuZ2UiLCJ0ZW1wIiwib25Mb25nUHJlc3MiLCJyb3V0ZURldGFpbCIsInJvdXRlciIsInB1c2giLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQzhCM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQW1DLFNBQUFELHVCQUFBRSxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUVwQjt3QkFFYkcsU0FBUzs0QkFDUEMsV0FBVzs0QkFDWEMsWUFBWTs0QkFDWkMsZUFBZSxFQUFFOzRCQUNqQkMsYUFBWTs0QkFDWkMsYUFBWTs0QkFDWkMsY0FBYTs0QkFDYkMsY0FBYTs0QkFDYkMsWUFBVzs0QkFDWEMsaUJBQWdCOzRCQUNoQkMsa0JBQWlCOzRCQUNqQkMsa0JBQWlCOzRCQUNqQkMsbUJBQWtCO3dCQUNwQjt3QkFDQUM7NEJBQ0UsSUFBSSxDQUFDQyxJQUFJO3dCQUNYO3dCQUNBQTs0QkFDRUMsUUFBUUMsR0FBRyxDQUFDOzRCQUNaLElBQUksQ0FBQ1AsZUFBZSxHQUFHLElBQUksQ0FBQ0wsV0FBVzs0QkFDdkMsSUFBSSxDQUFDTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNMLFdBQVc7NEJBQ3hDLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDTCxZQUFZOzRCQUN6QyxJQUFJLENBQUNNLGlCQUFpQixHQUFHLElBQUksQ0FBQ0wsWUFBWTt3QkFDNUM7d0JBQ0FVLFNBQVFDLEdBQUc7NEJBQ1QsSUFBR0EsQUFBa0IsU0FBbEJBLElBQUlDLFNBQVMsRUFBVTtnQ0FDeEIsSUFBSSxDQUFDakIsVUFBVSxJQUFJO2dDQUNuQixJQUFJa0IsY0FBYztnQ0FDbEIsSUFBRyxJQUFJLENBQUNaLFVBQVUsS0FBS1ksYUFDckIsSUFBSSxDQUFDQyxhQUFhO2dDQUVwQixJQUFJLENBQUNiLFVBQVUsR0FBR1k7Z0NBQ2xCTCxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDUixVQUFVOzRCQUU3QixPQUFPLElBQUdVLEFBQWtCLFdBQWxCQSxJQUFJQyxTQUFTLEVBQVk7Z0NBQ2pDLElBQUksQ0FBQ2xCLFNBQVMsSUFBSTtnQ0FDbEIsSUFBSW1CLGNBQWM7Z0NBQ2xCLElBQUcsSUFBSSxDQUFDWixVQUFVLEtBQUtZLGFBQ3JCLElBQUksQ0FBQ0UsWUFBWTtnQ0FFbkIsSUFBSSxDQUFDZCxVQUFVLEdBQUdZOzRCQUNwQjt3QkFFRjt3QkFDQUM7NEJBQ0VOLFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLGdCQUFnQjs0QkFDakMsSUFBSVksT0FBTyxJQUFJLENBQUNaLGdCQUFnQjs0QkFDaEMsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNDLGlCQUFpQjs0QkFDOUMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR1c7d0JBQzNCO3dCQUNBRDs0QkFDRSxJQUFJQyxPQUFPLElBQUksQ0FBQ2QsZUFBZTs0QkFDL0IsSUFBSSxDQUFDQSxlQUFlLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0I7NEJBQzVDLElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdhO3dCQUMxQjt3QkFDQUMsYUFBWU4sR0FBRzs0QkFFYixJQUFJLENBQUNqQixTQUFTLEdBQUc7NEJBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHO3dCQUNwQjt3QkFFQXVCOzRCQUVFQyxRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FDVkMsS0FBSzs0QkFDUDt3QkFDRjtvQkFDRiJ9