class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
  }
}

const car1 = new Car('Toyota', 'Corolla', 2024);
car1.displayInfo();
