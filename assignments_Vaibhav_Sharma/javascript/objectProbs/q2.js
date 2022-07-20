// var Rectangle = function(width, height) {
//     this.width = width;
//     this.height = height;
// }
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
var rect1 = new Rectangle(20, 10);
var rect2 = new Rectangle(15, 8);
console.log(rect1.getArea());
console.log(rect2.getArea());
// rect1.hieght = 40;
// console.log(rect1.getArea());