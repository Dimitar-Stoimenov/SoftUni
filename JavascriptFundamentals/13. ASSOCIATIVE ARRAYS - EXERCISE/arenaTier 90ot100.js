function solve(input) {
    let gladiators = {}

    for (const line of input) {
        if (line === "Ave Cesar") {
            break
        } else if (line.includes('vs')) {
            let [gladiator1, gladiator2] = line.split(' vs ')

            if (gladiators[gladiator1] && gladiators[gladiator2]) {
                let x = Object.keys(gladiators[gladiator1])
                let y = Object.keys(gladiators[gladiator2])
                let z = new Map()

                x.forEach(key => z.set(key))
                y.forEach(key => z.set(key))

                if (z.length !== (x.length + y.length)) {
                    let sum1 = 0
                    Object.values(gladiators[gladiator1]).forEach(score => sum1 += score)
                    let sum2 = 0
                    Object.values(gladiators[gladiator2]).forEach(score => sum2 += score)

                    if (sum1 > sum2) {
                        delete gladiators[gladiator2]
                    } else if (sum2 > sum1) {
                        delete gladiators[gladiator1]
                    }
                }
            }

        } else {
            let [name, technique, skill] = line.split(' -> ')

            if (!gladiators[name]) {
                gladiators[name] = {}
                gladiators[name][technique] = Number(skill)
            } else if (!gladiators[name][technique]) {
                gladiators[name][technique] = Number(skill)
            } else {
                if (gladiators[name][technique] < Number(skill)) {
                    gladiators[name][technique] = Number(skill)
                }
            }
        }
    }

    createTotalSkillPointsObj(gladiators)

    let x = Object.entries(gladiators).sort((a, b) => {
        if ((b[1].sum - a[1].sum) !== 0) {
            return b[1].sum - a[1].sum
        } else {
            return a[0].localeCompare[b[0]]
        }
    }
    )

    x.forEach(gladiator => {
        let [name, object] = gladiator

        console.log(`${name}: ${gladiators[name].sum} skill`)

        delete gladiators[name].sum

        let k = Object.entries(object).sort((a, b) => {
            if ((b[1] - a[1]) !== 0) {
                return b[1] - a[1]
            } else {
                return a[0].localeCompare(b[0])
            }
        })

        k.forEach(line => console.log(`- ${line[0]} <!> ${line[1]}`))
    })

    function createTotalSkillPointsObj(object) {
        for (const name in object) {
            let sum = 0

            for (const skill in object[name]) {
                sum += object[name][skill]
            }

            object[name].sum = sum
        }

        return object
    }
}

solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
)