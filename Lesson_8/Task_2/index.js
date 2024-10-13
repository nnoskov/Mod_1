function getSumOfNumbers(number, type = "odd") {
  if (typeof number !== "number") return NaN;

  let result = 0;

  switch (type) {
    case "odd":
      for (let i = 1; i <= number; i += 2) {
        result += i;
      }
      break;
    case "even":
      for (let i = 0; i <= number; i += 2) {
        result += i;
      }
      break;
    case "":
      for (let i = 0; i <= number; i++) {
        result += i;
      }
      break;
  }
  return result;
}

console.log(getSumOfNumbers(100, "odd")); // 25
console.log(getSumOfNumbers(100, "even")); // 30
console.log(getSumOfNumbers("")); // NaN
