function solve(input) {
    let pattern = /(\||#)(?<foodName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>10000|\d{1,4})\1/g

    let validFood = input[0].matchAll(pattern)
    let foodArr = []
    let totalCalories = 0

    for (let element of validFood) {
        let foodName = element.groups.foodName
        let expDate = element.groups.date
        let calories = Number(element.groups.calories)

        let array = [foodName, expDate, calories]
        foodArr.push(array)
        totalCalories += calories
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`)

    if (foodArr.length > 0) {
        for (let iterator of foodArr) {
            let itemName = iterator[0]
            let expirationDate = iterator[1]
            let calories = iterator[2]
    
            console.log(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`)
        }
    }
}

solve(
    [
        'Hello|#Invalid food#19/03/20#450|$5*(@'
    ]
)