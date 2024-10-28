<template>
    <div class="hesc_components hesc_qiYeWenHua">
        <ItemBorder :name="name" :showMore="false">
            <div class="hesc_content">
                <div v-html="systemLang.company_culture_content" :style="{ lineHeight: langKey === 'Chinese' ? '28px' : '19px' }"></div>
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
export default {
    name: 'QiYeWenHua',
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
            langKey,
            systemLang,
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