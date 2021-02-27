function solve(biscuitsPerDay, workers, competingProductionFor30Days) {
    let totalBiscuits = 0

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            totalBiscuits += Math.floor((biscuitsPerDay * workers) * 0.75);
        } else {
            totalBiscuits += Math.floor(biscuitsPerDay * workers);
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    let percentage = totalBiscuits / competingProductionFor30Days * 100;

    if (percentage > 100) {
        console.log(`You produce ${(percentage - 100).toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${(100 - percentage).toFixed(2)} percent less biscuits.`)
    }
}

solve(
    78, 8, 16000,
)