<template>
	<div>
		<div style="margin:20px 0">vueX获取的数据：{{userId}}</div>
		<p></p>
		 <el-button type="primary" @click="xiugai">修改vuex数据</el-button>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			xiugai(){
				this.$store.dispatch("getUserId", '789872');
				console.log(this.userId)
			}
		},
		computed: {
			...mapState({
				userId: state => state.state.userId,
			})
		},
	}
</script>

<style>
</style>
