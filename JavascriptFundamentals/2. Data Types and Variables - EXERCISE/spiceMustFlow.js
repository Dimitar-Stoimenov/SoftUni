function solve(startingYield) {
    let day = 0
    let spice = 0
 
    while (startingYield >= 100) {
        day++
        spice += startingYield  
 
        if (spice >= 26) {
            spice -= 26
        } else {
            spice = 0
        }
 
        startingYield -= 10     
    }
 
    if (startingYield < 100){
        if (spice >= 26) {
            spice -= 26
        } else {
            spice = 0
        }
    }
 
    console.log(day)
    console.log(spice)
}

solve(115)