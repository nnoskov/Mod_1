let userAnswer = prompt('Введите текст');

const userText = userAnswer.trim();

userAnswer = prompt('Введите слово из текста');

const wordFromText = userAnswer.trim();

const indexOfWord = userText.indexOf(wordFromText);

alert(`Начальная строка: ${userText}. Результат: ${userText.slice(indexOfWord)}`);