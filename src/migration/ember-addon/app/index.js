import { migrationStrategyForComponentClasses } from './component-classes.js';
import { migrationStrategyForComponentStylesheets } from './component-stylesheets.js';
import { migrationStrategyForComponentTemplates } from './component-templates.js';

export function migrationStrategyForAppFolder(projectRoot) {
  return new Map([
    ...migrationStrategyForComponentClasses(projectRoot),
    ...migrationStrategyForComponentStylesheets(projectRoot),
    ...migrationStrategyForComponentTemplates(projectRoot),
  ]);
}
