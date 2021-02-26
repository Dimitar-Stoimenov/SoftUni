function solve(input) {
    let loot = input.shift().split('|');

    for (const line of input) {
        if (line === 'Yohoho!') {
            break
        }

        let [command, ...args] = line.split(' ');
        switch (command) {
            case 'Loot':
                args.forEach(item => {
                    if (!loot.includes(item)) {
                        loot.unshift(item);
                    }
                })
                break;
            case 'Drop':
                let index = Number(args[0]);

                if (index < 0 || index > loot.length - 1) {
                    break
                } else {
                    let item = loot.splice(index, 1)[0];
                    loot.push(item)
                }

                break;
            case 'Steal':
                let stealCount = args[0];
                let stolenItems = loot.splice(stealCount * -1);
                console.log(stolenItems.join(', '));
                break;
        }
    }

    if (loot.length > 0) {
        let result = loot.reduce((acc, item) => acc + item.length, 0) / loot.length;
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.')
    }
}

solve(
    [
        'Diamonds|Silver|Shotgun|Gold',
        'Loot Silver Medals Coal',
        'Drop -1',
        'Drop 1',
        'Steal 6',
        'Yohoho!'
    ]
)