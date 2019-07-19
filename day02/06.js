//queryString   查询字符串      eval缺点  xss攻击  sql注入
var queryString=require("querystring")
console.log(queryString)
// 对象》字符串
var url=queryString.stringify({name:"tom",age:"12"})
var url1=queryString.parse(url)
console.log(url)
console.log(url1)
