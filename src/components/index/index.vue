<template>
	<div class="cont">
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
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
	var URL= require('url')
	export default {
		data() {
			return {
				listQuery: {
					page: 1,
					rows: 20,
				},
				listLoading:false,
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
				}]
			}
		},
		methods: {
			getUserList() {
				
				// this.$http.post(this.url.getUserList, this.listQuery).then(function(res) {
				// 	console.log(res)
				// })
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			urlParse(){ //格式化url
				var urlparmas=URL.parse('http://localhost:3000/index?id=3', true)
				console.log(urlparmas.query)
			}
		},
		created() {
			var that = this
			that.getUserList()
			that.urlParse()
		}
	}
</script>

<style>
</style>
