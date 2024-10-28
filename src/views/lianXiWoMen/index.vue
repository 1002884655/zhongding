<template>
    <div class="hesc_page hesc_lianXiWoMen">
        <span class="hesc_name">{{ systemLang.company_name }}</span>
        <span class="hesc_text">{{ systemLang.address }}：{{ systemLang.address_value }}</span>
        <span class="hesc_text">{{ systemLang.post_code }}：311115</span>
        <span class="hesc_text">{{ systemLang.telephone }}：19905815631</span>
        <span class="hesc_text">{{ systemLang.url }}：</span>
        <span class="hesc_text">{{ systemLang.email }}：</span>
    </div>
</template>
<script>
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].lian_xi_wo_men

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
    created() {
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