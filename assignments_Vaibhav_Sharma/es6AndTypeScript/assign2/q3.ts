// Refer: https://mathworld.wolfram.com/NarcissisticNumber.html
// interface armsNum {
//     value: number,
//     done: boolean
// }
class GenArmstrong {
    constructor(private num: number) {
        this.num = num;
    }
    *getNextArmstrong(): any{
        this.num++;
        while(!this.isArmstrong()) {
            this.num++;;
        }
        yield this.num;
    }
    isArmstrong(): boolean {
        const arr = this.num.toString().split('');
        let sum = 0;
        for(let digit of arr) {
            let numDigit = Number(digit);
            sum += Math.pow(numDigit, arr.length);
        }
        return (this.num === sum);
    }
}
let arms2 = new GenArmstrong(0);
for(let i=0; i<10; i++) {
    let func = arms2.getNextArmstrong();
    console.log(func.next());
}
