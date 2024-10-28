const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(index) {
    if (index < 0 || index >= this.products.length) return;

    const product = this.products[index];
    this.total -= product.price;
    this.products.splice(index, 1);
  }
}

module.exports = Cart;
