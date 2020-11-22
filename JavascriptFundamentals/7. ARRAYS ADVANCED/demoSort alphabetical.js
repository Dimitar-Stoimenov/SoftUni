let names = ['Zdravko', 'Angel', 'boyko', 'aneta']

let compareNames = function(a, b) {
    return a.localeCompare(b)
}

// или
// let compareNames = ((a, b) => a.localeCompare(b))

console.log(names);

names.sort(compareNames)

console.log(names)

// let names = ['Zdravko', 'Angel', 'boyko', 'aneta']

// или най-кратко:
// names.sort((a, b) => a.localeCompare(b))