var fs = require('fs');
var args = process.argv;
var filename = args[2];
var content = args[3];
fs.writeFile(filename, content, (err) => {
    if(err) console.log(err);
    else {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) console.log(err);
            else console.log(data);
        })
    }
});