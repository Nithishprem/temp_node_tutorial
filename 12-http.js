const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to my first homepage from server')
    }
    else if(req.url === '/about'){
        res.end('This our brief history');
    } 
    else{
        res.end(`<h1>OOps</h1>
        <a href="/">back home</a>`)
    }
})

server.listen(5000);