<template>
	<div class="cont">
		<p class="titlepage">入库管理</p>
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
			<el-table-column type="selection" width="45" align="center"></el-table-column>
			<el-table-column align="center" label="合同编号" width="100px">
				<template slot-scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="商品编码">
				<template slot-scope="scope">
					<span>{{}}</span>
					
				</template>
			</el-table-column>
			<el-table-column align="center" label="产品名称">
				<template slot-scope="scope">
					<span>{{ scope.row.age }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="规格型号">
				<template slot-scope="scope">
					<span>{{ scope.row.stature }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="单价">
				<template slot-scope="scope">
					<span>{{ scope.row.weight }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="入库数量">
				<template slot-scope="scope">
					<span>{{scope.row.bmi}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="单位">
				<template slot-scope="scope">
					<span>{{scope.row.bodyArea}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="金额">
				<template slot-scope="scope">
					<span>{{ scope.row.mobile }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="供应商名称">
				<template slot-scope="scope">
					<span>{{ scope.row.mobile }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="入库人">
				<template slot-scope="scope">
					<span>{{ scope.row.lhistory }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="备注">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
		</el-table>
		<!-- 弹窗 -->
		<el-dialog title="新增货物" :visible.sync="dialogFormVisible">
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
				listQuery: {
					page: 1,
					rows: 20,
				},
				listLoading: false,
				total: 100,
				tableData: [],
				multipleSelection: [],
				form: {
					name: ""
				},
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
			
			
			},
			// getList() { /*** 获取患者列表*/
			// 	this.listLoading = true
			// 	for (let key in this.listQuery) {
			// 		if (this.listQuery[key] == '') {
			// 			delete this.listQuery[key]
			// 		}
			// 	}
			// 	this.$http.post(this.url.getUserList, this.listQuery).then(function(res) {
			// 		console.log(res)
			// 	})
			// 	axios.post(baseUrl() + 'user/patientList', this.listQuery).then(res => {
			// 		if (res.data.code === 200) {
			// 			this.list = res.data.data.records
			// 			this.listLoading = false;
			// 			this.total = res.data.data.total
			// 		} else {
			// 			this.$message({
			// 				message: res.data.message,
			// 				type: 'warning'
			// 			});
			// 		}
			// 	}).catch(err => {
			// 		this.$message({
			// 			message: '错误',
			// 			type: 'warning'
			// 		});
			// 	})
			// },
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			urlParse() { //格式化url
				var urlparmas = URL.parse('http://localhost:3000/index?id=3', true)
				console.log(urlparmas.query)
			},
			// 获取表格选中时的数据
			selectRow(val) {
				this.selectlistRow = val
			},
			// 增加行
			addRow() {
				var list = {
					rowNum: this.rowNum,
					post_id: [],
					require_des: '',
					remark: ''
				};
				this.tableData.unshift(list)
				this.rowNum += 1;
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
			that.urlParse()
		}
	}
</script>

<style scoped="scoped">
	
</style>
