import Transform from '@ember-data/serializer/transform';
import { A } from '@ember/array';

export default class ArrayTransform extends Transform {
  deserialize(serialized) {
    return A(Array.isArray(serialized) ? serialized : []);
  }

  serialize(deserialized) {
    return A(Array.isArray(deserialized) ? deserialized : []);
  }
}
