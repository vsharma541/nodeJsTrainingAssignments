let fs = require('fs');
let args = process.argv;
let searchTxt = args[2];
let counter = 0;
fs.readFile('fileToFindAll.txt', 'utf-8', (err, data) => {
    if(err) console.log(err);
    else {
        const arrData = data.split(' ');
        console.log(arrData);
        for(let text of arrData) {
            if(text.includes(searchTxt)) {
                counter++;
            }
            // if(func1(text, searchTxt)) counter++;
        }
        console.log(`No. of occurrences of ${searchTxt} - ${counter}`);
    }
})
// function func1(text, searchTxt) {
//     console.log(text);
//     let cnt = 0, j=0;
//     for(let i=0; i<text.length; i++) {
//         if(text[i] === searchTxt[j++]) {
//             cnt++;
//         }else {
//             if(cnt === searchTxt.length) return true;
//             else {
//                 cnt = 0;
//                 j = 0;
//             }
//         }
//     }
//     if(cnt === searchTxt.length) return true;
//     return false;
// }
