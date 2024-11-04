<template>
    <div class="hesc_components hesc_gongSiJianJie">
        <ItemBorder :name="name" @more="$router.push({ name: 'gongSiJieShao' })">
            <div class="hesc_content">
                <span :style="{ lineHeight: langKey === 'Chinese' ? '28px' : '19px' }" v-html="systemLang.brief_introduction_content"></span>
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
    name: 'GongSiJianJie',
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