var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.print = function () {
        console.log('Circle is of raduis: ', this.radius);
    };
    return Circle;
}());
var Employee = /** @class */ (function () {
    function Employee(name, dept, age) {
        this.name = name;
        this.dept = dept;
        this.age = age;
    }
    Employee.prototype.print = function () {
        console.log("Employee details are: \n            Name: ".concat(this.name, "\n            Age: ").concat(this.age, "\n            Department: ").concat(this.dept));
    };
    return Employee;
}());
function printAll() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    objs.forEach(function (obj) {
        obj.print();
    });
}
var c1 = new Circle(12);
var c2 = new Circle(32);
var emp1 = new Employee('Roy', 'IT', 23);
var emp2 = new Employee('Jon', 'HR', 34);
printAll(c1, c2, emp1, emp2);
//# sourceMappingURL=q3.js.map