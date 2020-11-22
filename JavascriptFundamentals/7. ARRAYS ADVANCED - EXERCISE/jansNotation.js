function solve(input) {
    let numbersArray = []
    let notEnoughOperandsCheck = false

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '+':
                if (numbersArray.length >= 2) {
                    let nums = numbersArray.splice(numbersArray.length - 2)
                    numbersArray.push(nums[0] + nums[1])
                } else {
                    notEnoughOperandsCheck = true
                }
                break;
            case '-':
                if (numbersArray.length >= 2) {
                    let nums = numbersArray.splice(numbersArray.length - 2)
                    numbersArray.push(nums[0] - nums[1])
                } else {
                    notEnoughOperandsCheck = true
                }
                break;
            case '/':
                if (numbersArray.length >= 2) {
                    let nums = numbersArray.splice(numbersArray.length - 2)
                    numbersArray.push(nums[0] / nums[1])
                } else {
                    notEnoughOperandsCheck = true
                }
                break;
            case "*":
                if (numbersArray.length >= 2) {
                    let nums = numbersArray.splice(numbersArray.length - 2)
                    numbersArray.push(nums[0] * nums[1])
                } else {
                    notEnoughOperandsCheck = true
                }
                break;
            default:
                numbersArray.push(input[i])
                break;
        }

        if (notEnoughOperandsCheck) {
            break
        }
    }

    if (!notEnoughOperandsCheck) {

        if (numbersArray.length == 1) {
            console.log(numbersArray[0])
        } else if (numbersArray.length < 1) {
            console.log(`Error: not enough operands!`)
        } else {
            console.log(`Error: too many operands!`)
        }
    } else {
        console.log(`Error: not enough operands!`)
    }
}

solve(
    [15,
        '/']
)