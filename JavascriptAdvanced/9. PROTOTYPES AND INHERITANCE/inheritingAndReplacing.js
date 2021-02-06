function result() {
    function Person(name, email) {
        this.name = name;
        this.email = email;

        this.toString = function () {
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;

        this.toString = function () {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${subject})`
        }
    }

    Teacher.prototype = Object.create(Person.prototype);

    function Student(name, email, course) {
        Person.call(this, name, email);
        this.course = course;

        this.toString = function () {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${course})`
        }
    }

    Student.prototype = Object.create(Person.prototype);

    return { Person, Teacher, Student }
}

let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
console.log(t.toString())
// expect(t.toString()).to.equal('Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)');