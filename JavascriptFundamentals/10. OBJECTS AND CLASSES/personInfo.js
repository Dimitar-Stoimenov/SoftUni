function solution(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);

    }
}

function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve(
    "Peter",
    "Pan",
    "20"
)