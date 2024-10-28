
import router from './router'
import store from './store'
import Router from 'vue-router'

const findDefaultRoute = (arr = [], target = null) => {
    if(target) return target
    if((arr[0].children || []).length) {
        return findDefaultRoute(arr[0].children, target)
    } else {
        target = arr[0]
        return target
    }
}

const createMenu = (arr = []) => {
  for(let n = 0; n < arr.length; n++) {
    const { meta: { filesource }, children } = arr[n]
    try { // 尝试取filesource字段为页面文件路径
      require(`.${filesource}`)
      arr[n].component = (resolve) => require([`.${filesource}`], resolve)
    } catch(error) { // 失败时，直接取error页面为文件路径
      arr[n].component = (resolve) => require([`@/views/error/index`], resolve)
      arr[n].meta.findFilesource = 0
    }
    if((children || []).length) {
      createMenu(children)
    }
  }
}

const mapRouter = (arr = [], callback = () => {}) => {
    if(!arr.length) return
    const newMenus = arr[0].children || [] // 一维菜单数组转多维树结构
    createMenu(newMenus) // 校验每个页面文件源是否存在
    store.commit('updateState', { key: 'menuList', value: newMenus, }) // 数据存入store中
    const { options: { routes: routeData } } = router
    const systemRoute = routeData.find(x => x.name === 'system')
    systemRoute.children = newMenus
    const defaultRoute = findDefaultRoute(newMenus) || {}
    const { name: defaultRouteName } = defaultRoute
    if(defaultRouteName) {
        systemRoute.redirect = { name: defaultRouteName }
    }
    router.matcher = new Router({ // 插入最新路由数据
        routes: routeData
    }).matcher
    callback(defaultRoute)
}

router.beforeEach((to, from, next) => {
    const { name: toName } = to
    if(['login', 'caslogin', 'ssologin', 'link', 'idaasLogin', 'loginold'].includes(toName)) { // 登录页执行逻辑
        next()
    } else { // 非登录页执行逻辑
        const { state: { menuList } } = store
        if(menuList.length) { // store有菜单数据时，执行此逻辑
            next()
        } else { // store无菜单数据时，执行此逻辑
            const { localStorage: { menuList: localMenuList } } = window // 获取本地菜单数据
            if(localMenuList) { // 本地有菜单数据时，执行此逻辑
                try {
                    mapRouter(JSON.parse(localMenuList), (defaultRoute) => {
                        const { localStorage: { authorities, perminsStrlist, userInfo } } = window
                        store.commit('updateState', { key: 'authorities', value: JSON.parse(authorities), }) // 数据存入store中
                        store.commit('updateState', { key: 'perminsStrlist', value: JSON.parse(perminsStrlist), }) // 数据存入store中
                        store.commit('updateState', { key: 'userInfo', value: JSON.parse(userInfo), }) // 数据存入store中
                        const { 
                            path: defaultPath 
                        } = defaultRoute
                        const { 
                            name: toName, 
                            path: toPath, 
                            query: toQuery,
                            params: toParams,
                        } = to
                        if(toName === 'system') { // 访问系统页时，定位到该菜单下的默认菜单
                            next({ 
                                path: defaultPath.indexOf('/') > -1 ? defaultPath : `/${defaultPath}`,
                            })
                        } else { // 常规页面跳转
                            next({ path: toPath, query: toQuery, params: toParams })
                        }
                    }) // 插入动态路由
                } catch(error) {
                    router.replace({ name: 'login' })
                }
            } else { // 本地无菜单数据时，跳转登录页
                router.replace({ name: 'login' })
            }
        }
    }
})
