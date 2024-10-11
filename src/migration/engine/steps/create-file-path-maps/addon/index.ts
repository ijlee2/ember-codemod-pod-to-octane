import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponentClasses } from './map-component-classes.js';
import { mapComponentStylesheets } from './map-component-stylesheets.js';
import { mapComponentTemplates } from './map-component-templates.js';
import { mapRouteControllers } from './map-route-controllers.js';
import { mapRouteRoutes } from './map-route-routes.js';
import { mapRouteStylesheets } from './map-route-stylesheets.js';
import { mapRouteTemplates } from './map-route-templates.js';

export function mapAddonFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponentClasses(options),
    ...mapComponentStylesheets(options),
    ...mapComponentTemplates(options),
    ...mapRouteControllers(options),
    ...mapRouteRoutes(options),
    ...mapRouteStylesheets(options),
    ...mapRouteTemplates(options),
  ]);
}
