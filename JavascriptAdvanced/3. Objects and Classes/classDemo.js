class Person {
    #currentAge = 0; // сетвам дефолтна стойност, ако аргументът не влиза в стойностите подадени на сетъра по-долу


    static type = 'Homo Sapiens'

    constructor(firstName, lastName, age, hairColor = 'brown') {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.hairColor = hairColor
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    get age() {
        return this.#currentAge
    }

    set age(value) {
        if ((value < 0 || value > 120)) {
            return
        } else {
            this.#currentAge = value;
        }
    }

    static talk() {
        console.log(`Blablabla`);
    }

    greet() {
        console.log(`Hello, my name is ${this.firstName} + ${this.lastName}`);
    }
}

let person1 = new Person('Pesho', 'Petrov', 11);
let person2 = new Person('Gosho', 'Ivanov', 22);

console.log(person1.age);
console.log(person1.fullName);
console.log(person1);

Person.talk()
console.log(Person.type)