function solve(inputArray) {
    let k = inputArray.shift()

    let firstElements = inputArray.slice(0, k)
    let lastElements = inputArray.slice(inputArray.length - k)

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));    
}

solve([2, 7, 8, 9])