<template>
    <div class="card bb-card-metrics">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CardMetrics",
    components: {},
    props: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {},
    created() {}
};
</script>

<style></style>
