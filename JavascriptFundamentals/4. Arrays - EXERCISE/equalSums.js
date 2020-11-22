function solve(input) {
    let isEqual = false
    
        for (let i = 0; i < input.length; i++) {
        let sumLeft = 0
        let sumRight = 0
        
    
            for (let j = i - 1; j >= 0; j--) {
                sumLeft += +input[j]
            }
            
            for (let j = i + 1; j < input.length; j++) {
                sumRight += +input[j]
            }
    
            if (sumLeft === sumRight) {
                isEqual = true
                console.log(i)
                break
            }
        }
        
        if (!isEqual) {
            console.log('no')
        }
    }