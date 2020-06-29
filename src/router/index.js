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