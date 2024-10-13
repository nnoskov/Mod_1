// Function Declaration

// function sayHello() {
//   console.log("Hello!");
// }

// sayHello();

// function showTotalPrice(price, count) {
//   const totalPrice = price * count;
//   console.log(totalPrice);
// }

// showTotalPrice(19, 10);

// function getTotalPrice(price, count) {
//   const tax = 0.2;
//   return price * count * (1 + tax);
// }

// const totalPrice1 = getTotalPrice(100, 50);

// function showTotalPrice2(price, count, showMethod) {
//   showMethod(getTotalPrice(price, count));
// }

// showTotalPrice2(10, 15, console.log);

// showTotalPrice2(13, 19, function (price) {
//   console.log(`Итоговая цена ${price}`);
// });

// Function Expression

const sum = function (a, b) {
  console.log(a + b);
};

sum(5, 19);

const myFunc = (a, b) => {
  return a + b;
};

const result = myFunc(22, 22);
console.log(result);

const sum2 = (a, b) => a + b;
console.log(sum2(55, 234234));

//const addFive = (a) => a + 5;

const addFive = (a) => a + 5;
console.log(addFive(10));

function multiply(a, b, callback) {
  const result = a * b;
  callback(result);
}

multiply(56, 45, (multiplyResult) => {
  console.log(multiplyResult);
});
