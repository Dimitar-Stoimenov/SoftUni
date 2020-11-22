function solve(a, b) {
    let city = a
    let volume = Number(b)
    let commissionPercent = 0
    let isValid = true

    switch (city) {
        case 'Sofia':
            if (volume < 0) {
                isValid = false
            } else if (volume >= 0 && volume <= 500) {
                commissionPercent = 0.05
            } else if (volume <= 1000) {
                commissionPercent = 0.07
            }
            else if (volume <= 10000) {
                commissionPercent = 0.08
            }
            else if (volume > 10000) {
                commissionPercent = 0.12
            }
            break;
        case 'Varna':
            if (volume < 0) {
                isValid = false
            } else if (volume >= 0 && volume <= 500) {
                commissionPercent = 0.045
            } else if (volume <= 1000) {
                commissionPercent = 0.075
            }
            else if (volume <= 10000) {
                commissionPercent = 0.1
            }
            else if (volume > 10000) {
                commissionPercent = 0.13
            }
            break;
        case 'Plovdiv':
            if (volume < 0) {
                isValid = false
            } else if (volume >= 0 && volume <= 500) {
                commissionPercent = 0.055
            } else if (volume <= 1000) {
                commissionPercent = 0.08
            }
            else if (volume <= 10000) {
                commissionPercent = 0.12
            }
            else if (volume > 10000) {
                commissionPercent = 0.145
            }
            break;
        default:
            isValid = false
            break
    }

    if (!isValid) {
        console.log('error')
    } else {
        console.log((volume * commissionPercent).toFixed(2))
    }
}

solve("Sofia", "0")