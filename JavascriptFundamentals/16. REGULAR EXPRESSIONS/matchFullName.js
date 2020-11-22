function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let name = pattern.exec(input)
    let output = name[0] + ' '

    name = pattern.exec(input)

    while (name) {
        output += name[0] + ' '
        name = pattern.exec(input)        
    }

    console.log(output.trimEnd())
}

solve(
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
)