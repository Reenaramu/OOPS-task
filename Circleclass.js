class Circle{
   constructor(radius = 1.0, color = "red") {
       this.radius = radius;
       this.color = color;
   }
   static Circle(radius) {
    return new Circle(radius);
  }
  static Circle(radius, color) {
    return new Circle(radius, color);
  }
   getRadius() {
      return this.radius;
   }
   setRadius(radius) {
      this.radius = radius;
   }
   getColor() {
      return this.color;
   }
   setColor(color) {
     this.color = color;
   }
   toString() {
     return `Circle[radius=${this.radius},color=${this.color}]`;
   }
   getArea() {
     return Math.PI * this.radius * this.radius;
   }
   getCircumference() {
     return 2 * Math.PI * this.radius;
   }
}

const circle1 = new Circle();
console.log(circle1.toString());

const circle2 = new Circle(2.4, "yellow");
console.log(circle2.getArea());
console.log(circle2.getCircumference());
