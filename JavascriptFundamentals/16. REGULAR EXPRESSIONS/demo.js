// RegEx функции

// exec()
// test()
// тези двете се слага RegExШаблон.метод(текст)

// match()
// matchAll()
// search()
// replace()
// replaceAll()
// split()
// тези се викат с текст.метод(RegExШаблон)

// - g отзад е флага за global 

let pattern = new RegExp('[A-Z][a-z]+', 'g');

let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;

let text = 'Lorem Ipsum is simply dummy text of print.';

let matches = text.matchAll(patternLiteral);

for (const match of matches) {
   console.log(match[0]); 
}