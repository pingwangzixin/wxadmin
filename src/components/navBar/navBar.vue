<template>
	<div>
		<div class="headIcon">
			<div class="logo">进销存管理系统</div>
		</div>
		<div class="navBar">
			<div>
				<el-menu :default-active="this.$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					 <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
					  <i :class="item.iconClass"></i>{{item.navItem}}
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
					{name:'/ruku',navItem:'入库',iconClass:'iconfont iconicon_function_ruku'},
					{name:'/chuku',navItem:'出库',iconClass:'iconfont iconicon_function_chuku'},
					{name:'/kucun',navItem:'库存',iconClass:'iconfont iconkucunguanli'},
					// {name:'/index',navItem:'表格'},
				    // {name:'/icon',navItem:'icon'},
				 //    {name:'/echarts',navItem:'echarts'},
					// {name:'/vuex',navItem:'vuex'},
					// {name:'/editor',navItem:'editor'},
					// {name:'/filter',navItem:'filter'},
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
			this.$router.path='/ruku'
		}
	}
</script>

<style scoped="scoped">
	.headIcon{
		width:100%;
		height: 60px;
		background: #545c64;
		color:#fff;
	}
	.logo{
		width:200px;
		height: 60px;
		line-height: 60px;
		float: left;
		font-size: 22px;
	}
	.navBar{
		position: absolute;
		top:60px;
		left:0;
		bottom:0;
		width:200px;
		background:rgb(84, 92, 100);
	}
	.navBar i{
		color:#fff;
		margin-right: 6px;
	}
	ul>li{
		text-align: center;
	}
	.contentRight{
		margin-left:210px;
	}
</style>
