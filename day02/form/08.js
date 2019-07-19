var http=require("http");
var fd=require("formidable");
var sd=require("silly-datetime");
var path=require("path");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/dopost"){
        var form=new fd.IncomingForm()
        form.uploadDir="./upload";
        // 上传路径
        form.parse(req,function(err,fields,files){
            //fields 文本域  files 文件域
            var oldpath=files.pic.path;
            //原地址
            var extname=path.extname(files.pic.name);
            //扩展名
            var tt=sd.format(new Date(),"YYYYMMDDhhmmss");
            //时间
            var newpath="upload/"+tt+extname; 
            // 新地址
            console.log(newpath);
            fs.rename(oldpath,newpath,(err)=>{
                res.end("success")
            })
        })
    }
    
    
}).listen(3000,()=>{
    console.log("服务器已经启动")
})