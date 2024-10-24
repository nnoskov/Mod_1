function getMsFromDays(days) {
  if (typeof days !== "number" || days < 0) return NaN;
  return days * 24 * 3600 * 1000;
}
function addDays(date, days) {
  if (date instanceof Date) {
    return new Date(date.getTime() + getMsFromDays(days));
  } else return undefined;
}

console.log(addDays(new Date(Date.now()), 5));
