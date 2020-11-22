function solve(input) {
    let splitPattern = /[, ]+?/
    let demons = input.join('').split(splitPattern)
    demons = demons.filter(x => x !== '')
    let obj = {}

    for (let demon of demons) {
        demon = demon.trim()

        let healthPattern = /[^+\-*\/.\d\s]/g
        let healthKeyArr = demon.match(healthPattern)
        let health = 0

        if (healthKeyArr) {
            for (const el of healthKeyArr) {
                let x = el.charCodeAt(0)
                health += x
            }
        }

        obj[demon] = {}
        obj[demon].health = health

        let damagePattern = /[+-]?[\d]+[.]?[\d]*/g
        let damageArr = demon.match(damagePattern)
        let damage = 0

        if (damageArr) {
            for (let el of damageArr) {
                el = Number(el)
                damage += el
            }
        }

        let multiplicationCount = 0
        let divisonCount = 0

        for (let char of demon) {
            if (char === '*') {
                multiplicationCount++
            } else if (char === '/') {
                divisonCount++
            }
        }

        for (let i = 0; i < multiplicationCount; i++) {
            damage *= 2
        }

        for (let i = 0; i < divisonCount; i++) {
            damage /= 2
        }

        obj[demon].damage = damage
    }

    let resultArr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    resultArr.forEach(demonInfo => {
        console.log(`${demonInfo[0]} - ${demonInfo[1].health} health, ${demonInfo[1].damage.toFixed(2)} damage`);
    })
}

solve(
    ['Gos/h4o4, azzo, aewe, azaz3/******eal    ,  ba-0.5stunq7a*hhehe+44*///*y6f65*-+-10e']
)