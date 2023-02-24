import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import ApiService from '../services/api';

export default class IndexRoute extends Route {
  @service declare api: ApiService;
}
