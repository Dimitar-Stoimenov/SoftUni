function solve(array) {
    let input = array[0]

    let initialHealth = 100
    let currentHealth = 100
    let coins = 0
    let index = 0
    let inputLine = input[index++]
    let roomCount = 0

    while (inputLine !== undefined) {
        roomCount++
        let word = ''

        while (inputLine !== ' ') {
            word += inputLine
            inputLine = input[index++]
        }

        if (word === 'potion') {
            inputLine = input[index++]
            let potionHeal = ''

            while (inputLine !== '|') {
                potionHeal += inputLine
                inputLine = input[index++]
                if (inputLine === undefined) {
                    break
                }
            }

            currentHealth += Number(potionHeal)

            if (currentHealth > initialHealth) {
                potionHeal -= (currentHealth - initialHealth)
                currentHealth = initialHealth
            }

            console.log(`You healed for ${Number(potionHeal)} hp.`)
            console.log(`Current health: ${currentHealth} hp.`)

            inputLine = input[index++]

        } else if (word === 'chest') {
            inputLine = input[index++]
            let coinsIncrease = ''

            while (inputLine !== '|') {
                coinsIncrease += inputLine
                inputLine = input[index++]
                if (inputLine === undefined) {
                    break
                }
            }

            coins += Number(coinsIncrease)

            console.log(`You found ${Number(coinsIncrease)} coins.`)

            inputLine = input[index++]
        } else {
            inputLine = input[index++]

            let damage = ''

            while (inputLine !== '|') {
                damage += inputLine
                inputLine = input[index++]
                if (inputLine === undefined) {
                    break
                }
            }

            currentHealth -= Number(damage)

            if (currentHealth > 0) {
                console.log(`You slayed ${word}.`)
                inputLine = input[index++]
            } else {
                console.log(`You died! Killed by ${word}.`)
                console.log(`Best room: ${roomCount}`)
                break
            }
        }
    }

    if (inputLine === undefined && currentHealth > 0) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${currentHealth}`)
    }
}

solve(
    ['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110|boss 60']
)