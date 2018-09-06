var http = require('http');
var fs = require('fs');
var url = require('url');
var mysql = require('mySql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'accounts'
});

var server = http.createServer(function (req,resp) {
    resp.writeHeader(200,{'content-type':'text/html'});
    var path = url.parse(req.url).pathname;
    if(path == "/"){
        con.connect((e) => {
            if (e) console.log("nope");
            else {
                console.log("connected");
                con.query('SELECT * FROM tb_accounts',(e,results) => {
                    if(e) console.log(e);
                    else results.forEach(record => resp.write(record.account_id.toString() + "_" +record.first_name + "_" +record.last_name + "_" +record.account_number.toString() + "<hr>"));
                });
            }
        });
    }
});
server.listen(8081);
