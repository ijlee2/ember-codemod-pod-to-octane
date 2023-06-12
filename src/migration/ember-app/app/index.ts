import type { FilePathMap, Options } from '../../../types/index.js';
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
import { migrationStrategyForServices } from './services.js';

export function migrationStrategyForAppFolder(options: Options): FilePathMap {
  return new Map([
    ...migrationStrategyForComponentClasses(options),
    ...migrationStrategyForComponentStylesheets(options),
    ...migrationStrategyForComponentTemplates(options),
    ...migrationStrategyForRouteAdapters(options),
    ...migrationStrategyForRouteControllers(options),
    ...migrationStrategyForRouteModels(options),
    ...migrationStrategyForRouteRoutes(options),
    ...migrationStrategyForRouteSerializers(options),
    ...migrationStrategyForRouteStylesheets(options),
    ...migrationStrategyForRouteTemplates(options),
    ...migrationStrategyForServices(options),
  ]);
}
