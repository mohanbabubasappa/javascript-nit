class Product { constructor(name, price) { this.name = name; this.price = price } shippingCost() { return 0 } }
class DigitalProduct extends Product { shippingCost() { return 0 } }
class PhysicalProduct extends Product { shippingCost() { return 50 } }
class ShoppingCart {
    #products = []
    addProduct(product) { this.#products.push(product) }
    removeProduct(name) { this.#products = this.#products.filter(product => product.name !== name) }
    total() { return this.#products.reduce((sum, product) => sum + product.price + product.shippingCost(), 0) }
    bill() { console.log(this.#products, "Total:", this.total()) }
}
const cart = new ShoppingCart(); cart.addProduct(new DigitalProduct("Course", 1000)); cart.addProduct(new PhysicalProduct("Book", 300)); cart.bill()
