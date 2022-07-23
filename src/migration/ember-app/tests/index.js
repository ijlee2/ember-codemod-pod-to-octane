import { migrationStrategyForComponents } from './components.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';
import { migrationStrategyForServices } from './services.js';

export function migrationStrategyForTestsFolder(projectRoot) {
  return new Map([
    ...migrationStrategyForComponents(projectRoot),
    ...migrationStrategyForRouteControllers(projectRoot),
    ...migrationStrategyForRouteRoutes(projectRoot),
    ...migrationStrategyForServices(projectRoot),
  ]);
}
