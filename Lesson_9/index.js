const salaryOfProgrammer = [100, 200, 300, 500, 1000, 2000, 3000];
console.log(salaryOfProgrammer);

console.log(salaryOfProgrammer.length);

const names = ["Nikilay", "Nadejda", "Elena"];

console.log(names);

// Добавление элементов

const newSeniorDeveloperSalary = 5000;
// В конец массива
salaryOfProgrammer.push(newSeniorDeveloperSalary, 5010, 5020);
console.log(salaryOfProgrammer);

// В начало массива
salaryOfProgrammer.unshift(10, 11, 23, 55);
console.log(salaryOfProgrammer);

// Удаление элементов
// первый
const firstRemovedElement = salaryOfProgrammer.shift();
console.log(salaryOfProgrammer, " firstRemovedElement =", firstRemovedElement);

// последний
const lastRemovedElement = salaryOfProgrammer.pop();
console.log(salaryOfProgrammer, " lastRemovedElement =", lastRemovedElement);

// Изменение элементов
salaryOfProgrammer[6] = 555;
console.log(salaryOfProgrammer);