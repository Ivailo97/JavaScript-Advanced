function solve(ticketsData, sortCriteria) {

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let comparators = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return ticketsData.map(x => x.split('|')).map(x => new Ticket(x[0], Number(x[1]), x[2]))
        .sort(comparators[sortCriteria])
}


console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));