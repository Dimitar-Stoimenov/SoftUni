function solve(arr) {

    let result = "no"

    for (let index = 0; index < arr.length; index++) {
        let leftSum = 0
        let rightSum = 0

        for (let i = 0; i < index; i++) {
            let nextLeftNumber = arr[i]
            leftSum += nextLeftNumber
        }

        for (let i = index + 1; i < arr.length; i++) {
            let nextRightNumber = arr[i]
            rightSum += nextRightNumber
        }

        if (leftSum === rightSum) {
            result = index
            break
        }

    }

    console.log(result)
}

solve([1, 2, 3, 3])