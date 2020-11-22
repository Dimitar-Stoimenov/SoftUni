let numbers = new Map()

numbers.set('Three', 3)
numbers.set('One', 1)
numbers.set('Two', 2)

let entries = Array.from(numbers.entries())

entries.sort((a, b) => a[1] - b[1])

for (const kvp of entries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`)
}