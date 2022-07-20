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
    let arr = inputData.split(' ');
    console.log(map(arr, square));
    arr = inputData.split(' ');
    console.log(map(arr, Math.sqrt));
}
function square(num) {
    return num * num;
}
function map(arr, mapfunc) {
    return mapHelper(arr, arr.slice(arr.length), mapfunc);
}
function mapHelper(arr, newArr, mapfunc) {
    if(arr.length === 0) {
        return newArr;
    }
    newArr.push(mapfunc(arr[0]));
    return mapHelper(arr.slice(1), newArr, mapfunc);
}