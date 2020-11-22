function solve(input) {
    let pattern = /[+]359([ -])2\1\d{3}\1\d{4}\b/g

    let validPhones = []

    let phone = pattern.exec(input)

    while (phone) {        
        validPhones.push(phone[0])
        phone = pattern.exec(input)
    }

    console.log(validPhones.join(', ').trimEnd())
}

solve(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
)