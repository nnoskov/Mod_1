// this - object

//console.log(this);

const user = {
  name: "Nikolay",
  dateOfBirth: 1985,
  getName() {
    return this.name;
  },

  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth;
  },
  getAllInfo: function () {
    const age = this.calculateAge();
    console.log(`Имя ${this.name}, Возраст: ${age}`);
    return Object.entries(this);
  },
};

// console.log(user.getName());
// console.log(user.calculateAge());
// console.log(user.getAllInfo());

// bind. call. apply

const user2 = {
  name: "Igor",
};

//const user2name = user.getName.call(user2);
const user2name = user.getName.call(user2);

// console.log("user2name", user2name);

let x = 1;
const logToConsole = function () {
  console.log(x);
};

x = 2;

logToConsole();

function makeCount(count) {
  return function () {
    return count++;
  };
}

let counter = makeCount(0);
let counter2 = makeCount(0);

// alert(counter());
// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

function createElement() {
    let conunt = 0;
    function increment() {
        conunt++;
    }
    let message = `Count is ${conunt}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createElement();
increment();
increment();
increment();
log();