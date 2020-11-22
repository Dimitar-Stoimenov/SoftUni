function greaterNum(a, b){
    let firstNum = Number(a)
    let secondNum = Number(b)

    // if(firstNum>secondNum) {
    //     console.log(firstNum)
    // } else {
    //     console.log(secondNum)
    // }

    let biggerNum = Math.max(firstNum, secondNum)

    console.log(biggerNum)
}

greaterNum('11', '45')