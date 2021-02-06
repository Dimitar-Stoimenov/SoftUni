const dog = {
    name: 'Sparky',
    printInfo: function () {
        console.log(`My name is ${this.name}.`);
    },
};

const myDog = Object.create(dog);
myDog.name = 'Max';
myDog.breed = 'shepherd';
myDog.printInfo(); // My name is Max.

dog.printInfo(); // My name is Sparky.