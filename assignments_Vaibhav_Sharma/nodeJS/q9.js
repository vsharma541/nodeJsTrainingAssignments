var concat = require('concat-stream');
var fs = require('fs')
var rstream = fs.createReadStream('myLargeFile.txt', 'utf-8');
var concatStream = concat(processData);
rstream.pipe(concatStream);

function processData(data) {
    var patt = /[\n\s\r\t]+/g
    console.log(data.split(patt));
}
