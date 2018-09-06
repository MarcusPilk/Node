var fs = require("fs");

var QAF =  fs.createReadStream('./data.txt',{encoding: 'UTF8',highWaterMark: 1024});
var count = 0;
QAF.on("data", function (XYZ) {
    count++;
    console.log(count);
});
QAF.on("end",function () {
    console.log("end");
});

