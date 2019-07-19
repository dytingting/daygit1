var http=require("http");
http.createServer((req,res)=>{
    //req=request 请求  res=response 响应
    // res.end((1+2+3+4).toString());
    console.log(res)
    //解决中文乱码
    //text/plain文本
    //writeHead 写入响应头 文本类型 text/html
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end("我喜欢学习node")

}).listen(3000)