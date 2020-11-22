function solve(a, b, c) {
    let totalTime = Number(a) + Number(b) + Number(c)
    let minuti = Math.floor(totalTime / 60)
    let sekundi = totalTime % 60

    if (sekundi < 10) {
        console.log(`${minuti}:0${sekundi}`)
    } else {
        console.log(`${minuti}:${sekundi}`)
    }
}

solve('305', '25', '119')