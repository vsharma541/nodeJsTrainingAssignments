var Fibonacci = /** @class */ (function () {
    function Fibonacci(prev_no, curr_no) {
        this.prev_no = prev_no;
        this.curr_no = curr_no;
        this.prev_no = prev_no;
        this.curr_no = curr_no;
    }
    Fibonacci.prototype.next = function () {
        var sum = this.curr_no + this.prev_no;
        this.prev_no = this.curr_no;
        this.curr_no = sum;
        return sum;
    };
    return Fibonacci;
}());
var fib = new Fibonacci(0, 1);
for (var i = 0; i < 10; i++) {
    console.log(fib.next());
}
//# sourceMappingURL=q1.js.map