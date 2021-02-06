function result() {
    function Figure() {
        this.units = 'cm';
    }

    Figure.prototype.changeUnits = function (unit) {
        switch (this.units) {
            case 'cm':
                if (unit == 'mm') {
                    this.units = 'mm';
                    this.radius *= 10;
                    this.width *= 10;
                    this.height *= 10;
                    this.area *= 100
                } else if (unit == 'm') {
                    this.units = 'm';
                    this.radius /= 100;
                    this.width /= 100;
                    this.height /= 100;
                    this.area /= 10000;
                }
                break;
            case 'mm':
                if (unit == 'cm') {
                    this.units = 'cm';
                    this.radius /= 10;
                    this.width /= 10;
                    this.height /= 10;
                    this.area /= 100
                } else if (unit == 'm') {
                    this.units = 'm';
                    this.radius /= 1000;
                    this.width /= 1000;
                    this.height /= 1000;
                    this.area /= 1000000;
                }
                break;
            case "m":
                if (unit == 'cm') {
                    this.units = 'cm';
                    this.radius *= 100;
                    this.width *= 100;
                    this.height *= 100;
                    this.area *= 10000;
                } else if (unit == 'm') {
                    this.units = 'm';
                    this.radius *= 1000;
                    this.width *= 1000;
                    this.height *= 1000;
                    this.area *= 1000000;
                }
                break;
        }
    }

    function Circle(radius, units) {
        Figure.call(this);
        this.radius = radius;
        this.area = Math.PI * this.radius * this.radius;

        if (units == 'mm') {
            this.units = 'mm';
            this.radius *= 10;
            this.area *= 100
        } else if (units == 'm') {
            this.units = 'm';
            this.radius /= 100;
            this.area /= 10000;
        }

        this.toString = function () {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    Circle.prototype = Object.create(Figure.prototype);

    function Rectangle(width, height, units) {
        Figure.call(this);
        this.width = width;
        this.height = height;
        this.area = width * height

        if (units == 'mm') {
            this.units = 'mm';
            this.width *= 10;
            this.height *= 10;
            this.area *= 100
        } else if (units == 'm') {
            this.units = 'm';
            this.width /= 100;
            this.height /= 100;
            this.area /= 10000;
        }

        this.toString = function () {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    Rectangle.prototype = Object.create(Figure.prototype);

    return { Figure, Circle, Rectangle }
}

let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200

r.toString() // "Figures units: mm Area: 1200 - width: 30, height: 40", "4");
r.changeUnits('cm');
console.log(r.area);

r.toString()// "Figures units: cm Area: 12 - width: 3, height: 4", "5");
