import axios from 'axios'
import router from '../router'
import {Loading,Message} from 'element-ui'

let http = axios.create({
  timeout: 60000,
  // timeout: 100,
});
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
      pending[p].f(); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}

let loading;

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    //打开遮罩层
    const filterData = !(config.data && ((config.data || {}).params || {}).showLoading === false)
    const filterParams = !(config.params && config.params.showLoading === false)
    
    if(filterData && filterParams) {
      loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)'
      })
    } else {
      if((config.data || {}).params) {
        delete config.data.params.showLoading
      }
      if(config.params) {
        delete config.params.showLoading
      }
    }
    if(sessionStorage.getItem('token')){
      config.headers.common['Authorization'] = sessionStorage.getItem('token') || '';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http response 拦截器
http.interceptors.response.use(
  (response) => {
    // if(!!loading) {
    //   loading.close()
    // }
    loading.close()
    removePending(response.config);
    if (response.data) {
      switch (response.data.resultCode) {
        case '401':
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.removeItem('vue-token')
          sessionStorage.removeItem('token')
          router.replace({
            path: '/login'
          })
          break;
        case '1':
          Message.error(response.data.resultMsg||response.config.url+'操作失败');
          break;
      }
    }
    return response;
  },
  (error) => {
    loading.close()
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  }
);

export default http;
