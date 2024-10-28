//Инкапсуялция

// По умолчанию все поля public

// Создание приватного поля #

class Developer {
  #salary;
  constructor(name, programingLanguage) {
    this.name = name;
    this.programingLanguage = programingLanguage;
    this.#salary = 3000;
  }

  get devSalary() {
    return this.#salary;
  }

  set setSalary(salary) {
    this.#salary = salary;
  }

  startCoding() {
    console.log(this.#salary);
    console.log(`${this.name} начинает писать код!`);
  }

  printProgramingLanguage() {
    console.log(`Язык программирования: ${this.programingLanguage}`);
  }
}

class JuniorDeveloper extends Developer {
  constructor(name, programingLanguage) {
    super(name, programingLanguage);
  }
}

const juniorDeveloper = new JuniorDeveloper("Dima", "JS");
juniorDeveloper.printProgramingLanguage();

const developer = new Developer("Nikolay", "JS");
developer.startCoding();

console.log(developer.devSalary); //Без скобочек просто пишем название гетера
developer.setSalary = 5000;
console.log(developer.devSalary); //Без скобочек просто пишем название гетера
