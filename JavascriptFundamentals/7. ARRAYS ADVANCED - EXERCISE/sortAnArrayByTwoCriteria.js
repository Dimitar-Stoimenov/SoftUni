function solve(inputArray) {

    function compareByTwoCriteria(a, b) {
        if (a.length > b.length) {
            return 1
        } else if (b.length > a.length) {
            return -1
        } else {

            if (a.toLowerCase() > b.toLowerCase()) {
                return 1
            } else if (b.toLowerCase() > a.toLowerCase()) {
                return -1
            } else {
                return 0
            }
            // тук може и просто return a.localeCompare(b)
            
        }
    }

    inputArray.sort(compareByTwoCriteria)
    
    console.log(inputArray.join('\n'))    
}

solve(["alpha", "beta", "gamma"])