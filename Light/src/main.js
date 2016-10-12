import Vue from 'vue'
import App from './App'

import home from './components/Home'
import information from './components/Information'
import knowledge from './components/Knowledge'
import message from './components/Message'
import school from './components/tab/School'
import zhihu from './components/tab/Zhihu'

import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//创建根组件
let app = Vue.extend(App)
//创建路由实例
let router = new VueRouter()
// let router = new VueRouter({
// 	hashbang: false,
// 	history: true
// })
//创建路由地址
router.map({
	'/home':{
		name:'home',
		component: home
	},
	'/information':{
		name:'information',
		component: information
	},
	'/knowledge':{
		name:'knowledge',
		component: knowledge
	},
	'/message':{
		name:'message',
		component: message
	},
	'/school':{
		name:'school',
		component: school
	},
	'/zhihu':{
		name:'zhihu',
		component: zhihu
	}
})
//全局定向，防S止404
router.redirect({
	'/':'/home'
})
router.start(app,'#app')