function solve(a, b, c) {
    let fruit = a
    let setType = b
    let orderCount = +c
    let sum = 0

    switch (fruit) {
        case 'Watermelon':
            if (setType === "big") {
                sum = orderCount * 28.7 * 5
            } else {
                sum = orderCount * 56 * 2
            }
            break;
        case 'Mango':
            if (setType === "big") {
                sum = orderCount * 19.6 * 5
            } else {
                sum = orderCount * 36.66 * 2
            }
            break;
        case 'Pineapple':
            if (setType === "big") {
                sum = orderCount * 24.8 * 5
            } else {
                sum = orderCount * 42.1 * 2
            }
            break;
        case 'Raspberry':
            if (setType === "big") {
                sum = orderCount * 15.2 * 5
            } else {
                sum = orderCount * 20 * 2
            }
            break;
    }

    if (sum < 400) {
        sum = sum
    } else if (sum <= 1000) {
        sum = sum * 0.85
    } else {
        sum = sum * 0.5
    }
    console.log(`${sum.toFixed(2)} lv.`)
}

solve('Watermelon',
    'big',
    '4',
)