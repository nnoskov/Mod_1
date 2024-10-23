const developer = {
  //key: value,
  name: "Nikolay",
  job: "Front-End developer",
  experince: 24,
  jobAllInfo: {
    type: "Front-End",
    framework: { name: "ReactJS" },
  },
};

// console.log('type', developer.jobAllInfo.type);

// console.log('framework', developer['jobAllInfo'].framework);
// console.log('framework', developer['jobAllInfo']['framework']);

// console.log('developer', developer.job);

// // 1
// console.log("jobAllInfo", developer.jobAllInfo);

// // 2 через []

// console.log("name", developer['name']);

// // 3

// const key = 'name';

// console.log("name", developer[key]);

// let str = 'Hello world Hello everyone This is a test test test';
// str = str.toLocaleLowerCase();

// function getMostPopularWord(str){

// }

// Опциональная цепочка ?.

//if (developer.jobAllInfo.framework) {
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
  console.log("Разработчик уже знает фреймворк");
} else {
  console.log("Разработчик еще не знает фреймворк");
}

if (developer?.jobAllInfo?.framework?.name) {
  console.log("Разработчик уже знает фреймворк");
} else {
  console.log("Разработчик еще не знает фреймворк");
}
//console.log(developer.jobAllInfo.framework);

// prototype

// const person = {
//     name: 'Maxim',
//     age: 24,
//     greet: function() {
//         console.log('Hello!');
//     }
// }

const person = new Object({
  name: "Maxim",
  age: 24,
  greet: function () {
    console.log("Hello!");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

const lena = Object.create(person);
lena.name = "Elena";

//const str = 'String ggg';
const str = new String("new string");

function calcValues(a, b) {
  //return [a + b, undefined, a - b, a * b, a / b];
  return [a + b, a - b / 2, a - b, a * b, a / b];
}

//console.log(calcValues(55, 66));

const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(55, 66);
// const sum = result[0];
// const sub = result[1];

console.log(sum, mult, ...other, sub);

//const [sum, sub] = result;

//Objects
const personOne = {
  name: "Max",
  age: 20,
  address: {
    contry: "Russia",
    city: "Moscow",
  },
};

const { name: firstName, age, car = "Машины нет" ,address , address: {city: homeTown, contry}} = personOne;

const {name, ...info} = personOne;

console.log(firstName, age, car, address, homeTown, contry);

console.log(name, info);

function logPerson(per) {
  console.log(per.name + ' ' + per.age );
}

// Аналогичный вариант с деструктруризацией
function logPerson1({name, age}){
  console.log(name + ' ' + age);
}

logPerson1(personOne);