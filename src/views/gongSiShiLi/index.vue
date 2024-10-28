<template>
    <div class="hesc_page hesc_gongSiShiLi">
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
const systemLang = language[langKey].gong_si_shi_li

export default {
    components: {
    },
    data() {
        return {
            systemLang,
            currentTab: 'gongSiZiZhi',
            tab: [
                {
                    name: systemLang.company_qualification,
                    value: 'gongSiZiZhi',
                },
                {
                    name: systemLang.design_development,
                    value: 'sheJiKaiFa',
                },
                {
                    name: systemLang.machining_manufacturing,
                    value: 'jiaGongZhiZao',
                },
                {
                    name: systemLang.equipment_assembly,
                    value: 'sheBeiZuZhuang',
                },
                {
                    name: systemLang.quality_assurance,
                    value: 'pinZhiBaoZheng',
                },
                {
                    name: systemLang.after_sales_service,
                    value: 'shouHouFuWu',
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