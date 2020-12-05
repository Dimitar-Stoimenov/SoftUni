function solve(input) {
    let itemArray = []

    input.forEach((line) => {
        if (line === 'Craft!') {
            console.log(itemArray.join(', '))
        } else if (line.includes('-')) {
            let [command, item] = line.split(' - ')

            switch (command) {
                case 'Collect':
                    if (!itemArray.includes(item)) {
                        itemArray.push(item)
                    }
                    break;
                case 'Drop':
                    if (itemArray.includes(item)) {
                        itemArray = itemArray.filter(x => x !== item)
                    }
                    break;
                case 'Renew':
                    if (itemArray.includes(item)) {
                        itemArray.forEach((x, i) => {
                            if (x === item) {
                                itemArray.splice(i, 1)
                                itemArray.push(item)
                            }
                        })
                    }
                    break;
                default:
                    let [oldItem, newItem] = item.split(':')

                    if (itemArray.includes(oldItem)) {
                        itemArray.forEach((x, i) => {
                            if (x === oldItem) {
                                itemArray.splice(i + 1, 0, newItem)
                            }
                        })
                    }

                    break;
            }
        } else {
            itemArray = line.split(', ')
        }
    })
}

solve(
    [
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
)