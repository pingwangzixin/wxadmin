import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',  //去掉url中的#
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
		{
			path: 'vuex',
			component: resolve => require(['@/components/vuex/vuex'], resolve), 
			name: 'vuex',
		},
		{
			path: 'editor',
			component: resolve => require(['@/components/editor/editor'], resolve), 
			name: 'editor',
		}
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