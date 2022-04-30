<template>
    <section>
        <title-bar
            class="p-1"
            title="My Account"
            :menu="[{ name: 'dashboard', to: { name: 'dashboard' } }]"
        ></title-bar>

        <div class="">
            <div class="columns is-marginless is-multiline">
                <div class="column is-12 is-6-fullhd">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">
                                <b-icon
                                    icon="account-circle"
                                    size="is-small"
                                ></b-icon>
                                <span>Information</span>
                            </p>
                        </div>
                        <div class="card-content">
                            <div class="">
                                <b-field horizontal>
                                    <template slot="label">
                                        <figure
                                            class="image avatar is-128x128 is-inline-block"
                                        >
                                            <img
                                                v-if="
                                                    currentUser &&
                                                        currentUser.avatar
                                                "
                                                :src="currentUser.avatar"
                                            />
                                        </figure>
                                    </template>
                                    <div>
                                        <h1 class="title is-marginless">
                                            {{ currentUser.fullname }}
                                        </h1>
                                    </div>
                                </b-field>
                                <hr />
                                <b-field horizontal label="Avatar">
                                    <b-field class="file">
                                        <b-upload
                                            v-model="avatar"
                                            accept="image/*"
                                            v-on:input="changeAvatar"
                                        >
                                            <b-loading
                                                :is-full-page="false"
                                                :active.sync="loading.avatar"
                                            />
                                            <a class="button is-primary">
                                                <b-icon
                                                    icon="cloud-upload-outline"
                                                ></b-icon>
                                                <span>Upload</span>
                                            </a>
                                        </b-upload>
                                        <p class="control">
                                            <b-button
                                                @click="deleteAvatar"
                                                type="is-light"
                                            >
                                                Delete
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
                                            v-model="currentUser.first_name"
                                        ></b-input>
                                    </b-field>
                                    <b-field
                                        label="Last Name"
                                        label-for="last_name"
                                        expand
                                    >
                                        <b-input
                                            id="last_name"
                                            v-model="currentUser.last_name"
                                        ></b-input>
                                    </b-field>
                                </b-field>

                                <b-field horizontal label="">
                                    <b-field
                                        label="Email"
                                        label-for="email"
                                        :type="
                                            exists &&
                                            !currentUser.isEmailVerified
                                                ? 'is-warning'
                                                : null
                                        "
                                        :message="
                                            currentUser.isEmailVerified
                                                ? 'Your email is verified'
                                                : 'Your email is not verified'
                                        "
                                    >
                                        <b-input
                                            id="email"
                                            type="email"
                                            v-model="currentUser.email"
                                        ></b-input>
                                    </b-field>
                                </b-field>

                                <hr />
                                <b-field horizontal label="Roles">
                                    <div class="buttons">
                                        <b-button
                                            v-for="role in currentUser.roles"
                                            :key="role.id"
                                            type="is-primary"
                                        >
                                            {{ role.name }}
                                        </b-button>
                                    </div>
                                </b-field>
                                <hr />
                                <template
                                    v-if="
                                        currentUser.permissions &&
                                            currentUser.permissions.length > 0
                                    "
                                >
                                    <b-field horizontal label="Permissions">
                                        <div class="buttons">
                                            <b-button
                                                v-for="permission in currentUser.permissions"
                                                :key="permission.id"
                                                type="is-primary"
                                            >
                                                {{ permission.name }}
                                            </b-button>
                                        </div>
                                    </b-field>
                                    <hr />
                                </template>

                                <b-field horizontal label="">
                                    <b-field>
                                        <p class="control has-text-right">
                                            <b-button
                                                @click="saveUser"
                                                type="is-primary"
                                                :loading="loading.save"
                                            >
                                                Save
                                            </b-button>
                                            <b-button
                                                v-if="exists"
                                                @click="getUser"
                                                type="is-default"
                                                :loading="loading.get"
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
                            <b-field horizontal label="Change password">
                                <b-field
                                    label="New Password"
                                    label-for="password"
                                    expand
                                >
                                    <b-input
                                        id="password"
                                        type="password"
                                        v-model="password"
                                    ></b-input>
                                </b-field>
                                <b-field
                                    label="Confirm Password"
                                    label-for="password_confirmation"
                                    expand
                                    :type="
                                        !passwordConfirmed ? 'is-danger' : null
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
                                        v-model="password_confirmation"
                                    ></b-input>
                                </b-field>
                            </b-field>
                            <b-field horizontal label="">
                                <b-field>
                                    <p class="control has-text-right">
                                        <b-button
                                            @click="changePassword"
                                            type="is-primary"
                                            :loading="loading.password"
                                            :disabled="!passwordValidated"
                                        >
                                            Change password
                                        </b-button>
                                    </p>
                                </b-field>
                            </b-field>
                            <hr />
                            <b-field horizontal label="Delete">
                                <b-field>
                                    <div class="buttons">
                                        <b-button
                                            @click="confirmDestroy"
                                            type="is-danger"
                                            outlined
                                        >
                                            Delete my account
                                        </b-button>
                                    </div>
                                </b-field>
                            </b-field>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from "@b/components/TitleBar";
import CurrentUser from "@b/models/CurrentUser";

import { mapState, mapActions } from "vuex";

export default {
    name: "UserAccount",
    components: { TitleBar },
    data() {
        return {
            avatar: null,
            password: null,
            password_confirmation: null
        };
    },
    computed: {
        ...mapState("auth", {
            currentUser: state => state.user,
            loading: state => state.loading
        }),
        id() {
            return this.currentUser.id;
        },
        exists() {
            return !!this.id;
        },
        passwordConfirmed() {
            return this.password === this.password_confirmation;
        },
        passwordValidated() {
            if (this.password == null || this.password == "") {
                return false;
            }
            return this.passwordConfirmed;
        }
    },
    methods: {
        ...mapActions("auth", [
            "getUser" // -> this.foo()
        ]),
        async saveUser() {
            this.loading.save = true;
            await this.currentUser.save().then(response => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `Your account has been updated`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
            this.loading.save = false;
        },
        async changeAvatar() {
            this.loading.avatar = true;
            var formData = new FormData();
            formData.append("avatar", this.avatar);
            await this.currentUser.updateAvatar(formData).then(r => {
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `Your Avatar has been changed`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
            this.loading.avatar = false;
            this.avatar = null;
        },
        async deleteAvatar() {
            this.avatar = null;
            this.loading.avatar = true;

            await this.currentUser.deleteAvatar().then(r => {
                this.getUser();
                this.$buefy.snackbar.open({
                    duration: 2000,
                    message: `Your Avatar has been deleted`,
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                });
            });
            this.loading.avatar = false;
        },
        async changePassword() {
            this.loading.password = true;
            await this.currentUser
                .updatePassword({
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(r => {
                    this.$buefy.snackbar.open({
                        duration: 2000,
                        message: `Your password has been changed`,
                        type: "is-info",
                        position: "is-bottom-right",
                        queue: false
                    });
                    this.password = null;
                    this.password_confirmation = null;
                });
            this.loading.password = false;
        },
        async deleteUser() {
            await this.currentUser.delete().then(response => {
                window.location.href = "/logout";
            });
        },

        confirmDestroy() {
            this.$buefy.dialog.confirm({
                title: "Destroying your account",
                message: `Are you sure you want to <b>destroy</b> your account? This action can NOT be undone.`,
                confirmText: "Destroy me",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteUser()
            });
        }
    },
    created() {},
    mounted() {}
};
</script>
