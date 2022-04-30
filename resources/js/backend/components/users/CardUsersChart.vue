<template>
    <card-chart-light
        v-if="mode == 'light'"
        :height="height"
        :chart-data="chartData"
        :chart-style="chartStyle"
        :type="type"
    >
        <div class="columns is-marginless">
            <div class="column">
                <div class="is-flex">
                    <p class="is-1 title is-marginless no-wrap">
                        {{ active }}
                    </p>
                    <b-tooltip :label="`${variation}%`">
                        <b-icon :icon="variationIcon"></b-icon>
                    </b-tooltip>
                </div>
                <p class="heading">{{ title }}</p>
            </div>

            <div class="column is-narrow">
                <div class="field is-grouped">
                    <b-radio-button
                        v-model="startDate"
                        :native-value="
                            moment()
                                .subtract(1, 'months')
                                .format('YYYY-MM-DD')
                        "
                        type="is-light"
                        size="is-small"
                    >
                        <span>1 month</span>
                    </b-radio-button>
                    <b-radio-button
                        v-model="startDate"
                        :native-value="
                            moment()
                                .subtract(14, 'days')
                                .format('YYYY-MM-DD')
                        "
                        type="is-light"
                        size="is-small"
                        class="is-rounded"
                    >
                        <span>14 days</span>
                    </b-radio-button>
                    <b-radio-button
                        v-model="startDate"
                        :native-value="
                            moment()
                                .subtract(7, 'days')
                                .format('YYYY-MM-DD')
                        "
                        type="is-light"
                        size="is-small"
                    >
                        <span>7 days</span>
                    </b-radio-button>
                </div>
            </div>
        </div>
    </card-chart-light>
    <card-chart-full
        v-else
        :chart-data="chartData"
        :chart-style="chartStyle"
        :type="type"
    >
        <p slot="header-left">{{ title }}</p>
        <div slot="header-right">
            <div class="field is-grouped">
                <b-radio-button
                    v-model="startDate"
                    :native-value="
                        moment()
                            .subtract(1, 'months')
                            .format('YYYY-MM-DD')
                    "
                    type="is-light"
                    size="is-small"
                >
                    <span>1 month</span>
                </b-radio-button>
                <b-radio-button
                    v-model="startDate"
                    :native-value="
                        moment()
                            .subtract(14, 'days')
                            .format('YYYY-MM-DD')
                    "
                    type="is-light"
                    size="is-small"
                    class="is-rounded"
                >
                    <span>14 days</span>
                </b-radio-button>
            </div>
        </div>
    </card-chart-full>
</template>

<script>
import { mapState } from "vuex";

import CardChartLight from "@b/components/cards/CardChartLight";
import CardChartFull from "@b/components/cards/CardChartFull";

import User from "@b/models/User";

export default {
    name: "UsersChart",
    components: { CardChartLight, CardChartFull },
    props: {
        mode: {
            type: String,
            default: "full"
        },
        type: {
            type: String,
            default: "line"
        },
        cumulative: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: "200px"
        }
    },
    data() {
        return {
            title: "New Users",
            usersData: null,
            overview: null,
            activity: null,
            labels: null,
            startDate: moment()
                .subtract(14, "days")
                .format("YYYY-MM-DD"),
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
        startDate: function() {
            this.getMetrics();
        }
    },
    computed: {
        ...mapState(["charts"]),
        chartData() {
            if (!this.usersData) {
                return null;
            }
            return {
                labels: this.labels,
                datasets: [
                    {
                        label: "Users",
                        pointBorderColor: "transparent",
                        pointBackgroundColor: "transparent",
                        borderWidth: 1.5,
                        lineTension: 0.3,
                        borderColor: this.charts.colors[0],
                        backgroundColor: function(context) {
                            let color = tinycolor(context.dataset.borderColor);
                            let gradient = context.chart.ctx.createLinearGradient(
                                0,
                                context.chart.height,
                                0,
                                0
                            );
                            gradient.addColorStop(
                                0,
                                color.setAlpha(0.01).toRgbString()
                            );
                            gradient.addColorStop(
                                1,
                                color.setAlpha(0.2).toRgbString()
                            );

                            return gradient;
                        },
                        data: this.usersData
                    }
                ]
            };
        },
        rawData() {
            if (!this.usersData) {
                return null;
            }
            return Object.values(this.usersData);
        },
        sum() {
            if (!this.rawData) {
                return 0;
            }
            return this.rawData.reduce((previous, current) => {
                return previous + current;
            }, 0);
        },
        total() {
            if (!this.overview) {
                return 0;
            }
            return this.overview.total;
        },
        active() {
            if (!this.overview) {
                return 0;
            }
            return this.overview.active;
        },
        variation() {
            if (!this.activity) {
                return 0;
            }
            return Math.round(
                this.computeVariation(
                    this.total - this.activity.created + this.activity.deleted,
                    this.total
                ) * 100
            );
        },
        variationIcon() {
            return this.computeIcon(this.variation);
        }
    },
    methods: {
        moment(val) {
            return moment(val);
        },
        dateRange: function(startDate, endDate, format) {
            var now = startDate.clone(),
                dates = [];

            while (now.isSameOrBefore(endDate)) {
                if (Array.isArray(format)) {
                    let date = [];
                    format.forEach(el => {
                        date.push(now.format(el));
                    });
                    dates.push(date);
                } else {
                    dates.push(now.format(format));
                }

                now.add(1, "days");
            }
            return dates;
        },
        computeIcon(value) {
            if (value > 0) {
                return "trending-up";
            }
            if (value < 0) {
                return "trending-down";
            }
            return "minus";
        },
        computeVariation(start, end) {
            if (!start || !end) {
                return 0;
            }

            return (end - start) / start;
        },
        prepareLabels(startDate, endDate, format) {
            return this.dateRange(
                moment(startDate),
                moment(endDate),
                format ?? "D MMM"
            );
        },
        prepareData(rawData) {
            if (!rawData) {
                return null;
            }
            let finalData = [];
            let prev = 0;
            this.dateRange(
                moment(this.startDate),
                moment(this.endDate),
                "YYYY-MM-DD"
            ).forEach(day => {
                if (this.cumulative) {
                    let value = rawData[day] ? rawData[day] : prev;
                    finalData.push(value);
                    prev = value;
                } else {
                    finalData.push(rawData[day] ?? 0);
                }
            });
            return finalData;
        },
        async getMetrics() {
            this.loading = true;
            await User.where("created_after", this.startDate)
                .params({ cumulative: this.cumulative })
                .metrics()
                .then(response => {
                    this.usersData = this.prepareData(response.data.data);
                    this.labels = this.prepareLabels(
                        this.startDate,
                        this.endDate,
                        ["D", "MMM"]
                    );
                    this.overview = response.data.overview;
                    this.activity = response.data.activity;
                });
            this.loading = false;
        }
    },
    mounted() {
        this.getMetrics();
    }
};
</script>
