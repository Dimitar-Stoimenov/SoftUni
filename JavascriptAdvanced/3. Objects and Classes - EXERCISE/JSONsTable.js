function solve(input) {
    let output = '<table>\n'

    let employees = []
    input.forEach(line => employees.push(JSON.parse(line)))

    employees.forEach(e => {
        output += '\t<tr>\n'
        output += `\t\t<td>${e.name}</td>\n`
        output += `\t\t<td>${e.position}</td>\n`
        output += `\t\t<td>${e.salary   }</td>\n`
        output += '\t</tr>\n'
    })

    output += '</table>'

    console.log(output);
}

solve(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']
)