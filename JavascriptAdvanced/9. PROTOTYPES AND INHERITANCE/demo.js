class Person {
    constructor(name, canFly = false) {
        this.name = name;
        this.canFly = canFly;
    }

    speak() {
        console.log(`Hello! My name is ${this.name} and I ${this.canFly ? 'can' : 'can\'t'} fly.`);
    }
}

class Programmer extends Person {
    constructor(name, canFly = true) {
        super(name, canFly);
    }

    coding() {
        console.log(`Hello World! My name is ${this.name}, I'm a programmer and I ${this.canFly ? 'can' : 'can\'t'} fly.`);
    }
}

let firstPerson = new Person('Pesho');
firstPerson.speak();

let secondPerson = new Programmer('Gosho');
secondPerson.coding();
secondPerson.speak();