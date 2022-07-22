import { migrationStrategyForComponentClasses } from './component-classes.js';
import { migrationStrategyForComponentStylesheets } from './component-stylesheets.js';
import { migrationStrategyForComponentTemplates } from './component-templates.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';
import { migrationStrategyForRouteStylesheets } from './route-stylesheets.js';
import { migrationStrategyForRouteTemplates } from './route-templates.js';

export function migrationStrategyForAddonFolder(projectRoot) {
  return new Map([
    ...migrationStrategyForComponentClasses(projectRoot),
    ...migrationStrategyForComponentStylesheets(projectRoot),
    ...migrationStrategyForComponentTemplates(projectRoot),
    ...migrationStrategyForRouteControllers(projectRoot),
    ...migrationStrategyForRouteRoutes(projectRoot),
    ...migrationStrategyForRouteStylesheets(projectRoot),
    ...migrationStrategyForRouteTemplates(projectRoot),
  ]);
}
