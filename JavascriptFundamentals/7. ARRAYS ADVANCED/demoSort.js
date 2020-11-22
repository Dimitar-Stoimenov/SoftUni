let numbers = [9, 6, 2, 101, 52, 32]

function compareFunction(a, b) {
    return a - b
}

    // ТУК МОЖЕ ДА БЪДЕ ARROW FUNCTION (а, b) => a - b

    // или

    // if (a > b) {
    //     return 1
    // } else if (b > a) {
    //     return -1
    // } else {
    //     return 0
    // }

console.log(numbers)

numbers.sort(compareFunction)

console.log(numbers)