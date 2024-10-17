let clientEstimations = [];

const askClientToGiveEstimation = function () {
  return Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
};

for (let i = 0, grade = 0; i < 5; i++) {
  grade = askClientToGiveEstimation();
  if (1 <= grade && grade <= 10) clientEstimations.push(grade);
}

const goodEstimations = clientEstimations.filter((estimate) => {
 return estimate > 5 && estimate !== 0;
}).length;

const notGoodEstimations = clientEstimations.filter((estimate) => {
  return estimate <= 5 && estimate !== 0;
 }).length;

alert(
  `Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`
);
