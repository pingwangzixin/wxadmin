// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/reset.css'
import interFace from "./utils/interface.js" //定义好的接口地址
import { loadStyle } from './utils/baseUrl.js' //创建阿里小图标的方法
import { iconfontUrl,iconfontVersion } from '@/config/env'; //引入阿里小图标的库
import echarts from 'echarts' // 引入echarts

Vue.prototype.$echarts = echarts
Vue.prototype.url=interFace;
Vue.config.productionTip = false //阻止启动生产消息
Vue.prototype.$http=axios;

// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
    loadStyle(iconfontUrl.replace('$key', ele));
})

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})