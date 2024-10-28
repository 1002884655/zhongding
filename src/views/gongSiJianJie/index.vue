<template>
    <div class="hesc_page hesc_gongSiJianJie">
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
const systemLang = language[langKey].gong_si_jian_jie

export default {
    components: {
    },
    data() {
        return {
            systemLang,
            currentTab: 'gongSiJieShao',
            tab: [
                {
                    name: systemLang.co_introduction,
                    value: 'gongSiJieShao',
                },
                {
                    name: systemLang.company_culture,
                    value: 'gongSiWenHua',
                },
                {
                    name: systemLang.company_honour,
                    value: 'gongSiRongYu',
                },
                {
                    name: systemLang.tender_announcement,
                    value: 'zhaoBiaoGongGao',
                },
                {
                    name: systemLang.recruitment,
                    value: 'renCaiZhaoPin',
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