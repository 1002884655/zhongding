<template>
    <div class="hesc_page hesc_gongSiJieShao">
        <div class="hesc_text" v-html="systemLang.company_culture_content"></div>
        <img src="@/assets/img/bg.jpg" width="100%" style="margin-top: 20px;" alt="">
    </div>
</template>
<script>
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].gong_si_jian_jie

export default {
    components: {
    },
    data() {
        return {
            systemLang,
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