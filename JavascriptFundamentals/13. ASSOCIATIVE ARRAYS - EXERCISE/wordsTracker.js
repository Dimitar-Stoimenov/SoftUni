function solve(input) {

    let obj = getWantedWords(input)

    input.slice(1).forEach((word) => {
        
        if (Object.keys(obj).includes(word)) {
            obj[word]++
        }
    })

    let tempArr = Object.entries(obj)
    
    tempArr.sort((a, b) => {
        return b[1] - a[1]
    })

    tempArr.forEach(line => {
        console.log(`${line[0]} - ${line[1]}`)
    })
    

    function getWantedWords(arr) {
        let obj = {}

        arr[0].split(' ').forEach((word) => {
            obj[word] = 0
        })

        return obj
    }
}

solve(
    [
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task', 'sentence'
    ]
)