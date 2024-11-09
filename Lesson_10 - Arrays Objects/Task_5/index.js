function sum(...elements) {
  if (!elements.length) return NaN;
  return elements.reduce((acc, element) => {
    return acc + element;
  });
}

const obj = {
  myKey: 111,
  values: { subOjectKey1: 66, subObjectKey2: 55 },
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2)); // 4
console.log(sum(10, 15, 249, 653,846)); // 1773
console.log(sum());

console.log(Object.entries(obj));

console.log("myKeys" in obj);

const arr1 = [1,45,5];
const arr2 = [1,45,5];
const arr3 = arr1;

arr3[0]= 2;
console.log(arr1 === arr2);
console.log(arr1 === arr3);

console.log(arr1);