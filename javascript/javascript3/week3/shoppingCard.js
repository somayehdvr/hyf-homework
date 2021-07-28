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
      this.products.forEach(product => { total += product.price})
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

  }



  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const flatscreen2 = new Product("flat-screen2", 5000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(flatscreen2);
  shoppingCart.renderProducts();

  shoppingCart.removeProduct(flatscreen);
  shoppingCart.renderProducts();
  console.log(shoppingCart.searchProduct('flat-screen2'))
  console.log(shoppingCart.getTotal())
  console.log(shoppingCart.getUser())

  // Assuming dkk as default currency
  const plant = new Product("plant", 50);
  console.log(plant.convertToCurrency("dollars"));
