<template>
    <section>
        <title-bar
            class="p-1"
            title="Manage Users"
            :menu="[
                { name: 'users', to: { name: 'users.index' } },
                {
                    name: id ? 'edit' : 'new',
                    to: {
                        name: id ? 'users.edit' : 'users.new',
                        params: { id: id }
                    }
                }
            ]"
        ></title-bar>

        <div class="">
            <div class="columns is-marginless is-multiline">
                <div class="column is-12 is-6-fullhd">
                    <div
                        class="card"
                        :class="{
                            'is-warning': user.isBlocked,
                            'is-danger': user.isTrashed
                        }"
                    >
                        <div class="card-header">
                            <div class="card-header-title level">
                                <p class="">
                                    <b-icon
                                        icon="account-circle"
                                        size="is-small"
                                    ></b-icon>
                                    <span>Information</span>
                                </p>
                                <b-tag
                                    v-if="user && user.isTrashed"
                                    type="is-danger"
                                    >Trashed
                                    {{
                                        user.date_diff(
                                            new Date(user.deleted_at),
                                            new Date()
                                        )
                                    }}
                                    days ago
                                </b-tag>
                                <b-tag
                                    v-else-if="user && user.isBlocked"
                                    type="is-warning"
                                    >Blocked
                                    {{
                                        user.date_diff(
                                            new Date(user.blocked_at),
                                            new Date()
                                        )
                                    }}
                                    days ago
                                </b-tag>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="">
                                <b-field horizontal>
                                    <template slot="label">
                                        <figure
                                            class="image avatar is-128x128 is-inline-block"
                                        >
                                            <img
                                                v-if="user && user.avatar"
                                                :src="user.avatar"
                                            />
                                        </figure>
                                    </template>
                                    <div>
                                        <h1 class="title is-marginless">
                                            {{ user.fullname }}
                                        </h1>
                                        <b-tag size="is-large">
                                            #{{ user.id }}
                                        </b-tag>
                                    </div>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Avatar">
                                    <b-field class="file">
                                        <p class="control">
                                            <b-button
                                                @click="deleteAvatar"
                                                type="is-light"
                                                :loading="loading.avatar"
                                            >
                                                Delete Avatar
                                            </b-button>
                                        </p>
                                    </b-field>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Information">
                                    <b-field
                                        label="First Name"
                                        label-for="first_name"
                                        expand
                                    >
                                        <b-input
                                            id="first_name"
                                            v-model="user.first_name"
                                        ></b-input>
                                    </b-field>
                                    <b-field
                                        label="Last Name"
                                        label-for="last_name"
                                        expand
                                    >
                                        <b-input
                                            id="last_name"
                                            v-model="user.last_name"
                                        ></b-input>
                                    </b-field>
                                </b-field>

                                <b-field horizontal label="">
                                    <b-field
                                        label="Email"
                                        label-for="email"
                                        :type="
                                            exists && !user.isEmailVerified
                                                ? 'is-warning'
                                                : null
                                        "
                                        :message="
                                            user.isEmailVerified
                                                ? 'This email is verified'
                                                : 'This email is not verified'
                                        "
                                    >
                                        <b-input
                                            id="email"
                                            type="email"
                                            v-model="user.email"
                                        ></b-input>
                                    </b-field>

                                    <b-field
                                        label="Email verification"
                                        v-if="exists && !user.isEmailVerified"
                                    >
                                        <b-button
                                            type="is-primary"
                                            :loading="
                                                loading.email_verification
                                            "
                                            @click="sendEmailVerification"
                                            outlined
                                        >
                                            Resend the email verification
                                        </b-button>
                                    </b-field>
                                </b-field>

                                <b-field horizontal label="" v-if="!exists">
                                    <b-field
                                        label="Password"
                                        label-for="password"
                                        expand
                                    >
                                        <b-input
                                            id="password"
                                            type="password"
                                            v-model="user.password"
                                        ></b-input>
                                    </b-field>
                                    <b-field
                                        label="Confirm Password"
                                        label-for="password_confirmation"
                                        expand
                                        :type="
                                            !passwordConfirmed
                                                ? 'is-danger'
                                                : null
                                        "
                                        :message="
                                            !passwordConfirmed
                                                ? 'The passwords does not match'
                                                : null
                                        "
                                    >
                                        <b-input
                                            id="password_confirmation"
                                            type="password"
                                            v-model="user.password_confirmation"
                                        ></b-input>
                                    </b-field>
                                </b-field>

                                <hr />
                                <b-field horizontal label="Roles">
                                    <div
                                        class="field is-grouped is-grouped-multiline"
                                    >
                                        <b-checkbox-button
                                            v-for="role in user.roles"
                                            :key="role.id"
                                            v-model="user.roles"
                                            :native-value="role"
                                            type="is-primary"
                                        >
                                            <span>{{ role.name }}</span>
                                        </b-checkbox-button>

                                        <b-checkbox-button
                                            v-for="role in differenceById(
                                                roles,
                                                user.roles
                                            )"
                                            :key="role.id"
                                            v-model="user.roles"
                                            :native-value="role"
                                            type="is-primary"
                                        >
                                            <span>{{ role.name }}</span>
                                        </b-checkbox-button>
                                    </div>
                                </b-field>
                                <hr />
                                <b-field
                                    horizontal
                                    label="Permissions"
                                    v-if="user.permissions"
                                >
                                    <div
                                        class="field is-grouped is-grouped-multiline"
                                    >
                                        <b-checkbox-button
                                            v-for="permission in user.permissions"
                                            :key="permission.id"
                                            v-model="user.permissions"
                                            :native-value="permission"
                                            type="is-primary"
                                        >
                                            <span>{{ permission.name }}</span>
                                        </b-checkbox-button>

                                        <b-checkbox-button
                                            v-for="permission in differenceById(
                                                permissions,
                                                user.permissions
                                            )"
                                            :key="permission.id"
                                            v-model="user.permissions"
                                            :native-value="permission"
                                            type="is-primary"
                                        >
                                            <span>{{ permission.name }}</span>
                                        </b-checkbox-button>
                                    </div>
                                </b-field>
                                <hr />
                                <b-field horizontal label="">
                                    <b-field>
                                        <p class="control has-text-right">
                                            <b-button
                                                @click="saveUser"
                                                type="is-primary"
                                                :loading="loading.save"
                                                :disabled="
                                                    user.isTrashed ||
                                                        !passwordConfirmed
                                                "
                                            >
                                                {{ exists ? "Save" : "Create" }}
                                            </b-button>
                                            <b-button
                                                v-if="exists"
                                                @click="getUser"
                                                type="is-default"
                                                :loading="loading.refresh"
                                                icon-left="refresh"
                                            ></b-button>
                                        </p>
                                    </b-field>
                                </b-field>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-header-title">
                                <p>
                                    <b-icon
                                        icon="security"
                                        size="is-small"
                                    ></b-icon>
                                    Security
                                </p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div v-if="exists">
                                <b-field horizontal label="Block">
                                    <b-field>
                                        <b-button
                                            v-if="user.isBlocked"
                                            @click="unblockUser"
                                            type="is-warning"
                                            :loading="loading.block"
                                            icon-left="restore"
                                        >
                                            Unblock
                                        </b-button>
                                        <b-button
                                            v-else
                                            icon-left="cancel"
                                            @click="blockUser"
                                            type="is-warning"
                                            :loading="loading.block"
                                        >
                                            Block
                                        </b-button>
                                    </b-field>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Delete">
                                    <b-field>
                                        <div class="buttons">
                                            <b-button
                                                v-if="user.isTrashed"
                                                @click="confirmRestore"
                                                type="is-info"
                                                icon-left="restore"
                                                :loading="loading.restore"
                                                >Restore</b-button
                                            >
                                            <b-button
                                                @click="confirmDelete"
                                                type="is-danger"
                                                :loading="loading.delete"
                                                icon-left="delete-outline"
                                                >{{
                                                    user.isTrashed
                                                        ? "Destroy"
                                                        : "Delete"
                                                }}</b-button
                                            >
                                        </div>
                                    </b-field>
                                </b-field>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";

