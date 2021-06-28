import Service from '@ember/service';
import { inject as service } from '@ember/service';

const DUMMY_CLINICIAN_ID = 2;

export default class ClinicianManagerService extends Service {
  @service store;

  modelName = 'clinician';

  getClinician() {
    return this.store.peekRecord(this.modelName, DUMMY_CLINICIAN_ID)
      || this.store.findRecord(this.modelName, DUMMY_CLINICIAN_ID);
  }

  getClinicianId() {
    return DUMMY_CLINICIAN_ID;
  }
}
