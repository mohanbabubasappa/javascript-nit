class Temperature {
    #celsius = 0
    get celsius() { return this.#celsius }
    set celsius(value) { if (value >= -273.15) this.#celsius = value }
    get fahrenheit() { return this.#celsius * 9 / 5 + 32 }
}
const temperature = new Temperature(); temperature.celsius = 25
console.log(temperature.celsius, temperature.fahrenheit)
