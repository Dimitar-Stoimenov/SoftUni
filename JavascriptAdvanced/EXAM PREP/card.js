function createCard(face, suit) {
    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

    const suitToString = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (!validFaces.includes(face)) {
        throw new Error('invalid face');
    } else if (!Object.keys(suitToString).includes(suit)) {
        throw new Error('invalid suit');
    }

    return {
        face,
        suit,
        toString() {
            return `${this.face}${suitToString[this.suit]}`
        }
    }
}

const myCard = createCard('K', 'D');
console.log(myCard.toString());