var http =require('http');
var qs = require('querystring');

var server = http.createServer(handleRequest)


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