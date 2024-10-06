let userAnswer = prompt('Как вас зовут?');

const userName = userAnswer.toLocaleLowerCase().trim();

userAnswer = prompt('Сколько вам лет?');

const userAge = Number(userAnswer.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет`);