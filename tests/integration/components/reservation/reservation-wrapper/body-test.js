import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | reservation/reservation-wrapper/body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Reservation::ReservationWrapper::Body />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Reservation::ReservationWrapper::Body>
        template block text
      </Reservation::ReservationWrapper::Body>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});