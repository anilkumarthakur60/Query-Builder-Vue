<template>
    <div class="bb-table">
        <div class="bb-table-header">
            <div class="level-left">
                <div class="title">users</div>
                <div>
                    {{ pagination.from }}
                    <b-icon icon="chevron-right" size="is-small"></b-icon>
                    {{ pagination.to }}
                    :
                    {{ total }}
                </div>
                <div v-if="canFilter">
                    <filter-bar
                        v-model="filter"
                        :filters="filters"
                        v-on:input="onFilter"
                    />
                </div>
                <div v-if="canSeeTrashed">
                    <b-field>
                        <b-radio-button
                            v-model="status"
                            native-value="active"
                            type="is-primary"
                            size="is-small"
                            @input="refreshAndClear"
                        >
                            <span>Active</span>
                        </b-radio-button>
                        <b-radio-button
                            v-model="status"
                            native-value="blocked"
                            type="is-warning"
                            size="is-small"
                            @input="refreshAndClear"
                        >
                            <span>Blocked</span>
                        </b-radio-button>
                        <b-radio-button
                            v-model="status"
                            native-value="trashed"
                            type="is-danger"
                            size="is-small"
                            @input="refreshAndClear"
                        >
                            <span>Trashed</span>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>
            <div class="level-right">
                <div class="bb-buttons-group">
                    <div class="buttons has-addons are-small">
                        <b-tooltip label="Add" type="is-light" animated>
                            <b-button
                                class="is-primary"
                                icon-left="plus-circle-outline"
                                to="/users/new"
                                tag="router-link"
                            >
                            </b-button>
                        </b-tooltip>
                        <b-tooltip label="Refresh" type="is-light" animated>
                            <b-button
                                :loading="isLoading"
                                icon-left="refresh"
                                @click="refreshAndClear"
                            ></b-button>
                        </b-tooltip>
                    </div>
                    <div v-if="canSelect" class="buttons has-addons are-small">
                        <b-button class="" icon-left="checkbox-marked-outline">
                            {{ checkedLength }}
                        </b-button>
                        <b-tooltip
                            v-if="canDelete"
                            label="Delete"
                            type="is-light"
                            animated
                        >
                            <b-button
                                class="is-danger"
                                outlined
                                icon-left="delete-outline"
                                @click="confirmDelete"
                                :disabled="!isSelected"
                            >
                            </b-button>
                        </b-tooltip>
                        <b-tooltip
                            v-if="canBlock"
                            label="Block"
                            type="is-light"
                            animated
                        >
                            <b-button
                                class="is-warning"
                                outlined
                                icon-left="account-cancel-outline"
                                @click="confirmBlock"
                                :disabled="!isSelected"
                            >
                            </b-button>
                        </b-tooltip>
                    </div>

                    <div class="buttons are-small" v-if="canSelect">
                        <b-dropdown aria-role="list" position="is-bottom-left">
                            <button class="button is-default" slot="trigger">
                                <b-icon
                                    icon="dots-vertical"
                                    size="is-small"
                                ></b-icon>
                            </button>

                            <b-dropdown-item
                                v-if="canBlock && !showTrashed"
                                aria-role="listitem"
                                @click="confirmUnblock"
                                :disabled="!isSelected"
                                >Unblock</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-if="canDelete"
                                aria-role="listitem"
                                @click="confirmRestore"
                                v-show="showTrashed"
                                :disabled="!isSelected"
                                >Restore</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-show="!showTrashed"
                                aria-role="listitem"
                                @click="bulkSendEmailVerification"
                                :disabled="!isSelected"
                                >Send Email Verification</b-dropdown-item
                            >
                            <b-dropdown-item
                                v-if="canDestroy"
                                aria-role="listitem"
                                @click="confirmDestroy"
                                :disabled="!isSelected"
                                >Destroy</b-dropdown-item
                            >

                            <b-dropdown-item
                                aria-role="listitem"
                                @click="bulkExport"
                                >Export
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <b-table
            :data="users"
            :loading="isLoading"
            :checkable="canSelect"
            :checked-rows.sync="checkedRows"
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
            default-sort="id"
            scrollable
            class="bb-scrollbar"
            :row-class="(row, index) => (row.isBlocked ? 'is-warning' : '')"
        >
            <template slot-scope="props">
                <b-table-column field="avatar" width="48">
                    <router-link
                        :to="{
                            name: 'users.edit',
                            params: { id: props.row.id }
                        }"
                    >
                        <figure class="image avatar is-24x24">
                            <img class="is-rounded" :src="props.row.avatar" />
                        </figure>
                    </router-link>
                </b-table-column>
                <b-table-column
                    field="id"
                    label="ID"
                    numeric
                    sortable
                    width="40"
                >
                    <router-link
                        :to="{
                            name: 'users.edit',
                            params: { id: props.row.id }
                        }"
                    >
                        <b-tooltip
                            v-if="props.row.isBlocked"
                            type="is-light"
                            :label="
                                `Blocked at ${new Date(
                                    props.row.blocked_at
                                ).toLocaleDateString()}`
                            "
                        >
                            <b-tag
                                :class="{ 'is-warning': props.row.isBlocked }"
                            >
                                {{ props.row.id }}
                            </b-tag>
                        </b-tooltip>
                        <b-tag v-else>
                            {{ props.row.id }}
                        </b-tag>
                    </router-link>
                </b-table-column>
                <b-table-column field="first_name" label="First Name" sortable>
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name" sortable>
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="email" label="Email" sortable>
                    <b-taglist attached>
                        <b-tag type="is-light">{{ props.row.email }}</b-tag>
                        <b-tag
                            :type="
                                props.row.isEmailVerified
                                    ? 'is-light'
                                    : 'is-warning'
                            "
                        >
                            <b-icon
                                size="is-small"
                                :icon="
                                    props.row.isEmailVerified
                                        ? 'shield-check-outline'
                                        : 'alert-circle-outline'
                                "
                            ></b-icon>
                        </b-tag>
                    </b-taglist>
                </b-table-column>

                <b-table-column field="roles" label="Roles">
                    <b-taglist>
                        <b-tag
                            type="is-info"
                            v-for="role in props.row.roles"
                            :key="role.id"
                            >{{ role.name }}</b-tag
                        >
                    </b-taglist>
                </b-table-column>

                <b-table-column field="created_at" label="Created At" sortable>
                    {{ new Date(props.row.created_at).toLocaleDateString() }}
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p class="title is-3">
                            🙌
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

            <template slot="bottom-left">
                <div>
                    <div><b>Total checked</b>: {{ checkedLength }}</div>
                    <div><b>Total</b>: {{ total }}</div>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from "vuex";
