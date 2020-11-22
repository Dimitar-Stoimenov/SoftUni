function solve(input) {
    let totalSum = 0;

    for (let line of input) {
        if (line === 'end of shift') {
            break;
        } else if (multiplePatternCheck(line)) {
            let namePattern = /%[A-Z][a-z]+%/;
            let name = line.match(namePattern)[0];
            name = name.substring(1, name.length - 1);

            let productPattern = /<\w+>/;
            let product = line.match(productPattern)[0];
            product = product.substring(1, product.length - 1);

            let quantityPattern = /\|\d+\|/;
            let numberPattern = /\d+/;
            let quantity = Number((line.match(quantityPattern)[0]).match(numberPattern)[0]);

            let pricePattern = /\d+[\.]?\d+?\$/;
            let priceString = line.match(pricePattern);
            let price = Number(priceString[0].substring(0, priceString[0].length - 1));

            let sum = quantity * price;
            totalSum += sum;

            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);

    function multiplePatternCheck(line) {
        let namePattern = /%[A-Z][a-z]+%/;
        let productPattern = /<\w+>/;
        let quantityPattern = /\|\d+\|/;
        let pricePattern = /\d+[\.]?\d+?\$/;

        if (namePattern.test(line) && productPattern.test(line) && quantityPattern.test(line) && pricePattern.test(line)) {
            return true;
        } else {
            return false;
        }
    }
}

solve(
    [
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
    ]
)