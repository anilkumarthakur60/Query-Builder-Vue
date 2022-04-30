<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Activities"
            :menu="[{ name: 'activities', to: { name: 'activities.index' } }]"
        ></title-bar>
        <div class="columns is-marginless"></div>

        <div class="columns is-marginless">
            <div class="column is-12">
                <div class="bb-table">
                    <div class="bb-table-header">
                        <div class="level-left">
                            <div class="title">activities</div>
                            <div>
                                {{ pagination.from }}
                                <b-icon
                                    icon="chevron-right"
                                    size="is-small"
                                ></b-icon>
                                {{ pagination.to }}
                                :
                                {{ total }}
                            </div>
                            <div>
                                <filter-bar
                                    v-model="filter"
                                    :filters="filters"
                                    v-on:input="onFilter"
                                />
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="bb-buttons-group">
                                <div class="buttons has-addons are-small">
                                    <b-button
                                        :loading="isLoading"
                                        icon-left="refresh"
                                        @click="refresh"
                                    ></b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-table
                        :data="activities"
                        :loading="isLoading"
                        paginated
                        backend-pagination
                        @page-change="onPageChange"
                        :total="total"
                        :per-page="pagination.per_page"
                        :current-page.sync="pagination.current_page"
                        :pagination-simple="isPaginationSimple"
                        :pagination-position="paginationPosition"
                        pagination-size="is-small"
                        backend-sorting
                        @sort="onSort"
                        default-sort-direction="desc"
                        default-sort="created_at"
                        scrollable
                    >
                        <template slot-scope="props">
                            <b-table-column
                                field="id"
                                label="ID"
                                numeric
                                sortable
                                width="40"
                            >
                                {{ props.row.id }}
                            </b-table-column>

                            <b-table-column
                                field="log_name"
                                label="Log Name"
                                sortable
                            >
                                {{ props.row.log_name }}
                            </b-table-column>

                            <b-table-column
                                field="description"
                                label="Description"
                                sortable
                            >
                                <b-tag
                                    :type="computeType(props.row.description)"
                                >
                                    {{ props.row.description }}
                                </b-tag>
                            </b-table-column>

                            <b-table-column field="subject_id" label="Subject">
                                <b-taglist attached>
                                    <b-tag>{{ props.row.subject_id }}</b-tag>
                                    <b-tag>{{ props.row.subject_type }}</b-tag>
                                </b-taglist>
                            </b-table-column>

                            <b-table-column field="causer_id" label="Causer">
                                <b-tag v-if="props.row.user" type="is-primary">
                                    {{
                                        `${props.row.user.first_name} ${props.row.user.last_name}`
                                    }}
                                </b-tag>
                                <b-taglist
                                    attached
                                    v-else-if="props.row.causer_id"
                                >
                                    <b-tag>{{ props.row.causer_id }}</b-tag>
                                    <b-tag>{{ props.row.causer_type }}</b-tag>
                                </b-taglist>
                            </b-table-column>

                            <b-table-column
                                field="created_at"
                                label="Created At"
                                sortable
                            >
                                {{
                                    new Date(
                                        props.row.created_at
                                    ).toLocaleDateString()
                                }}
                            </b-table-column>
                        </template>

                        <template slot="empty">
                            <section class="section">
                                <div
                                    class="content has-text-grey has-text-centered"
                                >
                                    <p class="title is-3">
                                        🙌
                                    </p>
                                    <p>Nothing here.</p>
                                </div>
                            </section>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";

import Activity from "@b/models/Activity";
import debounce from "lodash/debounce";
import FilterBar from "@b/components/FilterBar";
import { mapState } from "vuex";

export default {
    name: "ActivitiesIndex",
    components: { TitleBar, FilterBar },
    props: {},
    data() {
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
                order: "-", // '-' or ''
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
        total() {
            return this.pagination.total;
        },
        filters() {
            return [
                {
                    field: "id",
                    label: "ID",
                    type: "number"
                },
                {
                    field: "log_name",
                    type: "search",
                    label: "Log Name"
                },
                {
                    field: "description",
                    type: "search",
                    label: "Description"
                }
            ];
        },
        isFiltered() {
            return !!this.filter.object.field;
        },
        isSorted() {
            return this.sort.value;
        }
    },
    methods: {
        computeType(desc) {
            if (desc == "created") {
                return "is-light";
            }
            if (desc == "deleted") {
                return "is-danger";
            }
            return null;
        },
        async getActivities() {
            this.isLoading = true;

            let activities = Activity.page(this.pagination.current_page);
            if (this.isSorted) {
                activities.orderBy(this.sort.value);
            }
            if (this.isFiltered) {
                activities.where(this.filter.object.field, this.filter.value);
            }
            let response = await activities.get().then(response => {
                this.activities = response.data;
                this.pagination = response.meta;
            });

            this.isLoading = false;
        },
        refresh() {
            this.getActivities();
        },
        onPageChange(page) {
            this.pagination.current_page = page;
            this.getActivities();
        },
        onSort(field, order) {
            this.sort.field = field;
            this.sort.order = order == "desc" ? "-" : "";
            this.sort.value = `${this.sort.order}${this.sort.field}`;
            this.getActivities();
        },
        onFilter: debounce(function() {
            this.getActivities();
        }, 500)
    },
    created() {
        this.getActivities();
    },
    mounted() {}
};
</script>

<style></style>
