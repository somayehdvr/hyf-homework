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
        const canvas = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}



const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function timeout() {
    setTimeout(() => {
        const c2 = new Circle(Math.random() * 100, Math.random() * 100, Math.random() * 100, 0, 2 * Math.PI, getRandomColor());
        c2.draw(); 
        timeout()
    }, 100)
}

timeout()

const c3 = new Circle(screen.width, screen.height, 20, 0, 2 * Math.PI, "#000000");
c3.draw();
