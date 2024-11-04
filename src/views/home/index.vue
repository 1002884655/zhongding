<template>
    <div class="hesc_page hesc_home">
        <!-- 轮播图 -->
        <div class="hesc_banner">
            <el-carousel trigger="click" height="400px" :interval="5000">
                <el-carousel-item v-for="item in banner" :key="item">
                    <div class="hesc_bannerItem">
                        <img :src="item.url" class="hesc_cover" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 模块列表 -->
        <div class="hesc_flexH hesc_moduleBox" style="height: 320px;">
            <!-- 公司视频 -->
            <div class="hesc_left">
                <GongSiShiPin :name="systemLang.company_display"></GongSiShiPin>
            </div>
            <!-- 公司简介 -->
            <div class="hesc_flexItem hesc_center">
                <GongSiJianJie :name="systemLang.brief_introduction"></GongSiJianJie>
            </div>
            <!-- 产品展示 -->
            <div class="hesc_right">
                <ChanPinZhanShi :name="systemLang.products_show"></ChanPinZhanShi>
            </div>
        </div>
        <!-- 模块列表 -->
        <div class="hesc_flexH hesc_moduleBox" style="height: 340px;">
            <!-- 企业文化 -->
            <div class="hesc_left">
                <QiYeWenHua :name="systemLang.company_culture"></QiYeWenHua>
            </div>
            <!-- 公司新闻 -->
            <div class="hesc_flexItem hesc_center">
                <GongSiXinWen :name="systemLang.company_news"></GongSiXinWen>
            </div>
            <!-- 友情链接 -->
            <div class="hesc_right">
                <YouQingLianJie :name="systemLang.friendship_link"></YouQingLianJie>
            </div>
        </div>
    </div>
</template>
<script>
import GongSiShiPin from './components/gongSiShiPin/index.vue'
import ChanPinZhanShi from './components/chanPinZhanShi/index.vue'
import GongSiJianJie from './components/gongSiJianJie/index.vue'
import QiYeWenHua from './components/qiYeWenHua/index.vue'
import GongSiXinWen from './components/gongSiXinWen/index.vue'
import YouQingLianJie from './components/youQingLianJie/index.vue'
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].home

export default {
    components: {
        GongSiShiPin,
        ChanPinZhanShi,
        GongSiJianJie,
        QiYeWenHua,
        GongSiXinWen,
        YouQingLianJie,
    },
    data() {
        return {
            systemLang,
            banner: [
                {
                    url: require('./img/img1.jpg'),
                    name: '',
                },
                {
                    url: require('./img/img2.jpg'),
                    name: '',
                },
                {
                    url: require('./img/img3.jpg'),
                    name: '',
                },
            ],
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