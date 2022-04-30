import Vue from "vue";
import Vuex from "vuex";

/* modules */
import auth from "@b/store/Auth";
import rolesAndPermissions from "@b/store/rolesAndPermissions";
import notificationCenter from "@b/store/NotificationCenter";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        notificationCenter,
        rolesAndPermissions
    },
    state: {
        charts: {
            colors: ["#0984E3", "#B86BFF", "#043053"]
        },
        logo: "/images/logo_buefboard.svg",
        icon: "/images/icon_buefboard.svg"
    },
    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value;
        }
    },
    actions: {}
});
