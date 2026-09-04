class Person { printDetails() { console.log("Person details") } }
class Student extends Person { printDetails() { console.log("Student details") } }
class Teacher extends Person { printDetails() { console.log("Teacher details") } }
class Manager extends Person { printDetails() { console.log("Manager details") } }
[new Student(), new Teacher(), new Manager()].forEach(person => person.printDetails())
