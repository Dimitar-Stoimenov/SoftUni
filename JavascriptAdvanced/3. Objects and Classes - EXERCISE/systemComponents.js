function solve(input) {
    let obj = {}

    input.forEach(line => {
        let [system, component, subcomponent] = line.split(' | ')

        if (!obj[system]) {
            obj[system] = { [component]: [subcomponent] }
        } else if (!obj[system][component]) {
            obj[system][component] = []
            obj[system][component].push(subcomponent)
        } else {
            obj[system][component].push(subcomponent)
        }
    })

    let sortedSystems = Object.entries(obj).sort((a, b) => {
        if (Object.keys(b[1]).length === Object.keys(a[1]).length) {
            return a[0].localeCompare(b[0])
        } else {
            return Object.keys(b[1]).length - Object.keys(a[1]).length
        }
    })

    sortedSystems.forEach(system => {
        let systemName = system[0]
        console.log(systemName)

        let sortedComponents = Object.entries(system[1]).sort((a, b) => {
            return b[1].length - a[1].length
        })

        sortedComponents.forEach(component => {
            console.log(`|||${component[0]}`)
            component[1].forEach(x => {
                console.log(`||||||${x}`)
            })
        })
    })
}

solve(
    ['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']
)