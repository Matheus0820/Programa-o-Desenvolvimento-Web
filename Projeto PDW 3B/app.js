const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.readFile(__dirname + "templates/homepage.html", function(err, data) {
    res.end(data);
  });
  //Adicionar url - Redirecionamento
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});