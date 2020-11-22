function bitcoin(input) {
    let day = 0
    let levaToGold = 67.51
    let levaForShift = 0
    let totalLeva = 0
    let bitcoinPrice = 11949.16
    let bitcoin = 0
    let dayOfFirstBitcoin = 0

    for (let index = 0; index < input.length; index++) {
        day++
        let goldMined = input[index]

        if (day % 3 === 0) {
            goldMined *= 0.7
        }

        levaForShift = goldMined * levaToGold
        totalLeva += levaForShift

        while (totalLeva >= bitcoinPrice) {
            bitcoin++
            totalLeva -= bitcoinPrice

            if (bitcoin === 1) {
                dayOfFirstBitcoin = day
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`)

    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
    }

    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`)
}

bitcoin([3000, 200, 300])