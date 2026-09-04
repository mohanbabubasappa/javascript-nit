class Calculator {
    add(...numbers) { return numbers.reduce((total, number) => total + number, 0) }
}
const calculator = new Calculator(); console.log(calculator.add(2, 3), calculator.add(2, 3, 4, 5))
