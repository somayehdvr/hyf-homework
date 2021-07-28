//Click counter
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
let counter = 1

btn1.addEventListener("click", () => console.log(counter++))
btn2.addEventListener("click", () => console.log(counter++))

//Delay clicker
const lateBtn = document.getElementById("lateBtn")

lateBtn.addEventListener("click", () => setTimeout(() => console.log("This text was delayed by 3 seconds"), 3000))

//Page onload
window.addEventListener('DOMContentLoaded', callback());
let xArr =[]
let yArr =[]
document.addEventListener('mousemove', (event) => {
let x = event.clientX;
  let y = event.clientY;
  let coordinates = 'X coordinates is ' + x + ', Y coordinates is ' + y;
  document.getElementById('mouse').innerHTML = coordinates;
    xArr.push(x);
    yArr.push(y);
  });
function avgCoordinates(intArray){
    function reduceArr(){
         const reduceReturn = intArray.reduce((a,b)=>a+b)/intArray.length;
        console.log(reduceReturn);
        return reduceReturn;
        }
return reduceArr;
}
setInterval(avgCoordinates(xArr), 30000)
setInterval(avgCoordinates(yArr), 30000)

//Mouse position
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }
