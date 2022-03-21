var http = require('http')

var qs = require('querystring')

var fs = require('fs')
var server = http.createServer(handleRequest)


console.log('../client/index.js')
console.log(__dirname + '../client/index.js')


function handleRequest(req, res) {
    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk
    })
    req.on('end', () => {

        if (req.method === "GET" && req.url === "/form") {
            fs.createReadStream('./form.html').pipe(res)
        }
    
        if (req.method === "POST" && req.url === "/form") {
            console.log(store)
            // res.end(store)
            var formData = qs.parse(store)
            res.setHeader( 'content-type', "text/html" )
            res.end(`<h1>${formData.name}</h1> <h2>${formData.email}</h2><p>${formData.number}</p>`)
        }
       
  
    })


}
server.listen(5678)