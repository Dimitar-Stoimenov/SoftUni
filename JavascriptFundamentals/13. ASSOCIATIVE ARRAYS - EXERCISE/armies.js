function solve(input) {
    let obj = {}

    input.forEach(line => {
        if (line.includes('arrives')) {
            let lastIndex = line.length - 7 - 1
            let leader = line.slice(0, lastIndex)

            if (!obj[leader]) {
                obj[leader] = {}
            }

        } else if (line.includes(': ')) {
            let [leader, armyParams] = line.split(': ')
            let [armyName, count] = armyParams.split(', ')
            count = Number(count)

            if (obj[leader]) {
                obj[leader][armyName] = count
            }

        } else if (line.includes('+')) {
            let [armyName, addCount] = line.split(' + ')
            addCount = Number(addCount)

            let x = Object.entries(obj)
            x.forEach(y => {
                let [leader, armyNameObj] = y

                for (let i = 0; i < Object.entries(armyNameObj).length; i++) {
                    let armyNameX = Object.entries(armyNameObj)[i]

                    if (armyNameX !== undefined) {
                        if (armyName === armyNameX[0]) {
                            obj[leader][armyName] += addCount
                        }
                    }
                }
            })

        } else if (line.includes('defeated')) {
            let lastIndex = line.length - 8 - 1
            let leader = line.slice(0, lastIndex)

            delete obj[leader]
        }
    })

    Object.entries(obj).forEach(line => {
        let name = line[0]
        let object = line[1]

        Object.entries(object).forEach(lineX => {
            let armyName = lineX[0]
            let armyCount = lineX[1]

            if (!obj[name].totalCount) {
                obj[name].totalCount = Number(armyCount)
            } else {
                obj[name].totalCount += Number(armyCount)
            }
        })
    })

    obj = Object.entries(obj).sort((a, b) => {
        let aLength = Object.entries(a[1]).length
        let bLength = Object.entries(b[1]).length

        if (Object.entries(a[1])[aLength - 1] === undefined) {
            return 1
        } else if (Object.entries(b[1])[bLength - 1] === undefined) {
            return -1
        }

        let aCount = Object.entries(a[1])[aLength - 1][1]
        let bCount = Object.entries(b[1])[bLength - 1][1]

        return bCount - aCount
    })

    obj.forEach(line => {
        let name = line[0]
        let length = Object.entries(line[1]).length
        let x = Object.entries(line[1]).sort((a, b) => {

            if (b[1] - a[1] === 0) {
                if (b[0] === 'totalCount') {
                    return (b[1] + 1) - a[1]
                } else if (a[0] === 'totalCount') {
                    return b[1] - (a[1] + 1)
                }
            }

            return b[1] - a[1]
        })


        if (x[length - 1] !== undefined) {
            let totalCount = x[0][1]
            console.log(`${name}: ${totalCount}`)

            for (let index = 1; index < length; index++) {
                let armyName = x[index][0]
                let armyCount = x[index][1]

                console.log(`>>> ${armyName} - ${armyCount}`)
            }
        }
    })
}

solve(
    ['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives',
        'Findlay: Britox, 34540', 'Porter arrives',
        'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205', 'Retix + 215215', 
        'kuro ve arrives', 'kuro ve: zalee, 100', 'kuro ve: daiba e, 100'])