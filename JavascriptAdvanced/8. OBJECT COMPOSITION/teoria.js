// destructuring

let person = {
    name: 'Pesho',
    age: 25,
    sex: 'male',
    school: {
        name: '51SOU',
        maxClass: 12,
    }
}

let { name: firstName, age: personAge } = person

console.log(firstName, personAge);

// можем деструктурираме и по-нестнат обект6
let { school: { name: schoolName } } = person
console.log(schoolName);

schoolName = 'x' // не променяме обекта по референция, а само променливата
console.log(schoolName);
console.log(person.school.name);

// рест оператор
let { age, ...personWithoutAge} = person // за personWithoutAge ще извади нов обект, със същите данни, но няма да включва age
console.log(personWithoutAge);