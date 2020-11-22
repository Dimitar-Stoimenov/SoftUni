function solve(input) {

    let outputArr = getUniqueElements(input)
    
    console.log(outputArr.join(' '))

    function getUniqueElements(input) {

        let output = []

        for (let element of input) {           
            if(!output.includes(element)) {
                output.push(element)
            }
        }

        return output
    }        
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])