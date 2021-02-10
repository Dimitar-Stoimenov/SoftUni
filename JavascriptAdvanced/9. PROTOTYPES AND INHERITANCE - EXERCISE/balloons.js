function result() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color,
                this.gasWeight = gasWeight
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight),
                this._ribbon = {
                    color: ribbonColor,
                    length: ribbonLength
                }
        }

        get ribbon() {
            return this._ribbon;
        }

        // set
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength),
                this._text = text
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let classes = result();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let ribbon = test.ribbon;

console.log(ribbon.length)//.to.be.equal(10.25,            "'PartyBalloon ribbon length' does not return correct results")