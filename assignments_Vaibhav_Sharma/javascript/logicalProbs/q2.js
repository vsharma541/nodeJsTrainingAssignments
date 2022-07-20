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
    const num = Number(inputData);
    const sumThree = findSum(num, 3);
    const sumFive = findSum(num, 5);
    const sumFifteen = findSum(num, 15);
    console.log("Required sum = " + (sumThree + sumFive - sumFifteen));
}

function findSum(num, a) {
    const n = Math.floor(num/a);
    const result = (n*((2*a) + (n-1)*a))/2;
    return result;
}