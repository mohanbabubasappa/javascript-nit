class Person {
    constructor(name, age) { this.name = name; this.age = age }
    displayDetails() { console.log(this.name, this.age) }
}
[new Person("Mohan", 25), new Person("Asha", 22), new Person("Ravi", 30)].forEach(person => person.displayDetails())
