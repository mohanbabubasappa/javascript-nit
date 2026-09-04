function summarize(numbers) {
	const total = numbers.reduce((sum, number) => sum + number, 0)
	return { total, average: total / numbers.length }
}
console.log(summarize([10, 20, 30, 40]))