import User from "@b/models/User";
import debounce from "lodash/debounce";

import FilterBar from "@b/components/FilterBar";

export default {
    name: "UsersTable",
    components: { FilterBar },
    props: {
        canFilter: {
            type: Boolean
        },
        canSelect: {
            type: Boolean
        },
        canDelete: {
            type: Boolean
        },
        canDestroy: {
            type: Boolean
        },
        canBlock: {
            type: Boolean
        },
        canSeeTrashed: {
            type: Boolean
        }
    },
    data() {
        return {
            users: [],
            isLoading: false,
            status: "active",

            checkedRows: [],
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
        ...mapState("auth", {
            currentUser: state => state.user
        }),
        ...mapState("rolesAndPermissions", ["roles", "permissions"]),
        showTrashed() {
            return this.status == "trashed";
        },
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
                    field: "first_name",
                    type: "search",
                    label: "First Name"
                },
                {
                    field: "last_name",
                    type: "search",
                    label: "Last Name"
                },
                {
                    field: "email",
                    label: "Email",
                    type: "email"
                },
                {
                    field: "role",
                    label: "Role",
                    type: "select",
                    options: this.roles.map(role => role.name)
                },
                {
                    field: "permission",
                    label: "Permission",
                    type: "select",
                    options: this.permissions.map(permission => permission.name)
                },
                {
                    field: "created_after",
                    label: "Created After ",
                    type: "date",
                    maxDate: new Date()
                },
                {
                    field: "created_before",
                    label: "Created Before",
                    type: "date",
                    maxDate: new Date()
                }
            ];
        },
        isFiltered() {
            return !!this.filter.object.field;
        },
        checkedLength() {
            return this.checkedRows.length;
        },
        isSelected() {
            return this.checkedRows.length > 0;
        },
        selectedUsersId() {
            if (this.checkedLength > 0) {
                this.checkedRows.map(item => {
                    return item.id;
                });
            }
            return [];
        }
    },
    methods: {
        onPageChange(page) {
            this.pagination.current_page = page;
            this.getUsers();
        },
        onSort(field, order) {
            this.sort.field = field;
            this.sort.order = order == "desc" ? "-" : "";
            this.sort.value = `${this.sort.order}${this.sort.field}`;
            this.getUsers();
        },
        onFilter: debounce(function() {
            if (!this.isFiltered) {
                return;
            }
            this.checkedRows = [];
            this.getUsers();
        }, 500),
        buildQuery(query) {
            //filter by status
            if (this.showTrashed) {
                query.where("trashed", "only");
            } else if (this.status == "blocked") {
                query.where("blocked", "only");
            }

            //advanced filter
            if (this.isFiltered) {
                if (this.filter.value instanceof Date) {
                    query.where(
                        this.filter.object.field,
                        moment(this.filter.value).format("YYYY-MM-DD")
                    );
                } else {
                    query.where(this.filter.object.field, this.filter.value);
                }
            }

            return query;
        },
        //table actions
        async getUsers() {
            this.isLoading = true;

            let users = User.orderBy(this.sort.value)
                .page(this.pagination.current_page)
                .include("roles");

            users = this.buildQuery(users);

            let response = await users.get().then(response => {
                this.users = response.data;
                this.pagination = response.meta;
            });

            this.isLoading = false;
        },
        refresh() {
            this.getUsers();
        },
        refreshAndClear() {
            this.checkedRows = [];
            this.refresh();
        },
        clearFilter() {
            (this.filter.value = null), this.refresh();
        },
        //confirm actions
        confirmDelete() {
            this.$buefy.dialog.confirm({
                title: "Deleting users",
                message: `Are you sure you want to <b>delete</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Delete Users",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.bulkDelete()
            });
        },
        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying users",
                message: `Are you sure you want to <b>destroy</b> ${this.checkedLength} users? This action can NOT be undone.`,
                confirmText: "Destroy Users",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.bulkDestroy()
            });
        },
        confirmBlock() {
            this.$buefy.dialog.confirm({
                title: "Blocking users",
                message: `Are you sure you want to <b>block</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Block Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkBlock()
            });
        },
        confirmUnblock() {
            this.$buefy.dialog.confirm({
                title: "Unblocking users",
                message: `Are you sure you want to <b>unblock</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Unblock Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkUnblock()
            });
        },
        confirmRestore() {
            this.$buefy.dialog.confirm({
                title: "Restoring users",
                message: `Are you sure you want to <b>restore</b> ${this.checkedLength} users? This action can be undone.`,
                confirmText: "Restore Users",
                type: "is-warning",
                hasIcon: true,
                onConfirm: () => this.bulkRestore()
            });
        },
        // bulk actions
        bulkDelete() {
            this.checkedRows.forEach(user => {
                this.delete(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkDestroy() {
            this.checkedRows.forEach(user => {
                this.destroy(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkBlock() {
            this.checkedRows.forEach(user => {
                this.block(user);
            });

            return true;
        },
        bulkUnblock() {
            this.checkedRows.forEach(user => {
                this.unblock(user);
            });

            return true;
        },
        bulkRestore() {
            this.checkedRows.forEach(user => {
                this.restore(user);
            });
            this.refreshAndClear();
            return true;
        },
        bulkSendEmailVerification() {
            this.checkedRows.forEach(user => {
                user.sendEmailVerification();
            });

            return true;
        },
        bulkExport() {
            let users = new User().custom("users/export");
            users = this.buildQuery(users);

            if (this.checkedLength > 0) {
                users.whereIn("id", this.selectedUsersId());
            }

            users.export();
            this.$buefy.snackbar.open({
                duration: 3000,
                message: `${
                    this.checkedLength > 0 ? this.checkedLength : "all"
                } users have been exported`,
                type: "is-danger",
                position: "is-bottom-right",
                queue: true
            });
        },
        //single actions
        async delete(user) {
            await user.softDelete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 3000,
                    message: `${user.fullname} has been deleted`,
                    type: "is-danger",
                    position: "is-bottom-right",
                    actionText: "Undo",
                    queue: true,
                    onAction: () => {
                        this.restore(user);
                    }
                });
            });
        },
        async destroy(user) {
            await user.delete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${user.fullname} has been destroyed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
        },
        async block(user) {
            await user
                .block()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been blocked`,
                        type: "is-danger",
                        position: "is-bottom-right",
                        actionText: "Undo",
                        queue: true,
                        onAction: () => {
                            this.unblock(user);
                        }
                    });
                });
        },
        async unblock(user) {
            await user
                .unblock()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${user.fullname} has been unblocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: true
                    });
                });
        },
        async restore(user) {
            await user.restore().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${user.fullname} has been restored`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                });
            });
        },
        async sendEmailVerification(user) {
            await user.sendEmailVerification().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `An email has been send to <b>${user.fullname}</b>`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                });
            });
        }
    },
    created() {
        this.getUsers();
    },
    mounted() {}
};
</script>
