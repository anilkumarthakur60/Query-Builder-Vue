export default {
    name: "notificationCenter",
    namespaced: true,
    state: () => ({
        open: false,
        notifications: [
            {
                id: 1,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                type: "is-primary"
            },
            {
                id: 2,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                type: "is-default"
            }
        ],
        loading: {}
    }),
    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value;
        },
        /* Notification center */
        toggleNotificationCenter(state) {
            state.open = !state.open;
        }
    },
    actions: {},
    getters: {}
};
