var fs = require('fs');
var filename = __dirname + '/newFile.txt';
fs.readFile(filename, 'utf-8', (err, data) => {
    if(err) console.log(err);
    else console.log(data);
})