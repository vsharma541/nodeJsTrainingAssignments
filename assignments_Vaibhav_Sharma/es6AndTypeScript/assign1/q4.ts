process.stdin.setEncoding('utf-8');
console.log("enter the array - ");
let inputData = '';
process.stdin.on('data', (data) => {
    inputData += data;
    process.exit();
})
process.on('exit', () => {
    inputData = inputData.trim();
    main();
})
function main() {
    const arr = inputData.split(' ');
    const resArr = stringConv(arr);
    console.log(resArr);
}
var stringConv = (arr) => {
    const newArr = arr.map(str => {
        return {
            name: str,
            length: str.length
        }
    });
    
    return newArr;
}