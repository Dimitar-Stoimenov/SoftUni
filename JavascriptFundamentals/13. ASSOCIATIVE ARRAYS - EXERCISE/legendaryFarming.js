function solve(input) {

    let array = input.split(' ')

    let obj = {}

    obj['fragments'] = 0
    obj['shards'] = 0
    obj['motes'] = 0

    for (let index = 0; index < array.length; index += 2) {
        let quantity = Number(array[index])
        let material = (array[index + 1]).toLowerCase()

        if (!obj[material]) {
            obj[material] = quantity
        } else {
            obj[material] += quantity
        }

        if (obj['shards'] >= 250 || obj['fragments'] >= 250 || obj['motes'] >= 250) {
            break
        }
    }

    let material = ''
    let quantity = 0

    Object.entries(obj).forEach(kvp => {
        let essentialMaterialCheck = false

        if ((kvp[0] === 'shards') || (kvp[0] === 'fragments') || (kvp[0] === 'motes')) {
            essentialMaterialCheck = true
        }

        if ((kvp[1] >= 250) && essentialMaterialCheck) {
            material = kvp[0]
            quantity = Number(kvp[1])
            obj[material] = kvp[1] - 250
        }
    })

    switch (material) {
        case 'shards':
            console.log(`Shadowmourne obtained!`)
            break;
        case 'fragments':
            console.log(`Valanyr obtained!`)
            break;
        case 'motes':
            console.log(`Dragonwrath obtained!`)
            break;
    }

    let epicMaterials = []
    let nonEpicMaterials = []

    Object.entries(obj).forEach(line => {
        if (line[0] === 'shards' || line[0] === 'fragments' || line[0] === 'motes') {
            epicMaterials.push(line)
        } else {
            nonEpicMaterials.push(line)
        }
    })

    epicMaterials.sort((a, b) => {
        if ((b[1] - a[1]) === 0) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1] - a[1]
        }
    })

    epicMaterials.forEach(line => {
        console.log(`${line[0]}: ${line[1]}`)
    })

    nonEpicMaterials.sort((a, b) => a[0].localeCompare(b[0]))

    nonEpicMaterials.forEach(line => {
        console.log(`${line[0]}: ${line[1]}`)
    })
}

solve(
    '130 silver 130 silver 8 shards 255 fragments 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)