function solve(input) {
    let inventory = input
        .shift()
        .split(' ')

    for (let i = 0; i < input.length; i++) {
        let [command, equipment] = input[i].split(' ')

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment)
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory = inventory.filter(x => x != equipment)
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    inventory = inventory.filter(x => x != equipment)
                    inventory.push(equipment)
                }
                break;
            case 'Upgrade':
                let splitEquipment = equipment.split('-')
                let equipmentName = splitEquipment[0]
                let equipmentUpgrade = splitEquipment[1]

                if (inventory.includes(equipmentName)) {
                    let idx = inventory.indexOf(equipmentName)
                    inventory.splice(idx + 1, 0, `${equipmentName}:${equipmentUpgrade}`)
                }
                break;
        }
    }

    console.log(inventory.join(' '))    
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)