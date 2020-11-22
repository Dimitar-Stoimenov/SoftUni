// целта на сетовете е да съхраняват уникални стойности

let uniqueValues = new Set()

uniqueValues.add('Pesho')
uniqueValues.add('Gosho')
uniqueValues.add('Stamat')
uniqueValues.add('Pesho')

console.log(uniqueValues)

////// или

let uniqueNames = new Set(['Pesho', 'Gosho', 'Stamat', 'Pesho'])

console.log(uniqueNames)

////// конверт то масив

let names = ['Pesho', 'Gosho', 'Stamat', 'Pesho']
let uniqueNamesSet = new Set(names)
let uniqueNames2 = Array.from(uniqueNamesSet)

console.log(uniqueNames2)

uniqueNamesSet.size
uniqueNamesSet.has()
uniqueNamesSet.forEach(name => console.log(name))
uniqueNamesSet.add()
uniqueNamesSet.clear()
uniqueNamesSet.delete()
uniqueNamesSet.values()
uniqueNamesSet.entries() // нз ко е тва, не е кат при обектите.
