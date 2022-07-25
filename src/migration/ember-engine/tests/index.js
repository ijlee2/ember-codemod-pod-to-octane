import { migrationStrategyForComponents } from './components.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';

export function migrationStrategyForTestsFolder(options) {
  return new Map([
    ...migrationStrategyForComponents(options),
    ...migrationStrategyForRouteControllers(options),
    ...migrationStrategyForRouteRoutes(options),
  ]);
}
