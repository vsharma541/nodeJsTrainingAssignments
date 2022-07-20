// const readline = require('readline-sync');
// let num = readline.question("Enter the number > ");
console.log("Enter the number > ");
process.stdin.setEncoding('utf-8');

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
    let num = Number(inputData);
    let sum = num*(num+1)/2;
    console.log(`Sum of numbers from 1 to ${num} = ${sum}`);
}
