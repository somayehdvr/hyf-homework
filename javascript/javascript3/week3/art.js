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
        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillstyle = this.fillColor;
        ctx.fill();
    }
}



const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function timeout() {
    setTimeout(() => {
        let c2 = new Circle(Math.random() * 100, Math.random() * 100, Math.random() * 100, 0, 2 * Math.PI, getRandomColor());
        c2.draw(); 
        timeout()
    }, 100)
}

timeout()