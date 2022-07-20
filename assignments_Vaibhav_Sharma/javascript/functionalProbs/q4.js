process.stdin.setEncoding('utf-8');
let inputData = '';
console.log("Enter the array > ");
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
    console.log(map(arr, square));
    console.log(map(arr, Math.sqrt));
}
function square(num) {
    return num * num;
}
function map(arr, mapfunc) {
    const newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(mapfunc(Number(arr[i])));
    }
    return newArr;
}