import Model, { attr } from '@ember-data/model';

export default class ClinicianModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') middleName;
  @attr('string') phone;
}
