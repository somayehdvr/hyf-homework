//Favorite dishes
/////////////////////////////////////////////////
const favoriteDishes = ["pizza", "Ghorme", "gheime"]
let ul = document.createElement('ul');
let body = document.querySelector('body');
body.appendChild(ul)

for (let i = 0; i < favoriteDishes.length; i++){
    let li = document.createElement('li');
    li.innerHTML = favoriteDishes[i];
    ul.appendChild(li)
}

//Podcast
/////////////////////////////////////////////////
const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

ul = document.createElement('ul');
body.appendChild(ul)

for (let i = 0; i < podcasts.length; i++){
    let li = document.createElement('li');
    h1 = document.createElement('h1');
    h1.innerHTML = podcasts[i].name;
    li.appendChild(h1);

    if (podcasts[i].imageUrl){
        let image = document.createElement('img');
        image.src = podcasts[i].imageUrl;
        li.appendChild(image);
    }

    ul.appendChild(li)
}

//Image inserter
/////////////////////////////////////////////////
function insertImage(imageUrl, elementToAppendImageTo){
    let image = document.createElement('img');
    image.src = imageUrl;
    elementToAppendImageTo.appendChild(image);
}

insertImage('https://picsum.photos/536/354', document.querySelector('body'));

//Simple eventlistener
/////////////////////////////////////////////////
let button = document.querySelector(".btn-class1")

function myFunction () {
    button.innerHTML = "button clicked"
}

button.addEventListener("click", myFunction)

//Light mode dark mode
/////////////////////////////////////////////////
let button2 = document.querySelector(".btn-class2")

function myFunction2 () {
    if (button2.innerHTML === "change color"){
        button2.innerHTML = "clicked"
        body.style.backgroundColor = "black"
        body.style.color = "white"
    }
    else {
        button2.innerHTML = "change color"
        body.style.backgroundColor = "white"
        body.style.color = "blue"
    }
}

button2.addEventListener("click", myFunction2)

////////////////////////////////////////////////
console.log(body)