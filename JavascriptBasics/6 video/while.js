function solve(input) {

    // let index = 0
    // while (true) {
    //     let command = input[index]

    //     if (command === "Stop") {
    //         break
    //     }

    //     console.log(command)
    //     index++          
    // }

    let index = 0
    let text = input[index++]

    while (text !== 'Stop') {        
        console.log(text)
        text = input[index++]
    }
}

solve(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop', 'AfterStop', 'Europe', 'HelloWorld'])