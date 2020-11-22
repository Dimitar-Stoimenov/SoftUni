function solve(input) {

    let myMoney = Number(input[0]) * 100;
    let counter = 0;

    while (myMoney !== 0) {

        if (myMoney >= 200) {
            counter++
            myMoney -= 200;
        } else if (myMoney >= 100) {
            counter++
            myMoney -= 100
        } else if (myMoney >= 50) {
            counter++
            myMoney -= 50;
        } else if (myMoney >= 20) {
            counter++
            myMoney -= 20
        } else if (myMoney >= 10) {
            counter++
            myMoney -= 10;
        } else if (myMoney >= 5) {
            counter++
            myMoney -= 5
        } else if (myMoney >= 2) {
            counter++
            myMoney -= 2;
        } else if (myMoney >= 1) {
            counter++
            myMoney -= 1
        }
    }
    
    console.log(counter)
}

solve(['4.01'])