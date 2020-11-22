function solve(a, b, c) {
    let fruitType = a
    let day = b
    let quantity = Number(c)
    let price = 0
    let isValid = true

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruitType) {
                case 'banana':
                    price = 2.5
                    break;
                case 'apple':
                    price = 1.2
                    break;
                case 'orange':
                    price = .85
                    break;
                case 'grapefruit':
                    price = 1.45
                    break;
                case 'kiwi':
                    price = 2.7
                    break;  
                case 'pineapple':
                    price = 5.5
                    break;
                case 'grapes':
                    price = 3.85
                    break;
                default:
                    isValid = false
                    break;
            }
            break
        case 'Saturday':
        case 'Sunday':
            switch (fruitType) {
                case 'banana':
                    price = 2.7
                    break;
                case 'apple':
                    price = 1.25
                    break;
                case 'orange':
                    price = .9
                    break;
                case 'grapefruit':
                    price = 1.6
                    break;
                case 'kiwi':
                    price = 3
                    break;
                case 'pineapple':
                    price = 5.6
                    break;
                case 'grapes':
                    price = 4.2
                    break;
                default:
                    isValid = false
                    break
            }
            break
        default:
            isValid = false
            break
    }

    if (!isValid) {
        console.log('error')
    } else {
        console.log((price * quantity).toFixed(2))
    }
}

solve("kiwi", "Monday", "2.5")

