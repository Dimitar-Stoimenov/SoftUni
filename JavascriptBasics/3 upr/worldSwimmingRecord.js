function solve(a, b, c){
    let currentRecordInSeconds = Number(a)
    let distanceInMeters = Number(b)
    let secondsPerMeter = Number(c) 

    let timesSlowed = distanceInMeters / 15
    let secondsSlowed = Math.floor(timesSlowed) * 12.5

    let finalTime = (distanceInMeters * secondsPerMeter) + secondsSlowed

    if (finalTime < currentRecordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(finalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalTime-currentRecordInSeconds).toFixed(2)} seconds slower.`)
    }
}

solve("10464", "1500", "20")

