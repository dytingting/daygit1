var express=require("express");
var fs=require("fs");
var app=express();
//设置引擎模板
//app.set
//engine 引擎
app.set("view engine","ejs");
app.set("views engine",__dirname+"views")
// app.engine("views engine","ejs");
app.get("/",function(req,res){
    //express 包含ejs  res==>render  理由render方法
    // var list=["1","2","3"];
    // fs.readFile("index",function(err,data){
    //     res.render(data,{list:list})
    // })

    //或者
    res.render("index",{
        list:["1","2","3"]
    })
    
})
app.listen(3000)