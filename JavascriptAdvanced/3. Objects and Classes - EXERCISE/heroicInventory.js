function solve(input) {
    let data = []

    input.forEach(line => {
        let [name, level, itemsInfo] = line.split(' / ')
        level = Number(level)
        let items = null

        if (itemsInfo) {
            items = itemsInfo.split(', ')
        } else {
            items = []
        }

        data.push({ name, level, items })
    })

    let result = JSON.stringify(data)

    console.log(result);
}

solve(
    ['Isacc / 25',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
)