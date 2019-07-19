// 搭建静态资源管理器
var express=require("express");
var path=require("path");
var app=express();

//express.static()  使用静态资源
// app.use() 使用   中间件  插件
// console.log(__dirname)

var publicpath=path.resolve(__dirname,"public");
// console.log(publicpath)
//使用静态资源管理器
app.use(express.static(publicpath))
app.listen(3000);
//mongodb
