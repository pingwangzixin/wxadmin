<template>
	<div class="cont">
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
			<el-button class="filter-item" @click="handleCreate" type="primary" icon="edit">新增商品</el-button>
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
					<span v-if="scope.row.bloodType==1">A型</span>
					<span v-if="scope.row.bloodType==2">B型</span>
					<span v-if="scope.row.bloodType==3">AB型</span>
					<span v-if="scope.row.bloodType==4">O型</span>
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
		
	</div>
</template>

<script>
	var URL = require('url')
	export default {
		data() {
			return {
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
