#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/engine/typescript/output"
cp -r "tests/fixtures/engine/typescript/input" "tests/fixtures/engine/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/engine/typescript/output" \
  --type v1-addon

# Update fixtures
rm -r "tests/fixtures/v1-addon/typescript/output"
cp -r "tests/fixtures/v1-addon/typescript/input" "tests/fixtures/v1-addon/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/v1-addon/typescript/output" \
  --type v1-addon

# Update fixtures
rm -r "tests/fixtures/app/javascript/output"
cp -r "tests/fixtures/app/javascript/input" "tests/fixtures/app/javascript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/app/javascript/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/app/pod-path/output"
cp -r "tests/fixtures/app/pod-path/input" "tests/fixtures/app/pod-path/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --pod-path pods \
  --root "tests/fixtures/app/pod-path/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/app/sass/output"
cp -r "tests/fixtures/app/sass/input" "tests/fixtures/app/sass/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/app/sass/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/app/typescript/output"
cp -r "tests/fixtures/app/typescript/input" "tests/fixtures/app/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/app/typescript/output" \
  --type app
