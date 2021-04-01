function solve(input) {
    let heroes = Number(input.shift());
    let heroesObj = {};

    for (let i = 0; i < heroes; i++) {
        let [heroName, HP, MP] = input.shift().split(' ');
        HP = Number(HP);
        MP = Number(MP);
        heroesObj[heroName] = { heroName, HP, MP }
    }

    for (let line of input) {
        if (line === 'End') {

            break;
        }

        let [command, heroName, firstArg, secondArg] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                if (heroesObj[heroName].MP >= Number(firstArg)) {
                    heroesObj[heroName].MP -= Number(firstArg);
                    console.log(`${heroName} has successfully cast ${secondArg} and now has ${heroesObj[heroName].MP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${secondArg}!`);
                }
                break;
            case 'TakeDamage':
                heroesObj[heroName].HP -= Number(firstArg);

                if (heroesObj[heroName].HP > 0) {

                } else {
                    console.log(`${heroName} has been killed by ${secondArg}!`);
                    delete heroesObj[heroName];
                }
                break;
            case 'Recharge':
                break;
            case 'Heal':
                break;
        }
    }
}

solve(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 888 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
    ]
)