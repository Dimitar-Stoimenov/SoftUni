function solve(input) {
    let propList = JSON.parse(input);
    let result = {}

    propList.forEach(x => {
        Object.assign(result, x)
    })

    return result
}

solve(
    `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`
)