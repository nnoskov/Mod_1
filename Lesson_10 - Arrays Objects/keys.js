// String | Symbol могут быть использованы в качестве ключей.
const id = Symbol('id');


const user = {
    [id]: 88,
    name: 'Nikolay',
    444: 'число 444',
    undefined: undefined,
    Boolean: Boolean([true]),
}
console.log('User', user);
console.log('by Object:',Object.entries(user));
console.log('by Object.getOwnPropertySymbols:', Object.getOwnPropertySymbols(user))
console.log(user[id]);

// in проверяет существует ли ключ в объекте

console.log('name' in user);
console.log('name889' in user);
console.log(id in user);


const key = "color";

const car = {
  name: "Nissan Note",
  [key]: "silver" // в квадратных скобках можно передать переменную
};

console.log(Object.entries(car));
console.log(Object.keys(car));