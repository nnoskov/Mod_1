let userAnswer = prompt('Введите текст для обрезки');


const userString = userAnswer.trim();

userAnswer = prompt('Введите индекс, с которого нужно начать обрезку строки');

const startSliceIndex = Number(userAnswer.trim()) - 1;

userAnswer = prompt('Введите индекс, которым нужно закончить обрезку строки');

const endSliceIndex = Number(userAnswer.trim());

alert(`Начальная строка: ${userString}. Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);