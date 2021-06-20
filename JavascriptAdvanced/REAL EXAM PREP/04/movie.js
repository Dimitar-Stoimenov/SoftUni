class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.profit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        let screeningCheck = this.screenings.findIndex(x => (x.hall == hall && x.date == date));

        if (screeningCheck == -1) {
            this.screenings.push({ date, hall, description });
            return `New screening of ${this.movieName} is added.`
        } else {
            throw new Error(`Sorry, ${hall} is not available on ${date}`);
        }
    }

    endScreening(date, hall, soldTickets) {
        let screeningCheck = this.screenings.findIndex(x => (x.hall == hall && x.date == date));

        if (screeningCheck == -1) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        } else {
            let currentProfit = Number(soldTickets) * this.ticketPrice;
            this.profit += currentProfit;
            this.totalSoldTickets += soldTickets;
            this.screenings.splice(screeningCheck, 1);

            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit.toFixed(0)}`;
        }
    }

    toString() {
        let output = `${this.movieName} full information:
Total profit: ${this.profit.toFixed(0)}$
Sold Tickets: ${this.totalSoldTickets}`;

        if (this.screenings.length == 0) {
            output += '\nNo more screenings!'
        } else {
            output += '\nRemaining film screenings:';

            this.screenings
                .sort((a, b) => (a.hall).localeCompare(b.hall))
                .forEach(x => output += `\n${x.hall} - ${x.date} - ${x.description}`);
        }

        return output;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
m.newScreening('October 2, 2020', 'IMAX 3D', `3D`);
m.newScreening('October 3, 2020', 'Main', `regular`);
m.newScreening('October 4, 2020', 'IMAX 3D', `3D`);
m.endScreening('October 2, 2020', 'IMAX 3D', 150);
m.endScreening('October 3, 2020', 'Main', 78);
console.log(m.toString());

// let outputFirst = `Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// IMAX 3D - October 4, 2020 - 3D`;
// expect(m.toString()).to.be.equal(outputFirst, 'Incorrect output');

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

//         let outputSecond = `Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// 235 - October 4, 2020 - regular
// 235 - October 3, 2020 - regular
// IMAX 3D - October 4, 2020 - 3D
// Main - October 5, 2020 - regular
// Main - October 4, 2020 - regular`;
//         expect(m.toString()).to.be.equal(outputSecond, 'Incorrect output');