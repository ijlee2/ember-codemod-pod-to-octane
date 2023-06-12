import type { FilePathMap, Options } from '../../../types/index.js';
import { migrationStrategyForComponents } from './components.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';
import { migrationStrategyForServices } from './services.js';

export function migrationStrategyForTestsFolder(options: Options): FilePathMap {
  return new Map([
    ...migrationStrategyForComponents(options),
    ...migrationStrategyForRouteControllers(options),
    ...migrationStrategyForRouteRoutes(options),
    ...migrationStrategyForServices(options),
  ]);
}
