import type Owner from '@ember/owner';
import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';

import type { ModelFrom } from '../utils/routes';
import type { Product } from '../utils/routes/products';
import type ProductsController from './controller';

export default class ProductsRoute extends Route {
  @service declare experiments: Services['experiments'];

  queryParams = {
    name: {
      refreshModel: true,
    },
    sortBy: {
      refreshModel: false,
    },
  };

  constructor(owner: Owner) {
    super(owner);

    this.experiments.decideVariant('nest-product-details');
  }

  model(): Product[] {
    return [];
  }

  resetController(controller: ProductsController) {
    controller.name = null;
    controller.sortBy = null;
  }
}

export type Model = ModelFrom<ProductsRoute>;
