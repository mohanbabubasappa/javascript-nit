const students = [
	{ name: "Asha", marks: [80, 76, 92] }, { name: "Bala", marks: [65, 70, 60] },
	{ name: "Chitra", marks: [95, 88, 90] }, { name: "Dev", marks: [45, 55, 50] },
	{ name: "Esha", marks: [72, 81, 78] }
]
const report = student => {
	const total = student.marks.reduce((sum, mark) => sum + mark, 0)
	const average = total / student.marks.length
	const grade = average >= 90 ? "A" : average >= 75 ? "B" : average >= 60 ? "C" : "D"
	return { ...student, total, average, grade, passed: average >= 40 }
}
const reports = students.map(report)
reports.forEach(student => console.log(student.name, student.total, student.average, student.grade, student.passed))
const highest = reports.reduce((best, student) => student.total > best.total ? student : best)
const classAverage = reports.reduce((sum, student) => sum + student.average, 0) / reports.length
console.log("Highest:", highest.name, "Class average:", classAverage)
