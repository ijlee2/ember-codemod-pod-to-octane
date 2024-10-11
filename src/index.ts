import {
  migrateApp,
  migrateEmberAddon,
  migrateEmberEngine,
} from './migration/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  switch (codemodOptions.projectType) {
    case 'app': {
      migrateApp(codemodOptions);
      break;
    }

    case 'engine': {
      migrateEmberEngine(codemodOptions);
      break;
    }

    case 'v1-addon': {
      migrateEmberAddon(codemodOptions);
      break;
    }
  }
}
