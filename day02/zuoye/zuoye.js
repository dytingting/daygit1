var http=require('http');
var url=require('url');
var path=require("path");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;Charset=utf-8"})
    if(req.url=="/favicon.ico"){
        return
    }
    var oldquery=url.parse(req.url).path
    console.log(oldquery)
    var newquery=oldquery.split('/')
    if(newquery[1]=="teacher"){
        res.end("teacher的工号是"+newquery[2])
    }else if(newquery[1]=="student"){
        res.end("student的学号是"+newquery[2])
    }else{
        res.end()
    }
    
}).listen(3000,(err)=>{
    console.log("服务器已运行")
})