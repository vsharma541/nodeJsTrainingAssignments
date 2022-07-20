process.stdin.setEncoding('utf-8');
console.log('Enter the number > ');
let inputData = '';
process.stdin.on('data', (inputVal) => {
    inputData += inputVal;
    process.exit();
})
process.on('exit', () => {
    inputData = inputData.trim();
    parity();
})
function parity() {
    const num = Number(inputData);
    let result = "";
    result = (num % 2) === 0 ? "even" : "odd";
    console.log(result);
}