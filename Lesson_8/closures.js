// Замыкания

const createMultiplyer = function (n) {
  return function () {
    return n * 10;
  };
};

// const multiply = createMultiplyer(5);
// console.log(multiply());

const createCounter = (initialValue = 0) => {
  let counter = initialValue;
  return (valueToAdd) => {
    counter += valueToAdd;
    return counter;
  };
};

const addTwo = createCounter(2);
let result = addTwo(20); // 22
result = addTwo(10); // 32
result = addTwo(30); // 62

// console.log(addTwo(15));
// console.log(addTwo(10));
// const addFive = createCounter(5);
// const addTen = createCounter(10);

//const result = addFive(10);

console.log(result);
// console.log(addTen(77));