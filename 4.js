const http = require('http');
var ProcessRequest = function (request,response) {
  response.writeHeader(200,{'content-type':'text/html'});
  response.write("Details");

  response.end();
}
var server =  http.createServer(ProcessRequest);
server.listen(8084);
