export const viewsWeek = [
  {
    day: "Sat",
    Views: 20,
  },
  {
    day: "Sun",
    Views: 43,
  },
  {
    day: "Mon",
    Views: 173,
  },
  {
    day: "Tue",
    Views: 76,
  },
  {
    day: "Wed",
    Views: 112,
  },
  {
    day: "Thur",
    Views: 192,
  },
  {
    day: "Fri",
    Views: 180,
  },
];

export const viewsDay = [
  {
    hour: "00:00",
    Views: 0,
  },
  {
    hour: "01:00",
    Views: 0,
  },
  {
    hour: "02:00",
    Views: 0,
  },
  {
    hour: "03:00",
    Views: 0,
  },
  {
    hour: "04:00",
    Views: 0,
  },
  {
    hour: "05:00",
    Views: 0,
  },
  {
    hour: "06:00",
    Views: 0,
  },
  {
    hour: "07:00",
    Views: getRandomNumber(1, 3),
  },
  {
    hour: "08:00",
    Views: getRandomNumber(1, 5),
  },
  {
    hour: "09:00",
    Views: getRandomNumber(1, 9),
  },
  {
    hour: "10:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "11:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "12:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "13:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "14:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "15:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "16:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "17:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "18:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "19:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "20:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "21:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "22:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "23:00",
    Views: getRandomNumber(1, 35),
  },
];

export const viewsWeek2 = [
  {
    day: "Sat",
    Views: 167,
  },
  {
    day: "Sun",
    Views: 94,
  },
  {
    day: "Mon",
    Views: 81,
  },
  {
    day: "Tue",
    Views: 152,
  },
  {
    day: "Wed",
    Views: 35,
  },
  {
    day: "Thur",
    Views: 205,
  },
  {
    day: "Fri",
    Views: 128,
  },
];

export const viewsDay2 = [
  {
    hour: "00:00",
    Views: 0,
  },
  {
    hour: "01:00",
    Views: 0,
  },
  {
    hour: "02:00",
    Views: 0,
  },
  {
    hour: "03:00",
    Views: 0,
  },
  {
    hour: "04:00",
    Views: 0,
  },
  {
    hour: "05:00",
    Views: 0,
  },
  {
    hour: "06:00",
    Views: 0,
  },
  {
    hour: "07:00",
    Views: getRandomNumber(1, 3),
  },
  {
    hour: "08:00",
    Views: getRandomNumber(1, 5),
  },
  {
    hour: "09:00",
    Views: getRandomNumber(1, 9),
  },
  {
    hour: "10:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "11:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "12:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "13:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "14:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "15:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "16:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "17:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "18:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "19:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "20:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "21:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "22:00",
    Views: getRandomNumber(1, 35),
  },
  {
    hour: "23:00",
    Views: getRandomNumber(1, 35),
  },
];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}