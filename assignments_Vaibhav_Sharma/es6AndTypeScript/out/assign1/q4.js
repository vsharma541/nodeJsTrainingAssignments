process.stdin.setEncoding('utf-8');
console.log("enter the array - ");
var inputData = '';
process.stdin.on('data', function (data) {
    inputData += data;
    process.exit();
});
process.on('exit', function () {
    inputData = inputData.trim();
    main();
});
function main() {
    var arr = inputData.split(' ');
    var resArr = stringConv(arr);
    console.log(resArr);
}
var stringConv = function (arr) {
    var newArr = arr.map(function (str) {
        return {
            name: str,
            length: str.length
        };
    });
    return newArr;
};
//# sourceMappingURL=q4.js.map