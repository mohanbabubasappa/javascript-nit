class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}.`);
  }
}

const student = new Student('Riya', 20, 'Mathematics');
student.greet();
student.study();

const teacher = new Teacher('Arun', 40, 'Physics');
teacher.greet();
teacher.teach();
