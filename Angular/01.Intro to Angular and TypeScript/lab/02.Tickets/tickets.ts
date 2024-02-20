type Ticket = {
    destination: string;
    price: number;
    status: string;
};

function parseTicketDescription(ticketDescription: string): Ticket {
    const [destination, priceStr, status] = ticketDescription.split('|');
    const price = parseFloat(priceStr);
    return { destination, price, status };
}

function sortTickets(tickets: Ticket[], criteria: string): Ticket[] {
    switch (criteria) {
        case 'destination':
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price':
            return tickets.sort((a, b) => a.price - b.price);
        case 'status':
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
        default:
            return tickets;
    }
}

function manageTickets(ticketDescriptions: string[], sortingCriteria: string): Ticket[] {
    const tickets: Ticket[] = ticketDescriptions.map(parseTicketDescription);
    return sortTickets(tickets, sortingCriteria);
}

// Example usage:
const ticketDescriptions: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
const sortingCriteria: string = 'destination';

const sortedTickets = manageTickets(ticketDescriptions, sortingCriteria);
console.log(sortedTickets);
