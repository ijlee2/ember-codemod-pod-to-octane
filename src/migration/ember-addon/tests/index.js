import { migrationStrategyForComponents } from './components.js';

export function migrationStrategyForTestsFolder(projectRoot) {
  return new Map([...migrationStrategyForComponents(projectRoot)]);
}
