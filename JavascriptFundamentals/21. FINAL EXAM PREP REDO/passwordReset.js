function solve(input) {
    let password = input.shift();

    for (const command of input) {
        if (command === 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }

        let [action, first, second] = command.split(' ');
        switch (action) {
            case 'TakeOdd':
                let newPass = '';

                for (let i = 1; i < password.length; i += 2) {
                    newPass += password[i];
                };

                password = newPass;
                console.log(password);
                break;
            case 'Cut':
                let string = password.substr(first, second);
                password = password.replace(string, '');
                console.log(password);
                break;
            case 'Substitute':
                if (password.indexOf(first) < 0) {
                    console.log('Nothing to replace!');
                    break;
                }

                while (password.indexOf(first) >= 0) {
                    password = password.replace(first, second)
                }

                console.log(password);
                break;
        }
    }
}

solve(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
)