var path = require('path');

var http = require('http');

var qs = require('querystring')

var server = http.createServer(handleRequest)

//path

var absolutePath = __dirname;
console.log(absolutePath);

var relativePath = './index.html';
console.log(relativePath);

var pathmodule = path.join(__dirname, 'app.js');
console.log(relativePath, pathmodule)


//capture data on server

// function handleRequest(req, res) {
//     var store = '';
//     req.on('data', (chunk) => {
//         store = store + chunk
//     })
//     req.on('end', () => {
//         if (req.method === "POST" && req.url === "/") {
//             res.writeHead(201, { 'Content-Type': "application/json" })
//             console.log(store)
//             res.end(store)
//         }
//     })
// }
// server.listen(5005, () => {
//     console.log('WELCOME in  5005')
// })


//captain

// function handleRequest(req, res) {
//     var store = '';
//     req.on('data', (chunk) => {
//         store = store + chunk
//     })
//     req.on('end', () => {
//         if (req.method === "POST" && req.url === "/") {
//             res.writeHead(201, { 'Content-Type': "application/json" })
//             console.log(JSON.parse(store).captain)
//             res.end(JSON.parse(store).captain)
//         }
//     })
// }
// server.listen(5555, () => {
//     console.log('WELCOME in  5555')
// })


//Server 9000
function handleRequest(req,res){
    var store= '';
    console.log(req.headers['Content-Type'])
    req.on('data',(chunk)=>{
        store += chunk;
    })
    req.on('end',()=>{
        if(req.headers['content-type']==='application/x-www-form-urlencoded'){
            var formdata =qs.parse(store)
            res.end
            (JSON.stringify(formdata));
        }
        if(req.headers['content-type']==='application/json'){
            res.end(store)
        }
    })
}
// server.listen(9000)

// "city":"Motihari",
// "state":"Bihar",
// "PIN":845401,
// "country":"India"


function handleRequest(req,res){
    var store= '';
    console.log(req.headers['Content-Type'])
    req.on('data',(chunk)=>{
        store += chunk;
    })
    req.on('end',()=>{
        if(req.headers['content-type']==='application/x-www-form-urlencoded'){
            var formdata =qs.parse(store)
            res.end
            (JSON.stringify(formdata));
        }
        if(req.headers['content-type']==='application/json'){
            var jsonData=JSON.parse(store);
            res.setHeader('Content-Type','text/html');
            res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`)
        }
    })
}
// server.listen(1111)



//querystring

function handleRequest(req,res){
    var store= '';
    console.log(req.headers['Content-Type'])
    req.on('data',(chunk)=>{
        store += chunk;
    })
    req.on('end',()=>{
        if(req.headers['content-type']==='application/x-www-form-urlencoded'){
            var formdata =qs.parse(store);
            res.setHeader('Content-Type','text/html');
            res.end(`<h2>${formdata.name}</h2><p>${formdata.email}</p>`);
        }
        if(req.headers['content-type']==='application/json'){
            var jsonData=JSON.parse(store);
            res.setHeader('Content-Type','text/html');
            res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`)
        }
    })
}
server.listen(2222)