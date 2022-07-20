process.stdin.setEncoding('utf-8');
let inputData = '';
console.log("Enter the number > ");
process.stdin.on('data', (data) => {
    inputData += data;
    process.exit();
})
process.on('exit', () => {
    inputData = inputData.trim();
    main();
})
function main() {
    const num = Number(inputData);
    console.log(composedValue(square, double, num));
}
function composedValue(square, double, num) {
    return square(double(num));
}
function double(num) {
    return (num * 2);
}
function square(num) {
    return (num * num);
}