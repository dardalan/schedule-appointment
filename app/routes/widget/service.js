import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WidgetServiceRoute extends Route {
  @service router;

  model() {
    const reservation = this.modelFor('widget');

    return this.store.query('cpt-code', {
      filter: {
        clinicianId: reservation.clinician.id,
      }
    });
  }

  @action
  nextStep(property, cptCodeId, nextRoute) {
    this.modelFor('widget').set(property, cptCodeId);
    this.router.transitionTo('widget.'.concat(nextRoute));
  }
}
