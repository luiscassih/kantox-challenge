import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CheckoutController extends Controller {
  @service('cart') cart;

  @action
  addToCart(product) {
    this.cart.add(product);
  }

  @action
  removeFromCart(product) {
    this.cart.remove(product);
  }

  @action
  getProductTotal(product) {
    return (product.price * product.quantity).toFixed(2);
  }

  @action
  getPromotionLabel(product) {
    return this.cart.promotions.getLabel(product);
  }

  @action
  checkout() {}
}
