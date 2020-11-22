// JSON.stringify() конвертира обект в JSON формат

let person = {};
person.name = 'Pesho';
person.age = 23;
person.isChild = false;

let personString = JSON.stringify(person);

console.log(personString);


// JSON.parse() обръща JSON string в обект

let originalPerson = JSON.parse(personString);

console.log(originalPerson);