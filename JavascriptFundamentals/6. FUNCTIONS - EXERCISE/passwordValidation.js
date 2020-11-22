function solution(input) {
    let isLengthValid = properLength(input)
    let areCharsValid = charRequirement(input)
    let areDigitsTwoOrMore = digitRequirement(input)

    if (isLengthValid && areCharsValid && areDigitsTwoOrMore) {
        console.log(`Password is valid`)
    }

    function properLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false
        }
    }

    function charRequirement(password) {
        let isValid = true
        for (let element of password) {
            let value = element.charCodeAt(0)
            if (value >= 48 && value <= 57) {

            } else if (value >= 65 && value <= 90) {

            } else if (value >= 97 && value <= 122) {

            } else {
                isValid = false
                console.log(`Password must consist only of letters and digits`)
                break
            }
        }

        return isValid
    }

    function digitRequirement(password) {
        let digitCounter = 0

        for (let element of password) {
            let value = element.charCodeAt(0)

            if (value >= 48 && value <= 57) {
                digitCounter++
            }
        }

        if (digitCounter >= 2) {
            return true
        } else {
            console.log(`Password must have at least 2 digits`)
            return false
        }
    }
}

solution('logIn')