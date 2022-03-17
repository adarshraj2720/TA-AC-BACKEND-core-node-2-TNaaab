var http = require('http');

var server = http.createServer(handleRequest)


function handleRequest(req,res){
    if(req.method==="POST" && req.url==='/'){
        var store= '';
     req.on('data',(chunk)=>{
         store += chunk;
     });
     req.on('end',()=>{
         console.log(store)
         res.write(store);
         res.end()
     })   
    }
}

server.listen(3456)