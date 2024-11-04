<template>
    <div class="hesc_page hesc_gongSiZiZhi">
        <span class="hesc_desc">{{ systemLang.company_qualification_desc }}</span>
        <div>
            <div class="hesc_listItem" v-for="(item, index) in list" :key="index">
                <div @click="currentImg = item.url">
                    <img :src="item.url" class="hesc_centerLabel hesc_contain" alt="">
                </div>
                <span class="hesc_name">{{ item.name }}</span>
            </div>
        </div>
        <div class="hesc_fullImg" v-if="currentImg" @click="currentImg = ''">
            <img :src="currentImg" class="hesc_centerLabel" alt="">
        </div>
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
            currentImg: '',
            systemLang,
            list: [
                {
                    url: require('./img/zhuanli_1_1.jpg'),
                    name: '设备烘干单元人工辅助穿带装置-1',
                },
                {
                    url: require('./img/zhuanli_1_2.jpg'),
                    name: '设备烘干单元人工辅助穿带装置-2',
                },
                {
                    url: require('./img/zhuanli_2_1.jpg'),
                    name: '涂布机版辊更换装置-1',
                },
                {
                    url: require('./img/zhuanli_2_2.jpg'),
                    name: '涂布机版辊更换装置-2',
                },
                {
                    url: require('./img/zhuanli_3_1.jpg'),
                    name: '一种热风烘干用风刀结构-1',
                },
                {
                    url: require('./img/zhuanli_3_2.jpg'),
                    name: '一种热风烘干用风刀结构-2',
                },
                {
                    url: require('./img/zhuanli_4_1.jpg'),
                    name: '一种双工位收放卷装置-1',
                },
                {
                    url: require('./img/zhuanli_4_2.jpg'),
                    name: '一种双工位收放卷装置-2',
                },
                {
                    url: require('./img/zhuanli_5_1.jpg'),
                    name: '一种配重式压平辊机构-1',
                },
                {
                    url: require('./img/zhuanli_5_2.jpg'),
                    name: '一种配重式压平辊机构-2',
                },
                {
                    url: require('./img/zhuanli_6_1.jpg'),
                    name: '一种组合式烘干装置-1',
                },
                {
                    url: require('./img/zhuanli_6_2.jpg'),
                    name: '一种组合式烘干装置-2',
                },
                {
                    url: require('./img/img1.jpg'),
                    name: '涂碳铝箔石墨烯涂层集流体系统',
                },
                {
                    url: require('./img/img2.jpg'),
                    name: '动力电池集流体耐热涂碳铝箔管理系统',
                },
                {
                    url: require('./img/img3.jpg'),
                    name: '铝箔生产智能清洗操纵平台',
                },
                {
                    url: require('./img/img4.jpg'),
                    name: '铝箔铝液远程在线监控系统',
                },
                {
                    url: require('./img/img5.jpg'),
                    name: '基于大数据的退火温控系统',
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