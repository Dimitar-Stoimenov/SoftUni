function solve(input) {

    let outputArr = []

    for (const element of input) {
        if(!outputArr.includes(element)) {
            outputArr.push(element)
        }
    }

    console.log(outputArr.join(' '))
        
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])