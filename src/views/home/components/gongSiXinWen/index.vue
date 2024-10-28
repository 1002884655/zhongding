<template>
    <div class="hesc_components hesc_gongSiXinWen">
        <ItemBorder :name="name" @more="$router.push({ name: 'gongSiXinWen' })">
            <div class="hesc_content">
                <div class="hesc_item hesc_flexH" v-for="(item, index) in list" :key="index">
                    <span class="hesc_flexItem">2024中国国际铝工业展览会</span>
                    <span>2024-07-06</span>
                </div>
            </div>
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
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
            list: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
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