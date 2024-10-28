<template>
    <div class="hesc_components hesc_chanPinZhanShi">
        <ItemBorder :name="name" @more="$router.push({ name: 'chanPinZhanShi' })">
            <div class="hesc_content">
                <el-carousel trigger="click" height="251px" :interval="5000" indicator-position="none">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
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