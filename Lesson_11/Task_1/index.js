function padZero(num) {
  return num.toString().padStart(2, 0);
}

function getDateFormat(date, sep = ".") {
  if (!date) return '';
  return `${padZero(date.getDate())}${sep}${padZero(date.getMonth() + 1)}${sep}${date.getFullYear()}`;
}

console.log(getDateFormat(new Date(2024,1,1,14),'-'));
