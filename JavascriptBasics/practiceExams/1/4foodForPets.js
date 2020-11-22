function solve(input) {
    let days = +input[0]
    let totalFood = +input[1]
    let catEatenFood = 0
    let dogEatenFood = 0
    let day = 1
    let biscuits = 0
    let totalEaten = 0

    for (let index = 2; index < input.length; index++) {

        if (day > days) {
            break
        }

        let dogEat = +input[index++]
        let catEat = +input[index]
        let totalEatenDay = catEat + dogEat

        if (day % 3 === 0) {
            biscuits += totalEatenDay * 0.1
        }

        catEatenFood += catEat
        dogEatenFood += dogEat
        totalEaten += totalEatenDay
        day++
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${((totalEaten / totalFood) * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((dogEatenFood / totalEaten) * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${((catEatenFood / totalEaten) * 100).toFixed(2)}% eaten from the cat.`)
}

solve([
    '3', '1000',
    '300', '20',
    '100', '30',
    '110', '40'
])