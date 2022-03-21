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
// function handleRequest(req, res) {
//     console.log(req.headers)
//     var dataFormat = req.headers['content-type']
//     console.log(dataFormat)
//     var store = '';
//     req.on('data', (chunk) => {
//         store = store + chunk
//     })
//     req.on('end', () => {
//         if (req.method === "POST" && req.url === '/json') {
//             console.log(store)
//             res.setHeader('Content-Type', "application/json")
//             res.end(store)
//         }
//     })
// }
// server.listen(9000)

// "city":"Motihari",
// "state":"Bihar",
// "PIN":845401,
// "country":"India"


// function handleRequest(req, res) {
//     console.log(req.headers)
//     var dataFormat = req.headers['content-type']
//     console.log(dataFormat)
//     var store = '';
//     req.on('data', (chunk) => {
//         store = store + chunk
//     })
//     req.on('end', () => {
//         if (req.method === "POST" && req.url === '/json') {
//             console.log(store)
//             res.setHeader('Content-Type', "text/html")
//             res.end({name:"Adarsh",email:"adarshraj2721@gmail.com"})
//             // res.end(`<h1>Adarsh</h1><h2>adarshraj2721@gmail.com</h2>`)
//             // res.end(store)
//         }
//     })
// }
// server.listen(1111)



//querystring

function handleRequest(req,res){
    console.log(req.headers)
    var dataFormat = req.headers['content-type']
    var store= '';
    req.on('data',(chunk) =>{
        store = store +chunk
    })
    req.on('end',()=>{
        // if(req.method==="POST"  && req.url=== '/json'){
        //     console.log(store)
        //     res.setHeader('Content-Type',"application/json")
        //     res.end(store)
        // }
        if(req.method==="POST"  && req.url=== '/form'){
            console.log(store)
            var formData=qs.parse(store)
            res.end(`<h2>${formData.email}</h2>`)
        }
    })

}
server.listen(2222)