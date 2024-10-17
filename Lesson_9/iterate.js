const developerNames = ["Nikilay", "Maxim", "Igor", "Nastya"];

// for

// console.log(developerNames[1]);

// for (let i = 0; i< developerNames.length; i++) {
//     console.log('i', i);
//     console.log('item', developerNames[i]);
// }

// for of
// for (const name of developerNames) {
//     console.log('name',name);
// }

//forEach
developerNames.forEach((name, index, array) => {
  console.log("name", name);
  //console.log(index);
  //console.log(array);
});

const salaryOfProgrammer = [100, 200, 300, 500, 1000, 2000, 10, 3000];

// map - возращает новый массив, стрелочной функцие выполняет нужный функционал
let updatetSalaries = salaryOfProgrammer.map((salary, index, array) => {
  return salary * 2;
});

console.log("updatetSalaries", updatetSalaries);

// filter
const filteredSalaries = salaryOfProgrammer.filter((salary, index, array) => {
  return salary > 600; // если уcловие выполняется элемент будет добавлен в новый массив
});

console.log("filteredSalaries", filteredSalaries);

const filteredSalaries2 = salaryOfProgrammer.filter((salary, index, array) => {
  return index % 2 === 0; // если увловие выполняется элемент будет добавлен в новый массив
});

console.log("filteredSalaries2", filteredSalaries2);

// find
const findedSalaries = salaryOfProgrammer.find((salary) => {
  return salary > 700; // если увловие выполняется элемент будет добавлен в новый массив. Будет только 1.
});

console.log("findedSalaries", findedSalaries);

// findIndex
const findedIndexSalaries = salaryOfProgrammer.findIndex((salary) => {
  return salary === 500; // если увловие выполняется элемент будет добавлен в новый массив.
});

console.log("findedIndexSalaries", findedIndexSalaries);

// some
const elementExists = salaryOfProgrammer.some((salary) => {
  return salary < 50; // если увловие выполняется, будет возращено значение true
});

console.log("elementExists", elementExists);

// every
const allElementExists = salaryOfProgrammer.every((salary) => {
  return salary > 200; // если увловие выполняется для каждого элемента, будте возращено значение true
});

console.log("allElementExists", allElementExists);

// reduce
//
// const salaryOfProgrammer = [100, 200, 300, 500, 1000, 2000, 3000];

const sum = salaryOfProgrammer.reduce((acc, salary, index, array) => {
  console.log("acc", acc);
  return acc + salary; // acc предыдущий вызов, можно обнулить acc установив после стрелочной функци значение acc.
});

console.log("sum", sum);

// sort
// < 0
// > 0
// = 0
salaryOfProgrammer.sort((a, b) => {
  return a - b; // если возвращаемое число больше 0 то происходит перестановка т.о. числа устанавливаются по возрастанию
});
console.log("salaryOfProgrammer", salaryOfProgrammer);

developerNames.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log("developerNames", developerNames);
