import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'
import About from '@/components/About'
import Nofind from '@/components/Error'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Study from '@/components/Study'
import Hobby from '@/components/Hobby'
import Slider from '@/components/Slider'
import User from '@/components/User'

Vue.use(Router)

let router = new Router({
	mode: 'history', // 自定义url格式
	// linkActiveClass: 'isActive', // 自定义全局激活状态的class
	scrollBehavior (to, from, savePostion) { // 点击导航和前进后退按钮时触发
		// console.log(to) // 目标路由对象
		// console.log(from) // 离开的路由对象
		// console.log(savePostion) // 记录滚动条的坐标
		// 记录浏览位置
		/* if (savePostion) {
			return savePostion
		} else {
			return {
				x: 0,
				y: 0
			}
		} */
		// #target锚点定位
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { // 路由元数据
				index: 0,
				title: 'home'
			}
		},
		{
			path: '/hello',
			components: {
				default: Hello,
				slider: Slider
			},
			name: 'index',
			alias: '/index',
			meta: {
				index: 3,
				login: true
			}
		},
		{
			path: '/world',
			name: 'world',
			component: World,
			meta: {
				index: 1,
				title: 'world'
			}
		},
		{
			path: '/user/:type?/:userId?',
			name: 'user',
			component: User,			
			meta: {
				index: 2,
				title: 'user'
			},
			beforeEnter (to, from, next) {
				console.log('beforeEnter路由切换之前')
				next()
			},
			afterEnter (to, from) {
				console.log('beforeEnter路由切换之后')
			}
		},
		{
			path: '/about',
			component: About,
			children: [
				{
					// path: '/study', // 配合 :to="{name: 'study'}" 地址栏不会出现/about/study 只会是/study 但是效果不会变
					path: 'study',
					name: 'study',
					component: Study
				},
				{
					path: 'work',
					component: Work
				},
				{
					path: '/',
					name: 'hobby',
					component: Hobby,			
					meta: {
						index: 4
					}
				}
			]
		},
		// 重定向 * 相当404页面
		{
			path: '*',
			// component: Error404
			// redirect: '/world'
			// redirect: {name: 'world'}
			// redirect: {path: '/world'}
			redirect: (to) => {
				// 动态设置重定向目标 to为目标路由对象就是访问的路径的路由相关信息
				// console.log(to)
				if (to.path === '/123') {
					return '/hello'
				} else if (to.path === '/456') {
					return {path: '/about'}
				} else {
					return {name: 'world'}
				}
			}
		}
	]
})

// 全局设置
/* router.beforeEach((to, from, next) => {
	console.log('beforEach路由切换之前')
	next() // 继续路由跳转
	// next(false) // 取消路由跳转
	// if (to.meta.login) {
	// 	// next('/world')
	// 	console.log('需要登录，可以重定向到login页面')
	// } else {
	// 	next()
	// }
})

router.afterEach((to, from) => {
	console.log('beforEach路由切换之后')
	if (to.meta.title) {
		window.document.title = to.meta.title
	} else {
		window.document.title = 'vue'
	}
}) */

export default router
