var http = require('http');
var url = require('url');
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;Charset=utf-8" })
    if (req.url == "/favicon.ico") {
        return
    }

    var query = url.parse(req.url, true).query
    console.log(query)
    if (query.name == "teacher") {
        res.end("teacher的工号为" + query.pass)
    } else if (query.name == "student") {
        res.end("student的学号为" + query.pass)
    } else {
        res.end("用户错误")
    }
}).listen(3000, (err) => {
    console.log("服务器已运行")
})