# vueAdmin

> 基于vue-cli的后台管理项目

## Build Setup

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080  启动项目
npm run dev

# build for production with minification  打包命令
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 接口地址写在src/utils/interface.js文件中
调用接口post写法：
this.$http.post(this.url.getUserList,this.listQuery).then(function(res){
	console.log(res)
	//this.url.getUserList是接口地址
	//this.listQuery是参数
})
调用接口get写法：
this.$http.get(this.url.getUserInfo, {
	params: {
		'id': 21
	}
}).then(function(res) {
	console.log(res)
})
#页面写在src/views文件夹下
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
