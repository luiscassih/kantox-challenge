import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  sections = [
    "Groceries",
    "Wine",
    "Clothes",
    "FX",
  ];

  @tracked activeSection = 0;
  @tracked quantity = 0;

  @action
  addToCart() {
    this.quantity++;
  }
}
