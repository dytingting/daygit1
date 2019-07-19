var express=require("express")
var app=express();
app.get("/",(req,res)=>{
    res.end("首页")
})
//接收get方式传输过来的数据通过 req.query
app.get("/new",(req,res)=>{
    console.log(req.query)
    res.send("接收成功")
})
app.listen(3000)