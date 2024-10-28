// Наследование

class Plane {
  constructor(type, numberOfPassengers) {
    this.type = type;
    this.numberOfPassengers = numberOfPassengers;
  }

  startFlight() {
    console.log("Lets goo!!");
  }
}

class MilitaryPlain extends Plane {
  constructor(type) {
    super(type, 0);
    this.numberOfGuns = 0;
  }

  startFlight() {
    console.log("Let's go on the attack!");
  }

  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns;
  }

  shoot() {
    console.log("Shooting!!");
  }
}

const militaryPlain = new MilitaryPlain("Перехватчик");
const plane = new Plane("Пассажирский", 100);

console.log(plane);
plane.startFlight();


militaryPlain.startFlight();
militaryPlain.setNumberOfGuns(6);
militaryPlain.shoot();
console.log(militaryPlain);

class Dog {

}

console.log(militaryPlain instanceof Plane);