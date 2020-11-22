function solve(input) {
    let heroes = input.map(x => x.split(" / "))

    let hero = []

    for (const element of heroes) {
        let [name, level, inventory] = element
        let temp = {}
        temp.name = name
        temp.level = Number(level)

        inventory = [inventory]
        temp.inventory = inventory[0]
            .split(', ')
            .sort((a, b) => a.localeCompare(b))
            .join(', ')

        hero.push(temp)
    }

    hero.sort((a, b) => a.level - b.level)

    hero.forEach(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.inventory}`))
}

solve(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)