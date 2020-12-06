function solve(steps, footprint, speed) {
    let length = steps * footprint
    let delaySeconds = Math.floor(length / 500) * 60

    let timeWithoutDelayInHours = (length / speed) / 1000
    let tempTime = Math.round(timeWithoutDelayInHours * 1000 * 60 * 60 / 1000 + delaySeconds)

    let resultSecs = tempTime % 60
    if (resultSecs < 10) {
        resultSecs = '0' + resultSecs
    }

    tempTime = Math.floor(tempTime / 60)

    let resultMins = tempTime % 60
    if (resultMins < 10) {
        resultMins = '0' + resultMins
    }

    tempTime = Math.floor(tempTime / 60)

    let resultHours = tempTime

    if (resultHours < 10) {
        resultHours = '0' + resultHours
    }

    console.log(resultHours + ':' + resultMins + ':' + resultSecs);
}

solve(
    254512124, 0.70, 5.5
)