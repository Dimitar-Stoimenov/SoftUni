let studentProto = {
    name: 'Petkancho',
    hasPen: true,

    write: function () {
        console.log(`My name is ${this.name}`);
    },
}

let newStudent1 = Object.assign({}, studentProto); // клонира - няма прототип. Освен това второто записва върху първото
let newStudent2 = Object.create(studentProto); // създава празен обект, с подадения прототип
// Object.setPrototypeOf(newStudent3, studentProto); - това закача прототипа studentProto на обекта newStudent3

console.log(newStudent1);
console.log(newStudent2);