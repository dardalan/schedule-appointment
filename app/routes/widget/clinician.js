import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WidgetClinicianRoute extends Route {
  @service clinicianManager;
  @service router;

  model() {
    return this.clinicianManager.getClinician();
  }

  afterModel(model) {
    this.nextStep('clinician', model, 'service');
  }

  @action
  nextStep(property, clinician, nextRoute) {
    this.modelFor('widget').set(property, clinician);
    this.router.transitionTo('widget.'.concat(nextRoute));
  }
}
