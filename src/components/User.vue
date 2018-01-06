<template>
	<div id="user">
		<!--  #target锚点定位 -->
		<!-- <h2 id="target">{{ msg }}</h2> -->

		<h4 style="font-size:30px;">{{ msg }}</h4>
		
		<router-link style="font-size: 30px; padding: 2px 10px; border-radius: 10px;" :to="{path:'/user/'+value.type+'/'+value.id, query:{info:'follow'}}" v-for="(value, index) in userList" :key="index">{{value.userName}}</router-link> 
		
		<div class="user-info" style="font-size: 20px;" v-if="uerInfo.userName">
			<p>姓名：{{uerInfo.userName}}</p>
			<p>性别：{{uerInfo.sex}}</p>
			<p>爱好：{{uerInfo.hobby}}</p>
			<p>会员等级：{{uerInfo.type}}</p>
		</div>
		<hr style="width: 36%; background: #eff4f8">
		<div class="info-list" style="font-size: 20px;" v-if="uerInfo.userName">
			<!-- <router-link exact to="?info=follow">他的关注</router-link> -->
			<!-- <router-link exact to="?info=share">他我的分享</router-link> -->

			<router-link exact :to="{path:'', query:{info:'follow'}}">他的关注</router-link>
			<router-link exact :to="{path:'', query:{info:'share'}}">他我的分享</router-link>

			<div>
				{{$route.query}}
			</div>
		</div>
	</div>
</template>

<script>
let data = [
	{
	    id: '1',
		type: 'vip',
	    userName: 'leo1',
	    sex: '男',
	    hobby: '写代码'
	},
	{
	    id: '2',
	    type: 'vip',
	    userName: 'leo2',
	    sex: '男',
	    hobby: '唱歌'
	},
	{
	    id: '3',
	    type: 'common',
	    userName: 'leo3',
	    sex: '男',
	    hobby: '读书'
	}
]

export default {
	name: 'hello',
	data () {
		return {
			msg: 'Hello User',
			userList: data,
			uerInfo: {}
		}
	},
	watch: {
		$route () {
			// console.log(this.$route.params.userId)
			this.getInfo()
		}
	},
	mounted () {
		// console.log(this.$route)
		this.getInfo()
	},
	methods: {
		getInfo () {
			let id = this.$route.params.userId
			if (id) {
				this.uerInfo = this.userList.filter((item) => {
					return item.id === id
				})[0]
			} else {
				this.userInfo = {}
			}
		}
	}
}
</script>

<style scoped>
	.info-list a{
		padding: 2px 5px;
		border-radius: 10px;
	}
</style>

