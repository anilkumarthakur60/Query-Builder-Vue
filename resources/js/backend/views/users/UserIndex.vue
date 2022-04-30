<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[{ name: 'users', to: '/users/index' }]"
        ></title-bar>
        <div class="columns is-marginless is-scrollable bb-scrollbar">
            <div class="column is-narrow">
                <card-metrics>
                    <card-metrics-item
                        :class="[
                            activeVariation >= 0 ? 'is-success' : 'is-danger'
                        ]"
                        title="Active Users"
                        :start-value="
                            overview.total - activity.created + activity.deleted
                        "
                        :end-value="overview.total"
                        :value="overview.active"
                    ></card-metrics-item>
                    <card-metrics-item
                        class="is-danger"
                        title="Blocked Users"
                        :value="overview.blocked"
                    ></card-metrics-item>
                    <card-metrics-item
                        class="is-danger"
                        title="Trashed Users"
                        :value="overview.trashed"
                    ></card-metrics-item>
                </card-metrics>
            </div>
            <div class="column">
                <card-users-chart mode="light" height="100%" />
            </div>
        </div>
        <div class="columns is-marginless">
            <div class="column is-12">
                <users-table
                    canFilter
                    canSelect
                    canDelete
                    canDestroy
                    canBlock
                    canSeeTrashed
                />
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import CardMetrics from "@b/components/CardMetrics";
import CardMetricsItem from "@b/components/CardMetricsItem";
import UsersTable from "@b/components/users/UsersTable";
import CardUsersChart from "@b/components/users/CardUsersChart";
import DoughnutChart from "@b/components/charts/DoughnutChart";

import User from "@b/models/User";

import { mapState } from "vuex";

export default {
    name: "UserIndex",
    components: {
        TitleBar,
        UsersTable,
        CardMetrics,
        CardMetricsItem,
        DoughnutChart,
        CardUsersChart
    },
    data() {
        return {
            overview: {
                active: 0,
                blocked: 0,
                trashed: 0
            },
            activity: {
                created: 0,
                deleted: 0
            }
        };
    },
    computed: {
        ...mapState(["charts"]),
        activeVariation() {
            if (!this.activity) {
                return 0;
            }
            return Math.round(
                this.computeVariation(
                    this.overview.total -
                        this.activity.created +
                        this.activity.deleted,
                    this.overview.total
                ) * 100
            );
        }
    },
    methods: {
        tinycolor(val) {
            return tinycolor(val);
        },
        computeIcon(value) {
            if (value > 0) {
                return "trending-up";
            } else if (value < 0) {
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
        async getMetrics() {
            //last week activity
            await User.where(
                "created_after",
                moment()
                    .subtract(7, "days")
                    .format("YYYY-MM-DD")
            )
                .metrics()
                .then(response => {
                    this.overview = response.data.overview;
                    this.activity = response.data.activity;
                });
        }
    },
    created() {
        this.getMetrics();
    },
    mounted() {}
};
</script>
