let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0, buffer = 0; i < numbers.length; i += 1) {
  buffer = numbers[i] ** 3;
  sum += buffer;
}
console.log(numbers); // Массив должен быть без имзенений
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers) {
  num = num ** 3;
  sum += num;
}
console.log(numbers); // Массив должен быть без изменений
console.log(sum); // 1003904306910622800
