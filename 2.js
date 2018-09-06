const http = require('http');
var ProcessRequest = function (request,response) {
  response.writeHeader(200,{'content-type':'text/html'});
  response.write("<h1><a href='http://localhost:8083'>Email</a></h1> ");
  response.write("<hr>");
  response.write("<h1><a href='http://localhost:8084'>Details</a></h1>");

  response.end();
}
var server =  http.createServer(ProcessRequest);
server.listen(8082);
