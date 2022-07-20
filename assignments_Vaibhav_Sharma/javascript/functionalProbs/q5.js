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
    console.log(find(arr, isEven));
}
function isEven(num) {
    return ((num % 2) === 0);
}
function find(arr, testFunc) {
    if(arr.length === 0) {
        return "No number passed the test";
    }
    if(testFunc(arr[0])) {
        return arr[0];
    }
    return find(arr.slice(1), testFunc);
}