function solve(elementcount, k) {
    let sequence = [1]

    for (let i = 1; i < elementcount; i++) {
        let nextElement = 0
        let initialIndex = Math.max(0, (sequence.length - k))

        for (let j = initialIndex; j < sequence.length; j++) {
            nextElement += sequence[j]
        }

        sequence.push(nextElement)
    }

    console.log(sequence.join(' '));    
}

solve(6, 3)