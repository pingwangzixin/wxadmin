<template>
	<div class="cont">
		<!-- 筛选查询 -->
		<div class="filter-container">
			<div class="fl">
				患者姓名
				<el-input class="inputWidth" v-model="ptusername" placeholder="请输入" @input="widthCheck()" clearable></el-input>
				<span class="mtltwo">联系方式</span>
				<el-input class="inputWidth" v-model="ptelphone" placeholder="请输入" clearable></el-input>
			</div>
			<div class="fr">
				<el-button style="margin-right:10px;" class="filter-item" type="primary" icon="search" @click="handleFilter(ptusername,ptelphone)">查询</el-button>
				<!-- <el-button class="button " v-if="expotAll" @click="exportExcel" type="primary">导出</el-button> -->
			</div>
		</div>
		
		<hr>
		<!-- 新增患者 -->
		<div class="clearfix patwo">
			<el-button class="filter-item" @click="handleCreate" type="primary" icon="edit">新增患者</el-button>
		</div>
		<!-- 表格！！！！ -->
		<el-table  @selection-change='selectRow'  ref="msgDiv" class="table" :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border
		 fit highlight-current-row style="width: 100%">
			<el-table-column type="selection" width="45" align="center"></el-table-column>
			<el-table-column align="center" label="患者姓名" width="100px">
				<template slot-scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="性别">
				<template slot-scope="scope">
					<span v-if="scope.row.sex==1">男</span>
					<span v-if="scope.row.sex==0">女</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="年龄">
				<template slot-scope="scope">
					<span>{{ scope.row.age }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="身高（Cm)">
				<template slot-scope="scope">
					<span>{{ scope.row.stature }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="体重(KG)">
				<template slot-scope="scope">
					<span>{{ scope.row.weight }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="BMI（kg/m²）">
				<template slot-scope="scope">
					<span>{{scope.row.bmi}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="体表面积">
				<template slot-scope="scope">
					<span>{{scope.row.bodyArea}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="联系方式">
				<template slot-scope="scope">
					<span>{{ scope.row.mobile }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="血型">
				<template slot-scope="scope">
					<span v-if="scope.row.bloodType==1">A型</span>
					<span v-if="scope.row.bloodType==2">B型</span>
					<span v-if="scope.row.bloodType==3">AB型</span>
					<span v-if="scope.row.bloodType==4">O型</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="既往史">
				<template slot-scope="scope">
					<span>{{ scope.row.lhistory }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="ECOG评分">
				<template slot-scope="scope">
					<span>{{ scope.row.ecog }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="操作">
				<template slot-scope="scope">
					<el-button size="small" type="success" @click="handleUpdate(scope.row.id)">查看详情
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<!-- 分页 -->
		<div v-show="!listLoading" class="pagination-container" style="margin-top:20px;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
			 :page-sizes="[10,20,30,50]" :page-size="listQuery.rows" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
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
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
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
				this.dialogStatus = "create";
				this.dialogFormVisible = true;
				this.activeName = 'first';
				this.patientId = "";
			
				//用户信息
				this.addForm.name = "";
				this.addForm.sex = "";
				this.addForm.age = "";
				this.addForm.mobile = "";
				this.addForm.stature = "";
				this.addForm.weight = "";
				this.addForm.bloodType = "";
				this.addForm.ecog = "";
				this.addForm.lhistory = "";
				this.addForm.bmi = "";
				this.addForm.bodyArea = "";
			
				//实验室
				this.saveExamineForm.wbc = "";
				this.saveExamineForm.anc = "";
				this.saveExamineForm.hg = "";
				this.saveExamineForm.mcv = "";
				this.saveExamineForm.mch = "";
				this.saveExamineForm.mchc = "";
				this.saveExamineForm.rdwsd = "";
				this.saveExamineForm.rdwcv = "";
				this.saveExamineForm.plt = "";
				this.saveExamineForm.lymphn = "";
				this.saveExamineForm.egg = "";
				this.saveExamineForm.lactic = "";
				this.saveExamineForm.eryt = "";
				this.saveExamineForm.b2mg = "";
				this.saveExamineForm.alt = "";
				this.saveExamineForm.ast = "";
				this.saveExamineForm.tbil = "";
				this.saveExamineForm.direct = "";
				this.saveExamineForm.indirect = "";
			
				//MIC
				this.saveMicmForm.chromosome = "";
				this.saveMicmForm.createTime = "";
				this.saveMicmForm.degree = "";
				this.saveMicmForm.fusionGene = "";
				this.saveMicmForm.laip = "";
				this.saveMicmForm.morbi = "";
				this.saveMicmForm.morbiStatus = "";
				this.saveMicmForm.mutantGene = "";
				this.saveMicmForm.patientId = "";
				this.saveMicmForm.pbProtocell = "";
				this.saveMicmForm.protocell = "";
				this.saveMicmForm.protocellGs = "";
				this.saveMicmForm.protocellWzx = "";
				this.saveMicmForm.rest = "";
				this.saveMicmForm.updateTime = "";
				this.saveMicmForm.wti = "";
				this.saveMicmForm.morbiRed = "";
				this.saveMicmForm.morbiGrain = "";
				this.saveMicmForm.morbiHuge = "";
			
				//诊断
				this.DiagnoseForm.consensus = "";
				this.DiagnoseForm.diagnose = "";
				this.DiagnoseForm.diagnoseTime = "";
				this.DiagnoseForm.nccn = "";
			
			
				//治疗
				this.CureForm.standard = "";
				this.CureForm.targetedIs = "";
				this.CureForm.clinical = "";
				this.CureForm.demethy = "";
				this.CureForm.intensifyCureDose = "";
				this.CureForm.intensifyCureValue = "";
				this.CureForm.lowDose = "";
				this.CureForm.lowDx = "";
				this.CureForm.optimal = "";
				this.CureForm.standard = "";
				this.CureForm.standardCure = "";
				this.CureForm.targeted = "";
				this.CureForm.targetedMed = "";
				this.CureForm.targetedValue = "";
				this.CureForm.transplantIs = "";
				this.CureForm.transplantMed = "";
				this.CureForm.transplantTime = "";
				this.CureForm.wayIs = "";
				this.CureForm.wayMed = "";
			
				//并发症
				this.CureCompForm.infectionIs = "";
				this.CureCompForm.infectionMed = "";
				this.CureCompForm.medicaIs = "";
				this.CureCompForm.medicaValue = "";
				this.CureCompForm.reaction = "";
				this.CureCompForm.tranOne = "";
				this.CureCompForm.tranThree = "";
				this.CureCompForm.tranTwo = "";
			
				//7空着 todo
				this.CourseForm.geneIs = "";
				this.CourseForm.courseOne = "";
				this.CourseForm.courseCd = "";
				this.CourseForm.cdTime = "";
				this.CourseForm.cdAfter = "";
			
				//8
				this.fufaForm.recurIs = 2;
				this.fufaForm.recurDose = "";
				this.fufaForm.recurGene = "";
				this.fufaForm.recurMed = "";
				this.fufaForm.recurOr = "";
				this.fufaForm.recurStatus = "";
			
				//随访
				this.suiFangForm.ending = "";
				this.suiFangForm.os = "";
				this.suiFangForm.rfsEfs = "";
				this.suiFangForm.suifangStatus = "";
				this.suiFangForm.suifangTime = "";
			
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
	.filter-container {
		height: 40px;
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
</style>
