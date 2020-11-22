function solve(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let deathMark = false
    let roomCount = 0

    for (let element of rooms) {
        let [command, number] = element.split(' ');
        number = Number(number);
        roomCount++

        if (deathMark) {
            break
        }

        switch (command) {
            case 'potion':
                let initialHealth = health;
                health += number;

                if (health > 100) {
                    health = 100
                }

                let healAmount = health - initialHealth;

                console.log(`You healed for ${healAmount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    deathMark = true;
                    console.log(`Best room: ${roomCount}`);
                }

                break;
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

solve(
    'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'
)