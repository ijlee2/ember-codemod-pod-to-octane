import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApiService from 'my-engine/services/api';

export default class IndexRoute extends Route {
  @service declare api: ApiService;
}
