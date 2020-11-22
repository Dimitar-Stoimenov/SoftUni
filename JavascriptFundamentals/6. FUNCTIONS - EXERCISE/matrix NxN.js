function solution(number) {
    for (let i = 0; i < number; i++) {
        let rowOutput = ''
        
        for (let j = 0; j < number; j++) {
            if (j === number - 1) {
                rowOutput += number
            } else {
                rowOutput += number + ' '      
            }                  
        }

        console.log(rowOutput)
    }
}

solution(2)