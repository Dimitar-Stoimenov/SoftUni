function solve(input) {
    let heroesCount = Number(input.shift())
    let heroes = {}

    for (let index = 0; index < heroesCount; index++) {
        let [name, HP, MP] = input.shift().split(' ')
        heroes[name] = { HP: Number(HP), MP: Number(MP) }
    }

    for (let line of input) {
        if (line === 'End') {
            break
        }

        let [command, heroName, firstArg, secondArg] = line.split(' - ')

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(firstArg)
                let spellName = secondArg

                if (heroes[heroName].MP >= mpNeeded) {
                    heroes[heroName].MP -= mpNeeded
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                }
                break;

            case 'TakeDamage':
                let damage = Number(firstArg)
                let attacker = secondArg
                heroes[heroName].HP -= damage

                if (heroes[heroName].HP > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`)
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`)
                    delete heroes[heroName]
                }
                break;

            case 'Recharge':
                let amount = Number(firstArg)
                heroes[heroName].MP += amount

                if (heroes[heroName].MP > 200) {
                    amount -= (heroes[heroName].MP - 200)
                    heroes[heroName].MP = 200
                }

                console.log(`${heroName} recharged for ${amount} MP!`)
                break;

            case 'Heal':
                let healAmount = Number(firstArg)
                heroes[heroName].HP += healAmount

                if (heroes[heroName].HP > 100) {
                    healAmount -= (heroes[heroName].HP - 100)
                    heroes[heroName].HP = 100
                }

                console.log(`${heroName} healed for ${healAmount} HP!`)
                break;
        }

    }

    let heroesArr = Object.entries(heroes).sort((a, b) => {
        if (a[1].HP === b[1].HP) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1].HP - a[1].HP
        }
    })

    for (let heroInfo of heroesArr) {
        console.log(`${heroInfo[0]}`)
        console.log(`  HP: ${heroInfo[1].HP}`)
        console.log(`  MP: ${heroInfo[1].MP}`)
    }
}

solve(
    [
        '4',
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'
    ]
)