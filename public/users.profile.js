(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users.profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TitleBar",
  props: {
    title: {
      type: String,
      "default": function _default() {
        return "";
      }
    },
    menu: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: {},
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var _b_models_CurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/models/CurrentUser */ "./resources/js/backend/models/CurrentUser.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserAccount",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      avatar: null,
      password: null,
      password_confirmation: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("auth", {
    currentUser: function currentUser(state) {
      return state.user;
    },
    loading: function loading(state) {
      return state.loading;
    }
  })), {}, {
    id: function id() {
      return this.currentUser.id;
    },
    exists: function exists() {
      return !!this.id;
    },
    passwordConfirmed: function passwordConfirmed() {
      return this.password === this.password_confirmation;
    },
    passwordValidated: function passwordValidated() {
      if (this.password == null || this.password == "") {
        return false;
      }

      return this.passwordConfirmed;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("auth", ["getUser" // -> this.foo()
  ])), {}, {
    saveUser: function saveUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading.save = true;
                _context.next = 3;
                return _this.currentUser.save().then(function (response) {
                  _this.$buefy.snackbar.open({
                    duration: 2000,
                    message: "Your account has been updated",
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this.loading.save = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeAvatar: function changeAvatar() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading.avatar = true;
                formData = new FormData();
                formData.append("avatar", _this2.avatar);
                _context2.next = 5;
                return _this2.currentUser.updateAvatar(formData).then(function (r) {
                  _this2.$buefy.snackbar.open({
                    duration: 2000,
                    message: "Your Avatar has been changed",
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 5:
                _this2.loading.avatar = false;
                _this2.avatar = null;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteAvatar: function deleteAvatar() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.avatar = null;
                _this3.loading.avatar = true;
                _context3.next = 4;
                return _this3.currentUser.deleteAvatar().then(function (r) {
                  _this3.getUser();

                  _this3.$buefy.snackbar.open({
                    duration: 2000,
                    message: "Your Avatar has been deleted",
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 4:
                _this3.loading.avatar = false;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    changePassword: function changePassword() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading.password = true;
                _context4.next = 3;
                return _this4.currentUser.updatePassword({
                  password: _this4.password,
                  password_confirmation: _this4.password_confirmation
                }).then(function (r) {
                  _this4.$buefy.snackbar.open({
                    duration: 2000,
                    message: "Your password has been changed",
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });

                  _this4.password = null;
                  _this4.password_confirmation = null;
                });

              case 3:
                _this4.loading.password = false;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    deleteUser: function deleteUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.currentUser["delete"]().then(function (response) {
                  window.location.href = "/logout";
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    confirmDestroy: function confirmDestroy() {
      var _this6 = this;

      this.$buefy.dialog.confirm({
        title: "Destroying your account",
        message: "Are you sure you want to <b>destroy</b> your account? This action can NOT be undone.",
        confirmText: "Destroy me",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this6.deleteUser();
        }
      });
    }
  }),
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bb-title-bar" }, [
    _c("div", { staticClass: "level" }, [
      _c("div", { staticClass: "level-left" }, [
        _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c(
          "nav",
          { staticClass: "breadcrumb", attrs: { "aria-label": "breadcrumbs" } },
          [
            _c(
              "ul",
              _vm._l(_vm.menu, function(menuItem, index) {
                return _c(
                  "li",
                  { key: index },
                  [
                    menuItem.to
                      ? _c("router-link", { attrs: { to: menuItem.to } }, [
                          _vm._v(_vm._s(menuItem.name))
                        ])
                      : menuItem.href
                      ? _c("a", { attrs: { href: menuItem.href } }, [
                          _vm._v(_vm._s(menuItem.name))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("title-bar", {
        staticClass: "p-1",
        attrs: {
          title: "My Account",
          menu: [{ name: "dashboard", to: { name: "dashboard" } }]
        }
      }),
      _vm._v(" "),
      _c("div", {}, [
        _c("div", { staticClass: "columns is-marginless is-multiline" }, [
          _c("div", { staticClass: "column is-12 is-6-fullhd" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c(
                  "p",
                  { staticClass: "card-header-title" },
                  [
                    _c("b-icon", {
                      attrs: { icon: "account-circle", size: "is-small" }
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Information")])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "b-field",
                      { attrs: { horizontal: "" } },
                      [
                        _c("template", { slot: "label" }, [
                          _c(
                            "figure",
                            {
                              staticClass:
                                "image avatar is-128x128 is-inline-block"
                            },
                            [
                              _vm.currentUser && _vm.currentUser.avatar
                                ? _c("img", {
                                    attrs: { src: _vm.currentUser.avatar }
                                  })
                                : _vm._e()
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("h1", { staticClass: "title is-marginless" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.currentUser.fullname) +
                                "\n                                    "
                            )
                          ])
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Avatar" } },
                      [
                        _c(
                          "b-field",
                          { staticClass: "file" },
                          [
                            _c(
                              "b-upload",
                              {
                                attrs: { accept: "image/*" },
                                on: { input: _vm.changeAvatar },
                                model: {
                                  value: _vm.avatar,
                                  callback: function($$v) {
                                    _vm.avatar = $$v
                                  },
                                  expression: "avatar"
                                }
                              },
                              [
                                _c("b-loading", {
                                  attrs: {
                                    "is-full-page": false,
                                    active: _vm.loading.avatar
                                  },
                                  on: {
                                    "update:active": function($event) {
                                      return _vm.$set(
                                        _vm.loading,
                                        "avatar",
                                        $event
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { staticClass: "button is-primary" },
                                  [
                                    _c("b-icon", {
                                      attrs: { icon: "cloud-upload-outline" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Upload")])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "control" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: { type: "is-light" },
                                    on: { click: _vm.deleteAvatar }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Delete\n                                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Information" } },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "First Name",
                              "label-for": "first_name",
                              expand: ""
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { id: "first_name" },
                              model: {
                                value: _vm.currentUser.first_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentUser, "first_name", $$v)
                                },
                                expression: "currentUser.first_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Last Name",
                              "label-for": "last_name",
                              expand: ""
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { id: "last_name" },
                              model: {
                                value: _vm.currentUser.last_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentUser, "last_name", $$v)
                                },
                                expression: "currentUser.last_name"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "" } },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Email",
                              "label-for": "email",
                              type:
                                _vm.exists && !_vm.currentUser.isEmailVerified
                                  ? "is-warning"
                                  : null,
                              message: _vm.currentUser.isEmailVerified
                                ? "Your email is verified"
                                : "Your email is not verified"
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { id: "email", type: "email" },
                              model: {
                                value: _vm.currentUser.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentUser, "email", $$v)
                                },
                                expression: "currentUser.email"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Roles" } },
                      [
                        _c(
                          "div",
                          { staticClass: "buttons" },
                          _vm._l(_vm.currentUser.roles, function(role) {
                            return _c(
                              "b-button",
                              { key: role.id, attrs: { type: "is-primary" } },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(role.name) +
                                    "\n                                    "
                                )
                              ]
                            )
                          }),
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm.currentUser.permissions &&
                    _vm.currentUser.permissions.length > 0
                      ? [
                          _c(
                            "b-field",
                            { attrs: { horizontal: "", label: "Permissions" } },
                            [
                              _c(
                                "div",
                                { staticClass: "buttons" },
                                _vm._l(_vm.currentUser.permissions, function(
                                  permission
                                ) {
                                  return _c(
                                    "b-button",
                                    {
                                      key: permission.id,
                                      attrs: { type: "is-primary" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(permission.name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("hr")
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "" } },
                      [
                        _c("b-field", [
                          _c(
                            "p",
                            { staticClass: "control has-text-right" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "is-primary",
                                    loading: _vm.loading.save
                                  },
                                  on: { click: _vm.saveUser }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Save\n                                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.exists
                                ? _c("b-button", {
                                    attrs: {
                                      type: "is-default",
                                      loading: _vm.loading.get,
                                      "icon-left": "refresh"
                                    },
                                    on: { click: _vm.getUser }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "card-header-title" }, [
                  _c(
                    "p",
                    [
                      _c("b-icon", {
                        attrs: { icon: "security", size: "is-small" }
                      }),
                      _vm._v(
                        "\n                                Security\n                            "
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-content" },
                [
                  _c(
                    "b-field",
                    { attrs: { horizontal: "", label: "Change password" } },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "New Password",
                            "label-for": "password",
                            expand: ""
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { id: "password", type: "password" },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Confirm Password",
                            "label-for": "password_confirmation",
                            expand: "",
                            type: !_vm.passwordConfirmed ? "is-danger" : null,
                            message: !_vm.passwordConfirmed
                              ? "The passwords does not match"
                              : null
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              id: "password_confirmation",
                              type: "password"
                            },
                            model: {
                              value: _vm.password_confirmation,
                              callback: function($$v) {
                                _vm.password_confirmation = $$v
                              },
                              expression: "password_confirmation"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { horizontal: "", label: "" } },
                    [
                      _c("b-field", [
                        _c(
                          "p",
                          { staticClass: "control has-text-right" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-primary",
                                  loading: _vm.loading.password,
                                  disabled: !_vm.passwordValidated
                                },
                                on: { click: _vm.changePassword }
                              },
                              [
                                _vm._v(
                                  "\n                                        Change password\n                                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { horizontal: "", label: "Delete" } },
                    [
                      _c("b-field", [
                        _c(
                          "div",
                          { staticClass: "buttons" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { type: "is-danger", outlined: "" },
                                on: { click: _vm.confirmDestroy }
                              },
                              [
                                _vm._v(
                                  "\n                                        Delete my account\n                                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=template&id=4d8683ea& */ "./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&");
/* harmony import */ var _TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/TitleBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=template&id=4d8683ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/users/UserAccount.vue":
/*!**********************************************************!*\
  !*** ./resources/js/backend/views/users/UserAccount.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=template&id=6427f6d1& */ "./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1&");
/* harmony import */ var _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAccount.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/users/UserAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAccount.vue?vue&type=template&id=6427f6d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserAccount.vue?vue&type=template&id=6427f6d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccount_vue_vue_type_template_id_6427f6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);