function solve(a, b) {
    hour = Number(a)

    if (hour >= 10 && hour <= 18) {
        switch (b) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open')
                break
            default:
                console.log('closed')
                break
        }
    } else {
        console.log('closed')
    }
}

solve('14', 'Monday')