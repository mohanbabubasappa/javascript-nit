class LivingThing { breathe() { console.log("Breathing") } }
class Animal extends LivingThing { move() { console.log("Moving") } }
class Dog extends Animal { bark() { console.log("Barking") } }
const dog = new Dog(); dog.breathe(); dog.move(); dog.bark()
