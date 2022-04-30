(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users.form"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/differenceBy */ "./node_modules/lodash/differenceBy.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserForm",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      user: new _b_models_User__WEBPACK_IMPORTED_MODULE_4__["default"]({
        first_name: "",
        last_name: "",
        email: "",
        deleted_at: null,
        password: null,
        password_confirmation: null,
        roles: [],
        permissions: []
      }),
      loading: {
        user: false,
        save: false,
        refresh: false,
        password: false,
        email_verification: false,
        restore: false,
        "delete": false,
        block: false,
        avatar: false
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("rolesAndPermissions", ["roles", "permissions"])), {}, {
    exists: function exists() {
      return !!this.id;
    },
    passwordConfirmed: function passwordConfirmed() {
      return this.user.password === this.user.password_confirmation;
    }
  }),
  methods: {
    differenceById: function differenceById(item1, item2) {
      return lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3___default()(item1, item2, "id");
    },
    getUser: function getUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading.refresh = true;
                _context.next = 3;
                return _b_models_User__WEBPACK_IMPORTED_MODULE_4__["default"].include("roles", "permissions").$find(_this.id);

              case 3:
                _this.user = _context.sent;
                _this.loading.refresh = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveUser: function saveUser() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var exists;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading.save = true;
                exists = _this2.exists;
                _context2.next = 4;
                return _this2.user.save().then(function (response) {
                  _this2.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this2.user.fullname, " has been updated"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });

                  if (!exists) {
                    _this2.$router.push({
                      name: "users.edit",
                      params: {
                        id: _this2.user.id
                      }
                    });
                  }
                });

              case 4:
                _this2.loading.save = false;

              case 5:
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
                _this3.loading.avatar = true;
                _context3.next = 3;
                return _this3.user.deleteAvatar().then(function (r) {
                  _this3.getUser();

                  _this3.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this3.user.fullname, " Avatar has been deleted"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this3.loading.avatar = false;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    blockUser: function blockUser() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading.user = true;
                _context4.next = 3;
                return _this4.user.block().save().then(function (response) {
                  _this4.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this4.user.fullname, " has been blocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this4.loading.user = false;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    unblockUser: function unblockUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.loading.user = true;
                _context5.next = 3;
                return _this5.user.unblock().save().then(function (response) {
                  _this5.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this5.user.fullname, " has been unblocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this5.loading.user = false;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    restoreUser: function restoreUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.loading.restore = true;
                _context6.next = 3;
                return _this6.user.restore().then(function (response) {
                  _this6.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this6.user.fullname, " has been restored"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this6.loading.restore = false;

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },

    /**
     * Soft delete the User
     */
    deleteUser: function deleteUser() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.loading.user = true;
                _context7.next = 3;
                return _this7.user.softDelete().then(function (response) {
                  _this7.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this7.user.fullname, " has been trashed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                });

              case 3:
                _this7.loading.user = false;

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },

    /**
     * remove the user from the database => forcDelete
     */
    destroyUser: function destroyUser() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.user["delete"]().then(function (response) {
                  _this8.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this8.user.fullname, " has been destroyed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });

                  _this8.$router.push({
                    name: "users.index"
                  });
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    sendEmailVerification: function sendEmailVerification() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this9.loading.email_verification = true;
                _context9.next = 3;
                return _this9.user.sendEmailVerification();

              case 3:
                _this9.loading.email_verification = false;

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    confirmRestore: function confirmRestore() {
      var _this10 = this;

      this.$buefy.dialog.confirm({
        title: "Restoring user",
        message: "Are you sure you want to <b>restore</b> ".concat(this.user.fullname, "? This action can be undone."),
        confirmText: "Restore User",
        type: "is-primary",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this10.restoreUser();
        }
      });
    },
    confirmDelete: function confirmDelete() {
      var _this11 = this;

      if (this.user.isTrashed) {
        return this.confirmDestroy();
      }

      this.$buefy.dialog.confirm({
        title: "Deleting user",
        message: "Are you sure you want to <b>delete</b> ".concat(this.user.fullname, "? This action can be undone."),
        confirmText: "Delete User",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this11.deleteUser();
        }
      });
    },
    confirmDestroy: function confirmDestroy() {
      var _this12 = this;

      this.$buefy.dialog.confirm({
        title: "Destroying user",
        message: "Are you sure you want to <b>destroy</b> ".concat(this.user.fullname, "? This action can NOT be undone."),
        confirmText: "Destroy User",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this12.destroyUser();
        }
      });
    }
  },
  created: function created() {
    if (this.exists) {
      this.getUser();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050& ***!
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
    "section",
    [
      _c("title-bar", {
        staticClass: "p-1",
        attrs: {
          title: "Manage Users",
          menu: [
            { name: "users", to: { name: "users.index" } },
            {
              name: _vm.id ? "edit" : "new",
              to: {
                name: _vm.id ? "users.edit" : "users.new",
                params: { id: _vm.id }
              }
            }
          ]
        }
      }),
      _vm._v(" "),
      _c("div", {}, [
        _c("div", { staticClass: "columns is-marginless is-multiline" }, [
          _c("div", { staticClass: "column is-12 is-6-fullhd" }, [
            _c(
              "div",
              {
                staticClass: "card",
                class: {
                  "is-warning": _vm.user.isBlocked,
                  "is-danger": _vm.user.isTrashed
                }
              },
              [
                _c("div", { staticClass: "card-header" }, [
                  _c(
                    "div",
                    { staticClass: "card-header-title level" },
                    [
                      _c(
                        "p",
                        {},
                        [
                          _c("b-icon", {
                            attrs: { icon: "account-circle", size: "is-small" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Information")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.user && _vm.user.isTrashed
                        ? _c("b-tag", { attrs: { type: "is-danger" } }, [
                            _vm._v(
                              "Trashed\n                                " +
                                _vm._s(
                                  _vm.user.date_diff(
                                    new Date(_vm.user.deleted_at),
                                    new Date()
                                  )
                                ) +
                                "\n                                days ago\n                            "
                            )
                          ])
                        : _vm.user && _vm.user.isBlocked
                        ? _c("b-tag", { attrs: { type: "is-warning" } }, [
                            _vm._v(
                              "Blocked\n                                " +
                                _vm._s(
                                  _vm.user.date_diff(
                                    new Date(_vm.user.blocked_at),
                                    new Date()
                                  )
                                ) +
                                "\n                                days ago\n                            "
                            )
                          ])
                        : _vm._e()
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
                                _vm.user && _vm.user.avatar
                                  ? _c("img", {
                                      attrs: { src: _vm.user.avatar }
                                    })
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("h1", { staticClass: "title is-marginless" }, [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.user.fullname) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-tag", { attrs: { size: "is-large" } }, [
                                _vm._v(
                                  "\n                                        #" +
                                    _vm._s(_vm.user.id) +
                                    "\n                                    "
                                )
                              ])
                            ],
                            1
                          )
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
                          _c("b-field", { staticClass: "file" }, [
                            _c(
                              "p",
                              { staticClass: "control" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "is-light",
                                      loading: _vm.loading.avatar
                                    },
                                    on: { click: _vm.deleteAvatar }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Delete Avatar\n                                        "
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
                                  value: _vm.user.first_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "first_name", $$v)
                                  },
                                  expression: "user.first_name"
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
                                  value: _vm.user.last_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "last_name", $$v)
                                  },
                                  expression: "user.last_name"
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
                                  _vm.exists && !_vm.user.isEmailVerified
                                    ? "is-warning"
                                    : null,
                                message: _vm.user.isEmailVerified
                                  ? "This email is verified"
                                  : "This email is not verified"
                              }
                            },
                            [
                              _c("b-input", {
                                attrs: { id: "email", type: "email" },
                                model: {
                                  value: _vm.user.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email", $$v)
                                  },
                                  expression: "user.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.exists && !_vm.user.isEmailVerified
                            ? _c(
                                "b-field",
                                { attrs: { label: "Email verification" } },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "is-primary",
                                        loading: _vm.loading.email_verification,
                                        outlined: ""
                                      },
                                      on: { click: _vm.sendEmailVerification }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Resend the email verification\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.exists
                        ? _c(
                            "b-field",
                            { attrs: { horizontal: "", label: "" } },
                            [
                              _c(
                                "b-field",
                                {
                                  attrs: {
                                    label: "Password",
                                    "label-for": "password",
                                    expand: ""
                                  }
                                },
                                [
                                  _c("b-input", {
                                    attrs: { id: "password", type: "password" },
                                    model: {
                                      value: _vm.user.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "password", $$v)
                                      },
                                      expression: "user.password"
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
                                    type: !_vm.passwordConfirmed
                                      ? "is-danger"
                                      : null,
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
                                      value: _vm.user.password_confirmation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.user,
                                          "password_confirmation",
                                          $$v
                                        )
                                      },
                                      expression: "user.password_confirmation"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { horizontal: "", label: "Roles" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "field is-grouped is-grouped-multiline"
                            },
                            [
                              _vm._l(_vm.user.roles, function(role) {
                                return _c(
                                  "b-checkbox-button",
                                  {
                                    key: role.id,
                                    attrs: {
                                      "native-value": role,
                                      type: "is-primary"
                                    },
                                    model: {
                                      value: _vm.user.roles,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "roles", $$v)
                                      },
                                      expression: "user.roles"
                                    }
                                  },
                                  [_c("span", [_vm._v(_vm._s(role.name))])]
                                )
                              }),
                              _vm._v(" "),
                              _vm._l(
                                _vm.differenceById(_vm.roles, _vm.user.roles),
                                function(role) {
                                  return _c(
                                    "b-checkbox-button",
                                    {
                                      key: role.id,
                                      attrs: {
                                        "native-value": role,
                                        type: "is-primary"
                                      },
                                      model: {
                                        value: _vm.user.roles,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "roles", $$v)
                                        },
                                        expression: "user.roles"
                                      }
                                    },
                                    [_c("span", [_vm._v(_vm._s(role.name))])]
                                  )
                                }
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm.user.permissions
                        ? _c(
                            "b-field",
                            { attrs: { horizontal: "", label: "Permissions" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "field is-grouped is-grouped-multiline"
                                },
                                [
                                  _vm._l(_vm.user.permissions, function(
                                    permission
                                  ) {
                                    return _c(
                                      "b-checkbox-button",
                                      {
                                        key: permission.id,
                                        attrs: {
                                          "native-value": permission,
                                          type: "is-primary"
                                        },
                                        model: {
                                          value: _vm.user.permissions,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "permissions",
                                              $$v
                                            )
                                          },
                                          expression: "user.permissions"
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(permission.name))
                                        ])
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.differenceById(
                                      _vm.permissions,
                                      _vm.user.permissions
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
                                          model: {
                                            value: _vm.user.permissions,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "permissions",
                                                $$v
                                              )
                                            },
                                            expression: "user.permissions"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(permission.name))
                                          ])
                                        ]
                                      )
                                    }
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("hr"),
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
                                      loading: _vm.loading.save,
                                      disabled:
                                        _vm.user.isTrashed ||
                                        !_vm.passwordConfirmed
                                    },
                                    on: { click: _vm.saveUser }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.exists ? "Save" : "Create") +
                                        "\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.exists
                                  ? _c("b-button", {
                                      attrs: {
                                        type: "is-default",
                                        loading: _vm.loading.refresh,
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
                    1
                  )
                ])
              ]
            )
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
              _c("div", { staticClass: "card-content" }, [
                _vm.exists
                  ? _c(
                      "div",
                      [
                        _c(
                          "b-field",
                          { attrs: { horizontal: "", label: "Block" } },
                          [
                            _c(
                              "b-field",
                              [
                                _vm.user.isBlocked
                                  ? _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          type: "is-warning",
                                          loading: _vm.loading.block,
                                          "icon-left": "restore"
                                        },
                                        on: { click: _vm.unblockUser }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Unblock\n                                    "
                                        )
                                      ]
                                    )
                                  : _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          "icon-left": "cancel",
                                          type: "is-warning",
                                          loading: _vm.loading.block
                                        },
                                        on: { click: _vm.blockUser }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Block\n                                    "
                                        )
                                      ]
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
                          { attrs: { horizontal: "", label: "Delete" } },
                          [
                            _c("b-field", [
                              _c(
                                "div",
                                { staticClass: "buttons" },
                                [
                                  _vm.user.isTrashed
                                    ? _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            type: "is-info",
                                            "icon-left": "restore",
                                            loading: _vm.loading.restore
                                          },
                                          on: { click: _vm.confirmRestore }
                                        },
                                        [_vm._v("Restore")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "is-danger",
                                        loading: _vm.loading.delete,
                                        "icon-left": "delete-outline"
                                      },
                                      on: { click: _vm.confirmDelete }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.user.isTrashed
                                            ? "Destroy"
                                            : "Delete"
                                        )
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
                  : _vm._e()
              ])
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

/***/ "./resources/js/backend/views/users/UserForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=6e0fd050& */ "./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/users/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=6e0fd050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);