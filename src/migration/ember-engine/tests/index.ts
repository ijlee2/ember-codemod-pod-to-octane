import type {
  FilePathMap,
  OptionsWithProjectName,
} from '../../../types/index.js';
import { migrationStrategyForComponents } from './components.js';
import { migrationStrategyForRouteControllers } from './route-controllers.js';
import { migrationStrategyForRouteRoutes } from './route-routes.js';

export function migrationStrategyForTestsFolder(
  options: OptionsWithProjectName,
): FilePathMap {
  return new Map([
    ...migrationStrategyForComponents(options),
    ...migrationStrategyForRouteControllers(options),
    ...migrationStrategyForRouteRoutes(options),
  ]);
}
