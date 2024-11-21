console.log("Давайте начинать"); //1

setTimeout((params) => {
  console.log("Привет, я SetTimeOut"); //5
}, 1000);

const promise = new Promise((resolve) => {
  console.log("Я в промисе"); //2
  resolve("Возвращаю результат из промиса");//3
});

setTimeout((params) => {
  console.log("Привет, я тоже из setTimeOut, но жду подольше"), 2000;//6
});


promise.then((result) => {
    console.log(result);
});

console.log("Давайте заканчивать.");//4


// микрозадачи then, catch, finally
// 1. Выполняется мАкрозадача - оновной листинг
// 2. Все что есть в очереди мИкро - 
// 3. Все что есть в callback queue