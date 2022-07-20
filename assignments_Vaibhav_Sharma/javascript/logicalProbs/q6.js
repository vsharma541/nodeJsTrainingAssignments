process.stdin.setEncoding('utf-8');
console.log('Enter the number > ');
let inputData = '';
process.stdin.on('data', (inputVal) => {
    inputData += inputVal;
    process.exit();
})
process.on('exit', () => {
    inputData = inputData.trim();
    main();
})
function main() {
    const arr = inputData.split(' ');
    let maxLength = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    maxLength += 3;
    let str = '';
    for(let i=0; i<maxLength; i++) {
        str += '*';
    }
    console.log(str);
    for(let i=0; i<arr.length; i++) {
        console.log('*' + arr[i] + '*');
    }
    console.log(str);
}