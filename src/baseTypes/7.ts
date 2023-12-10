/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклад використання функції:
const today = DayOfWeek.Saturday; // Припустимо, сьогодні субота
const isTodayWeekend = isWeekend(today);
console.log(`Is today a weekend day? ${isTodayWeekend}`); // Виведе "Is today a weekend day? true" на консоль