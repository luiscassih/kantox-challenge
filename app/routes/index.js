import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
  beforeModel() {
    this.transitionTo('/products');
  }
}
