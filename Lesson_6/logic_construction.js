// if
// if else
// switch case
// ? :

const isFrontedDeveloper = true;

if (isFrontedDeveloper) {
  console.log("Вы front-end разработчик, добро пожаловать в команду");
} else {
  console.log("Вы не front-end разработчик.");
}

const developerJobType = "Front-End";

if (developerJobType === "Front-End") {
  console.log("$2000");
} else if (developerJobType === "Back-End") {
  console.log("$1500");
} else if (developerJobType === "Full-Stack") {
  console.log("$3500");
} else {
  console.log("Зарплата не определена!");
}

// switch case

switch (developerJobType) {
  case "Front-End":
    console.log("$2000");
    break;
  case "Back-End":
    console.log("$1500");
    break;
  case "Full-Stack":
    console.log("$3500");
    break;
  default:
    console.log("Зарплата не определна");
}

// ? :
const favoriteDrink = "Tea";
const message =
  favoriteDrink === "Tea"
    ? "Ваш любимый напиток - это чай"
    : "Вы скорее всего не любите чай";
console.log(message);
