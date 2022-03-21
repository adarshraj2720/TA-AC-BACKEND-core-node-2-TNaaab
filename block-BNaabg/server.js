var http = require('http');

var qs = require('querystring')

var fs = require('fs')

var path = require('path')

var server = http.createServer(handleRequest)


function handleRequest(req, res) {
    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    })
    req.on('end', () => {

        if (req.method === "POST" && req.url === "/users") {
            console.log(store);
            var dataForm =qs.parse(store);
            console.log(dataForm);
            // const userDir = __dirname + "/users/";
            const userDir = path.join(__dirname, "users/");
            // var store = " ";
            if (req.url === "/users" && req.method === "POST") {
                console.log(store)
                var username = dataForm.username;
                fs.open(userDir + username + ".json", "wx", (err, fd) => {
                    fs.writeFile(fd, store, (err) => {
                        if(err) return console.log(err);
                        fs.close(fd, (err) => {
                            res.end(`${username} successfully created`);
                        });
                    });
                });
            }
        }
    })
    if (req.url=== "/users" && req.method === "GET") {
        fs.readFile('./users/adarshraj2720', (err, user) => {
            // send the user through response
            var dataForm =qs.parse(store);
            console.log(dataForm.username)
            res.end()
            // console.log(user)
          });

    }

}

server.listen(3333, () => {
    console.log('WELCOME in server 3333')
})