function solve(inputArray) {
    let copy = inputArray.slice()
    let listOfAttendees = []

    for (let i = 0; i < copy.length; i++) {
        let [name, blank, isGoing] = copy[i].split(' ')
        
        if (isGoing === 'going!') {

            if (!listOfAttendees.includes(name)) {
                listOfAttendees.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }

        } else {

            if (!listOfAttendees.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                listOfAttendees = listOfAttendees.filter(n => n !== name)
            }
        }
    }

    printAllNamesOnThelist(listOfAttendees)

    function printAllNamesOnThelist(input) {
        for (let element of input) {
            console.log(element)
        }
    }
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)