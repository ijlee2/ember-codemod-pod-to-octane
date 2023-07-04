import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents } from './map-components.js';

export function mapTestsFolder(options: Options): FilePathMap {
  return new Map([...mapComponents(options)]);
}
