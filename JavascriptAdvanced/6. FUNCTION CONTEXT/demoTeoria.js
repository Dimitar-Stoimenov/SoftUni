// call(), apply(), bind();
// call и apply извикват функция с друг контекст;
// разликата е, че call след контекста приема списък от аргументи, разделени със запетайка, а aplly вика масив;
// bind създава нова функция с директно вграден контекс

function speak(message, endMessage) {
    this.grades.forEach(grade => {
        console.log(`${this.name}:${message} - ${grade}`);
    })
    console.log(endMessage)
}

let person = {
    name: 'Pesho',
    grades: [4, 2, 3, 4, 5],
    age: 20,
}

speak.call(person, 'sorry', 'ill be better next time!')
// първия аргумент е контекста - обекта person, и всяко следващо е всеки следващ аргумент от функцията - съответно message и endMessage

let speakWrapper = speak.bind(person)
speakWrapper('fk', 'not that great')
// създаваме нова функция - 'speakWrapper', която е с вграден контекст 'person'
// може да се вгради и някой от аргуументите, например:

let speakWrapper2 = speak.bind(person, 'fuckk')
speakWrapper2('not that good')

// Object.defineProperty()
// всеки обект има 4 internal properties:
// enumerable, configurable, writable, value

//с enumerable прави определен key от обект да не може да се итерира
Object.defineProperty(person, 'age', {enumerable: false});

for (const key in person) {
    console.log(key)
    console.log(person.age)
}

//с командатa writable: false - прави да не може да се променят останалите properties
Object.defineProperty(person, 'age', {enumerable: false, writable: false});

for (const key in person) {
    console.log(key)
    console.log(person.age)
}

// Object Freeze and Object Seal
// Object.freeze(cat) - не може да се променя нищо от обекта cat, нито да се добавят нови пропъртита
// Object.seal(cat) - може да се променят съществуващите пропъртита, но не могат да се добавят нови или да се изтрият - пример:

let cat = {name: 'Tom', age: 5}
Object.seal(cat)
cat.age = 10
delete cat.age // тук не прави нищо, заради seal-a
console.log(cat) // връща { name: 'Tom", age: 10 }