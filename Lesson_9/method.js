// splice - Удалить одни элементы и вставить другие
const cars = ["BMW", "Mercedes", "Honda"];

const removedElements = cars.splice(0, 2, "Audi", "Bugatti");

console.log(cars);
console.log("removedElements", removedElements);

// slice - Кусочек

const agesOfDevelopers = [25, 18, 45, 69];

console.log(agesOfDevelopers.slice(1,2)); // начиная с элемента заканчивая вторым агрументов не включая его.

// indexOf
const favoriteFood = ['Салат', 'Морковка', 'Картрошка'];

const indexOfFood = favoriteFood.indexOf('Морковка'); // Покажет индекс элемента, если имеется. Иначе вернет -1
console.log(indexOfFood);

// includes
const technologies = ['JavaScript', 'HTML', 'CSS', 'React'];
const isTechnologyExist = technologies.includes('HTMLL');
console.log("isTechnologyExist", isTechnologyExist);


// split + join 
const listOfOrders = 'Кросы, штанишки, футбы, носки';
const listOfOrdersArray = listOfOrders.split(', ');
console.log("listOfOrdersArra", listOfOrdersArray);

const ordersString = listOfOrdersArray.join(', ');
console.log("ordersString", ordersString);

// reverse

technologies.reverse();
console.log("technologies",technologies);