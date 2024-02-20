var ticket_array = [
    'Philapelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var criteria = 'destinaton';
function ticketManager(tickets, criteria) {
    var sortedArr;
    var destinaton;
    var price;
    var status;
    tickets.forEach(function (ticket) {
        var _a;
        _a = ticket.split('|'), destinaton = _a[0], price = _a[1], status = _a[2];
        var currentTicket = [destinaton, price, status];
        currentTicket.push(sortedArr);
    });
    sortedArr.forEach(function (el) {
        console.log(el);
    });
}
ticketManager(ticket_array, criteria);
