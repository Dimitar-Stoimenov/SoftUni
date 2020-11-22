function solve(input) {
    let numbersArray = input.split(' ').map(Number)
    let sum = 0

    numbersArray.forEach(x => {
        sum += x
    })

    let average = sum / numbersArray.length

    numbersArray.sort((a, b) => b - a)

    let topArray = []

    for (let i = 0; i < 5; i++) {
        if (numbersArray[0] <= average) {
            console.log(`No`)
            break
        } else if (numbersArray[i] > average) {
            topArray.push(numbersArray[i])
        } else {
            break
        }
    }

    if (topArray.length > 0) {
        console.log(topArray.join(' '))
    }
}

solve(
    '10 20 30 40 50'
)