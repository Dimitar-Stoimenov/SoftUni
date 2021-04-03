function solve(input) {
    let counter = Number(input.shift());
    let successfulCounter = 0;

    for (let i = 0; i < counter; i++) {
        let string = input[i];
        let usernamePattern = /U\$[A-Z][a-z]{2,}U\$/g;
        let passwordPattern = /P@\$[A-Za-z]{5,}[0-9]+P@\$/g;

        let validityMark = false;

        let x = usernamePattern.test(string);
        let y = passwordPattern.test(string);

        if (x && y) {
            validityMark = true;
            let username = string.match(usernamePattern)[0];
            username = username.substring(2, username.length - 2);
            let password = string.match(passwordPattern)[0];
            password = password.substring(3, password.length - 3);

            console.log(`Registration was successful`);
            console.log(`Username: ${username}, Password: ${password}`);
            successfulCounter++
        } else {
            console.log(`Invalid username or password`);
        }
    }

    console.log(`Successful registrations: ${successfulCounter}`);
}

solve([
    "3",
    "U$myU$-->P@$asdqwe123P@$",
    "Sara 1232412",
    "U$NameU$P@$Pass234P@$"
])