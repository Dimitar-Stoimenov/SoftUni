function table(num) {
    num = Number(num)

    for (let index = 1; index <= 10; index++) {
        let result = index * num
        console.log(`${index} * ${num} = ${result}`)
    }
}

table('5')