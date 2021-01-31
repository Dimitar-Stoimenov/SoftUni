function solve(customerInfo) {
    let { model, power, color, carriage, wheelsize } = customerInfo;

    let engine = null;

    if (power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else {
        engine = { power: 200, volume: 3500 };
    };

    let carriageObj = {
        type: carriage,
        color,
    }

    let trueSize = wheelsize % 2 === 1 ? wheelsize : wheelsize - 1;

    let wheels = [trueSize, trueSize, trueSize, trueSize];

    let result = {
        model,
        engine,
        carriage: carriageObj,
        wheels,
    }

    return result
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