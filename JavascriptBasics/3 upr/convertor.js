function solve(a, b, c) {
    let chislo = Number(a)
    let vhod = b
    let izhod = c

    if (vhod === 'mm') {
        if (izhod === 'cm') {
            chislo = chislo / 10
        } else if (izhod === 'm') {
            chislo = chislo / 1000
        }
    } else if (vhod === 'cm') {
        if (izhod === 'mm') {
            chislo = chislo * 10
        } else if (izhod === 'm') {
            chislo = chislo / 100
        }
    } else if (vhod === 'm') {
        if (izhod === 'mm') {
            chislo = chislo * 1000
        } else if (izhod === 'cm') {
            chislo = chislo * 100
    }   
    }
    console.log(chislo.toFixed(3))
}
solve('12', 'mm', 'm')