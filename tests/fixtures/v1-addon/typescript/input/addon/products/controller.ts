import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import type { Model } from './route';

export default class ProductsController extends Controller {
  declare model: Model;

  queryParams = ['name', 'sortBy'];

  @tracked name: string | null = null;
  @tracked sortBy: string | null = null;
}
