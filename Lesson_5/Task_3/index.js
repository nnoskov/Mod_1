const userAnswer = prompt('Как вас зовут?');

const userName = userAnswer.toLocaleLowerCase().trim();

alert(`Вас зовут ${userName}`);