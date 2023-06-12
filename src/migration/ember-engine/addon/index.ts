import type { FilePathMap, Options } from '../../../types/index.js';
import { migrationStrategyForComponentClasses } from './component-classes.js';
import { migrationStrategyForComponentStylesheets } from './component-stylesheets.js';
import { migrationStrategyForComponentTemplates } from './component-templates.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';
import { migrationStrategyForRouteStylesheets } from './route-stylesheets.js';
import { migrationStrategyForRouteTemplates } from './route-templates.js';

export function migrationStrategyForAddonFolder(options: Options): FilePathMap {
  return new Map([
    ...migrationStrategyForComponentClasses(options),
    ...migrationStrategyForComponentStylesheets(options),
    ...migrationStrategyForComponentTemplates(options),
    ...migrationStrategyForRouteControllers(options),
    ...migrationStrategyForRouteRoutes(options),
    ...migrationStrategyForRouteStylesheets(options),
    ...migrationStrategyForRouteTemplates(options),
  ]);
}
