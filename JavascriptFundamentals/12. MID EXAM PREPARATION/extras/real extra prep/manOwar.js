function solve(input) {
    let pirateStatus = input.shift().split('>').map(Number);
    let warshipStatus = input.shift().split('>').map(Number);

    let maxHealth = Number(input.shift());

    pirateStatus = pirateStatus.map(section => {
        if (section > maxHealth) {
            section = maxHealth
        }

        return section;
    })

    warshipStatus = warshipStatus.map(section => {
        if (section > maxHealth) {
            section = maxHealth
        }

        return section;
    });

    let breakMark = false;

    for (const line of input) {
        if (line === 'Retire') {
            break;
        }

        let [command, ...args] = line.split(' ');

        switch (command) {
            case 'Fire':
                let [index, damage] = args.map(Number);
                if (index < 0 || index >= warshipStatus.length) {
                    break;
                } else {
                    warshipStatus[index] -= damage;

                    if (warshipStatus[index] <= 0) {
                        breakMark = true;
                        console.log(`You won! The enemy ship has sunken.`);
                        break;
                    }
                }
                break;

            case 'Defend':
                let [startIndex, endIndex, dmg] = args.map(Number);
                if (startIndex < 0 || endIndex < 0 || startIndex >= pirateStatus.length || endIndex >= pirateStatus.length || startIndex > endIndex) {
                    break;
                } else {
                    for (let index = startIndex; index <= endIndex; index++) {
                        pirateStatus[index] -= dmg;
                        if (pirateStatus[index] <= 0) {
                            breakMark = true;
                            console.log("You lost! The pirate ship has sunken.");
                            break;
                        }
                    }
                }
                break;

            case 'Repair':
                let [i, health] = args.map(Number);
                if (i < 0 || i >= pirateStatus.length) {
                    break;
                } else {
                    pirateStatus[i] += health;
                    if (pirateStatus[i] > maxHealth) {
                        pirateStatus[i] = maxHealth;
                    }
                }
                break;

            case 'Status':
                let counter = 0;
                pirateStatus.forEach(section => {
                    if (section < (maxHealth * 0.2)) {
                        counter++
                    }
                })
                console.log(`${counter} sections need repair.`);
                break;
        }

        if (breakMark) {
            break;
        }
    }

    if (!breakMark) {
        console.log(`Pirate ship status: ${pirateStatus.reduce((acc, x) => acc + x)}`);
        console.log(`Warship status: ${warshipStatus.reduce((acc, x) => acc + x)}`);
    }
}

solve(
    [
        '2>3>4>5>2',
        '6>7>8>9>10>11',
        '20',
        'Status',
        'Fire 2 3',
        'Defend 0 4 11',
        'Repair 3 18',
        'Retire'
    ]
)