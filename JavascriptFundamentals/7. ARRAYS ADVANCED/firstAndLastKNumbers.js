function solve(inputArray) {
    let k = inputArray[0]
    let newArray = inputArray.slice(1, inputArray.length)

    let firstSlice = newArray.slice(0, k)
    let lastSlice = newArray.slice(newArray.length - k)

    console.log(firstSlice.join(' '))
    console.log(lastSlice.join(' '))
}

solve([2, 7, 8, 9])