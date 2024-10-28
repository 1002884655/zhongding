<template>
    <div class="hesc_page hesc_error">
        <span class="hesc_centerLabel">404</span>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    destroyed() {
        
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