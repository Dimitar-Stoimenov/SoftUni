function solve(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === 'Decode') {
            console.log(`The decrypted message is: ${message}`);            
            break;
        }

        let [command, first, second] = line.split('|');

        switch (command) {
            case 'Move':
                message = message.substring(first) + message.substring(0, first);
                break;
            case 'Insert':
                message = message.substring(0, first) + second + message.substring(first);
                break;
            case 'ChangeAll':
                while (message.indexOf(first) >= 0) {
                    message = message.replace(first, second)
                }
                break;
        }
    }
}

solve(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'
    ]
)