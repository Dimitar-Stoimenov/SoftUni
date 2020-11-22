function smallestNumber(a, b, c) {
    let smallestNum = 0
    if (a < b) {
        if (a < c) {
            smallestNum = a
        } else {
            smallestNum = c
        }
    } else {
        if (b < c) {
            smallestNum = b
        } else {
            smallestNum = c
        }
    }

    console.log(smallestNum)
}

smallestNumber(4, 4, 3)