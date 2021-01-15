solution = {
    add: (vec1, vec2) => {
        let [x1, y1] = [...vec1];
        let [x2, y2] = [...vec2];
        return [x1 + x2, y1 + y2];
    },

    multiply: (vec1, scalar) => {
        let [x1, y1] = [...vec1];
        return [x1 * scalar, y1 * scalar];
    },

    length: (vec1) => {
        let [x1, y1] = [...vec1];
        let result = Math.sqrt(x1 ** 2 + y1 ** 2);
        return result;
    },

    dot: (vec1, vec2) => {
        let [x1, y1] = [...vec1];
        let [x2, y2] = [...vec2];
        return x1 * x2 + y1 * y2;
    },

    cross: (vec1, vec2) => {
        let [x1, y1] = [...vec1];
        let [x2, y2] = [...vec2];
        return x1 * y2 - y1 * x2
    },
}

solution.length([3, -4]);
