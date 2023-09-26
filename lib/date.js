const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

//  Returns today's date as a formatted string
//  example: 'september 26, 2023'

function formatDate(date) {
    const month = months[date.getMonth()];
    const day = date.getDay();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

module.exports = { formatDate}