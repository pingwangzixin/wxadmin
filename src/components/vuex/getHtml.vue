<template>
	<div>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:"这是组件的信息",
				info:'ref获取子组件信息'
			}
		},
		methods:{
			open(){
				this.msg="子组件调用父组件方法";
				this.$emit("refreshData")
				console.log('1111')
			}
		}
	}
</script>

<style>
</style>
