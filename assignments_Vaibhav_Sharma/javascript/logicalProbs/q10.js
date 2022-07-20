function fib(n) {
    // if((n === 1) || (n === 0)) {
    //     return n;
    // }
    // var ans = fib(n-1) + fib(n-2);
    // console.log(ans);
    // return ans;
    let a = 1;
    let b = 0;
    console.log(a+b);
    while(n > 1) {
        let sum = a + b;
        console.log(sum);
        b = a;
        a = sum;
        n--;
    }
}
fib(100)