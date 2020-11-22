function solve(input) {
    class Employee {
        constructor(name) {
            this.name = name
            this.personalNumber = name.length
        }
    }

    let employeeArray = []

    input.forEach(x => {
        let person = new Employee(x)
        employeeArray.push(person)
    })
    
    employeeArray.forEach(x => {
        console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`);        
    })
}

solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)