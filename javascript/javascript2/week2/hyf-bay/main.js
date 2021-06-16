console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

const main = document.querySelector('main');
const name = document.getElementById('name');
    
function filterByValue(event) {
    productsUl.innerHTML = ''
    const eventValue = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(eventValue));
    return renderProducts(filteredProducts)
}

const price = document.getElementById('price');

function filterByPrice(event) {
    productsUl.innerHTML = ''
    return renderProducts(products.filter(product => product.price < parseInt(event.target.value)))
}

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);
name.addEventListener('input', filterByValue);
price.addEventListener('input', filterByPrice);
