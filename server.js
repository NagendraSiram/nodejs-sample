//Basic Server - to run this file use "node server.js"

const http = require('http')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  if(request.url === '/') {}
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Node.js Server!');
  }

  if(request.url === '/api/courses') {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
