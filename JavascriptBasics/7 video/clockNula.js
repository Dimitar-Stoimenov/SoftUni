function solve() {
    let hours = 0
    let minutes = 0
    for (hours = 0; hours < 24; hours++) {
        for (minutes = 0; minutes < 60; minutes++) {
            let output = String
            if (hours < 10) {
                output = `0${hours}:`
                } else {
                    output = `${hours}:`
                }

                if (minutes < 10) {
                    output += `0${minutes}`
                } else {
                    output += `${minutes}`
                }
                console.log(output)
        }
    }
}

solve()