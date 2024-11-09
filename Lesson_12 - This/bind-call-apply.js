const mainHero = {
  fullName: "Spider",
  health: 200,
  strength: 5,
};

const badHero = {
  fullName: "Joker",
  health: 100,
  strength: 10,
};

function printHeroInfo(extraInfo = '', ...additional) {
  console.log(
    `Имя ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength},  ${extraInfo} ${additional}`
  );
}

// bind, call, apply
printHeroInfo.call(badHero, 'Злодей', 3, 4);    // параметры для функции идут через запятую

printHeroInfo.apply(badHero, ['Злодей']);       // параметры для функции идут через массив

const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Главный герой'); // создает новую функцию

bindedPrintHeroInfo();