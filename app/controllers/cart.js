import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CartController extends Controller {
  @service('cart') cart;

  @action
  addToCart(product) {
    this.cart.add(product);
  }

  @action
  checkout() {}
}
