class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

const genericAnimal = new Animal();
genericAnimal.speak();

const dog = new Dog();
dog.speak();

const cat = new Cat();
cat.speak();
