import Vue from 'vue'
import App from './App'

import Home from './components/Home'
import Support from './components/Support'
import Collaborate from './components/Collaborate'
import Intro from './components/Intro'
import Contact from './components/Contact'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let app = Vue.extend(App)

let router = new VueRouter()

router.map({
	'/home':{
		name: 'home',
		component: Home
	},
	'/support':{
		name: 'support',
		component: Support
	},
	'/collaborate':{
		name: 'collaborate',
		component: Collaborate
	},
	'/intro':{
		name: 'intro',
		component: Intro
	},
	'/contact':{
		name: 'contact',
		component: Contact
	},
})

router.redirect({
	'/': '/home'
})

//切换路由地址页面定位到顶部
router.beforeEach(function() {
    window.scrollTo(0, 0)
})

// 通过判断显示设备来指定网页地址
// var isIosFlatform = function() {
//     return navigator.userAgent.match(/(iPad|iPhone)/) ? !0 : !1
// };
// var isAndroidFlatform = function() {
//     return navigator.userAgent.match(/(Android)/) ? !0 : !1
// };
// var isMobile = function() {
//     return isIosFlatform() || isAndroidFlatform() ? !0 : !1
// };
// if (!isMobile()) {
//     window.location.href = "http://www.baidu.com/"
// }

router.start(app,'app')
