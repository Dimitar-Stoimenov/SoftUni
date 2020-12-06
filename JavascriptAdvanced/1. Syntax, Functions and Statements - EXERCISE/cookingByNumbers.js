function solve(input) {
    let number = Number(input.shift())

    for (let line of input) {
        switch (line) {
            case 'chop':
                number /= 2
                break;
            case 'dice':
                number = Math.sqrt(number)
                break;
            case 'spice':
                number += 1
                break;
            case 'bake':
                number *= 3
                break;
            case 'fillet':
                number = number * 100 * 0.8 / 100
                break;
        }

        console.log(number);
    }
}

solve(
    ['9', 'dice', 'spice', 'chop', 'bake', 'fillet']
)