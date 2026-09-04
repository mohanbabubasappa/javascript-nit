class Vehicle {
    #available = true
    constructor(name, dailyRate) { this.name = name; this.dailyRate = dailyRate }
    rent() { if (!this.#available) return false; this.#available = false; return true }
    returnVehicle() { this.#available = true }
    isAvailable() { return this.#available }
    calculateRentalCost(days) { return this.dailyRate * days }
}
class Car extends Vehicle { calculateRentalCost(days) { return super.calculateRentalCost(days) + 500 } }
class Bike extends Vehicle { calculateRentalCost(days) { return super.calculateRentalCost(days) } }
class Truck extends Vehicle { calculateRentalCost(days) { return super.calculateRentalCost(days) + 1000 } }
class RentalAgency {
    constructor() { this.vehicles = [] }
    add(vehicle) { this.vehicles.push(vehicle) }
    find(name) { return this.vehicles.find(vehicle => vehicle.name === name) }
    rent(name, days) { const vehicle = this.find(name); if (vehicle && vehicle.rent()) console.log(name, vehicle.calculateRentalCost(days)); else console.log("Vehicle unavailable") }
}
const agency = new RentalAgency(); agency.add(new Car("Sedan", 1500)); agency.add(new Bike("Rider", 500)); agency.add(new Truck("Hauler", 2500))
agency.rent("Sedan", 3); agency.rent("Sedan", 2)
