// var express=require("express");
// var cookieParser=require("cookie-parser");
// var app=express();
// app.use(cookieParser());
// app.get("/",(req,res)=>{
//     res.send("首页")

// })
// //cookie 加密
// app.get("/set",(req,res)=>{
//     //如何设置cookie
//     // cookie httpOnly true false  domain 域名 MaxAge 有效期 大小  size signed 表示对cookie加密
//     res.cookie("username","tom",{maxAge:200000,httpOnly:true})
//     res.send("cookie设置成功")
// })
// app.get("/get",(req,res)=>{
//     var name =req.cookies.username;
//     console.log(name)
//     res.send("cookie设置成功"+name);
// })
// app.listen(3000)


var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();
app.use(cookieParser('xxx'));   //cookie 加密
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/set",(req,res)=>{
    //如何设置cookie
    // cookie httpOnly true false  domain 域名 MaxAge 有效期 大小  size signed 表示对cookie加密
    res.cookie("username","tom",{maxAge:200000,httpOnly:true,signed:true})
    res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
    var name =req.signedCookies.username;
    console.log(name)
    res.send("cookie设置成功"+name);
})
app.listen(3000)