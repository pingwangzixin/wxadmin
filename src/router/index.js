import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: resolve => require(['@/components/navBar/navBar'], resolve), 
	  children: [
	    {
	      path: 'index',
	      component: resolve => require(['@/components/index/index'], resolve), 
	      name: '首页',
	    },
			{
				path: 'icon',
				component: resolve => require(['@/components/icon/icon'], resolve), 
				name: 'icon',
			},
			{
				path: 'echarts',
				component: resolve => require(['@/components/echarts/echarts'], resolve), 
				name: 'echarts',
			},
	  ],
	  redirect: '/index'
    },
	{
	  path: '/login',
	  name: 'login',
	  component: resolve => require(['@/components/login/login'], resolve), 
	},
  ]
})