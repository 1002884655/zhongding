<template>
    <div class="hesc_components hesc_gongSiXinWen">
        <ItemBorder :name="name" @more="$router.push({ name: 'gongSiXinWen' })">
            <div class="hesc_content">
                <div class="hesc_item hesc_flexH" @click="$router.push({ name: item.routeName })" v-for="(item, index) in list" :key="index">
                    <span class="hesc_flexItem" :title="item.title">{{ `${index + 1}. ${item.title}` }}</span>
                    <span>{{ item.createDate }}</span>
                </div>
            </div>
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const { project_list } = language[langKey].gong_si_xin_wen
export default {
    name: 'GongSiXinWen',
    props: {
        name: {
            type: String,
            default: '',
        },
    },
    components: {
        ItemBorder,
    },
    data() {
        return {
            list: [
                {
                    title: project_list[0].title,
                    routeName: 'xiangMuDongTai',
                    createDate: '2025-04-16',
                },
            ],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
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