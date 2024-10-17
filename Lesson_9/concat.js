const currentDevelopers = ["Maxim", "Oleg"];
const newDevelopers = ["Anton", "Gleb", "Vaily"];

// concat
// 1
// const allDevelopers = currentDevelopers.concat(
//   newDevelopers,
//   currentDevelopers
// );



// ...  спред оператор
const allDevelopers = [...currentDevelopers, ...newDevelopers];
console.log("allDevelopers", allDevelopers);