let person = {};
person.name = 'Pesho';
person.age = 23;
person.isChild = false;

// for-in цикъл върти през key-овете на обекта

for (const prop in person) {
    console.log(prop);
}

// Оbject.keys(), Object.values(), Object.entries() - методи, които връщат масиви - като аргумент() се посочва обекта

console.log(Object.keys(person));       //[ 'name', 'age', 'isChild' ]
console.log(Object.values(person));     //[ 'Pesho', 23, false ]
console.log(Object.entries(person));    //[ [ 'name', 'Pesho' ], [ 'age', 23 ], [ 'isChild', false ] ]

// клониране на обект

let clonedPerson = { ...person };
clonedPerson.name = 'Gosho';

console.log(person);
console.log(clonedPerson);