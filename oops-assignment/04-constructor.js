class Student {
    constructor(name, rollNumber, course, marks) { Object.assign(this, { name, rollNumber, course, marks }) }
    display() { console.log(this) }
}
[new Student("Asha", 1, "JS", 85), new Student("Bala", 2, "JS", 72), new Student("Chitra", 3, "JS", 91)].forEach(student => student.display())
