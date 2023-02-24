import Service, { inject as service } from '@ember/service';
import ApiService from './api';

export default class FormService extends Service {
  @service declare api: ApiService;
}
