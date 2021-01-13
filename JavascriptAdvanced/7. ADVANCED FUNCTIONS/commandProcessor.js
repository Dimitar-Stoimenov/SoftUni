function solution() {
    let text = ''

    return {
        append: x => text += x,
        removeStart: number => text = text.substring(number),
        removeEnd: number => text = text.substring(0, text.length - number),
        print: () => console.log(text),
    };
};

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();