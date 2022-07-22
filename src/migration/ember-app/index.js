export function migrateEmberApp(options) {
  const { testRun } = options;

  if (testRun) {
    console.log('App - test run');

    return;
  }

  console.log('App - move files');
}
