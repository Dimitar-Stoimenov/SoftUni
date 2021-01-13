// first class functions
// high order functions
// pure and impure functions
// referentially transparent functions

// currying
let sum3 = (a, b, c) => a + b + c;
console.log(sum3(1, 2, 3)); // 6
// това, за да стане currying функция, трябва да стане съвкупност от три функции - по една за всеки параметър;
let sum3Curry = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
};
console.log(sum3Curry(3)(4)(5)); // 12
// за обяснение как работи:
let sum3b = sum3Curry(2);
let sum3c = sum3b(3);
let result = sum3c(4);
console.log(result); // 9
// тоест викат се унарни функции(такива с един вход) колкото пъти е необходимо.
// може функцията sum3Curry да се напише и опростено с arrow functions:
sum3Curry = (a) => (b) => (c) => {
    let result = a + b + c;
    return result
}
console.log(sum3Curry(4)(5)(3)); // 12
// или дори:
sum3Curry = (a) => (b) => (c) => a + b + c;
console.log(sum3Curry(5)(6)(9)); // 20

// partial application
let pow = (y, x) => x ** y; // тук нарочно подаваме наобратно, че все още не знам как се подава bind на по-късен аргумент...
console.log(pow(2, 4)); // 16
console.log(pow(2, 5)); // 25
console.log(pow(2, 6)); // 36
// тук явно искаме да използваме фунцията pow() само на втора степен... създаваме нова фунцкия чрез bind:
let sqr = pow.bind(null, 2); // не подаваме контекст, тъй като в случая не ни интересува
console.log(sqr(3)); //9
console.log(sqr(4)); //16
console.log(sqr(5)); //25

// immediately invoked function expressions IIFE
let value = function () {
    return 2 * 10 + 15 + 'Pesho'
}
console.log(value()) // 35Pesho
// обаче може и същото нещо, да се запише в променлива и да се извика веднага:
let value2 = function () {
    return 2 * 10 + 15 + 'Gosho'
}(); // самото изпълнение влиза в променливата 'value2'
console.log(value2) // 35Gosho
// работи и с arrow функции
let resultat = (() => 1 + 2)()
console.log(resultat) // 3

// Closure
//

// Errors
function somethingBroken() {
    throw new Error('sth is broken');
};
// somethingBroken(); - тук директно гърми - по-долу можем да се справим с това с try/catch

// Try and Catch
try {
    somethingBroken(); //ако има грешка от изпълнението в try, ще отиде и ще изпълни catch
} catch (error) {
    console.log('something went wrong, we are sorry ;(');
} finally { // finally се изпълнява винаги - независимо дали е имало error по-горе
    console.log('moving on!!!');
}