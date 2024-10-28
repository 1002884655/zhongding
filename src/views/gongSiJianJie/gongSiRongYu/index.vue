<template>
    <div class="hesc_page hesc_gongSiJieShao">
        <div class="hesc_listItem" v-for="(item, index) in list" :key="index">
            <div>

            </div>
        </div>
    </div>
</template>
<script>
// import language from '@/assets/js/language'
// const { localStorage: { language: windowLang } } = window
// const langKey = windowLang || 'Chinese'
// const systemLang = language[langKey].gong_si_jian_jie

export default {
    components: {
    },
    data() {
        return {
            list: [{}, {}, {}, {}, {}, {}, {},],
        }
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