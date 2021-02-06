function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ТОВА Е ГРЕШНО ! ЗАЩОТО СЕ ПРОПЪРТИТАТА СЕ КОПИРАТ НА ВСЯКА ЕДНА ИНСТАНЦИЯ И СЕ ЗАТОРМОЗЯВА ПАМЕТТА. ТРЯБВА ДА СЕ ВКАРА ПРОТОТИП
    // this.speak = function () {
    //     console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
    // }
    // ТОВА Е ГРЕШНО ! ЗАЩОТО СЕ ПРОПЪРТИТАТА СЕ КОПИРАТ НА ВСЯКА ЕДНА ИНСТАНЦИЯ И СЕ ЗАТОРМОЗЯВА ПАМЕТТА. ТРЯБВА ДА СЕ ВКАРА ПРОТОТИП
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // правилният начин е долу!
}

Person.prototype.speak = function () {
    console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
}
//ТОВА Е ПРАВИЛНИЯТ НАЧИН!

function Student(firstName, lastName, course) {
    Person.call(this, firstName, lastName);

    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.getGrades = function () {
    console.log(`My grade is 6 in my course: ${this.course}`);
}

let person = new Person('Pesho', 'Georgiev');
person.speak();

let student = new Student('Stamat', 'Metodiev', 'JS Advanced')
console.log(student);
student.speak();
student.getGrades();