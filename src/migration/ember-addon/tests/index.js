import { migrationStrategyForComponents } from './components.js';

export function migrationStrategyForTestsFolder(options) {
  return new Map([...migrationStrategyForComponents(options)]);
}
