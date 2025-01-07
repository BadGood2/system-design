"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log(`Radius is ${this.radius}`);
    }
}
class Prototype extends Circle {
    constructor(radius) {
        super(radius);
    }
    clone(radius) {
        return new Circle(radius);
    }
}
const prototypeCircle = new Prototype(10);
prototypeCircle.draw();
const circle = prototypeCircle.clone(20);
circle.draw();
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     draw() {
//         console.log(`Drawing a Circle with radius ${this.radius}`);
//     }
// }
// // Client Code
// const circle1 = new Circle(10);
// circle1.draw();
// const circle2 = new Circle(20);
// circle2.draw();
