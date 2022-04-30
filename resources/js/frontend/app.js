// Axios & Echo global
require("../bootstrap");
require("@s/fake.scss"); //fix laravel mix bug async router
/* Core */
import Vue from "vue";
import Buefy from "buefy";

/* Router & Store */
// import router from "./router";
// import store from "./store";

/* Vue. Main component */
// import App from "./App.vue";

/* Vue. Component in recursion */
// import AsideMenuList from "@b/components/AsideMenuList";

/* Collapse mobile aside menu on route change */
// router.afterEach(() => {
// });

Vue.config.productionTip = false;

/* These components are used in recursion algorithm */
// Vue.component("AsideMenuList", AsideMenuList);

/* Main component */
// Vue.component("App", App);

/* Buefy */
Vue.use(Buefy);

/* This is main entry point */

new Vue({
    el:"#app",
    mounted() {
    }
})
