<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    :src="logo"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div" class="p-0">
                <b-input placeholder="Search..." type="search" icon="magnify">
                </b-input>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-dropdown
                position="is-bottom-left"
                hoverable
                boxed
                class=""
            >
                <template slot="label">
                    <figure class="image avatar is-24x24">
                        <img class="is-rounded" :src="currentUser.avatar" />
                    </figure>
                    <span class="h6">
                        {{ currentUser.fullname }}
                    </span>
                </template>
                <b-navbar-item tag="div" aria-role="menuitem">
                    <b-taglist>
                        <b-tag
                            v-for="role in currentUser.roles"
                            :key="role.id"
                            type="is-primary"
                        >
                            {{ role.name }}
                        </b-tag>
                    </b-taglist>
                </b-navbar-item>
                <hr class="dropdown-divider" />
                <b-navbar-item
                    v-for="(item, index) in dropdownMenu"
                    :key="index"
                    :tag="item.to ? 'router-link' : 'a'"
                    :to="item.to"
                    :href="item.href"
                >
                    <b-icon :icon="item.icon" size="is-small"></b-icon>
                    <span>
                        {{ item.label }}
                    </span>
                </b-navbar-item>
            </b-navbar-dropdown>

            <b-navbar-item
                @click="toggleNotificationCenter()"
                class="has-divider has-divider-left is-icon"
            >
                <b-icon icon="bell-outline" size="is-small"></b-icon>
            </b-navbar-item>
            <b-navbar-item href="/logout" class="is-icon">
                <b-icon icon="logout" size="is-small"></b-icon>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
// @b/ is an alias to /src/backend
import { mapState, mapMutations } from "vuex";

export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            menu: []
        };
    },
    computed: {
        ...mapState("auth", {
            currentUser: state => state.user
        }),
        ...mapState("notificationCenter", ["notifications"]),
        ...mapState(["logo"]),
        dropdownMenu() {
            return [
                {
                    label: "Dashboard",
                    icon: "view-dashboard-outline",
                    href: null,
                    to: { name: "dashboard" }
                },
                {
                    label: "My Account",
                    icon: "account-circle-outline",
                    href: null,
                    to: { name: "users.account" }
                },
                {
                    label: "Logout",
                    icon: "logout",
                    href: "/logout",
                    to: null
                }
            ];
        }
    },
    methods: {
        ...mapMutations("notificationCenter", ["toggleNotificationCenter"])
    },
    created() {}
};
</script>
