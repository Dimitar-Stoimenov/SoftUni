function solve(input) {
    let goal = 10000
    let totalSteps = 0
    let index = 0

    while (index < input.length) {

        if (input[index] === 'Going home') {
            totalSteps += +input[++index]
            break
        }

        totalSteps += +input[index++]

        if (totalSteps >= goal) {
            break
        }
    }

    if (totalSteps < goal) {
        console.log(`${goal - totalSteps} more steps to reach goal.`)
    } else {
        console.log(`Goal reached! Good job!`)
        console.log(`${totalSteps - goal} steps over the goal!`)
    }
}

solve(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])



