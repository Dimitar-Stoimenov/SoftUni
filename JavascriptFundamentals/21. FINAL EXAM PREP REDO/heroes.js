function solve(input) {
    let heroes = Number(input.shift());
    let heroesObj = {};

    for (let i = 0; i < heroes; i++) {
        let [heroName, HP, MP] = input.shift().split(' ');
        HP = Number(HP);
        MP = Number(MP);
        heroesObj[heroName] = { HP, MP }
    }

    for (let line of input) {
        if (line === 'End') {
            let sorted = Object.entries(heroesObj).sort((a, b) => {
                if (b[1].HP === a[1].HP) {
                    return a[0].localeCompare(b[0]);
                } else {
                    return b[1].HP - a[1].HP;
                }
            });

            let obj = Object.fromEntries(sorted);

            for (const hero in obj) {
                console.log(hero);
                
                for (const key in obj[hero]) {
                    console.log(`  ${key}: ${obj[hero][key]}`);                    
                }                          
            }

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
                    console.log(`${heroName} was hit for ${firstArg} HP by ${secondArg} and now has ${heroesObj[heroName].HP} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${secondArg}!`);
                    delete heroesObj[heroName];
                }

                break;
            case 'Recharge':
                let rechargedMP = Number(firstArg);

                if ((heroesObj[heroName].MP + rechargedMP) > 200) {
                    let excess = heroesObj[heroName].MP + rechargedMP - 200;

                    heroesObj[heroName].MP = 200;
                    rechargedMP -= excess;
                } else {
                    heroesObj[heroName].MP += rechargedMP;
                }

                console.log(`${heroName} recharged for ${rechargedMP} MP!`);
                break;
            case 'Heal':
                let healedHP = Number(firstArg);

                if ((heroesObj[heroName].HP + healedHP) > 100) {
                    let excess = heroesObj[heroName].HP + healedHP - 100;

                    heroesObj[heroName].HP = 100;
                    healedHP -= excess;
                } else {
                    heroesObj[heroName].HP += healedHP;
                }

                console.log(`${heroName} healed for ${healedHP} HP!`);
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
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
    ]
)