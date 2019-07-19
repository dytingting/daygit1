//fs
var http=require('http');
var fs=require('fs');
http.createServer((err,res)=>{
    res.writeHead(200,{"Content-type":"text/html;Charset=utf-8"})
    //文件
    //读文件
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     res.end(data.toString())
    // })
    //写文件  a=>append 追加   r=》read 读   w=》write  写
    // fs.writeFile("./static/1.txt","我是写入内容",{flag:"a"},(err,data)=>{
    //     if(err){
    //         throw error;
    //     }
    //     res.end("success")
    // })
    // // 先读取后写入
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     fs.writeFile("./static/2.txt",data,(err,data)=>{
    //         res.end('success')
    //     })
    // })
    // fs.copyFile
    // fs.copyFile("./static/1.txt","./static/3.txt",(err)=>{
    //     res.end('success')
    // })

    // 改名
    // fs.rename("./static/1.txt","./static/11.txt",(err)=>{
    //         res.end('success')
    // })
    // 删除
    // fs.unlink("./static/3.txt",(err)=>{
    //     res.end('success')
    // })




    // 目录
    // 创建目录
    // fs.mkdir("./aa",(err)=>{
    //     res.end('success')
    // })
    // 删除目录
    // fs.rmdir("./aa/bb",(err)=>{
    //     res.end('success')
    // })
    //读取目录
    // fs.readdir("./static",(err,data)=>{
    //     console.log(data)
    //     res.end('success')
    // })

    // 查看目录信息
    fs.stat("./static",(err,stats)=>{
        console.log(stats)
        console.log(stats.isFile());  
        // 是否文件
        console.log(stats.isDirectory());
        // 是否目录
        res.end();
    })


    // 流 stream 文件流  createReadStream 创建一个读取文件流
    // 块
    // var stream= fs.createReadStream("./static/3.txt")
    // var content="";
    //data 数据读取的过程  end 数据读取完成

    // stream.on("data",(err,chunk)=>{
    //     console.log(chunk);
    //     content+=chunk;
    //     console.log(content)
    // })
    // stream.on("end",(err)=>{
    //     console.log("数据接收完毕")
    // })

    // stream.on("data",(chunk)=>{
    //     console.log(chunk);
    //     content+=chunk;
    //     // console.log(content)
    // })
    // stream.on("end",(chunk)=>{
    //     console.log("数据接收完毕"+content)
    // })

    
    res.end();
}).listen(3000)

//aa的文件夹中取出所有文件夹
// for let 