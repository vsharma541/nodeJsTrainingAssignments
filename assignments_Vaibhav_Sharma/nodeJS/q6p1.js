var calculate = require('./calculator');
var args = process.argv;
var num1 = Number(args[2]);
var num2 = Number(args[3]);
console.log(`Sum of numbers ${num1} and ${num2} = `, calculate.sum(num1, num2));
console.log(`Product of numbers ${num1} and ${num2} = `, calculate.mutiplication(num1, num2));