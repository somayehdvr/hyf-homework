var canvas = document.getElementById("canvas")
canvas.width = screen.width
canvas.height = screen.height
var ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.arc(95, 50, 40, 0, 2 * Math.PI)
ctx.stroke()
ctx.fillStyle = "blue"
ctx.fill()

class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        ctx.stroke()
        ctx.fillStyle = this.fillColor
        ctx.fill()
    }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw(ctx);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let numberOfCircles = 50
function circleDrawer(number) {
    setTimeout(() => {
        const circles = new Circle(Math.random() * screen.width, Math.random() * screen.height, Math.random() * 100, 0, 2 * Math.PI, getRandomColor());
        circles.draw(ctx); 
        if (numberOfCircles > 0) {
            circleDrawer()
            numberOfCircles--
        }
    }, 100)
}

circleDrawer(numberOfCircles)

