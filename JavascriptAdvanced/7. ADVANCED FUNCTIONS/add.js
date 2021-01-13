function solution(num) {
    return function (a) {
        return num + a
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));