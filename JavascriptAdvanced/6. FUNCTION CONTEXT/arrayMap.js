function arrayMap(array, func) {
    let mappedArray = array.reduce((a, x) => {
        a.push(func(x))

        return a
    }, []);

    return mappedArray
}

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]