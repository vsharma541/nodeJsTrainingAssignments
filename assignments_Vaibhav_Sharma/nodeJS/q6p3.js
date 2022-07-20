var calculate = require('./calculator');
var moment = require('moment');

var nowTime = moment().format('dddd, MMMM Do YYYY, hh:mm:ss a');
var args = process.argv;
var num1 = Number(args[2]);
var num2 = Number(args[3]);
console.log("Today is : ", nowTime);
console.log(`Sum of numbers ${num1} and ${num2} = `, calculate.sum(num1, num2));
console.log(`Product of numbers ${num1} and ${num2} = `, calculate.mutiplication(num1, num2));