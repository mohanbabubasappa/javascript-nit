class Animal { makeSound() { console.log("Animal sound") } }
class Dog extends Animal { makeSound() { console.log("Woof") } }
class Cat extends Animal { makeSound() { console.log("Meow") } }
[new Dog(), new Cat()].forEach(animal => animal.makeSound())
