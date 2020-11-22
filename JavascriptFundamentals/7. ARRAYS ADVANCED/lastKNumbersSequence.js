function solve(n, k) {
    let sequenceLength = n

    let array = [1]

    for (let i = 1; i < sequenceLength; i++) {
        let elementSum = 0

        for (let j = k; j > 0; j--) {
            if (isNaN(array[i - j])) {
                elementSum += 0
            } else {
                elementSum += array[i - j]
            }
        }
        
        array.push(elementSum)
    }

    console.log(array.join(' '))
}

solve(8, 2)