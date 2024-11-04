<template>
    <div class="hesc_components hesc_chanPinZhanShi">
        <ItemBorder :name="name" @more="$router.push({ name: 'chanPinZhanShi' })">
            <div class="hesc_content">
                <el-carousel trigger="click" height="251px" :interval="5000" indicator-position="none">
                    <el-carousel-item v-for="item in list" :key="item">
                        <div class="hesc_imgItem">
                            <span>{{ item.name }}</span>
                            <img :src="item.url" class="hesc_contain" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].home
const { product_name } = systemLang
export default {
    name: 'ChanPinZhanShi',
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
                    url: require('./img/product1.jpg'),
                    name: product_name[0],
                },
                {
                    url: require('./img/product2.jpg'),
                    name: product_name[1],
                },
                {
                    url: require('./img/product3.jpg'),
                    name: product_name[2],
                },
                {
                    url: require('./img/product4.jpg'),
                    name: product_name[3],
                },
                {
                    url: require('./img/product5.jpg'),
                    name: product_name[4],
                },
                {
                    url: require('./img/product6.jpg'),
                    name: product_name[5],
                },
                {
                    url: require('./img/product7.jpg'),
                    name: product_name[6],
                },
                {
                    url: require('./img/product8.jpg'),
                    name: product_name[7],
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