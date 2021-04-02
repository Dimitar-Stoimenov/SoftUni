function solve(input) {
    let stops = input.shift();

    for (const line of input) {
        if (line === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }

        let [first, second] = line.split(' ');

        if (first === 'Add') {
            let [blank, index, string] = second.split(':');
            if (index >= 0 || index < stops.length) {
                stops = stops.slice(0, index) + string + stops.slice(index)
            }

        } else if (first === 'Remove') {
            let [blank, startIndex, endIndex] = second.split(':');

            if (startIndex < stops.length && endIndex < stops.length && startIndex >= 0) {
                stops = stops.substring(0, startIndex) + stops.substring(Number(endIndex) + 1);
            }
        } else {
            let [blank, oldString, newString] = first.split(':');

            while (stops.indexOf(oldString) >= 0) {
                stops = stops.replace(oldString, newString);
            }
        }

        console.log(stops);
    }
}

solve(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
)