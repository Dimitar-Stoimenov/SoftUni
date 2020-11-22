function solve(array, rotations) {
    let newArray = array

    for (let i = 0; i < rotations; i++) {
        let lastPosition = newArray[0]

        for (let j = 0; j < newArray.length; j++) {
            if (j === newArray.length - 1) {
                newArray[j] = lastPosition  
            } else {
                newArray[j] = newArray[j + 1]
            }
        }
    }

    let output = ''

    for (let element of newArray) {
        output += element + ' '
    }

    console.log(output)
}