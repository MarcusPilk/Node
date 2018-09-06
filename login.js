var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
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
        fs.readFile("./login.html",function (E,D) {
            resp.writeHeader(200,{'content-type':'text/html'});
            resp.write(D);
            resp.end();
        });
    }else if(path == "/data"){
        let body = '';
        req.on("data", (d) => {
            body = d;
            var form = qs.parse(body.toString());// convert Buffer to string
            con.connect((e) => {
                if(e) console.log(e);
                else {
                    console.log("connected");
                    var query =`INSERT INTO tb_accounts(first_name,last_name,account_number) VALUES('${form.firstname}','${form.lastname}',${form.accountnumber})`;
                    con.query(query,(err,result) =>{
                        if(err) console.log(err);
                        else {
                            console.log(result);
                            resp.end();
                        }
                    })
                }
            })
            console.log(form.username + "username");
            resp.end('ok');
        });

    }
});
server.listen(8081);
