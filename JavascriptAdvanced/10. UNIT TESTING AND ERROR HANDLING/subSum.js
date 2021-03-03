function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length == 0) {
        return 0;
    }

    arr = arr.map(x => Number(x));

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let result = arr
        .slice(startIndex, endIndex + 1)
        .reduce((acc, x) => acc + x)

    return result;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))