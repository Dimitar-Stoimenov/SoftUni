function solve(input) {
    let points = {}
    let player = {}

    for (const element of input) {
        let [name, sequence] = element.split(': ')
        let sequenceArr = sequence.split(', ')
        let power = 0
        let multiplier = 0
        let multiplierNumber = 0
        
        if (!points[name]) {
            points[name] = 0
        }

        for (const card of sequenceArr) {
            if (card.length === 3) {
                power = 10
                multiplier = card[2]

                switch (multiplier) {
                    case 'S':
                        multiplierNumber = 4
                        break;
                    case 'H':
                        multiplierNumber = 3
                        break;
                    case 'D':
                        multiplierNumber = 2
                        break;
                    case 'C':
                        multiplierNumber = 1
                        break;
                }
            } else {
                switch (card[0]) {
                    case 'A':
                        power = 14
                        break;
                    case 'K':
                        power = 13
                        break;
                    case 'Q':
                        power = 12
                        break;
                    case 'J':
                        power = 11
                        break;
                    default:
                        power = Number(card[0])
                        break;
                }

                multiplier = card[1]

                switch (multiplier) {
                    case 'S':
                        multiplierNumber = 4
                        break;
                    case 'H':
                        multiplierNumber = 3
                        break;
                    case 'D':
                        multiplierNumber = 2
                        break;
                    case 'C':
                        multiplierNumber = 1
                        break;
                }
            }

            if (player[name] && player[name].includes(card)) {
                score = 0
            } else {
                score = power * multiplierNumber
            }

           points[name] += score

            addUsedCard(card, name)
            removeDuplicateCards(name)
            // реално махането на дубликатите не е нужно, понеже по-горе проверявам дали картата вече е използвана, но така и така го написах...
        }
    }

Object.entries(points).forEach(x => console.log(x[0] + ": " + x[1]))

    function addUsedCard(card, name) {

        if (!player[name]) {
            player[name] = [card]
        } else {
            let x = player[name]

            if (x.length >= 2 && x[0] != 1) {
                x = x.join(' ')
            }

            x += ' ' + card
            x = x.split(' ')

            player[name] = x

            // тук можеше просто player[name].push(card)
        }
    }

    function removeDuplicateCards(name) {
        if (player[name].length > 2) {
            let set = new Set(player[name])
            let array = []
            set.forEach(x => array.push(x))
            player[name] = array
        } 
    }
}

solve(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
)