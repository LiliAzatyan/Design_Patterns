class Car {
  constructor() {
    this.type = "Car";
  }
  drive() {
    console.log("Driving the car...");
  }
}

class Sedan extends Car {
  constructor() {
    super();
    this.type = "Sedan";
  }
}

class BMW extends Car {
  constructor() {
    super();
    this.type = "BMW";
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "Sedan":
        return new Sedan();
      case "BMW":
        return new BMW();
      default:
        throw new Error("Invalid car type.");
    }
  }
}

const carFactory = new CarFactory();
const mySedan = carFactory.createCar("Sedan");
const myBMW = carFactory.createCar("BMW");

console.log(mySedan.type);
mySedan.drive();
console.log(myBMW.type); 
myBMW.drive(); 