import TitleBar from "@b/components/TitleBar";
import differenceBy from "lodash/differenceBy";
import User from "@b/models/User";

export default {
    name: "UserForm",
    components: { TitleBar },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            user: new User({
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
                delete: false,
                block: false,
                avatar: false
            }
        };
    },
    computed: {
        ...mapState("rolesAndPermissions", ["roles", "permissions"]),
        exists() {
            return !!this.id;
        },
        passwordConfirmed() {
            return this.user.password === this.user.password_confirmation;
        }
    },
    methods: {
        differenceById(item1, item2) {
            return differenceBy(item1, item2, "id");
        },
        async getUser() {
            this.loading.refresh = true;

            this.user = await User.include("roles", "permissions").$find(
                this.id
            );

            this.loading.refresh = false;
        },
        async saveUser() {
            this.loading.save = true;
            let exists = this.exists;
            await this.user.save().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} has been updated`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
                if (!exists) {
                    this.$router.push({
                        name: "users.edit",
                        params: { id: this.user.id }
                    });
                }
            });

            this.loading.save = false;
        },
        async deleteAvatar() {
            this.loading.avatar = true;

            await this.user.deleteAvatar().then(r => {
                this.getUser();
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} Avatar has been deleted`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
            this.loading.avatar = false;
        },
        async blockUser() {
            this.loading.user = true;
            await this.user
                .block()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been blocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                });

            this.loading.user = false;
        },
        async unblockUser() {
            this.loading.user = true;
            await this.user
                .unblock()
                .save()
                .then(response => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `${this.user.fullname} has been unblocked`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                });

            this.loading.user = false;
        },
        async restoreUser() {
            this.loading.restore = true;
            await this.user.restore().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} has been restored`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
            this.loading.restore = false;
        },
        /**
         * Soft delete the User
         */
        async deleteUser() {
            this.loading.user = true;
            await this.user.softDelete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} has been trashed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });

            this.loading.user = false;
        },
        /**
         * remove the user from the database => forcDelete
         */
        async destroyUser() {
            await this.user.delete().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `${this.user.fullname} has been destroyed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
                this.$router.push({ name: "users.index" });
            });
        },
        async sendEmailVerification() {
            this.loading.email_verification = true;

            await this.user.sendEmailVerification();

            this.loading.email_verification = false;
        },
        confirmRestore() {
            this.$buefy.dialog.confirm({
                title: "Restoring user",
                message: `Are you sure you want to <b>restore</b> ${this.user.fullname}? This action can be undone.`,
                confirmText: "Restore User",
                type: "is-primary",
                hasIcon: true,
                onConfirm: () => this.restoreUser()
            });
        },
        confirmDelete() {
            if (this.user.isTrashed) {
                return this.confirmDestroy();
            }
            this.$buefy.dialog.confirm({
                title: "Deleting user",
                message: `Are you sure you want to <b>delete</b> ${this.user.fullname}? This action can be undone.`,
                confirmText: "Delete User",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteUser()
            });
        },
        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying user",
                message: `Are you sure you want to <b>destroy</b> ${this.user.fullname}? This action can NOT be undone.`,
                confirmText: "Destroy User",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.destroyUser()
            });
        }
    },
    created() {
        if (this.exists) {
            this.getUser();
        }
    },
    mounted() {}
};
</script>
