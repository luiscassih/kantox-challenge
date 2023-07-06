import { module, test } from 'qunit';
import { setupTest } from 'kshop-app/tests/helpers';

module('Unit | Service | cart', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:cart');
  });

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cart');
    assert.ok(service);
  });

  test('it adds a product to the cart', function (assert) {
    const product = {
      code: 'GR1',
      name: 'Green Tea',
      price: 3.11,
    };

    this.service.add(product);

    assert.equal(this.service.products.length, 1);
    assert.equal(this.service.quantity, 1);
    assert.equal(this.service.totalPrice, '3.11');
  });

  test('it removes a product from the cart', function (assert) {
    const product = {
      code: 'GR1',
      name: 'Green Tea',
      price: 3.11,
    };

    this.service.add(product);
    this.service.remove(product);

    assert.equal(this.service.products.length, 0);
    assert.equal(this.service.quantity, 0);
    assert.equal(this.service.totalPrice, '0.00');
  });

  test('it calculates discounts and updates total price', function (assert) {
    const product = {
      code: 'GR1',
      name: 'Green Tea',
      price: 3.11,
    };

    this.service.add(product);
    this.service.add(product);

    assert.equal(this.service.discount, 3.11);
    assert.equal(this.service.totalPrice, '3.11');
  });

});
