function solve(input) {
    let inputParsedIntoArray = []
    let objects = []

    input.forEach(x => inputParsedIntoArray.push(JSON.parse(x)))

    inputParsedIntoArray.forEach((object) => {
        let tempObj = {}

        tempObj.term = (Object.keys(object).join(' '));
        tempObj.description = (Object.values(object).join(' '));

        let duplicateCheck = objects.find(x => x.term === tempObj.term)

        if (duplicateCheck === undefined) {
            objects.push(tempObj)
        } else {
            objects.forEach(x => {
                if (x.term === tempObj.term) {
                    x.description = tempObj.description
                }
            })
        }
    })

    objects.sort((a, b) => (a.term).localeCompare(b.term))

    objects.forEach(object => console.log(`Term: ${object.term} => Definition: ${object.description}`))
}

solve(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
        '{"Boiler":"Fuckidy fuck."}'
    ]
)