class Calculator {
  calculate(...args) {
    if (args.length === 2) {
      const [a, b] = args;
      return a + b;
    }

    if (args.length === 3) {
      const [a, b, cOrOp] = args;
      if (typeof cOrOp === 'string') {
        const operation = cOrOp;
        switch (operation) {
          case 'add':
            return a + b;
          case 'subtract':
            return a - b;
          case 'multiply':
            return a * b;
          case 'divide':
            return b !== 0 ? a / b : 'Cannot divide by zero';
          default:
            return 'Unknown operation';
        }
      }
      return a + b + cOrOp;
    }

    if (args.length === 4) {
      const [a, b, c, operation] = args;
      switch (operation) {
        case 'sum':
          return a + b + c;
        case 'product':
          return a * b * c;
        default:
          return 'Unknown operation';
      }
    }

    return 'Invalid number of arguments';
  }
}

const calc = new Calculator();

console.log(calc.calculate(2, 3)); // 5
console.log(calc.calculate(2, 3, 'multiply')); // 6
console.log(calc.calculate(1, 2, 3)); // 6
console.log(calc.calculate(1, 2, 3, 'product')); // 6
