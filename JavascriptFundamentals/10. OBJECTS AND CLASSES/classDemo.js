class Cat {

    makeSound() {
        console.log(`${this.name} the cat says Meow!`);
    }

    // функция ^

    constructor(name, breed, hasFur = true) {
        this.name = name
        this.breed = breed
        this.hasFur = hasFur

        // this.makeSound = function() {
        //     console.log('Meow');            
        // }

        // може да дефинираме функцията и в конструктора ^
    }
}

let firstCat = new Cat('Gosho', 'Angora', false);
let secondCat = new Cat('Pesho', 'Persian');
let thirdCat = new Cat('Timmy', 'Siamese')

console.log(firstCat);
console.log(secondCat);
console.log(thirdCat);

firstCat.makeSound()
secondCat.makeSound()
thirdCat.makeSound()
