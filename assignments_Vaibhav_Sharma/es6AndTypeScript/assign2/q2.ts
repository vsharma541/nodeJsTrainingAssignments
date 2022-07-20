// Refer: https://mathworld.wolfram.com/NarcissisticNumber.html
class Armstrong {
    constructor(private num: number) {
        this.num = num;
    }
    getNextArmstrong(): number {
        this.num++;
        while(!this.isArmstrong()) {
            this.num++;;
        }
        return this.num;
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
let arms1 = new Armstrong(0);
for(let i=0; i<20; i++) {
    console.log(arms1.getNextArmstrong());
}
