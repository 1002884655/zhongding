<template>
    <div class="hesc_page hesc_xiangMuDongTai">
        <div class="hesc_listItem" v-for="(item, index) in list" :key="index">
            <div class="hesc_title hesc_flexH" @click="activeIndex = activeIndex === index ? null : index">
                <span class="hesc_flexItem">{{ index+ 1 }}. {{ item.title }}</span>
                <span>{{ item.createDate }}</span>
            </div>
            <div class="hesc_itemContent" v-if="activeIndex === index">
                <span class="hesc_contentTitle">{{ item.title }}</span>
                <span class="hesc_content" v-if="item.content">{{ item.content }}</span>
                <div class="hesc_imgs">
                    <div v-for="(subItem, subIndex) in item.files" :key="subIndex">
                        <img class="hesc_contain" @click="currentBigImg = subItem.url" :src="subItem.url" v-if="subItem.type === 'img'" alt="">
                        <video :src="subItem.url" v-if="subItem.type === 'video'" controls></video>
                    </div>
                </div>
            </div>
        </div>
        <div class="hesc_bigImg" v-if="currentBigImg" @click="currentBigImg = ''">
            <img :src="currentBigImg" class="hesc_centerLabel" alt="">
        </div>
    </div>
</template>
<script>
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const { project_list: list } = language[langKey].gong_si_xin_wen

export default {
    components: {
    },
    data() {
        return {
            currentBigImg: '',
            activeIndex: null,
            list: [
                {
                    title: list[0].title,
                    content: list[0].content,
                    createDate: '2025-04-16',
                    files: [
                        {
                            type: 'video',
                            url: require('@/assets/img/project/1/1.mp4'),
                        },
                        {
                            type: 'video',
                            url: require('@/assets/img/project/1/2.mp4'),
                        },
                        {
                            type: 'video',
                            url: require('@/assets/img/project/1/3.mp4'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/1.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/2.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/3.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/4.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/5.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/6.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/7.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/8.jpg'),
                        },
                        {
                            type: 'img',
                            url: require('@/assets/img/project/1/9.jpg'),
                        },
                    ],
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