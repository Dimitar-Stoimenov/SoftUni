function solve() {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this._suit = suit;
        }

        set suit(suit) {
            switch (suit) {
                case 'S':
                    suit = '\u2660';
                    break;
                case 'H':
                    suit = '\u2665';
                    break;
                case 'D':
                    suit = '\u2666';
                    break;
                case 'C':
                    suit = '\u2663';
                    break;
            }

            this._suit = suit
        }

        get suit() {
            return this._suit;
        }

        toString() {
            console.log(this.face + this.suit)
        }
    }

    return { Card }
}

let result = solve()

let x = new result.Card(1, 'S')

x.toString()