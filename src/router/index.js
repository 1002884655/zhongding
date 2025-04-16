import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'system',
    meta: { title: '主页', },
    redirect: { name: 'home', },
    component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { title: '网站首页', },
        component: () => import('@/views/home/index.vue'),
        children: [],
      },
      {
        path: 'gongSiJianJie',
        name: 'gongSiJianJie',
        meta: { title: '公司简介', },
        redirect: { name: 'gongSiJieShao', },
        component: () => import('@/views/gongSiJianJie/index.vue'),
        children: [
          {
            path: 'gongSiJieShao',
            name: 'gongSiJieShao',
            meta: { title: '公司介绍', },
            component: () => import('@/views/gongSiJianJie/gongSiJieShao/index.vue'),
            children: [],
          },
          {
            path: 'gongSiWenHua',
            name: 'gongSiWenHua',
            meta: { title: '公司文化', },
            component: () => import('@/views/gongSiJianJie/gongSiWenHua/index.vue'),
            children: [],
          },
          {
            path: 'gongSiRongYu',
            name: 'gongSiRongYu',
            meta: { title: '公司荣誉', },
            component: () => import('@/views/gongSiJianJie/gongSiRongYu/index.vue'),
            children: [],
          },
          {
            path: 'zhaoBiaoGongGao',
            name: 'zhaoBiaoGongGao',
            meta: { title: '招标公告', },
            component: () => import('@/views/gongSiJianJie/zhaoBiaoGongGao/index.vue'),
            children: [],
          },
          {
            path: 'renCaiZhaoPin',
            name: 'renCaiZhaoPin',
            meta: { title: '人才招聘', },
            component: () => import('@/views/gongSiJianJie/renCaiZhaoPin/index.vue'),
            children: [],
          },
        ],
      },
      {
        path: 'gongSiShiLi',
        name: 'gongSiShiLi',
        meta: { title: '公司实力', },
        redirect: { name: 'gongSiZiZhi', },
        component: () => import('@/views/gongSiShiLi/index.vue'),
        children: [
          {
            path: 'gongSiZiZhi',
            name: 'gongSiZiZhi',
            meta: { title: '公司资质', },
            component: () => import('@/views/gongSiShiLi/gongSiZiZhi/index.vue'),
            children: [],
          },
          {
            path: 'sheJiKaiFa',
            name: 'sheJiKaiFa',
            meta: { title: '设计开发', },
            component: () => import('@/views/gongSiShiLi/sheJiKaiFa/index.vue'),
            children: [],
          },
          {
            path: 'jiaGongZhiZao',
            name: 'jiaGongZhiZao',
            meta: { title: '加工制造', },
            component: () => import('@/views/gongSiShiLi/jiaGongZhiZao/index.vue'),
            children: [],
          },
          {
            path: 'sheBeiZuZhuang',
            name: 'sheBeiZuZhuang',
            meta: { title: '设备组装', },
            component: () => import('@/views/gongSiShiLi/sheBeiZuZhuang/index.vue'),
            children: [],
          },
          {
            path: 'pinZhiBaoZheng',
            name: 'pinZhiBaoZheng',
            meta: { title: '品质保证', },
            component: () => import('@/views/gongSiShiLi/pinZhiBaoZheng/index.vue'),
            children: [],
          },
          {
            path: 'shouHouFuWu',
            name: 'shouHouFuWu',
            meta: { title: '售后服务', },
            component: () => import('@/views/gongSiShiLi/shouHouFuWu/index.vue'),
            children: [],
          },
        ],
      },
      {
        path: 'chanPinZhanShi',
        name: 'chanPinZhanShi',
        meta: { title: '产品展示', },
        component: () => import('@/views/chanPinZhanShi/index.vue'),
        children: [],
      },
      {
        path: 'xiaoShouYeJi',
        name: 'xiaoShouYeJi',
        meta: { title: '销售业绩', },
        component: () => import('@/views/xiaoShouYeJi/index.vue'),
        children: [],
      },
      {
        path: 'gongSiXinWen',
        name: 'gongSiXinWen',
        meta: { title: '公司新闻', },
        redirect: { name: 'xiangMuDongTai', },
        component: () => import('@/views/gongSiXinWen/index.vue'),
        children: [
          {
            path: 'gongSiFaZhan',
            name: 'gongSiFaZhan',
            meta: { title: '公司发展', },
            component: () => import('@/views/gongSiXinWen/gongSiFaZhan/index.vue'),
            children: [],
          },
          {
            path: 'shiChangYingXiao',
            name: 'shiChangYingXiao',
            meta: { title: '市场营销', },
            component: () => import('@/views/gongSiXinWen/shiChangYingXiao/index.vue'),
            children: [],
          },
          {
            path: 'xiangMuDongTai',
            name: 'xiangMuDongTai',
            meta: { title: '项目动态', },
            component: () => import('@/views/gongSiXinWen/xiangMuDongTai/index.vue'),
            children: [],
          },
        ],
      },
      {
        path: 'lianXiWoMen',
        name: 'lianXiWoMen',
        meta: { title: '联系我们', },
        component: () => import('@/views/lianXiWoMen/index.vue'),
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '*', // 404
    name: 'error',
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '*', // 此处需特别注意置于最底部
    redirect: { name: 'error' }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
