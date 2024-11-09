const convertMsToDays = function (time) {
  return Math.round(time / 1000 / 3600 / 24);
};

const getDaysBeforeBirthday = (nextBirthdayDate) => {
  if (!(nextBirthdayDate instanceof Date)) return NaN;
  return convertMsToDays(nextBirthdayDate.getTime() - Date.now());
};

//console.log(getDaysBeforeBirthday(new Date(2025, 0, 23)));
console.log(getDaysBeforeBirthday(new Date(Date.now())));
