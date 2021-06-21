function solve(number, op1, op2, op3, op4, op5) {
    let num = Number(number);

    doOperation(op1);
    doOperation(op2);
    doOperation(op3);
    doOperation(op4);
    doOperation(op5);

    function doOperation(op) {
        switch (op) {
            case 'chop':
                num /= 2
                break;
            case 'dice':
                num = Math.sqrt(num)
                break;
            case 'spice':
                num += 1
                break;
            case 'bake':
                num *= 3
                break;
            case 'fillet':
                num = num * 100 * 0.8 / 100
                break;
        }

        console.log(num);
    }
}

solve(
    '9', 'chop', 'chop', 'chop', 'chop', 'chop'
)