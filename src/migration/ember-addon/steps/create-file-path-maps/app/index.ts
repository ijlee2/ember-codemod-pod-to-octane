import type { FilePathMap, Options } from '../../../../../types/index.js';
import { migrationStrategyForComponentClasses } from './component-classes.js';
import { migrationStrategyForComponentStylesheets } from './component-stylesheets.js';
import { migrationStrategyForComponentTemplates } from './component-templates.js';

export function migrationStrategyForAppFolder(options: Options): FilePathMap {
  return new Map([
    ...migrationStrategyForComponentClasses(options),
    ...migrationStrategyForComponentStylesheets(options),
    ...migrationStrategyForComponentTemplates(options),
  ]);
}
