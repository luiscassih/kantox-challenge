import { module, test } from 'qunit';
import { setupRenderingTest } from 'kshop-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('product', {
      name: 'Green Tea',
      price: 3.11,
      code: 'GR1',
      image: 'green_tea.png',
      quantity: 0,
    });

    await render(hbs`<Product @product={{this.product}} />`);

    assert.dom('.font-bold.text-xl').hasText('Green Tea');
    assert.dom('span.text-xl').hasText('£3.11');
    assert.dom('.quantity-selector').doesNotExist();
  });

  test('it renders with quantity-selector', async function (assert) {
    this.set('product', {
      name: 'Green Tea',
      price: 3.11,
      code: 'GR1',
      image: 'green_tea.png',
      quantity: 5,
    });

    await render(hbs`<Product @product={{this.product}} />`);

    assert.dom('.px-2.font-bold').exists();
    assert.dom('.px-2.font-bold').hasText('5');
  });
});
