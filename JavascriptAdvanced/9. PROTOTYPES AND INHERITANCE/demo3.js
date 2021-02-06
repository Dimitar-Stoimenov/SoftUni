let student2 = {
    name: 'Petkancho',
    hasPen: true,

    write: function () {
        console.log(`My name is ${this.name}`);
    },
}

let student1 = {
    name: 'Ivancho',
}

Object.setPrototypeOf(student1, student2);
// може да се създава и с Object.create(student2) - като това ще направи нов празен обект, с прототип student2

console.log(student1.hasPen);

Object.getPrototypeOf(student1); //връща прототипа - student2;