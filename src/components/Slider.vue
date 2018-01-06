<template>
	<h2>{{ msg }}</h2>
</template>

<script>
	export default {
	  'name': 'study',
	  data () {
		return {
			msg: 'Hello slider!'
		}
	  }
	}
</script>

<style scoped>
	h2{
		position: fixed;
		height: 300px;
		width: 200px;
		background: #eff4f8;
		font-size: 30px;
		bottom: 0;
		left: 0;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 192px;
	}
</style>