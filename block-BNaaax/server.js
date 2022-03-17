var path =require('path')

var absolutepath= __dirname
console.log(absolutepath);

var filepath = __filename
console.log(filepath);

var pathmodule = path.join(__dirname,'server.js')
console.log(pathmodule)