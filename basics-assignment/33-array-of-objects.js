const students = [
	{ name: "Asha", marks: 82 }, { name: "Bala", marks: 68 },
	{ name: "Chitra", marks: 91 }, { name: "Dev", marks: 74 }, { name: "Esha", marks: 88 }
]
console.log(students.map(student => student.name))
console.log(students.filter(student => student.marks > 75))
