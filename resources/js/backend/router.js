import Vue from "vue";
import Router from "vue-router";
import store from "./store";
/* NProgress */
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () =>
                import(
                    /* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"
                )
        },
        //User Management
        {
            path: "/users/index",
            name: "users.index",
            component: () =>
                import(
                    /* webpackChunkName: "users.index" */ "./views/users/UserIndex.vue"
                ),
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
        },
        {
            path: "/users/new",
            name: "users.new",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                ),
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
        },
        {
            path: "/users/:id",
            name: "users.edit",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                ),
            props: true,
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
        },
        {
            path: "/account",
            name: "users.account",
            component: () =>
                import(
                    /* webpackChunkName: "users.profile" */ "./views/users/UserAccount.vue"
                )
        },

        // Roles Management
        {
            path: "/roles/index",
            name: "roles.index",
            component: () =>
                import(
                    /* webpackChunkName: "roles.index" */ "./views/roles/RoleIndex.vue"
                ),
            meta: {
                roles: ["admin"]
            }
        },

        // Activities Management
        {
            path: "/activities/index",
            name: "activities.index",
            component: () =>
                import(
                    /* webpackChunkName: "roles.index" */ "./views/activities/ActivitiesIndex.vue"
                ),
            meta: {
                roles: ["admin"]
            }
        },
        // NotFound
        {
            path: "*",
            name: "404",
            component: () =>
                import(/* webpackChunkName: "404" */ "./views/NotFound.vue")
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    //check if route require permissions
    if (!to.meta.permissions && !to.meta.roles) {
        return next();
    }
    //we need to load the user before accessing any route
    let user = store.state.auth.user;
    if (!user) {
        await store.dispatch("auth/getUser");
        user = store.state.auth.user;
    }
    //first check for permissions
    //a god can pass every guards
    if (to.meta.permissions) {
        if (user.hasRole("god")) {
            return next();
        }
        if (user.hasPermission(to.meta.permissions)) {
            return next();
        }
    }
    // then check for roles
    //a god can pass every guards
    if (to.meta.roles) {
        if (user.hasRole("god")) {
            return next();
        }
        if (user.hasRole(to.meta.roles)) {
            return next();
        }
    }
    return next({ name: "dashboard" });
});

/* Router loading indicator */
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done();
});

export default router;
