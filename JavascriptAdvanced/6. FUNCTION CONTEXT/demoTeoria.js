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
}

speak.call(person, 'sorry', 'ill be better next time!')
// първия аргумент е контекста - обекта person, и всяко следващо е всеки следващ аргумент от функцията - съответно message и endMessage

let speakWrapper = speak.bind(person)
speakWrapper('fk', 'not that great')
// създаваме нова функция - 'speakWrapper', която е с вграден контекст 'person'
// може да се вгради и някой от аргуументите, например:

let speakWrapper2 = speak.bind(person, 'fuckk')
speakWrapper2('not that good')