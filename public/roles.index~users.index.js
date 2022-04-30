(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles.index~users.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FilterBar",
  components: {},
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      "default": {
        object: {
          label: "Filters",
          type: "search"
        },
        value: null
      }
    },
    filters: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      filter: this.value
    };
  },
  watch: {
    /**
     * When v-model is changed set the new selected item.
     */
    value: function value(_value) {
      this.filter = _value;
    }
  },
  computed: {
    isFiltered: function isFiltered() {
      return !!(this.filter && this.filter.value);
    },
    filterType: function filterType() {
      if (!this.filter) {
        return null;
      }

      return this.filter.object.type;
    }
  },
  methods: {
    clearFilter: function clearFilter() {
      this.filter.value = null;
      this.$emit('input', this.filter);
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "b-field",
    [
      _c(
        "p",
        { staticClass: "control" },
        [
          _c(
            "b-dropdown",
            {
              attrs: { "aria-role": "list" },
              on: {
                change: function($event) {
                  _vm.filter.value = null
                }
              },
              model: {
                value: _vm.filter.object,
                callback: function($$v) {
                  _vm.$set(_vm.filter, "object", $$v)
                },
                expression: "filter.object"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "button is-small",
                  attrs: { slot: "trigger" },
                  slot: "trigger"
                },
                [
                  _c("span", [_vm._v(_vm._s(_vm.filter.object.label))]),
                  _vm._v(" "),
                  _c("b-icon", {
                    attrs: { icon: "chevron-down", size: "is-small" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.filters, function(filter) {
                return _c(
                  "b-dropdown-item",
                  { key: filter.field, attrs: { value: filter } },
                  [_vm._v(_vm._s(filter.label))]
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      [
        _vm.filterType == "select"
          ? _c(
              "b-select",
              {
                attrs: { placeholder: "Select", size: "is-small" },
                on: {
                  input: function($event) {
                    return _vm.$emit("input", _vm.filter)
                  }
                },
                model: {
                  value: _vm.filter.value,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "value", $$v)
                  },
                  expression: "filter.value"
                }
              },
              _vm._l(_vm.filter.object.options, function(option) {
                return _c(
                  "option",
                  { key: option, domProps: { value: option } },
                  [
                    _vm._v(
                      "\n                " + _vm._s(option) + "\n            "
                    )
                  ]
                )
              }),
              0
            )
          : _vm.filterType == "date"
          ? _c("b-datepicker", {
              attrs: {
                placeholder: "Select a Date",
                icon: "calendar",
                "trap-focus": "",
                size: "is-small",
                "max-date": _vm.filter.object.maxDate || null,
                "min-date": _vm.filter.object.minDate || null
              },
              on: {
                input: function($event) {
                  return _vm.$emit("input", _vm.filter)
                }
              },
              model: {
                value: _vm.filter.value,
                callback: function($$v) {
                  _vm.$set(_vm.filter, "value", $$v)
                },
                expression: "filter.value"
              }
            })
          : _c("b-input", {
              attrs: {
                icon: "magnify",
                type: "search",
                placeholder: "Search...",
                size: "is-small"
              },
              on: {
                input: function($event) {
                  return _vm.$emit("input", _vm.filter)
                }
              },
              model: {
                value: _vm.filter.value,
                callback: function($$v) {
                  _vm.$set(_vm.filter, "value", $$v)
                },
                expression: "filter.value"
              }
            })
      ],
      _vm._v(" "),
      _c("b-button", {
        attrs: {
          size: "is-small",
          "icon-left": "close",
          disabled: !_vm.isFiltered
        },
        on: { click: _vm.clearFilter }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/backend/components/FilterBar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/components/FilterBar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterBar.vue?vue&type=template&id=3748ff3b& */ "./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b&");
/* harmony import */ var _FilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBar.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/FilterBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/FilterBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterBar.vue?vue&type=template&id=3748ff3b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/FilterBar.vue?vue&type=template&id=3748ff3b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterBar_vue_vue_type_template_id_3748ff3b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);