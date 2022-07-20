class Fibonacci {
    constructor(private prev_no: number, private curr_no: number) {
        this.prev_no = prev_no;
        this.curr_no = curr_no;
    }
    next(): number {
        const sum = this.curr_no+this.prev_no;
        this.prev_no = this.curr_no;
        this.curr_no = sum;
        return sum;
    }
}
let fib = new Fibonacci(0, 1);
for(let i=0; i<10; i++) {
    console.log(fib.next());
}