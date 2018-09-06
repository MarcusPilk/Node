var fs = require('fs');

var r = fs.readFile("./data.txt",'utf8',(err,data) => {
    if(err)throw err;
    fs.writeFile("./data3.txt",data.replace("QA Consulting","BAE"),'utf8', (err) => {
        if(err) throw err;
        else console.log("file written");
    });
});


