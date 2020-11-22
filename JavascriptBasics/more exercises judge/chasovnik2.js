function solve() {
    let hours = 0
    let minutes = 0
    let seconds = 0

    for (hours = 0; hours < 24; hours++) {
        for (minutes = 0; minutes < 60; minutes++) {
            for (seconds = 0; seconds < 60; seconds++) {
                console.log(hours + " " + ":" + " " + minutes + " " + ":" + " " + seconds)
            }
        }
    }
}

solve()