class Product {
  constructor(name, price, description, quantity) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = true;
    this.quantity = quantity;
    this.rewardPoints = Math.floor(price / 10);
  }

  display() {
    return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
  }
}

module.exports = Product;
