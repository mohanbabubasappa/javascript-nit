class Shape { constructor(color) { this.color = color } }
class Circle extends Shape { constructor(color, radius) { super(color); this.radius = radius } area() { return Math.PI * this.radius ** 2 } }
class Rectangle extends Shape { constructor(color, width, height) { super(color); this.width = width; this.height = height } area() { return this.width * this.height } }
class Triangle extends Shape { constructor(color, base, height) { super(color); this.base = base; this.height = height } area() { return this.base * this.height / 2 } }
console.log(new Circle("red", 3).area(), new Rectangle("blue", 4, 5).area(), new Triangle("green", 4, 6).area())
