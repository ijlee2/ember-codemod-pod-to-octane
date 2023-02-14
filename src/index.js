import {
  migrateEmberAddon,
  migrateEmberApp,
  migrateEmberEngine,
} from './migration/index.js';

export function runCodemod(codemodOptions) {
  switch (codemodOptions.projectType) {
    case 'addon': {
      migrateEmberAddon(codemodOptions);
      break;
    }

    case 'app': {
      migrateEmberApp(codemodOptions);
      break;
    }

    case 'engine': {
      migrateEmberEngine(codemodOptions);
      break;
    }

    default: {
      console.error(`Unknown project type: ${codemodOptions.projectType}`);
    }
  }
}
