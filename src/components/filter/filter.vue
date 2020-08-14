<template>
	<div>
		<p>26个字母格式化：</p>
		格式化之前的数字是<input type="text" v-model="num" placeholder="请输入数字">
		<p>格式化之后字母是：{{num | filterZimu}}</p>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				num:'1'
			}
		}
	}
</script>

<style>
</style>
