import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponentClasses } from './map-component-classes.js';
import { mapComponentTemplates } from './map-component-templates.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponentClasses(options),
    ...mapComponentTemplates(options),
  ]);
}
