var http=require('http');
var express=require("express")
var app=express();
app.get("/",(req,res)=>{
    res.send({"success":"ok"})
})
// 在express中路径不区分大小写
app.get("/About",(req,res)=>{
    res.send("about")
})
//可以链式调用
// app.get("/",(req,res)=>{
//     res.send({"success":"ok"})
// }).get("/About",(req,res)=>{
//     res.send("about")
// })

// app.post("/about",(req,res)=>{
//     res.send("about")
// })
app.listen(3000)
