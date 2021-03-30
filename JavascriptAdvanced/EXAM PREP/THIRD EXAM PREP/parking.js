class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error("Not enough parking space.")
        }

        let vehicleObj = { carModel, carNumber, payed: false };
        this.vehicles.push(vehicleObj);
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);

        if (carIndex >= 0) {
            if (this.vehicles[carIndex].payed === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            } else {
                this.vehicles.splice(carIndex, 1);
                this.capacity++
                return `${carNumber} left the parking lot.`
            }
        } else {
            throw new Error("The car, you're looking for, is not found.");
        }
    }

    pay(carNumber) {
        let carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);

        if (carIndex < 0) {
            throw new Error(`${this.vehicles[carIndex].carNumber} is not in the parking lot.`)
        }

        if (this.vehicles[carIndex].payed == true) {
            throw new Error(`${this.vehicles[carIndex].carNumber}'s driver has already payed his ticket.`)
        } else {
            this.vehicles[carIndex].payed = true;
            return `${this.vehicles[carIndex].carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                    .sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
                    .join('\n'),
            ].join('\n')
        }

        let car = this.vehicles.find(car => car.carNumber === carNumber);
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
    }
}