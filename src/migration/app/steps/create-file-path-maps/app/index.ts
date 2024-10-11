import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponentClasses } from './map-component-classes.js';
import { mapComponentStylesheets } from './map-component-stylesheets.js';
import { mapComponentTemplates } from './map-component-templates.js';
import { mapRouteAdapters } from './map-route-adapters.js';
import { mapRouteControllers } from './map-route-controllers.js';
import { mapRouteModels } from './map-route-models.js';
import { mapRouteRoutes } from './map-route-routes.js';
import { mapRouteSerializers } from './map-route-serializers.js';
import { mapRouteStylesheets } from './map-route-stylesheets.js';
import { mapRouteTemplates } from './map-route-templates.js';
import { mapServices } from './map-services.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponentClasses(options),
    ...mapComponentStylesheets(options),
    ...mapComponentTemplates(options),
    ...mapRouteAdapters(options),
    ...mapRouteControllers(options),
    ...mapRouteModels(options),
    ...mapRouteRoutes(options),
    ...mapRouteSerializers(options),
    ...mapRouteStylesheets(options),
    ...mapRouteTemplates(options),
    ...mapServices(options),
  ]);
}
