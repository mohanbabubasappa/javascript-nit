const usernameCorrect = true
const passwordCorrect = true
const accountActive = false
console.log("Can login:", usernameCorrect && passwordCorrect && !accountActive === false)
console.log("Needs verification:", usernameCorrect && passwordCorrect || accountActive)
console.log("Invalid username:", !usernameCorrect)
