//url
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    //req=request 请求  res=response 响应
    console.log(req.url);
    if(req.url=="/red"){
        fs.readFile("./static/red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/blue"){
        fs.readFile("./static/blue.html",(err,data)=>{
            res.end(data)
        })
    }
    // res.end(req.url)
}).listen(3000)