function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = Number(capacity);
            this.name = name;
            this.events = [];
            this.allPerformers = [];
        }

        hallEvent(title) {
            let index = this.events.findIndex(x => x == title);

            if (index != -1) {
                throw new Error('This event is already added!');
            } else {
                this.events.push(title);
                return 'Event is added.';
            }
        }

        close() {
            this.allPerformers = [];
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            let output = `${this.name} hall - ${this.capacity}\n`;

            if (this.events.length > 0) {
                output += `Events: ${this.events.join(', ')}`;
            }

            return output.trim();
        }
    }


    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + "Аll screenings are over.";
        }

        toString() {
            let result = super.toString();

            result += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;

            return result;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
        }

        hallEvent(title, performers) {
            if (this.events.includes(title)) {
                throw new Error("This event is already added!");
            } else {
                super.hallEvent(title);

                this.allPerformers.push(performers);

                return "Event is added.";
            }
        }

        close() {
            return super.close() + "Аll performances are over.";
        }

        toString() {
            let result = super.toString();

            if (this.events.length > 0) {
                result += '\n';
                result += `Performers: ${this.allPerformers.join(', ')}.`;
            }

            return result;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}

let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close());

let mov = new classes.MovieTheater(20, 'Mov1', 50);
console.log(mov.hallEvent('Maverick 2'));
console.log(mov.close());
console.log(mov.toString());
