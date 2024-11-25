const myNumber = 42;

// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', String(myNumber));
// console.log(localStorage.getItem('number'));
// localStorage.clear();

const obj = {
  name: "Max",
  age: 20,
};

//localStorage.setItem('person', JSON.stringify(obj));
const raw = localStorage.getItem("person");
const person = JSON.parse(raw);
person.name = "Nikolay";

window.addEventListener("storage", (event) => {
  console.log(event); // Event возникает в тот момент когда происходит изменение в другой вкладке
});

localStorage.setItem('myValue', 'this_is_my_Value');
//console.log(person);
