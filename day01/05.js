// var obj={
//     user:'tom',
//     pass:'123456'
// }
// var http=require("http");
// var url=require("url");
// var fs=require("fs");
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//     var query=url.parse(req.url,true).query

//     fs.readFile("./05.html",(err,data)=>{
//         res.end(data)
//     })
//     if(query.username){
//         if(query.username==obj.user&&query.password==obj.pass){
//             console.log(query.username);
//             console.log(query.password);
//             res.end("成功")
//         }else{
//             res.end("失败")
//         }
//     }
// }).listen(3000)


var http = require("http");
var url = require("url");
http.createServer((req, res) => {
    if(req.url=="/favicon.ico"){
        retuen
    }
    var obj = {
        user: 'tom',
        pass: '123456'
    }
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    var query = url.parse(req.url, true).query
    if (query.username == obj.user && query.password == obj.pass) {
        console.log(query.username);
        console.log(query.password);
        res.end("成功")
    } else {
        res.end("失败")
    }
}).listen(3000)