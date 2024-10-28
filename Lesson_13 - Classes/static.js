class Car {
  static isCar(car) {
    return car instanceof Car;
  }

  static #initionalParams = {
    model: "BMW",
    maxSpeed: 170,
  };

  constructor(model, maxSpeed) {
    this.model = model || Car.#initionalParams.model;
    this.maxSpeed = maxSpeed || Car.#initionalParams.maxSpeed;
  }

  drive() {
    console.log(`Машина ${this.model} сейчас в пути!`);
  }
}

const car = new Car("Audi", 250);
const defaultCar = new Car();

console.log(Car.isCar(car));
console.log(defaultCar);
