class Product {
    constructor(name, price, quantity = 1) { Object.assign(this, { name, price, quantity }) }
}
console.log(new Product("Book", 200), new Product("Pen", 20, 3))
