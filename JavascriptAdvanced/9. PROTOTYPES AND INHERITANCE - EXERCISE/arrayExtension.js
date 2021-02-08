(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];

        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];

        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.sum = function () {
        try {
            return this.reduce((acc, n) => acc += n)
        } catch (error) {
            return 0
        }
    };

    Array.prototype.average = function () {
        return this.sum() / this.length
    };
}());

var testArray = [1, 5, 100];

console.log(Array.prototype.hasOwnProperty('last'))//(true, "Couldn't find last() function");
console.log(testArray.last())//.to.equal(3, 'Incorrect last element');
console.log(testArray.average())