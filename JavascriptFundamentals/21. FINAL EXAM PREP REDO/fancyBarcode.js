function solve(input) {
    let count = Number(input.shift());

    for (let index = 0; index < input.length; index++) {
        let barcode = input[index];
        let pattern = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/g;
        let numberPattern = /[0-9]/g;

        if (pattern.test(barcode)) {
            let productGroup = '';

            if (numberPattern.test(barcode)) {
                let numbers = barcode.match(numberPattern);

                for (let num of numbers) {
                    num = num[0];
                    productGroup += num;
                }

            } else {
                productGroup = '00';
            }

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode')
        }
    }
}

solve(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ]
)