#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { runCodemod } from '../src/index.js';

// Provide a title to the process in `ps`
process.title = 'ember-codemod-pod-to-octane';

// Set codemod options
const { argv } = yargs(hideBin(process.argv))
  .option('root', {
    describe: 'Location of your Ember project',
    type: 'string',
  })
  .option('test', {
    default: false,
    describe: 'Do a test run?',
    type: 'boolean',
  })
  .option('type', {
    choices: ['addon', 'app', 'engine'],
    demandOption: true,
    describe: 'Type of your Ember project',
    type: 'string',
  });

const options = {
  projectRoot: argv['root'] ?? process.cwd(),
  projectType: argv['type'],
  testRun: argv['test'],
};

runCodemod(options);
