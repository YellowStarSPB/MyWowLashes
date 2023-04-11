const date = {
    current: [
        { time: [], day: 1 },
        { time: ['10:00'], day: 2 },
        { time: ['10:00', '13:00', '16:00'], day: 3 },
        { time: ['10:00', '13:00'], day: 4 },
        { time: ['10:00', '13:00', '16:00'], day: 5 },
        { time: ['10:00', '13:00', '16:00'], day: 6 },
        { time: ['10:00', '13:00', '16:00'], day: 7 },
        { time: ['10:00', '16:00'], day: 8 },
        { time: ['10:00', '13:00', '16:00'], day: 9 },
        { time: ['13:00', '16:00'], day: 10 },
        { time: ['13:00', '16:00'], day: 11 },
        { time: ['10:00', '13:00'], day: 12 },
        { time: ['10:00', '13:00', '16:00'], day: 13 },
        { time: [], day: 14 },
        { time: ['10:00', '13:00', '16:00'], day: 15 },
        { time: ['13:00', '16:00'], day: 16 },
        { time: ['10:00', '16:00'], day: 17 },
        { time: ['10:00', '13:00', '16:00'], day: 18 },
        { time: ['10:00'], day: 19 },
        { time: [], day: 20 },
        { time: [], day: 21 },
        { time: [], day: 22 },
        { time: [], day: 23 },
        { time: ['10:00', '13:00', '16:00'], day: 24 },
        { time: ['10:00', '13:00', '16:00'], day: 25 },
        { time: ['10:00', '16:00'], day: 26 },
        { time: ['10:00', '13:00', '16:00'], day: 27 },
        { time: ['10:00', '13:00', '16:00'], day: 28 },
        { time: [], day: 29 },
        { time: ['10:00', '13:00', '16:00'], day: 30 },
    ],
    next: [
        { time: ['10:00', '13:00'], day: 1 },
        { time: ['10:00'], day: 2 },
        { time: ['10:00', '13:00', '16:00'], day: 3 },
        { time: ['10:00', '13:00'], day: 4 },
        { time: ['10:00', '13:00', '16:00'], day: 5 },
        { time: ['10:00', '13:00', '16:00'], day: 6 },
        { time: ['10:00', '13:00', '16:00'], day: 7 },
        { time: ['10:00', '16:00'], day: 8 },
        { time: ['10:00', '13:00', '16:00'], day: 9 },
        { time: [], day: 10 },
        { time: ['10:00', '13:00', ], day: 11 },
        { time: ['10:00', '13:00'], day: 12 },
        { time: ['10:00', '13:00', '16:00'], day: 13 },
        { time: [], day: 14 },
        { time: ['10:00', '13:00', '16:00'], day: 15 },
        { time: ['13:00', '16:00'], day: 16 },
        { time: ['10:00', '16:00'], day: 17 },
        { time: ['10:00', '13:00', '16:00'], day: 18 },
        { time: [], day: 19 },
        { time: [], day: 20 },
        { time: [], day: 21 },
        { time: [], day: 22 },
        { time: [], day: 23 },
        { time: ['10:00', '13:00', '16:00'], day: 24 },
        { time: ['10:00',], day: 25 },
        { time: ['10:00', '16:00'], day: 26 },
        { time: ['10:00', '13:00', '16:00'], day: 27 },
        { time: ['10:00'], day: 28 },
        { time: [], day: 29 },
        { time: ['10:00', '13:00', '16:00'], day: 30 },
        { time: ['10:00'], day: 31 },
    ],
    error: ''
}


/* 
const day = [
    { id: 1, day: 1, },
    { id: 2, day: 2, },
    { id: 3, day: 3, },
    { id: 4, day: 4, },
    { id: 5, day: 5, },
    { id: 6, day: 6, },
    { id: 7, day: 7, },
    { id: 8, day: 8, },
    { id: 9, day: 9, },
    { id: 10, day: 10, },
    { id: 11, day: 11, },
    { id: 12, day: 12, },
    { id: 13, day: 13, },
    { id: 14, day: 14, },
    { id: 15, day: 15, },
    { id: 16, day: 16, },
    { id: 17, day: 17, },
    { id: 18, day: 18, },
    { id: 19, day: 19, },
    { id: 20, day: 20, },
    { id: 21, day: 21, },
    { id: 22, day: 22, },
    { id: 23, day: 23, },
    { id: 24, day: 24, },
    { id: 25, day: 25, },
    { id: 26, day: 26, },
    { id: 27, day: 27, },
    { id: 28, day: 28, },
    { id: 29, day: 29, },
    { id: 30, day: 30, },
    { id: 31, day: 31 }
] */
export { date }

const getDaysInMonth = (month, year) => {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date).getDate());
        date.setDate(date.getDate() + 1);
    }
    return days;
}

const currentMonth = getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
const secondMonth = getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear())

export { currentMonth, secondMonth }