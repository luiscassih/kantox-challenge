import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  products = A([]);
  @tracked quantity = 0;
  @tracked totalPrice = 0;
  @tracked subtotal = 0;
  @tracked shipping = 0.5; // example
  @tracked discount = 0;

  add(product) {
    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.products.pushObject(product);
    }
    this.updateTotal();
  }

  remove(product) {
    product.quantity--;
    if (product.quantity === 0) {
      this.products.removeObject(product);
    }
    this.updateTotal();
  }

  updateTotal() {
    if (this.products.length === 0) {
      this.quantity = 0;
      this.price = 0;
    }
    let quantity = 0;
    let totalPrice = 0;
    let subtotal = 0;
    this.products.forEach((product) => {
      quantity += product.quantity;
      totalPrice += product.price * product.quantity;
      subtotal += totalPrice;
      //apply promotions here to totalPrice
    });
    this.quantity = quantity;
    this.subtotal = subtotal.toFixed(2);
    this.totalPrice = (totalPrice + this.shipping).toFixed(2);
  }

  empty() {
    this.products.clear();
    this.updateTotal();
  }
}
