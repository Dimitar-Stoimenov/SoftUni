function solve(input) {
    let startingYeld = input;
    let days = 0;
    let produces = 0;
 if (startingYeld < 100){
        console.log(days);
        console.log(produces);
        return;
    }
  
    while (startingYeld >= 100) {
        produces += startingYeld - 26;
        startingYeld -= 10;
        days++;
    }
   
    produces -= 26;
    console.log(days);
    console.log(produces)
}
solve(115);