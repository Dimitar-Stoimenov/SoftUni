function architect(name, projects){
    let name1 = name
    let projects1 = Number(projects)
    let hours = projects1 * 3
    console.log(`The architect ${name1} will need ${hours} hours to complete ${projects1} project/s.`)
}
architect('Sanya', '9')