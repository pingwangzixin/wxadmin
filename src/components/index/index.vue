<template>
	<div class="cont">
		<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址">
		    </el-table-column>
		  </el-table>
	</div>
</template>

<script>
	import { baseUrl } from '@/utils/baseUrl'
	// import { intreface } from '@/utils/interface'
	export default {
		data() {
			return {
				listQuery: {
					page: 1,
					rows: 20,
				},
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
		methods:{
			getUserList(){
				this.$http.post(this.url.intreface.getUserList,this.listQuery).then(function(res){
					console.log(res)
				})
			}
		},
		created(){
			var that=this
			that.getUserList()
			console.log(this.url.intreface)
		}
	}
</script>

<style>
</style>
