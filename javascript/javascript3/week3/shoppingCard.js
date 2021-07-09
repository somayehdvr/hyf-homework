class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // add a product to the products array
      this.products.push(product);
    }
  
    removeProduct(product) {
      // remove a product from the products array
      this.products = this.products.filter(products => {if(product !== products) return products})
    }
  
    searchProduct(productName) {
      // return an array of product that match the productName parameter
      return this.products.filter(products => {if(productName === products.name) return products})
    }
  
    getTotal() {
      // get the total price of the products in the shoppingcart
      let total = 0;
      total += this.products.forEach(product => {return product.price})
      return total;
    }
  
    renderProducts() {
      // render the products to html. You decide what to show and how
      console.log(this.products)
    }
  
    getUser() {
      // return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
      return new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/users/1')
          .then(data => resolve(data))
          .catch((error) => reject(error))
      })
    }

    convertToCurrency(currency) {
        
    }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const flatscreen2 = new Product("flat-screen2", 5000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(flatscreen2);
  shoppingCart.renderProducts();

  //shoppingCart.removeProduct(flatscreen);
  //shoppingCart.renderProducts();
  console.log(shoppingCart.searchProduct('flat-screen2'))
  console.log(shoppingCart.getTotal())
  console.log(shoppingCart.getUser())