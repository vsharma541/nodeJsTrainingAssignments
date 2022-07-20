var inputText = process.argv;
var fs = require('fs');
fs.writeFile('newFile.txt', inputText[2], (err) => {
    if(err) console.log(err);
    else {
        console.log("The file was saved!");
    }
})