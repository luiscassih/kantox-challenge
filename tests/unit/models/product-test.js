import { module, test } from 'qunit';

import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupTest } from 'kshop-app/tests/helpers';

module('Unit | Model | product', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('product', {});
    assert.ok(model);
  });

  test('it can fetch products from Mirage', async function (assert) {
    const store = this.owner.lookup('service:store');
    const products = await store.findAll('product');

    assert.equal(products.length, 3);
    assert.equal(products.objectAt(0).name, 'Green Tea');
    assert.equal(products.objectAt(0).price, 3.11);
    assert.equal(products.objectAt(0).code, 'GR1');
    assert.equal(products.objectAt(0).image, 'green_tea.png');
    assert.equal(products.objectAt(0).quantity, 0);
  });
});
