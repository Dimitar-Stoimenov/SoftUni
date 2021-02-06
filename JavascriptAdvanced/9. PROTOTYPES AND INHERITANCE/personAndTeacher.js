function result() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);

    return { Person, Teacher }
}

let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('mesho', 'mesho@pesho.com', 'Meshematika');
console.log(t.name);
console.log(t.email);
console.log(t.subject);