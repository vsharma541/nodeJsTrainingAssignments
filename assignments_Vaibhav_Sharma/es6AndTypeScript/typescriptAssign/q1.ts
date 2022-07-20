// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// process.stdin.on('data', (input) => {
//     inputString += input;
//     process.exit();
// })
// process.on('exit', () => {
//     mainFunc();
// })

// function mainFunc(): void {
//     let inputArr: string[] = inputString.split(' ');
//     let x: number = Number(inputArr[0]);
//     let y: number = Number(inputArr[1]);
//     // console.log(x+y)
//     let prom1 = Promise.resolve(x);
//     let prom2 = Promise.resolve(y);
//     Promise.all([prom1, prom2]).then(resArr => {
//         console.log("promise resolved");
        
//         console.log(resArr[0] + resArr[1]);
//     })
// }
mainFunc();
function mainFunc(): void {
    let x: number = 2, y: number = 3;
    let prom1 = Promise.resolve(x);
    let prom2 = Promise.resolve(y);
    Promise.all([prom1, prom2]).then(resArr => {
        console.log("promise resolved");
        
        console.log(resArr[0] + resArr[1]);
    })
}
