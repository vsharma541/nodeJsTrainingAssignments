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
var rect1 = new Rectangle(20, 10);
var rect2 = new Rectangle(15, 8);
console.log(rect1.width, rect1.height);
console.log(rect2.width, rect2.height);
rect1.height = 5;
rect2.width = 20;
console.log(rect1.width, rect1.height);
console.log(rect2.width, rect2.height);
