function solve(a, b, c) {
    let chislo = Number(a)
    let vhod = b
    let izhod = c

    if (vhod === 'm'){
        chislo = chislo
    } else if (vhod === 'cm') {
        chislo = chislo / 100
    } else if (vhod === 'mm') {
        chislo = chislo / 1000
    }

    if (izhod === 'm') {
        chislo = chislo
    } else if (izhod === 'cm') {
        chislo = chislo * 100
    } else if (izhod === 'mm') {
        chislo = chislo * 1000
    }
    console.log(chislo.toFixed(3))
}

solve('12', 'm', 'cm')