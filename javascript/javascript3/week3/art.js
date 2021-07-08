var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillstyle = "red";
ctx.fill();

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(){
        
    }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();