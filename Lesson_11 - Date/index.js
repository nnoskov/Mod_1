// date

const date = new Date();

console.log('date', date);

const newDate = new Date(2000, 1, 10, 11, 55, 44, 500);

console.log(newDate);

console.log('year', newDate.getFullYear());
console.log('year2', newDate.getYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());


// День недели
// 0 Воскресенье - 6 суббота

console.log('day', newDate.getDay());


newDate.setFullYear(2025);
newDate.setHours(22);
newDate.setMinutes(59);
newDate.setSeconds(55);
newDate.setMilliseconds(5588);

console.log(newDate);
