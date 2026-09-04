const birthDate = new Date("2000-01-15")
const today = new Date()
let age = today.getFullYear() - birthDate.getFullYear()
if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) age--
const futureDate = new Date(today)
futureDate.setDate(today.getDate() + 30)
console.log("Approximate age:", age)
console.log("After 30 days:", futureDate.toDateString())
