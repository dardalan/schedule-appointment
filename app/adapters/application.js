import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'schedule-appointment/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.apiHost;
  namespace = 'client-portal-api';

  headers = {
    'Accept': 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };
}
