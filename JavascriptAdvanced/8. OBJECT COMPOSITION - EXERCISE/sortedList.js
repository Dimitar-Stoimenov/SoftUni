function result() {
    let array = [];
    let result = {
        sortedList: () => {
            result.size = array.length;
            return array.sort((a, b) => a - b);
        },
        add: (element = '') => {
            array.push(element);
            result.sortedList();
        },
        remove: (element = '') => {
            // let x = array.splice(array.indexOf(element), 1)
            let x = array.filter((num, index) => index != element);
            array = x;
            result.sortedList();
        },
        get: (index = '') => {
            return array[index];
        },
        size: array.length,
    };

    return result;
}

result = result();

var myList = result;
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");
console.log(myList.hasOwnProperty('size'))

myList.add(5);
// expect(myList.get(0)).to.equal(5, "Element wasn't added");
console.log(myList.get(0))


myList.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
console.log(myList.get(0))

myList.remove(0);
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");
console.log(myList.get(0))
console.log(myList.size)