class Vehicle { constructor(name) { this.name = name } }
class Bike extends Vehicle { calculateFare(days) { return days * 100 } }
class Bus extends Vehicle { calculateFare(days) { return days * 500 } }
class Truck extends Vehicle { calculateFare(days) { return days * 800 } }
for (const vehicle of [new Bike("Bike"), new Bus("Bus"), new Truck("Truck")]) console.log(vehicle.name, vehicle.calculateFare(2))
