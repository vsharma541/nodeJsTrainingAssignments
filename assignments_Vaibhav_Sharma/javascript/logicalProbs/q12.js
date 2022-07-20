process.stdin.setEncoding('utf-8');
console.log('Enter the string > ');
let inputData = '';
process.stdin.on('data', (data) => {
    inputData += data;
    process.exit();
});
process.on('exit', () => {
    inputData = inputData.trim();
    main();
})
function main() {
    let ans = '', maxLen = 0, str = '';
    for(let i=0; i<inputData.length; i++) {
        if((inputData[i] !== 'a') && (inputData[i] !== 'b')) {
            str += inputData[i];
        }else {
            if(str.length > maxLen) {
                ans = str;
                maxLen = str.length;
            }
            str = '';
        }
    }
    console.log("Longest token is " + ans);
}