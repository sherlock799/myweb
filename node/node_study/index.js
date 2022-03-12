const http = require('http');
const hostname = '127.0.0.1';
const port = 5002;

let server = http.createServer( (request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  response.end('Hello World 123')
})

server.listen(port,hostname,()=>{
  console.log('Server running at http://127.0.0.1:5002/')
})
