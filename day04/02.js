var express=require("express");
var art=require("express-art-template");
console.log(art);
var app=express();
//设置模板引擎
//第一个参数 art ejs jade=》pug swig
app.engine("art",art);
app.get("/",(req,res)=>{
    //.art必须写，不然express-art-template识别不到模板引擎
    res.render("new.art",{
        list:["1","2","3"]
    })
})
app.listen(3000)