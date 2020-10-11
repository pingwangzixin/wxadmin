<template>
	<div class="cont">
		<p class="titlepage">出库管理</p>
		<!-- 筛选查询 -->
		<div class="filter-container">
			<div class="fl">
				商品编码
				<el-input class="inputWidth" v-model="ptusername" placeholder="请输入" @input="widthCheck()" clearable></el-input>
				<span class="mtltwo">合同编号</span>
				<el-input class="inputWidth" v-model="ptelphone" placeholder="请输入" clearable></el-input>
			</div>
			<div class="fr">
				<el-button style="margin-right:10px;" class="filter-item" type="primary" icon="search" @click="handleFilter(ptusername,ptelphone)">搜索</el-button>
				<!-- <el-button class="button " v-if="expotAll" @click="exportExcel" type="primary">导出</el-button> -->
			</div>
		</div>
		
		<hr>
		<!-- 新增患者 -->
		<div class="clearfix patwo">
			<el-button class="filter-item" @click="dialogFormVisible = true" type="primary" icon="edit">新增商品</el-button>
			<el-button class="filter-item" @click="delData" type="primary" icon="edit">删除商品</el-button>
		</div>
		<!-- 表格！！！！ -->
		<el-table  @selection-change='selectRow'  ref="msgDiv" class="table" :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border
		 fit highlight-current-row style="width: 100%">
			<el-table-column type="selection" align="center"></el-table-column>
			<el-table-column align="center" label="序号">
				<template slot-scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="出库日期">
				<template slot-scope="scope">
					<span v-if="scope.row.sex==1">男</span>
					<span v-if="scope.row.sex==0">女</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="合同编号">
				<template slot-scope="scope">
					<span>{{ scope.row.age }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="客户名称">
				<template slot-scope="scope">
					<span>{{ scope.row.stature }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="客户地址">
				<template slot-scope="scope">
					<span>{{ scope.row.weight }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="用途">
				<template slot-scope="scope">
					<span>{{scope.row.bmi}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="商品编号">
				<template slot-scope="scope">
					<span>{{scope.row.bodyArea}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="名称">
				<template slot-scope="scope">
					<span>{{ scope.row.mobile }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="规格">
				<template slot-scope="scope">
					<span v-if="scope.row.bloodType==1">A型</span>
					<span v-if="scope.row.bloodType==2">B型</span>
					<span v-if="scope.row.bloodType==3">AB型</span>
					<span v-if="scope.row.bloodType==4">O型</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="单价">
				<template slot-scope="scope">
					<span>{{ scope.row.lhistory }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="出库数量">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="单位">
				<template slot-scope="scope">
					<el-button size="small" type="success" @click="handleUpdate(scope.row.id)">查看详情
					</el-button>
				</template>
			</el-table-column>
			<el-table-column align="center" label="金额">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="领用人">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="出库人">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="备注">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
		</el-table>
		<!-- 弹窗 -->
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="合同编号">
		      <el-input v-model="form.hetongnum" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="商品编码">
		      <el-input v-model="form.shangpinnum" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="产品名称">
		      <el-input v-model="form.chanpinname" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="规格型号">
		      <el-input v-model="form.guige" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="单价">
		      <el-input v-model="form.price" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="入库数量">
		      <el-input v-model="form.rukunum" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="单位">
		      <el-input v-model="form.danwei" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="金额">
		      <el-input v-model="form.jiner" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="供应商名称">
		      <el-input v-model="form.gongyingname" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="入库人">
		      <el-input v-model="form.rukuren" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="备注">
		      <el-input v-model="form.beizhu" autocomplete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>

<script>
	var URL = require('url')
	export default {
		data() {
			return {
				dialogFormVisible: false,
				listLoading: false,
				total: 100,
				tableData: [],
				multipleSelection: [],
				form: {},
				testdata: "null",
				ptusername: "",
				ptelphone: '',
				tableKey: 0,
				list: null,
			}
		},
		methods: {
			getUserList() {
				this.$http.post(this.url.getUserList, this.listQuery).then(function(res) {
					console.log(res)
				})
			},
			handleCreate() { //新增患者
				this.dialogStatus = "create";
				this.dialogFormVisible = true;
				
			},
			// 获取表格选中时的数据
			selectRow(val) {
				this.selectlistRow = val
			},
			// 删除选中行
			delData() {
				for (let i = 0; i < this.selectlistRow.length; i++) {
					let val = this.selectlistRow
					// 获取选中行的索引的方法
					// 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
					// rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
					val.forEach((val, index) => {
						this.tableData.forEach((v, i) => {
							if (val.rowNum === v.rowNum) {
								// i 为选中的索引
								this.tableData.splice(i, 1)
							}
						})
					})
				}
				// 删除完数据之后清除勾选框
				this.$refs.table.clearSelection()
			}
		},
		created() {
			var that = this
			that.getUserList()
		}
	}
</script>

<style scoped="scoped">
	.filter-container {
		height: 40px;
	}

	.inputWidth {
		width: 200px;
	}
	
	.dashedB {
		width: 850px;
		text-align: left;
		border: 1px dashed #ccc;
		padding-top: 20px;
		margin: 0 auto;
	}
	
	.mttwo {
		margin-top: 20px;
	}
	
	.formPosition {
		position: relative;
		margin: 20px auto;
	}
	
	.formPosition:before {
		position: absolute;
		display: block;
		min-width: 60px;
		height: 30px;
		background: #fff;
		left: 30px;
		top: -10px;
	}
	
	.userInfo:before {
		content: "新增患者";
	}
	
	.xuechang::before {
		content: "血常规(生病时)";
	}
	
	.xuechang {
		padding: 20px;
		box-sizing: border-box;
	}
	
	.shenghua::before {
		content: "生化";
	}
	
	.gusui::before {
		content: "发病时骨髓形态";
	}
	
	.mianyi::before {
		content: "免疫分型";
	}
	
	.jiyin::before {
		content: "基因";
	}
	
	.ranseti::before {
		content: "染色体";
	}
	
	.fish::before {
		content: "FISH";
	}
	
	.zhenduan::before {
		content: "诊断";
	}
	
	.youdao::before {
		content: "诱导治疗";
	}
	
	.gonggu::before {
		content: "巩固治疗";
	}
	
	.yizhi::before {
		content: "是否移植（类型）";
	}
	
	.bingfazheng::before {
		content: "治疗相关并发症";
	}
	
	.liaoxiao::before {
		content: "疗效评价";
	}
	
	.fufa::before {
		content: "复发";
	}
	
	.suifang::before {
		content: "随访";
	}
		/* 导出按钮 */
		.toexcel {
			cursor: pointer;
			cursor: hand;
			width: 70px;
			height: 34px;
		}
	
		.fl {
			float: left;
		}
	
		.fr {
			float: right;
		}
	
		.clearfix {
			clear: both;
		}
	
		.mtltwo {
			margin-left: 20px;
		}
	
		.patwo {
			margin-bottom: 10px;
		}
	
		hr {
			background-color: #ebeef5;
			height: 1px;
			border: none;
		}
	
	
		.gusui .el-form-item {
			width: 800px;
		}
	
		.bingfazheng .el-form-item {
			width: 800px;
		}
		
		.submitBtn{
			width:900px;
			text-align: center;
		}
		.fuheInput{
			display: inline-block;
			height: 39px;
			background-color: #f5f7fa;
			color: #909399;
			vertical-align: middle;
			line-height: 39px;
			padding: 0 20px;
			border: 1px solid #dcdfe6;
			border-right: 0;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			border-radius: 4px;
			margin-top: -2px;
		}
</style>
