
export const compareViewsDay = [
    {
        hour: "00:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "01:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "02:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "03:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "04:00",
        Views: 0,
    },
    {
        hour: "05:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "06:00",
        Today: 0,
        Yesterday: 0
    },
    {
        hour: "07:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),
    },
    {
        hour: "08:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "09:00",
        Today: getRandomNumber(1, 10),
        Yesterday: getRandomNumber(1, 10),    },
    {
        hour: "10:00",
        Today: getRandomNumber(1, 13),
        Yesterday: getRandomNumber(1, 13),    },
    {
        hour: "11:00",
        Today: getRandomNumber(1, 17),
        Yesterday: getRandomNumber(1, 19),    },
    {
        hour: "12:00",
        Today: getRandomNumber(1, 26),
        Yesterday: getRandomNumber(1, 28),    },
    {
        hour: "13:00",
        Today: getRandomNumber(1, 42),
        Yesterday: getRandomNumber(1, 44),    },
    {
        hour: "14:00",
        Today: getRandomNumber(1, 35),
        Yesterday: getRandomNumber(1, 32),    },
    {
        hour: "15:00",
        Today: getRandomNumber(1, 22),
        Yesterday: getRandomNumber(1, 22),    },
    {
        hour: "16:00",
        Today: getRandomNumber(1, 19),
        Yesterday: getRandomNumber(1, 16),    },
    {
        hour: "17:00",
        Today: getRandomNumber(1, 14),
        Yesterday: getRandomNumber(1, 15),    },
    {
        hour: "18:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "19:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "20:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "21:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "22:00",
        Today: getRandomNumber(1, 6),
        Yesterday: getRandomNumber(1, 6),    },
    {
        hour: "23:00",
        Today: getRandomNumber(1, 3),
        Yesterday: getRandomNumber(1, 3),    },
];

export const compareViewsWeek = [
    {
        day: "Sat",
        Last_Week: 32,
        This_Week: 45,
    },
    {
        day: "Sun",
        Last_Week: 12,
        This_Week: 10,
    },
    {
        day: "Mon",
        Last_Week: 54,
        This_Week: 29,
    },
    {
        day: "Tue",
        Last_Week: 43,
        This_Week: 32,
    },
    {
        day: "Wed",
        Last_Week: 62,
        This_Week: 76,
    },
    {
        day: "Thur",
        Last_Week: 84,
        This_Week: 74,
    },
    {
        day: "Fri",
        Last_Week: 59,
        This_Week: 42,
    },
];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}