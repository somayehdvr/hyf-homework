console.log("inside warmup file");

class Circle{
    constructor(radius) {
        this.radius = radius
    }
    getDiameter() {
        console.log(2 * this.radius);
    }
    getCircumference() {
        console.log(2 * Math.PI * this.radius);
    }
    getArea() {
        console.log(Math.PI * this.radius * this.radius);
    }
}

const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
