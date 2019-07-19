var http = require('http');
var fs = require('fs');
http.createServer((err, res) => {
    //读目录
    fs.readdir("./static", (err, data) => {
        console.log(data);
        var box="";
        // 返回数组
        for (let i = 0; i < data.length; i++) {
            console.log()
            fs.stat("./static/"+data[i], (err, stats) => {
                if(stats.isFile()){
                    // 是否文件
                    console.log("./static/"+data[i]+"是文件");
                    box+="./static/"+data[i]+"是文件"
                }else if(stats.isDirectory()){
                    // 是否目录
                    console.log("./static/"+data[i]+"是目录");
                    box+="./static/"+data[i]+"是目录"
                }
            })
        }
        res.end(box);
    })
}).listen(3000)