function solve(input) {
    let letterArray = []

    for (let line of input) {
        if (line === 'end') {
            break
        } else {
            let [letter, indexList] = line.split(':')
            let indexArr = indexList.split('/').map(Number)
            indexArr.forEach (i => {
                letterArray[i] = letter
            })
        }
    }

    console.log(letterArray.join(''))
}

solve(
    ['a:0/2/4/6', 'b:1/3/5', 'end']
)