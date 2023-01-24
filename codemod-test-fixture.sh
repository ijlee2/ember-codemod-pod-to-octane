#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix the expected output of a test fixture after updating the source code
#    of ember-codemod-pod-to-octane. 
#
#  B. Usage
#
#    ./codemod-test-fixture.sh [OPTIONAL-FLAGS] <FIXTURE-NAME>
#
#    Step 1. Run the script to update the files in `tests/fixtures/<FIXTURE-NAME>/output`.
#
#      Choice a. Run the codemod without the optional arguments.
#
#        ./codemod-test-fixture.sh ember-addon/typescript
#
#      Choice b. Run the codemod with the optional arguments. (For named arguments,
#      do not include `=` between the flag and the value. Positional arguments must
#      appear at the end.)
#
#        ./codemod-test-fixture.sh -t "addon" ember-addon/typescript
#
#---------

# Read the named arguments
while getopts ":p:t:" flag
do
  case $flag in
    p) POD_PATH=$OPTARG;;
    t) TYPE=$OPTARG;;
  esac
done

# Read the positional arguments
FIXTURE=${@:$OPTIND:1}

if [ ! $FIXTURE ]
then
  echo "ERROR: Please specify the fixture name (e.g. ember-addon/typescript).\n"
  exit 1
elif [ ! -d "tests/fixtures/$FIXTURE/input" ]
then
  echo "ERROR: Input folder \`tests/fixtures/$FIXTURE/input\` does not exist.\n"
  exit 1
fi

rm -r "tests/fixtures/$FIXTURE/output"
cp -r "tests/fixtures/$FIXTURE/input" "tests/fixtures/$FIXTURE/output"

./bin/ember-codemod-pod-to-octane.js \
  --pod-path=$POD_PATH \
  --root="tests/fixtures/$FIXTURE/output" \
  --test=false \
  --type=$TYPE

echo "SUCCESS: Updated the output of $FIXTURE.\n"
