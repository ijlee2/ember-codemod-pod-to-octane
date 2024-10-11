import { migrateApp, migrateV1Addon } from './migration/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  switch (codemodOptions.projectType) {
    case 'app': {
      migrateApp(codemodOptions);
      break;
    }

    case 'engine':
    case 'v1-addon': {
      migrateV1Addon(codemodOptions);
      break;
    }
  }
}
