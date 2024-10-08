const answer1 = 4; // Сколько будет 2 + 2?
const answer2 = 4; // Сколько будет 2 * 2?
const answer3 = 1; // У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?
const answer4 = 12; // У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?
const answer5 = 6; // Сколько будет 2 + 2 * 2?
let correctAnswers = 0;
let incorrectAnswers = 0;

// 1
let userAnswer = prompt("Сколько будет 2 + 2?").trim();

if (answer1 === Number(userAnswer)) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

userAnswer = prompt("Сколько будет 2 * 2?").trim();
if (answer2 === Number(userAnswer)) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

userAnswer = prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
).trim();
if (answer3 === Number(userAnswer)) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

userAnswer = prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет.\
Сколько в итоге конфет осталось у Маши?"
).trim();
if (answer4 === Number(userAnswer)) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

userAnswer = prompt("Сколько будет 2 + 2 * 2?").trim();
if (answer5 === Number(userAnswer)) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`
);
