let props = [
    { name: 'Pesho' },
    { age: 22, name: 'Gosho' }, //при конкатенирането ще се презапише
    { height: 190, name: 'Stamat' }, // отново презаписва
    { eyeColor: 'blue' },
];

let person = props.reduce((acc, x) => {
    return { ...acc, ...x }
    // return Object.assign({}, acc, x); - може и по този начин - създава нов обект, и в него се наливат пропъртитата на други обекти, като се презаписват в зависимост от реда им
}, {});

console.log(person);