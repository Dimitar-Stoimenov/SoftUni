function solve({ model, power, color, carriage, wheelsize }) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];

    let trueSize = wheelsize % 2 === 1 ? wheelsize : wheelsize - 1;

    return {
        model,
        engine: engines.find(e => e.power >= power),
        carriage: {
            type: carriage,
            color,
        },
        wheels: [0, 0, 0, 0].fill(trueSize),
    };
}

solve(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
)