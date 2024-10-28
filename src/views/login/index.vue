<template>
    <div class="hesc_page hesc_login">
        
        <div class="hesc_panel">
            <span class="hesc_title">账号登录</span>
            <div class="hesc_form">
                <div class="hesc_item hesc_flexH">
                    <div class="hesc_icon hesc_account"></div>
                    <div class="hesc_flexItem">
                        <input type="text" v-model="form.username" placeholder="用户名">
                    </div>
                </div>
                <div class="hesc_item hesc_flexH">
                    <div class="hesc_icon hesc_password"></div>
                    <div class="hesc_flexItem">
                        <input :type="passwordType" v-model="form.password" placeholder="密码">
                    </div>
                    <a class="hesc_triggerPassword" @click="passwordType = passwordType === 'password' ? 'text' : 'password'"></a>
                </div>
                <div class="hesc_item hesc_flexH">
                    <div class="hesc_icon hesc_msg"></div>
                    <div class="hesc_flexItem">
                        <input type="text" placeholder="验证码">
                    </div>
                    <div class="hesc_codeImg"></div>
                </div>
            </div>
            <div class="hesc_extra hesc_flexH">
                <a class="hesc_autoLogin"></a>
                <span>自动登录</span>
                <div class="hesc_flexItem"></div>
                <a class="hesc_forget">忘记密码？</a>
            </div>
            <a class="hesc_loginBtn" @click="submit">{{ loading ? '正在登录...' : '登录' }}</a>
        </div>

    </div>
</template>
<script>
import CryptoJS from 'crypto-js'
import qs from 'qs'
import routeMethods from '@/utils/createRouter'
export default {
    data() {
        return {
            passwordType: 'password',
            loading: false,
            form: {
                username: '',
                password: '',
            },
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        init() {
            this.$store.commit('updateState', { key: 'authorities', value: [], })
            this.$store.commit('updateState', { key: 'perminsStrlist', value: [], })
            this.$store.commit('updateState', { key: 'userInfo', value: [], })
            window.localStorage.menuList = null
        },
        submit() {
            if(this.loading) return
            const { form: { username, password }, $message: { error }, $ajax: { post }, passwordSecret, } = this
            if(!username) {
                error('请输入用户名')
                return
            }
            if(!password) {
                error('请输入密码')
                return
            }
            this.loading = true
            const params = qs.stringify({ username, password: passwordSecret(password) })
            post(`/szzlApi/auth/login`, params).then(res => {
                this.loading = false
                const { data: { obj: { token, userInfo: { menuList, authorities, perminsStrlist } } } } = res
                window.localStorage.token = token
                const { arrayToTree } = routeMethods
                const menuData = arrayToTree(menuList)
                const userData = res.data.obj.userInfo
                userData.token = token
                delete userData.menuList
                delete userData.authorities
                delete userData.perminsStrlist
                // this.$store.commit('updateState', { key: 'authorities', value: authorities, })
                // this.$store.commit('updateState', { key: 'perminsStrlist', value: perminsStrlist, })
                // this.$store.commit('updateState', { key: 'userInfo', value: userData, })
                window.localStorage.authorities = JSON.stringify(authorities)
                window.localStorage.perminsStrlist = JSON.stringify(perminsStrlist)
                window.localStorage.userInfo = JSON.stringify(userData)
                window.localStorage.menuList = JSON.stringify(menuData)
                this.$router.push({ name: 'system' })
            }).catch(() => {
                this.loading = false
            })
        },
        passwordSecret(password) {
            const key = CryptoJS.enc.Latin1.parse('23f47af9ea0dc49b')
            const iv = CryptoJS.enc.Latin1.parse('0123456789abcdef')

            let encrypted = CryptoJS.AES.encrypt(password, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.ZeroPadding
                }
            )
            encrypted = window.btoa(encrypted)
            return encrypted.toString()
        },
    },
}
</script>
<style lang="scss" scoped>
@import './page.scss';
</style>