class ShapeCalculator {
    area(first, second, type = "rectangle") {
        if (type === "circle") return Math.PI * first ** 2
        return second === undefined ? first ** 2 : first * second
    }
}
const calculator = new ShapeCalculator(); console.log(calculator.area(4), calculator.area(4, 5), calculator.area(3, undefined, "circle"))
