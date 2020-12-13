let person = {
    firstName: 'Pesho',
    lastName: 'Petrov',
    age: 30,
    course: {
        name: 'Math',
        teacher: 'Stamat Georgiev'
    }
}

// Object.keys(person).forEach(key => {
//     console.log(`${key} --> ${person[key]}`);
// })

// let json = JSON.stringify(person)
// console.log(json);

let person2 = {...person}
person2.firstName = 'Gosho'

console.log(person);
console.log(person2);