class User { constructor(name) { this.name = name } getName() { return this.name } }
class Staff extends User { constructor(name, department) { super(name); this.department = department } }
class Manager extends Staff { constructor(name, department, teamSize) { super(name, department); this.teamSize = teamSize } }
console.log(new Manager("Mohan", "Engineering", 8))
