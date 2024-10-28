<template>
    <div class="hesc_components hesc_gongSiShiPin">
        <ItemBorder :name="name" :showMore="false">
            <div class="hesc_videoBox hesc_centerLabel">
                <video></video>
            </div>
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
export default {
    name: 'GongSiShiPin',
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