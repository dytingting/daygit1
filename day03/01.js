var http=require('http');
var ejs=require('ejs');
var fs=require('fs');
http.createServer((req,res)=>{
    var list=[1,2,3,4];
    fs.readFile("static/index.ejs",(err,data)=>{
        var str=data.toString();
        var result=ejs.render(str,{list:list})
        res.end(result);
    })
}).listen(3000)


// var template = ejs.compile(str, options);
// template(data);
// // => 输出绘制后的 HTML 字符串

// ejs.render(str, data, options);
// // => 输出绘制后的 HTML 字符串

// ejs.renderFile(filename, data, options, function(err, str){
//     // str => 输出绘制后的 HTML 字符串
// });