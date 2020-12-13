function solve(input, sortingCriteria) {
    let tickets = []

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = price,
                this.status = status
        }
    }

    input.forEach(line => {
        let [destination, price, status] = line.split('|')

        tickets.push(new Ticket(destination, Number(price), status))
    })

    let result = null

    switch (sortingCriteria) {
        case 'destination':
            result = tickets.sort((a, b) => {
                return (a[sortingCriteria]).localeCompare(b[sortingCriteria])
            })
            break;
        case 'price':
            result = tickets.sort((a, b) => {
                return (a[sortingCriteria]) - (b[sortingCriteria])
            })
            break;
        case 'status':
            result = tickets.sort((a, b) => {
                return (a[sortingCriteria]).localeCompare(b[sortingCriteria])
            })
            break;
    }

    return result;
}

solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)