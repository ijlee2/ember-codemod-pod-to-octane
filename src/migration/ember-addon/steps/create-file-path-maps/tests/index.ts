import type { FilePathMap, Options } from '../../../../../types/index.js';
import { migrationStrategyForComponents } from './components.js';

export function migrationStrategyForTestsFolder(options: Options): FilePathMap {
  return new Map([...migrationStrategyForComponents(options)]);
}
