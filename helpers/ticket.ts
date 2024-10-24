export const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

export function generateDate() {
  let dates = [];
  let today = new Date();

  for (let i = 0; i < 7; i++) {
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);

    let year = nextDay.getFullYear();
    let month = (nextDay.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    let day = nextDay.getDate().toString().padStart(2, '0');

    dates.push(`${year}-${month}-${day}`);
  }

  return dates;
}

//1184918
export const moviesData: any = {
  '1184918': {
    '2024-10-23': {
      '10:30': [
        [1, 3],
        [1, 6],
        [0, 5],
        [5, 5],
        [3, 5],
      ],
    },
  },
};

export function getDateOfNextDay(dayName: string) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const todayDayIndex = today.getDay(); // Returns a number 0-6 corresponding to the day of the week (0 for Sunday, 1 for Monday, etc.)
  const targetDayIndex = daysOfWeek.indexOf(dayName); // Get index of the target day

  if (targetDayIndex === -1) {
    return 'Invalid day name';
  }

  // Calculate the number of days until the next occurrence of the target day
  let daysUntilNextTarget = (targetDayIndex - todayDayIndex + 7) % 7;
  if (daysUntilNextTarget === 0) {
    daysUntilNextTarget = 7; // If the day is today, we assume the next occurrence is a week later
  }

  // Calculate the next date by adding the difference to the current date
  const nextDayDate = new Date(today);
  nextDayDate.setDate(today.getDate() + daysUntilNextTarget);

  return nextDayDate.toISOString().slice(0, 10); // Returns the date in "YYYY-MM-DD" format
}

export const initialSeats = [
  [0, 0, 0, 0, 0, 0], // First row: 6 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0, 0, 0], // 8 seats
  [0, 0, 0, 0, 0, 0], // Last row: 6 seats
];

export const isSeatBooked = (
  bookedSeats: [],
  rowIndex: number,
  seatIndex: number,
) => {
  return bookedSeats.some(
    (seat: any) => seat[0] === rowIndex + 1 && seat[1] === seatIndex + 1,
  );
};
