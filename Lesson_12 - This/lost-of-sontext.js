const user = {
  name: "Nikolay",
  programingLanguage: "JS",
  getName() {
    return this.name;
  },
//   showConsoleLog: () => {
//     console.log(this);
//   },
  showConsoleLog: function () {
    console.log(this);
  },
  // У стрелочных функций нет своего this.
  getProgramingLanguage: () => {
    return this.programingLanguage;
  },
  getProgramingLanguage_fun: function () {
    return this.programingLanguage;
  },
};

// console.log("getName", user.getName());

// const newGetName = user.getName;

// const getProgrammingLanguage = user.getProgramingLanguage;

// console.log("newGetName", newGetName()); // Глобальное окружение там нет функции getName в данном случае Window
// console.log("newGetName", newGetName.call(user)); // Принудительно указываем у какого объекта вызывать функцию getName присвоение контекста вручную

// console.log(user.getProgramingLanguage()); // У стрелочных функций нет this

// console.log(user.getProgramingLanguage.call(user)); // У стрелочных функций нет this undefined

// console.log(user.getProgramingLanguage_fun());

// console.log("getProgrammingLanguage", getProgrammingLanguage());

// console.log(this);

//user.showConsoleLog();

// const car = {
//   name: "Audi",
//   drive: () => {
//     console.log(this);
//   },
// };

//console.log(globalThis);

// const myThis = this;

// console.log(typeof this === 'object');

// function showConsoleLog () {
//     console.log(this);
// }

const showConsoleLog = () => {
    console.log(this);
}

showConsoleLog();