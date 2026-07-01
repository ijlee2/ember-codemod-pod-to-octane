import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents1 } from './map-components-1.js';
import { mapRoutes } from './map-routes.js';
import { mapServices } from './map-services.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponents1(options),
    ...mapRoutes(options),
    ...mapServices(options),
  ]);
}
