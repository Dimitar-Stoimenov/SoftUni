function solve(a, b){
    hour = Number(a)
    minute = Number(b)

    let finalMinute = minute + 15

    let extraHours = Math.floor(finalMinute / 60)
    let trueMinute = finalMinute % 60

    let trueHours = (hour + extraHours) % 24

    if (trueMinute < 10) {
        console.log(`${trueHours}:0${trueMinute}`)
    } else {
        console.log(`${trueHours}:${trueMinute}`)
    }
}

solve('23', '59')