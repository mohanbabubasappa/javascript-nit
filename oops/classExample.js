class Person {
    name="mohan"
    age=25

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    console.log(`Happy birthday! ${this.name} is now ${this.age}.`);
  }
}

const person1 = new Person();
person1.greet();
person1.haveBirthday();