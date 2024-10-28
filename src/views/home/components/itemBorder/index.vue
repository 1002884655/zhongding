<template>
    <div class="hesc_components hesc_itemBorder hesc_flexV">
        <div class="hesc_itemTop hesc_flexH">
            <span class="hesc_name">{{ name }}</span>
            <div class="hesc_flexItem"></div>
            <slot name="top"></slot>
            <a class="el-icon-d-arrow-right hesc_more" v-if="showMore" @click="$emit('more')"></a>
        </div>
        <div class="hesc_flexItem">
            <div class="hesc_fullChild">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        showMore: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        init() {

        },
    },
}
</script>

<style lang="scss" scoped>
@import './page.scss';
</style>