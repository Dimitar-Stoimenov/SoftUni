function solve(input) {
    let participants = input.shift().split(', ');
    let raceObj = {}

    for (let line of input) {
        if (line === 'end of race') {
            break
        }

        let distance = 0
        let distancePattern = /[0-9]/g
        let distanceArr = line.match(distancePattern)

        for (let num of distanceArr) {
            distance += Number(num)
        }

        let name = ''
        let namePattern = /[A-Za-z]+/g
        let nameArr = line.match(namePattern)

        for (let str of nameArr) {
            name += str
        }

        if (participants.includes(name)) {
            if (!raceObj[name]) {
                raceObj[name] = distance
            } else {
                raceObj[name] += distance
            }
        }
    }

    let sortedRace = Object.entries(raceObj).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${sortedRace[0][0]}`);
    console.log(`2nd place: ${sortedRace[1][0]}`);
    console.log(`3rd place: ${sortedRace[2][0]}`);
}

solve(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
)