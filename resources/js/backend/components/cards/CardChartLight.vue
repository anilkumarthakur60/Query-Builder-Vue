<template>
    <div class="card bb-card-chart" :style="{ height: height }">
        <div class="chart-container is-background">
            <template v-if="chartData">
                <line-chart
                    v-if="type == 'line'"
                    mode="light"
                    :chart-data="chartData"
                    :style="chartStyle"
                />
                <bar-chart
                    v-else-if="type == 'bar'"
                    mode="light"
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
    name: "CardChartight",
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
