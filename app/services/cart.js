import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  products = A([]);
  @tracked quantity = 0;
  @tracked totalPrice = 19.34;

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
    this.quantity = this.products.reduce((total, product) => product.quantity + total, 0);
    this.products.forEach(product => {
    });
  }


  empty() {
    this.products.clear();
    this.updateTotal();
  }
}
