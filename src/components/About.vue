<template>
	<div id="about">
		<h2 class="xiaoheihei">{{msg}}</h2>
		<div id="line">子路由</div>
		<ul class="routerbox">
			<router-link to="/about/study" tag="li">
				<a>Study</a>
			</router-link>
			<router-link to="/about/work" tag="li">
				<a>Work</a>
			</router-link>
			<!-- <router-link :to="{name:'hobby'}" tag="li" exact> -->
			<router-link to="/about" tag="li" exact>
				<a>Hobby</a>
			</router-link>
		</ul>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data () {
			return {
				msg: 'About Me'
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log('beforeEnter路由切换之前')
			next((vm) => {
				vm.msg = 'About Me changed'
			})
		},
		afterRouteEnter (to, from) {
			console.log('beforeEnter路由切换之后')
		},
		beforeRouteUpdate (to, from, next) {
			console.log('beforeEnter路由更新之前，二级导航改变')
			next()
		},
		beforeRouteLeave (to, from, next) {
			console.log('beforeEnter路由离开当前组件之前')
			next()
		}
	}
</script>

<style lang="css" scoped>
	#about{
		font-size: 30px;
	}
	#line{
		height: 30px; 
		background: #eff4f8; 
		font-size: 14px; 
		line-height: 30px; 
		color: #00ba9b;
		margin-bottom: 20px;
	}
	.routerbox{
		display: flex;
		justify-content: center;
	}
	.routerbox li{
		padding: 0px 10px;
		border-radius: 10px;
	}

	.routerbox li a{
		font-size: 25px;
	}

	.router-link-active a{
		color: #fff;
	}

	.fade-enter-active,.fade-leave-active{
	    transition: 1s all ease;
	}

	.fade-enter-active{
	    opacity:1;
	}

	.fade-leave{
	    opacity:1;
	}

	.fade-leave-active{
	    opacity:0;
	}

	.fade-enter{
	    opacity:0;
	}
</style>