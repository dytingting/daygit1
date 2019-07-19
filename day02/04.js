var http=require('http');
var router=require("./static/03.js")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/"){
        router.showIndex(req,res)
    }else if(req.url=="/about"){
        router.showAbout(req,res)
    }else if(req.url=="/new"){
        router.showNew(req,res)
    }else{
        router.show404(req,res)
    }
}).listen(3000)
