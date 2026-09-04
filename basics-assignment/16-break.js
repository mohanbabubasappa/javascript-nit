for (let number = 1; number <= 100; number++) {
	if (number % 7 === 0 && number % 11 === 0) {
		console.log("First match:", number)
		break
	}
}
