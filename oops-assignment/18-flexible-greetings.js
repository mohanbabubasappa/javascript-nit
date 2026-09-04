class Greeter {
    greet(name, time) {
        if (!name) return "Hello"
        if (!time) return `Hello, ${name}`
        return `Good ${time}, ${name}`
    }
}
const greeter = new Greeter(); console.log(greeter.greet(), greeter.greet("Mohan"), greeter.greet("Mohan", "morning"))
