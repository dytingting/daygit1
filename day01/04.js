//url req.url   url模块
var http=require("http");
var url=require("url");

http.createServer((req,res)=>{
    var oldquery=url.parse(req.url).query;
    //url.parse(解析地址栏)如果传入第二个参数为true时，则会转化为对象
    var query=url.parse(req.url,true).query
    // 解析 把多段路径进行合并
    var query=url.resolve("http://127.0.0.1:3000",'/aa/bb')
    // 序列化 参数 对象
    
    var query=url.format({
        protocol: null,
        slashes: null,
        auth: null,
        host: "http://127.0.0.1",   //主机
        port: "3000",               //端口
        hostname: null,
        hash: null,
        search: "?name=tom&age=12",
        query: "?name=tom&age=12",
        pathname: '/',
        path: '?name=tom&age=12',
        href: '?name=tom&age=12'
      })
      // console.log(oldquery);
    console.log(query);
    res.end();
}).listen(3000)