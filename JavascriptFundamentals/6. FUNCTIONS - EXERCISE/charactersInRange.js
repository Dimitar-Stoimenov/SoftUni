function solution(firstChar, lastChar) {

    let first = getNumberValue(firstChar)
    let last = getNumberValue(lastChar)
    let min = Math.min(first, last)
    let max = Math.max(first, last)
    let allSymbols = getCharsInRange(min, max)

    console.log(joinSymbols(allSymbols, ' '))

    function getNumberValue(char) {
        return char.charCodeAt(0)
    }

    function getCharValue(number) {
        return String.fromCharCode(number)
    }

    function getCharsInRange(start, end) {
        let characters = []

        for (let i = start + 1; i < end; i++) {
            let symbol = getCharValue(i);
            characters.push(symbol)
        }

        return characters
    }

    function joinSymbols(arr, separator) {
        let result = ''
        for (let index in arr) {
            let character = arr[index]

            if (index <= (arr.length - 2)) {
                result += `${character}${separator}`
            } else {
                result += character
            }
        }
        return result
    }
}

solution('A', 'Z')