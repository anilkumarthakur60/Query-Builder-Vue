(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard~users.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b/components/charts/LineChart */ "./resources/js/backend/components/charts/LineChart.vue");
/* harmony import */ var _b_components_charts_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/charts/BarChart */ "./resources/js/backend/components/charts/BarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CardChartFull",
  components: {
    LineChart: _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _b_components_charts_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    type: {
      type: String,
      "default": "line"
    },
    height: {
      type: String,
      "default": "200px"
    },
    chartData: {
      type: [Array, Object]
    },
    chartStyle: {
      type: [Array, Object]
    }
  },
  data: function data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b/components/charts/LineChart */ "./resources/js/backend/components/charts/LineChart.vue");
/* harmony import */ var _b_components_charts_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/charts/BarChart */ "./resources/js/backend/components/charts/BarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CardChartight",
  components: {
    LineChart: _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _b_components_charts_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    type: {
      type: String,
      "default": "line"
    },
    height: {
      type: String,
      "default": "200px"
    },
    chartData: {
      type: [Array, Object]
    },
    chartStyle: {
      type: [Array, Object]
    }
  },
  data: function data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BarChart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    mode: {
      type: String,
      "default": "full",
      validator: function validator(value) {
        return ["light", "full"].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      defaultOptions: {
        light: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }]
          }
        },
        full: {
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }],
            yAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }]
          }
        }
      }
    };
  },
  computed: {
    finalOptions: function finalOptions() {
      var _this$options;

      return (_this$options = this.options) !== null && _this$options !== void 0 ? _this$options : this.defaultOptions[this.mode];
    }
  },
  methods: {},
  mounted: function mounted() {
    this.renderChart(this.chartData, this.finalOptions);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LineChart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    mode: {
      type: String,
      "default": "full",
      validator: function validator(value) {
        return ["light", "full"].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      defaultOptions: {
        light: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }]
          }
        },
        full: {
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }],
            yAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }]
          }
        }
      }
    };
  },
  computed: {
    finalOptions: function finalOptions() {
      var _this$options;

      return (_this$options = this.options) !== null && _this$options !== void 0 ? _this$options : this.defaultOptions[this.mode];
    }
  },
  methods: {},
  mounted: function mounted() {
    this.renderChart(this.chartData, this.finalOptions);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _b_components_cards_CardChartLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/components/cards/CardChartLight */ "./resources/js/backend/components/cards/CardChartLight.vue");
