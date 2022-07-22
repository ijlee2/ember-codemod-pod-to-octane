export function migrateEmberEngine(options) {
  const { testRun } = options;

  if (testRun) {
    console.log('Engine - test run');

    return;
  }

  console.log('Engine - move files');
}
