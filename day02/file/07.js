// npm node的包管理工具
// npm init 项目初始化 = npm init -y  >package.json
// npm install下载
// npm uninstall 删除 = npm i
// --save=-S 生产环境   dependencies  --save-dev =-D 开发环境 devdependencies
// 生产环境  线上运行的环境
//开发环境  开发过程中


var sd=require("silly-datetime");
//时间戳格式化
var time=sd.format(new.Date(),"YYYY-MM-DD-hh-mm-ss")
//距离当前时间的前几秒
var time=sd.fromNow(new.Date(),3000)
console.log(sd)