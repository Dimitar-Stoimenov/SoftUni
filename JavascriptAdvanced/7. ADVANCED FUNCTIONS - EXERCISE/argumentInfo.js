function solve(...input) {
    let type = {};

    input.forEach(x => {
        console.log(typeof (x) + ': ' + x);

        if (type[(typeof (x))]) {
            type[(typeof (x))]++
        } else {
            type[(typeof (x))] = 1
        };
    });

    type = Object.fromEntries(
        Object.entries(type).sort((a, b) => {
            if (a[1] === b[1]) {
                return 1
            } else {
                return b[1] - a[1]
            }
        })
    )

    for (const key in type) {
        console.log(key + ' = ' + type[key]);
    };
};

solve(
    { name: 'bob' }, 3.333, 9.999, { asd: 'f' }
)