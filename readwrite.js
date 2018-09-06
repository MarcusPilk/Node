var text = '';
var fs = require("fs");
var r = fs.createReadStream('./data.txt',{encoding: 'UTF8'});
var w = fs.createWriteStream('./data2.txt',{encoding: 'UTF8'});

var count = 0;
r.
r.on("data", function (XYZ) {
    text += XYZ.replace("QA Consulting", "Manchester");
});
r.on("end",function () {
    w.write(text);
});

