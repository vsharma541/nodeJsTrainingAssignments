process.stdin.setEncoding('utf-8');
console.log('Enter the array > ');
let inputData = '';
process.stdin.on('data', (data) => {
    inputData += data;
    process.exit();
});
process.on('exit', () => {
    inputData = inputData.trim();
    bubbleSort();
})
function bubbleSort() {
    const arr = inputData.split(' ').map(num => Number(num));
    const len = arr.length;
    for(let i=0; i<(len-1); i++) {
        for(let j=0; j<(len-i-1); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log("sorted array = ", arr);
}