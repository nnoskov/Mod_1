class Footballer {
  constructor(name, club) {
    this.name = name;
    this.club = club;
  }

  shoot() {}
  selebrageGoal() {}
  pass() {}
}

class Forward extends Footballer {
    constructor(name, club) {
        super(name, club);
    }
}
