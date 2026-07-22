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
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

class Manager extends Employee {
  constructor(name, age, jobTitle, department) {
    super(name, age, jobTitle);
    this.department = department;
  }

  describeManagement() {
    console.log(`${this.name} manages the ${this.department} department.`);
  }
}

const manager = new Manager('Asha', 30, 'Engineering Manager', 'Product Development');
manager.greet();
manager.describeJob();
manager.describeManagement();
