import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class ReservationReservationWrapperComponent extends Component {
  @computed('args.steps.@each.isActive')
  get currentStep() {
    return this.args.steps && this.args.steps.findBy('isActive');
  }

  @computed('args.steps.[]', 'currentStep')
  get prevStep() {
    const { steps } = this.args;
    const step = steps.indexOf(this.currentStep);
    return step && steps.objectAt(step - 1);
  }
}
