function solve(input) {
    let plantCount = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);

        if (!plants[plant]) {
            plants[plant] = { name: plant, rarity, rating: [] };
        } else {
            plants[plant].rarity = rarity;
        }
    }

    for (let line of input) {
        if (line === 'Exhibition') {
            for (let plant in plants) {
                if (plants[plant].rating.length > 0) {
                    plants[plant].averageRating = (plants[plant].rating.reduce((acc, x) => acc + x) / plants[plant].rating.length);
                } else {
                    plants[plant].averageRating = 0;
                }
            }

            let x = Object.entries(plants).sort((a, b) => {
                if (b[1].rarity === a[1].rarity) {
                    return b[1].averageRating - a[1].averageRating
                } else {
                    return b[1].rarity - a[1].rarity
                }
            })

            console.log('Plants for the exhibition:');

            for (const plant of x) {
                let name = plant[1].name;
                let rarity = plant[1].rarity;
                let averageRating = (plant[1].averageRating).toFixed(2);

                console.log(`- ${name}; Rarity: ${rarity}; Rating: ${averageRating}`);
            }

            break;
        }

        let [command, ...args] = line.split(': ');
        let [plant, arg] = args[0].split(' - ');

        if (plants.hasOwnProperty(plant)) {
            switch (command) {
                case 'Rate':
                    plants[plant]['rating'].push(Number(arg));
                    break;
                case 'Update':
                    plants[plant].rarity = Number(arg);
                    break;
                case 'Reset':
                    plants[plant].rating = [];
                    break;
            }
        } else {
            console.log('error');
        }
    }
}

solve(
    [
        '1',
        'Woodii<->7',
        'Rate: Woodii - 1a0',
        'Rate: Woodii - 5',
        'Update: Woodii - 500',
        'Reset: Arnoldii',
        'Reset: Woodii',
        'Exhibition'
    ]
)