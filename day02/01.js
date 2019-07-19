var http=require("http");
var path=require("path");
http.createServer((req,res)=>{
    var oldpath=path.resolve("./static/aaa/cc");
    // path.resolve()  会将最后一个参数转换为绝对路径   webpack

    // var oldpath=path.normalize("/aaa/bb/cc");
    //path.normalize 路径的格式化

    // var oldpath=path.extname("index.html");
    //path.extname 文件的扩展名

    // var oldpath=path.format({
    //     root:"",
    //     dir:"c:\a\b",
    //     base:"\d"
    // })
    //path.format  将对象转化为路径

    // var oldpath=path.join('/foo', '////bar', 'baz/asdf', 'quux', '///');
    //path.join  将路径合并成标准路径

    //path.isAbsolute  返回绝对路径
    //path.relative  返回相对路径
    //path.dirname  返回文件目录
    //path.parse  返回文件路径



    console.log(oldpath)
    res.end();

}).listen(3000)


// path
// {
//     resolve: [Function: resolve],
//     normalize: [Function: normalize],
//     isAbsolute: [Function: isAbsolute],
//     join: [Function: join],
//     relative: [Function: relative],
//     toNamespacedPath: [Function: toNamespacedPath],
//     dirname: [Function: dirname],
//     basename: [Function: basename],
//     extname: [Function: extname],
//     format: [Function: bound _format],
//     parse: [Function: parse],
//     sep: '\\',
//     delimiter: ';',
//     win32: [Circular],
//     posix: {
//       resolve: [Function: resolve],
//       normalize: [Function: normalize],
//       isAbsolute: [Function: isAbsolute],
//       join: [Function: join],
//       relative: [Function: relative],
//       toNamespacedPath: [Function: toNamespacedPath],
//       dirname: [Function: dirname],
//       basename: [Function: basename],
//       extname: [Function: extname],
//       format: [Function: bound _format],
//       parse: [Function: parse],
//       sep: '/',
//       delimiter: ':',
//       win32: [Circular],
//       posix: [Circular],
//       _makeLong: [Function: toNamespacedPath]
//     },
//     _makeLong: [Function: toNamespacedPath]
//   }