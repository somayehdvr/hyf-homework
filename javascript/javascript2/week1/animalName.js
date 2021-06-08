const animalNames = [
    'Contemplative Teal Beetle',
    'Unwavering White Ridley',
    'Sensible Fuchsia Mockingbird',
    'Steady Plum Boa',
    'Convivial Purple Cottontail',
    'Bald Forest Deer',
    'Silky Lake Owl',
    'Fat Sea Snake',
    'Scaled Cave Zebra',
    'Juicy Glue Gun Kitty'
];

const spiritAnimal = document.querySelector('.spiritAnimal');
const button = document.querySelector(".submit");
button.innerHTML = "submit";


function myFunction() {
    const name= document.getElementsByClassName("name")[0].value;

    if(name){
        button.innerHTML = "new spirit name";
        spiritAnimal.innerHTML = `${name} - ${animalNames[Math.floor(Math.random() * 10)]}`;
    }
    else {
        alert("please write your name")
    }
}

button.addEventListener("click", myFunction);