import Role from "@b/models/Role";
import Permission from "@b/models/Permission";

export default {
    name: "rolesAndPermissions",
    namespaced: true,
    state: () => ({
        roles: [],
        permissions: [],
        loading: {
            roles: false,
            permissions: false
        }
    }),
    mutations: {
        setRoles(state, roles) {
            state.roles = roles;
        },
        setPermissions(state, permissions) {
            state.permissions = permissions;
        }
    },
    actions: {
        async getRoles({ commit }) {
            let roles = await Role.include("permissions").$get();
            commit("setRoles", roles);
            return roles;
        },
        async getPermissions({ commit }) {
            let permissions = await Permission.$get();
            commit("setPermissions", permissions);
            return permissions;
        }
    },
    getters: {}
};
