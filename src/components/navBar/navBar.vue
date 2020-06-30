<template>
	<div>
		<div class="navBar">
			<div>
				<!-- <el-menu router :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				    <el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>wxAdmin</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="/index">表格</el-menu-item>
				          <el-menu-item index="/icon">icon</el-menu-item>
				        </el-menu-item-group>
				    </el-submenu>
				</el-menu> -->
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

<style>
	.navBar{
		position: absolute;
		top:0;
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
