function solve(input) {
    let result = input.map(([width, height]) => ({
        width,
        height,
        area: () => width * height,
        compareTo(rect) {
            let res = rect.area() - this.area();

            return res == 0
                ? rect.width - this.width
                : res
        },
    }));

    result.sort((a, b) => {
        return a.compareTo(b);
    });

    return result;
};

solve(
    [[10, 5], [5, 12]]
);