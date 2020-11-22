function solve(input) {
    let messageCount = Number(input.shift())

    if (messageCount > input.length) {
        messageCount = input.length
    }

    let attackedPlanetsArr = []
    let destroyedPlanetsArr = []

    for (let i = 0; i < messageCount; i++) {
        let line = input[i]
        let decriptionKey = getDecriptionKey(line)
        let decriptedMessage = ''

        for (let char of line) {
            decriptedMessage += String.fromCharCode(char.charCodeAt(0) - decriptionKey)
        }

        if (validityCheck(decriptedMessage)) {
            let [planet, population, attackType, soldierCount] = getPlanetProperties(decriptedMessage)

            if (attackType === 'A') {
                attackedPlanetsArr.push(planet)
            } else if (attackType === 'D') {
                destroyedPlanetsArr.push(planet)
            }
        }
    }

    attackedPlanetsArr.sort((a, b) => a.localeCompare(b))
    destroyedPlanetsArr.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${attackedPlanetsArr.length}`)
    for (const planet of attackedPlanetsArr) {
        console.log(`-> ${planet}`)
    }

    console.log(`Destroyed planets: ${destroyedPlanetsArr.length}`)
    for (const planet of destroyedPlanetsArr) {
        console.log(`-> ${planet}`)
    }

    function getPlanetProperties(line) {
        let planetNamePattern = /@[A-Za-z]+/
        let planet = line.match(planetNamePattern)[0].substring(1)

        let planetPopulationPattern = /:\d+/
        let population = Number(line.match(planetPopulationPattern)[0].substring(1))

        let attackTypePattern = /![A, D]!/
        let attackType = line.match(attackTypePattern)[0].substring(1, 2)

        let soldierCountPattern = /->\d+/
        let soldierCount = Number(line.match(soldierCountPattern)[0].substring(2))

        return [planet, population, attackType, soldierCount]
    }

    function validityCheck(line) {
        let planetNamePattern = /@[A-Za-z]+/
        let planetPopulationPattern = /:\d+/
        let attackTypePattern = /![A, D]!/
        let soldierCountPattern = /->\d+/
        let generalPattern = /@([A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!([AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;

        if (planetNamePattern.test(line) && planetPopulationPattern.test(line) && attackTypePattern.test(line) && soldierCountPattern.test(line) && generalPattern.test(line)) {
            return true
        } else {
            return false
        }
    }

    function getDecriptionKey(line) {
        let letterPattern = /[s,t,a,r,S,T,A,R]/g
        if (line.match(letterPattern) === null) {
            return 0
        } else {
            return line.match(letterPattern).length
        }
    }
}

solve(
    [
        '3',
        "tt(''DGsvywgerx>6444444444%H%1B9544",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
)