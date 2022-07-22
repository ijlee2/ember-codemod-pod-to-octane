import {
  migrateEmberAddon,
  migrateEmberApp,
  migrateEmberEngine,
} from './migration/index.js';

export function runCodemod(options) {
  switch (options.projectType) {
    case 'addon': {
      migrateEmberAddon(options);
      break;
    }

    case 'app': {
      migrateEmberApp(options);
      break;
    }

    case 'engine': {
      migrateEmberEngine(options);
      break;
    }

    default: {
      console.error(`Unknown project type: ${options.projectType}`);
    }
  }
}
