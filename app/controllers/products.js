import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductsController extends Controller {
  sections = ['Groceries', 'Wine', 'Clothes', 'FX'];

  @tracked activeSection = 0;

  @action
  goToSection(section) {
    this.activeSection = section;
  }
}
