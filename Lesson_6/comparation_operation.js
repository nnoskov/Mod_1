console.log("==", 100 == 100);

// Сравнение строк

// console.log("JavaScript" == "Javascript");
// console.log("JavaScript" > "Javascript");
// console.log("JavaScript" < "Javascript");

// console.log("s".charCodeAt());

//== vs ===

// == сравнивает значения

// === сравнивает типы

// console.log("1" == 1); // Потому что будет приведено к типу данных number 1==1 - true
// console.log("20" == "20"); // number 20 = 20 - true
// console.log('200' > '21'); // сравнение посимвольных кодов

// console.log("1" === 1); // Потому что не будет приведен к единому типу данных.
// console.log("20" === "20"); // number '20' = '20' - true смотрит что типы одинаковые и сравнивает значения

const rate = 93;
const amount = 100;

const result = Number((amount/rate).toFixed(2));
console.log(`${amount}₽ = $${result}`);