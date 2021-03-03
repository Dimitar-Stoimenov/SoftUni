const { sum } = require('./myModule.js');
console.log(sum(4, 4));

// мога да го преименувам със {sum: newSum}, ако искам:
const { product: multiply } = require('./myModule.js');
console.log(multiply(3, 3));

// може и просто да импортнем обекта от другия файл:
const myModule = require('./myModule.js');
console.log(myModule.sum(6, 6));
console.log(myModule.product(6, 6));