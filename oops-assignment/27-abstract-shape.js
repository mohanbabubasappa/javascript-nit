class Shape {
    area() { throw new Error("Child classes must implement area()") }
}
class Square extends Shape {
    constructor(side) { super(); this.side = side }
    area() { return this.side ** 2 }
}
console.log(new Square(5).area())
