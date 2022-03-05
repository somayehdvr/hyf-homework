class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    switch (currency){
      case "dollars": return this.price *= 0.16; break;
      case "euro": return this.price *= 0.13; break;
      case "pound": return this.price *= 0.11; break;
  }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product)
  }

  removeProduct(product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === product.name) {
        this.products.splice(i, 1)
      }
    }
  }

  searchProduct(productName) {
    const productArray = []
    this.products.forEach(product => {
      if (product.name === productName) {
        productArray.push(product)
      }
    });
    return productArray
  }

  getTotal() {
    let count = 0
    this.products.forEach(product => {
      count += product.price
    });
    return count
  }

  renderProducts() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    this.products.forEach(product => {
      div.innerHTML += "name: " + product.name + "<br />"
      div.innerHTML += "price: " + product.price + "<br /> <br />"
    })
    body.appendChild(div)
  }

  getUser(userId) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(results => results.json())
        .then(data => resolve(data))
      .catch(error => reject(error))
    })
  }
}

const shoppingCart = new ShoppingCart()
const flatscreen = new Product("flat-screen", 5000)
const sharpscreen = new Product("sharp-screen", 3000)
shoppingCart.addProduct(flatscreen)
shoppingCart.addProduct(sharpscreen)
shoppingCart.renderProducts()
console.log(shoppingCart.searchProduct("flat-screen"))
console.log(shoppingCart.getTotal())
shoppingCart.removeProduct(flatscreen)
console.log(shoppingCart.getTotal())
console.log(shoppingCart.getUser(1))
const plant = new Product("plant", 50)
console.log(plant.convertToCurrency("dollars"))