<template>
	<div>
		<div style="margin:20px 0">vueX获取的数据：{{userId}}</div>
		<p></p>
		 <el-button type="primary" @click="xiugai">修改vuex数据</el-button>
		 <div ref="getHtml" @refreshData="getData"></div>
		 <getHtml ref="getzujian"></getHtml>
		 <el-button type="primary" @click="getData">获取子组件data中的值</el-button>
		 <p ref="getInfo"></p>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import getHtml from './getHtml.vue'
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			xiugai(){
				this.$store.dispatch("getUserId", '789872');
			},
			getref(){
				this.$refs.getHtml.innerHTML = 'vue ref 操作dom,ref除了可以获取本页面的dom元素，还可以拿到子组件中的data和去调用子组件中的方法。注意：1、ref 需要在dom渲染完成后才会有，在使用的时候确保dom已经渲染完成。比如在生命周期 mounted(){} 钩子中调用，或者在 this.$nextTick(()=>{}) 中调用。2、如果ref 是循环出来的，有多个重名，那么ref的值会是一个数组 ，此时要拿到单个的ref 只需要循环就可以了。'
			},
			getData(){
				this.$refs.getzujian.open()
			},
		},
		components:{
			getHtml
		},
		computed: {
			...mapState({
				userId: state => state.state.userId,
			})
		},
		mounted() {
			this.getref()
		}
	}
</script>

<style scoped="scoped">
	div{
		margin:20px 0;
		text-align: left;
	}
</style>
