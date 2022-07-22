export function migrateEmberAddon(options) {
  const { testRun } = options;

  if (testRun) {
    console.log('Addon - test run');

    return;
  }

  console.log('Addon - move files');
}
