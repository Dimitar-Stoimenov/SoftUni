function solve(firstArray, secondArray) {
    let thirdArray = []
    let output = ''

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            thirdArray[i] = Number(firstArray[i]) + Number(secondArray[i])
        } else {
            thirdArray[i] = firstArray[i] + secondArray[i]
        }
    }

    for (let i = 0; i < thirdArray.length; i++) {
        if (i === thirdArray.length - 1) {
            output += thirdArray[i]
        } else {
            output += thirdArray[i] + ' ' + '-' + ' '
        }
    }

    console.log(output)
}