<template>
    <div id="app">
        <template v-if="currentUser">
            <nav-bar class="bb-navbar" />
            <div class="is-flex bb-content">
                <aside-menu :menu="menu" class="bb-sidebar" />
                <div class="bb-view">
                    <transition name="slideIn">
                        <router-view />
                    </transition>
                </div>
            </div>
            <notification-center class="bb-notification-center" />
        </template>
        <b-loading active v-else></b-loading>
    </div>
</template>

<script>
// @b/ is an alias to /src/backend
import { mapState, mapActions } from "vuex";

import AsideMenu from "@b/components/AsideMenu";
import NotificationCenter from "@b/components/NotificationCenter";
import NavBar from "@b/components/NavBar";

export default {
    name: "App",
    components: { AsideMenu, NavBar, NotificationCenter },
    data() {
        return {
            menu: [
                {
                    label: "Général",
                    icon: "cog",
                    menu: [
                        {
                            label: "Dashboard",
                            icon: "view-dashboard-outline",
                            to: "/"
                        },
                        {
                            label: "Users",
                            icon: "contacts-outline",
                            to: "/users/index"
                        },
                        {
                            label: "Roles",
                            icon: "account-key-outline",
                            to: "/roles/index"
                        },
                        {
                            label: "Activity",
                            icon: "radar",
                            to: "/activities/index"
                        }
                    ]
                },
                {
                    label: "You",
                    menu: [
                        {
                            label: "My Account",
                            icon: "account-circle-outline",
                            to: "/account"
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        ...mapState("auth", {
            currentUser: state => state.user
        })
    },
    methods: {
        ...mapActions("auth", ["getUser", "loading"]),
        ...mapActions("rolesAndPermissions", ["getRoles", "getPermissions"])
    },
    created() {
        if (!this.currentUser) {
            this.getUser();
        }
        this.getRoles();
        this.getPermissions();
    },
    mounted() {
        window.addEventListener("offline", () => {
            this.$buefy.snackbar.open({
                duration: 10000,
                message:
                    "You are not online anymore, please check your internet connection",
                type: "is-danger",
                position: "is-bottom",
                actionText: "Close",
                queue: false,
                onAction: () => {}
            });
        });
    }
};
</script>
