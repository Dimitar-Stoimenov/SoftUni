let students = [
    { name: 'Pesho', score: 1 },
    { name: 'Gosho', score: 2 },
    { name: 'Pesho', score: 1 },
    { name: 'Gosho', score: 3 },
    { name: 'Stamat', score: 2 },
    { name: 'Mariya', score: 5 },
];

function aggregate(acc, currentStudent) {
    let student = acc.find(x => x.name == currentStudent.name);

    if (student) {
        student.score += currentStudent.score;
    } else {
        acc.push(currentStudent);
    };

    return acc;
};

let result = students.reduce(aggregate, []);

console.log(result);