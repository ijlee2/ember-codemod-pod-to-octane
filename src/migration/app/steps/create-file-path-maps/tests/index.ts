import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents } from './map-components.js';
import { mapRoutes1 } from './map-routes-1.js';
import { mapRoutes2 } from './map-routes-2.js';
import { mapServices } from './map-services.js';

export function mapTestsFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponents(options),
    ...mapRoutes1(options),
    ...mapRoutes2(options),
    ...mapServices(options),
  ]);
}
