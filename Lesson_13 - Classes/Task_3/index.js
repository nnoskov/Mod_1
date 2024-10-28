class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (this.words[word]) return;
    this.words[word] = {
      word,
      description,
    };
  }

  remove(word) {
    if (this.words[word]) delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    for (const key in this.words) {
        if (Object.prototype.hasOwnProperty.call(this.words, key)) {
            console.log(`${this.words[key].word} - ${this.words[key].description}`);
        }
    }
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие