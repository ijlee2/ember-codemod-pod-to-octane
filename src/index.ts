import { migrateApp } from './migration/app/index.js';
import { migrateV1Addon } from './migration/v1-addon/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  switch (codemodOptions.projectType) {
    case 'app': {
      migrateApp(codemodOptions);
      break;
    }

    case 'v1-addon': {
      migrateV1Addon(codemodOptions);
      break;
    }
  }
}
