<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
    name: "DoughnutChart",
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: {
        mode: {
            type: String,
            default: "light",
            validator: function(value) {
                return ["light", "full"].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            defaultOptions: {
                light: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        intersect: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: false,
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                },
                full: {
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxRotation: 0,
                                    minRotation: 0
                                }
                            }
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxRotation: 0,
                                    minRotation: 0
                                }
                            }
                        ]
                    }
                }
            }
        };
    },
    computed: {
        finalOptions() {
            return this.options ?? this.defaultOptions[this.mode];
        }
    },
    methods: {},
    mounted() {
        this.renderChart(this.chartData, this.finalOptions);
    }
};
</script>
