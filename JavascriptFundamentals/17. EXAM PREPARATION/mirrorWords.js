function solve(input) {
    let string = input[0]
    let validPairCount = 0
    let mirrorWordArr = []

    let validWordsPattern = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g

    if (validWordsPattern.test(string)) {

        let validPairs = string.match(validWordsPattern)
        validPairCount = validPairs.length

        for (let pair of validPairs) {
            let firstWord = pair.substring(0, pair.length / 2)
            let secondWordReversed = pair.substring(pair.length / 2).split('').reverse().join('')

            if (firstWord === secondWordReversed) {
                mirrorWordArr.push(pair)
            }
        }
    }

    if (validPairCount === 0) {
        console.log(`No word pairs found!`)
    } else {
        console.log(`${validPairCount} word pairs found!`)
    }

    if (mirrorWordArr.length === 0) {
        console.log(`No mirror words!`)
    } else {
        let output = ''

        for (let wordCombo of mirrorWordArr) {
            if (wordCombo.includes('@')) {
                while (wordCombo.includes('@')) {
                    wordCombo = wordCombo.replace('@', '')
                }

            } else {
                while (wordCombo.includes('#')) {
                    wordCombo = wordCombo.replace('#', '')
                }
            }

            let word1 = wordCombo.substring(0, wordCombo.length / 2)
            let word2 = wordCombo.substring(wordCombo.length / 2)

            output += word1 + ' <=> ' + word2 + ', '
        }

        output = output.substring(0, output.length - 2)
        console.log(`The mirror words are:\n${output}`)
    }
}

solve(

    ['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
)