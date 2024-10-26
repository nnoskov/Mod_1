const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    if (this.level > 5) alert("Студент выучил все технологии!");
    else {
      this.level += 1;
      if (this.level === 2) this.stack.push("CSS");
      if (this.level === 3) this.stack.push("JavaScript");
      if (this.level === 4) this.stack.push("React");
      if (this.level === 5) this.stack.push("NodeJS");
    }
    return this;
  },
};

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(student.stack);
