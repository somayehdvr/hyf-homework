console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


function renderProducts(products) {
    const main = document.querySelector('main');
    const ul = document.createElement('ul');
    main.appendChild(ul)
    for (const product of products){
        const li = document.createElement('li');
        const header = document.createElement("h2");
        header.innerHTML = product.name;
        li.appendChild(header);
        const price = document.createElement("p");
        price.innerHTML = "Price: " + product.price;
        li.appendChild(price);
        const rating = document.createElement("p");
        rating.innerHTML = "Rating: " + product.rating;
        li.appendChild(rating);
        ul.appendChild(li);
    }
    console.log(main)
}

renderProducts(products); // This should create the ul and the li's with the individual products details