const productName = "Notebook"
const price = 120
const quantity = 3
const discount = 10
const subtotal = price * quantity
const finalPrice = subtotal - subtotal * discount / 100
console.log(productName, "Total:", finalPrice)
