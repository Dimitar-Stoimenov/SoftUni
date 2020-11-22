function login(input) {
    let index = 0
    let username = input[index++]
    let password = ''
    let inputLine = input[index++]

    for (let j = username.length - 1; j >= 0; j--) {
        password += username[j] + ''
    }

    for (let i = 1; i <= 4; i++) {
        if (inputLine === password) {
            console.log(`User ${username} logged in.`)
            break
        } else if (i === 4) {
            console.log(`User ${username} blocked!`)
        } else {
            console.log(`Incorrect password. Try again.`)
        }

        inputLine = input[index++]
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny', 'agugu'])