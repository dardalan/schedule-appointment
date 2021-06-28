import Model, { attr } from '@ember-data/model';

export default class CptCodeModel extends Model {
  @attr('string') callToBook;
  @attr('string') description;
  @attr('string') rate;
  @attr('number') duration;
}
