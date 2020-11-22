function solve(input) {
    let contacts = {}

    for (let element of input) {
        element = element.split(' ')
        contacts[element[0]] = element[1]
    }

    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`)        
    } 
}

solve(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']     
)