class Stringer {
    constructor(text, length) {
        this.innerLength = length
        this.text = text
    }

    get innerString() {
        return this.text
    }

    increase(length) {
        this.innerLength += length
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
        return
    }

    decrease(length) {
        this.innerLength -= length
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
        return
    }

    toString() {
        if (this.innerLength === 0) {
            return (`...`)
        } else if (this.innerString.length > this.innerLength) {
            let cutNumber = this.innerString.length - this.innerLength
            return (this.innerString.substring(0, this.innerString.length - cutNumber) + '...')
        } else {
            return (this.innerString)
        }
    }
}

let Stringer = result;
let s = new Stringer("Viktor", 6);