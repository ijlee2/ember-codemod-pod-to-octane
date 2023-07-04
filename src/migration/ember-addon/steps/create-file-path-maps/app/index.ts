import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponentClasses } from './map-component-classes.js';
import { mapComponentStylesheets } from './map-component-stylesheets.js';
import { mapComponentTemplates } from './map-component-templates.js';

export function mapAppFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponentClasses(options),
    ...mapComponentStylesheets(options),
    ...mapComponentTemplates(options),
  ]);
}
