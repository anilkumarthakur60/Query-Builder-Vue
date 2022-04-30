<template>
    <div class="card bb-card-chart">
        <div class="card-header">
            <div class="card-header-title level">
                <slot name="header-left"></slot>
                <slot name="header-right"></slot>
            </div>
        </div>

        <div class="chart-container">
            <template v-if="chartData">
                <line-chart
                    v-if="type == 'line'"
                    mode="full"
                    :chart-data="chartData"
                    :style="chartStyle"
                />
                <bar-chart
                    v-else-if="type == 'bar'"
                    mode="full"
                    :chart-data="chartData"
                    :style="chartStyle"
                />
            </template>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import LineChart from "@b/components/charts/LineChart";
import BarChart from "@b/components/charts/BarChart";

export default {
    name: "CardChartFull",
    components: { LineChart, BarChart },
    props: {
        type: {
            type: String,
            default: "line"
        },
        height: {
            type: String,
            default: "200px"
        },
        chartData: {
            type: [Array, Object]
        },
        chartStyle: {
            type: [Array, Object]
        }
    },
    data() {
        return {};
    },
    watch: {},
    computed: {},
    methods: {},
    mounted() {}
};
</script>
