function solve(input) {
    let friends = input.shift().split(', ');
    let blacklistedCounter = 0;
    let lostCounter = 0;

    for (const line of input) {
        if (line === 'Report') {
            console.log(`Blacklisted names: ${blacklistedCounter}`.trim());
            console.log(`Lost names: ${lostCounter}`.trim());
            console.log(friends.join(' ').trim())
            break;
        }

        let [command, ...args] = line.split(' ');
        switch (command) {
            case 'Blacklist':
                let name = args[0];
                let x = friends.indexOf(name);
                if (x === -1) {
                    console.log(`${name} was not found.`)
                } else {
                    console.log(`${friends[x]} was blacklisted.`)
                    friends.splice(x, 1, 'Blacklisted');
                    blacklistedCounter++;
                }

                break;
            case 'Error':
                let index = args[0];

                if (friends[index] !== 'Lost' && friends[index] !== 'Blacklisted') {
                    console.log(`${friends[index]} was lost due to an error.`);
                    friends[index] = 'Lost';
                    lostCounter++;
                }

                break;
            case 'Change':
                let i = Number(args[0]);
                let newName = args[1];

                if (i >= 0 && i < friends.length) {
                    let currentName = friends[i];
                    friends[i] = newName;
                    console.log(`${currentName} changed his username to ${newName}.`);
                }

                break;
        }
    }
}

solve(
    (["Mike, John, Eddie",
        "Blacklist Mike",
        "Error 0",
        "Error 1",
        "Change 2 Mike123",
        "Report"])
)