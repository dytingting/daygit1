var http=require('http');
var art=require('art-template');
var fs=require('fs');
http.createServer((req,res)=>{
    var newobj={
        list:['1','2','3','4']
    }
    fs.readFile("static/form.art",(err,data)=>{
        var str=data.toString();
        var result=art.render(str,newobj)
        res.end(result);
    })
}).listen(3000)