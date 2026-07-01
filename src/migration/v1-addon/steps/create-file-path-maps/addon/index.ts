import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents } from './map-components.js';
import { mapRoutes } from './map-routes.js';
import { mapServices } from './map-services.js';

export function mapAddonFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponents(options),
    ...mapRoutes(options),
    ...mapServices(options),
  ]);
}
