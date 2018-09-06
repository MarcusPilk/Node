var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var mysql = require('mySql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'QA'
});


var server = http.createServer(function (req,resp) {
    resp.writeHeader(200,{'content-type':'text/html'});



    var path = url.parse(req.url).pathname;
    if(path == "/"){
        resp.write("<table class=\"table\">\n" +
            "    <thead>\n" +
            "    <tr>\n" +
            "        <th>ID</th>\n" +
            "        <th>Name</th>\n" +
            "        <th>Email</th>\n" +
            "        <th>Phone</th>\n" +
            "        <th>Address</th>\n" +
            "        <th>Buttons</th>\n" +
            "    </tr>\n" +
            "    </thead>\n" +
            "    <tbody>");
        con.connect((e) =>{
            if (e) console.log(e);
            else{
                console.log("connected");
                con.query("SELECT * FROM personal_details",(err,result) => {
                    if (err) console.log(err);
                    else {
                        result.forEach(record =>
                            resp.write(
                                "<tr> <td>" + record.id.toString() +
                                "</td> <td>" + record.name +
                                "</td> <td>" + record.email +
                                "</td> <td>"+ record.phone.toString() +
                                "</td> <td>" + record.address +
                                "</td> <td>" + " <a href='/edit?id='"+ record.id.toString()+ ">edit</a>" +
                                "</td> </tr>"));
                        resp.write("</tbody> </table>");
                        resp.end();
                    }
                })
            }
        });

    }
    else if(path == "/edit"){
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

