<template>
    <div class="hesc_page hesc_system">
        <div class="hesc_pageBox">
            <div class="hesc_mainHeader hesc_flexH">
                <div class="hesc_logo"></div>
                <div class="hesc_title hesc_flexItem">
                    <span>杭州重鼎智能设备有限公司</span>
                    <span>Hangzhou Zhongding Intelligent Equipment Co., Ltd</span>
                </div>
                <a class="hesc_lang" @click="setLang('Chinese')">中文版</a>
                <a class="hesc_lang" @click="setLang('English')">English</a>
            </div>
            <div class="hesc_tab">
                <div class="hesc_subContainer hesc_flexH">
                    <div 
                        class="hesc_tabItem hesc_flexItem"
                        v-for="(item, index) in tab"
                        :key="index"
                        :class="{active: currentTab === item.value}">
                        <a @click="cutTab(item)">{{ item.name }}</a>
                    </div>
                </div>
            </div>
            <div class="hesc_subPage">
                <router-view></router-view>
            </div>
        </div>
        <div class="hesc_mainFooter">
            <div class="hesc_link">
                <a class="hesc_item" v-for="(item, index) in footer" :key="index" @click="cutTab(item)">
                    {{ item.name }}
                </a>
            </div>
            <div class="hesc_icp">
                <span>{{ systemLang.copyright }}</span>
                <a>冀ICP备07013566号-1</a>
            </div>
            <span class="hesc_copyRight">Copyright © 2006-2023 www.zhongding.net All rights reserved</span>
        </div>
    </div>
</template>
<script>
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].system

export default {
    data() {
        return {
            systemLang,
            tab: [
                {
                    name: systemLang.home, // 网站首页
                    value: 'home',
                },
                {
                    name: systemLang.about_us, // 公司简介
                    value: 'gongSiJianJie',
                },
                {
                    name: systemLang.company_qualification, // 公司实力
                    value: 'gongSiShiLi',
                },
                {
                    name: systemLang.products, // 产品展示
                    value: 'chanPinZhanShi',
                },
                {
                    name: systemLang.sales_reference, // 销售业绩
                    value: 'xiaoShouYeJi',
                },
                {
                    name: systemLang.news, // 公司新闻
                    value: 'gongSiXinWen',
                },
                {
                    name: systemLang.contact_us, // 联系我们
                    value: 'lianXiWoMen',
                },
            ],
            currentTab: '',
            footer: [
                {
                    name: systemLang.about_us, // 公司介绍
                    value: 'gongSiJianJie',
                },
                {
                    name: systemLang.company_qualification, // 公司实力
                    value: 'gongSiShiLi',
                },
                {
                    name: systemLang.recruitment, // 人才招聘
                    value: 'renCaiZhaoPin',
                },
                {
                    name: systemLang.tender_announcement, // 招标公告
                    value: 'zhaoBiaoGongGao',
                },
                {
                    name: systemLang.contact_us, // 联系我们
                    value: 'lianXiWoMen',
                },
            ],
        }
    },
    watch: {
        $route() {
            this.routeChange()
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    created() {
        this.routeChange()
    },
    methods: {
        init() {
        },
        routeChange() {
            const { $route: { matched } } = this
            if(matched.length > 1) {
                this.currentTab = matched[1].name
            }
        },
        setLang(lang) {
            window.localStorage.language = lang
            window.location.reload(true)
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