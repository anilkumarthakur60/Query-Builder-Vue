<template>
    <b-field>
        <p class="control">
            <b-dropdown
                v-model="filter.object"
                aria-role="list"
                v-on:change="filter.value = null"
            >
                <button class="button is-small" slot="trigger">
                    <span>{{ filter.object.label }}</span>
                    <b-icon icon="chevron-down" size="is-small"></b-icon>
                </button>

                <b-dropdown-item
                    v-for="filter in filters"
                    :value="filter"
                    :key="filter.field"
                    >{{ filter.label }}</b-dropdown-item
                >
            </b-dropdown>
        </p>
        <template>
            <b-select
                v-if="filterType == 'select'"
                placeholder="Select"
                v-model="filter.value"
                size="is-small"
                v-on:input="$emit('input',filter);"
            >
                <option
                    v-for="option in filter.object.options"
                    :value="option"
                    :key="option"
                >
                    {{ option }}
                </option>
            </b-select>
            <b-datepicker
                v-else-if="filterType == 'date'"
                placeholder="Select a Date"
                icon="calendar"
                trap-focus
                size="is-small"
                v-model="filter.value"
                :max-date="filter.object.maxDate || null"
                :min-date="filter.object.minDate || null"
                v-on:input="$emit('input',filter);"
            >
            </b-datepicker>
            <b-input
                v-else
                icon="magnify"
                type="search"
                placeholder="Search..."
                size="is-small"
                v-model="filter.value"
                v-on:input="$emit('input',filter);"
            ></b-input>
        </template>
        <b-button
            size="is-small"
            icon-left="close"
            @click="clearFilter"
            :disabled="!isFiltered"
        ></b-button>
    </b-field>
</template>

<script>
import { cloneDeep, tap, set } from "lodash";

export default {
    name: "FilterBar",
    components: {},
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, Function],
            default: {
                object: {
                    label: "Filters",
                    type: "search"
                },
                value: null
            }
        },
        filters: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            filter: this.value
        };
    },
    watch: {
        /**
         * When v-model is changed set the new selected item.
         */
        value(value) {
            this.filter = value;
        }
    },
    computed: {
        isFiltered() {
            return !!(this.filter && this.filter.value);
        },
        filterType() {
            if (!this.filter) {
                return null;
            }
            return this.filter.object.type;
        },
    },
    methods: {
        clearFilter() {
            this.filter.value = null;
            this.$emit('input',this.filter);
        }
    },
    created() {},
    mounted() {}
};
</script>
