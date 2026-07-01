import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents } from './map-components.js';
import { mapRouteControllers } from './map-route-controllers.js';
import { mapRouteRoutes } from './map-route-routes.js';
import { mapRouteTemplates } from './map-route-templates.js';
import { mapServices } from './map-services.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponents(options),
    ...mapRouteControllers(options),
    ...mapRouteRoutes(options),
    ...mapRouteTemplates(options),
    ...mapServices(options),
  ]);
}
