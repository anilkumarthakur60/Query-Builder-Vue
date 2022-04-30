<template>
    <b-sidebar position="static" :reduce="reduce" open class="bb-scrollbar">
        <div class="">
            <b-menu class="is-custom-mobile">
                <b-menu-list
                    :label="menuList.label"
                    v-for="(menuList, index) in menu"
                    :key="index"
                >
                    <b-menu-item
                        v-for="(menuItem, index) in menuList.menu"
                        :icon="menuItem.icon"
                        :key="index"
                        :to="menuItem.to"
                        :href="menuItem.href"
                        :tag="menuItem.to ? 'router-link' : 'a'"
                        :title="menuItem.label"
                    >
                        <template slot="label" slot-scope="props">
                            <span>
                                {{ menuItem.label }}
                            </span>
                            <b-icon
                                v-if="menuItem.menu"
                                class="is-pulled-right"
                                :icon="
                                    props.expanded ? 'minus' : 'chevron-down'
                                "
                            ></b-icon>
                        </template>
                        <b-menu-item
                            v-for="(menuSubItem, index) in menuItem.menu"
                            :key="index"
                            :icon="menuSubItem.icon"
                            :label="menuSubItem.label"
                            :to="menuSubItem.to"
                            :href="menuSubItem.href"
                            :tag="menuSubItem.to ? 'router-link' : 'a'"
                            :title="menuItem.label"
                        ></b-menu-item>
                    </b-menu-item>
                </b-menu-list>
            </b-menu>
        </div>
        <div>
            <div class="button-expand" @click="reduce = !reduce">
                <b-icon
                    :icon="reduce ? 'chevron-right' : 'chevron-left'"
                ></b-icon>
            </div>
        </div>
    </b-sidebar>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "AsideMenu",
    components: {},
    data() {
        return {
            mobile: "reduce",
            reduce: false
        };
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        isMobile() {
            return window.innerWidth < 960;
        }
    },
    methods: {},
    created() {
        this.reduce = this.isMobile;
    }
};
</script>
