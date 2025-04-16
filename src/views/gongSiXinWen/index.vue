<template>
    <div class="hesc_page hesc_gongSiXinWen">
        <div class="hesc_tab hesc_flexH">
            <a
                class="hesc_item hesc_flexItem"
                v-for="(item, index) in tab"
                :key="index"
                @click="cutTab(item)"
                :class="{active: currentTab === item.value}">
                {{ item.name }}
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].gong_si_xin_wen

export default {
    components: {
    },
    data() {
        return {
            systemLang,
            currentTab: 'xiangMuDongTai',
            tab: [
                {
                    name: systemLang.project_status,
                    value: 'xiangMuDongTai',
                },
                {
                    name: systemLang.company_development,
                    value: 'gongSiFaZhan',
                },
                {
                    name: systemLang.marketing,
                    value: 'shiChangYingXiao',
                },
            ],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    watch: {
        $route() {
            this.routeChange()
        },
    },
    created() {
        this.routeChange()
    },
    methods: {
        init() {

        },
        routeChange() {
            const { $route: { matched } } = this
            if(matched.length > 2) {
                this.currentTab = matched[2].name
            }
        },
        cutTab(item) {
            const { value } = item
            if(value) {
                const { $route: { name } } = this
                if(name !== value) {
                    this.$router.push({ name: value })
                }
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import './page.scss';
</style>