let args = process.argv;
let fileToRead = args[2];
let fs = require('fs');
fs.readFile(fileToRead, 'utf-8', (err, data) => {
    if(err) console.log(err);
    else {
        console.log(data);
    }
})