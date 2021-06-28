import Transform from '@ember-data/serializer/transform';
import { typeOf } from '@ember/utils';

export default class ObjectTransform extends Transform {
  deserialize(serialized) {
    return (typeOf(serialized) === 'object') ? serialized : {};
  }

  serialize(deserialized) {
    return deserialized;
  }
}
