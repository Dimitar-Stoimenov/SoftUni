(() => {
    String.prototype.ensureStart = function (str = '') {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str = '') {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        // if (!this.length) {
        //     return false;
        // };

        // return true;

        return !this.length;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        };

        if (this.length < n) {
            return this.toString();
        };

        if (this.length == n) {
            return this.toString();
        }

        let lastFoundSpaceIndex = this.lastIndexOf(' ');

        if (lastFoundSpaceIndex < 0) {
            if (this.length > n) {
                return this.toString().substr(0, n - 3) + '...';
            } else if (this.length < n - 3) {
                return this.toString() + '...';
            };
        } else if (lastFoundSpaceIndex > n - 3) {
            let newWord = this.toString().substr(0, n);
            lastFoundSpaceIndex = newWord.lastIndexOf(' ');

            if (lastFoundSpaceIndex < 0) {
                return newWord.substr(0, n - 3) + '...';
            } else if (lastFoundSpaceIndex > n - 3) {
                let newWord = this.toString().substr(0, n - 3);
                lastFoundSpaceIndex = newWord.lastIndexOf(' ');
            };

            return this.toString().substring(0, lastFoundSpaceIndex) + "...";

        } else if (lastFoundSpaceIndex < n - 3) {
            return this.toString().substr(0, n - 3) + '...';
        }

        return this.toString();
    };

    String.format = function (str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key);
        });
        return str;
    };
})();


let str = 'the quick brown fox jumps over the lazy dog';
str = str.truncate(10);
console.log(str);