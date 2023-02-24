import Service, { inject as service } from '@ember/service';

import ApiService from '@namespace/package-name/services/api';

export default class FormService extends Service {
  @service declare api: ApiService;
}
