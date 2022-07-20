let fs = require('fs');
fs.readFile('integersFile.txt', 'utf-8', (err, data) => {
    if(err) console.log(err);
    else {
        let arr = data.split('\n');
        let sum = 0;
        for(let num of arr) {
            num = Number(num.trim());
            sum += num;
        }
        console.log(sum);
    }
})