import { sep } from 'node:path';

import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents1 } from './map-components-1.js';
import { mapComponents2 } from './map-components-2.js';
import { mapRoutes } from './map-routes.js';
import { mapServices } from './map-services.js';

export function mapAppFolder(options: Options): FilePathMap {
  const mapEntriesForComponents = [
    ...mapComponents1(options),
    ...mapComponents2(options),
  ];

  const filePathsForComponents = mapEntriesForComponents.map(
    ([oldFilePath]) => {
      return oldFilePath.replaceAll(sep, '/');
    },
  );

  return new Map([
    ...mapEntriesForComponents,
    ...mapRoutes(filePathsForComponents, options),
    ...mapServices(options),
  ]);
}
