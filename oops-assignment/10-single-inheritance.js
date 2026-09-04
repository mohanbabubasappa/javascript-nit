class Vehicle {
    constructor(brand, speed) { this.brand = brand; this.speed = speed }
    move() { console.log(`${this.brand} moves at ${this.speed} km/h`) }
}
class Car extends Vehicle {
    constructor(brand, speed, doors) { super(brand, speed); this.doors = doors }
    drive() { console.log(`Car with ${this.doors} doors is driving`) }
}
const car = new Car("Toyota", 120, 4); car.move(); car.drive()
