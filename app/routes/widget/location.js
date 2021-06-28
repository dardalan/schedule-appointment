import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WidgetLocationRoute extends Route {
  @service clinicianManager;
  @service router;

  beforeModel() {
    const reservation = this.modelFor('widget');

    if (!reservation.cptCodeId) {
      this.transitionTo('widget.service');
    }
  }

  model() {
    const reservation = this.modelFor('widget');

    return this.store.query('office', {
      filter: {
        clinicianId: reservation.clinicianId,
        cptCodeId: reservation.cptCodeId
      }
    });
  }

  @action
  nextStep(property, cptCodeId, nextRoute) {
    this.modelFor('widget').set(property, cptCodeId);
    this.router.transitionTo('widget.'.concat(nextRoute));
  }
}
