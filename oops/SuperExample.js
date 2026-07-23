// Parent class (Vehicle)
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`Vehicle: ${this.make} ${this.model}`);
  }
}

// Child class (Car) with constructor overloading using default parameters
class Car extends Vehicle {
  constructor(make, model, year = 2024, color = 'Black') {
    // super() calls the parent constructor
    super(make, model);
    this.year = year;
    this.color = color;
  }

  displayInfo() {
    console.log(`Car: ${this.year} ${this.make} ${this.model} (${this.color})`);
  }
}

// Car examples with default parameters (constructor overloading)
const car1 = new Car('Toyota', 'Corolla'); // Using defaults: year=2024, color='Black'
car1.displayInfo();

const car2 = new Car('Honda', 'Civic', 2023); // Providing year, color uses default
car2.displayInfo();

const car3 = new Car('BMW', 'X5', 2025, 'Red'); // All parameters provided
car3.displayInfo();