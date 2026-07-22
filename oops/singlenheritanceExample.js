class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle, salary) {
    super(name, age);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  describe() {
    console.log(`${this.name} is a ${this.jobTitle} earning $${this.salary} per year.`);
  }

  raiseSalary(amount) {
    this.salary += amount;
    console.log(`${this.name}'s salary increased to $${this.salary}.`);
  }
}

const person = new Person('Mohan', 25);
person.greet();

const employee = new Employee('Asha', 30, 'Software Engineer', 85000);
employee.greet();
employee.describe();
employee.raiseSalary(5000);
