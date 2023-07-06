import { module, test } from 'qunit';
import { setupRenderingTest } from 'kshop-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | toFixed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('number', 0.5);
    this.set('text', '0.5');

    await render(hbs`{{to-fixed this.number}}`);
    assert.dom(this.element).hasText('0.50');

    await render(hbs`{{to-fixed this.text}}`);
    assert.dom(this.element).hasText('');
  });
});
