<template>
	<div class="sudoku_row">
		<div class="sudoku_item" :class="curSelect==sudoku.id?'opacity':''" v-for="(sudoku,index) in sudokus" :key="index" @touchstart="touchstart(index)" @touchend="touchend">
			<i :class="sudoku.iconClass"></i>
			{{sudoku.name}}
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				sudokus:[{
					id:0,
					name:'播放',
					iconClass:"iconfont iconbofang1"
				},{
					id:1,
					name:'暂停',
					iconClass:"iconfont iconzanting"
				},{
					id:2,
					name:'上一首',
					iconClass:"iconfont iconshangyishou"
				},{
					id:3,
					name:'下一首',
					iconClass:"iconfont iconxiayishou"
				},{
					id:4,
					name:'下载',
					iconClass:"iconfont iconxiazai"
				},{
					id:5,
					name:'github',
					iconClass:"iconfont icongithub5"
				},{
					id:6,
					name:'关闭',
					iconClass:"iconfont iconguanbi"
				},{
					id:7,
					name:'安卓',
					iconClass:"iconfont icon-anzhuo"
				},{
					id:8,
					name:'发送',
					iconClass:"iconfont icon-fasong"
				},{
					id:9,
					name:'回传',
					iconClass:"iconfont icon-huichuan"
				},{
					id:10,
					name:'会员管理',
					iconClass:"iconfont icon-huiyuanguanli1"
				},{
					id:11,
					name:'版本更新',
					iconClass:"iconfont icon-app_banben"
				}],
				curSelect:null,
			}
		},
		created() {
			
		},
		methods:{
			touchstart:function(e){
				var that = this;
				var list = that.sudokus;
				for (var i = 0, len = list.length; i < len; ++i) {
					if (list[i].id == e) {
						that.curSelect = i;
					}
				}
			},
			touchend:function(){
				var that = this;
				that.curSelect = null;
			}
		}
	}
</script>

<style>
	i.iconfont{
		font-size: 30px;
	}
	
	.sudoku_row{
	        display: flex;
	        align-items: center;
	        width:100%;
	        flex-wrap: wrap;
	    }
	    .sudoku_item{
	        display: flex;
	        justify-content: center;
	        align-items: center;
	        flex-direction: column;
	        width:10%;
	        padding-top: 10px;
	        padding-bottom: 10px;
			border-right: 1px solid #eee;
			border-bottom: 1px solid #eee;
			margin-right: -1px;
			margin-bottom: -1px;
	    }
		.sudoku_item i{
			margin-bottom: 10px;
		}
	    .opacity{
	        opacity: 0.4;
	        background: #e5e5e5;
	    }
</style>
