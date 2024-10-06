// toUpperCase, toLowerCase

const animal = 'Line';

console.log('upper', animal.toUpperCase());
console.log('lower', animal.toLocaleLowerCase())

console.log(animal);

// Найти символы - indexOf, includes

const text = 'Мой любимый язык программирования JS';
console.log('indexOf', text.indexOf('JS'));
console.log('indexOf', text.indexOf('444'));

console.log('includes', text.includes('JS')); // true/false

// Обрезка строки

const programmingLanguage = 'JavaScript';

console.log('slice', programmingLanguage.slice(4,6));
console.log('substring', programmingLanguage.substring(4,6));

// Замена символов в строке
console.log('replace', programmingLanguage.replace('Script', ''));
console.log('replace', programmingLanguage.replace('a', 'A'));
console.log('replace', programmingLanguage.replaceAll('a', 'A'));

// repeat
let helloText = 'hello';
console.log('repeat', helloText.repeat(10));

// trim
const nameOfUser = prompt('Как вас зовут?');
nameOfUser.trim()
console.log('nameOfUser', nameOfUser);