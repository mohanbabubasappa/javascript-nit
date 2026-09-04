class Calculator {
    add(a, b) { return a + b }
    subtract(a, b) { return a - b }
    multiply(a, b) { return a * b }
    divide(a, b) { return b === 0 ? "Cannot divide by zero" : a / b }
}
const calculator = new Calculator()
console.log(calculator.add(8, 2), calculator.subtract(8, 2), calculator.multiply(8, 2), calculator.divide(8, 2))
