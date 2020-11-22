function solve(a, b, c) {
    let record = +a
    let distance = +b
    let secPerMeter = +c
    let meterPerSec = 1/secPerMeter

    let delayCoef = Math.floor(distance / 50)
    let delay = delayCoef * 30

    let result = (distance/meterPerSec) + delay

    if (result < record) {
        console.log(`Yes! The new record is ${result.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(result - record).toFixed(2)} seconds slower.`)
    }
}

solve('10164', '1400', '25',)