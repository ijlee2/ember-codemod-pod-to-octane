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
rm -r "tests/fixtures/ember-addon/javascript/output"
cp -r "tests/fixtures/ember-addon/javascript/input" "tests/fixtures/ember-addon/javascript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-addon/javascript/output" \
  --type v1-addon

# Update fixtures
rm -r "tests/fixtures/ember-addon/sass/output"
cp -r "tests/fixtures/ember-addon/sass/input" "tests/fixtures/ember-addon/sass/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-addon/sass/output" \
  --type v1-addon

# Update fixtures
rm -r "tests/fixtures/ember-addon/typescript/output"
cp -r "tests/fixtures/ember-addon/typescript/input" "tests/fixtures/ember-addon/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-addon/typescript/output" \
  --type v1-addon

# Update fixtures
rm -r "tests/fixtures/ember-app/javascript/output"
cp -r "tests/fixtures/ember-app/javascript/input" "tests/fixtures/ember-app/javascript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-app/javascript/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/ember-app/pod-path/output"
cp -r "tests/fixtures/ember-app/pod-path/input" "tests/fixtures/ember-app/pod-path/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --pod-path pods \
  --root "tests/fixtures/ember-app/pod-path/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/ember-app/sass/output"
cp -r "tests/fixtures/ember-app/sass/input" "tests/fixtures/ember-app/sass/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-app/sass/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/ember-app/typescript/output"
cp -r "tests/fixtures/ember-app/typescript/input" "tests/fixtures/ember-app/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-app/typescript/output" \
  --type app

# Update fixtures
rm -r "tests/fixtures/ember-engine/absolute-imports/output"
cp -r "tests/fixtures/ember-engine/absolute-imports/input" "tests/fixtures/ember-engine/absolute-imports/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-engine/absolute-imports/output" \
  --type engine

# Update fixtures
rm -r "tests/fixtures/ember-engine/javascript/output"
cp -r "tests/fixtures/ember-engine/javascript/input" "tests/fixtures/ember-engine/javascript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-engine/javascript/output" \
  --type engine

# Update fixtures
rm -r "tests/fixtures/ember-engine/relative-imports/output"
cp -r "tests/fixtures/ember-engine/relative-imports/input" "tests/fixtures/ember-engine/relative-imports/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-engine/relative-imports/output" \
  --type engine

# Update fixtures
rm -r "tests/fixtures/ember-engine/sass/output"
cp -r "tests/fixtures/ember-engine/sass/input" "tests/fixtures/ember-engine/sass/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-engine/sass/output" \
  --type engine

# Update fixtures
rm -r "tests/fixtures/ember-engine/typescript/output"
cp -r "tests/fixtures/ember-engine/typescript/input" "tests/fixtures/ember-engine/typescript/output"

./dist/bin/ember-codemod-pod-to-octane.js \
  --root "tests/fixtures/ember-engine/typescript/output" \
  --type engine
