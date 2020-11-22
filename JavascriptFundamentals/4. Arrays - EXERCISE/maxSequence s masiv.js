function solve(input) {
    let currentArray = []
    let bestArray = []
    let lastElement

    for (let element of input) {

        if (element === lastElement) {
            currentArray.push(element)
        } else {
            currentArray = [element]
        }

        if (currentArray.length > bestArray.length) {
            bestArray = currentArray
        }

        lastElement = element
    }

    let output = ''

    for (let element of bestArray) {
        output += element + " "
    }

    console.log(output)
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])