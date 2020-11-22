function solve(input) {
    let newArray = []
    let sumOriginal = 0
    let sumNew = 0

    for (let element of input) {
        sumOriginal += Number(element)
    }

    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) % 2 === 0) {
            newArray[i] = input[i] + i
        } else {
            newArray[i] = input[i] - i
        }
    }

    for (let element of newArray) {
        sumNew += Number(element)
    }
 
    console.log(newArray)
    console.log(sumOriginal)
    console.log(sumNew)    
}