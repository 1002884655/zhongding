<template>
    <div class="hesc_components hesc_youQingLianJie">
        <ItemBorder :name="name" :showMore="false">
            
        </ItemBorder>
    </div>
</template>

<script>
import ItemBorder from '../itemBorder/index.vue'
export default {
    name: 'YouQingLianJie',
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