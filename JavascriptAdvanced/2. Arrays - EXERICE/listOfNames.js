function solve(array) {
    let counter = 1;

    array.sort((a,b) => a.localeCompare(b));
    array.forEach(x => console.log(`${counter++}.${x}`));
}


solve(
    ["John", "Bob", "Christina", "Ema"]
)