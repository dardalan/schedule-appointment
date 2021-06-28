import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject, { action, get } from '@ember/object';
import { schedule } from '@ember/runloop';
import { isEmpty } from '@ember/utils';
import { capitalize } from '@ember/string';
import { pluralize } from 'ember-inflector';

const WIDGET_STEP_ENUM = {
  SERVICE: 'service',
  LOCATION: 'location',
};

export default class WidgetRoute extends Route {
  @service clinicianManager;
  @service router;

  get steps() {
    return this.generataWidgetSteps();
  }

  generataWidgetSteps() {
    return Object.keys(WIDGET_STEP_ENUM).map( (step, idx) =>
      EmberObject.create({
        id: idx + 1,
        isActive: false,
        route: WIDGET_STEP_ENUM[step],
        title: `Select ${capitalize(WIDGET_STEP_ENUM[step])}`,
        completedTitle: `${capitalize(WIDGET_STEP_ENUM[step])}`,
        loadingTitle: `${pluralize(WIDGET_STEP_ENUM[step])}`,
      })
    );
  }

  beforeModel() {
    // Let's assume for now that we have clinician always present for current user
    this.transitionTo('widget.clinician');
  }

  model() {
    // TODO: Add Parent Model
    return EmberObject.create({
      clinician: null,
      cptCodeId: null,
      locationId: null,
    });
  }

  setupController(...args) {
    super.setupController(...args);
    args[0].setProperties({ steps: this.steps });
  }

  setActiveStep(controller, routeName) {
    const steps = controller.get('steps');
    steps && steps.forEach(step => {
      step.set('isActive', step.route === routeName)
    });
  }

  getBaseRoute(targetName) {
    return targetName.replace(''.concat(this.routeName, '.'), '');
  }

  @action
  loading(transition) {
    const routeName = this.getBaseRoute(transition.targetName);
    const controller = this.controllerFor(this.routeName);
    const step = this.steps.findBy('route', routeName);

    if (isEmpty(step)) return false;

    controller.setProperties({
      isLoading: true,
      loadingTitle: get(step, 'loadingTitle')
    });
    this.setActiveStep(controller, get(step, 'route'));

    transition.promise.finally(() => {
      controller.setProperties({
        isLoading: false,
        loadingTitle: ''
      });
    });
  }

  @action
  didTransition() {
    schedule('afterRender', this, () => {
      const controller = this.controllerFor(this.routeName);
      this.setActiveStep(
        controller,
        this.getBaseRoute(this.router.currentRouteName)
      )
    })
  }
}
