// var http=require("http");
var express=require("express")
var app=express();
// http.createServer((req,res)=>{})==express()
app.get("/",(req,res)=>{
    res.end("首页")
})
// 获取路由动态参数      :必须加
app.get("/about/:id",(req,res)=>{
    res.send("路由接收到的参数为："+req.params.id)
})
app.listen(3000)
// express()本质上就是调用了createApplication()方法，返回了一个express对象