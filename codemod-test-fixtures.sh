#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./codemod-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

./codemod-test-fixture.sh \
  -a "--type addon" \
  ember-addon/javascript

./codemod-test-fixture.sh \
  -a "--type addon" \
  ember-addon/sass

./codemod-test-fixture.sh \
  -a "--type addon" \
  ember-addon/typescript

./codemod-test-fixture.sh \
  -a "--type app" \
  ember-app/javascript

./codemod-test-fixture.sh \
  -a "--type app --pod-path pods" \
  ember-app/pod-path

./codemod-test-fixture.sh \
  -a "--type app" \
  ember-app/sass

./codemod-test-fixture.sh \
  -a "--type app" \
  ember-app/typescript

./codemod-test-fixture.sh \
  -a "--type engine" \
  ember-engine/absolute-imports

./codemod-test-fixture.sh \
  -a "--type engine" \
  ember-engine/javascript

./codemod-test-fixture.sh \
  -a "--type engine" \
  ember-engine/relative-imports

./codemod-test-fixture.sh \
  -a "--type engine" \
  ember-engine/sass

./codemod-test-fixture.sh \
  -a "--type engine" \
  ember-engine/typescript
