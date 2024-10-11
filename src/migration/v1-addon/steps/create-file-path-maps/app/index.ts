import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponentClasses } from './map-component-classes.js';
import { mapComponentTemplates } from './map-component-templates.js';
import { mapRouteControllers } from './map-route-controllers.js';
import { mapRouteRoutes } from './map-route-routes.js';
import { mapRouteTemplates } from './map-route-templates.js';
import { mapServices } from './map-services.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponentClasses(options),
    ...mapComponentTemplates(options),
    ...mapRouteControllers(options),
    ...mapRouteRoutes(options),
    ...mapRouteTemplates(options),
    ...mapServices(options),
  ]);
}
