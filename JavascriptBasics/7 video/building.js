function solve(input) {
    let floors = +input[0]
    let rooms = +input[1]    

    for (let i = floors; i >= 1; i--) {
        let output = ''
        let roomType = ''

        if (i === floors) {
            roomType = 'L'
        } else if (i % 2 === 0) {
            roomType = 'O'
        } else {
            roomType = 'A'
        }

        for (let j = 0; j < rooms; j++) {
            output += roomType + i + j + " "
            
        }

        console.log(output)        
    }
}

solve(['5', '5'])