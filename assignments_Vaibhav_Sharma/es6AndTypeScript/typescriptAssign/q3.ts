interface Printable {
    print(): void
}

class Circle implements Printable{ 
    constructor(public radius: number) {}
    print(): void {
        console.log('Circle is of raduis: ', this.radius);
    }
}

class Employee implements Printable{
    constructor(public name: string, public dept: string, public age: number) {}
    print(): void {
        console.log(`Employee details are: 
            Name: ${this.name}
            Age: ${this.age}
            Department: ${this.dept}`);
    }
}

function printAll(...objs): void {
    objs.forEach(obj => {
        obj.print();
    })
}

let c1 = new Circle(12);
let c2 = new Circle(32);
let emp1 = new Employee('Roy', 'IT', 23);
let emp2 = new Employee('Jon', 'HR', 34);
printAll(c1, c2, emp1, emp2);