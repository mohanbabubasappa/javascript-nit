class ValidatedEmployee {
    #salary
    constructor(name, salary) { this.name = name; this.salary = salary }
    get salary() { return this.#salary }
    set salary(value) { if (value >= 0) this.#salary = value; else throw new Error("Salary cannot be negative") }
}
const employee = new ValidatedEmployee("Mohan", 50000); console.log(employee.name, employee.salary)
