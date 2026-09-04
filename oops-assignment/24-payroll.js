class Employee { constructor(name) { this.name = name } calculateSalary() { return 0 } }
class FullTimeEmployee extends Employee { constructor(name, salary) { super(name); this.salary = salary } calculateSalary() { return this.salary } }
class PartTimeEmployee extends Employee { constructor(name, rate, hours) { super(name); this.rate = rate; this.hours = hours } calculateSalary() { return this.rate * this.hours } }
const employees = [new FullTimeEmployee("Asha", 50000), new PartTimeEmployee("Bala", 500, 80)]
employees.forEach(employee => console.log(employee.name, employee.calculateSalary()))
console.log("Payroll:", employees.reduce((sum, employee) => sum + employee.calculateSalary(), 0))
