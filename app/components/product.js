import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ProductComponent extends Component {
  @service('cart') cart;
  sections = ['Groceries', 'Wine', 'Clothes', 'FX'];

  @tracked activeSection = 0;
  // @tracked quantity = 0;

  @action
  addToCart(product) {
    this.cart.add(product);
  }
}
