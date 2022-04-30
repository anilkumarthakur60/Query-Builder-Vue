<template>
    <div class="bb-title-bar">
        <div class="level">
            <div class="level-left">
                <h1 class="title">{{ title }}</h1>
            </div>
            <div class="level-right">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li v-for="(menuItem, index) in menu" :key="index">
                            <router-link v-if="menuItem.to" :to="menuItem.to">{{
                                menuItem.name
                            }}</router-link>
                            <a
                                v-else-if="menuItem.href"
                                :href="menuItem.href"
                                >{{ menuItem.name }}</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleBar",
    props: {
        title: {
            type: String,
            default: () => ""
        },
        menu: {
            type: Array,
            default: () => []
        }
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    created() {}
};
</script>
