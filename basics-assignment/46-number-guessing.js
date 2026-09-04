const target = 7
const guesses = [3, 9, 7]
for (const guess of guesses) {
	if (guess === target) {
		console.log("Correct guess:", guess)
		break
	}
	console.log(guess < target ? "Too low" : "Too high")
}
