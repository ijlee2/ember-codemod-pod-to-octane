import { migrationStrategyForComponentClasses } from './component-classes.js';
import { migrationStrategyForComponentStylesheets } from './component-stylesheets.js';
import { migrationStrategyForComponentTemplates } from './component-templates.js';
import { migrationStrategyForRouteAdapters } from './route-adapters.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteModels } from './route-models.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';
import { migrationStrategyForRouteSerializers } from './route-serializers.js';
import { migrationStrategyForRouteStylesheets } from './route-stylesheets.js';
import { migrationStrategyForRouteTemplates } from './route-templates.js';

export function migrationStrategyForAppFolder(projectRoot) {
  return new Map([
    ...migrationStrategyForComponentClasses(projectRoot),
    ...migrationStrategyForComponentStylesheets(projectRoot),
    ...migrationStrategyForComponentTemplates(projectRoot),
    ...migrationStrategyForRouteAdapters(projectRoot),
    ...migrationStrategyForRouteControllers(projectRoot),
    ...migrationStrategyForRouteModels(projectRoot),
    ...migrationStrategyForRouteRoutes(projectRoot),
    ...migrationStrategyForRouteSerializers(projectRoot),
    ...migrationStrategyForRouteStylesheets(projectRoot),
    ...migrationStrategyForRouteTemplates(projectRoot),
  ]);
}
