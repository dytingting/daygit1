var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    //修改名字
    fs.rename("1.txt","2.txt",(err)=>{
        res.end("success")
    })
}).listen(3000)