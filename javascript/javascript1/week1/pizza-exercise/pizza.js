console.log("I love pizza")

console.log(typeof 3);
console.log(typeof -33);
console.log(typeof '3');

const threeConst = 3;
console.log(threeConst);

let threeLet = 3;
console.log(threeLet);

console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);

const names = ['benjamin', 'Christopher'];
console.log(typeof names[0]);

console.log(typeof [3][0]);

console.log(typeof true);

///////////////////////////////

console.log(1 + 2);

console.log(1 - 2);

console.log(10 / 5);

console.log(10 * 5);
console.log(21 / 5);
console.log(21 % 5);

console.log("hello " + 23);
console.log("hello " + "23");

////////////////////////////

console.log(1 == 1);
console.log(1 != 2);
console.log('HELLO' == 2);
console.log('1' == 1);
console.log('1' === 1);
console.log(1 > 8);
console.log(1 <= 8)
console.log(1 <= 1);

console.log(1 === 1 && 3 === 4);
console.log((1 !== 1 || 3 === 4) || true );

////////////////////////


let name = 'benjamin';
name = 'benjamin-better';

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaPrice - 10;

const users = ['peter', 'Johnny', 'Børge'];
const lastUser = users[2];

/////////////////////////

let favPizza
favPizza = 'pepperony'
let price
price = 100
console.log('New pizza order:', favPizza,'. The price of the pizza is: ',price)

/////////////////////////

let amountOfPizza = 2
let familySize = 1
let totalPrice = 100
if (familySize) {
    totalPrice = totalPrice * 2 
}
console.log('New pizza order:',amountOfPizza,familySize,favPizza,'. Total cost for the order is:',totalPrice)