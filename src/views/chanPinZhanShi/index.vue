<template>
    <div class="hesc_page hesc_gongSiJianJie hesc_flexH">
        <div class="hesc_left">
            <div 
                class="hesc_listItemContainer" 
                v-for="(item, index) in product" 
                :key="index">
                <div 
                    class="hesc_listItem hesc_flexH"
                    @click="currentItem = item"
                    :class="{active: currentItem.name === item.name}">
                    <div class="hesc_img">
                        <img :src="item.mainImg" v-if="item.mainImg" class="hesc_contain" alt="">
                    </div>
                    <div class="hesc_flexItem">
                        <span>{{ item.name }}</span>
                        <span v-html="item.desc"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hesc_flexItem hesc_detailContent">
            <span class="hesc_title">{{ currentItem.name }}</span>
            <span class="hesc_desc" v-html="currentItem.desc"></span>
            <div class="hesc_subImg" v-for="(subItem, subIndex) in (currentItem.subImg || [])" :key="subIndex">
                <img :src="subItem" style="max-width: 100%;" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import product from '@/assets/js/product'
export default {
    components: {
    },
    data() {
        return {
            currentItem: product[0],
            product,
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
        checkItem(item, index) {
            if(item.show) {
                item.show = false
            } else {
                this.product.forEach((x, i) => {
                    x.show = i === index
                })
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import './page.scss';
</style>