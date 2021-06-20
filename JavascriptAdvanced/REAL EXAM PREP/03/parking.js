class Parking {
    constructor(capacity) {
        this.capacity = capacity,
            this.vehicles = []
    }

    addCar(carModel, carNumber) {
        if (this.capacity < 1) {
            throw new Error('Not enough parking space.')
        }

        this.vehicles.push({ carModel, carNumber, payed: false });
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let index = this.vehicles.findIndex(x => x.carNumber == carNumber);

        if (index == -1) {
            throw new Error("The car, you're looking for, is not found.");
        }

        let car = this.vehicles[index];

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.capacity++;
            this.vehicles.splice(index, 1);
            return `${carNumber} left the parking lot.`
        }
    }

    pay(carNumber) {
        let index = this.vehicles.findIndex(x => x.carNumber == carNumber);

        if (index == -1) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        let car = this.vehicles[index];

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            this.vehicles[index].payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            let output = `The Parking Lot has ${this.capacity} empty spots left.\n`;
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(v => {
                    output += `${v.carModel} == ${v.carNumber} - ${v.payed ? 'Has payed' : 'Not payed'}\n`;
                })

            return output.trim();
        } else {
            let index = this.vehicles.findIndex(x => x.carNumber == carNumber);

            if (index == -1) {
                throw new Error(`${carNumber} is not in the parking lot.`);
            }

            let car = this.vehicles[index];
            let carModel = car.carModel;

            return `${carModel} == ${carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Zaolvo t600", "aX3691CA"));
console.log(parking.addCar("Zolvo t600", "TX3691CA"));
console.log(parking.addCar("Aolvo t600", "AA1111CA"));
console.log(parking.pay("TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.removeCar("TX3691CA"));
