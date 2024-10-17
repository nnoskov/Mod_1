const numbers = [10, 4, 100, -5, 54, 2];

// 1
for (i = 0, sum = 0; i < numbers.length; i++) {
  sum += numbers[i] ** 3;
}

console.log("'for' cycle:", sum);

// 2
let sumOf = 0;
for (number of numbers) {
  sumOf += number ** 3;
}
console.log("'for of' cycle:", sumOf);

// 3
let sumForEach = 0;
numbers.forEach((number) => {
  sumForEach += number ** 3;
});
console.log("forEach():", sumForEach);

// 4
const sumReduce = numbers.reduce((acc, number) => {
  return acc + number ** 3;
}, 0);
console.log("reduce():", sumReduce);
