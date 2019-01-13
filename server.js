//Basic Server - to run this file use "node server.js"

const http = require('http')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
