function solve(input) {
    let email = input.shift();

    for (const line of input) {
        if (line === 'Complete') {
            break;
        }

        let [first, second] = line.split(' ');

        switch (first) {
            case 'Make':
                if (second === 'Upper') {
                    email = email.toUpperCase();
                    console.log(email);
                } else {
                    email = email.toLowerCase();
                    console.log(email);
                }
                break;
            case 'GetDomain':
                let characterCounter = Number(second);
                let result = email.substring(email.length - characterCounter);
                console.log(result);
                break;
            case 'GetUsername':
                let pattern = /@/g;

                if (pattern.test(email)) {
                    let [username, blank] = email.split('@');
                    console.log(username);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case 'Replace':
                while (email.indexOf(second) >= 0) {
                    email = email.replace(second, '-');
                }

                console.log(email);
                break;
            case 'Encrypt':
                let emailArr = email.split('');
                let resultASCII = [];
                for (const char of emailArr) {
                    let num = char.charCodeAt(0);
                    resultASCII.push(num);
                }
                console.log(resultASCII.join(' '));
                break;
        }
    }
}

solve(
    ["AnotherMail.com",
        "Make Lower",
        "GetUsername",
        "Replace a",
        'GetDomain 8',
        "Complete"]
)