function solve(a) {
    let num = a

    switch (num) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day')
            break
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend')
            break
        default:
            console.log('Error')
            break
    }
}
solve('Wednesday')