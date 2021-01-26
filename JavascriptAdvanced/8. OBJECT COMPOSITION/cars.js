function solve(input) {

    const carFactoryBuilder = () => {
        let cars = {};

        return {
            create: (name, inherit, parent) => {
                if (inherit) {
                    cars[name] = Object.create(cars[parent]);
                } else {
                    cars[name] = {};
                }

                // това може и на един ред:
                // cars[name] = inherit ? Object.create(cars[parent]) : {}
            },
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let result = [];

                for (const key in cars[name]) {
                    result.push(`${key}:${cars[name][key]}`)
                };

                console.log(result.join(', '));
            },
        };
    };

    let carFactory = carFactoryBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([
            command,
            ...args
        ]) => carFactory[command](...args));
}

solve(
    ['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2']
)