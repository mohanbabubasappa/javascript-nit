class Person {
    constructor(name) { this.name = name }
    introduce() { console.log(`My name is ${this.name}`) }
}
class Employee extends Person {
    constructor(name, title) { super(name); this.title = title }
    introduce() { super.introduce(); console.log(`I work as a ${this.title}`) }
}
new Employee("Mohan", "Developer").introduce()
