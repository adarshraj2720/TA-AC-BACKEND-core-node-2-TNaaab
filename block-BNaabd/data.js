var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var dataFormat = req.headers['content-type']
    var store= '';
    req.on('data',(chunk) =>{
        store = store +chunk
    })
    req.on('end',()=>{
        if(dataFormat === 'application/Json'){
            var parsedData = JSON.parse(store)
            res.end(store)
        }
    })

}
server.listen(7000,()=>{
    console.log('WELCOME in 7000 server')
})