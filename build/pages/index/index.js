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
                                "demo-page"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
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
                            width: "192px",
                            height: "490px",
                            backgroundColor: "#000000",
                            justifyContent: "space-between",
                            alignItems: "center"
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
                            fontSize: "100px",
                            color: "#ffffff"
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
                            score_self: 0
                        },
                        handleSwipe (direction) {
                            if ('up' === direction) this.score_self += 1;
                            else if ('down' === direction) this.score_opp += 1;
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
                                    return _vm_.handleSwipe(evt);
                                }
                            }
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "block1"
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
                                    "block2"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL015Rmlyc3RBcHAvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL015Rmlyc3RBcHAvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vTXlGaXJzdEFwcC9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4yXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMlwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIiBAc3dpcGU9XCJoYW5kbGVTd2lwZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJibG9jazFcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwic2NvcmVcIj57eyBzY29yZV9vcHAgfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrMlwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJzY29yZVwiPnt7IHNjb3JlX3NlbGYgfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyDpobXpnaLnuqfnu4Tku7bnmoTmlbDmja7mqKHlnovvvIzlvbHlk43kvKDlhaXmlbDmja7nmoTopobnm5bmnLrliLbvvJpwcml2YXRl5YaF5a6a5LmJ55qE5bGe5oCn5LiN5YWB6K646KKr6KaG55uWXG4gIHByaXZhdGU6IHtcbiAgICBzY29yZV9vcHA6IDAsXG4gICAgc2NvcmVfc2VsZjogMFxuICB9LFxuXG4gIGhhbmRsZVN3aXBlKGRpcmVjdGlvbil7XG4gICAgaWYoZGlyZWN0aW9uID09PSAndXAnKXtcbiAgICAgIHRoaXMuc2NvcmVfc2VsZiArPSAxO1xuICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09ICdkb3duJyl7XG4gICAgICB0aGlzLnNjb3JlX29wcCArPSAxO1xuICAgIH1cbiAgfSxcblxuICByb3V0ZURldGFpbCgpIHtcbiAgICAvLyDot7PovazliLDlupTnlKjlhoXnmoTmn5DkuKrpobXpnaLvvIxyb3V0ZXLnlKjms5Xor6bop4HvvJrmlofmoaMtPuaOpeWPoy0+6aG16Z2i6Lev55SxXG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgdXJpOiBcIi9wYWdlcy9kZXRhaWxcIlxuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uZGVtby1wYWdlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDoxOTJweDtcbiAgaGVpZ2h0OjQ5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2sxLC5ibG9jazIge1xuICB3aWR0aDogMTkycHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2sxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FjN2ZmO1xufVxuLmJsb2NrMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNhMzM7XG59XG4uc2NvcmV7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWJhMDc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwic2NvcmVfb3BwIiwic2NvcmVfc2VsZiIsImhhbmRsZVN3aXBlIiwiZGlyZWN0aW9uIiwicm91dGVEZXRhaWwiLCJyb3V0ZXIiLCJwdXNoIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1kzQixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBbUMsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXBCO3dCQUViRyxTQUFTOzRCQUNQQyxXQUFXOzRCQUNYQyxZQUFZO3dCQUNkO3dCQUVBQyxhQUFZQyxTQUFTOzRCQUNuQixJQUFHQSxBQUFjLFNBQWRBLFdBQ0QsSUFBSSxDQUFDRixVQUFVLElBQUk7aUNBQ2QsSUFBR0UsQUFBYyxXQUFkQSxXQUNSLElBQUksQ0FBQ0gsU0FBUyxJQUFJO3dCQUV0Qjt3QkFFQUk7NEJBRUVDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUNWQyxLQUFLOzRCQUNQO3dCQUNGO29CQUNGIn0=