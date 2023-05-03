#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code of ember-codemod-pod-to-octane.
#
#  B. Usage
#
#    ./codemod-test-fixtures.sh
#
#---------

./codemod-test-fixture.sh -t "addon" ember-addon/javascript
./codemod-test-fixture.sh -t "addon" ember-addon/sass
./codemod-test-fixture.sh -t "addon" ember-addon/typescript
./codemod-test-fixture.sh -t "app" ember-app/javascript
./codemod-test-fixture.sh -t "app" -p "pods" ember-app/pod-path
./codemod-test-fixture.sh -t "app" ember-app/sass
./codemod-test-fixture.sh -t "app" ember-app/typescript
./codemod-test-fixture.sh -t "engine" ember-engine/absolute-imports
./codemod-test-fixture.sh -t "engine" ember-engine/javascript
./codemod-test-fixture.sh -t "engine" ember-engine/relative-imports
./codemod-test-fixture.sh -t "engine" ember-engine/sass
./codemod-test-fixture.sh -t "engine" ember-engine/typescript
