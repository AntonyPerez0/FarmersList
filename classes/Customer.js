const Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
    this.rewardPoints = 0; 
  }
  addToOrderHistory(cart) { 
    this.orderHistory.push(cart);
    this.updateRewardPoints();
  }
  updateRewardPoints() {
    this.rewardPoints = this.orderHistory.reduce(
      (total, cart) => total + cart.total / 10,
      0 
    );
  }
  getRewardPoints() {
    return this.rewardPoints;
  }
}
module.exports = Customer;




