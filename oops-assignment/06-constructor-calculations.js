class Employee {
    constructor(name, role, monthlySalary, months) { Object.assign(this, { name, role, monthlySalary, months }) }
    totalSalary() { return this.monthlySalary * this.months }
}
const employee = new Employee("Mohan", "Developer", 50000, 12)
console.log(employee.name, employee.totalSalary())