/* harmony import */ var _b_components_cards_CardChartFull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/components/cards/CardChartFull */ "./resources/js/backend/components/cards/CardChartFull.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersChart",
  components: {
    CardChartLight: _b_components_cards_CardChartLight__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardChartFull: _b_components_cards_CardChartFull__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    mode: {
      type: String,
      "default": "full"
    },
    type: {
      type: String,
      "default": "line"
    },
    cumulative: {
      type: Boolean,
      "default": false
    },
    height: {
      type: String,
      "default": "200px"
    }
  },
  data: function data() {
    return {
      title: "New Users",
      usersData: null,
      overview: null,
      activity: null,
      labels: null,
      startDate: moment().subtract(14, "days").format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      chartStyle: {
        height: "100%",
        width: "100%",
        position: "relative"
      },
      loading: false
    };
  },
  watch: {
    startDate: function startDate() {
      this.getMetrics();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["charts"])), {}, {
    chartData: function chartData() {
      if (!this.usersData) {
        return null;
      }

      return {
        labels: this.labels,
        datasets: [{
          label: "Users",
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          borderWidth: 1.5,
          lineTension: 0.3,
          borderColor: this.charts.colors[0],
          backgroundColor: function backgroundColor(context) {
            var color = tinycolor(context.dataset.borderColor);
            var gradient = context.chart.ctx.createLinearGradient(0, context.chart.height, 0, 0);
            gradient.addColorStop(0, color.setAlpha(0.01).toRgbString());
            gradient.addColorStop(1, color.setAlpha(0.2).toRgbString());
            return gradient;
          },
          data: this.usersData
        }]
      };
    },
    rawData: function rawData() {
      if (!this.usersData) {
        return null;
      }

      return Object.values(this.usersData);
    },
    sum: function sum() {
      if (!this.rawData) {
        return 0;
      }

      return this.rawData.reduce(function (previous, current) {
        return previous + current;
      }, 0);
    },
    total: function total() {
      if (!this.overview) {
        return 0;
      }

      return this.overview.total;
    },
    active: function active() {
      if (!this.overview) {
        return 0;
      }

      return this.overview.active;
    },
    variation: function variation() {
      if (!this.activity) {
        return 0;
      }

      return Math.round(this.computeVariation(this.total - this.activity.created + this.activity.deleted, this.total) * 100);
    },
    variationIcon: function variationIcon() {
      return this.computeIcon(this.variation);
    }
  }),
  methods: {
    moment: function (_moment) {
      function moment(_x) {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function (val) {
      return moment(val);
    }),
    dateRange: function dateRange(startDate, endDate, format) {
      var now = startDate.clone(),
          dates = [];

      while (now.isSameOrBefore(endDate)) {
        if (Array.isArray(format)) {
          (function () {
            var date = [];
            format.forEach(function (el) {
              date.push(now.format(el));
            });
            dates.push(date);
          })();
        } else {
          dates.push(now.format(format));
        }

        now.add(1, "days");
      }

      return dates;
    },
    computeIcon: function computeIcon(value) {
      if (value > 0) {
        return "trending-up";
      }

      if (value < 0) {
        return "trending-down";
      }

      return "minus";
    },
    computeVariation: function computeVariation(start, end) {
      if (!start || !end) {
        return 0;
      }

      return (end - start) / start;
    },
    prepareLabels: function prepareLabels(startDate, endDate, format) {
      return this.dateRange(moment(startDate), moment(endDate), format !== null && format !== void 0 ? format : "D MMM");
    },
    prepareData: function prepareData(rawData) {
      var _this = this;

      if (!rawData) {
        return null;
      }

      var finalData = [];
      var prev = 0;
      this.dateRange(moment(this.startDate), moment(this.endDate), "YYYY-MM-DD").forEach(function (day) {
        if (_this.cumulative) {
          var value = rawData[day] ? rawData[day] : prev;
          finalData.push(value);
          prev = value;
        } else {
          var _rawData$day;

          finalData.push((_rawData$day = rawData[day]) !== null && _rawData$day !== void 0 ? _rawData$day : 0);
        }
      });
      return finalData;
    },
    getMetrics: function getMetrics() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.next = 3;
                return _b_models_User__WEBPACK_IMPORTED_MODULE_4__["default"].where("created_after", _this2.startDate).params({
                  cumulative: _this2.cumulative
                }).metrics().then(function (response) {
                  _this2.usersData = _this2.prepareData(response.data.data);
                  _this2.labels = _this2.prepareLabels(_this2.startDate, _this2.endDate, ["D", "MMM"]);
                  _this2.overview = response.data.overview;
                  _this2.activity = response.data.activity;
                });

              case 3:
                _this2.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.getMetrics();
  }
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/BaseCharts.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-chartjs/es/BaseCharts.js ***!
  \***************************************************/
/*! exports provided: generateChart, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return generateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return Scatter; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      generateLegend: function generateLegend() {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend();
        }
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        this.$data._chart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* harmony default export */ __webpack_exports__["default"] = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueCharts", function() { return VueCharts; });
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/index.js */ "./node_modules/vue-chartjs/es/mixins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCharts */ "./node_modules/vue-chartjs/es/BaseCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"]; });



var VueCharts = {
  Bar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"],
  HorizontalBar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"],
  Doughnut: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"],
  Line: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"],
  Pie: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"],
  PolarArea: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"],
  Radar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"],
  Bubble: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"],
  Scatter: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"],
  mixins: _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  generateChart: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"],
  render: function render() {
    return console.error('[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueCharts);


/***/ }),

/***/ "./node_modules/vue-chartjs/es/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-chartjs/es/mixins/index.js ***!
  \*****************************************************/
/*! exports provided: reactiveData, reactiveProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveData", function() { return reactiveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveProp", function() { return reactiveProp; });
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
        this.$emit('labels:update');
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
        this.$emit('xlabels:update');
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
        this.$emit('ylabels:update');
      }

      chart.update();
      this.$emit('chart:update');
    } else {
      if (chart) {
        chart.destroy();
        this.$emit('chart:destroy');
      }

      this.renderChart(this.chartData, this.options);
      this.$emit('chart:render');
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();

      this.$emit('chart:destroy');
    }

    this.renderChart(this.chartData, this.options);
    this.$emit('chart:render');
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "card bb-card-chart" },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "card-header-title level" },
          [_vm._t("header-left"), _vm._v(" "), _vm._t("header-right")],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "chart-container" },
        [
          _vm.chartData
            ? [
                _vm.type == "line"
                  ? _c("line-chart", {
                      style: _vm.chartStyle,
                      attrs: { mode: "full", "chart-data": _vm.chartData }
                    })
                  : _vm.type == "bar"
                  ? _c("bar-chart", {
                      style: _vm.chartStyle,
                      attrs: { mode: "full", "chart-data": _vm.chartData }
                    })
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "card bb-card-chart", style: { height: _vm.height } },
    [
      _c(
        "div",
        { staticClass: "chart-container is-background" },
        [
          _vm.chartData
            ? [
                _vm.type == "line"
                  ? _c("line-chart", {
                      style: _vm.chartStyle,
                      attrs: { mode: "light", "chart-data": _vm.chartData }
                    })
                  : _vm.type == "bar"
                  ? _c("bar-chart", {
                      style: _vm.chartStyle,
                      attrs: { mode: "light", "chart-data": _vm.chartData }
                    })
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm.mode == "light"
    ? _c(
        "card-chart-light",
        {
          attrs: {
            height: _vm.height,
            "chart-data": _vm.chartData,
            "chart-style": _vm.chartStyle,
            type: _vm.type
          }
        },
        [
          _c("div", { staticClass: "columns is-marginless" }, [
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "is-flex" },
                [
                  _c("p", { staticClass: "is-1 title is-marginless no-wrap" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.active) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tooltip",
                    { attrs: { label: _vm.variation + "%" } },
                    [_c("b-icon", { attrs: { icon: _vm.variationIcon } })],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "heading" }, [_vm._v(_vm._s(_vm.title))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column is-narrow" }, [
              _c(
                "div",
                { staticClass: "field is-grouped" },
                [
                  _c(
                    "b-radio-button",
                    {
                      attrs: {
                        "native-value": _vm
                          .moment()
                          .subtract(1, "months")
                          .format("YYYY-MM-DD"),
                        type: "is-light",
                        size: "is-small"
                      },
                      model: {
                        value: _vm.startDate,
                        callback: function($$v) {
                          _vm.startDate = $$v
                        },
                        expression: "startDate"
                      }
                    },
                    [_c("span", [_vm._v("1 month")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-radio-button",
                    {
                      staticClass: "is-rounded",
                      attrs: {
                        "native-value": _vm
                          .moment()
                          .subtract(14, "days")
                          .format("YYYY-MM-DD"),
                        type: "is-light",
                        size: "is-small"
                      },
                      model: {
                        value: _vm.startDate,
                        callback: function($$v) {
                          _vm.startDate = $$v
                        },
                        expression: "startDate"
                      }
                    },
                    [_c("span", [_vm._v("14 days")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-radio-button",
                    {
                      attrs: {
                        "native-value": _vm
                          .moment()
                          .subtract(7, "days")
                          .format("YYYY-MM-DD"),
                        type: "is-light",
                        size: "is-small"
                      },
                      model: {
                        value: _vm.startDate,
                        callback: function($$v) {
                          _vm.startDate = $$v
                        },
                        expression: "startDate"
                      }
                    },
                    [_c("span", [_vm._v("7 days")])]
                  )
                ],
                1
              )
            ])
          ])
        ]
      )
    : _c(
        "card-chart-full",
        {
          attrs: {
            "chart-data": _vm.chartData,
            "chart-style": _vm.chartStyle,
            type: _vm.type
          }
        },
        [
          _c("p", { attrs: { slot: "header-left" }, slot: "header-left" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "header-right" }, slot: "header-right" }, [
            _c(
              "div",
              { staticClass: "field is-grouped" },
              [
                _c(
                  "b-radio-button",
                  {
                    attrs: {
                      "native-value": _vm
                        .moment()
                        .subtract(1, "months")
                        .format("YYYY-MM-DD"),
                      type: "is-light",
                      size: "is-small"
                    },
                    model: {
                      value: _vm.startDate,
                      callback: function($$v) {
                        _vm.startDate = $$v
                      },
                      expression: "startDate"
                    }
                  },
                  [_c("span", [_vm._v("1 month")])]
                ),
                _vm._v(" "),
                _c(
                  "b-radio-button",
                  {
                    staticClass: "is-rounded",
                    attrs: {
                      "native-value": _vm
                        .moment()
                        .subtract(14, "days")
                        .format("YYYY-MM-DD"),
                      type: "is-light",
                      size: "is-small"
                    },
                    model: {
                      value: _vm.startDate,
                      callback: function($$v) {
                        _vm.startDate = $$v
                      },
                      expression: "startDate"
                    }
                  },
                  [_c("span", [_vm._v("14 days")])]
                )
              ],
              1
            )
          ])
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartFull.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartFull.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardChartFull.vue?vue&type=template&id=9aa5251e& */ "./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e&");
/* harmony import */ var _CardChartFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardChartFull.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardChartFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/cards/CardChartFull.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardChartFull.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardChartFull.vue?vue&type=template&id=9aa5251e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartFull.vue?vue&type=template&id=9aa5251e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartFull_vue_vue_type_template_id_9aa5251e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartLight.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartLight.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardChartLight.vue?vue&type=template&id=3273ee24& */ "./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24&");
/* harmony import */ var _CardChartLight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardChartLight.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardChartLight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/cards/CardChartLight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartLight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardChartLight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartLight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardChartLight.vue?vue&type=template&id=3273ee24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/cards/CardChartLight.vue?vue&type=template&id=3273ee24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardChartLight_vue_vue_type_template_id_3273ee24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/charts/BarChart.vue":
/*!*************************************************************!*\
  !*** ./resources/js/backend/components/charts/BarChart.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/charts/BarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/charts/LineChart.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/charts/LineChart.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/charts/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardUsersChart.vue?vue&type=template&id=7eb84b3d& */ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&");
/* harmony import */ var _CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardUsersChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/users/CardUsersChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardUsersChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardUsersChart.vue?vue&type=template&id=7eb84b3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);