(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var _b_models_Activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/models/Activity */ "./resources/js/backend/models/Activity.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _b_components_FilterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/components/FilterBar */ "./resources/js/backend/components/FilterBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ActivitiesIndex",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilterBar: _b_components_FilterBar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {},
  data: function data() {
    return {
      activities: [],
      isLoading: false,
      //paginate
      pagination: {
        current_page: 1,
        from: 0,
        last_page: 1,
        path: "",
        per_page: 0,
        to: 0,
        total: 0
      },
      sort: {
        field: "id",
        order: "-",
        // '-' or ''
        value: "-id"
      },
      filter: {
        object: {
          type: "text",
          field: false,
          label: "Filters"
        },
        value: null
      },
      isPaginationSimple: false,
      paginationPosition: "bottom"
    };
  },
  computed: {
    total: function total() {
      return this.pagination.total;
    },
    filters: function filters() {
      return [{
        field: "id",
        label: "ID",
        type: "number"
      }, {
        field: "log_name",
        type: "search",
        label: "Log Name"
      }, {
        field: "description",
        type: "search",
        label: "Description"
      }];
    },
    isFiltered: function isFiltered() {
      return !!this.filter.object.field;
    },
    isSorted: function isSorted() {
      return this.sort.value;
    }
  },
  methods: {
    computeType: function computeType(desc) {
      if (desc == "created") {
        return "is-light";
      }

      if (desc == "deleted") {
        return "is-danger";
      }

      return null;
    },
    getActivities: function getActivities() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var activities, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                activities = _b_models_Activity__WEBPACK_IMPORTED_MODULE_2__["default"].page(_this.pagination.current_page);

                if (_this.isSorted) {
                  activities.orderBy(_this.sort.value);
                }

                if (_this.isFiltered) {
                  activities.where(_this.filter.object.field, _this.filter.value);
                }

                _context.next = 6;
                return activities.get().then(function (response) {
                  _this.activities = response.data;
                  _this.pagination = response.meta;
                });

              case 6:
                response = _context.sent;
                _this.isLoading = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    refresh: function refresh() {
      this.getActivities();
    },
    onPageChange: function onPageChange(page) {
      this.pagination.current_page = page;
      this.getActivities();
    },
    onSort: function onSort(field, order) {
      this.sort.field = field;
      this.sort.order = order == "desc" ? "-" : "";
      this.sort.value = "".concat(this.sort.order).concat(this.sort.field);
      this.getActivities();
    },
    onFilter: lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      this.getActivities();
    }, 500)
  },
  created: function created() {
    this.getActivities();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var _b_models_Role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/models/Role */ "./resources/js/backend/models/Role.js");
