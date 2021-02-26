function solve(input) {
    let array = input.shift().split(' ').map(Number);

    input.forEach(line => {
        let [command, index1, index2] = line.split(' ');

        switch (command) {
            case 'swap':
                let x = Number(array[index1]);
                array[index1] = Number(array[index2]);
                array[index2] = x;
                break;
            case 'multiply':
                array[index1] = Number(array[index1]) * Number(array[index2]);
                break;
            case 'decrease':
                array = array.map(x => x - 1);
                break;
        }
    })

    console.log(array.join(', '))
}

solve(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
)