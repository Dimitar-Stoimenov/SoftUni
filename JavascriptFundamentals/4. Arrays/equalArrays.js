function solve(firstArr, secondArr) {
    let areIdentical = true
    let nonIdenticalIndex = 0
    let sum = 0
  
    for (let i = 0; i < firstArr.length; i++) {
        let firstElement = Number(firstArr[i])
        let secondElement = Number(secondArr[i])

        if (firstElement !== secondElement) {
            areIdentical = false
            nonIdenticalIndex = i
            break
        } else {
            sum += firstElement
        }
    }

    if (areIdentical) {        
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${nonIdenticalIndex} index`)
    }
}