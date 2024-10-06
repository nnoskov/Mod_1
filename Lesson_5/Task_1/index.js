const myName = "Nicolay";
const programmingLanguage = "JavaScript";
const courceCreatorName = "Vladilen Minin";
const reasonText = "Remote Work is the Best";
const numberOfMonth = "1";


let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю языко программирования ${programmingLanguage}
на курсе по ${programmingLanguage} у ${courceCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этогоя изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
console.log(myInfoText);

console.log('Длина текста:', myInfoText.length);

console.log(`Первый символ текста - ${myInfoText[0]}, последний символ текста - ${myInfoText[myInfoText.length-1]}`);