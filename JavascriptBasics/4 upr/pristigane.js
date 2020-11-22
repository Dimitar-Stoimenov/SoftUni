function solve(a, b, c, d) {
    let hrE = Number(a)
    let minE = Number(b)
    let hrA = Number(c)
    let minA = Number(d)

    let convertExamMinutes = (hrE * 60 + minE)
    let convertArrivalMinutes = (hrA * 60 + minA)

    if (convertExamMinutes < convertArrivalMinutes) {
        console.log('Late')
    } else if ((convertExamMinutes >= convertArrivalMinutes) && (convertExamMinutes <= (convertArrivalMinutes + 30))) {
        console.log('On time')
    } else {
        console.log('Early')
    }

    if ((convertExamMinutes > convertArrivalMinutes) && ((convertExamMinutes - convertArrivalMinutes) < 60)) {
        console.log(`${convertExamMinutes - convertArrivalMinutes} minutes before the start`)
    } else if ((convertExamMinutes < convertArrivalMinutes) && ((convertArrivalMinutes - convertExamMinutes) < 60)) {
        console.log(`${convertArrivalMinutes - convertExamMinutes} minutes after the start`)
    }

    let earlyHH = 0
    let earlyMM = 0
    let lateHH = 0
    let lateMM = 0

    if ((convertExamMinutes > convertArrivalMinutes) && ((convertExamMinutes - convertArrivalMinutes) >= 60)) {
        earlyHH = Math.floor((convertExamMinutes - convertArrivalMinutes) / 60)
        earlyMM = (convertExamMinutes - convertArrivalMinutes) % 60
        if (earlyMM < 10) {
            earlyMM = "0" + earlyMM
            console.log(`${earlyHH}:${earlyMM} hours before the start`)
        } else {
            earlyMM = earlyMM
            console.log(`${earlyHH}:${earlyMM} hours before the start`)
        }
    } else if ((convertExamMinutes < convertArrivalMinutes) && ((convertArrivalMinutes - convertExamMinutes) >= 60)) {
        lateHH = Math.floor((convertArrivalMinutes - convertExamMinutes) / 60)
        lateMM = (convertArrivalMinutes - convertExamMinutes) % 60
        if (lateMM < 10) {
            lateMM = "0" + lateMM
            console.log(`${lateHH}:${lateMM} hours after the start`)
        } else {
            lateMM = lateMM
            console.log(`${lateHH}:${lateMM} hours after the start`)
        }
    }
}

solve("16", "00", "15", "01")
