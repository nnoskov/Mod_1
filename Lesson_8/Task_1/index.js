function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => {
  return `Имя равно ${name}`;
};

let result = getName1("Nikolay");
console.log("getName1:", result);

result = getName2("Nadejda");
console.log("getName2:", result);

result = getName3("Elena");
console.log("getName3:", result);