/* harmony import */ var _b_models_Permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/models/Permission */ "./resources/js/backend/models/Permission.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/differenceBy */ "./node_modules/lodash/differenceBy.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoleIndex",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("rolesAndPermissions", ["roles", "permissions", "loading"])),
  methods: {
    onChange: lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(function (role) {
      this.saveRole(role);
    }, 300),
    differencePermissions: function differencePermissions(p1, p2) {
      return lodash_differenceBy__WEBPACK_IMPORTED_MODULE_5___default()(p1, p2, "id");
    },
    saveRole: function saveRole(role) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return role.save().then(function (response) {
                  _this.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(role.name, " has been updated"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          title: "Manage Activities",
          menu: [{ name: "activities", to: { name: "activities.index" } }]
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "columns is-marginless" }),
      _vm._v(" "),
      _c("div", { staticClass: "columns is-marginless" }, [
        _c("div", { staticClass: "column is-12" }, [
          _c(
            "div",
            { staticClass: "bb-table" },
            [
              _c("div", { staticClass: "bb-table-header" }, [
                _c("div", { staticClass: "level-left" }, [
                  _c("div", { staticClass: "title" }, [_vm._v("activities")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.pagination.from) +
                          "\n                            "
                      ),
                      _c("b-icon", {
                        attrs: { icon: "chevron-right", size: "is-small" }
                      }),
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.pagination.to) +
                          "\n                            :\n                            " +
                          _vm._s(_vm.total) +
                          "\n                        "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("filter-bar", {
                        attrs: { filters: _vm.filters },
                        on: { input: _vm.onFilter },
                        model: {
                          value: _vm.filter,
                          callback: function($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "level-right" }, [
                  _c("div", { staticClass: "bb-buttons-group" }, [
                    _c(
                      "div",
                      { staticClass: "buttons has-addons are-small" },
                      [
                        _c("b-button", {
                          attrs: {
                            loading: _vm.isLoading,
                            "icon-left": "refresh"
                          },
                          on: { click: _vm.refresh }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-table",
                {
                  attrs: {
                    data: _vm.activities,
                    loading: _vm.isLoading,
                    paginated: "",
                    "backend-pagination": "",
                    total: _vm.total,
                    "per-page": _vm.pagination.per_page,
                    "current-page": _vm.pagination.current_page,
                    "pagination-simple": _vm.isPaginationSimple,
                    "pagination-position": _vm.paginationPosition,
                    "pagination-size": "is-small",
                    "backend-sorting": "",
                    "default-sort-direction": "desc",
                    "default-sort": "created_at",
                    scrollable: ""
                  },
                  on: {
                    "page-change": _vm.onPageChange,
                    "update:currentPage": function($event) {
                      return _vm.$set(_vm.pagination, "current_page", $event)
                    },
                    "update:current-page": function($event) {
                      return _vm.$set(_vm.pagination, "current_page", $event)
                    },
                    sort: _vm.onSort
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(props) {
                        return [
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "id",
                                label: "ID",
                                numeric: "",
                                sortable: "",
                                width: "40"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(props.row.id) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "log_name",
                                label: "Log Name",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(props.row.log_name) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "description",
                                label: "Description",
                                sortable: ""
                              }
                            },
                            [
                              _c(
                                "b-tag",
                                {
                                  attrs: {
                                    type: _vm.computeType(props.row.description)
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(props.row.description) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: { field: "subject_id", label: "Subject" }
                            },
                            [
                              _c(
                                "b-taglist",
                                { attrs: { attached: "" } },
                                [
                                  _c("b-tag", [
                                    _vm._v(_vm._s(props.row.subject_id))
                                  ]),
                                  _vm._v(" "),
                                  _c("b-tag", [
                                    _vm._v(_vm._s(props.row.subject_type))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            { attrs: { field: "causer_id", label: "Causer" } },
                            [
                              props.row.user
                                ? _c(
                                    "b-tag",
                                    { attrs: { type: "is-primary" } },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            props.row.user.first_name +
                                              " " +
                                              props.row.user.last_name
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                : props.row.causer_id
                                ? _c(
                                    "b-taglist",
                                    { attrs: { attached: "" } },
                                    [
                                      _c("b-tag", [
                                        _vm._v(_vm._s(props.row.causer_id))
                                      ]),
                                      _vm._v(" "),
                                      _c("b-tag", [
                                        _vm._v(_vm._s(props.row.causer_type))
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "created_at",
                                label: "Created At",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    new Date(
                                      props.row.created_at
                                    ).toLocaleDateString()
                                  ) +
                                  "\n                        "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c("template", { slot: "empty" }, [
                    _c("section", { staticClass: "section" }, [
                      _c(
                        "div",
                        {
                          staticClass: "content has-text-grey has-text-centered"
                        },
                        [
                          _c("p", { staticClass: "title is-3" }, [
                            _vm._v(
                              "\n                                    🙌\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Nothing here.")])
                        ]
                      )
                    ])
                  ])
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          title: "Manage Roles",
          menu: [{ name: "roles", to: "/roles/index" }]
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "columns is-marginless is-multiline" },
        _vm._l(_vm.roles, function(role) {
          return _c("div", { key: role.id, staticClass: "column is-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "card-header-title level" }, [
                  _c(
                    "h6",
                    { staticClass: "title" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(role.name) +
                          "\n                            "
                      ),
                      _c("b-tag", { attrs: { rounded: "" } }, [
                        _vm._v(_vm._s(role.users_count))
                      ])
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
                  _c("b-loading", {
                    attrs: {
                      "is-full-page": false,
                      active: _vm.loading.permissions
                    },
                    on: {
                      "update:active": function($event) {
                        return _vm.$set(_vm.loading, "permissions", $event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  role.name == "god"
                    ? _c("div", [_c("p", [_vm._v("A god can do everthing")])])
                    : _c(
                        "div",
                        {
                          staticClass: "field is-grouped is-grouped-multiline"
                        },
                        [
                          _vm._l(role.permissions, function(permission) {
                            return _c(
                              "b-checkbox-button",
                              {
                                key: permission.id,
                                attrs: {
                                  "native-value": permission,
                                  type: "is-light"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.onChange(role)
                                  }
                                },
                                model: {
                                  value: role.permissions,
                                  callback: function($$v) {
                                    _vm.$set(role, "permissions", $$v)
                                  },
                                  expression: "role.permissions"
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(permission.name))])]
                            )
                          }),
                          _vm._v(" "),
                          _vm._l(
                            _vm.differencePermissions(
                              _vm.permissions,
                              role.permissions
                            ),
                            function(permission) {
                              return _c(
                                "b-checkbox-button",
                                {
                                  key: permission.id,
                                  attrs: {
                                    "native-value": permission,
                                    type: "is-primary"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.onChange(role)
                                    }
                                  },
                                  model: {
                                    value: role.permissions,
                                    callback: function($$v) {
                                      _vm.$set(role, "permissions", $$v)
                                    },
                                    expression: "role.permissions"
                                  }
                                },
                                [_c("span", [_vm._v(_vm._s(permission.name))])]
                              )
                            }
                          )
                        ],
                        2
                      )
                ],
                1
              )
            ])
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/models/Activity.js":
/*!*************************************************!*\
  !*** ./resources/js/backend/models/Activity.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./resources/js/backend/models/Model.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Activity = /*#__PURE__*/function (_Model) {
  _inherits(Activity, _Model);

  var _super = _createSuper(Activity);

  function Activity() {
    _classCallCheck(this, Activity);

    return _super.apply(this, arguments);
  }

  _createClass(Activity, [{
    key: "resource",
    value: function resource() {
      return "activities";
    }
  }]);

  return Activity;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/backend/views/activities/ActivitiesIndex.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/backend/views/activities/ActivitiesIndex.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivitiesIndex.vue?vue&type=template&id=1d362dfd& */ "./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd&");
/* harmony import */ var _ActivitiesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivitiesIndex.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActivitiesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/activities/ActivitiesIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitiesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivitiesIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitiesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivitiesIndex.vue?vue&type=template&id=1d362dfd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/activities/ActivitiesIndex.vue?vue&type=template&id=1d362dfd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitiesIndex_vue_vue_type_template_id_1d362dfd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue":
/*!********************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleIndex.vue?vue&type=template&id=8091ecc0& */ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&");
/* harmony import */ var _RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleIndex.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/roles/RoleIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleIndex.vue?vue&type=template&id=8091ecc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);