import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return camelize(key);
  }

  keyForRelationship(key) {
    return camelize(key);
  }
}
