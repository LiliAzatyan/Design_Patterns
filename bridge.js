class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color.getColor();
  }
  setColor(color) {
    this.color = color;
  }
  draw() {
    throw new Error('This method must be overridden');
  }
}
class Color {
  constructor(value) {
    this.value = value;
  }
  getColor() {
    return this.value;
  }
}
class RedColor extends Color {
  constructor() {
    super("Red");
  }
}
class BlueColor extends Color {
  constructor() {
    super("Blue");
  }
}
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  draw() {
    console.log(`Drawing Circle with color ${this.getColor()}`);
  }
}
class Square extends Shape {
  constructor(color) {
    super(color);
  }
  draw() {
    console.log(`Drawing Square with color ${this.getColor()}`);
  }
}

const red = new RedColor();
const blue = new BlueColor();

const redCircle = new Circle(red);
const blueSquare = new Square(blue);

redCircle.draw(); 
blueSquare.draw(); 

redCircle.setColor(blue);
redCircle.draw(); 
