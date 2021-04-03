function solve(input) {
    let guest = {};
    let unlikedCount = 0;

    for (const line of input) {
        if (line === 'Stop') {
            let sorted = Object.entries(guest).sort((a, b) => {

                if (b[1].length === a[1].length) {
                    return a[0].localeCompare(b[0]);
                } else {
                    return b[1].length - a[1].length;
                }
            })

            for (let key of sorted) {
                console.log(`${key[0]}: ${key[1].join(', ')}`)
            }

            console.log(`Unliked meals: ${unlikedCount}`);       
            break;
        }

        let [command, name, meal] = line.split('-');

        if (command == 'Like') {
            if (!guest[name]) {
                guest[name] = [];
            }

            if (!guest[name].includes(meal)) {
                guest[name].push(meal);
            }
        } else if (command == 'Unlike') {
            if (!guest[name]) {
                console.log(`${name} is not at the party.`);
            } else if (guest[name].includes(meal)) {
                guest[name] = guest[name].filter(x => x !== meal);
                console.log(`${name} doesn't like the ${meal}.`);
                unlikedCount++
            } else {
                console.log(`${name} doesn't have the ${meal} in his/her collection.`);
            }
        }
    }
}

solve(["Like-Krisi-shrimps",
    "Unlike-Vili-carp",
    "Unlike-Krisi-salad",
    "Unlike-Krisi-shrimps",
    "Stop"])
