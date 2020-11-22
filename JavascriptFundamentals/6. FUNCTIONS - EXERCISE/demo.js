// 1. Подаваме 3 числа от 0 до 10;
// 2. Качваме първото на степен от третото;
// 3. Умножаваме всички двойки;
// 4. Събираме всички двойки;
// 5. Вадим числото получено от стъпка 2.
// 6. Делим сумата на първото подадено число.

function power(a, b) {
    let result = Math.pow(a, b)
    return result
}

function multiplying(a, b, c) {
    let first = a * b
    let second = b * c
    let third = a * c
    let result = [first, second, third]
    return result
}

function adding(a, b, c) {
    let multiplyArray = multiplying(a, b, c)
    let first = multiplyArray[0]
    let second = multiplyArray[1]
    let third = multiplyArray[2]
    let result = first + second + third
    return result
}

function subtracting(a, b, c) {
    let result = adding(a, b, c) - power(a, c)
    return result
}

function dividing(a, b, c) {
    let result = subtracting(a, b, c) / a
    console.log(result)
}

dividing(2, 3, 4)

