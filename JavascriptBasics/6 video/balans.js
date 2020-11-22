function solve(input) {
    let total = 0
    let index = 0
    let command = input[index++]

    while (command !== "NoMoreMoney") {
        let currentAmount = Number(command)

        if (currentAmount < 0) {
            console.log("Invalid operation!")
            break
        } 

        total += currentAmount
        console.log(`Increase: ${currentAmount.toFixed(2)}`)
        
        command = input[index++]        
    }

    console.log(`Total: ${Number(total).toFixed(2)}`)
}

solve((["NoMoreMoney", "69.42", "-50", "NoMoreMoney", "25"]))