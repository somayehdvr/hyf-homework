console.log("inside warmup file");

class Circle{
    constructor(radius) {
        this.radius = radius
    }
    getDiameter() {
        console.log(2 * this.radius);
        return
    }
    getCircumference() {
        console.log(2 * Math.PI * this.radius);
        return
    }
    getArea() {
        console.log(Math.PI * this.radius * this.radius);
        return
    }
}

const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
