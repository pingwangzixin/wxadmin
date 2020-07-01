<template>
	<div>
		<div class="headIcon">
			<div class="logo">wxadmin</div>
		</div>
		<div class="navBar">
			<div>
				<el-menu :default-active="this.$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					 <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
					  {{item.navItem}}
					 </el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="contentRight">
			<router-view></router-view>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				navList:[
					{name:'/index',navItem:'表格'},
				    {name:'/icon',navItem:'icon'},
				    {name:'/echarts',navItem:'echarts'},
					{name:'/vuex',navItem:'vuex'},
					{name:'/editor',navItem:'editor'},
				]
			}
		},
		methods:{
			handleOpen(key, keyPath) {
			console.log(key, keyPath);
		  },
		  handleClose(key, keyPath) {
			console.log(key, keyPath);
		  }
		},
		created() {
			
		}
	}
</script>

<style scoped="scoped">
	.headIcon{
		width:100%;
		height: 60px;
		background: rgb(84, 92, 100);
		color:#fff;
	}
	.logo{
		width:200px;
		height: 60px;
		line-height: 60px;
		float: left;
		font-size: 30px;
	}
	.navBar{
		position: absolute;
		top:60px;
		left:0;
		bottom:0;
		width:200px;
		background:rgb(84, 92, 100);
	}
	ul>li{
		text-align: center;
	}
	.contentRight{
		margin-left:210px;
	}
</style>
