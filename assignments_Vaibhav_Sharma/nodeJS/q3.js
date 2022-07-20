let fs = require('fs');
let path = require('path');
let myPath = path.join(__dirname, 'myDir');
fs.readdir(myPath, (err, contents) => {
    if(err) console.log(err);
    else {
        contents.forEach(async (cont) => {
            let newPath = path.join(myPath, cont);
            let fstat = await fs.promises.stat(newPath);
            let contType = '';
            if(fstat.isFile()) {
                contType = 'FILE:';
            }else if(fstat.isDirectory()) {
                contType = 'DIR:';
            }
            console.log(contType, cont);
        })
    }

});