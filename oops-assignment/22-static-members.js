class School {
    static schoolName = "Bright School"
    constructor(studentName) { this.studentName = studentName }
}
const student = new School("Mohan")
console.log(School.schoolName, student.studentName)
