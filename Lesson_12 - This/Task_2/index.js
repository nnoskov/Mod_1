const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    }
 }

 function makeDomestic(isDomestic) {
    this.isDomestic = isDomestic;
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return this;
 }
 
 let animal = makeDomestic.bind(dog, true)(); 
 console.log(Object.entries(animal));
 // Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
 // И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"
 
 animal = makeDomestic.call(bird, false);
 console.log(Object.entries(animal));
 // Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
 // И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

animal = makeDomestic.apply(bird, [false]);
console.log(Object.entries(animal));