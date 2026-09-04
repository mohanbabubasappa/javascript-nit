const cart = []
function addProduct(name, price, quantity) { cart.push({ name, price, quantity }) }
function removeProduct(name) {
	const index = cart.findIndex(product => product.name === name)
	if (index >= 0) cart.splice(index, 1)
}
function total(discount = 0) {
	const subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
	return subtotal - subtotal * discount / 100
}
addProduct("Book", 200, 2)
addProduct("Pen", 20, 3)
removeProduct("Pen")
console.log(cart, "Final total:", total(10))
