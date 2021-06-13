console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

const main = document.querySelector('main');
const input = document.querySelector('input');
    
function updateValue(event) {
    productsUl.innerHTML = ''
    return renderProducts(products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase())))
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
input.addEventListener('change', updateValue);