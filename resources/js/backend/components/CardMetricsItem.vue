<template>
    <div class="metrics-item">
        <div class="metrics-title" v-if="title">{{ title }}</div>
        <div class="metrics-value title is-3" v-if="value != null">
            {{ value }}
        </div>
        <div class="metrics-subvalue" v-if="subvalue">
            <b-icon v-if="icon" :icon="icon" size="is-small"></b-icon>
            {{ subvalue }}
        </div>
        <div class="metrics-subvalue" v-else-if="startValue && endValue">
            <b-icon :icon="icon || variationIcon" size="is-small"></b-icon>
            {{ variation }}%
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CardMetricsItem",
    components: {},
    props: ["title", "value", "subvalue", "icon", "startValue", "endValue"],
    data() {
        return {};
    },
    computed: {
        variation() {
            if (!(this.startValue && this.endValue)) {
                return 0;
            }
            return Math.round(
                this.computeVariation(this.startValue, this.endValue) * 100
            );
        },
        variationIcon() {
            return this.computeIcon(this.variation);
        }
    },
    methods: {
        computeIcon(value) {
            if (value > 0) {
                return "trending-up";
            } else if (value < 0) {
                return "trending-down";
            }
            return "minus";
        },
        computeVariation(start, end) {
            if (!start || !end) {
                return 0;
            }

            return (end - start) / start;
        }
    },
    mounted() {},
    created() {}
};
</script>

<style></style>
