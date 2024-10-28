// ООП

// Function и class

// function Animal(name) {
//     this.name = name;
//     this.getName = function () {
//         return this.name;
//     }
// }

// //const result = Animal('Cat'); // NG
// const cat = new Animal('Cat'); // OK

// console.log('cat', cat);

// console.log(cat.name);
// console.log(cat.getName());

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}


const dog = new Animal('Dog');

console.log(dog);