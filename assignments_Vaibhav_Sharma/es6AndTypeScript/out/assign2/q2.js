// Refer: https://mathworld.wolfram.com/NarcissisticNumber.html
var Armstrong = /** @class */ (function () {
    function Armstrong(num) {
        this.num = num;
        this.num = num;
    }
    Armstrong.prototype.getNextArmstrong = function () {
        this.num++;
        while (!this.isArmstrong()) {
            this.num++;
            ;
        }
        return this.num;
    };
    Armstrong.prototype.isArmstrong = function () {
        var arr = this.num.toString().split('');
        var sum = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var digit = arr_1[_i];
            var numDigit = Number(digit);
            sum += Math.pow(numDigit, arr.length);
        }
        return (this.num === sum);
    };
    return Armstrong;
}());
var arms1 = new Armstrong(0);
for (var i = 0; i < 20; i++) {
    console.log(arms1.getNextArmstrong());
}
//# sourceMappingURL=q2.js.map