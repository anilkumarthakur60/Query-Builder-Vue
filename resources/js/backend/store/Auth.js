import CurrentUser from "@b/models/CurrentUser";
import { NotificationProgrammatic as Notification } from "buefy";

export default {
    name: "auth",
    namespaced: true,
    state: () => ({
        user: null,
        loading: {
            get: false,
            save: false,
            password: false,
            avatar: false
        }
    }),
    mutations: {
        setUser(state, currentUser) {
            state.user = currentUser;
        },
        setLoading(state, payload) {
            state.loading[payload.key] = payload.value;
        }
    },
    actions: {
        async getUser({ commit, state }) {
            //prevent load the user if it is already loading
            if (state.loading.get) {
                return false;
            }
            commit("setLoading", { key: "get", value: true });
            let currentUser = await CurrentUser.include("roles", "permissions")
                .$find("current")
                .catch(error => {
                    Notification.open({
                        duration: 10000,
                        message: `We can't load the user, please refresh the page`,
                        position: "is-bottom",
                        type: "is-danger",
                        queue: false,
                        closable: false
                    });
                });
            commit("setUser", currentUser);
            commit("setLoading", { key: "get", value: false });
            return currentUser;
        }
    },
    getters: {}
};
