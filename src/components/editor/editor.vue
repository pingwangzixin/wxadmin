<template>
	<div style="width: 800px;text-align: left;position: relative;">
		<div>
		  <el-input placeholder="请输入内容" v-model="input1">
		    <template slot="prepend">标题</template>
		  </el-input>
		  
		</div>
		<quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"></quill-editor>
		<el-button class="tijiao" type="primary" @click="submit">提交</el-button>
		<p>{{content}}</p>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor' //引入富文本编辑器
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	export default{
		data(){
			return{
				content: '',
				input1: '',
				editorOption: {
					placeholder: '编辑文章内容',
					// action:  '/api/product/richtext_img_upload.do',  // 必填参数 图片上传地址
					// methods: 'post',  // 必填参数 图片上传方式
					// token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
					// name: 'upload_file',  // 必填参数 文件的参数名
					// size: 500,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
					// accept: 'multipart/form-data, image/png, image/gif, image/jpeg, image/bmp, image/x-icon,image/jpg'  // 可选 可上传的图片格式
				} 
			}
		},
		methods:{
			submit () {
			    console.log(this.$refs.text.value)
			},
			onEditorReady(editor) { // 准备编辑器
			
			},
			onEditorBlur(e){// 失去焦点事件
				
			}, 
			onEditorFocus(e){// 获得焦点事件
				
			}, 
			onEditorChange(e){// 内容改变事件
				
			}, 
		},
		components:{
			quillEditor
		},
		computed: {
			editor() {
				return this.$refs.text.quill;
			}
		}
	}
</script>

<style>
	.el-select .el-input {
	    width: 130px;
	  }
	  .input-with-select .el-input-group__prepend {
	    background-color: #fff;
	  }
	  .tijiao{
		  position: absolute;
		  right: 0px;
	  }
	  .ql-container{
		  min-height: 300px!important;
	  }
</style>
