import {
  migrateEmberAddon,
  migrateEmberApp,
  migrateEmberEngine,
} from './migration/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  switch (codemodOptions.projectType) {
    case 'app': {
      migrateEmberApp(codemodOptions);
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
