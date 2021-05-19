const balance = 1000;

if (balance <= 0) {
    console.log('Please deposit some money!')
}
else if (balance <= 1000) {
    console.log('Your balance is looking okay')
}
else if (balance <= 3000){
    console.log('Your balance is looking good')
}
else if (balance <= 10000) {
    console.log('Your balance is fantastic')
}
else {
    console.log('Your balance is AMAZING!')
}

////////////////////////////

let a = 4
let b = 3

const result = a + b < 4 ? 'Below' :  'Over'

///////////////////////////

for(let Countdown =10;Countdown >= 0;Countdown --){
    if (Countdown == 10) {
        console.log("OMG it started")
    }
    else if (Countdown == 0){
        console.log("Happy new year!")
    }
    else{
        console.log(Countdown);
    }
}

//////////////////////////

let count = 0;
const friendsNames = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

for (let j = 0; j < friendsNames.length; j++) {
if (friendsNames[j].includes('a') || friendsNames[j].includes('A')) {
count++;
} else {
console.log(friendsNames[j]);
}
}

console.log("The number of names contains a is: " + count);

////////////////////////////////////

for (let i=0; i<friendsNames.length; i++){
    if(friendsNames[i] === 'Lola'){
        console.log(`The index is: ${i}`)
        break;
    }
}

//////////////////////////////////////

function min(a,b) {
    return a < b ? a : b;
}

console.log("------------ Task 1 ------------");
console.log("Min between 2 and 5 is: " + min(2, 5));
console.log("Min between 3 and -1 is: " + min(3, -1));
console.log("Min between 1 and 1 is: " + min(1, 1));

////////////////////////////////////

console.log("\n------------ Task 2 ------------");
console.log("The circle area of 3 is: " + getCircleArea(100) + " m²");

console.log("\n------------ Task 3 ------------");
console.log("Convert Celsius to Fahrenheit: " + celciusToFahreneit(100) + " °F");


function getCircleArea(rCircle) {
return (3.14159 * rCircle * rCircle).toFixed(2);
}

function celciusToFahreneit(temp) {
return (temp * 1.8 + 32);
}


//////////////////////////

const testerVariable = 'x';
const global = 'global';
function scopeTest() {
    console.log(global);
    const functionScope = 'functionScope';
    console.log(functionScope);

    function tester() {
        console.log(global);
        const testerVariable = 'testerVariable';
    }

    tester();
    console.log(testerVariable);
}

scopeTest();

/////////////////////