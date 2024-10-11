import Route from '@ember/routing/route';

import type { ModelFrom } from '../../utils/routes';
import type { Product } from '../../utils/routes/products';
import type ProductsRoute from '../route';

export default class ProductsProductRoute extends Route {
  model(params: { id: string }): Product {
    const { id } = params;
    const products = this.modelFor('products') as ModelFrom<ProductsRoute>;

    const product = products.find((product) => product.id === id);

    if (!product) {
      throw new Error(`Could not find the product with ID ${id}.`);
    }

    return product;
  }
}

export type Model = ModelFrom<ProductsProductRoute>;
